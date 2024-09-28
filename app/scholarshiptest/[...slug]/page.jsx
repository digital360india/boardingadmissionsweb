"use client";
import React, { useState, useEffect, useContext } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { db } from "@/firebase/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { UserContext } from "@/userProvider";
import QuestionNavigation from "@/components/frontend/scholarshiptest/QuestionNavigation";
import Question from "@/components/frontend/scholarshiptest/Question";
import Statusbar from "@/components/frontend/scholarshiptest/Statusbar";
import QuestionPalatte from "@/components/frontend/scholarshiptest/QuestionPalatte";

const TestPage = () => {
  const [time, setTime] = useState(20 * 60);
  const [responses, setResponses] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userDetails, setUserDetails] = useState({
    email: "",
    phone: "",
    name: "",
  });
  const [finalScore, setFinalScore] = useState(null);
  const [showResultForm, setShowResultForm] = useState(false);
  const router = useRouter();
  const { user } = useContext(UserContext);
  const [testQuestions, setTestQuestions] = useState([]);
  const [testDetails, setTestDetails] = useState([]);
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const categoryToDocId = {
    primary: "AWuwMWkFlshETmPD2qga",
    secondary: "6gNGLbJtpX1TMwnqXNgF",
    senior: "6gNGLbJtpX1TMwnqXNgF",
  };

  const [statusCounts, setStatusCounts] = useState({
    answered: [],
    notAnswered: [],
    notVisited: [],
    markedForReview: [],
    answeredAndMarkedForReview: [],
  });

  useEffect(() => {
    const fetchTestQuestions = async () => {
      const docId = categoryToDocId[category];
      const testDocRef = doc(db, "tests", docId);
      const testDoc = await getDoc(testDocRef);

      if (testDoc.exists()) {
        const testData = testDoc.data();
        setTestDetails(testData);
        setTime(testData.duration ? testData.duration * 60 : 0);
        const questionIds = testData.test;

        const questionsPromises = questionIds.map(async (questionId) => {
          const questionDocRef = doc(db, "questions", questionId);
          const questionDoc = await getDoc(questionDocRef);
          return questionDoc.exists() ? questionDoc.data() : null;
        });

        const questions = await Promise.all(questionsPromises);
        const validQuestions = questions.filter(Boolean);

        setTestQuestions(validQuestions);

        const questionIdsArray = validQuestions.map((question) => question.id);

        setStatusCounts((prevCounts) => ({
          ...prevCounts,
          notVisited: questionIdsArray,
          notAnswered: questionIdsArray,
        }));
      } else {
        console.error("No such document!");
      }
    };

    fetchTestQuestions();
  }, [category]);

  const calculateScore = () => {
    return testQuestions.reduce((score, question) => {
      if (responses[question.questionID] === question.answer) {
        return score + 1;
      }
      return score;
    }, 0);
  };

  const generateRedemptionCode = async () => {
    const code = `REDEEM-${Math.random().toString(36).substr(2, 9)}`;
    await setDoc(doc(db, "redemptionCodes", code), {
      redeemed: false,
    });
    return code;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    router.push("/testcompletion");
    if (userDetails.email && userDetails.phone && userDetails.name) {
      await setDoc(doc(db, "userDetails", user.uid), {
        ...userDetails,
        finalScore,
        timestamp: new Date(),
      });

      router.push("/testcompletion");
    } else {
      alert("Please fill out all fields.");
    }
  };

  useEffect(() => {
    if (time === 0 && !isSubmitting) {
      handleSubmit();
    }

    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [time, isSubmitting]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return (
      <div className="flex w-full justify-between px-[25px] py-4">
        <div>
          <p>{String(hours).padStart(2, "0")}</p>
          <p className="text-[16px] text-[#075D70]">Hours</p>
        </div>
        <div>
          <p>{String(minutes).padStart(2, "0")}</p>
          <p className="text-[16px] text-[#075D70]">Minutes</p>
        </div>
        <div>
          <p>{String(secs).padStart(2, "0")}</p>
          <p className="text-[16px] text-[#075D70]">Seconds</p>
        </div>
      </div>
    );
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) =>
      Math.min(prevIndex + 1, testQuestions.length - 1)
    );
  };

  const prevQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleQuestionNavigation = (index) => {
    const currentQuestionID = testQuestions[index].id;
    setCurrentQuestionIndex(index);

    if (statusCounts.notVisited.includes(currentQuestionID)) {
      setStatusCounts((prevCounts) => ({
        ...prevCounts,
        notVisited: prevCounts.notVisited.filter((id) => id !== currentQuestionID),
      }));
    }
  };

  const handleOptionChange = (questionID, selectedOption) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionID]: selectedOption,
    }));

    setStatusCounts((prevCounts) => {
      const isAlreadyAnswered = prevCounts.answered.includes(questionID);
      const isMarkedForReview = prevCounts.markedForReview.includes(questionID);

      if (!isAlreadyAnswered) {
        return {
          ...prevCounts,
          answered: [...prevCounts.answered, questionID],
          notAnswered: prevCounts.notAnswered.filter((id) => id !== questionID),
          answeredAndMarkedForReview: isMarkedForReview
            ? [...prevCounts.answeredAndMarkedForReview, questionID]
            : prevCounts.answeredAndMarkedForReview,
        };
      }

      return prevCounts;
    });
  };

  const markForReview = () => {
    const currentQuestionID = testQuestions[currentQuestionIndex].id;

    setStatusCounts((prevCounts) => ({
      ...prevCounts,
      markedForReview: prevCounts.markedForReview.includes(currentQuestionID)
        ? prevCounts.markedForReview
        : [...prevCounts.markedForReview, currentQuestionID],
    }));

    nextQuestion();
  };

  const clearResponse = () => {
    const currentQuestionID = testQuestions[currentQuestionIndex].id;

    setResponses((prevResponses) => {
      const updatedResponses = { ...prevResponses };
      delete updatedResponses[currentQuestionID];
      return updatedResponses;
    });

    setStatusCounts((prevCounts) => {
      const isMarkedForReview = prevCounts.markedForReview.includes(currentQuestionID);

      return {
        ...prevCounts,
        answered: prevCounts.answered.filter((id) => id !== currentQuestionID),
        notAnswered: [...prevCounts.notAnswered, currentQuestionID],
        markedForReview: isMarkedForReview
          ? prevCounts.markedForReview.filter((id) => id !== currentQuestionID)
          : prevCounts.markedForReview,
        answeredAndMarkedForReview: isMarkedForReview
          ? prevCounts.answeredAndMarkedForReview.filter(
              (id) => id !== currentQuestionID
            )
          : prevCounts.answeredAndMarkedForReview,
      };
    });
  };

  const handleSubmit = async () => {
    if (Object.keys(responses).length < testQuestions.length) {
      alert("Please answer all questions before submitting.");
      return;
    }

    const score = calculateScore();
    const redemptionCode = await generateRedemptionCode();

    setFinalScore(score);
    setIsSubmitting(true);
    setShowResultForm(true);

    console.log("Your final score:", score);
    console.log("Your redemption code:", redemptionCode);
  };

  const currentQuestionID = testQuestions[currentQuestionIndex]?.id;
  const isOptionSelected = responses[currentQuestionID] !== undefined;


  return (
    <div className="">
      <div className="">
        {!showResultForm ? (
          <>
            <div className="flex h-[100px]">
              <p className="text-[24px] bg-[#075D70] w-[70vw]  font-extrabold px-9 text-white pt-12 ">
                {testDetails.testTitle}
              </p>

              <div className="text-center bg-[#F8F8F8] w-[25vw] rounded-br-md border-2 border-background05">
                <p className="text-[30px] font-semibold text-[#075D7080]">
                  {formatTime(time)}
                </p>
              </div>
            </div>

            <div className="flex my-8">
              <div className="w-[70vw] px-9 h-[77vh] flex flex-col justify-between">
                <div>
                  {testQuestions.length > 0 && (
                    <>
                      <Question
                        currentQuestion={testQuestions[currentQuestionIndex]}
                        responses={responses}
                        handleOptionChange={handleOptionChange}
                      />
                    </>
                  )}
                </div>

                <div className="flex justify-between">
                  <div className="w-[30vw] flex justify-between">
                    <button
                      onClick={markForReview}
                      className="bg-background05 text-white py-2 px-4 rounded-lg shadow-md "
                    >
                      Mark for review and Next
                    </button>
                    <button
                      onClick={clearResponse}
                      disabled={!isOptionSelected} // Disable button if no option is selected
                      className={`bg-background05 text-white py-2 px-4 rounded-lg shadow-md ${
                        !isOptionSelected ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    >
                      Clear Response
                    </button>
                  </div>
                  <QuestionNavigation
                    currentQuestionIndex={currentQuestionIndex}
                    totalQuestions={testQuestions.length}
                    prevQuestion={prevQuestion}
                    nextQuestion={nextQuestion}
                  />
                </div>
              </div>
              <div className="bg-[#F8F8F8] w-[25vw] rounded-md border-2 border-background05 px-2 py-3 flex flex-col justify-between">
                <Statusbar statusCounts={statusCounts} />

                <QuestionPalatte
                  handleQuestionNavigation={handleQuestionNavigation}
                  testQuestions={testQuestions}
                  responses={responses}
                  statusCounts={statusCounts}
                  setCurrentQuestionIndex={setCurrentQuestionIndex}
                />

                <button
                  onClick={handleSubmit}
                  className={`bg-gradient-to-r from-blue-500 to-teal-500 text-white py-3 px-8 rounded-lg shadow-lg transition-colors ${
                    currentQuestionIndex === testQuestions.length - 1
                      ? "hover:from-blue-600 hover:to-teal-600"
                      : "opacity-50 cursor-not-allowed"
                  }`}
                  disabled={currentQuestionIndex !== testQuestions.length - 1}
                >
                  Submit Test
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full border border-gray-200">
            <p className="text-xl font-semibold text-center mb-4">
              Get your Result
            </p>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={userDetails.name}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, name: e.target.value })
                  }
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={userDetails.email}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, email: e.target.value })
                  }
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={userDetails.phone}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, phone: e.target.value })
                  }
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-3 px-8 rounded-lg shadow-lg hover:from-blue-600 hover:to-teal-600 transition-colors"
              >
                View Full Result
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestPage;

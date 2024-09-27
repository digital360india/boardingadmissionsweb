"use client";
import React, { useState, useEffect, useContext } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { db } from "@/firebase/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { UserContext } from "@/userProvider";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import TestScreen from "@/components/frontend/TestScreen";

const TestPage = () => {
  // Initial states
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
    answered: 0,
    notAnswered: testQuestions.length,
    notVisited: testQuestions.length,
    markedForReview: [], // Change from number to array
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
        setTestQuestions(questions.filter(Boolean));

        // Update status counts when questions are fetched
        setStatusCounts({
          ...statusCounts,
          notAnswered: questions.length,
          notVisited: questions.length,
        });
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

    if (user) {
      await setDoc(doc(db, "users", user.uid), {
        responses,
        score,
        redemptionCode,
        timestamp: new Date(),
      });
    }
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

  // Timer logic
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

  const handleOptionChange = (questionID, selectedOption) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionID]: selectedOption,
    }));

    const answeredCount = Object.keys(responses).length + 1;

    const isMarkedForReview = statusCounts.markedForReview.includes(questionID);

    setStatusCounts((prevCounts) => ({
      ...prevCounts,
      answered: answeredCount,
      notAnswered: testQuestions.length - answeredCount,
      answeredAndMarkedForReview: isMarkedForReview
        ? prevCounts.answeredAndMarkedForReview + 1
        : prevCounts.answeredAndMarkedForReview,
    }));
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
    setCurrentQuestionIndex(index);

    // If the question is being visited for the first time
    if (statusCounts.notVisited > 0 && !responses[testQuestions[index].id]) {
      setStatusCounts((prevCounts) => ({
        ...prevCounts,
        notVisited: prevCounts.notVisited - 1,
      }));
    }
  };

  const markForReview = () => {
    const currentQuestionID = testQuestions[currentQuestionIndex].id;

    setStatusCounts((prevCounts) => ({
      ...prevCounts,
      markedForReview: prevCounts.markedForReview.includes(currentQuestionID)
        ? prevCounts.markedForReview
        : [...prevCounts.markedForReview, currentQuestionID],
    }));

    nextQuestion(); // Move to the next question after marking
  };

  const clearResponse = () => {
    const currentQuestionID = testQuestions[currentQuestionIndex].id;
    setResponses((prevResponses) => {
      const updatedResponses = { ...prevResponses };
      delete updatedResponses[currentQuestionID];
      return updatedResponses;
    });

    setStatusCounts((prevCounts) => ({
      ...prevCounts,
      answered: prevCounts.answered - 1,
      notAnswered: prevCounts.notAnswered + 1,
    }));
  };

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
                      <div className="space-y-6">
                        <div className="flex justify-between">
                          <p className="text-[20px] text-background05 font-semibold">
                            Question {testQuestions[currentQuestionIndex].sno}
                          </p>
                          <div>
                            <p></p>
                            <p className="text-[#4BB53A] font-semibold space-x-2">
                              <span>Marks:</span>
                              <span className="text-background05">
                                {testQuestions[currentQuestionIndex].totalmarks}
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="space-y-8 h-[60vh]">
                          <p className="text-[18px]  max-h-[184px] overflow-y-scroll scrollbar-hide">
                            {testQuestions[currentQuestionIndex].question}
                          </p>
                          <ul className="space-y-4">
                            {Object.entries(
                              testQuestions[currentQuestionIndex].answers
                            ).map(([key, option], i) => (
                              <li
                                key={key}
                                className="flex items-center space-x-3"
                              >
                                <input
                                  type="radio"
                                  name={`question${testQuestions[currentQuestionIndex].id}`}
                                  value={option}
                                  checked={
                                    responses[
                                      testQuestions[currentQuestionIndex].id
                                    ] === option
                                  }
                                  onChange={() =>
                                    handleOptionChange(
                                      testQuestions[currentQuestionIndex].id,
                                      option
                                    )
                                  }
                                  className="form-radio h-5 w-5 text-blue-500"
                                />
                                <label className="text-gray-700">
                                  {option}
                                </label>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Question Navigation */}

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
                      className="bg-background05 text-white py-2 px-4 rounded-lg shadow-md"
                    >
                      Clear Response
                    </button>
                  </div>
                  <div className="flex w-[15vw] text-[18px] font-medium justify-between">
                    {currentQuestionIndex > 0 && (
                      <button
                        onClick={prevQuestion}
                        className="text-background05 flex items-center"
                      >
                        <AiFillCaretLeft />
                        <span>Previous</span>
                      </button>
                    )}
                    {currentQuestionIndex < testQuestions.length - 1 && (
                      <button
                        onClick={nextQuestion}
                        className="text-background05 flex items-center"
                      >
                        <span>Next</span>
                        <AiFillCaretRight />
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <div className="bg-[#F8F8F8] w-[25vw] rounded-md border-2 border-background05 px-2 py-3 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex gap-16">
                    <div className="flex gap-4 items-center">
                      <p className="bg-[#4BB53A] w-8 h-8 flex justify-center text-white items-center rounded-full">
                        {statusCounts.answered}
                      </p>
                      <p>Answered</p>
                    </div>
                    <div className="flex gap-4 items-center">
                      <p className="bg-[#CB0000] w-8 h-8 flex justify-center text-white items-center rounded-full">
                        {statusCounts.notAnswered}
                      </p>
                      <p>Not Answered</p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex gap-4 items-center">
                      <p className="border border-background05 text-background05 w-8 h-8 flex justify-center  items-center rounded-full">
                        {statusCounts.notVisited}
                      </p>
                      <p>Not Visited</p>
                    </div>
                    <div className="flex gap-4 items-center">
                      <p className="bg-[#E99202] w-8 h-8 flex justify-center text-white items-center rounded-full">
                        {statusCounts.markedForReview}
                      </p>
                      <p>Mark for Review</p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex gap-4 items-center">
                      <p className="bg-[#FCA311] w-8 h-8 flex justify-center text-white items-center rounded-full">
                        {statusCounts.answeredAndMarkedForReview}
                      </p>
                      <p>Answered and mark for review</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p>Questions Palette</p>
                  <div className="grid grid-cols-5 gap-2">
                    {testQuestions.map((question, index) => {
                      let statusClass = "";

                      const currentQuestionID = question.id;

                      if (responses[currentQuestionID]) {
                        if (
                          statusCounts.markedForReview.includes(
                            currentQuestionID
                          )
                        ) {
                          statusClass = "bg-[#FCA311] text-white"; // Answered and marked for review
                        } else {
                          statusClass = "bg-[#4BB53A] text-white"; // Answered
                        }
                      } else if (
                        statusCounts.markedForReview.includes(currentQuestionID)
                      ) {
                        statusClass = "bg-[#E99202] text-white"; // Marked for review
                      } else {
                        statusClass =
                          "border border-background05 text-background05"; // Not Visited
                      }

                      return (
                        <button
                          key={index}
                          className={`w-10 h-10 flex justify-center items-center rounded-full ${statusClass}`}
                          onClick={() => setCurrentQuestionIndex(index)}
                        >
                          {index + 1}
                        </button>
                      );
                    })}
                  </div>
                </div>
                {/* <TestScreen totalQuestions={testQuestions} /> */}

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

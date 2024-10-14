"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { db } from "@/firebase/firebase";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import QuestionNavigation from "@/components/frontend/scholarshiptest/QuestionNavigation";
import Question from "@/components/frontend/scholarshiptest/Question";
import QuestionPalatte from "@/components/frontend/scholarshiptest/QuestionPalatte";
import ResultForm from "@/components/frontend/scholarshiptest/ResultForm";
import Statusbar from "@/components/frontend/scholarshiptest/StatusBar";
import { FaChevronRight } from "react-icons/fa";
import { Router } from "next/router";

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
  const [showResultForm, setShowResultForm] = useState(false);
  const router = useRouter();
  const [testQuestions, setTestQuestions] = useState([]);
  const [testDetails, setTestDetails] = useState([]);
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const categoryToDocId = {
    primary: "AWuwMWkFlshETmPD2qga",
    secondary: "6gNGLbJtpX1TMwnqXNgF",
    senior: "JAfTNak4ylz7QoptNkKa",
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
      <div className="flex w-full justify-between px-1 lg:px-[25px] py-4">
        <div>
          <p>{String(hours).padStart(2, "0")}</p>
          <p className="hidden md:block text-[14px] lg:text-[16px] text-[#075D70]">
            Hours
          </p>
          <p className="md:hidden text-[14px] lg:text-[16px] text-[#075D70]">
            HH
          </p>
        </div>
        <div>
          <p>{String(minutes).padStart(2, "0")}</p>
          <p className="hidden md:block text-[14px] lg:text-[16px] text-[#075D70]">
            Minutes
          </p>
          <p className="md:hidden text-[14px] lg:text-[16px] text-[#075D70]">
            MM
          </p>
        </div>
        <div>
          <p>{String(secs).padStart(2, "0")}</p>
          <p className=" hidden md:block text-[14px] lg:text-[16px] text-[#075D70]">
            Seconds
          </p>
          <p className="md:hidden text-[14px] lg:text-[16px] text-[#075D70]">
            SS
          </p>
        </div>
      </div>
    );
  };

const nextQuestion = () => {
  const currentQuestionID = testQuestions[currentQuestionIndex].id;

  if (statusCounts.notVisited.includes(currentQuestionID)) {
    setStatusCounts((prevCounts) => ({
      ...prevCounts,
      notVisited: prevCounts.notVisited.filter((id) => id !== currentQuestionID),
    }));
  }

  setCurrentQuestionIndex((prevIndex) =>
    Math.min(prevIndex + 1, testQuestions.length - 1)
  );
};

const prevQuestion = () => {
  const currentQuestionID = testQuestions[currentQuestionIndex].id;

  if (statusCounts.notVisited.includes(currentQuestionID)) {
    setStatusCounts((prevCounts) => ({
      ...prevCounts,
      notVisited: prevCounts.notVisited.filter((id) => id !== currentQuestionID),
    }));
  }

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
      const isMarkedForReview =
        prevCounts.markedForReview.includes(currentQuestionID);

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
  const [resultData, setResultData] = useState([]);
  const [testScore, setTestScore] = useState(0);
  const [timeTaken, setTimeTaken] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to submit the test?"
    );

    if (isConfirmed) {
      const result = testQuestions.map((question) => ({
        questionID: question.id,
        questionText: question.question,
        selectedAnswer: responses[question.id] || "",
        correctAnswer: question.correctAnswer,
        marks: Number(question.totalmarks),
      }));

      const totalScore = result.reduce((score, question) => {
        if (question.selectedAnswer === question.correctAnswer) {
          return score + question.marks;
        }
        return score;
      }, 0);

      const totalTime = testDetails.duration * 60;
      const timeTaken = totalTime - time;

      setTimeTaken(timeTaken);
      setResultData(result);
      setTestScore(totalScore);
      setIsSubmitting(true);
      setShowResultForm(true);
    } else {
      console.log("Submission cancelled by user.");
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (userDetails.email && userDetails.phone && userDetails.name) {
      try {
        const docRef = await addDoc(collection(db, "leads"), {
          name: userDetails.name,
          email: userDetails.email,
          phonenumber: userDetails.phone,
          resultData: resultData,
          score: testScore,
          timeTaken: timeTaken,
          category: categoryToDocId[category],
          timestamp: new Date(),
        });

        await updateDoc(docRef, {
          id: docRef.id,
        });

        router.push(`/testcompletion/${docRef.id}`);
      } catch (error) {
        console.error("Error saving lead data: ", error);
        alert("An error occurred while saving your data.");
      }
    } else {
      alert("Please fill out all fields.");
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const currentQuestionID = testQuestions[currentQuestionIndex]?.id;
  const isOptionSelected = responses[currentQuestionID] !== undefined;
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen((prev) => !prev);
  };

  const [examSubmitted, setExamSubmitted] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (!examSubmitted) {
        event.preventDefault();
        event.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [examSubmitted]);

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (!examSubmitted) {
        if (
          !confirm("You have unsaved changes. Are you sure you want to leave?")
        ) {
          throw "Route change aborted.";
        }
      }
    };

    Router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      Router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  const submitExam = () => {
    handleSubmit();
    setExamSubmitted(true);
  };

  return (
    <div className="">
      <div className="">
        {!showResultForm ? (
          <>
            <div className="flex md:h-[100px]">
              <p className="text-[20px] md:text-[24px] bg-[#075D70] w-[70vw] font-bold px-9 text-white py-2 md:pt-12 ">
                {testDetails.testTitle}
              </p>

              <div className="text-center bg-[#F8F8F8] w-[25vw] rounded-br-md border-2 border-background05">
                <p className="text-[14px] md:text-[22px] lg:text-[30px] font-semibold text-[#075D70]">
                  {formatTime(time)}
                </p>
              </div>
            </div>

            <div className="flex my-8 relative">
              <div className="w-[90vw] md:w-[70vw] px-9 min-h-[70vh] max-h-[100vh] md:min-h-[77vh] md:max-h-[80vh] flex flex-col justify-between">
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

                <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-0 md:justify-between">
                  <div className="xl:w-[30vw] flex flex-col md:flex-row justify-between gap-2">
                    <button
                      onClick={markForReview}
                      className="border border-background05 text-background05 py-2 px-4 rounded-lg shadow-md "
                    >
                      Mark for review and Next
                    </button>
                    <button
                      onClick={clearResponse}
                      disabled={!isOptionSelected}
                      className={`  py-2 px-4 rounded-lg shadow-md ${
                        !isOptionSelected
                          ? "opacity-50 cursor-not-allowed bg-gray-300 text-gray-1000 border border-gray-900"
                          : "border border-background05 text-background05"
                      }`}
                    >
                      Clear Response
                    </button>
                    <button
                      onClick={submitExam}
                      className="md:hidden bg-background05 text-white py-2 px-4 rounded-lg shadow-md"
                    >
                      Submit Test
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

              <button
                onClick={togglePopup}
                className="md:hidden bg-background05 text-white p-3 rounded-lg absolute top-[50%] right-0"
              >
                <FaChevronRight />
              </button>

              {isPopupOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                  <div className="bg-[#F8F8F8] w-[90vw] md:w-[25vw] rounded-md border-2 border-background05 p-4 flex flex-col h-full justify-between relative">
                    <button
                      onClick={togglePopup}
                      className="absolute top-2 right-2 text-xl text-black"
                    >
                      &times;
                    </button>

                    <Statusbar statusCounts={statusCounts} />

                    <QuestionPalatte
                      handleQuestionNavigation={handleQuestionNavigation}
                      testQuestions={testQuestions}
                      responses={responses}
                      statusCounts={statusCounts}
                      setCurrentQuestionIndex={setCurrentQuestionIndex}
                    />
                    <div className="w-full text-center">
                      <button
                        onClick={submitExam}
                        className="bg-background05 text-white xl:py-3 py-1 px-2 xl:px-8 rounded-lg shadow-lg md:w-[160px] md:h-[30px] xl:h-[47px]"
                      >
                        Submit Test
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <div className="hidden md:flex bg-[#F8F8F8] w-[25vw] rounded-md border-2 border-background05 p-4 flex flex-col justify-between">
                <Statusbar statusCounts={statusCounts} />

                <QuestionPalatte
                  handleQuestionNavigation={handleQuestionNavigation}
                  testQuestions={testQuestions}
                  responses={responses}
                  statusCounts={statusCounts}
                  setCurrentQuestionIndex={setCurrentQuestionIndex}
                />
                <div className="w-full text-center">
                  <button
                    onClick={submitExam}
                    className="bg-background05  text-white xl:py-3 py-1 px-2 xl:px-8 rounded-lg shadow-lg md:w-[160px] md:h-[30px] xl:h-[47px]"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="w-[100%] h-[100vh] flex items-center justify-center">
            <ResultForm
              userDetails={userDetails}
              setUserDetails={setUserDetails}
              handleFormSubmit={handleFormSubmit}
              loading={loading}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TestPage;

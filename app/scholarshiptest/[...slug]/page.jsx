"use client";
import React, { useState, useEffect, useContext } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { db } from "@/firebase/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { UserContext } from "@/userProvider";
import QuestionNavigation from "@/components/frontend/scholarshiptest/QuestionNavigation";
import Question from "@/components/frontend/scholarshiptest/Question";
import QuestionPalatte from "@/components/frontend/scholarshiptest/QuestionPalatte";
import ResultForm from "@/components/frontend/scholarshiptest/ResultForm";
import Statusbar from "@/components/frontend/scholarshiptest/StatusBar";
import { PDFDownloadLink } from "@react-pdf/renderer";
import TestPDF from "@/components/frontend/TestPDF";

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
    const [resultData, setResultData] = useState([]); // To store result data

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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (userDetails.email && userDetails.phone && userDetails.name) {
        console.log(userDetails);
        
        // Create the PDF document
        const pdfBlob = await new Promise((resolve) => {
            const blob = new Blob(
                [<TestPDF result={resultData} totalScore={finalScore} />],
                { type: 'application/pdf' }
            );
            resolve(blob);
        });

        // Create a download link
        const url = URL.createObjectURL(pdfBlob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'test_results.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        // Send a greeting message via WhatsApp
        const message = `Hello ${userDetails.name}, your test results are ready!`;
        const encodedMessage = encodeURIComponent(message);
        const phoneNumber = userDetails.phone; // Make sure the phone number is in the right format
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');

        // Redirect to test completion page
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
        notVisited: prevCounts.notVisited.filter(
          (id) => id !== currentQuestionID
        ),
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

  const handleSubmit = async () => {
    const result = testQuestions.map((question) => ({
      questionID: question.id,
      questionText: question.question,
      selectedAnswer: responses[question.id] || "", // User's selected answer
      correctAnswer: question.correctAnswer, // The correct answer from the testQuestions
      marks: Number(question.totalmarks), // Ensure marks are numbers
    }));

    // Calculate total score
    const totalScore = result.reduce((score, question) => {
      console.log(`Checking question ID: ${question.questionID}`);
      console.log(
        `Selected Answer: ${question.selectedAnswer}, Correct Answer: ${question.correctAnswer}`
      );

      // Compare selected answer with the correct answer
      if (question.selectedAnswer === question.correctAnswer) {
        console.log(`Correct! Adding ${question.marks} marks.`);
        return score + question.marks; // Add the question marks if the answer is correct
      } else {
        console.log(`Incorrect! No marks added.`);
      }

      return score; // No change in score if the answer is incorrect
    }, 0);

    console.log("Test submission details:", result);
    console.log("Total Score:", totalScore);

    setResultData(result);
    setFinalScore(totalScore);

    // Show the form to capture user details
    setShowResultForm(true);
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
                      disabled={!isOptionSelected} 
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
              <div className="bg-[#F8F8F8] w-[25vw] rounded-md border-2 border-background05 p-4 flex flex-col justify-between">
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
                    onClick={handleSubmit}
                    className="bg-background05 text-white py-3 px-8 rounded-lg shadow-lg w-[160px] h-[47px]"
                  >
                    Submit Test
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
            />
          
          </div>
        )}
      </div>
    </div>
  );
};

export default TestPage;
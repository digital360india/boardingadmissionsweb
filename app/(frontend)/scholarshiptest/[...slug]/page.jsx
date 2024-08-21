"use client";
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { db } from "@/firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import { UserContext } from "@/userProvider";

const TestPage = () => {
  const [time, setTime] = useState(20 * 60); // 20 minutes in seconds
  const [responses, setResponses] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const router = useRouter();
  const { user } = useContext(UserContext);

  const testQuestions = [
    {
      questionID: 1,
      question: "What is the capital of France?",
      answer: "Paris",
      options: ["Paris", "London", "Berlin", "Madrid"],
    },
    {
      questionID: 2,
      question: "What is 2 + 2?",
      answer: "4",
      options: ["3", "4", "5", "6"],
    },
    {
      questionID: 3,
      question: "Which planet is known as the Red Planet?",
      answer: "Mars",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
    },
    {
      questionID: 4,
      question: "What is the largest ocean on Earth?",
      answer: "Pacific Ocean",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Arctic Ocean",
        "Pacific Ocean",
      ],
    },
    {
      questionID: 5,
      question: 'Who wrote "To Kill a Mockingbird"?',
      answer: "Harper Lee",
      options: [
        "Harper Lee",
        "Mark Twain",
        "Ernest Hemingway",
        "F. Scott Fitzgerald",
      ],
    },
  ];

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

    if (user) {
      // Save user responses and score to Firestore
      await setDoc(doc(db, "users", user.uid), {
        responses,
        score,
        redemptionCode,
        timestamp: new Date(),
      });

      console.log("User responses:", responses);
      console.log("Score:", score);
      console.log("Redemption Code:", redemptionCode);

      // Redirect to completion page
      router.push("/testcompletion");
    } else {
      console.error("No user is logged in");
    }
  };

  // Timer function
  useEffect(() => {
    if (time === 0) {
      handleSubmit(); // Automatically submit when time is up
      return;
    }

    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  const handleOptionChange = (questionID, selectedOption) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionID]: selectedOption,
    }));
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) =>
      Math.min(prevIndex + 1, testQuestions.length - 1)
    );
  };

  const prevQuestion = () => {
    setCurrentQuestionIndex((prevIndex) =>
      Math.max(prevIndex - 1, 0)
    );
  };

  return (
    <div className="test-container mt-40">
      <h1>Test</h1>
      <div className="timer">
        <h2>Time Remaining: {formatTime(time)}</h2>
      </div>
      <div className="question-navigation">
        {currentQuestionIndex > 0 && (
          <button onClick={prevQuestion}>Previous</button>
        )}
        {currentQuestionIndex < testQuestions.length - 1 && (
          <button onClick={nextQuestion}>Next</button>
        )}
      </div>
      <div className="question">
        {testQuestions.length > 0 && (
          <>
            <h3>{testQuestions[currentQuestionIndex].question}</h3>
            <ul>
              {testQuestions[currentQuestionIndex].options.map((option, i) => (
                <li key={i}>
                  <input
                    type="radio"
                    name={`question${testQuestions[currentQuestionIndex].questionID}`}
                    value={option}
                    checked={responses[testQuestions[currentQuestionIndex].questionID] === option}
                    onChange={() => handleOptionChange(testQuestions[currentQuestionIndex].questionID, option)}
                  />
                  {option}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
      {currentQuestionIndex === testQuestions.length - 1 && (
        <button onClick={handleSubmit} className="submit-btn">
          Submit
        </button>
      )}
    </div>
  );
};

export default TestPage;

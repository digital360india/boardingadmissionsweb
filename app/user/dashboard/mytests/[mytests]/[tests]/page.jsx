"use client";
import React, { useState, useEffect, useContext } from "react";
import { usePathname, useRouter } from "next/navigation";
import { db } from "@/firebase/firebase";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { UserContext } from "@/userProvider";
import InstructionsModal from "@/pages/backend/InstructionPage";

const Page = () => {
  const router = useRouter();
  const pathname = usePathname();
  const pathParts = pathname.split("/");
  const ID = pathParts[5];

  const { user } = useContext(UserContext);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(true); 

  const createResultDocument = async () => {
    const resultRef = doc(db, "results", `${user.id}_${ID}`);
    await setDoc(resultRef, {
      userID: user.id,
      testId: ID,
      answers: answers,
      submittedAt:Date.now(),
    });
  };

  const fetchQuestions = async () => {
    try {
      const testDocumentId = ID;
      const testDocRef = doc(db, "tests", testDocumentId);
      const testDocSnap = await getDoc(testDocRef);
console.log(testDocSnap)
      if (!testDocSnap.exists()) {
        console.error("Test document does not exist.");
        return;
      }
      const testData = testDocSnap.data();
      console.log(testData);
      const questionIds = testData.test;


      if (!questionIds || questionIds.length === 0) {
        console.error("No questions found in the test document.");
        return;
      }
      const questions = await Promise.all(
        questionIds.map(async (id) => {
          const questionRef = doc(db, "questions", id);
          const questionSnap = await getDoc(questionRef);
          return questionSnap.exists()
            ? { id: questionSnap.id, ...questionSnap.data() }
            : null;
        })
      );
      const validQuestions = questions.filter((question) => question !== null);

      console.log(validQuestions);
      setQuestions(validQuestions);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  useEffect(() => {
    fetchQuestions();
    createResultDocument();
  }, []);

  const handleAnswerChange = (questionId, answerData) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answerData,
    }));
  };
console.log(answers)

const handlePreviousQuestion = async() =>{
  if (currentQuestionIndex > 0)
  {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  }
}

  const handleNextQuestion = async () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      await submitTest();
    }
  };

  const submitTest = async () => {
    try {
      const resultRef = doc(db, "results", `${user.id}_${ID}`);
      await updateDoc(resultRef, {
        answers: Object.keys(answers).map((questionId) => ({
          questionId,
          ...answers[questionId],
        })),
        submittedAt: new Date().toISOString(),
      });
      alert("Test submitted successfully!");
      router.push("/user/dashboard");
    } catch (error) {
      console.error("Error submitting test:", error);
      alert("Failed to submit the test. Please try again.");
    }
  };

  const renderQuestionContent = (question) => {
    console.log(question);
    const questionId = question.id;
    switch (question.questionType) {
      case "mcq":
        return (
          <div className="mt-4">
            <div className="flex justify-between  items-center"><p className=" text-lg font-semibold"> {question.sno}. {question.question}</p> <p>Marks assigned:{question.totalmarks}</p></div>
            <p className="font-bold">Options:</p>
            <ul>
              {["a", "b", "c", "d"].map((option) => (
                <li key={option}>
                  <label>
                    <input
                      type="radio"
                      name={`mcqAnswer_${questionId}`}
                      value={option}
                      checked={answers[questionId]?.answer === option}
                      onChange={(e) =>
                        handleAnswerChange(questionId, {
                          questionType: "mcq",
                          answer: e.target.value,
                        })
                      }
                      className="mr-2"
                    />
                    {option.toUpperCase()}: {question.answers[option]}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        );

      case "essay":
        return (
          <div className="mt-4">
            <p className="font-bold">Upload your answer (PDF/Image):</p>
            <input
              type="file"
              accept="application/pdf, image/*"
              onChange={async (e) => {
                const file = e.target.files[0];
                if (file) {
                  const storage = getStorage();
                  const storageRef = ref(
                    storage,
                    `answers/${user.id}/${file.name}`
                  );
                  await uploadBytes(storageRef, file);
                  const fileUrl = await getDownloadURL(storageRef);
                  handleAnswerChange(questionId, {
                    questionType: "essay",
                    fileUrl,
                  });
                }
              }}
              className="w-full border rounded-lg p-2"
            />
          </div>
        );

      case "passage":
        return (
          <div className="mt-4">
            <p className="font-bold">Passage:</p>
            <p className="text-gray-700 mb-4">{question.passage}</p>
            {question.subquestions.map((subQ, index) => (
              <div key={index} className="mb-4">
                <p className="font-bold">
                  Q{index + 1}: {subQ.question}
                </p>
                <ul>
                  {["a", "b", "c", "d"].map((option) => (
                    <li key={option}>
                      <label>
                        <input
                          type="radio"
                          name={`subQ_${questionId}_${index}`}
                          value={option}
                          onChange={(e) =>
                            handleAnswerChange(questionId, {
                              questionType: "passage",
                              subAnswers: {
                                ...answers[questionId]?.subAnswers,
                                [index]: e.target.value,
                              },
                            })
                          }
                          className="mr-2"
                        />
                        {option.toUpperCase()}: {subQ.answers[option]}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  const handleStartTest = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      <InstructionsModal isOpen={isModalOpen} onClose={handleStartTest} />
      {!isModalOpen && (
        <>
          <h1 className="text-3xl font-bold mb-6">Test Questions</h1>
          <div className="bg-white shadow-lg rounded-lg p-4">
            {questions.length > 0 &&
              renderQuestionContent(questions[currentQuestionIndex])}
            <div className="mt-4 flex justify-between">
            <button  className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
            Previous
          </button>
              <button
                onClick={handleNextQuestion}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                {currentQuestionIndex === questions.length - 1 ? "Submit" : "Next"}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Page;

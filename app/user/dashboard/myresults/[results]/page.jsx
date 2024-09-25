"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { db } from "@/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function Page() {
  const [showAttemptedques, setShowAttemptedques] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [answer, setAnswer] = useState([]);
  const [score, setScore] = useState(0); // Use state to hold score
  const [count, setCount] = useState([]); // Use state to hold count of correct answers
  const pathname = usePathname();
  const pathParts = pathname.split("/");
  const ID = pathParts[4];
  const Ids = ID.split("_");

  const fetchQuestions = async () => {
    try {
      const testDocRef = doc(db, "tests", Ids[1]);
      const testDocSnap = await getDoc(testDocRef);

      if (!testDocSnap.exists()) {
        console.error("Test document does not exist.");
        return;
      }

      const testData = testDocSnap.data();
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
      setQuestions(validQuestions);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  const fetchResult = async () => {
    try {
      const resultDocRef = doc(db, "results", ID);
      const resultDocSnap = await getDoc(resultDocRef);

      if (!resultDocSnap.exists()) {
        console.error("Result document does not exist.");
        return;
      }

      const resultData = resultDocSnap.data();
      setAnswer(resultData.answers);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  useEffect(() => {
    fetchQuestions();
    fetchResult();
  }, []);

  // Check result when `questions` or `answer` updates
  useEffect(() => {
    if (questions.length > 0 && answer.length > 0) {
      CheckResult();
    }
  }, [questions, answer]);


  console.log(answer[0]?.questionId);

//   function CheckResult() {
//     let newScore = 0;
//     let correctCount = [];

//     answer.forEach((ans,index) => {
//       questions.forEach((ques,i) => {
//         if (ans[index].questionId === ques[i].id && ans[index].answer === ques[i].correctAnswer) {
//           newScore += parseInt(ques.totalmarks);
//           correctCount.push(ques.id);
//         }
//       });
//     });
// console.log(newScore)
//     setScore(newScore);
//     setCount(correctCount);
//   }


  function CheckResult(){
    let newScore = 0;
    let correctCount = [];
    for(let i=0;i<answer.length;i++)
    {
        for(let j=0;j<questions.length;j++)
        {
            if(answer[i].questionId === questions[j].id)
            {
                console.log("Right")
                if(answer[i].answer === questions[j].correctAnswer)
                { console.log("Right2")
                    newScore += parseInt(questions[j].totalmarks);
                    console.log(newScore)
                    correctCount.push(questions[j].id);
                }
                else{
                    console.log("Wrong2")
                }
            }else{
                console.log("Wrong")
            }
        }
    }
    setScore(newScore);
    setCount(correctCount);
    }





  return (
    <>
      <div className="container mx-auto p-4 shadow-lg h-[80%] w-full flex flex-col gap-5 items-center ">
        <div className="shadow-lg rounded-lg w-[300px] text-left p-3 ">
          <p className="text-lg font-bold">Your Score Card</p>
          <p>Attempted Question: {answer.length}</p>
          <p>Correct Answer: {count.length}</p>
          <p>Scored: {score}</p>
          <button>View in Detail</button>
        </div>
      </div>
    </>
  );
}

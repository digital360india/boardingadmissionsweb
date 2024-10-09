"use client";
import React, { useState, useEffect, useContext } from "react";
import { usePathname, useRouter } from "next/navigation";
import { db } from "@/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { UserContext } from "@/userProvider";
import { IoHomeOutline } from "react-icons/io5";
import Leaderboard from "@/components/frontend/scholarshiptest/Leaderboard";

const TestComplete = () => {
  const router = useRouter();
  const path = usePathname();
  const [testData, setTestData] = useState(null);
  const [testCategory, setTestCategory] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(UserContext);

  const extractIdFromPath = (path) => {
    const match = path.match(/\/testcompletion\/([^/]+)/);
    return match ? match[1] : null;
  };

  useEffect(() => {
    const id = extractIdFromPath(path);
    console.log(id);

    if (!id) {
      console.error("User not authenticated or ID not found");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        console.log(id);
        const userDoc = doc(db, "leads", id);
        const docSnap = await getDoc(userDoc);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setTestData(data);

          if (data.category) {
            const categoryDoc = doc(db, "tests", data.category);
            const categorySnap = await getDoc(categoryDoc);

            if (categorySnap.exists()) {
              const categoryData = categorySnap.data();
              setTestCategory(categoryData);

              const questionIds = categoryData.test;
              if (questionIds.length > 0) {
                const questionsPromises = questionIds.map((qId) =>
                  getDoc(doc(db, "questions", qId))
                );

                const questionSnapshots = await Promise.all(questionsPromises);
                const questionsData = questionSnapshots.map((snap) =>
                  snap.exists() ? snap.data() : null
                );
                setQuestions(questionsData.filter((q) => q));
              }
            } else {
              console.error("No such category document!");
            }
          }
        } else {
          console.error("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [path, user]);

  const handleReturnHome = () => {
    router.push("/");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(testCategory);

  return (
    <div className="w-[80vw] mx-auto my-4">
      <p className="text-[24px] font-semibold text-green-600 flex-grow py-4">
        Thank You {testData.name || "N/A"} !!
      </p>
      <div className="flex justify-between items-center">
        <p className="text-center text-[22px]  text-green-600 font-semibold flex-grow">
          Test Completed
        </p>
        <button
          onClick={handleReturnHome}
          className="text-gray-500 flex items-center gap-2"
        >
          <IoHomeOutline />
          Home
        </button>
      </div>

      <div className="my-5">
        {testCategory && testData && (
          <div className="space-y-3">
            <div className="flex justify-between">
              <div className="font-semibold">
                {testCategory.testTitle || "N/A"}
              </div>
              <div>{testData.category || "N/A"}</div>
              <div>Test Duration : {testCategory.duration || "N/A"}</div>
            </div>

            <div className="flex justify-between w-[80vw]">
              <div>Total Marks : {testCategory.Totalmarks || "N/A"}</div>
              <div>Marks Obtained : {testData.score || "N/A"}</div>
            </div>
          </div>
        )}
      </div>

      <div>
        <p className="text-green-600 my-2">
          Thank you for completing the test. Here are your results:
        </p>
        <div className="flex justify-between">
          <div>
            {questions?.length > 0 && (
              <div>
                {questions.map((question, index) => {
                  const userResponse = testData.resultData.find(
                    (res) => res.questionID === question.id
                  );
                  const isCorrect =
                    userResponse?.selectedAnswer === question.correctAnswer;

                  return (
                    <div
                      key={question.id}
                      className="mb-4 w-[45vw] border-2 border-gray-200 p-4 rounded-md space-y-2"
                    >
                      <h3>{`${index + 1}. ${question.question}`}</h3>
                      <ul>
                        {Object.entries(question.answers)
                          .sort(([key1], [key2]) => key1.localeCompare(key2)) // Sort keys alphabetically
                          .map(([key, option]) => {
                            const isSelected =
                              userResponse?.selectedAnswer === key;
                            const isCorrectOption =
                              key === question.correctAnswer;

                            return (
                              <li
                                key={key}
                                className={`rounded-md px-2 py-1 ${
                                  isCorrectOption
                                    ? "bg-green-100 text-green-700"
                                    : isSelected && !isCorrectOption
                                    ? "bg-red-100 text-red-700"
                                    : ""
                                } flex items-center`}
                              >
                                <span className="mr-2">{`${key}. ${option}`}</span>
                                {isSelected && (
                                  <span className="ml-2">
                                    {isCorrectOption ? "✓" : "✗"}
                                  </span>
                                )}
                              </li>
                            );
                          })}
                      </ul>

                      <div className="space-y-2 mt-4">
                        <p>
                          <strong>Correct Answer:</strong>{" "}
                          {question.correctAnswer}
                        </p>
                        <p>
                          <strong>Your Answer:</strong>{" "}
                          {userResponse ? userResponse.selectedAnswer : "N/A"}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div >
            <Leaderboard category={testData.category}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestComplete;

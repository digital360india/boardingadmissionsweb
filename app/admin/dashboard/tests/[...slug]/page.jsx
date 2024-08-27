"use client";
import { useState, useEffect } from "react";
import { db } from "@/firebase/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { usePathname } from "next/navigation";
import {
  essayQuestionModel,
  passageQuestionModel,
  mcqQuestionModel,
  fillInTheBlankQuestion,
  imageGuessQuestionModel,
} from "@/models/QuestionModel";
import { RxCrossCircled } from "react-icons/rx";
import { deleteDoc } from "firebase/firestore";

const AddQuestionsPage = () => {
  const [test, setTest] = useState(null);
  const [newQuestion, setNewQuestion] = useState({
    questionType: "essay",
    ...essayQuestionModel,
  });
  const [questionModel, setQuestionModel] = useState(essayQuestionModel);
  const [showForm, setShowForm] = useState(false);
  const currentPage = usePathname();
  const pathArray = currentPage.split("/");
  const testId = pathArray[pathArray.length - 1];

  useEffect(() => {
    const fetchTest = async () => {
      try {
        const testRef = doc(db, "tests", testId);
        const testDoc = await getDoc(testRef);
        if (testDoc.exists()) {
          setTest(testDoc.data());
        } else {
          console.error("No such test!");
        }
      } catch (err) {
        console.error("Error fetching test:", err);
      }
    };

    fetchTest();
  }, [testId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewQuestion((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleOptionChange = (e) => {
    const { name, value } = e.target;
    setNewQuestion((prevState) => ({
      ...prevState,
      answers: {
        ...prevState.answers,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!test) {
      console.error("Test data is not loaded.");
      return;
    }
    try {
      const testRef = doc(db, "tests", testId);
      await updateDoc(testRef, {
        test: [...(test.test || []), newQuestion],
      });
      alert("Question added successfully!");
      const updatedTestDoc = await getDoc(testRef);
      setTest(updatedTestDoc.data());
      setNewQuestion({
        questionType: "essay",
        ...essayQuestionModel,
      });
      setShowForm(false);
    } catch (err) {
      console.error("Error adding question:", err);
      alert("Failed to add question.");
    }
  };
  const handleDelete = async (questionSno) => {
    if (!test) {
      console.error("Test data is not loaded.");
      return;
    }

    try {
      const testRef = doc(db, "tests", testId);
      const updatedQuestions = test.test.filter((q) => q.sno !== questionSno);

      await updateDoc(testRef, {
        test: updatedQuestions,
      });

      alert("Question deleted successfully!");
      setTest({ ...test, test: updatedQuestions });
    } catch (err) {
      console.error("Error deleting question:", err);
      alert("Failed to delete question.");
    }
  };
  const renderQuestionForm = () => {
    return (
      <div className="space-y-4">
        <label className="block">
          <span className="text-gray-700">Serial Number</span>
          <input
            type="string"
            name="sno"
            value={newQuestion.sno}
            onChange={handleInputChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </label>

        {(() => {
          switch (newQuestion.questionType) {
            case "essay":
              return (
                <div className="space-y-4">
                  <label className="block">
                    <span className="text-gray-700">Heading</span>
                    <input
                      type="text"
                      name="heading"
                      value={newQuestion.heading}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">Question</span>
                    <textarea
                      name="question"
                      value={newQuestion.question}
                      onChange={handleInputChange}
                      rows="4"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </label>
                </div>
              );
            case "passage":
              return (
                <div className="space-y-4">
                  <label className="block">
                    <span className="text-gray-700">Heading</span>
                    <input
                      type="text"
                      name="heading"
                      value={newQuestion.heading}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">Passage</span>
                    <textarea
                      name="question"
                      value={newQuestion.question}
                      onChange={handleInputChange}
                      rows="4"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </label>
                </div>
              );
            case "mcq":
              return (
                <div className="space-y-4">
                  <label className="block">
                    <span className="text-gray-700">Question</span>
                    <input
                      type="text"
                      name="question"
                      value={newQuestion.question}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </label>
                  <div className="space-y-2">
                    {["a", "b", "c", "d"].map((option) => (
                      <label key={option} className="block">
                        <span className="text-gray-700">
                          Answer {option.toUpperCase()}
                        </span>
                        <input
                          type="text"
                          name={option}
                          value={newQuestion.answers?.[option] || ""}
                          onChange={handleOptionChange}
                          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                      </label>
                    ))}
                  </div>
                  <label className="block">
                    <span className="text-gray-700">Correct Answer</span>
                    <input
                      type="text"
                      name="correctAnswer"
                      value={newQuestion.correctAnswer}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </label>
                </div>
              );
            case "fillInTheBlank":
              return (
                <div className="space-y-4">
                  <label className="block">
                    <span className="text-gray-700">Heading</span>
                    <input
                      type="text"
                      name="heading"
                      value={newQuestion.heading}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">Question</span>
                    <input
                      type="text"
                      name="question"
                      value={newQuestion.question}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">
                      Options (comma-separated)
                    </span>
                    <input
                      type="text"
                      name="options"
                      value={newQuestion.options?.join(", ") || ""}
                      onChange={(e) =>
                        setNewQuestion((prevState) => ({
                          ...prevState,
                          options: e.target.value
                            .split(",")
                            .map((opt) => opt.trim()),
                        }))
                      }
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">Correct Answer</span>
                    <input
                      type="text"
                      name="correctAnswer"
                      value={newQuestion.correctAnswer}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </label>
                </div>
              );
            case "imageGuess":
              return (
                <div className="space-y-4">
                  <label className="block">
                    <span className="text-gray-700">Heading</span>
                    <input
                      type="text"
                      name="heading"
                      value={newQuestion.heading}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">Question</span>
                    <input
                      type="text"
                      name="question"
                      value={newQuestion.question}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">Image URL</span>
                    <input
                      type="text"
                      name="imageUrl"
                      value={newQuestion.imageUrl}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </label>
                  <div className="space-y-2">
                    {["a", "b", "c", "d"].map((option) => (
                      <label key={option} className="block">
                        <span className="text-gray-700">
                          Answer {option.toUpperCase()}
                        </span>
                        <input
                          type="text"
                          name={option}
                          value={newQuestion.answers?.[option] || ""}
                          onChange={handleOptionChange}
                          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                      </label>
                    ))}
                  </div>
                  <label className="block">
                    <span className="text-gray-700">Correct Answer</span>
                    <input
                      type="text"
                      name="correctAnswer"
                      value={newQuestion.correctAnswer}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">Total Marks</span>
                    <input
                      type="number"
                      name="totalmarks"
                      value={newQuestion.totalmarks}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </label>
                </div>
              );
            default:
              return null;
          }
        })()}
      </div>
    );
  };

  const renderQuestionContent = (question) => {
    return (
      <div className="p-4 my-4 bg-white shadow-lg rounded-lg border border-gray-200">
        <div className=" top-2 right-2">
          <button
            onClick={() => handleDelete(question.sno)}
            className="text-red-500 hover:text-red-700 transition duration-150 flex gap-2"
          >
            <RxCrossCircled className="text-xl" /> <p>Delete Question</p>
          </button>
        </div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-indigo-600">
            {question.sno}. {question.question}
          </h3>
        </div>

        <div className="text-gray-700 space-y-2">
          {(() => {
            switch (question.questionType) {
              case "essay":
                return (
                  <>
                    <p>
                      <strong>Question:</strong> {question.question}
                    </p>
                  </>
                );
              case "passage":
                return (
                  <>
                    <p>
                      <strong>Passage:</strong> {question.question}
                    </p>
                  </>
                );
              case "mcq":
                return (
                  <>
                    <p>
                      <strong>Question:</strong> {question.question}
                    </p>
                    <ul className="list-disc pl-5">
                      {Object.entries(question.answers || {}).map(
                        ([key, value]) => (
                          <li key={key}>
                            <strong>{key.toUpperCase()}:</strong> {value}
                          </li>
                        )
                      )}
                    </ul>
                    <p>
                      <strong>Correct Answer:</strong> {question.correctAnswer}
                    </p>
                  </>
                );
              case "fillInTheBlank":
                return (
                  <>
                    <p>
                      <strong>Question:</strong> {question.question}
                    </p>
                    <p>
                      <strong>Options:</strong> {question.options?.join(", ")}
                    </p>
                    <p>
                      <strong>Correct Answer:</strong> {question.correctAnswer}
                    </p>
                  </>
                );
              case "imageGuess":
                return (
                  <>
                    <p>
                      <strong>Question:</strong> {question.question}
                    </p>
                    <img
                      src={question.imageUrl}
                      alt="Guess the image"
                      className="mt-2 w-64 h-64 object-cover rounded-lg shadow-md"
                    />
                  </>
                );
              default:
                return null;
            }
          })()}
        </div>
      </div>
    );
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Add Questions</h1>

      <button
        onClick={() => setShowForm((prev) => !prev)}
        className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        {showForm ? "Editing Mode On" : "Add Question"}
      </button>

      {showForm && (
        <div className="absolute bg-white p-10 min-w-[700px] shadow-2xl rounded-3xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Add a New Question
            </h2>
            <button
              onClick={() => setShowForm((prev) => !prev)}
              className="text-gray-500 hover:text-red-600 transition duration-150"
            >
              <RxCrossCircled className="text-3xl" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-lg font-medium text-gray-700">
                Question Type
              </label>
              <select
                name="questionType"
                value={newQuestion.questionType}
                onChange={(e) => {
                  const type = e.target.value;
                  const model = getQuestionModel(type);
                  setNewQuestion({ questionType: type, ...model });
                  setQuestionModel(model);
                }}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="essay">Essay</option>
                <option value="passage">Passage</option>
                <option value="mcq">MCQ</option>
                <option value="fillInTheBlank">Fill in the Blank</option>
                <option value="imageGuess">Image Question with options</option>
              </select>
            </div>

            {renderQuestionForm()}

            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition duration-150"
            >
              Add Question
            </button>
          </form>
        </div>
      )}

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Existing Questions</h2>
        {test?.test && test.test.length > 0 ? (
          <ul className="space-y-4">
            {test.test.map((question, index) => (
              <li key={index} className="p-4 bg-gray-50 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold">{question.heading}</h3>
                {question.questionType === "imageGuess" ? (
                  <div className="mt-2">
                    <p>
                      <strong>Question:</strong> {question.question}
                    </p>
                    <img
                      src={question.imageUrl}
                      alt="Guess the image"
                      className="mt-2 w-64 h-64 object-cover"
                    />
                  </div>
                ) : (
                  renderQuestionContent(question)
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>No questions available.</p>
        )}
      </div>
    </div>
  );
};

const getQuestionModel = (type) => {
  switch (type) {
    case "essay":
      return { questionType: "essay", ...essayQuestionModel };
    case "passage":
      return { questionType: "passage", ...passageQuestionModel };
    case "mcq":
      return { questionType: "mcq", ...mcqQuestionModel };
    case "fillInTheBlank":
      return { questionType: "fillInTheBlank", ...fillInTheBlankQuestion };
    case "imageGuess":
      return { questionType: "imageGuess", ...imageGuessQuestionModel };
    default:
      return {};
  }
};

export default AddQuestionsPage;

"use client";
import { useState, useEffect } from "react";
import { db } from "@/firebase/firebase";
import { addDoc, doc, getDoc, updateDoc, collection } from "firebase/firestore";
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
import QuillEditor from "@/components/admin/QuillEditor";
import "./global.css";

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
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingQuestionId, setEditingQuestionId] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [allQuestions, setAllQuestions] = useState([]);
  const [questionContent, setQuestionContent] = useState("");
  const [submittedQuestion, setSubmittedQuestion] = useState("");

  const fetchTest = async () => {
    try {
      const testRef = doc(db, "tests", testId);
      const testDoc = await getDoc(testRef);
      if (testDoc.exists()) {
        setTest(testDoc.data());
        if (testDoc.data().test) {
          const questionIds = testDoc.data().test;
          const questionPromises = questionIds.map((id) =>
            getDoc(doc(db, "questions", id))
          );
          const questionDocs = await Promise.all(questionPromises);
          const fetchedQuestions = questionDocs.map((doc) => doc.data());
          setQuestions(fetchedQuestions);
        }
      } else {
        console.error("No such test!");
      }
    } catch (err) {
      console.error("Error fetching test:", err);
    }
  };
  useEffect(() => {
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
  const fetchAllQuestions = async () => {
    try {
      const questionsCollectionRef = collection(db, "questions");
      const questionsSnapshot = await getDocs(questionsCollectionRef);
      const questionsList = questionsSnapshot.docs.map((doc) => doc.data());
      setAllQuestions(questionsList);
    } catch (err) {
      console.error("Error fetching all questions:", err);
    }
  };

  const handleSubmit = async (e) => {
    setSubmittedQuestion(questionContent);
    e.preventDefault();
    if (!test) {
      console.error("Test data is not loaded.");
      return;
    }

    try {
      setLoading(true);

      let questionRef;
      if (editMode) {
        questionRef = doc(db, "questions", editingQuestionId);
        await updateDoc(questionRef, newQuestion);
      } else {
        questionRef = await addDoc(collection(db, "questions"), newQuestion);
        const questionId = questionRef.id;
        await updateDoc(questionRef, { id: questionId });
      }

      const testRef = doc(db, "tests", testId);
      const updatedQuestions = editMode
        ? test.test
        : [...(test.test || []), questionRef.id];

      await updateDoc(testRef, { test: updatedQuestions });

      const updatedTestDoc = await getDoc(testRef);
      setTest(updatedTestDoc.data());
      setNewQuestion({ questionType: "essay", ...essayQuestionModel });
      setShowForm(false);
      setEditMode(false);
      setEditingQuestionId(null);
      fetchTest();
    } catch (err) {
      console.error("Error adding/updating question:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (questionId) => {
    if (!test) {
      console.error("Test data is not loaded.");
      return;
    }

    if (!test.test) {
      console.error("Test array is not defined.");
      return;
    }

    try {
      const testRef = doc(db, "tests", testId);
      const updatedQuestions = test.test.filter((id) => id !== questionId);

      await updateDoc(testRef, { test: updatedQuestions });
      await deleteDoc(doc(db, "questions", questionId));

      setTest({ ...test, test: updatedQuestions });
      setQuestions((prevQuestions) =>
        prevQuestions.filter((q) => q.id !== questionId)
      );
    } catch (err) {
      console.error("Error deleting question:", err);
      alert("Failed to delete question.");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (question) => {
    setNewQuestion(question);
    setEditingQuestionId(question.id);
    setEditMode(true);
    setShowForm(true);
  };

  const renderQuestionForm = () => {
    return (
      <div className="space-y-3">
        <label className="flex items-center gap-4 w-fit  ">
          <span className="text-gray-700 w-fit">Serial Number</span>
          <input
            type="text"
            name="sno"
            value={newQuestion.sno}
            onChange={handleInputChange}
            className=" block w-fit border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </label>

        <label className="flex items-center gap-4 w-fit">
          <span className="text-gray-700">Use Existing Question</span>
          <select
            name="existingQuestion"
            onChange={(e) => {
              const selectedQuestion = questions.find(
                (question) => question.id === e.target.value
              );
              if (selectedQuestion) {
                setNewQuestion({ ...selectedQuestion });
                setEditMode(true);
              }
            }}
            className="w-[350px] border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="">Select Existing Question</option>
            {questions.map((question) => (
              <option key={question.id} value={question.id}>
                {question.sno}. {question.question}
              </option>
            ))}
          </select>
        </label>

        {(() => {
          switch (newQuestion.questionType) {
            case "essay":
              return (
                <div className="space-y-4">
                  <label className="block mb-4">
                    <span className="text-gray-700">Heading</span>
                    <input
                      type="text"
                      name="heading"
                      value={newQuestion.heading}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </label>

                  <label className="block mb-4">
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
                  <label className="block mb-4">
                    <span className="text-gray-700">Heading</span>
                    <input
                      type="text"
                      name="heading"
                      value={newQuestion.heading}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </label>
                  <label className="block mb-4">
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
                  <div className="w-[50vw]">
                    <QuillEditor
                      onContentChange={(content) => {
                        setQuestionContent(content);
                      }}
                    />

                    <div className="mt-4">
                      <h3 className="text-gray-700">
                        Stored Question Preview:
                      </h3>
                      <div className="border border-gray-300 rounded-md p-2">
                        {questionContent}
                      </div>
                    </div>
                  </div>
                  <label className="block mb-4">
                    <span className="text-gray-700">Question</span>
                    <input
                      type="text"
                      name="question"
                      value={newQuestion.question}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </label>
                  <label className="block mb-4">
                    <span className="text-gray-700">Answers</span>
                    <div className="space-y-2">
                      {["a", "b", "c", "d"].map((option) => (
                        <label key={option} className="block mb-2">
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
                  </label>
                  <label className="block mb-4">
                    <span className="text-gray-700">Correct Answer</span>
                    <input
                      type="text"
                      name="correctAnswer"
                      value={newQuestion.correctAnswer}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </label>
                  <label className="block mb-4">
                    <span className="text-gray-700">Weightage</span>
                    <input
                      type="text"
                      name="totalmarks"
                      value={newQuestion.totalmarks}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </label>
                </div>
              );

            case "fill-in-the-blank":
              return (
                <div className="space-y-4">
                  <label className="block mb-4">
                    <span className="text-gray-700">Question</span>
                    <input
                      type="text"
                      name="question"
                      value={newQuestion.question}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </label>
                  <label className="block mb-4">
                    <span className="text-gray-700">Correct Option</span>
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
                  <label className="block mb-4">
                    <span className="text-gray-700">Image URL</span>
                    <input
                      type="text"
                      name="imageUrl"
                      value={newQuestion.imageUrl}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </label>
                  <label className="block mb-4">
                    <span className="text-gray-700">Question</span>
                    <input
                      type="text"
                      name="question"
                      value={newQuestion.question}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </label>
                  <label className="block mb-4">
                    <span className="text-gray-700">Answers</span>
                    <div className="space-y-2">
                      {["a", "b", "c", "d"].map((option) => (
                        <input
                          key={option}
                          type="text"
                          name={option}
                          value={newQuestion.answers?.[option] || ""}
                          onChange={handleOptionChange}
                          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                          placeholder={`Answer ${option.toUpperCase()}`}
                        />
                      ))}
                    </div>
                  </label>
                  <label className="block mb-4">
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
            default:
              return null;
          }
        })()}

        <button
          type="submit"
          className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          disabled={loading}
        >
          {editMode ? "Update Question" : "Add Question"}
        </button>
      </div>
    );
  };

  const EquationDisplay = ({ question }) => {
    return <div dangerouslySetInnerHTML={{ __html: question }} />;
  };

  const renderQuestionContent = (question) => {
    return (
      <div className="p-4 my-4 bg-white shadow-lg rounded-lg border border-gray-200">
        <div className=" top-2 right-2">
          <button
            onClick={() => handleDelete(question.id)}
            className="text-red-500 hover:text-red-700 transition duration-150 flex gap-2"
          >
            <RxCrossCircled className="text-xl" /> <p>Delete Question</p>
          </button>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="text-lg flex justify-between w-full font-semibold text-indigo-600">
            <div className="flex gap-2">
              {" "}
              {question.sno}. <EquationDisplay question={question.question} />
            </div>
            <p>Marks Assigned: {question.totalmarks}</p>
          </div>
        </div>

        <div className="text-gray-700 space-y-2">
          {(() => {
            switch (question.questionType) {
              case "essay":
                return (
                  <>
                    <p>
                      <strong>Question:</strong>
                      {question.question}
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
                      <strong>Questions</strong>
                      <EquationDisplay question={question.question} />
                    </p>

                    <ul className="list-disc pl-5">
                      {/* {Object.entries(question.answers || {}).map(
                        ([key, value]) => (
                          <li key={key}>
                            <strong>{key.toUpperCase()}:</strong> {value}
                          </li>
                        )
                      )} */}

                      <li>
                        <strong>A:</strong> {question.answers.a}
                      </li>
                      <li>
                        <strong>B:</strong> {question.answers.b}
                      </li>
                      <li>
                        <strong>C:</strong> {question.answers.c}
                      </li>
                      <li>
                        <strong>D:</strong> {question.answers.d}
                      </li>
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

  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      setQuestionContent("");
    };
  }, [showForm]);

  return (
    <div className=" p-10">
      <button
        onClick={() => setShowForm(!showForm)}
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
      >
        {showForm ? "Edit Mode ON" : "Add New Question"}
      </button>

      {showForm && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40" />

          <form
            onSubmit={handleSubmit}
            className="space-y-4 fixed overflow-y-auto h-[90vh] top-[5vh] right-2 bg-white border border-gray-300 rounded-xl shadow-lg p-4 w-[80vw] z-50"
          >
            <div>
              <button
                onClick={() => setShowForm(!showForm)}
                className="rounded-full hover:bg-red-800 float-right"
              >
                <RxCrossCircled size={32} />
              </button>
            </div>

            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              {editMode ? "Edit Question" : "Add New Question"}
            </h2>

            <label className="flex items-center gap-4 w-fit">
              <span className="text-gray-700 w-fit">Question Type</span>
              <select
                name="questionType"
                value={newQuestion.questionType}
                onChange={(e) => {
                  setNewQuestion({
                    questionType: e.target.value,
                    ...getQuestionModel(e.target.value),
                  });
                  setQuestionModel(getQuestionModel(e.target.value));
                }}
                className="block w-fit border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="essay">Essay</option>
                <option value="passage">Passage</option>
                <option value="mcq">MCQ</option>
                <option value="fillInTheBlank">Fill in the Blank</option>
                <option value="imageGuess">Image Guess</option>
              </select>
            </label>

            {renderQuestionForm()}
          </form>
        </>
      )}

      <div className="mt-8">
        <div className="text-lg flex w-full justify-between font-semibold mb-4">
          <p>Existing questions</p>
          <p>Total Number of Questions: {questions.length}</p>
        </div>
        <div className="space-y-4">
          {questions.map((question) => (
            <div key={question.id} className="border p-4 rounded-md">
              <h3 className="text-xl font-bold">
                {question.heading || (
                  <EquationDisplay question={question.question} />
                )}
              </h3>

              {renderQuestionContent(question)}
              <div className="mt-2">
                <button
                  onClick={() => handleEdit(question)}
                  className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 mr-2"
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
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

"use client";
import { useState, useEffect } from 'react';
import { db } from '@/firebase/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { usePathname, useRouter } from 'next/navigation';

const AddQuestionsPage = () => {
  const [test, setTest] = useState(null);
  const [newQuestion, setNewQuestion] = useState({
    question: '',
    answers: {
      a: '',
      b: '',
      c: '',
      d: ''
    },
    correctAnswer: '',
    sno: ''
  });
  const router = useRouter();
  const currentPage = usePathname();
  const pathArray = currentPage.split("/");
  const testId = pathArray[pathArray.length - 1];

  useEffect(() => {
    const fetchTest = async () => {
      try {
        const testRef = doc(db, 'tests', testId);
        const testDoc = await getDoc(testRef);
        if (testDoc.exists()) {
          setTest(testDoc.data());
        } else {
          console.error('No such test!');
        }
      } catch (err) {
        console.error('Error fetching test:', err);
      }
    };

    fetchTest();
  }, [testId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewQuestion(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAnswerChange = (e) => {
    const { name, value } = e.target;
    setNewQuestion(prevState => ({
      ...prevState,
      answers: {
        ...prevState.answers,
        [name]: value
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!test) {
      console.error('Test data is not loaded.');
      return;
    }
    try {
      const testRef = doc(db, 'tests', testId);
      await updateDoc(testRef, {
        test: [...(test.test || []), newQuestion]
      });
      alert('Question added successfully!');
      const updatedTestDoc = await getDoc(testRef);
      setTest(updatedTestDoc.data());
      setNewQuestion({
        question: '',
        answers: {
          a: '',
          b: '',
          c: '',
          d: ''
        },
        correctAnswer: '',
        sno: ''
      })
    } catch (err) {
      console.error('Error adding question:', err);
      alert('Failed to add question.');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Add Question to Test</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Question:</label>
          <input
            type="text"
            name="question"
            value={newQuestion.question}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Answer A:</label>
          <input
            type="text"
            name="a"
            value={newQuestion.answers.a}
            onChange={handleAnswerChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Answer B:</label>
          <input
            type="text"
            name="b"
            value={newQuestion.answers.b}
            onChange={handleAnswerChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Answer C:</label>
          <input
            type="text"
            name="c"
            value={newQuestion.answers.c}
            onChange={handleAnswerChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Answer D:</label>
          <input
            type="text"
            name="d"
            value={newQuestion.answers.d}
            onChange={handleAnswerChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Correct Answer:</label>
          <input
            type="text"
            name="correctAnswer"
            value={newQuestion.correctAnswer}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Serial Number:</label>
          <input
            type="number"
            name="sno"
            value={newQuestion.sno}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add Question
        </button>
      </form>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Existing Questions</h2>
        {test && test.test && test.test.length > 0 ? (
          <ul className="space-y-4">
            {test.test.map((question, index) => (
              <li key={index} className="p-4 border border-gray-300 rounded">
                <h3 className="text-lg font-semibold">{question.question}</h3>
                <ul className="mt-2">
                  {Object.entries(question.answers).map(([key, value]) => (
                    <li key={key} className="mt-1">
                      <span className="font-medium">{key.toUpperCase()}:</span> {value}
                    </li>
                  ))}
                </ul>
                <p className="mt-2"><span className="font-medium">Correct Answer:</span> {question.correctAnswer}</p>
                <p><span className="font-medium">Serial Number:</span> {question.sno}</p>
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

export default AddQuestionsPage;

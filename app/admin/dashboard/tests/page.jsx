"use client";
import React, { useState, useEffect } from 'react';
import { getDocs, collection, addDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { db } from '@/firebase/firebase'; // Ensure this import path is correct

const TestPage = () => {
  const router = useRouter();
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newTest, setNewTest] = useState({
    testTitle: '',
    duration: '',
    testDescription: '',
    testUploadDate: ''
  });

  useEffect(() => {
    const fetchTests = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "tests"));
        const testList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTests(testList);
      } catch (err) {
        setError("Failed to fetch tests. Please try again.");
        console.error("Error fetching tests:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTests();
  }, []);

  const handleAddQuestions = (testId) => {
    router.push(`/admin/dashboard/tests/${testId}`);
  };

  const handleOpenDialog = () => setIsDialogOpen(true);
  const handleCloseDialog = () => setIsDialogOpen(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTest({
      ...newTest,
      [name]: value
    });
  };

  const handleAddTest = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'tests'), newTest);
      alert('Test added successfully!');
      handleCloseDialog();
      // Fetch tests again to update the list
      const querySnapshot = await getDocs(collection(db, 'tests'));
      const testList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTests(testList);
    } catch (err) {
      console.error('Error adding test:', err);
      alert('Failed to add test.');
    }
  };

  if (loading) {
    return <p>Loading tests...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!Array.isArray(tests) || tests.length === 0) {
    return <p>No tests available.</p>;
  }

  return (
    <div className="space-y-4">
      <button
        onClick={handleOpenDialog}
        className="bg-green-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-green-600"
      >
        Add New Test
      </button>

      {isDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-lg">
            <h2 className="text-xl font-bold mb-4">Add New Test</h2>
            <form onSubmit={handleAddTest} className="space-y-4">
              <div>
                <label className="block text-gray-700">Test Title:</label>
                <input
                  type="text"
                  name="testTitle"
                  value={newTest.testTitle}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Duration:</label>
                <input
                  type="text"
                  name="duration"
                  value={newTest.duration}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">Test Description:</label>
                <textarea
                  name="testDescription"
                  value={newTest.testDescription}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">Test Upload Date:</label>
                <input
                  type="date"
                  name="testUploadDate"
                  value={newTest.testUploadDate}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Add Test
              </button>
              <button
                type="button"
                onClick={handleCloseDialog}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

      {tests.map((test) => (
        <div key={test.id} className="border p-4 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-2">{test.testTitle || "Untitled Test"}</h2>
          <p><strong>Duration:</strong> {test.duration || "N/A"}</p>
          <p><strong>Test Description:</strong> {test.testDescription || "N/A"}</p>
          <p><strong>Test Upload Date:</strong> {test.testUploadDate || "N/A"}</p>
          <div className="mt-2">
            {/* Optional: Display questions here */}
          </div>
          <button
            onClick={() => handleAddQuestions(test.id)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600"
          >
            Add More Questions
          </button>
        </div>
      ))}
    </div>
  );
};

export default TestPage;

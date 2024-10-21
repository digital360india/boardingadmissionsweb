"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";

const Page = () => {
  const router = useRouter();

  const [selectedCategory, setSelectedCategory] = useState("primary");
  const [testDetails, setTestDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const categoryToDocId = {
    primary: "AWuwMWkFlshETmPD2qga",
    secondary: "6gNGLbJtpX1TMwnqXNgF",
    senior: "JAfTNak4ylz7QoptNkKa",
    iq: "FaN1Lqj7T4nSqpH4RG0D",
  };

  const handleTakeTest = () => {
    const docId = categoryToDocId[selectedCategory];  // Get the docId based on selected category
    router.push(`/scholarshiptest/termsandconditionstest?category=${selectedCategory}`); // Pass docId as query parameter
  };
  

  const fetchTestDetails = async (category) => {
    setLoading(true);
    setError(null);

    try {
      const docId = categoryToDocId[category];
      const docRef = doc(db, "tests", docId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        const testLength = data.test ? data.test.length : 0;
        const attemptedByLength = data.attemptedBy
          ? data.attemptedBy.length
          : 0;
        setTestDetails({
          ...data,
          questions: testLength,
          studentsTaken: attemptedByLength,
        });
      } else {
        setError("No test details found for this category.");
      }
    } catch (err) {
      console.error("Error fetching test details: ", err);
      setError("Failed to fetch test details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestDetails(selectedCategory);
  }, [selectedCategory]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-teal-50 p-8">
      <div className="bg-white shadow-lg rounded-lg p-8 mb-8 max-w-lg w-full border border-gray-200">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
          Select Category
        </h1>
        <select
          className="w-full p-2 border border-gray-300 rounded-lg mb-6"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="primary">Primary (Class 1- Class 5)</option>
          <option value="secondary">Secondary (Class 6- Class 8)</option>
          <option value="senior">Senior (Class 9- Class 12)</option>
          <option value="iq">IQ Test</option>
        </select>

        <h2 className="text-xl font-bold mb-4 text-center text-gray-700">
          {testDetails ? testDetails.testTitle : "Test Details"}
        </h2>

        {loading ? (
          <p>Loading test details...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : testDetails ? (
          <ul className="space-y-3 text-gray-700">
            <li className="flex justify-between">
              <span className="font-medium">Questions</span>
              <span>{testDetails.questions}</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium">Duration</span>
              <span>{testDetails.duration}</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium">Marks</span>
              <span>{testDetails.Totalmarks}</span>
            </li>
            {/* <li className="flex justify-between">
              <span className="font-medium">Students Taken</span>
              <span>{testDetails.studentsTaken}</span>
            </li> */}
            <li>
              <span>{testDetails.testDescription}</span>
            </li>
          </ul>
        ) : (
          <p>No test details available.</p>
        )}
      </div>

      <div className="flex flex-col items-center space-y-6">
        <button
          onClick={handleTakeTest}
          className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-3 px-8 rounded-lg shadow-lg hover:from-blue-600 hover:to-teal-600 transition-colors"
        >
          Start Test
        </button>
        <p className="text-gray-600 mt-2 text-center">
          Click the button to begin the test.
        </p>
      </div>
    </div>
  );
};

export default Page;

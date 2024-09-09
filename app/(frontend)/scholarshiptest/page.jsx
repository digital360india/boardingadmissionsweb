"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image"; // Import Image component for optimized images
import Link from "next/link";

const Page = () => {
  const router = useRouter(); 

  const handleTakeTest = () => {
    router.push(`/scholarshiptest/termsandconditionstest`);
  };

  const testDetails = {
    questions: 20,
    duration: "20 minutes",
    area: "Mathematics",
    studentsTaken: 1500,
    scholarshipsGiven: 50,
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-teal-50 p-8">
      <div className="bg-white shadow-lg rounded-lg p-8 mb-8 max-w-lg w-full border border-gray-200">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
          Test Details
        </h1>
        <ul className="space-y-3 text-gray-700">
          {Object.entries(testDetails).map(([key, value]) => (
            <li key={key} className="flex justify-between">
              <span className="font-medium capitalize">
                {key.replace(/([A-Z])/g, " $1")}
              </span>
              <span className="text-gray-600">{value}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col items-center space-y-6">
        <Link href="/scholarshiptest/termsandconditionstest">
          {" "}
          <button
            onClick={handleTakeTest}
            className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-3 px-8 rounded-lg shadow-lg hover:from-blue-600 hover:to-teal-600 transition-colors"
          >
            Start Test
          </button>
        </Link>
        <p className="text-gray-600 mt-2 text-center">
          Click the button to begin the test.
        </p>
      </div>
    </div>
  );
};

export default Page;

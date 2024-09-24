"use client";
import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import Link from "next/link";

const Page = () => {
  const router = useRouter();
  const pathname = usePathname();
  const pathParts = pathname.split("/");
  const packageID = pathParts[4];
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [tests, setTests] = useState([]);

  const fetchPackageData = async () => {
    try {
      const packageDoc = await getDoc(doc(db, "testPackages", packageID));
      if (!packageDoc.exists()) {
        setError("Package not found.");
        setLoading(false);
        return;
      }

      const packageData = packageDoc.data();
      console.log("Fetched package data:", packageData);

      if (!Array.isArray(packageData.tests)) {
        setError("Invalid package data format.");
        setLoading(false);
        return;
      }

      const testPromises = packageData.tests.map(async (testID) => {
        try {
          const testDoc = await getDoc(doc(db, "tests", testID));
          if (testDoc.exists()) {
            return { id: testDoc.id, ...testDoc.data() };
          } else {
            console.warn(`Test with ID ${testID} not found.`);
            return null;
          }
        } catch (testError) {
          console.error(`Error fetching test with ID ${testID}:`, testError);
          return null;
        }
      });

      const fetchedTests = await Promise.all(testPromises);
      setTests(fetchedTests.filter((test) => test !== null));
    } catch (err) {
      setError("Failed to fetch package data. Please try again.");
      console.error("Error fetching package data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPackageData();
  }, [packageID]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-blue-600">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Tests in Package
      </h1>
      {tests.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tests.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {test.testTitle}
              </h2>
              <p className="text-gray-600 mb-2">{test.testDescription}</p>
              <div className="text-gray-500 text-sm mb-4">
                <p>Duration: {test.duration} minutes</p>
                <p>
                  Upload Date:{" "}
                  {new Date(test.testUploadDate).toLocaleDateString()}
                </p>
              </div>
              <Link
                className="flex w-full"
                href={`/user/dashboard/mytests/mytests/[tests]`}
                as={`/user/dashboard/mytests/mytests/${test.id}`}
              >
                {" "}
                <button className="bg-background05 text-white px-4 py-2 rounded-lg w-full">
                  Take Test
                </button>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">
          No tests found in this package.
        </p>
      )}
    </div>
  );
};

export default Page;

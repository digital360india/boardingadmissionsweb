"use client";
import React, { useState, useEffect } from "react";
import { db } from "@/firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

const Page = () => {
  const [userCount, setUserCount] = useState(0);
  const [courseCount, setCourseCount] = useState(0);
  const [coursePackagesCount, setCoursePackagesCount] = useState(0);
  const [packageCount, setPackageCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const usersSnapshot = await getDocs(collection(db, "users"));
        const coursesSnapshot = await getDocs(collection(db, "courses"));
        const coursesPackagesSnapshot = await getDocs(collection(db, "coursePackages"));
        const packagesSnapshot = await getDocs(collection(db, "testPackages"));
setCoursePackagesCount(coursesPackagesSnapshot.size)
        setUserCount(usersSnapshot.size);
        setCourseCount(coursesSnapshot.size);
        setPackageCount(packagesSnapshot.size);
      } catch (err) {
        setError("Failed to fetch analytics data. Please try again.");
        console.error("Error fetching analytics data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCounts();
  }, []);

  if (loading) {
    return <p>Loading analytics...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Home</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 border rounded-md shadow-md">
          <h2 className="text-lg font-semibold">Number of Users</h2>
          <p className="text-2xl font-bold">{userCount}</p>
        </div>
        <div className="bg-white p-4 border rounded-md shadow-md">
          <h2 className="text-lg font-semibold">Number of Courses Packages</h2>
          <p className="text-2xl font-bold">{coursePackagesCount}</p>
        </div>
        <div className="bg-white p-4 border rounded-md shadow-md">
          <h2 className="text-lg font-semibold">Number of Courses</h2>
          <p className="text-2xl font-bold">{courseCount}</p>
        </div>
        <div className="bg-white p-4 border rounded-md shadow-md">
          <h2 className="text-lg font-semibold">Number of Test Packages</h2>
          <p className="text-2xl font-bold">{packageCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;

"use client";
import React, { useState, useEffect } from "react";
import { db } from "@/firebase/firebase"; // Adjust the import according to your setup
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "courses"));
        const courseList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCourses(courseList);
      } catch (err) {
        setError("Failed to fetch courses. Please try again.");
        console.error("Error fetching courses:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center">
        <div className="w-6 h-6 border-4 border-t-4 border-blue-500 border-opacity-50 rounded-full animate-spin"></div>
      </div>
    );
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="course-list p-4">
      <h2 className="text-xl font-bold mb-4">Courses</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Link
            href={`/admin/dashboard/courses/${course.id}`}
            key={course.id}
            className="course-card border rounded-lg p-4 shadow-lg"
          >
            <img
              src={course.heroImage}
              alt={course.courseName}
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="text-lg font-semibold mt-2">{course.courseName}</h3>
            <p className="text-gray-700 mt-2">{course.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CourseList;

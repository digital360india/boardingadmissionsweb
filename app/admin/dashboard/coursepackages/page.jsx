"use client"
import React, { useState, useEffect } from "react";
import { db } from "@/firebase/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

const Page = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [packageName, setPackageName] = useState("");
  const [selectedCourses, setSelectedCourses] = useState([]);

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

  const handleCourseSelection = (e, courseId) => {
    if (e.target.checked) {
      setSelectedCourses([...selectedCourses, courseId]);
    } else {
      setSelectedCourses(selectedCourses.filter((id) => id !== courseId));
    }
  };

  const handlePackageCreation = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "coursePackages"), {
        packageName,
        courses: selectedCourses,
      });
      setPackageName("");
      setSelectedCourses([]);
      alert("Course package created successfully!");
    } catch (err) {
      console.error("Error creating course package:", err);
      setError("Failed to create course package. Please try again.");
    }
  };

  return (
    <div>
      <h1>Create Course Package</h1>
      <form onSubmit={handlePackageCreation}>
        <label>
          Package Name:
          <input
            type="text"
            value={packageName}
            onChange={(e) => setPackageName(e.target.value)}
            required
          />
        </label>
        <div>
          <h2>Select Courses:</h2>
          {loading ? (
            <p>Loading courses...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <div>
              {courses.map((course) => (
                <div key={course.id}>
                  <label>
                    <input
                      type="checkbox"
                      value={course.id}
                      onChange={(e) => handleCourseSelection(e, course.id)}
                    />
                    {course.courseName}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
        <button type="submit">Create Package</button>
      </form>
    </div>
  );
};

export default Page;

"use client";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { db } from "@/firebase/firebase"; // Ensure your Firebase setup is correct
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import Link from "next/link";

const Page = () => {
  const currentPage = usePathname();
  const pathArray = currentPage.split("/");
  const packageId = pathArray[pathArray.length - 1];
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const packageDoc = await getDoc(doc(db, "coursePackages", packageId));

        if (!packageDoc.exists()) {
          setError("Package not found.");
          setLoading(false);
          return;
        }

        const packageData = packageDoc.data();
        const courseIds = packageData.courses || [];

        // Fetch the course documents
        const coursesCollection = collection(db, "courses");
        const coursesDocs = await Promise.all(
          courseIds.map((courseId) => getDoc(doc(coursesCollection, courseId)))
        );

        const allCourses = coursesDocs
          .filter((doc) => doc.exists())
          .map((doc) => ({ id: doc.id, ...doc.data() }));

        setCourses(allCourses);
      } catch (err) {
        setError("Failed to fetch courses. Please try again.");
        console.error("Error fetching courses:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [packageId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Courses in Package</h1>
      {courses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={`https://via.placeholder.com/400x200.png?text=${course.name}`}
                alt={course.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-green-600">
                  {course.name}
                </h2>
                <p className="text-gray-700 mt-2">{course.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <Link
                    href={{
                      pathname: `/user/dashboard/mypackages/[mycourses]/[course]`,
                      query: { mycourses: packageId, course: course.id },
                    }}
                    as={`/user/dashboard/mypackages/${packageId}/${course.id}`}
                  >
                    {" "}
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
                      Learn{" "}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No courses available in this package.</p>
      )}
    </div>
  );
};

export default Page;

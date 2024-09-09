"use client";
import React, { useState, useEffect } from "react";
import { db } from "@/firebase/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import CoursePackagesList from "@/components/admin/AllCoursePackages";

const Page = () => {
  const [courses, setCourses] = useState([]);
  const [schools, setSchools] = useState([]);
  const [boards, setBoards] = useState([]);
  const [coursePackages, setCoursePackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    packageName: "",
    price: "",
    discountedPrice: "",
    startingDate: "",
  });
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [selectedSchools, setSelectedSchools] = useState([]);
  const [selectedBoards, setSelectedBoards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      }
    };

    const fetchSchools = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "schools"));
        const schoolList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSchools(schoolList);
      } catch (err) {
        setError("Failed to fetch schools. Please try again.");
        console.error("Error fetching schools:", err);
      }
    };

    const fetchBoards = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "boards"));
        const boardList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBoards(boardList);
      } catch (err) {
        setError("Failed to fetch boards. Please try again.");
        console.error("Error fetching boards:", err);
      }
    };

    const fetchCoursePackages = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "coursePackages"));
        const packageList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCoursePackages(packageList);
      } catch (err) {
        setError("Failed to fetch course packages. Please try again.");
        console.error("Error fetching course packages:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
    fetchSchools();
    fetchBoards();
    fetchCoursePackages();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCourseSelection = (e, courseId) => {
    if (e.target.checked) {
      setSelectedCourses([...selectedCourses, courseId]);
    } else {
      setSelectedCourses(selectedCourses.filter((id) => id !== courseId));
    }
  };

  const handleSchoolSelection = (e, schoolId) => {
    if (e.target.checked) {
      setSelectedSchools([...selectedSchools, schoolId]);
    } else {
      setSelectedSchools(selectedSchools.filter((id) => id !== schoolId));
    }
  };

  const handleBoardSelection = (e, boardId) => {
    if (e.target.checked) {
      setSelectedBoards([...selectedBoards, boardId]);
    } else {
      setSelectedBoards(selectedBoards.filter((id) => id !== boardId));
    }
  };

  const handlePackageCreation = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "coursePackages"), {
        ...formData,
        price: parseFloat(formData.price),
        discountedPrice: parseFloat(formData.discountedPrice),
        startingDate: new Date(formData.startingDate).toISOString(),
        dateOfCreation: new Date().toISOString(),
        courses: selectedCourses,
        schools: selectedSchools,
        boards: selectedBoards,
      });

      const querySnapshot = await getDocs(collection(db, "coursePackages"));
      const packageList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCoursePackages(packageList);

      setFormData({
        packageName: "",
        price: "",
        discountedPrice: "",
        startingDate: "",
      });
      setSelectedCourses([]);
      setSelectedSchools([]);
      setSelectedBoards([]);
      setIsModalOpen(false);
      alert("Course package created successfully!");
    } catch (err) {
      console.error("Error creating course package:", err);
      setError("Failed to create course package. Please try again.");
    }
  };

  const handleDelete = async (packageId) => {
    try {
      await getDocs(collection(db, "coursePackages"));
      setCoursePackages((prevPackages) =>
        prevPackages.filter((pkg) => pkg.id !== packageId)
      );
    } catch (err) {
      console.error("Error updating course packages:", err);
    }
  };

  return (
    <div className="p-4">
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition"
      >
        Create Course Package
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg  w-[1000px] relative max-h-screen overflow-y-auto">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">Create Course Package</h2>
            <form onSubmit={handlePackageCreation}>
              <div className="mb-4">
                <label className="block text-gray-700">Package Name:</label>
                <input
                  type="text"
                  name="packageName"
                  value={formData.packageName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="flex gap-10">
                {" "}
                <div className="mb-4">
                  <label className="block text-gray-700">Price:</label>
                  <input
                    type="number"
                    step="0.01"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">
                    Discounted Price:
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    name="discountedPrice"
                    value={formData.discountedPrice}
                    onChange={handleInputChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Starting Date:</label>
                <input
                  type="date"
                  name="startingDate"
                  value={formData.startingDate}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="flex gap-5">
                {" "}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">
                    Select Courses:
                  </h3>
                  <div className="h-32 overflow-y-auto">
                    {loading ? (
                      <p>Loading courses...</p>
                    ) : error ? (
                      <p className="text-red-500">{error}</p>
                    ) : (
                      <div className="space-y-2">
                        {courses.map((course) => (
                          <label key={course.id} className="flex items-center">
                            <input
                              type="checkbox"
                              checked={selectedCourses.includes(course.id)}
                              onChange={(e) =>
                                handleCourseSelection(e, course.id)
                              }
                              className="mr-2"
                            />
                            {course.courseName}
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="mb-4 ">
                  <h3 className="text-lg font-semibold mb-2">
                    Select Schools:
                  </h3>
                  <div className="h-32 overflow-y-auto">
                    {loading ? (
                      <p>Loading schools...</p>
                    ) : error ? (
                      <p className="text-red-500">{error}</p>
                    ) : (
                      <div className="space-y-2">
                        {schools.map((school) => (
                          <label key={school.id} className="flex items-center">
                            <input
                              type="checkbox"
                              checked={selectedSchools.includes(school.id)}
                              onChange={(e) =>
                                handleSchoolSelection(e, school.id)
                              }
                              className="mr-2"
                            />
                            {school.schoolName}
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Select Boards:</h3>
                  <div className="h-32 overflow-y-auto">
                    {loading ? (
                      <p>Loading boards...</p>
                    ) : error ? (
                      <p className="text-red-500">{error}</p>
                    ) : (
                      <div className="space-y-2">
                        {boards.map((board) => (
                          <label key={board.id} className="flex items-center">
                            <input
                              type="checkbox"
                              checked={selectedBoards.includes(board.id)}
                              onChange={(e) =>
                                handleBoardSelection(e, board.id)
                              }
                              className="mr-2"
                            />
                            {board.boardName}
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition"
                >
                  Create Package
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <CoursePackagesList
        coursePackages={coursePackages}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Page;

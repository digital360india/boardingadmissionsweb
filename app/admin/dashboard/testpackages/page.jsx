"use client";
import React, { useState, useEffect } from "react";
import { db } from "@/firebase/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import TestPackagesList from "@/components/admin/AllTestPackages";

const Page = () => {
  const [tests, settests] = useState([]);
  const [testPackages, settestPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    packageName: "",
    price: "",
    discountedPrice: "",
    studentsEnrolled: "",
    startingDate: "",
  });
  const [selectedtests, setSelectedtests] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchtests = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "tests"));
        const courseList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        settests(courseList);
      } catch (err) {
        setError("Failed to fetch tests. Please try again.");
        console.error("Error fetching tests:", err);
      }
    };

    const fetchtestPackages = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "testPackages"));
        const packageList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        settestPackages(packageList);
      } catch (err) {
        setError("Failed to fetch course packages. Please try again.");
        console.error("Error fetching course packages:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchtests();
    fetchtestPackages();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handletestselection = (e, courseId) => {
    if (e.target.checked) {
      setSelectedtests([...selectedtests, courseId]);
    } else {
      setSelectedtests(selectedtests.filter((id) => id !== courseId));
    }
  };

  const handlePackageCreation = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "testPackages"), {
        ...formData,
        price: parseFloat(formData.price),
        discountedPrice: parseFloat(formData.discountedPrice),
        studentsEnrolled: parseInt(formData.studentsEnrolled, 10),
        startingDate: new Date(formData.startingDate).toISOString(),
        dateOfCreation: new Date().toISOString(),
        tests: selectedtests,
      });
      const querySnapshot = await getDocs(collection(db, "testPackages"));
      const packageList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      settestPackages(packageList);

      setFormData({
        packageName: "",
        price: "",
        discountedPrice: "",
        studentsEnrolled: "",
        startingDate: "",
      });
      setSelectedtests([]);
      setIsModalOpen(false);
      alert("Test package created successfully!");
    } catch (err) {
      console.error("Error creating Test package:", err);
      setError("Failed to create Test package. Please try again.");
    }
  };

  const handleDelete = async (packageId) => {
    try {
      await getDocs(collection(db, "testPackages"));
      settestPackages((prevPackages) => prevPackages.filter(pkg => pkg.id !== packageId));
    } catch (err) {
      console.error("Error updating Test packages:", err);
    }
  };

  return (
    <div className="p-4">
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition"
      > 
        Create Test Package
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">Create Test Package</h2>
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
                <label className="block text-gray-700">Discounted Price:</label>
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
              <div className="mb-4">
                <label className="block text-gray-700">Number of Students Enrolled:</label>
                <input
                  type="number"
                  name="studentsEnrolled"
                  value={formData.studentsEnrolled}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                  required
                />
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
              <div className="mb-4 h-32 overflow-y-scroll">
                <h3 className="text-lg font-semibold mb-2">Select tests:</h3>
                {loading ? (
                  <p>Loading tests...</p>
                ) : error ? (
                  <p className="text-red-500">{error}</p>
                ) : (
                  <div className="space-y-2">
                    {tests.map((course) => (
                      <label key={course.id} className="flex items-center">
                        <input
                          type="checkbox"
                          value={course.id}
                          onChange={(e) => handletestselection(e, course.id)}
                          className="mr-2"
                        />
                        {course.testTitle}
                      </label>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Create Package
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      <TestPackagesList testPackages={testPackages} onDelete={handleDelete} />
    </div>
  );
};

export default Page;


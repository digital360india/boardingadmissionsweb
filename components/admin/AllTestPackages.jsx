import React, { useState } from "react";
import { db } from "@/firebase/firebase";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";

const TestPackagesList = ({ testPackages, onDelete }) => {
  const [editingPackage, setEditingPackage] = useState(null);
  const [editFormData, setEditFormData] = useState({
    packageName: "",
    price: "",
    discountedPrice: "",
    studentsEnrolled: "",
    startingDate: "",
  });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({
      ...editFormData,
      [name]: value,
    });
  };

  const handleEdit = async (packageId) => {
    try {
      const packageRef = doc(db, "testPackages", packageId);
      await updateDoc(packageRef, {
        ...editFormData,
        price: parseFloat(editFormData.price),
        discountedPrice: parseFloat(editFormData.discountedPrice),
        studentsEnrolled: parseInt(editFormData.studentsEnrolled, 10),
        startingDate: new Date(editFormData.startingDate).toISOString(),
      });
      setEditingPackage(null);
      alert("Test package updated successfully!");
    } catch (err) {
      console.error("Error updating course package:", err);
      alert("Failed to update course package.");
    }
  };

  const handleDelete = async (packageId) => {
    try {
      await deleteDoc(doc(db, "testPackages", packageId));
      alert("Test package deleted successfully!");
      onDelete(packageId); // Notify parent component
    } catch (err) {
      console.error("Error deleting course package:", err);
      alert("Failed to delete course package.");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Test Packages</h2>
      {testPackages.length > 0 ? (
        <ul>
          {testPackages.map((pkg) => (
            <li key={pkg.id} className="mb-4 border-b pb-4">
              <h3 className="text-xl font-semibold">{pkg.packageName}</h3>
              <p>Price: ${pkg.price}</p>
              <p>Discounted Price: ${pkg.discountedPrice}</p>
              <p>Students Enrolled: {pkg.studentsEnrolled}</p>
              <p>
                Starting Date: {new Date(pkg.startingDate).toLocaleDateString()}
              </p>
              <button
                onClick={() => {
                  setEditingPackage(pkg.id);
                  setEditFormData({
                    packageName: pkg.packageName,
                    price: pkg.price,
                    discountedPrice: pkg.discountedPrice,
                    studentsEnrolled: pkg.studentsEnrolled,
                    startingDate: new Date(pkg.startingDate)
                      .toISOString()
                      .split("T")[0],
                  });
                }}
                className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(pkg.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              >
                Delete
              </button>
              {editingPackage === pkg.id && (
                <div className="mt-4">
                  <h4 className="text-lg font-bold">Edit Package</h4>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleEdit(pkg.id);
                    }}
                  >
                    <div className="mb-4">
                      <label className="block text-gray-700">
                        Package Name:
                      </label>
                      <input
                        type="text"
                        name="packageName"
                        value={editFormData.packageName}
                        onChange={handleEditChange}
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
                        value={editFormData.price}
                        onChange={handleEditChange}
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
                        value={editFormData.discountedPrice}
                        onChange={handleEditChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700">
                        Number of Students Enrolled:
                      </label>
                      <input
                        type="number"
                        name="studentsEnrolled"
                        value={editFormData.studentsEnrolled}
                        onChange={handleEditChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700">
                        Starting Date:
                      </label>
                      <input
                        type="date"
                        name="startingDate"
                        value={editFormData.startingDate}
                        onChange={handleEditChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                      Save Changes
                    </button>
                    <button
                      type="button"
                      onClick={() => setEditingPackage(null)}
                      className="bg-gray-500 text-white px-4 py-2 rounded-md ml-2 hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                  </form>
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No course packages available.</p>
      )}
    </div>
  );
};

export default TestPackagesList;

"use client";
import React from "react";

const CoursePackagesList = ({ coursePackages }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Course Packages</h1>
      {coursePackages.length === 0 ? (
        <p>Loading.....</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {coursePackages.map((pkg) => (
            <div key={pkg.id} className="bg-white p-4 border border-gray-300 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">{pkg.packageName}</h2>
              <p className="mb-2"><strong>Price:</strong> ₹{pkg.price.toFixed(2)}</p>
              <p className="mb-2"><strong>Discounted Price:</strong> ₹{pkg.discountedPrice.toFixed(2)}</p>
              <p className="mb-2"><strong>Students Enrolled:</strong> {pkg.studentsEnrolled}</p>
              <p className="mb-2"><strong>Starting Date:</strong> {new Date(pkg.startingDate).toLocaleDateString()}</p>
              <p className="mb-2"><strong>Date of Creation:</strong> {new Date(pkg.dateOfCreation).toLocaleDateString()}</p>
              <p className="mb-2"><strong>Courses:</strong></p>
              <ul className="list-disc list-inside">
                {pkg.courses.map((courseId) => (
                  <li key={courseId}>{courseId}</li> // Update this if you have course names
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CoursePackagesList;

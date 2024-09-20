"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { doc, getDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase/firebase";

export default function Checkout() {
  const currentPage = usePathname();
  const pathArray = currentPage.split("/");
  const packageId = pathArray[pathArray.length - 1];
  const [courses, setCourses] = useState([]);
  const [packageDetails, setPackageDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPackageAndCourses = async () => {
      if (!packageId) {
        setError("Invalid package ID.");
        setLoading(false);
        return;
      }

      try {
        const packageQuery = query(
          collection(db, "coursePackages"),
          where("id", "==", packageId)
        );
        const packageDocs = await getDocs(packageQuery);

        if (packageDocs.empty) {
          setError("Package not found.");
          setLoading(false);
          return;
        }

        const packageData = packageDocs.docs[0].data();
        setPackageDetails(packageData);

        const coursePromises = packageData.courses.map((courseId) =>
          getDoc(doc(db, "courses", courseId))
        );
        const courseSnapshots = await Promise.all(coursePromises);
        const fetchedCourses = courseSnapshots.map((snapshot) => snapshot.data());
        setCourses(fetchedCourses);
      } catch (err) {
        setError("Failed to fetch package or courses. Please try again.");
        console.error("Error fetching package or courses:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPackageAndCourses();
  }, [packageId]);

  const handleCheckout = async () => {
    const amount = packageDetails?.price;
    const mobile = "your_mobile_number"; 
    const muid = "your_user_id";

    try {
      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount, mobile, muid }),
      });

      const data = await response.json();
      if (response.ok) {
        window.location.href = data.redirectUrl;
      } else {
        console.error("Payment initiation failed:", data);
        alert("Failed to initiate payment: " + data.error);
      }
    } catch (error) {
      console.error("Error during checkout:", error);
      alert("An error occurred. Please try again.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="xl:px-[100px]  py-[40px] flex flex-col lg:flex-row px-6 gap-10 justify-between">
      <div className="space-y-8">
        {packageDetails && (
          <div className="lg:py-[32px] lg:px-[32px] p-4 border rounded-lg flex flex-col gap-2">
            <h1 className="text-3xl font-semibold text-background05">Package</h1>
            <p className="font-semibold lg:text-[24px] text-[18px] lg:mb-4 ">
              {packageDetails.packageName || "Package Name"}
            </p>
            <img
              className="w-full h-[200px] object-fill rounded-md"
              src={packageDetails.image || "./images/product.png"}
              alt={packageDetails.packageName || "Package Image"}
            />
            <p className="font-medium lg:text-[24px] text-background05 text-[18px]">
            {"Package Price : "}  ${packageDetails.price || "0"}
            </p>
          
            <p className="font-medium lg:text-[18px] text-[14px] text-[#808080]">
              Starting Date: {new Date(packageDetails.startingDate).toLocaleDateString()}
            </p>
            <p className="font-medium lg:text-[18px] text-[14px] text-[#808080]">
              Students Enrolled: {packageDetails.studentsEnrolled || "0"}
            </p>
          </div>
        )}

        {/* Courses */}
        <div className=" flex flex-col gap-2 p-4 border rounded-lg">
          <p className="font-semibold lg:text-[24px] text-[18px] lg:mb-4 lg:m-4 my-4">
            Courses in this Package
          </p>
          {courses.map((course, index) => (
            <div key={index} className="flex lg:gap-[52px] gap-4 mb-4">
              <div>
                <img
                  className="w-[75px] h-[75px] rounded-md"
                  src={course.thumbnailImage || "./images/product.png"}
                  alt={course.courseName || "Course Image"}
                />
              </div>
              <div className="lg:space-y-3 space-y-1">
                <p className="font-medium lg:text-[24px] text-[16px]">
                  {course.courseName || "Course Name"}
                </p>
            
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Order Summary and Other Components */}
      <div className="md:w-[560px] h-fit py-[32px] px-[32px] border rounded-lg">
        <p className="font-semibold text-[24px] mb-8">Order Summary</p>
        <div className="flex flex-col space-y-4 py-4">
          <div className="flex justify-between">
            <p className="font-semibold lg:text-[24px] text-[18px]">Subtotal</p>
            <p className="font-medium lg:text-[24px] text-[18px]">
              ${packageDetails?.discountedPrice || "0"}
            </p>
          </div>
          <div className="space-y-2 text-[16px]">
            <div className="justify-between flex">
              <p className="text-[#545454] text-[14px] lg:text-[16px]">Discount</p>
              <p className="text-[#95D18B] font-medium">$0</p>
            </div>
            {/* Add more discount or additional charges here if needed */}
          </div>
          <div className="flex justify-between">
            <p className="font-semibold lg:text-[24px] text-[18px]">Total</p>
            <p className="font-medium lg:text-[24px] text-[18px]">
              ${packageDetails?.discountedPrice || "0"}
            </p>
          </div>
        </div>
        <button onClick={handleCheckout} className="py-4 mt-10 w-full bg-gradient01 rounded-md text-[18px] font-medium text-white">
          Proceed to Buy
        </button>
      </div>
    </div>
  );
}

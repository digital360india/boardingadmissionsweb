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
        // Fetch package details
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

        // Fetch courses inside the package
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="xl:px-[100px] lg:mt-20 lg:px-10 py-[90px] flex flex-col lg:flex-row px-6 gap-10 justify-between">
      {/* Package Details */}
      <div className="space-y-8">
        {packageDetails && (
          <div className="lg:py-[32px] lg:px-[32px] p-4 border rounded-lg">
            <p className="font-semibold lg:text-[24px] text-[18px] lg:mb-8 lg:m-4 my-4">
              {packageDetails.packageName || "Package Name"}
            </p>
            <img
              className="w-full h-[200px] object-cover rounded-md"
              src={packageDetails.image || "./images/product.png"}
              alt={packageDetails.packageName || "Package Image"}
            />
            <p className="font-medium lg:text-[24px] text-[18px]">
              ${packageDetails.discountedPrice || "0"} (Discounted Price)
            </p>
            <p className="font-medium lg:text-[18px] text-[12px] text-[#808080]">
              ${packageDetails.price || "0"} (Original Price)
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
        <div className="lg:py-[32px] lg:px-[32px] p-4 border rounded-lg">
          <p className="font-semibold lg:text-[24px] text-[18px] lg:mb-8 lg:m-4 my-4">
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
                <div className="flex gap-4 items-center">
                  <p className="font-medium lg:text-[32px] text-[18px]">
                    ${course.discountedPrice || "0"}
                  </p>
                  <p className="font-medium lg:text-[18px] text-[12px] text-[#808080]">
                    ${course.originalPrice || "0"}
                  </p>
                </div>
                <div className="flex gap-10">
                  <p className="lg:text-[14px] text-[10px] text-[#808080]">
                    <u>Add to wishlist</u>
                  </p>
                  <p className="lg:text-[14px] text-[10px] text-[#808080]">
                    <u>Remove</u>
                  </p>
                  <p className="lg:text-[14px] text-[10px] text-[#808080]">
                    <u>Share</u>
                  </p>
                </div>
              </div>
            </div>
         ) )}
        </div>
      </div>
      {/* Order Summary and Other Components */}
      <div className="py-[32px] px-[32px] border rounded-lg">
        <p className="font-semibold text-[24px] mb-8">Order Summary</p>
        <p className="text-[14px]">Discount code / Promo code</p>
        <div className="py-4 px-4 border rounded flex justify-between mb-4">
          <input
            type="text"
            placeholder="Enter Code"
            className="flex-grow mr-2 p-2 border rounded"
          />
          <button className="text-white bg-gradient01 px-5 py-2 rounded">
            Apply
          </button>
        </div>
        <div className="border rounded-md lg:py-[32px] py-6 px-4 flex lg:gap-6 gap-4 items-center my-4">
          <p>
            <input
              className="h-[24px] w-[24px]"
              type="checkbox"
              id="test-series"
            />
          </p>
          <img
            src="./images/pencil.png"
            alt="Test Series"
            className="w-[83px] h-[61px] rounded-md"
          />
          <div>
            <p className="font-medium lg:text-[18px] text-[14px]">
              Test Series with PYQs
            </p>
            <p className="text-[12px]">Details about the test series</p>
            <p className="font-medium lg:text-[24px] text-[18px]">$120</p>
          </div>
        </div>
        <div className="flex flex-col space-y-4 py-4">
          <div className="flex justify-between">
            <p className="font-semibold lg:text-[24px] text-[18px]">Subtotal</p>
            <p className="font-medium lg:text-[24px] text-[18px]">
              ${packageDetails?.discountedPrice || "0"}
            </p>
          </div>
          <div className="space-y-2 text-[16px]">
            <div className="justify-between flex">
              <p className="text-[#545454] text-[14px] lg:text-[16px]">
                Discount
              </p>
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
        <button className="py-4 mt-10 w-full bg-gradient01 rounded-md text-[18px] font-medium text-white">
          Proceed to Buy
        </button>
      </div>
    </div>
  );
}

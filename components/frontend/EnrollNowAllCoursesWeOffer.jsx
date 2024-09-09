"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/firebase/firebase";

const EnrollNowAllCoursesWeOffer = () => {
  const currentPage = usePathname();
  const pathArray = currentPage.split("/");
  const packageId = pathArray[pathArray.length - 1];
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const determinePackageUID = () => {
    if (packageId === "aceentranceexams") {
      return "aceentranceexams";
    } else if (packageId === "foundationcourses") {
      return "foundationcourses";
    } else if (packageId === "softskillmastery") {
      return "softskillmastery";
    }
    return null;
  };

  useEffect(() => {
    const fetchPackages = async () => {
      const uid = determinePackageUID();

      if (!uid) {
        setError("Invalid package ID.");
        setLoading(false);
        return;
      }

      try {
        const q = query(
          collection(db, "coursePackages"),
          where("packageUID", "==", uid)
        );
        const packageDocs = await getDocs(q);

        if (packageDocs.empty) {
          setError("No packages found.");
          setLoading(false);
          return;
        }

        const fetchedPackages = packageDocs.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setPackages(fetchedPackages);
      } catch (err) {
        setError("Failed to fetch packages. Please try again.");
        console.error("Error fetching packages:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, [packageId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <div className="w-full mt-[7rem]">
        <div className="px-6 md:px-12 xl:pt-8">
          <h1 className="text-[1.5rem] md:text-[3rem] text-primary02 font-bold">
            Courses we Offer
          </h1>
          <h1 className="text-[#3C4852] pt-[0.4rem] text-[0.875rem] md:text-[1.13rem]">
            {packages.length} packages available
          </h1>
        </div>

        <div className="flex flex-wrap gap-8 p-3 md:p-12">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="md:w-[38vw] lg:w-[29vw] bg-[#FFFFFF] border border-[#01010120] rounded-[9px] pb-4 drop-shadow-lg"
            >
              <img
                src={pkg.image}
                width={1}
                height={228}
                alt={pkg.packageName}
                className="w-full"
              />
              <h1 className="text-primary02 text-[1rem] md:text-[1.5rem] font-semibold text-center mt-2 md:mt-3">
                {pkg.packageName}
              </h1>
              <p className="text-[0.5rem] md:text-[0.8rem] text-[#212224] pt-2 md:pt-3 text-center px-8">
                Starting Date: {new Date(pkg.startingDate).toLocaleDateString()}
              </p>
              <p className="text-[0.5rem] md:text-[0.8rem] text-[#212224] text-center px-8">
                Price: ₹{pkg.price.toLocaleString()}
              </p>
              <p className="text-[0.5rem] md:text-[0.8rem] text-[#212224] text-center px-8">
                Discounted Price: ₹{pkg.discountedPrice.toLocaleString()}
              </p>
              <p className="text-[0.5rem] md:text-[0.8rem] text-[#212224] text-center px-8">
                Students Enrolled: {pkg.studentsEnrolled}
              </p>

              <hr className="mx-2 md:mx-10 mt-3" />

              <h2 className="text-center text-[1rem] font-bold mt-2">
                Courses in this package:
              </h2>
              <ul className="text-center text-[0.8rem] px-4">
                {pkg.courses.map((courseId, index) => (
                  <li key={index}>{courseId}</li>
                ))}
              </ul>

              <div className="flex justify-center mt-4">
                <button
                  type="submit"
                  className="w-[7.5rem] h-[2rem] xl:w-[8.625rem] xl:h-[2.5rem] text-white rounded-md border border-primary02 bg-gradient01 border-custom"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EnrollNowAllCoursesWeOffer;

"use client";
import { UserContext } from "@/userProvider";
import { collection, getDoc, doc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { db } from "@/firebase/firebase"; 
import Link from "next/link";

const MyTestScreen = () => {
  const { user } = useContext(UserContext);
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


    const fetchPackages = async () => {
      console.log("User object:", user); 

      if (user && user.mytestpackages && user.mytestpackages.length > 0) {
        try {
          const allPackages = [];
          for (const pkg of user.mytestpackages) {
            console.log("Fetching document for  df packageId:", pkg.packageId);
            const packageDoc = await getDoc(
              doc(db, "testPackages", pkg.packageId)
            );
            if (packageDoc.exists()) {
              const packageData = packageDoc.data();
              allPackages.push({ id: packageDoc.id, ...packageData });
            } else {
              console.warn(`No document found for packageId: ${pkg.packageId}`);
            }
          }

          setPackages(allPackages);
        } catch (err) {
          setError("Failed to fetch course packages. Please try again.");
          console.error("Error fetching course packages:", err);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };
    useEffect(() => {
    fetchPackages();
  }, [user]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
   <>      {user ? 
    <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-6 text-background04 ">
      My Packages
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {packages.length > 0 ? (
        packages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={pkg.image}
              alt={pkg.packageName}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-background04">
                {pkg.packageName}
              </h2>
              <p className="text-gray-700 mt-2">{`Starting Date: ${new Date(
                pkg.startingDate
              ).toLocaleDateString()}`}</p>
              <p className="text-gray-700 mt-1">{`Date of Creation: ${new Date(
                pkg.dateOfCreation
              ).toLocaleDateString()}`}</p>
              <p className="text-gray-700 mt-1">{`Students Enrolled: ${pkg.studentsEnrolled}`}</p>
              <p className="text-gray-700 mt-1">{`Price: ₹${pkg.price}`}</p>
              <p className="text-gray-700 mt-1">{`Discounted Price: ₹${pkg.discountedPrice}`}</p>
              <div className="mt-4 flex w-full justify-between items-center">
                <Link
                  className="flex w-full"
                  href={`/user/dashboard/mytests/[mytests]`}
                  as={`/user/dashboard/mytests/${pkg.id}`}
                >
                  <button className="bg-background05 text-white px-4 py-2 rounded-lg w-full">
                    Learn
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No course packages available.</p>
      )}
    </div>
    </div> : <div>Loading...</div>}
</>
  );
};

export default MyTestScreen;

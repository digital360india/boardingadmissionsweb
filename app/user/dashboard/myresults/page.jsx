"use client";
import { db } from "@/firebase/firebase";
import { UserContext } from "@/userProvider";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user?.id) {
      const fetchData = async () => {
        const q = query(
          collection(db, "tests"),
          where("attemptedBy", "array-contains", user.id)
        );
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          let dataArr = [];
          querySnapshot.forEach((doc) => {
            dataArr.push({ ...doc.data(), id: doc.id });
          });
          console.log(dataArr);
          setData(dataArr);
        });
        return () => {
          unsubscribe();
        };
      };
      fetchData();
    }
  }, [user?.id]);
  console.log(data.length);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Tests in Package
      </h1>
      {data.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {test.testTitle}
              </h2>
              <p className="text-gray-600 mb-2">{test.testDescription}</p>
              <p className="text-gray-600 mb-2">{test.totalmarks}</p>
              <div className="text-gray-500 text-sm mb-4">
                <p>Duration: {test.duration} minutes</p>
                <p>
                  Upload Date:{" "}
                  {new Date(test.testUploadDate).toLocaleDateString()}
                </p>
              </div>
              <a href={`/user/dashboard/myresults/${user.id}_${test.id}`}>
                <button className="bg-background04 text-white px-4 py-2 rounded-lg w-full">
                  Show Result
                </button>
              </a> 
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">
          No tests found in this package.
        </p>
      )}
    </div>
  );
}

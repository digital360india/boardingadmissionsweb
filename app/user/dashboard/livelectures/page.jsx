"use client";
import React, { useState, useEffect, useContext } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { UserContext } from "@/userProvider";

const LiveLectures = () => {
  const [liveLectures, setLiveLectures] = useState([]);
  const [futureLectures, setFutureLectures] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const coursePackageIds = user.mycoursepackages.map((pkg) => pkg.packageId);
    const q = query(
      collection(db, "liveLecture"),
      where("courseID", "in", coursePackageIds)
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const currentLectures = [];
      const upcomingLectures = [];
      const now = new Date().toISOString();

      querySnapshot.forEach((doc) => {
        const lectureData = { id: doc.id, ...doc.data() };
        if (
          lectureData.startDateTime <= now &&
          lectureData.endDateTime >= now
        ) {
          // Current live lecture
          currentLectures.push(lectureData);
        } else if (lectureData.startDateTime > now) {
          // Future lecture
          upcomingLectures.push(lectureData);
        }
      });

      setLiveLectures(currentLectures);
      setFutureLectures(upcomingLectures);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-6">
      {/* Ongoing Class Section */}
      <h2 className="text-lg font-semibold mb-4">Ongoing Class</h2>
      {liveLectures.length === 0 ? (
        <p>No live lectures available.</p>
      ) : (
        <div className="flex gap-10">
          {liveLectures.map((lecture) => (
            <div key={lecture.id} className="min-w-fit max-w-96 p-4 bg-white shadow-lg rounded-lg  flex flex-col gap-54">
              {/* <img
                src="/icons/Boardinglogo.svg" // Replace with actual image
                alt="Class"
                className="w-20 h-20 rounded-full mb-4"
              /> */}
              <h3 className="text-xl font-semibold mb-2">
                 {lecture.lectureName}
              </h3>
              <p className="text-gray-500">
                Instructor: {lecture.teacherName || "Instructor Name"}
              </p>
              <p className="text-gray-700 mt-2">
                  {new Date(lecture.startDateTime).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true, 
                  })}{" "}
                  -{" "}
                  {new Date(lecture.endDateTime).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true, 
                  })}
                </p>
              <a
                href={lecture.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-background05 hover:bg-green-600 text-white px-4 py-2 rounded w-28"
              >
                Join Class
              </a>
            </div>
          ))}
        </div>
      )}


      <h2 className="text-lg font-semibold mt-10 mb-4">Today Upcoming Sessions</h2>
      {futureLectures.length === 0 ? (
        <p>No upcoming lectures available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {futureLectures.map((lecture) => (
            <div
              key={lecture.id}
              className="bg-white shadow-lg rounded-lg p-6 flex"
            >
              <img
                src="/icons/Boardinglogo.svg"
                alt="Class"
                className="w-32 h-32 object-cover rounded-md mb-4"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {lecture.lectureName}
                </h3>
                <p className="text-gray-500">
                  Instructor: {lecture.teacherName || "N/A"}
                </p>
                <p className="text-gray-700 mt-2">
                  {new Date(lecture.startDateTime).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true, 
                  })}{" "}
                  -{" "}
                  {new Date(lecture.endDateTime).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true, 
                  })}
                </p>

                <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
                  Set Reminder
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LiveLectures;

"use client"
import React, { useState, useEffect, useContext } from 'react';

import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '@/firebase/firebase';
import { UserContext } from '@/userProvider';

const LiveLectures = () => {
  const [liveLectures, setLiveLectures] = useState([]);
  const [loading, setLoading] = useState(true);
  const {user} = useContext(UserContext);

  useEffect(() => {
console.log(user)
    const coursePackageIds = user.mycoursepackages.map(pkg => pkg.packageId);
    console.log(coursePackageIds)
    const q = query(
      collection(db, 'liveLecture'),
      where('courseID', 'in', coursePackageIds)
    );


    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const lectures = [];
      querySnapshot.forEach((doc) => {
        lectures.push({ id: doc.id, ...doc.data() });
      });
      setLiveLectures(lectures);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [user]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Live Lectures</h2>
      {liveLectures.length === 0 ? (
        <p>No live lectures available.</p>
      ) : (
        <ul>
          {liveLectures.map((lecture) => (
            <li key={lecture.id} className="mb-4">
              <h3 className="text-xl font-semibold">{lecture.lectureName}</h3>
              <p>Chapter: {lecture.chapterName}</p>
              <p>Lecture Time: {new Date(lecture.lectureTime).toLocaleString()}</p>
              <a
                href={lecture.videoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Watch Video
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LiveLectures;

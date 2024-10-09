"use client";
import React, { useState, useEffect } from "react";
import { db } from "@/firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

const Leaderboard = ({ category }) => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "leads"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const filteredData = data
          .filter((entry) => entry.score !== undefined && entry.score !== null && entry.category === category)
          .sort((a, b) => {
            if (b.score === a.score) {
              return a.timeTaken - b.timeTaken;
            }
            return b.score - a.score;
          });

        setLeaderboardData(filteredData.slice(0, 10));
      } catch (error) {
        console.error("Error fetching leaderboard data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboardData();
  }, [category]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  if (loading) {
    return <div>Loading leaderboard...</div>;
  }

  return (
    <div className="border rounded-md p-2">
      <h1 className="text-[24px] font-semibold text-center">Leaderboard</h1>
      <table className="w-full text-left mt-5 border">
        <thead className="border">
          <tr>
            <th className="px-4 py-2">Rank</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Score</th>
            <th className="px-4 py-2">Time Taken</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((entry, index) => (
            <tr key={entry.id} className="border">
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2 capitalize">{entry.name || "Anonymous"}</td>
              <td className="px-4 py-2">{entry.score}</td>
              <td className="px-4 py-2">
                {entry.timeTaken ? formatTime(entry.timeTaken) : "N/A"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;

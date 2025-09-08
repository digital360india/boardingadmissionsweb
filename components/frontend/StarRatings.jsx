"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRatings({ lat, lng, schoolName }) {
  const [rating, setRating] = useState(null);
  const [error, setError] = useState("");
  console.log(lat, lng, schoolName);

  useEffect(() => {
    const fetchRating = async () => {
      try {
        const response = await axios.get("/api/getSchoolRating", {
          params: {
            schoolName,
            lat,
            lng,
          },
        });
        console.log(response);
        if (response.status === 200) {
          setRating(response.data.rating);
          setError("");
        } else {
          setRating(null);
          setError(response.data.message || "School not found");
        }
      } catch (err) {
        console.error("Error fetching school rating:", err);
        setRating(null);
        setError("Error fetching school rating");
      }
    };
    fetchRating();
  });
  return (
    <div>
      <div className="flex text-center lg:gap-3 gap-2 items-center">
        <h2 className="text-[#075D70] ">
          <div className="border-none">{rating}</div>
        </h2>

        <div className="border-none  flex gap-2">
          <FaStar className="text-yellow-200" />
          <FaStar className="text-yellow-200" />
          <FaStar className="text-yellow-200" />
          <FaStar className="text-yellow-200" />
        </div>

        <p className="text-[#075D70] "> {" "} (251 Reviews)</p>
      </div>
    </div>
  );
}

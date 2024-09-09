"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const VideoPlayer = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const videoUrl = searchParams.get("videoUrl") || ""; 
  const index = parseInt(searchParams.get("index") || "0", 10);
  const totalLectures = parseInt(searchParams.get("totalLectures") || "0", 10);

  const [currentIndex, setCurrentIndex] = useState(index);
  const [lectures, setLectures] = useState([]);
  useEffect(() => {
    const lectureUrls = Array.from(searchParams.keys())
      .filter(key => key.startsWith("videoUrl"))
      .map(key => searchParams.get(key) || ""); 
    
    console.log("Lecture URLs:", lectureUrls); // Debugging statement
    setLectures(lectureUrls);
  }, [searchParams]);

  useEffect(() => {
    console.log("Current Index:", currentIndex); // Debugging statement
    console.log("Total Lectures:", totalLectures); // Debugging statement
    console.log("Video URL:", videoUrl); // Debugging statement
  }, [currentIndex, totalLectures, videoUrl]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalLectures);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalLectures) % totalLectures);
  };

  return (
    <div className="container mx-auto p-4">
      <button onClick={() => router.back()} className="flex gap-1 mb-4">
        <span>Back</span>
      </button>

      <div className="w-full">
        <video
          controls
          className="w-full h-auto"
          src={lectures[currentIndex]}
        >
          Your browser does not support the video tag.
        </video>

        <div className="mt-4">
          <button
            onClick={handlePrevious}
            className="mr-2 px-4 py-2 bg-gray-700 text-white rounded"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-gray-700 text-white rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;

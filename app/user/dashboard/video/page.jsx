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
      .filter((key) => key.startsWith("videoUrl"))
      .map((key) => searchParams.get(key) || "");

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
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + totalLectures) % totalLectures
    );
  };
 // Tabs management
 const [activeTab, setActiveTab] = useState("about");

 // Function to switch tabs
 const handleTabClick = (tab) => {
   setActiveTab(tab);
 };
 const messages = [
  {
    sender: "Student",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rutrum sit amet arcu eu tempus. Cras sed elit arcu. Etiam volutpat velit sit amet diam sollicitudin, at volutpat nisi consectetur. Phasellus est ante, venenatis eleifend mi a, volutpat aliquet dui. Morbi bibendum lectus nec mauris lobortis, quis dictum eros mollis.",
    time: "Sent",
    date: "Today",
    backgroundColor: "bg-teal-700",
    textColor: "text-white",
  },
  {
    sender: "Mentor",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rutrum sit amet arcu eu tempus. Cras sed elit arcu. Etiam volutpat velit sit amet diam sollicitudin, at volutpat nisi consectetur. Phasellus est ante, venenatis eleifend mi a, volutpat aliquet dui. Morbi bibendum lectus nec mauris lobortis, quis dictum eros mollis.",
    time: "12 August 2024",
    date: "12 August 2024",
    backgroundColor: "bg-gray-200",
    textColor: "text-gray-700",
  },
];
  return (
    <div className="container mx-auto p-4">
      <button onClick={() => router.back()} className="flex gap-1 mb-4">
        <span>Back</span>
      </button>

      <div className="w-full flex justify-around">
        <div>
        <video controls className="w-full h-auto" src={lectures[currentIndex]}>
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

        <div className="max-w-4xl mx-auto p-4">
      {/* Tab Section */}
      <div className="flex space-x-4 border-b-2 pb-2">
        <button
          onClick={() => handleTabClick("about")}
          className={`px-4 py-2 ${
            activeTab === "about"
              ? "border-b-2 border-teal-600 text-teal-600"
              : "text-gray-500"
          } font-semibold`}
        >
          About
        </button>
        <button
          onClick={() => handleTabClick("notes")}
          className={`px-4 py-2 ${
            activeTab === "notes"
              ? "border-b-2 border-teal-600 text-teal-600"
              : "text-gray-500"
          } font-semibold`}
        >
          Notes
        </button>
      </div>

      {/* Content Section */}
      <div className="mt-4 text-gray-600">
        {activeTab === "about" && (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            rutrum placerat lectus quis blandit. Nam ut risus a mi vehicula
            porta. Aenean dictum et nulla sit amet fermentum. Integer finibus,
            elit ut tempor lacinia, velit eros facilisis velit, varius accumsan
            lacus ligula ac lectus. Maecenas eleifend pretium erat, sed
            elementum risus fermentum eget.
          </p>
        )}
        {activeTab === "notes" && (
          <p>
            Sed quis dictum nibh. Duis at lorem nisl. Praesent in laoreet dolor,
            finibus posuere dolor. Integer rutrum dolor nisl. Nulla facilisi.
          </p>
        )}
      </div>
    </div>
        </div>
        <div>
        <div className="max-w-md mx-auto p-4">
      {/* Chat input header */}
      <div className="flex items-center space-x-2 p-2 bg-white shadow rounded-lg">
        <input
          type="text"
          placeholder="Chat with mentor"
          className="flex-1 p-2 border rounded-md focus:outline-none"
        />
        <button className="p-2 bg-teal-600 text-white rounded-full">
          ✏️
        </button>
      </div>

      {/* Chat body */}
      <div className="mt-4 space-y-4">
        {/* Date Section */}
        {messages.map((message, index) => (
          <div key={index}>
            {/* Date Badge */}
            <div className="flex justify-center">
              <span className="px-4 py-1 bg-teal-100 text-teal-600 rounded-full text-xs">
                {message.date}
              </span>
            </div>

            {/* Message Bubble */}
            <div
              className={`mt-2 p-4 rounded-lg shadow-lg ${message.backgroundColor} ${message.textColor}`}
            >
              <div className="font-semibold">{`Name of ${message.sender}`}</div>
              <p className="mt-2">{message.content}</p>
              <div className="text-xs text-right mt-2">{message.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
        </div>
     
      </div>
    </div>
  );
};

export default VideoPlayer;

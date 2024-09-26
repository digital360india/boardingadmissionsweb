"use client";
import React, { useState } from "react";
import '@/components/frontend/HeroCarousel.css';
export default function AutoPlayVideo() {
  const [isLoading, setIsLoading] = useState(true);
  const handleVideoLoaded = () => {
    setIsLoading(false);
  };
  return (
    <div className="w-full flex justify-center ">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white z-50">
          <div className="h-screen w-full flex justify-center items-center relative bg-[#e9fdfa] ">
            <div className="ball h-[80px] w-[80px] md:h-[160px] md:w-[160px] shadow-md  rounded-[50%]"></div>
            <img
              src="icons/Boardinglogo.svg"
              className="object-fit ball h-[80px] w-[80px] md:h-[160px] md:w-[160px] shadow-md  rounded-[50%]"
            />
            <div className="ball h-[80px] w-[80px] md:h-[160px] md:w-[160px] shadow-lg rounded-[50%]"></div>
          </div>
        </div>
      )}
      {/* Container for the video */}
      <div className="w-[100%] h-[85%] md:block relative hidden">
        <video
          className="w-full h-[80%] object-cover"
          autoPlay
          loop
          muted
          playsInline
          onCanPlay={handleVideoLoaded}
          controls={false}
        >
          <source
            src="https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/carousel%2Fmobileviewvideo%20(1)%20(1).mp4?alt=media&token=0273a9fc-6edc-4c15-b642-1da56f906bc7"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="w-[100%] h-[60vh] md:hidden relative">
        <video
          className="w-full h-[100%] object-cover"
          autoPlay
          loop
          muted
          playsInline
          controls={false}
        >
          <source
            src="https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/carousel%2Fmobileviewvideo%20(1)%20(1).mp4?alt=media&token=0273a9fc-6edc-4c15-b642-1da56f906bc7"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

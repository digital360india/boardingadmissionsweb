"use client";
import React from "react";

export default function AutoPlayVideo() {
  return (
    <div className="w-full flex justify-center ">
      {/* Container for the video */}
      <div className="w-[100%] h-[85%] md:block relative hidden">
        <video
          className="w-full h-[80%] object-cover"
          autoPlay
          loop
          muted
          playsInline
          controls={false} 
        >
          <source src="https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/carousel%2Fmobileviewvideo%20(1)%20(1).mp4?alt=media&token=0273a9fc-6edc-4c15-b642-1da56f906bc7" type="video/mp4" />
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
          <source src="https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/carousel%2Fmobileviewvideo%20(1)%20(1).mp4?alt=media&token=0273a9fc-6edc-4c15-b642-1da56f906bc7" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

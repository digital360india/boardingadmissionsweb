"use client";
import React, { useState, useEffect } from "react";
import BookaDemoPopUp from "./BookaDemoPopUp";

export default function Flyer() {
  const [showFlyer, setShowFlyer] = useState(false);
  const [isPopupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFlyer(true);
    }, 1500); 

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (showFlyer) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showFlyer]);


  const handleClick = () => {
    setShowFlyer(false); 
    setPopupVisible(true);
  };


  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div>
      {showFlyer && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm z-50">
          <div className=" rounded-lg shadow-lg relative lg:w-[40%] lg:h-[80%] w-[85%] md:h-[80%]">
            <img
              src="/gif/mobileflyer.gif"
              alt="Mobile Flyer"
              className="w-full h-full rounded-lg"
            />
         
            <button
              className="absolute top-1 right-1 bg-primary02 rounded-full text-white hover:text-gray-800 flex items-center justify-center lg:w-10 lg:h-10 w-8 h-8"
              onClick={() => setShowFlyer(false)}
            >
              <img src="/Crossbutton.svg" className="text-6xl" alt="Close" />
            </button>

            <div className="flex justify-center">
  <button
    className="relative bg-primary02 py-2 px-4 font-medium text-white rounded-b-2xl overflow-hidden group transition-colors duration-300 group-hover:bg-white"
    onClick={handleClick}
  >
    <span className="relative inline-block">
      Get in touch
      <span className="absolute left-0 bottom-0 h-[2px] w-full bg-white transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
    </span>
  </button>
</div>

          </div>
        </div>
      )}
      {isPopupVisible && <BookaDemoPopUp onClose={handleClosePopup} />}
    </div>
  );
}

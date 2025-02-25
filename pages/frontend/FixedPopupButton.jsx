"use client";
import BookaDemoPopUp from "@/components/frontend/BookaDemoPopUp";
import React, { useState } from "react";
import { RiRobot3Line } from "react-icons/ri";

export default function FixedPopupButton() {
    const [PopupVisible , setPopupVisible] =useState(false);
    const handleClick = () => {
        setPopupVisible(true);
      };
  return (
    <>
      <div className="fixed cursor-pointer bottom-44 right-6 w-16 h-16 rounded-full bg-primary02 flex justify-center items-center">
        <div onClick={handleClick} className="relative flex items-center justify-center w-[60px] h-[60px] group">
          <div
            className="absolute -top-9 -left-24 border-primary02 border text-center bg-white text-primary02 text-xs font-semibold w-28 p-2 rounded-lg shadow-md 
          opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-in-out"
          >
            Book a Demo
          </div>

          <div className="absolute inset-0 rounded-full bg-primary02 overflow-hidden animate-ripple"></div>

          <RiRobot3Line className="text-white text-2xl" />
        </div>
      </div>
      {PopupVisible && <BookaDemoPopUp onClose={handleClosePopup} />}
    </>
  );
}

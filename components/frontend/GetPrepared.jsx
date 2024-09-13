"use client";
import React, { useState } from "react";

import BookaDemoPopUp from "./BookaDemoPopUp";
import Image from "next/image";

export default function GetPrepared() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleClick = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };
  return (
    <div>
      <button
        className="py-1 px-2 sm:py-1.5 sm:px-2.5 border border-[#075D70]  rounded-[5px] flex gap-2"
        onClick={handleClick}
      >
        <div>
          <Image
            src="/icons/star.svg"
            className="w-full h-full pt-1"
            width={2}
            height={2}
            alt="svg"
          />
        </div>

        <p className="text-[#075D70]">Get Prepared</p>
      </button>
      {isPopupVisible && <BookaDemoPopUp onClose={handleClosePopup} />}
    </div>
  );
}

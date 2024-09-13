"use client";
import Image from "next/image";
import React, { useState } from "react";
import BookaDemoPopUp from "./BookaDemoPopUp";

export default function TrustedBy2() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleClick = () => {
    console.log("Button clicked ");
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    console.log("Popup closed");
    setPopupVisible(false);
  };

  return (
    <div className="px-[24px] py-10 flex-col space-y-6 bg-[#F4FCFC]">
      <div className="text-center flex-col space-y-4">
        <p className="font-semibold text-32px">Trusted by Students</p>
        <p className="text-18px ">
          Join our live demo class to have all your questions answered by our
          expert.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/images/student.svg"
          alt=""
          className="w-[250px]"
          width={2}
          height={2}
        />
      </div>
      <div className="flex-col space-y-4">
        <div>
          <p className="text-14px text-justify">
          &quot;At Boarding Admission, our students consistently express their
                  gratitude for the seamless and supportive admission process.
                  Their feedback highlights how our guidance helped them
                  confidently secure their spot in top boarding schools.&quot;
          </p>
        </div>
        <div>
          <p className="text-14px font-semibold">Sakshi Pandey</p>
          <p className="text-[10px] text-[#656675]">Bishop Cotton School</p>
        </div>
      </div>
      <div>
        <button
          onClick={handleClick}
          className="bg-gradient01 w-[100%] text-white rounded-md py-2"
        >
          Book a Demo Class
        </button>
      </div>
      {isPopupVisible && <BookaDemoPopUp onClose={handleClosePopup} />}
    </div>
  );
}

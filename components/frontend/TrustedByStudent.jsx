"use client";
import Image from "next/image";
import React, { useState } from "react";
import TrustedBy2 from "./TrustedBy2";
import BookaDemoPopUp from "./BookaDemoPopUp";

export default function TrustedByStudent() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleClick = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div>
      <div className=" lg:block hidden xl:px-[100px] lg:px-[40px] bg-background01 xl:pt-16 lg:pt-8">
        <div className="">
          <div className="flex items-center">
            <div>
              <p className="xl:text-[60px] lg:text-[48px]  font-semibold text-primary02 pb-4">
                Trusted By Students
              </p>
              <p className="text-18px w-1/2">
                Join our live demo class to have all your questions answered by
                our expert.
              </p>
            </div>
          </div>
          <div className=" relative xl:-mt-0 -mt-4">
            {/* Main content container */}
            <div className="flex justify-between relative z-10">
              {/* Left side: Button */}
              <div>
                <div className="py-10">
                  <button
                    onClick={handleClick}
                    className="cursor-pointer border rounded-md w-[260px] py-2 bg-gradient-to-r text-white from-[#075D70] via-[#A1C5CD] to-[#dfdfdf]"
                  >
                    Book a Demo Class
                  </button>
                </div>
                {isPopupVisible && (
                  <BookaDemoPopUp onClose={handleClosePopup} />
                )}
              </div>

              {/* Middle: Image */}
              <div className="z-10">
                <Image
                  src="/images/student.svg"
                  alt="Student"
                  className="w-[480px] xl:h-[100%] "
                  width={2}
                  height={2}
                />
              </div>

              {/* Right side: Testimonial */}
              <div className="z-10 -mt-12">
                <div>
                  <p className="w-[397px] h-[135px] font-normal">
                    &quot;At Boarding Admission, our students consistently
                    express their gratitude for the seamless and supportive
                    admission process. Their feedback highlights how our
                    guidance helped them confidently secure their spot in top
                    boarding schools.&quot;
                  </p>
                  <p className="font-semibold text-18px xl:mt-6 mt-4">Sakshi Pandey</p>
                  <p className="text-primary03 text-14px">
                    Bishop Cotton School
                  </p>
                </div>
              </div>
            </div>

            {/* Background image positioned below the first div */}
            <div className="absolute inset-0 top-[61%] z-0">
              <div className="flex justify-center">
                <Image
                  src="/images/frame.svg"
                  alt="Frame"
                  className="xl:w-full w-[83%] xl:h-[100%]  object-fill"
                  width={2}
                  height={2}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden block">
        <TrustedBy2 />
      </div>
    </div>
  );
}

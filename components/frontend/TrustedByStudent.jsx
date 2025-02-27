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
            <div className="space-y-4">
              <p className="lg:text-[48px] text-[32px] text-primary02 font-medium lg:leading-normal leading-tight lg:w-[848px] w-full">
                Trusted By Students
              </p>
              <p className="xl:text-18px lg:text-16px text-[14px] text-neutral02 leading-relaxed w-1/2">
                Join our live demo class to have all your questions answered by
                our expert.
              </p>
            </div>
          </div>
          <div className=" relative xl:-mt-0 -mt-4">
            <div className="flex justify-between relative z-10">
              <div>
                <div className="py-10">
                  <button
                    onClick={handleClick}
                    className="cursor-pointer border rounded-md w-[260px] py-2 text-white bg-gradient-to-br from-[#075D70] to-[#0DB2D6] hover:scale-110 transition duration-300"
                  >
                    Book a Demo Class
                  </button>
                </div>

                {isPopupVisible && (
                  <BookaDemoPopUp onClose={handleClosePopup} />
                )}
              </div>

              <div className="z-10">
                <Image
                  src="/images/student.svg"
                  alt="Student"
                  className="w-[480px] xl:h-[100%] "
                  width={1000}
                  height={1000}
                />
              </div>

              <div className="z-10 -mt-12">
                <div>
                  <p className="w-[397px] h-[135px] xl:text-18px lg:text-16px text-[14px] text-neutral02 leading-relaxed">
                    &quot;At Boarding Admission, our students consistently
                    express their gratitude for the seamless and supportive
                    admission process. Their feedback highlights how our
                    guidance helped them confidently secure their spot in top
                    boarding schools.&quot;
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 xl:top-[60%] top-[57%] z-0">
              <div className="flex justify-center">
                <Image
                  src="/images/frame.svg"
                  alt="Frame"
                  className="xl:w-[1200px] w-[83%] "
                  width={1000}
                  height={1000}
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

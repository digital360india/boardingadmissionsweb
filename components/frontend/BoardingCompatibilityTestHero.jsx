"use client";
import React, { useState } from "react";
import Boardingtest from "@/public/icons/Boardingtest.svg";
import Link from "next/link";
import BookaDemoPopUp from "./BookaDemoPopUp";
import { useRouter } from "next/navigation";

const BoardingCompatibilityTestHero = ({ id }) => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const router = useRouter();

  const handleClicks = () => {
    router.push(`/packagedetails/${id}`); 
  };

  const handleClick = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <>
      <div className="">
        <h1 className="text-[2rem] md:text-[3.5rem] text-[#075D70] text-center pb-5 md:pb-8 font-bold">
          Boarding Compatibility Test
        </h1>
        <div
          className="w-full h-[31.375rem] -px-20 bg-no-repeat bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${"/vectors/Boarding-Compatibility-Test.png"})`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

          <div className="w-full md:w-[22.563rem] h-[17.5rem] px-10 md:px-0 md:mx-12 mt-10 space-y-7 absolute text-white z-10">
            <p className="md:mt-2 text-[14px] md:text-[1rem] leading-relaxed">
              Our Boarding Compatibility Test evaluates if your child is
              mentally and emotionally prepared for the boarding school
              experience. This comprehensive tool includes 25 insightful
              questions created by psychologists, followed by expert psychiatric
              counseling. Gain valuable insights into your child&apos;s
              readiness for this transformative journey and ensure they are
              fully prepared for success in a boarding school environment.
            </p>
            <div className="cursor-pointer w-[7.5rem] h-[2.0rem] md:w-[18rem] md:h-[3rem] bg-gradient-to-br from-[#075D70] to-[#0DB2D6] hover:scale-110 transition duration-300 border-custom rounded-md flex items-center justify-center text-[1rem]">
              <button onClick={handleClick} className="text-white">
                Enquire Now
              </button>
            </div>
            {/* <div className="cursor-pointer w-[7.5rem] h-[2.0rem] md:w-[18rem] md:h-[3rem] bg-gradient-to-br from-[#075D70] to-[#0DB2D6] hover:scale-110 transition duration-300 border-custom rounded-md flex items-center justify-center text-[1rem]">
              <button onClick={handleClicks} className="text-white">
                Enroll Now
              </button>
            </div> */}
          </div>
        </div>

        {/* laptop */}
        <div className="hidden  md:hidden  w-full h-[82px] bg-primary02 mt-8 lg:flex lg:items-center px-12 text-white gap-10 rounded-lg">
          <Link href="#Compatibility Test">
            <div className="border w-[12.8rem] h-[45px] rounded-md flex justify-center items-center">
              <button>Compatibility Test</button>
            </div>
          </Link>
          <Link href="#Psychiatric Evaluation">
            <div className="border w-[12.75rem] h-[45px] rounded-md flex justify-center items-center">
              <button>Psychiatric Evaluation</button>
            </div>
          </Link>
        </div>
        {isPopupVisible && <BookaDemoPopUp onClose={handleClosePopup} />}

        {/* mobile */}
        <div className="sm:block md:block lg:hidden px-4 py-6">
          <div className="w-full h-auto bg-primary02 rounded-md text-white text-[0.75rem] flex flex-wrap gap-2 p-4">
            <Link href="#Compatibility Test">
              {" "}
              <h1 className="border border-white rounded-md p-2">
                Compatibility Test
              </h1>
            </Link>
            <Link href="#Psychiatric Evaluation">
              <h1 className="border border-white rounded-md p-2">
                Psychiatric Evaluation
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoardingCompatibilityTestHero;

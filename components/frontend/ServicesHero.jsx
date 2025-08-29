"use client";
import React, { useState } from "react";
import Link from "next/link";
import BookaDemoPopUp from "./BookaDemoPopUp";

const ServicesHero = () => {
      const [isPopupVisible, setPopupVisible] = useState(false);
            const handleClick = () => {
          setPopupVisible(true);
        };
      
        const handleClosePopup = () => {
          setPopupVisible(false);
        };
  return (
    <>
      <div className="">
        <h1 className="text-[2rem] md:text-[3.5rem] text-[#075D70] text-center md:pb-8 font-bold">
          Ace Entrance Exams
        </h1>
        <div className="w-full h-[30rem] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>

          <div className="w-full h-full bg-no-repeat bg-cover bg-right md:bg-center object-top bg-[url('https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/boardingadmission%2Fserious-primary-schoolgirl-taking-notes-2024-11-19-17-35-12-utc.jpg?alt=media&token=14dbaa72-7199-42bc-8782-7ac0a51659f1')]"></div>

          <div className="absolute inset-0 flex flex-col justify-center md:w-[24rem] px-4 md:px-0 md:mx-12 mt-10 md:space-y-7 text-white">
            <p className="md:mt-2 text-[14px] md:text-[1rem] leading-relaxed">
              Unlock your boarding school dreams with Boarding Admissions Ace
              Entrance Exam module. Interactive learning and personalized
              attention keep students engaged and motivated. With our
              experienced mentors, students receive the highest quality
              education and support. Join us today to start your journey towards
              securing a spot in India&apos;s top boarding schools.
            </p>
            <div className="w-[7.5rem] md:w-[18.75rem] mt-6">
                <div className="cursor-pointer w-[7.5rem] h-[2.0rem] md:w-[18rem] md:h-[3rem] bg-gradient-to-br from-[#075D70] to-[#0DB2D6] hover:scale-110 transition duration-300 border-custom rounded-md flex items-center justify-center text-[1rem]">
                  <button onClick={handleClick} className="text-white">Enroll Now</button>
                </div>
            </div>
          </div>
        </div>

        {/* laptop */}
        <div className="hidden  md:hidden  w-full h-[82px] bg-primary02 mt-8 lg:flex lg:items-center px-12 text-white gap-10 rounded-lg">
          <Link href="#onlineclass">
            <div className="border w-[9.438rem] h-[45px] rounded-md flex justify-center items-center ">
              <button>Online Classes</button>
            </div>
          </Link>
          <Link href="#personalinterview">
            <div className="border w-[15.75rem] h-[45px] rounded-md flex justify-center items-center">
              <button>Personal Interview Prepration</button>
            </div>
          </Link>
          <Link href="#mocktest">
            <div className="border w-[9.438rem] h-[45px] rounded-md flex justify-center items-center">
              <button>Mock Test</button>
            </div>
          </Link>
          <Link href="#doubtclear">
            <div className="border w-[13.635rem] h-[45px] rounded-md flex justify-center items-center">
              <button>Doubt Clearing Sessions</button>
            </div>
          </Link>
        </div>
                {isPopupVisible && <BookaDemoPopUp onClose={handleClosePopup} />}

        {/* mobile */}
        <div className="sm:block md:block lg:hidden px-4 py-6">
          <div className="w-full h-auto bg-primary02 rounded-md text-white text-[0.75rem] flex flex-wrap gap-2 p-4">
            <Link href="#onlineclass">
              <h1 className="border border-white rounded-md p-2">
                Online Classes
              </h1>
            </Link>
            <Link href="#doubtclear">
              <h1 className="border border-white rounded-md p-2">
                Doubt Clearing Sessions
              </h1>
            </Link>
            <Link href="#personalinterview">
              <h1 className="border border-white rounded-md p-2">
                Personal Interview Preparation
              </h1>
            </Link>
            <Link href="#mocktest">
              <h1 className="border border-white rounded-md p-2">Mock Test</h1>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesHero;

"use client";
import React from "react";
import Ace from "@/public/icons/Ace.svg";
import Link from "next/link";

const ServicesHero = () => {
  return (
    <>
      <div className="md:mx-20 mt-[25%] md:mt-[10%]">
        <h1 className="text-[2rem] md:text-[3.5rem] text-[#075D70] text-center pb-8 font-bold">
          ACE ENTRANCE EXAM
        </h1>
        <div
          className="w-full h-[30.375rem] bg-no-repeat bg-cover bg-center relative"
          style={{ backgroundImage: `url(${Ace.src})` }}
        >
          <div className="w-full   md:w-[22.563rem] h-[17.5rem] px-10 md:px-0 md:mx-12 mt-10 space-y-7   absolute    text-white  ">
            <p className="md:mt-2 text-[14px]  md:text-[1rem] ">
              Unlock your boarding school dreams with Boarding Admissions Ace
              Entrance Exam module. We provide comprehensive preparation,
              focusing on key areas like grammar and calculations. Our
              expert-crafted courses meet elite boarding school standards,
              ensuring students are well-prepared. Interactive learning and
              personalized attention keep students engaged and motivated. With
              our experienced mentors, students receive the highest quality
              education and support. Join us today to start your journey towards
              securing a spot in India&apos;s top boarding schools.
            </p>
            <div className="w-[7.5rem] h-[2.0rem] md:w-[18.75rem] md:h-[3.5rem] bg-gradient01  border-custom rounded-md flex items-center justify-center text-[1rem] ">
              <Link href="/enrollnow/aceentranceexams"><button className="text-white">Enroll Now</button></Link>
            </div>
          </div>
        </div>

        {/* laptop */}
        <div className="hidden  md:hidden  w-full h-[82px] bg-primary02 mt-8 lg:flex lg:items-center px-12 text-white gap-10 rounded-lg">
          <div className="border w-[9.438rem] h-[45px] rounded-md flex justify-center items-center">
            <button>Online Classes</button>
          </div>
          <div className="border w-[15.75rem] h-[45px] rounded-md flex justify-center items-center">
            <button>Personal Interview Prepration</button>
          </div>
          <div className="border w-[9.438rem] h-[45px] rounded-md flex justify-center items-center">
            <button>Mock Test</button>
          </div>
          <div className="border w-[13.635rem] h-[45px] rounded-md flex justify-center items-center">
            <button>Doubt Clearing Sessions</button>
          </div>
        </div>

        {/* mobile */}
        <div className="sm:block md:block lg:hidden px-4 py-6">
          <div className="w-full h-auto bg-primary02 rounded-md text-white text-[0.75rem] flex flex-wrap gap-2 p-4">
            <h1 className="border border-white rounded-md p-2">
              Online Classes
            </h1>
            <h1 className="border border-white rounded-md p-2">
              Doubt Clearing Sessions
            </h1>
            <h1 className="border border-white rounded-md p-2">
              Personal Interview Preparation
            </h1>
            <h1 className="border border-white rounded-md p-2">Mock Test</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesHero;

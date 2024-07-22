"use client";
import React from "react";
import Customizedcourse from "@/public/icons/Customizedcourse.svg";
import Link from "next/link";

const CustomizedCoursesHero = () => {
  return (
    <>
      <div className="md:mx-20">
        <h1 className="text-[2rem] md:text-[3.5rem] text-[#075D70] text-center pb-8 font-bold">
          CUSTOMIZED COURSES
        </h1>
        <div
          className="w-full h-[30.375rem] bg-no-repeat bg-cover bg-center relative"
          style={{ backgroundImage: `url(${Customizedcourse.src})` }}
        >
          <div className="w-full   md:w-[22.563rem] h-[17.5rem] px-10 md:px-0 md:mx-12 mt-10 space-y-7   absolute    text-white  ">
            <p className="md:mt-2 text-[14px]  md:text-[1rem] ">
              At Boarding Admissions, our Customized Courses offer personalized,
              targeted preparation for entrance exams to one or multiple
              schools. We create unique study plans based on individual student
              needs and goals, focusing on specific school requirements. With
              flexible schedules, tailored instruction, and comprehensive
              coverage of core subjects, we ensure each student is thoroughly
              prepared to excel in their exams and achieve their boarding school
              ambitions. Get a personalized prep plan for your child&apos;s boarding
              school success!
            </p>
            <div className="w-[7.5rem] h-[2.0rem] md:w-[18.75rem] md:h-[3.5rem] bg-gradient01  border-custom rounded-md flex items-center justify-center text-[1rem] ">
              <button className="text-white">Enroll Now</button>
            </div>
          </div>
        </div>

        {/* laptop */}
        <div className="hidden  md:hidden  w-full h-[82px] bg-primary02 mt-8 lg:flex lg:items-center px-12 text-white gap-10 rounded-lg">
          <Link href="#One-on-one classes">
            <div className="border w-[14.2rem] h-[45px] rounded-md flex justify-center items-center">
              <button>One-on-one classes</button>
            </div>
          </Link>
          <Link href="#Learning material">
            <div className="border w-[13.75rem] h-[45px] rounded-md flex justify-center items-center">
              <button>Learning material</button>
            </div>
          </Link>
          <Link href="#Flexible schedule">
            <div className="border w-[13.438rem] h-[45px] rounded-md flex justify-center items-center">
              <button>Flexible schedule</button>
            </div>
          </Link>
          <Link href="#Regular Feedback">
            <div className="border w-[13.635rem] h-[45px] rounded-md flex justify-center items-center">
              <button>Regular Feedback</button>
            </div>
          </Link>
        </div>

        {/* mobile */}
        <div className="sm:block md:block lg:hidden px-4 py-6">
          <div className="w-full h-auto bg-primary02 rounded-md text-white text-[0.75rem] flex flex-wrap gap-2 p-4">
            <Link href="#One-on-one classes">
              {" "}
              <h1 className="border border-white rounded-md p-2">
              One-on-one classes
              </h1>
            </Link>
            <Link href="#Learning material">
              <h1 className="border border-white rounded-md p-2">
              Learning material
              </h1>
            </Link>

            <Link href="#Flexible schedule">
              {" "}
              <h1 className="border border-white rounded-md p-2">Flexible schedule</h1>
            </Link>
            <Link href="#Regular Feedback">
              {" "}
              <h1 className="border border-white rounded-md p-2">Regular Feedback</h1>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomizedCoursesHero;

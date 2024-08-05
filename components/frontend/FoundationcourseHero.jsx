"use client";
import React from "react";
import Foundationcourse from "@/public/icons/Foundationcourse.svg";
import Link from "next/link";

const FoundationcourseHero = () => {
  return (
    <>
      <div className="md:mx-20 mt-[25%] md:mt-[10%]">
        <h1 className="text-[2rem] md:text-[3.5rem] text-[#075D70] text-center pb-8 font-bold">
          FOUNDATION COURSES
        </h1>
        <div
          className="w-full h-[30.375rem] bg-no-repeat bg-cover bg-center relative"
          style={{ backgroundImage: `url(${Foundationcourse.src})` }}
        >
          <div className="w-full   md:w-[22.563rem] h-[17.5rem] px-10 md:px-0 md:mx-12 mt-10 space-y-7   absolute    text-white  ">
            <p className="md:mt-2 text-[14px]  md:text-[1rem] ">
              At Boarding Admissions, our Foundation Courses provide essential
              English, mathematics, and science skills, focusing on grammar and
              calculations. These courses ensure a strong academic base for
              future success, preparing students for entrance exams at top
              boarding schools. Interactive and engaging, our curriculum is
              taught by expert teachers who offer personalized attention,
              ensuring every student excels. Join us to build a solid foundation
              for your child&apos;s academic journey.
            </p>
            <div className="w-[7.5rem] h-[2.0rem] md:w-[18.75rem] md:h-[3.5rem] bg-gradient01  border-custom rounded-md flex items-center justify-center text-[1rem] ">
              <button className="text-white">Enroll Now</button>
            </div>
          </div>
        </div>

        {/* laptop */}
        <div className="hidden  md:hidden  w-full h-[82px] bg-primary02 mt-8 lg:flex lg:items-center px-12 text-white gap-10 rounded-lg">
          <Link href="#4th-6thGrade">
            <div className="border w-[9.438rem] h-[45px] rounded-md flex justify-center items-center">
              <button>4th - 6th Grade</button>
            </div>
          </Link>
          <Link href="#6th-8thGrade">
            <div className="border w-[15.75rem] h-[45px] rounded-md flex justify-center items-center">
              <button>6th - 8th Grade</button>
            </div>
          </Link>
          <Link href="#8thGrade">
            <div className="border w-[9.438rem] h-[45px] rounded-md flex justify-center items-center">
              <button>8th Grade</button>
            </div>
          </Link>
          <Link href="#9thGrade">
            <div className="border w-[13.635rem] h-[45px] rounded-md flex justify-center items-center">
              <button>9th Grade</button>
            </div>
          </Link>
        </div>

        {/* mobile */}
        <div className="sm:block md:block lg:hidden px-4 py-6">
          <div className="w-full h-auto bg-primary02 rounded-md text-white text-[0.75rem] flex flex-wrap gap-2 p-4">
            <Link href="#4th-6th Grade">
              {" "}
              <h1 className="border border-white rounded-md p-2">
                4th - 6th Grade
              </h1>
            </Link>
            <Link href="#6th-8thGrade">
              <h1 className="border border-white rounded-md p-2">
                6th - 8th Grade
              </h1>
            </Link>

            <Link href="#8thGrade">
              {" "}
              <h1 className="border border-white rounded-md p-2">8th Grade</h1>
            </Link>
            <Link href="#9thGrade">
              {" "}
              <h1 className="border border-white rounded-md p-2">9th Grade</h1>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoundationcourseHero;

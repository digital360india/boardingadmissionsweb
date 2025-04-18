"use client";
import React from "react";
import Foundationcourse from "@/public/icons/Foundationcourse.svg";
import Link from "next/link";

const FoundationcourseHero = () => {
  return (
    <>
      <div className="">
        <h1 className="text-[2rem] md:text-[3.5rem] text-[#075D70] text-center pb-5 md:pb-8 font-bold">
          Foundation Courses
        </h1>
        <div
          className="w-full h-[35.375rem] -px-20 bg-no-repeat bg-cover bg-center relative"
          style={{
            backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/boardingadmission%2FfaundationCourse.jpg?alt=media&token=3052abe5-55f5-4dc4-a358-28e65559fda1")`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-[#00000065]"></div>
          <div className="w-full md:w-[28.563rem] h-[17.5rem]  space-y-7  absolute  text-white md:right-28 md:top-16 top-40">
            <p className="md:mt-2  text-[14px]  md:text-[1rem] leading-relaxed p-4">
              At Boarding Admissions, our Foundation Courses provide essential
              English, mathematics, and science skills, focusing on grammar and
              calculations. These courses ensure a strong academic base for
              future success, preparing students for entrance exams at top
              boarding schools. Interactive and engaging, our curriculum is
              taught by expert teachers who offer personalized attention,
              ensuring every student excels. Join us to build a solid foundation
              for your child&apos;s academic journey.
            </p>
            <div className="md:w-[18.75rem] w-[7.5rem] p-4">
              <Link href="/enrollnow/foundationcourses">
                <div className="cursor-pointer w-[7.5rem] h-[2.0rem] md:w-[18rem] md:h-[3rem] bg-gradient-to-br from-[#075D70] to-[#0DB2D6] hover:scale-110 transition duration-300  border-custom rounded-md flex items-center justify-center text-[1rem] ">
                  <button className="text-white">Enroll Now</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden md:hidden w-full h-[82px] bg-primary02 mt-8 lg:flex lg:items-center px-12 text-white gap-10 rounded-lg">
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

          <div className="ml-auto">
            <Link
              href="/Foundation-Course.pdf"
              download
              target="_blank"
              className="border border-white rounded-md p-2 px-4 h-[45px] flex items-center text-white hover:bg-white hover:text-primary02 transition"
            >
              Download Brochure
            </Link>
          </div>
        </div>

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
            <button className="px-3">
              <Link
                href="/Foundation-Course.pdf"
                download
                target="_blank"
                className="mt-2 border border-white rounded-md p-2 text-white hover:bg-white hover:text-primary02 transition"
              >
                Download Brochure
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoundationcourseHero;

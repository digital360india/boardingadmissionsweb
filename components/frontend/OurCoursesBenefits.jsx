"use client";
import Image from "next/image";
import React from "react";

const OurCoursesBenefits = () => {
  return (
    <>
      <div>
        <div className="bg-[#F3F3F3] w-full md:pb-16">
          <div className="p-8 md:pt-16">
            <h1 className="md:text-center text-[#075D70]  text-[2rem] md:text-[3rem] font-semibold leading-none">
              Benefits of Our Courses
            </h1>
          </div>
   
          <div className="p-4  md:mt-12 md:px-16 flex flex-wrap justify-center  md:justify-between   w-full">
            <div className=" w-[9rem]  md:w-[18rem] flex flex-col items-center h-[15rem] lg:h-full">
              <Image
                src="/icons/course3.svg"
                width={48}
                height={48}
                alt="course3"
              />
              <h1 className="pt-3 md:pt-5 text-center text-[#075D70] text-[1.1rem] md:text-[30px] font-poppins">
              Guaranteed Results
              </h1>
              <p className="pt-3 md:pt-5 text-[0.75rem] md:text-[15px] text-center font-poppins">
              90% of our students pass entrance exams confidently.
              </p>
            </div>
            <div className=" w-[9rem] md:w-[18rem] flex flex-col items-center h-[15rem] lg:h-full">
              <Image
                src="/icons/course3.svg"
                width={48}
                height={48}
                alt="course3"
              />
              <h1 className="pt-3 md:pt-5 text-center text-[#075D70] text-[1.1rem] md:text-[30px] font-poppins">
              Strong Foundation
              </h1>
              <p className="pt-3 md:pt-5 text-[0.75rem] md:text-[15px] text-center font-poppins">
              Build long-term academic success with our comprehensive curriculum.
              </p>
            </div>
            <div className=" w-[9rem] md:w-[18rem] flex flex-col items-center h-[15rem] lg:h-full">
              <Image
                src="/icons/course3.svg"
                width={48}
                height={48}
                alt="course3"
              />
              <h1 className="pt-3 md:pt-5 text-center text-[#075D70] text-[1.1rem] md:text-[30px] font-poppins">
              Soft Skills
              </h1>
              <p className="pt-3 md:pt-5 text-[0.75rem] md:text-[15px] text-center font-poppins">
              Master communication, problem-solving, and leadership for personal growth
              </p>
            </div>
            <div className=" w-[9rem] md:w-[18rem] flex flex-col items-center h-[15rem] lg:h-full">
              <Image
                src="/icons/course3.svg"
                width={48}
                height={48}
                alt="course3"
              />
              <h1 className="pt-3 md:pt-5 text-center text-[#075D70] text-[1.1rem] md:text-[30px] font-poppins">
              Mental Strength
              </h1>
              <p className="pt-3 md:pt-5 text-[0.75rem] md:text-[15px] text-center font-poppins">
              Develop resilience and vibrancy for a well-rounded personality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurCoursesBenefits;

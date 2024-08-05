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
                Lorem, ipsum
              </h1>
              <p className="pt-3 md:pt-5 text-[0.75rem] md:text-[15px] text-center font-poppins">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
                consectetur mollitia distinctio iste ullam fugit reiciendis
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
                Lorem, ipsum
              </h1>
              <p className="pt-3 md:pt-5 text-[0.75rem] md:text-[15px] text-center font-poppins">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
                consectetur mollitia distinctio iste ullam fugit reiciendis
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
                Lorem, ipsum
              </h1>
              <p className="pt-3 md:pt-5 text-[0.75rem] md:text-[15px] text-center font-poppins">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
                consectetur mollitia distinctio iste ullam fugit reiciendis
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
                Lorem, ipsum
              </h1>
              <p className="pt-3 md:pt-5 text-[0.75rem] md:text-[15px] text-center font-poppins">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
                consectetur mollitia distinctio iste ullam fugit reiciendis
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurCoursesBenefits;

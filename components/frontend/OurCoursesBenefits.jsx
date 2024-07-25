"use client";
import Image from "next/image";
import React from "react";

const OurCoursesBenefits = () => {
  return (
    <>
      <div>
        <div className="bg-[#F3F3F3] w-full pb-16">
          <div className="pt-16">
            <h1 className="text-center text-[#075D70]  text-[3rem] font-semibold font-poppins">
              Benefits of Our Courses
            </h1>
          </div>

          <div className="mt-12 px-20 space-x-10 flex justify-between items-stretch font-poppins w-full">
            <div className="w-[18rem] flex flex-col items-center h-full ">
              <Image
                src="/icons/course1.svg"
                width={48}
                height={48}
                alt="course1"
              />
              <h1 className="pt-5 text-center text-[#075D70] text-[30px] font-poppins">
                Lorem, ipsum dolor.
              </h1>
              <p className="pt-5 text-[15px] text-center font-poppins">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                voluptatum!
              </p>
            </div>
            <div className="w-[18rem] flex flex-col items-center h-full">
              <Image
                src="/icons/course2.svg"
                width={48}
                height={48}
                alt="course2"
              />
              <h1 className="pt-5 text-center text-[#075D70] text-[30px] font-poppins">
                Lorem, ipsum dolor.
              </h1>
              <p className="pt-5 text-[15px] text-center font-poppins">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                voluptatum!
              </p>
            </div>
            <div className="w-[18rem] flex flex-col items-center h-full">
              <Image
                src="/icons/course3.svg"
                width={48}
                height={48}
                alt="course3"
              />
              <h1 className="pt-5 text-center text-[#075D70] text-[30px] font-poppins">
                Lorem, ipsum dolor.
              </h1>
              <p className="pt-5 text-[15px] text-center font-poppins">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
                consectetur mollitia distinctio iste ullam fugit reiciendis
              </p>
            </div>
            <div className="w-[18rem] flex flex-col items-center h-full">
              <Image
                src="/icons/course4.svg"
                width={48}
                height={48}
                alt="course4"
              />
              <h1 className="pt-5 text-center text-[#075D70] text-[30px] font-poppins">
                Lorem, ipsum dolor.
              </h1>
              <p className="pt-5 text-[15px] text-center font-poppins">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                voluptate expedita
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurCoursesBenefits;

"use client";

import Image from "next/image";
import React from "react";
import SchoolCarousel from "./SchoolCarousel";

export default function WhoWeAre() {
  return (
    <div className="lg:flex w-full xl:px-[100px] lg:p-[40px] px-[24px] xl:h-[600px] lg:h-[480px] lg:py-0 py-10 bg-[#F4FCFC]">
      <div className=" w-1/2 lg:flex hidden items-center">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/images%2Fwhoweare.png?alt=media&token=3dd85215-ecb5-407c-b1dd-bb93d5b201ed"
          alt="Calendar"
          className="xl:w-[530px] xl:h-[430px] object-cover lg:w-[420px] lg:h-[400px]"
          width={1000}
          height={1000}
        />
              {/* <SchoolCarousel /> */}
        
      </div>
      <div className="lg:w-1/2 w-full flex justify-center items-center">
        <div className="space-y-4">
          <div className="lg:ml-0 ml-2 lg:flex-none flex-col space-y-4">
            <p className="text-primary03 lg:text-24px text-[16px] ">
              WHO WE ARE
            </p>

            <p className="text-neutral01 xl:text-[48px] lg:w-full leading-tight  w-[310px] lg:text-[38px] text-[24px] font-medium ">
              Master Entrance Exams with Expert Guidance
            </p>
          </div>

          <div className="lg:hidden block">
            <div className="flex items-center justify-center  py-4">
              <video
          className="w-full h-[100%] object-cover"
          autoPlay
          loop
          muted
          playsInline
          controls={false}
        >
          <source
            src="https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/carousel%2Fmobileviewvideo%20(1)%20(1).mp4?alt=media&token=0273a9fc-6edc-4c15-b642-1da56f906bc7"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
            </div>
          </div>

          <div className="xl:text-18px lg:text-16px text-[14px] text-neutral02 text-justify leading-relaxed ">
            <p>
              At Boarding Admissions, we excel in preparing students for
              entrance exams to top boarding schools across India. With over 8
              years of experience and a 90% success rate, our specialized
              courses are meticulously crafted to meet elite institutions
              demands, ensuring thorough preparation and deep insights. We
              empower students with essential knowledge and skills, shaping
              their educational pathways and prospects. Enroll now for a
              comprehensive approach that combines rigorous academic preparation
              with vital soft skills, setting the foundation for lifelong
              success.
            </p>
          </div>
          {/* <div className="lg:py-0 py-4 "><button className="border text-white rounded-md w-[223px] py-2 bg-gradient-to-r from-[#075D70] via-[#A1C5CD] to-[#dfdfdf]">Know More</button></div> */}
        </div>
      </div>
    </div>
  );
}

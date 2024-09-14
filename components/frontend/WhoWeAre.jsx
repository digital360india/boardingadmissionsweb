import Image from "next/image";
import React from "react";

export default function WhoWeAre() {
  return (
    <div className="lg:flex w-full xl:px-[100px] lg:p-[40px] px-[24px] xl:h-[600px] lg:h-[480px] lg:py-0 py-12 bg-[#F4FCFC]">
      <div className=" w-1/2 lg:flex hidden items-center">
        <img
          src="/images/reactangle.svg"
          alt="Calendar"
          className="xl:w-[503px] xl:h-[480px] lg:w-[420px] lg:h-[400px]"

        />
      </div>
      <div className="lg:w-1/2 w-full flex justify-center items-center">
        <div>
          <div className="lg:ml-0 ml-2 lg:flex-none flex-col lg:space-y-0 space-y-4">
            <div className="text-primary03 xl:text-24px lg:text-18px text-[14px] ">
              <p>WHO WE ARE</p>
            </div>
            <div className="text-neutral01 xl:text-[48px] lg:w-full w-[310px] lg:text-[38px] text-24px font-semibold leading-none pb-4">
              <p>Master Entrance Exams with Expert Guidance</p>
            </div>
          </div>

          <div className="lg:hidden block">
            <div className="flex items-center justify-center py-4">
              <Image
                src="/images/Rectangle2.svg"
                alt="Calendar"
                className="w-[100%]"
                width={2}
                height={2}
              />
            </div>
          </div>


        <div className="xl:text-18px lg:text-16px pb-4 text-justify"><p>At Boarding Admissions, we excel in preparing students for entrance exams to top boarding schools across India. With over 8 years of experience and a 90% success rate, our specialized courses are meticulously crafted to meet elite institutions demands, ensuring thorough preparation and deep insights. We empower students with essential knowledge and skills, shaping their educational pathways and prospects. Enroll now for a comprehensive approach that combines rigorous academic preparation with vital soft skills, setting the foundation for lifelong success.</p></div>
        {/* <div className="lg:py-0 py-4 "><button className="border text-white rounded-md w-[223px] py-2 bg-gradient-to-r from-[#075D70] via-[#A1C5CD] to-[#dfdfdf]">Know More</button></div> */}
      </div>
      </div>
    </div>
  );
}

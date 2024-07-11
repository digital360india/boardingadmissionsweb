import Image from "next/image";
import React from "react";

export default function WhoWeAre() {
  return (
    <div className="flex w-full px-[100px] h-[600px]">
      <div className="w-1/2 flex items-center">
        <Image
          src="/images/reactangle.svg"
          alt="Calendar"
          className="w-[503px] h-[480px]"
          width={2}
          height={2}
        />
      </div>
      <div className="w-1/2 flex justify-center items-center">
      <div>
        <div className="text-primary03 text-24px"><p>WHO WE ARE</p></div>
        <div className="text-neutral01 text-[48px] font-semibold leading-tight "><p>Master Entrance Exams with Expert Guidance</p></div>
        <div className="text-18px py-10"><p>At Boarding Admissions, we excel in preparing students for entrance exams to top boarding schools across India. With over 8 years of experience and a 90% success rate, our specialized courses are meticulously crafted to meet elite institutions' demands, ensuring thorough preparation and deep insights. We empower students with essential knowledge and skills, shaping their educational pathways and prospects. Enroll now for a comprehensive approach that combines rigorous academic preparation with vital soft skills, setting the foundation for lifelong success.</p></div>
        <div><button className="border text-white rounded-md w-[223px] py-2 bg-gradient-to-r from-[#075D70] via-[#A1C5CD] to-[#dfdfdf]">Know More</button></div>
      </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import React from "react";

export default function EntranceCourse() {

    const list = [
        {
          name: "Live and Recorded lectures",
        },
        {
          name: "Mentorship on telegram groups",
        },
        {
          name: "Career counseling and guidance available mainly online.",
        },
        {
          name: "Access to scholarship aptitude tests at Boarding Admission portal (online)",
        },
        {
          name: "Seminars/Topper's talks at through Zoom mentorship (online)",
        },
      ];

  return (
    <div  style={{ boxShadow: '0 1px 8px 0 rgba(0, 0, 0, 0.08)' }} className="p-6 rounded-lg bg-[#FFFFFF]">
      <div className="font-semibold md:text-32px text-18px pb-6">This Course includes:</div>
      <div className="flex-col space-y-6">
      <div className="flex items-center space-x-4">
        <div>
          <Image src="/vectors/celender.svg" className="md:w-[24px] md:h-[24px] w-[20px] h-[20px]" width={1000} height={1000} alt="image" />
        </div>
        <div>
          <div className="flex-col leading-tight font-medium md:text-16px text-[12px]">
            <p className=" text-[#888888]">Duration:</p>
            <p>Lorem Ipsum dior</p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div>
          <Image src="/vectors/star.svg" className="md:w-[24px] md:h-[24px] w-[20px] h-[20px]" width={1000} height={1000} alt="image" />
        </div>
        <div className="flex-col leading-tight font-medium md:text-16px text-[12px]">
            <p className="text-[#888888]">Validity:</p>
            <p>Till The Exam</p>
          </div>
      </div>
      <div className="md:text-16px text-[12px]   text-[#1B2124]">
      {list.map((item, index) => (
        <div key={index} className="flex items-center my-6">
          <div>
            <Image
              src="/vectors/star.svg"
              className="md:w-[24px] md:h-[24px] w-[20px] h-[20px]" width={1000} height={1000}
              alt="image"
            />
          </div>
          <div className="pl-4">{item.name}</div>
        </div>
      ))}
    </div>
    <div className="flex items-center space-x-4">
        <div>
          <Image src="/vectors/subject.svg" className="md:w-[24px] md:h-[24px] w-[20px] h-[20px]" width={1000} height={1000} alt="image" />
        </div>
        <div>
          <div className="flex-col leading-tight md:text-16px text-[12px]">
            <p>Subjects:  </p>
            <p>English, Hindi, GS, Maths, Physics, and Chemistry</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

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
      <div className="font-semibold text-32px pb-6">This Course includes:</div>
      <div className="flex-col space-y-6">
      <div className="flex items-center space-x-4">
        <div>
          <Image src="/vectors/celender.svg" width={24} height={24} alt="image" />
        </div>
        <div>
          <div className="flex-col leading-tight font-medium text-16px">
            <p className=" text-[#888888]">Duration:</p>
            <p>Lorem Ipsum dior</p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div>
          <Image src="/vectors/star.svg" width={24} height={24} alt="image" />
        </div>
        <div className="flex-col leading-tight font-medium text-16px">
            <p className="text-[#888888]">Validity:</p>
            <p>Till The Exam</p>
          </div>
      </div>
      <div className="text-16px   text-[#1B2124]">
      {list.map((item, index) => (
        <div key={index} className="flex items-center my-6">
          <div>
            <Image
              src="/vectors/star.svg"
              width={24}
              height={24}
              alt="image"
            />
          </div>
          <div className="pl-4">{item.name}</div>
        </div>
      ))}
    </div>
    <div className="flex items-center space-x-4">
        <div>
          <Image src="/vectors/subject.svg" width={24} height={24} alt="image" />
        </div>
        <div>
          <div className="flex-col leading-tight">
            <p>Subjects:  </p>
            <p>English, Hindi, GS, Maths, Physics, and Chemistry</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

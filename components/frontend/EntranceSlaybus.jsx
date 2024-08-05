import Image from "next/image";
import React from "react";

export default function EntranceSlaybus() {
  const list = [
    {
      name: "Aptitude"
    },
    {
      name: "Mentorship"
    },
    {
      name: "Daily Practice Paper"
    },
    {
      name: "Test Series"
    },
  ];

  return (
    <div
      style={{ boxShadow: "0 1px 8px 0 rgba(0, 0, 0, 0.08)" }}
      className="p-6 rounded-lg bg-[#FFFFFF] my-14"
    >
      <div className="font-semibold md:text-32px text-18px lg:pb-6 pb-4">Syllabus we will cover</div>
      
      <div className="grid grid-cols-2 gap-2">
        {list.map((item, index) => (
          <div key={index} className="border-b border-r border-[#F0F0F0] lg:w-[290px] lg:h-[169px] w-[163px] h-[81px] md:w-[315px] md:h-[120px] md:p-6 p-3">
            <div className="flex md:items-center md:space-x-6 space-x-3">
              <div className="">
                <Image src="/images/apti.svg" className="lg:w-[64px] lg:h-[64px] w-[32px] h-[32px]" width={1} height={1} alt="image" />
              </div>
              <div className="font-semibold md:text-14px text-[10px]"> {item.name}</div>
            </div>
            <div className="md:flex md:pt-4 md:space-x-6 text-primary02 md:pl-2 pl-11 md:text-[12px] text-[8px] font-semibold ">
              <div className="">
                <p>View syllabus </p>
              </div>
              <div> View full schedule</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

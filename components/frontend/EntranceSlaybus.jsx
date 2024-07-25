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
      <div className="font-semibold text-32px pb-6">This Course includes:</div>
      
      <div className="grid grid-cols-2 gap-2">
        {list.map((item, index) => (
          <div key={index} className="border-b border-r border-[#F0F0F0] w-[290px] h-[169px] p-6">
            <div className="flex items-center space-x-6">
              <div className="">
                <Image src="/images/apti.svg" width={64} height={64} alt="image" />
              </div>
              <div className="font-semibold text-14px"> {item.name}</div>
            </div>
            <div className="flex pt-4 space-x-8 text-primary02">
              <div className="">
                <p className="font-semibold text-14px">View syllabus </p>
              </div>
              <div className="font-semibold text-14px"> View full schedule</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

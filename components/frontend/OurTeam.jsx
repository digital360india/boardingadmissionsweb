import Image from "next/image";
import React from "react";

export default function OurTeam() {
  const team = [
    {
      name: "Dr. Anna Richard",
      imageSrc: "/images/teacher.svg",
      designation: "English Expert",
    },
    {
      name: "Dr. Anna Richard",
      imageSrc: "/images/teacher.svg",
      designation: "English Expert",
    },
    {
      name: "Dr. Anna Richard",
      imageSrc: "/images/teacher.svg",
      designation: "English Expert",
    },
    {
      name: "Dr. Anna Richard",
      imageSrc: "/images/teacher.svg",
      designation: "English Expert",
    },
  ];

  return (
    <div className="px-[100px] flex justify-center h-full py-16">
      <div>
        <div className="text-24px text-primary03 text-center">OUR TEAM</div>
        <div className="text-[48px] font-medium text-center pb-12">Lorem ipsum dolor sit consetur.</div>

        <div className="flex gap-5 ">
          {team.map((member, index) => (
            <div key={index} className="bg-[#075D70] rounded-lg">
              <div>
                <Image src={member.imageSrc} width={295} height={400} alt={member.name} />
              </div>
              <div className="py-3 text-white text-center">
              <div>
                <p className="text-24px font-medium ">{member.name}</p>
              </div>
              <div>
                <p className="text-18px ">{member.designation}</p>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

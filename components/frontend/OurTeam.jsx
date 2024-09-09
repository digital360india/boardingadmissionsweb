import Image from "next/image";
import React from "react";
import "./ScrollbarHide.css"; // Import the custom scrollbar CSS

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
    <div className="xl:px-[100px] lg:px-[40px] px-[24px] h-full lg:py-16 py-12">
      <div className="w-full">
        <div className="lg:text-24px text-16px text-primary03 lg:text-center text-left">
          OUR TEAM
        </div>
        <div className="lg:text-[48px] text-[32px] font-medium lg:text-center text-left pb-12">
          Lorem ipsum dolor sit consetur.
        </div>

        <div className="flex gap-5 overflow-x-auto hide-scrollbar justify-center items-center">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-[#075D70] rounded-lg flex-shrink-0 lg:w-[295px] w-[240px] lg:h-[460px] h-[350px] flex flex-col items-center"
            >
               <div>
                <Image src={member.imageSrc} width={1} height={1} className="lg:object-none object-cover lg:w-[295px] w-[270px] lg:h-[350px] h-[260px]" alt={member.name} />
              </div>
              <div className="py-3 text-white text-center">
                <div>
                  <p className="text-[24px] font-medium">{member.name}</p>
                </div>
                <div>
                  <p className="text-[18px]">{member.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

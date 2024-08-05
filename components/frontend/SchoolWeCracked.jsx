import Image from "next/image";
import React from "react";
import "./ScrollbarHide.css"; // Import the custom scrollbar CSS

export default function SchoolWeCracked() {
  const school = [
    {
      school: "Bishop Cotton School",
      imageSrc: "/images/school.svg",
      location: "(Shimla)",
    },
    {
      school: "Bishop Cotton School",
      imageSrc: "/images/school.svg",
      location: "(Shimla)",
    },
    {
      school: "Bishop Cotton School",
      imageSrc: "/images/school.svg",
      location: "(Shimla)",
    },
    {
      school: "Bishop Cotton School",
      imageSrc: "/images/school.svg",
      location: "(Shimla)",
    },
    {
      school: "Bishop Cotton School",
      imageSrc: "/images/school.svg",
      location: "(Shimla)",
    },
    {
      school: "Bishop Cotton School",
      imageSrc: "/images/school.svg",
      location: "(Shimla)",
    },
    {
      school: "Bishop Cotton School",
      imageSrc: "/images/school.svg",
      location: "(Shimla)",
    },
    {
      school: "Bishop Cotton School",
      imageSrc: "/images/school.svg",
      location: "(Shimla)",
    },
  ];

  return (
    <div className="xl:mx-[100px] lg:mx-[40px] mx-[24px] pb-[100px]">
      <div>
        <p className="text-primary02 py-[40px] lg:text-[48px] text-[24px] font-semibold lg:text-center">
          Top Schools We have Cracked
        </p>
      </div>
      <div className="flex space-x-6 overflow-x-auto hide-scrollbar">
        {school.map((member, index) => (
          <div key={index} className="flex-shrink-0 lg:w-[350px] w-[220px] rounded-md lg:h-[350px] h-[220px] lg:border-2 border-4 border-[#075D70]">
            <div className="flex justify-center lg:mt-[8%] mt-[6%] lg:mb-[5%] mb-[3%]">
              <Image
                src={member.imageSrc}
                className="lg:w-full lg:h-[200px] w-full h-[122px] "
                width={1}
                height={1}
                alt={member.school}
              />
            </div>
            <div className="text-center text-primary02 lg:text-24px text-18px font-medium">
              <p>{member.school}</p>
              <p>{member.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

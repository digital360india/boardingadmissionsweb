import Image from "next/image";
import React from "react";
import "./ScrollbarHide.css"; // Import the custom scrollbar CSS
import Link from "next/link";

export default function SchoolWeCracked() {
  const school = [
    {
      school: "Welham Boys",
      imageSrc: "/images/schoolimages/Welham_Boys.svg",
      location: "(Dehradun)",
      routes: "/school/welham-boys-school",
    },
    {
      school: "Welham Girls",
      imageSrc: "/images/schoolimages/Welham_Girls.svg",
      location: "(Dehradun)",
      routes: "/school/wellham-girls-school",
    },
    {
      school: "The Doon School",
      imageSrc: "/images/schoolimages/The_Doon_School.svg",
      location: "(Dehradun)",
      routes: "/school/the-doon-school",
    },
    {
      school: "Mayo Boys College",
      imageSrc: "/images/schoolimages/Mayo_Boys_College.svg",
      location: "(Ajmer)",
      routes: "/school/mayo-boys-school"
    },
   
    {
      school: "Scindia School",
      imageSrc: "/images/schoolimages/Scindia_School.svg",
      location: "(Gwalior)",
      routes: "/school/scindia-girls-school"
    },
    {
      school: "St.George College",
      imageSrc: "/images/schoolimages/St.George_College.svg",
      location: "(Mussoorie)",
      routes: "/school/george-college"
    },
  ];

  return (
    <div className="xl:mx-[100px] lg:mx-[40px] mx-[24px] pb-[100px]">
      <div className="py-[40px]">
        <p className="text-primary02  lg:text-[48px] text-[24px] font-semibold lg:text-center">
          Top Schools We have Cracked
        </p>
      </div>
      <div className="flex space-x-6 overflow-x-auto hide-scrollbar">
        {school.map((member, index) => (
          <div key={index} className="flex-shrink-0 lg:w-[350px] w-[220px] rounded-md lg:h-[350px] h-[220px] lg:border-2 border-4 border-[#075D70]">
    <Link href={member.routes}>        <div className="flex justify-center lg:mt-[8%] mt-[6%] lg:mb-[5%] mb-[3%]">
              <Image
                src={member.imageSrc}
                className="lg:w-full lg:h-[200px] w-full h-[122px] "
                width={1000}
                height={1000}
                alt={member.school}
              />
            </div></Link>
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

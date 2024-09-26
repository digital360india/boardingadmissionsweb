import Image from "next/image";
import React from "react";
import "./ScrollbarHide.css"; 
import Link from "next/link";

export default function SchoolWeCracked() {
  const school = [
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
      school: "Scindia School",
      imageSrc: "/images/schoolimages/Scindia_School.svg",
      location: "(Gwalior)",
      routes: "/school/scindia-girls-school"
    },
    {
      school: "Lawrence School",
      imageSrc: "/images/schoolimages/Lawrence_School.svg",
      location: "(Solan)",
      routes: "/school/laurence-school"
    },
    {
      school: "Welham Boys",
      imageSrc: "/images/schoolimages/Welham_Boys.svg",
      location: "(Dehradun)",
      routes: "/school/welham-boys-school",
    },
    {
      school: "Mayo Boys College",
      imageSrc: "/images/schoolimages/Mayo_Boys_College.svg",
      location: "(Ajmer)",
      routes: "/school/mayo-boys-school"
    },
    {
      school: "Bishop Cotton School",
      imageSrc: "/images/schoolimages/Bishop_Cotton_School(Bangaluru).svg",
      location: "(Bangaluru)",
      routes: "/school/bishop-cotton-school-bangalore"
    },
    {
      school: "Vidya Devi Jindal School",
      imageSrc: "/images/schoolimages/Vidya_Devi_Jindal_School.svg",
      location: "",
      routes: "/school/vidya-devi-jindal",
    },
  ];

  return (
    <div className="xl:mx-[100px] lg:mx-[40px] mx-[24px] ">
      <div className="py-[30px] md:py-[40px]">
        <p className="text-primary02  lg:text-[48px] text-[24px] font-semibold lg:text-center">
          Top Schools We have Cracked
        </p>
      </div>
      <div className="flex space-x-5 md:space-x-20 overflow-x-auto hide-scrollbar">
        {school.map((member, index) => (
          <div
            key={index}
            className="flex-shrink-0  w-[220px] rounded-md lg:h-[360px] h-[220px] "
          >
            <Link href={member.routes}>
        
              <div className="flex justify-center lg:mt-[8%] mt-[6%] lg:mb-[5%] mb-[3%]">
                <Image
                  src={member.imageSrc}
                  className="lg:w-full lg:h-[220px] w-full h-[122px] "
                  width={1000}
                  height={1000}
                  alt={member.school}
                />
              </div>
            
            <div className="text-center text-primary02 lg:text-24px text-18px font-medium">
              <p>{member.school}</p>
              <p>{member.location}</p>
            </div>
            </Link>

          </div>
        ))}
      </div>
    </div>
  );
}

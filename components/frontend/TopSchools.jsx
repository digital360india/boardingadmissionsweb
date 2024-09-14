import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TopSchools() {

  const school = [
    {
      school: "Bishop Cotton School",
      imageSrc: "/images/schoolimages/Bishop_Cotton_School(Bangaluru).svg",
      location: "(Bangaluru)",
      routes: "/school/bishop-cotton-school-bangalore"
    },
    {
      school: "CJM Waverly",
      imageSrc: "/images/schoolimages/CJM_Waverly.svg",
      location: "(Mussoorie)",
      routes: "/school/cjm-waverly"
    },
    {
      school: "Lawrence School",
      imageSrc: "/images/schoolimages/Lawrence_School.svg",
      location: "(Solan)",
      routes: "/school/laurence-school"
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
      school: "Sherwood College",
      imageSrc: "/images/schoolimages/Sherwood_College.svg",
      location: "(Nainital)",
      routes: "/school/sherwood-college"
    },
    {
      school: "St.George College",
      imageSrc: "/images/schoolimages/St.George_College.svg",
      location: "(Mussoorie)",
      routes: "/school/george-college"
    },
    {
      school: "The Doon School",
      imageSrc: "/images/schoolimages/The_Doon_School.svg",
      location: "(Dehradun)",
      routes: "/school/the-doon-school",
    },
    {
      school: "Vidya Devi Jindal School",
      imageSrc: "/images/schoolimages/Vidya_Devi_Jindal_School.svg",
      location: "",
      routes: "/school/the-doon-school",
    },
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
      routes: "/school/welham-girls-school",
    },
    {
      school: "Wood Stock School",
      imageSrc: "/images/schoolimages/Wood_Stock_School.svg",
      location: "(Mussoorie)",
      routes: "/school/woodstock-school",
    },
  ];
  return (
    <div>
      <div className="xl:mx-[100px] lg:mx-[40px] mx-[10px] lg:pb-[100px] pb-[50px]">
        <div>
          <p className="text-primary02 py-[40px] lg:text-[48px] text-[24px] lg:w-full  font-semibold text-center">
            List of Schools
          </p>
        </div>
        <div className="flex justify-center mx-auto lg:gap-8 gap-4 flex-wrap ">
          {school.map((member, index) => (
            <div
              key={index}
              className="flex-shrink-0 lg:w-[330px] lg:h-[350px] w-[45%] h-[160px] rounded-md lg:border-2 border-4 border-[#075D70]"
            >
              <Link href={member.routes}>
              
                <div className="flex justify-center lg:mt-[8%] mt-[6%] lg:mb-[5%] mb-[3%]">
                  <Image
                    src={member.imageSrc}
                    width={1}
                    height={1}
                    alt={member.school}
                    className="lg:w-[200px] lg:h-[200px] w-[80px] h-[80px]"
                  />
                </div>
              </Link>
              <div className="text-center text-primary02 lg:text-24px text-[14px] font-medium">
                <p>{member.school}</p>
                <p>{member.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

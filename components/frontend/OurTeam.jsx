import React from "react";
import "./ScrollbarHide.css"; // Import the custom scrollbar CSS
import Link from "next/link";

export default function OurTeam() {
  const team = [
    {
      name: "Ms. Neema Negi",
      imageSrc: "/images/neema.png",
      designation: "Hindi Expert",
      domainLink:"https://www.neemanegi.com",
    },
    {
      name: "Dr. Noshin Aslam",
      imageSrc: "/images/Noshin.png",
      designation: "English & GA Expert",
      domainLink:"https://www.noshinaslam.com",
    },
    {
      name: "Mr. Mayank Gaur",
      imageSrc: "/images/mayank.png",
      designation: "Mathematics Expert",
      domainLink:"https://mayank-portfolio-jet.vercel.app/",
    },
  ];

  return (
    <div className="xl:px-[100px] lg:px-[40px] px-[24px] h-full lg:py-16 py-12">
      <div className="w-full">
        <div className="lg:text-24px text-16px text-primary03 lg:text-center text-left">
          OUR TEAM
        </div>
        <div className="lg:text-[48px] text-[26px] font-semibold lg:text-center text-left pb-12">
        Experts guiding your success.
        </div>

        <div className="flex w-full gap-5 overflow-x-auto hide-scrollbar   md:justify-center md:items-center md:pl-0">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-[#075D70] rounded-lg flex-shrink-0 lg:w-[295px] w-[240px] lg:h-[460px] h-[350px] flex flex-col items-center"
            >
               <div className="">
                {/* <Image src={member.imageSrc} width={1000} height={1000} className="lg:object-none object-cover lg:w-[295px] w-[270px] lg:h-[350px] h-[260px]" alt={member.name} /> */}
                <img src={member.imageSrc} width={1000} height={1000} className="w-[300px] h-[270px] md:h-[350px]  object-cover rounded-md" alt={member.name} />
              </div>
              <a href={member.domainLink} target="_blank">
              <div className="md:py-6 text-white text-center">
                <div>
                  <p className="text-[24px] font-medium">{member.name}</p>
                </div>
                <div>
                  <p className="text-[18px]">{member.designation}</p>
                </div>
              </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

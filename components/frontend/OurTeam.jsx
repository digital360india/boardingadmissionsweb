import React from "react";
import { FaGlobe } from "react-icons/fa";
import "./ScrollbarHide.css";

export default function OurTeam() {
  const team = [
    {
      name: "Ms. Neema Negi",
      imageSrc: "/images/neema.png",
      designation: "Hindi Expert",
      domainLink: "https://www.neemanegi.com",
    },
    {
      name: "Dr. Noshin Aslam",
      imageSrc: "/images/Noshin.png",
      designation: "English & GA Expert",
      domainLink: "https://www.noshinaslam.com",
    },
    {
      name: "Mr. Mayank Gaur",
      imageSrc: "/images/mayank.png",
      designation: "Mathematics Expert",
      domainLink: "https://mayank-portfolio-jet.vercel.app/",
    },
  ];

  return (
    <div className="xl:px-[100px] lg:px-[40px] px-[24px] h-full lg:py-16 py-12">
      <div className="w-full">
        <div className="lg:text-24px text-16px text-primary03 lg:text-center text-left">
          OUR TEAM
        </div>
        <div className="lg:text-[48px] text-[26px] font-medium text-neutral01 lg:text-center text-left pb-12">
          Experts guiding your success.
        </div>

        <div className="flex w-full gap-5 overflow-x-auto hide-scrollbar md:justify-center md:items-center md:pl-0">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-[#075D70] rounded-lg flex-shrink-0 lg:w-[300px] w-[240px] lg:h-[460px] h-[350px] flex flex-col items-center relative "
            >
              <div className="relative w-full h-[270px]  md:h-[350px] transition-all duration-300 ease-in-out transform hover:-translate-y-2 group">
                <img
                  src={member.imageSrc}
                  className="w-full h-full object-cover rounded-t-md"
                  alt={member.name}
                />
                <a
                  href={member.domainLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <FaGlobe className="text-[#075D70] text-xl" />
                </a>
              </div>

              <div className="md:py-6 text-white text-center">
                <p className="text-[24px] font-medium">{member.name}</p>
                <p className="text-[18px]">{member.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

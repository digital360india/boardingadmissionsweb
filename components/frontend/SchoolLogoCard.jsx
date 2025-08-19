"use client";
import React from "react";
import Link from "next/link";

export default function SchoolLogoCard() {
  const schools = [
    {
      name: "WELHAM GIRLS",
      logo: "/images/schoolimages/Welham_Girls.svg",
      route: "/school/wellham-girls-school",
    },
    {
      name: "THE DOON SCHOOL",
      logo: "/images/schoolimages/The_Doon_School.svg",
      route: "/school/the-doon-school",
    },
    {
      name: "SCINDIA SCHOOL",
      logo: "/images/scindia.png",
      route: "/school/scindia-girls-school",
    },
    {
      name: "LAWRENCE SCHOOL",
      logo: "/images/schoolimages/Lawrence_School.svg",
      route: "/school/laurence-school",
    },
    {
      name: "MAYO COLLEGE",
      logo: "/images/schoolimages/Mayo_Boys_College.svg",
      route: "/school/mayo-boys-school",
    },
  ];

  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-start w-full bg-gradient-to-br from-[#075D70] to-[#0DB2D6] py-16 lg:px-6">
      <h2 className="text-white text-3xl md:text-5xl font-semibold mb-10 text-center">
        Schools We Have Cracked
      </h2>

      <div className="flex flex-wrap justify-center gap-4 ">
        {schools.map((school, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg p-2 flex flex-col items-center hover:scale-105 hover:shadow-xl transition-transform 
                       w-[40%] md:w-1/4 "
          >
            <img
              src={school.logo}
              alt={school.name}
              className="w-[100px] h-[90px] object-contain mb-3"
            />
            <p className="text-sm md:text-base font-semibold text-gray-800 text-center">
              {school.name}
            </p>
            <div className="w-full mt-auto">
              <Link href={school.route}>
                <button className="w-full py-1.5 text-xs md:text-sm font-medium text-white rounded-lg bg-[#075D70] hover:bg-[#0DB2D6] transition">
                  Visit
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

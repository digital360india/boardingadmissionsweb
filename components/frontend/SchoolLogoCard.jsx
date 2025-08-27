"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
    <div className="min-h-[35vh] flex flex-col items-center justify-start w-full bg-gradient-to-br from-[#075D70] to-[#0DB2D6] py-10 lg:px-6">
      <h2 className="text-white text-3xl md:text-5xl font-semibold mb-10 text-center">
        Schools We Have Cracked
      </h2>

      <Swiper
        spaceBetween={10}
        slidesPerView={1.5}
        centeredSlides={true}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2.5 },
          1024: { slidesPerView: 3.5 },
        }}
        className="w-full px-6"
      >
        {schools.map((school, idx) => (
          <SwiperSlide key={idx} className="flex justify-center">
            <Link
              href={school.route}
              className="bg-white rounded-xl shadow-xl shadow-black/30 p-4 mx-8 flex flex-col items-center justify-between 
                         transition-all duration-300 ease-in-out w-[50vw] md:w-[250px] h-[200px]
                         swiper-slide-active:scale-110 swiper-slide-active:shadow-2xl"
            >
              <img
                src={school.logo}
                alt={school.name}
                className="w-[130px] h-[130px] object-contain mt-4"
              />
              <p className="text-sm md:text-base font-semibold text-gray-800 text-center mt-2 mb-2 ">
                {school.name}
              </p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

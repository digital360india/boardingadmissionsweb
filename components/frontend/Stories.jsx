"use client";
import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

export default function Stories() {
  const carouselRef = useRef(null);

  const team = [
    {
      story: "Boarding Admissions transformed my preparation journey. The personalized courses and expert guidance were invaluable. I couldn't have achieved my results without them!",
      imageSrc: "/images/arya.jpg.svg",
      name: "Vasundhra",
      school: "Welham Girls School"
    },
    
    {
      story: "The mock tests and interactive classes at Boarding Admissions were game-changers. They helped me build confidence and ace my entrance exams. Highly recommend!",
      imageSrc: "/images/arya.jpg.svg",
      name: "Ishana",
      school: "Lawrence School"
    },
    {
      story: "The comprehensive learning resources and flexible scheduling at Boarding Admissions made my preparation seamless. The support and feedback from teachers were outstanding.",
      imageSrc: "/images/arya.jpg.svg",
      name: "Madhavani",
      school: "Mayo Girls' College"
    },
    {
      story: "Boarding Admissions' focus on soft skills and leadership set them apart. I feel prepared not just academically but also personally for boarding school life.",
      imageSrc: "/images/arya.jpg.svg",
      name: "Amishi",
      school: "Welham Girls' School"
    },
    {
        story: "The tailored preparation plans and expert mentorship at Boarding Admissions helped me excel. The continuous feedback and practice sessions were key to my success.",
        imageSrc: "/images/arya.jpg.svg",
        name: "Aratrika",
        school: "Scindia Kanya Vidyalaya"
      },
      {
        story: "Boarding Admissions provided the perfect balance of rigorous academics and personal growth. Their customized courses and interactive sessions made all the difference in my preparation.",
        imageSrc: "/images/arya.jpg.svg",
        name: "Nishka",
        school: "Ecole Globale"
      },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  return (
    <div className="bg-[#FAF9FF]">
    <div className="">
      <div className=" xl:px-[100px] md::px-[40px] px-[28px] pt-[3%]">
        <p className="text-32px font-semibold">Stories that inspire</p>
      </div>
      <div className="w-full md:pt-14 pt-8 pb-20 xl:px-[100px] lg:px-[40px] px-[20px] relative">
        <Carousel
          responsive={responsive}
          arrows={false}
          ref={carouselRef}
          itemClass="carousel-item-padding-40-px"
        >
          {team.map((member, index) => (
            <div key={index} className="rounded-lg bg-[#FEFEFE] w-[323px] h-[236px]  mx-auto">
              <div className="flex justify-center md:w-[291px] w-[320px] h-[141px] px-4 py-4">
               <p>{member.story}</p>
              </div>
              <div className="px-4 mt-8 flex space-x-6">
                
                <div >
                <Image
                  src={member.imageSrc}
                  width={50}
                  height={50}
                  alt={member.name}
                className="rounded-full "
                />
                </div>
                <div>
                <div>
                  <p className="text-18px ">{member.name}</p>
                </div>
                <div className="">{member.school}</div>
              </div>
              </div>
             
            </div>
          ))}
        </Carousel>
        <div className="md:block hidden">
        <div className="absolute top-[50%] lg:left-8 left-0 transform -translate-y-1/2">
          <button
            onClick={handlePrev}
            className=" bg-white text-white p-2 rounded-full"
          >
            <Image
                  src="/images/arrowleft.svg"
                  width={20}
                  height={50}
                  alt="card"
                />
          </button>
        </div>
        <div className="absolute top-[50%] lg:right-8 right-0 transform -translate-y-1/2">
          <button
            onClick={handleNext}
            className=" text-white p-2 rounded-full"
          >
           <Image
                  src="/images/arrowright.svg"
                  width={20}
                  height={50}
                  alt="card"
                />
          </button>
        </div>
        </div>
      </div>
    </div>
  </div>
  );
}

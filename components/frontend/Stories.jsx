"use client";
import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

export default function Stories() {
  const carouselRef = useRef(null);

  const team = [
    {
      story: "I had a great experience at Vedantu. All my concepts were clear and I felt confident while appearing for the board exams.",
      imageSrc: "/images/arya.jpg.svg",
      name: "English Expert",
      school: "Welham Girls"
    },
    
    {
      story: "I had a great experience at Vedantu. All my concepts were clear and I felt confident while appearing for the board exams.",
      imageSrc: "/images/arya.jpg.svg",
      name: "English Expert",
      school: "Welham Girls"
    },
    {
      story: "I had a great experience at Vedantu. All my concepts were clear and I felt confident while appearing for the board exams.",
      imageSrc: "/images/arya.jpg.svg",
      name: "English Expert",
      school: "Welham Girls"
    },
    {
      story: "I had a great experience at Vedantu. All my concepts were clear and I felt confident while appearing for the board exams.",
      imageSrc: "/images/arya.jpg.svg",
      name: "English Expert",
      school: "Welham Girls"
    },
    {
        story: "I had a great experience at Vedantu. All my concepts were clear and I felt confident while appearing for the board exams.",
        imageSrc: "/images/arya.jpg.svg",
        name: "English Expert",
        school: "Welham Girls"
      },
      {
        story: "I had a great experience at Vedantu. All my concepts were clear and I felt confident while appearing for the board exams.",
        imageSrc: "/images/arya.jpg.svg",
        name: "English Expert",
        school: "Welham Girls"
      },
      {
        story: "I had a great experience at Vedantu. All my concepts were clear and I felt confident while appearing for the board exams.",
        imageSrc: "/images/arya.jpg.svg",
        name: "English Expert",
        school: "Welham Girls"
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
      <div className=" px-[100px] pt-[3%]">
        <p className="text-32px font-semibold">Stories that inspire</p>
      </div>
      <div className="w-full pt-14 pb-20 px-[100px] relative">
        <Carousel
          responsive={responsive}
          arrows={false}
          ref={carouselRef}
          itemClass="carousel-item-padding-40-px"
        >
          {team.map((member, index) => (
            <div key={index} className="rounded-lg bg-[#FEFEFE] mx-10 w-[323px] h-[236px]  mx-auto">
              <div className="flex justify-center w-[291px] h-[141px] px-4 py-4">
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
        <div className="absolute top-[50%] left-16 transform -translate-y-1/2">
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
        <div className="absolute top-[50%] right-16 transform -translate-y-1/2">
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
  );
}

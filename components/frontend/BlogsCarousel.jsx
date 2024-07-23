"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const carouselItems = [
  {
    blog: "FEATURED BLOGS 1",
    Content1: "LOREM IPSUM DOLOR SIT AMET CONSECTETURE.TEMPOR AC.",
    Content2: "Lorem ipsum dolor sit amet consectetur. Tempor ac.",
    image: "/images/blog2.svg",
  },
  {
    blog: "FEATURED BLOGS 2",
    Content1: "LOREM IPSUM DOLOR SIT AMET CONSECTETURE.TEMPOR AC.",
    Content2: "Lorem ipsum dolor sit amet consectetur. Tempor ac.",
    image: "/images/blog2.svg",
  },
  {
    blog: "FEATURED BLOGS 3",
    Content1: "LOREM IPSUM DOLOR SIT AMET CONSECTETURE.TEMPOR AC.",
    Content2: "Lorem ipsum dolor sit amet consectetur. Tempor ac.",
    image: "/images/blog2.svg",
  },
];

export default function BlogsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const transitionEnd = setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Match the duration of the CSS transition

    return () => clearTimeout(transitionEnd);
  }, [currentIndex]);

  return (
    <div>
    <div className="h-[700px] flex justify-center items-center px-[100px]">
      <div className="relative w-[1240px] rounded-lg mx-auto overflow-hidden" style={{ boxShadow: '0 4px 10px rgba(0, 0, 0, 0.8)' }}>
        <div className="flex items-center justify-between w-full h-[500px] bg-white shadow-lg rounded-lg">
          <div className="w-1/2 h-full flex items-center font-normal pl-8">
          <div>
            <h2 className=" text-[#808080] pb-4 text-18px ">
              {carouselItems[currentIndex].blog}
            </h2>
            <p className="text-[30px] text-primary02 pb-10 w-[482px]">
              {carouselItems[currentIndex].Content1}
            </p>
            <p className="text-18px ">
              {carouselItems[currentIndex].Content2}
            </p>
            <div className="text-18px text-primary02 mt-8">
              <button>READ MORE</button>
            </div>
          </div></div>
          <div className="w-[608px] h-[500px] overflow-hidden relative">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {carouselItems.map((item, index) => (
                <div
                  key={index}
                  className="w-full h-full flex-shrink-0"
                  style={{ width: "100%" }}
                >
                 <Image
                width={1}
                height={1}
                    src={item.image}
                    alt={item.text}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
      <div>
     
      <button
        onClick={handlePrev}
        className="absolute top-[60%] left-0 px-4 py-2 transform -translate-y-1/2 rounded-full"
      >
         <Image
                width={1}
                height={1}
                    src="/images/leftbutton.svg"
                    alt="/"
                    className="object-cover w-full h-full "
                  />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-[60%] right-0 p-2  px-4  transform -translate-y-1/2 rounded-full"
      >
       <Image
                width={1}
                height={1}
                    src="/images/rightbutton.svg"
                    alt="/"
                    className="object-cover w-full h-full "
                  />
      </button>
    </div>
    
    </div>
  );
}

"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const carouselItems = [
  {
    blog: "FEATURED BLOGS 1",
    Content1: "LOREM IPSUM DOLOR SIT AMET CONSECTETURE.TEMPOR AC.",
    Content2: "Lorem ipsum dolor sit amet consectetur. Tempor ac.",
    image: "/images/blog3.svg",
  },
  {
    blog: "FEATURED BLOGS 2",
    Content1: "LOREM IPSUM DOLOR SIT AMET CONSECTETURE.TEMPOR AC.",
    Content2: "Lorem ipsum dolor sit amet consectetur. Tempor ac.",
    image: "/images/blog3.svg",
  },
  {
    blog: "FEATURED BLOGS 3",
    Content1: "LOREM IPSUM DOLOR SIT AMET CONSECTETURE.TEMPOR AC.",
    Content2: "Lorem ipsum dolor sit amet consectetur. Tempor ac.",
    image: "/images/blog3.svg",
  },
];



// array for mobile 

const team = [
  {
    name: "Lorem ipsum dolor sit amet consectetur. Nisl eget sit elementum.",
    imageSrc: "/images/blog4.svg",
    designation: "Lorem ipsum dolor sit amet consectetur. Mauris in urna aliquet habitasse turpis a. Elit platea erat.",
  },
  {
    name: "Lorem ipsum dolor sit amet consectetur. Nisl eget sit elementum.",
    imageSrc: "/images/blog4.svg",
    designation: "Lorem ipsum dolor sit amet consectetur. Mauris in urna aliquet habitasse turpis a. Elit platea erat.",
  },
  {
    name: "Lorem ipsum dolor sit amet consectetur. Nisl eget sit elementum.",
    imageSrc: "/images/blog4.svg",
    designation: "Lorem ipsum dolor sit amet consectetur. Mauris in urna aliquet habitasse turpis a. Elit platea erat.",
  },
  {
    name: "Lorem ipsum dolor sit amet consectetur. Nisl eget sit elementum.",
    imageSrc: "/images/blog4.svg",
    designation: "Lorem ipsum dolor sit amet consectetur. Mauris in urna aliquet habitasse turpis a. Elit platea erat.",
  },
  {
    name: "Lorem ipsum dolor sit amet consectetur. Nisl eget sit elementum.",
    imageSrc: "/images/blog4.svg",
    designation: "Lorem ipsum dolor sit amet consectetur. Mauris in urna aliquet habitasse turpis a. Elit platea erat.",
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



// states for mobile Carousel 

const carouselRef = useRef(null);

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


  return (
    <div>
      <div className="lg:block hidden">
        <div className="h-[700px] flex justify-center items-center xl:px-[100px] lg:px-[40px] md:px-[30px] mt-10">
          <div
            className="relative w-[1240px] rounded-lg mx-auto overflow-hidden"
            style={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.8)" }}
          >
            <div className="flex items-center justify-between w-full h-[500px] bg-white shadow-lg rounded-lg">
              <div className="w-1/2 h-full flex items-center   pl-8">
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
                </div>
              </div>
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
                        width={1000}
                        height={1000}
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
              width={1000}
              height={1000}
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
              width={1000}
              height={1000}
              src="/images/rightbutton.svg"
              alt="/"
              className="object-cover w-full h-full "
            />
          </button>
        </div>
      </div>






      <div className="bg-[#F3F3F3] lg:hidden block">
      <div className=" rounded-xl">
        <div className="w-full pt-14 pb-20 xl:px-[100px] lg:px-[40px] px-[24px] relative">
          <Carousel
            responsive={responsive}
            arrows={false}
            ref={carouselRef}
            itemClass="carousel-item-padding-40-px"
          >
            {team.map((member, index) => (
              <div key={index} className=" bg-[#FEFEFE] mx-2  rounded-3xl">
                <div className="flex justify-center ">
                  <Image 
                    src={member.imageSrc}
                    width={1000}
                    height={244}
                    alt={member.name}
                    className=" rounded-t-3xl"
                  />
                </div>
                <div className="pl-5">
                  <div className="py-4">
                    <p className="text-[18px] text-primary02 pb-">
                      {member.name}
                    </p>
                  </div>
                  <div>
                    <p className="text-[14px]">{member.designation}</p>
                  </div>
                  <div className="py-8 text-[#075D70] text-18px"><button>Read more</button></div>
                </div>
               
              </div>
            ))}
          </Carousel>
          {/* <div className="absolute top-[50%] left-2 transform -translate-y-1/2">
            <button
              onClick={handlePrev1}
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
          <div className="absolute top-[50%] right-2 transform -translate-y-1/2">
            <button
              onClick={handleNext1}
              className=" text-white p-2 rounded-full"
            >
             <Image
                    src="/images/arrowright.svg"
                    width={20}
                    height={50}
                    alt="card"
                  />
            </button>
          </div> */}
        </div>
      </div>
    </div>

      
    </div>
  );
}

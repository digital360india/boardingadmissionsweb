"use client";
import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const team = [
  {
    name: "Lorem ipsum dolor sit amet consectetur. Nunc.",
    imageSrc: "/images/blog.svg",
    designation:
      "Lorem ipsum dolor sit amet consectetur. Sem scelerisque amet felis pretium at.",
  },
  {
    name: "Lorem ipsum dolor sit amet consectetur. Nunc.",
    imageSrc: "/images/blog.svg",
    designation:
      "Lorem ipsum dolor sit amet consectetur. Sem scelerisque amet felis pretium at.",
  },
  {
    name: "Lorem ipsum dolor sit amet consectetur. Nunc.",
    imageSrc: "/images/blog.svg",
    designation:
      "Lorem ipsum dolor sit amet consectetur. Sem scelerisque amet felis pretium at.",
  },
  {
    name: "Lorem ipsum dolor sit amet consectetur. Nunc.",
    imageSrc: "/images/blog.svg",
    designation:
      "Lorem ipsum dolor sit amet consectetur. Sem scelerisque amet felis pretium at.",
  },
  {
    name: "Lorem ipsum dolor sit amet consectetur. Nunc.",
    imageSrc: "/images/blog.svg",
    designation:
      "Lorem ipsum dolor sit amet consectetur. Sem scelerisque amet felis pretium at.",
  },
];

export default function FeaturedBlog() {
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
    <div className="bg-[#F3F3F3]">
      <div className="">
        <div className=" xl:px-[100px] lg:px-[40px] px-[24px]">
          <p className="lg:text-24px text-[16px] text-[#5C616E] pt-10">
            FEATURED BLOGS
          </p>
          <p className="lg:text-[48px] text-24px lg:w-[50%] font-medium ">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <div className="w-full pt-14 pb-20 xl:px-[100px] lg:px-[40px]  relative">
          <Carousel
            responsive={responsive}
            arrows={false}
            ref={carouselRef}
            itemClass="carousel-item-padding-40-px"
          >
            {team.map((member, index) => (
              <div key={index} className="rounded-lg bg-[#FEFEFE] mx-2">
                <div className="flex justify-center">
                  <Image
                    src={member.imageSrc}
                    width={1000}
                    height={244}
                    alt={member.name}
                  />
                </div>
                <div className="py-3 px-4">
                  <div>
                    <p className="text-24px font-medium text-black">
                      {member.name}
                    </p>
                  </div>
                  <div>
                    <p className="text-18px ">{member.designation}</p>
                  </div>
                  <div className="py-4 text-[#075D70]">
                    <button>Read more</button>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
          <div className="lg:block hidden">
            <div className="absolute top-[50%] left-2 transform -translate-y-1/2">
            <button
              onClick={handlePrev}
              className=" bg-white text-white p-2 rounded-full"
            >
              <Image
                    src="/images/arrowleft.svg"
                    width={1000}
                    height={50}
                    alt="card"
                  />
            </button>
          </div>
          <div className="absolute top-[50%] right-2 transform -translate-y-1/2">
            <button
              onClick={handleNext}
              className=" text-white p-2 rounded-full"
            >
             <Image
                    src="/images/arrowright.svg"
                    width={1000}
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

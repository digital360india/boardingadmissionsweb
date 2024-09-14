"use client";
import React, { useState, useRef, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const cardData = [
  {
    id: 1,
    type: "video",
    videoSrc:
      "https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/carousel%2FIMG_5183.MP4?alt=media&token=1ffc7bc7-8b31-4a40-8fd8-7aa3bb34500c",
    videoSrcSmallScreen:
      "https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/carousel%2Fmobileviewvideo.mp4?alt=media&token=40e1d369-04fb-42eb-913a-abc1be12794f",
  },
  {
    id: 2,
    type: "image",
    imageSrc: "/images/slideimg.jpg",
    title: "Course 1",
    description: "Description for course 1",
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
];

export default function HeroCarousel() {
  const [videoPlayed, setVideoPlayed] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // Detect if it's mobile
  const [isSwipeable, setIsSwipeable] = useState(false); // Initially disable swiping
  const videoRef = useRef(null);
  const carouselRef = useRef(null);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000); // Mobile threshold
    };

    // Initial check
    handleResize();

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleVideoEnd = () => {
    setVideoPlayed(true);
    setIsSwipeable(true); // Re-enable swiping and navigation after video ends
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const handleBeforeChange = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleAfterChange = (previousSlide, { currentSlide }) => {
    if (cardData[currentSlide].type === "video" && videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay was prevented:", error);
      });
    }
  };

  useEffect(() => {
    if (videoRef.current && cardData[0].type === "video") {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay was prevented:", error);
      });
    }
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="w-full lg:h-screen bg-[#F4FCFC]">
      <Carousel
        ref={carouselRef}
        responsive={responsive}
        infinite={false}
        arrows={false}
        swipeable={isSwipeable} // Control swipeability
        draggable={isSwipeable} // Control dragability
        beforeChange={handleBeforeChange}
        afterChange={handleAfterChange}
      >
        {cardData.map((card, index) => {
          if (card.type === "video") {
            const videoSrc = isMobile ? card.videoSrcSmallScreen : card.videoSrc; // Choose based on screen size
            return (
              <div
                key={card.id}
                className="lg:w-full lg:h-[97vh] h-[66vh] flex items-center justify-center bg-[#FFFFFF]"
              >
                <video
                  ref={index === 0 ? videoRef : null}
                  className="w-full h-full object-cover"
                  autoPlay={index === 0}
                  muted
                  onEnded={handleVideoEnd}
                  controls={false} // Disable controls for the first video
                >
                  <source src={videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            );
          } else if (card.type === "image" && videoPlayed) {
            return (
              <div
                key={card.id}
                className="relative lg:w-full lg:h-[100vh] h-[66vh] flex items-center justify-center bg-[#FFFFFF]"
              >
                <Image
                  src={card.imageSrc}
                  width={1000} // Set the image width
                  height={1000} // Set the image height
                  alt="card"
                  className=" w-[100vw] xl:h-[100%] lg:h-[104%] h-[110%]  -mt-16"
                />
                <div className="absolute top-0 xl:h-[95%] lg:h-[94%] h-[100%] w-[100vw] text-[#FFFF] bg-[#0000005c]">
                  <div className="absolute lg:bottom-[20%] bottom-[14%] lg:left-24 left-12 text-[#FFFF] lg:w-[60%] w-[80%]">
                    <p className="xl:text-[18px] lg:text-[16px] text-[14px] mb-4">
                      100% QUALITY COURSES
                    </p>
                    <p className="xl:text-[56px] lg:text-[46px] text-[32px] font-medium leading-tight">
                      Elevate Your Skills: Enroll in our Diverse Online Courses
                    </p>
                  </div>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </Carousel>
    </div>
  );
}

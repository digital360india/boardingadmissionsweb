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
  },
  {
    id: 2,
    type: "image",
    imageSrc: "/",
    title: "Course 1",
    description: "Description for course 1",
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    id: 3,
    type: "image",
    imageSrc: "/",
    title: "Course 2",
    description: "Description for course 2",
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
];

export default function HeroCarousel() {
  const [videoPlayed, setVideoPlayed] = useState(false);
  const [isSwipeable, setIsSwipeable] = useState(false); // Initially disable swiping
  const videoRef = useRef(null);
  const carouselRef = useRef(null);

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
                  <source src={card.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            );
          } else if (card.type === "image" && videoPlayed) {
            return (
              <div
                key={card.id}
                className="lg:w-full lg:h-full lg:max-h-[97vh] bg-[#FFFFFF] rounded-[9px] relative flex flex-col items-center p-6"
              >
                <Image
                  src={card.imageSrc}
                  width={600}
                  height={250}
                  alt="card"
                  className="object-contain max-w-full max-h-64"
                />
                <h1 className="text-primary02 text-2xl font-semibold text-center pt-4">
                  {card.title}
                </h1>
                <p className="text-base pt-4 text-center px-4">
                  {card.description}
                </p>
                <div className="flex-grow mt-4">
                  {card.features.map((feature, index) => (
                    <React.Fragment key={index}>
                      <p className="pt-4 pb-2 border-b w-full sm:w-[250px] border-primary02 text-center text-primary02 font-light">
                        {typeof feature === "string" ? feature : feature.title}
                      </p>
                    </React.Fragment>
                  ))}
                </div>
                <div className="flex justify-center items-center pt-4 pb-8 mt-auto">
                  <div className="w-[138px] h-[40px] bg-gradient01 rounded-md flex justify-center items-center">
                    <button className="text-white">Enroll Now</button>
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

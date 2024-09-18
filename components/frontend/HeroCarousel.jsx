"use client";
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Navbar from "./Navbar";

// Install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const cardData = [
  {
    id: 1,
    type: "video",
    videoSrc:
      "https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/carousel%2Fmobileviewvideo%20(1)%20(1).mp4?alt=media&token=0273a9fc-6edc-4c15-b642-1da56f906bc7",
    videoSrcSmallScreen:
      "https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/carousel%2Fmobileviewvideo%20(1)%20(1).mp4?alt=media&token=0273a9fc-6edc-4c15-b642-1da56f906bc7",
  },
  {
    id: 2,
    type: "image",
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/bookify-faedc.appspot.com/o/banner1.png?alt=media&token=25e52b21-cad7-4e3f-adaa-521f15a6f7a9",
    mobileimageSrc: "/images/mobilebanner1.jpg",
  },
  {
    id: 3,
    type: "image",
    imageSrc: "/images/banner3.jpg",
    mobileimageSrc: "/images/mobilebanner1.jpg",
  },
];

const HeroCarousel = () => {
  const [videoPlayed, setVideoPlayed] = useState(false); // Track if the video has been played
  const [isMobile, setIsMobile] = useState(false); // Detect if it's mobile
  const [videoSrc, setVideoSrc] = useState(cardData[0].videoSrc); // State for video source
  const [isLoading, setIsLoading] = useState(true); // Loading state for video
  const swiperRef = useRef(null);
  const videoRef = useRef(null);

  // Handle screen size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000); // Mobile threshold
    };

    // Initial check
    handleResize();

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update video source when isMobile changes
  useEffect(() => {
    if (cardData[0].type === "video") {
      const newVideoSrc = isMobile
        ? cardData[0].videoSrcSmallScreen
        : cardData[0].videoSrc;
      setVideoSrc(newVideoSrc);
    }
  }, [isMobile]);

  // Check local storage to see if the video has been played
  useEffect(() => {
    const videoPlayedStatus = localStorage.getItem("videoPlayed");
    if (videoPlayedStatus === "true") {
      setVideoPlayed(true);
      if (swiperRef.current) {
        swiperRef.current.swiper.allowTouchMove = true; // Enable swiping
      }
    }
  }, []);

  // Handle video end event
  const handleVideoEnd = () => {
    setVideoPlayed(true);
    localStorage.setItem("videoPlayed", "true"); // Store video played status
    if (swiperRef.current) {
      swiperRef.current.swiper.allowTouchMove = true; // Enable swiping
      swiperRef.current.swiper.slideNext(); // Move to the next slide programmatically
    }
  };

  // Play the video again after it's ended
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("ended", () => {
        videoRef.current.currentTime = 0; // Reset to start
        videoRef.current.play(); // Play again after the end
      });
    }
  }, [videoRef]);

  // Set allowTouchMove based on the current slide
  const handleSlideChange = () => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;
      const isVideoSlide = swiperInstance.activeIndex === 0;
      swiperInstance.allowTouchMove = !isVideoSlide; // Disable swiping for video slide
    }
  };

  // Handle when the video is ready to play
  const handleCanPlay = () => {
    setIsLoading(false); // Stop the loading animation
  };

  return (
    <div className="w-full lg:h-screen bg-[#F4FCFC] relative">
      {/* Loading screen */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white z-50">
          <div className="loader">Loading...</div>
        </div>
      )}

      <Swiper
        ref={swiperRef}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={handleSlideChange} // Adjust swiping permissions on slide change
      >
        {cardData.map((card) => (
          <SwiperSlide key={card.id}>
            {card.type === "video" ? (
              <div className="lg:w-full lg:h-[97vh] h-[66vh] flex items-center justify-center bg-[#FFFFFF]">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  autoPlay // Ensure the video auto-plays
                  muted // Ensure the video is muted for autoplay
                  onCanPlay={handleCanPlay} // Detect when the video is ready
                  onEnded={handleVideoEnd} // Handle when the video ends
                  controls={false} // Disable controls for the video
                >
                  <source src={videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : (
              <div>
                <div className="hidden w-full h-[100vh] md:flex items-center justify-center bg-[#FFFFFF]">
                  <Image
                    src={card.imageSrc}
                    width={1000}
                    height={1000}
                    alt={`Slide ${card.id}`}
                    className="xl:h-[100%] w-full lg:h-[104%] h-[110%] -mt-16"
                  />
                </div>
                <div className="md:hidden w-full lg:h-[100vh] h-[66vh] flex items-center justify-center bg-[#FFFFFF]">
                  <Image
                    src={card.mobileimageSrc}
                    width={1000}
                    height={1000}
                    alt={`Slide ${card.id}`}
                    className="h-[100%]"
                  />
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;

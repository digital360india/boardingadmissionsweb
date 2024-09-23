"use client";
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import '@/components/frontend/HeroCarousel.css';

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
  const [videoPlayed, setVideoPlayed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [videoSrc, setVideoSrc] = useState(cardData[0].videoSrc);
  const [isLoading, setIsLoading] = useState(true);
  const swiperRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (cardData[0].type === "video") {
      const newVideoSrc = isMobile
        ? cardData[0].videoSrcSmallScreen
        : cardData[0].videoSrc;
      setVideoSrc(newVideoSrc);
    }
  }, [isMobile]);

  useEffect(() => {
    const videoPlayedStatus = localStorage.getItem("videoPlayed");
    if (videoPlayedStatus === "true") {
      setVideoPlayed(true);
      setIsLoading(false);
      if (swiperRef.current) {
        swiperRef.current.swiper.allowTouchMove = true;
      }
    }
  }, []);

  const handleVideoEnd = () => {
    setVideoPlayed(true);
    localStorage.setItem("videoPlayed", "true");
    if (swiperRef.current) {
      swiperRef.current.swiper.allowTouchMove = true;
      swiperRef.current.swiper.slideNext();
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("ended", () => {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      });
    }
  }, [videoRef]);

  const handleSlideChange = () => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;
      const isVideoSlide = swiperInstance.activeIndex === 0;
      swiperInstance.allowTouchMove = !isVideoSlide;
    }
  };

  const handleVideoLoaded = () => {
    setIsLoading(false);
  };

  return (
    <div className="w-full lg:h-screen bg-[#F4FCFC]">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white z-50">
          <div className='h-screen w-full flex justify-center items-center relative bg-[#e9fdfa] '>

<div className='ball h-[120px] w-[120px] md:h-[200px] shadow-md md:w-[200px] rounded-[50%]'></div>
<img src="icons/Boardinglogo.svg" className='object-fit ball h-[120px] w-[120px] md:h-[200px] shadow-md md:w-[200px] rounded-[50%]'/>
<div className='ball h-[120px] w-[120px] md:h-[200px] md:w-[200px] shadow-lg rounded-[50%]'></div>
</div>

        </div>
      )}
      <Swiper
        ref={swiperRef}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={handleSlideChange}
      >
        {cardData.map((card, index) => (
          <SwiperSlide key={card.id}>
            {card.type === "video" ? (
              <div className="lg:w-full lg:h-[97vh] h-[66vh] flex items-center justify-center bg-[#FFFFFF]">
                <video
                  ref={index === 0 ? videoRef : null}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  onEnded={handleVideoEnd}
                  onCanPlay={handleVideoLoaded}
                  controls={false}
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

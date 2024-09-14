"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const team = [
  {
    story:
      "Boarding Admissions transformed my preparation journey. The personalized courses and expert guidance were invaluable. I couldn't have achieved my results without them!",
    imageSrc: "/icons/logo.enc",
    name: "Vasundhra",
    school: "Welham Girls School",
    videoSrc: "https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/testimonials%2Ftestimonials1.mp4?alt=media&token=5b27c087-ce83-40e6-a409-3a1677d3b3a7",
  },
  {
    story:
      "The mock tests and interactive classes at Boarding Admissions were game-changers. They helped me build confidence and ace my entrance exams. Highly recommend!",
    imageSrc: "/icons/logo.enc",
    name: "Sanchit Sharma",
    school: "Welham Boys School",
    videoSrc: "https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/testimonials%2Ftestimonials_compressed.mp4?alt=media&token=cc7e5678-6027-4664-8c77-4ee926a873ce", // No video for this entry
  },
  {
    story:
      "The comprehensive learning resources and flexible scheduling at Boarding Admissions made my preparation seamless. The support and feedback from teachers were outstanding.",
    imageSrc: "/icons/logo.enc",
    name: "Madhavani",
    school: "Mayo Girls' College",
    videoSrc: "", // No video for this entry
  },
  {
    story:
      "Boarding Admissions' focus on soft skills and leadership set them apart. I feel prepared not just academically but also personally for boarding school life.",
    imageSrc: "/icons/logo.enc",
    name: "Amishi",
    school: "Welham Girls' School",
    videoSrc: "", // No video for this entry
  },
  {
    story:
      "The tailored preparation plans and expert mentorship at Boarding Admissions helped me excel. The continuous feedback and practice sessions were key to my success.",
    imageSrc: "/icons/logo.enc",
    name: "Aratrika",
    school: "Scindia Kanya Vidyalaya",
    videoSrc: "", // No video for this entry
  },
  {
    story:
      "Boarding Admissions provided the perfect balance of rigorous academics and personal growth. Their customized courses and interactive sessions made all the difference in my preparation.",
    imageSrc: "/icons/logo.enc",
    name: "Nishka",
    school: "Ecole Globale",
    videoSrc: "", // No video for this entry
  },
];

export default function Stories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // lg and above
        setCardsToShow(3);
      } else {
        // below lg
        setCardsToShow(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? team.length - cardsToShow : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === team.length - cardsToShow ? 0 : prevIndex + 1
    );
  };
  return (
    <div>
      <div className=" xl:px-[100px] md::px-[40px] px-[28px] pt-[3%] bg-[#FAF9FF]">
        <p className="text-32px font-semibold">Stories that inspire</p>
      </div>
      <div className=" mx-auto px-4 sm:px-6 lg:px-[100px] py-12 relative overflow-hidden bg-[#FAF9FF]">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
            }}
          >
            {team.map((member, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-full ${
                  cardsToShow === 1 ? "sm:w-full" : "lg:w-1/3"
                } px-4`}
              >
                <div className="bg-[#FFFF] rounded-lg  shadow-lg p-4 h-full flex flex-col justify-between">
                  {/* Conditionally render video if videoSrc is present */}
                  {member.videoSrc ? (
                    <div className="my-4">
                      <video
                        controls
                        className="w-full max-h-48  object-cover rounded-lg"
                      >
                        <source src={member.videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ) : (
                    <p className="text-gray-700 my-4">{member.story}</p>
                  )}
                  <div className="flex items-center">
                    <img
                      src={member.imageSrc}
                      alt={member.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold">{member.name}</p>
                      <p className="text-sm text-gray-600">{member.school}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-8">
          {[...Array(team.length - (cardsToShow - 1))].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`mx-1 w-8 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-black w-12"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
          <div className="lg:block hidden">
            {/* Buttons positioned at the sides */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-16 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
              style={{ marginLeft: "-16px" }} // Make sure buttons stay within the viewport
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-16 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
              style={{ marginRight: "-16px" }} // Make sure buttons stay within the viewport
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

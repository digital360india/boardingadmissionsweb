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
      "The complete learning resources and flexible scheduling at Boarding Admissions made my entire preparation journey so seamless and stress-free. The constant support and detailed feedback from the teachers truly boosted my confidence and helped me stay on track.",
    imageSrc: "/icons/logo.enc",
    name: "Sanchit Sharma",
    school: "Welham Boys School",
    videoSrc: "https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/testimonials%2Ftestimonials_compressed.mp4?alt=media&token=cc7e5678-6027-4664-8c77-4ee926a873ce", 
  },
  {
    story:
      "The complete learning resources and flexible scheduling at Boarding Admissions made my entire preparation journey so seamless and stress-free. The constant support and detailed feedback from the teachers truly boosted my confidence and helped me stay on track.",
    imageSrc: "/icons/logo.enc",
    name: "Khyati Yadav",
    school: "Scindia Kanya Vidyalaya",
    videoSrc: "https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/boardingadmission%2Fkhyati.mp4?alt=media&token=22578130-5489-4d1a-b21f-4ec7699555f9", 
  },
  {
    story:
      "The complete learning resources and flexible scheduling at Boarding Admissions made my entire preparation journey so seamless and stress-free. The constant support and detailed feedback from the teachers truly boosted my confidence and helped me stay on track.",
    imageSrc: "/icons/logo.enc",
    name: "Jiya Kumar",
    school: "Welham Girls' School",
    videoSrc: "https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/boardingadmission%2Fjiyawelham.mp4?alt=media&token=53e78a82-dbfb-45fa-a148-9446c85cb1dd", 
  },
  {
    story:
      "The complete learning resources and flexible scheduling at Boarding Admissions made my entire preparation journey so seamless and stress-free. The constant support and detailed feedback from the teachers truly boosted my confidence and helped me stay on track.",
    imageSrc: "/icons/logo.enc",
    name: "Madhavani",
    school: "Mayo Girls' College",
    videoSrc: "", 
  },
  {
    story:
      "Boarding Admissions’ focus on developing not just academic skills, but also leadership and soft skills, really set them apart. I now feel fully prepared for the challenges of boarding school life, both academically and personally. I couldn’t have asked for a better foundation.",
    imageSrc: "/icons/logo.enc",
    name: "Amishi",
    school: "Welham Girls' School",
    videoSrc: "", 
  },
  {
    story:
      "The tailored preparation plans and expert mentorship at Boarding Admissions were absolutely key to my success. Their continuous feedback, along with practice sessions, ensured that I was always improving and working on my weak points with clarity.",
    imageSrc: "/icons/logo.enc",
    name: "Aratrika",
    school: "Scindia Kanya Vidyalaya",
    videoSrc: "", 
  },
  {
    story:
      "Boarding Admissions provided me with the perfect balance of rigorous academic preparation and personal growth. Their customized courses, combined with interactive sessions, made studying not only effective but also engaging, transforming my entire approach to learning.",
    imageSrc: "/icons/logo.enc",
    name: "Nishka",
    school: "Ecole Globale",
    videoSrc: "", 
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
        <p className="lg:text-[48px] text-[32px] text-primary02 font-medium lg:leading-normal leading-tight lg:w-[848px] w-full">Stories that inspire</p>
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

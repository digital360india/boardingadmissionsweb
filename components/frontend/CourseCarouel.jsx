"use client";
import React, { useState, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import BookaDemoPopUp from "./BookaDemoPopUp"; // Ensure this component is modal-ready

const cardData = [
  {
    id: 1,
    imageSrc: "/icons/card1.svg",
    title: "ACE ENTRANCE EXAM",
    route: "/coursepackages/Aceentranceexam",
    description:
      "Unlock Your Boarding School Dream and Ace the Entrance Exam with Confidence",
    features: [
      {
        title: "Online Classes",
        description:
          "We engage in online classes for personalized, flexible boarding school exam prep.",
      },
      {
        title: "Personal Interview Preparation",
        description:
          "Prepare for boarding school interviews with our expert program, enhancing communication and critical thinking.",
      },
      {
        title: "Mock Tests",
        description:
          "Master boarding school entrance exams with our realistic mock tests, ensuring confidence and strategic readiness for success.",
      },
      {
        title: "Doubt-Clearing Sessions",
        description:
          "Boost exam readiness with tailored doubt-clearing sessions to conquer challenges and enhance understanding.",
      },
    ],
  },
  {
    id: 2,
    imageSrc: "/icons/card2.svg",
    title: "FOUNDATION COURSES",
    route: "/coursepackages/Foundationcourses",
    description: "Build a Strong Academic Base to thrive in every subject",
    features: [
      "4th Grade - 6th Grade",
      "6th Grade - 8th Grade",
      "8th Grade",
      "9th Grade",
    ],
  },
  {
    id: 3,
    imageSrc: "/icons/card3.svg",
    title: "SOFT SKILL MASTERY",
    route: "/coursepackages/Softskillmastery",
    description: "Pathway to Personal Excellence or Skills Mastery",
    features: [
      {
        title: "Communication Skills",
        description:
          "Our Communication Skills program empowers students to articulate confidently, fostering academic success and personal growth.",
      },
      {
        title: "Emotional Intelligence",
        description:
          "Boarding Admissions' Emotional Intelligence program fosters essential academic and personal growth skills through interactive learning.",
      },
      {
        title: "Problem-Solving",
        description:
          "Through interactive problem-solving programs, Boarding Admissions fosters critical thinking skills for academic and professional success.",
      },
      {
        title: "Leadership",
        description:
          "Our Leadership program empowers students with essential skills for future success, fostering initiative and resilience for exams and beyond.",
      },
    ],
  },
  {
    id: 4,
    imageSrc: "/icons/card4.svg",
    title: "BOARDING COMPATIBILITY TEST",
    route: "/coursepackages/Boardingcompatibilitytest",

    description:
      "Find Your Ideal Boarding School Fit with Our Boarding Compatibility Test",
    features: [
      {
        title: "Compatibility Test",
        description:
          "Assess your child's boarding school readiness with our 25-question Compatibility Test, exploring emotional resilience, social skills, and academic readiness.",
      },
      {
        title: "Psychiatric Evaluation",
        description:
          "Ensure your child's emotional strength for boarding school with our thorough psychiatric evaluation and counseling, supporting readiness beyond academics.",
      },
    ],
  },
  {
    id: 5,
    imageSrc: "/icons/card5.svg",
    title: "CUSTOMIZED COURSES",
    route: "/coursepackages/Customizedcourses",
    description:
      "Tailor-made learning experiences designed to fit your individual needs and goals.",
    features: [
      {
        title: "One-on-One Classes",
        description:
          "Experience personalized learning with Boarding Admissions' one-on-one classes, empowering students for boarding school entrance exams and beyond.",
      },
      {
        title: "Learning Material",
        description:
          "At Boarding Admissions, our interactive learning resources ensure thorough preparation and a solid educational foundation for academic excellence.",
      },
      {
        title: "Flexible Schedule",
        description:
          "Our customized courses offer flexible scheduling for stress-free learning and optimal preparation.",
      },
      {
        title: "Regular Feedback",
        description:
          "Join Boarding Admissions for personalized, interactive feedback, guiding your child to academic excellence and keeping you engaged in their progress.",
      },
    ],
  },
];

export default function CourseCarousel() {
  const [isPopupVisible, setPopupVisible] = useState(false); // Popup visibility state
  const [selectedCard, setSelectedCard] = useState(null); // To keep track of selected card
  const carouselRef = useRef(null); // Reference for carousel to control it

  const handleClick = (cardId) => {
    setSelectedCard(cardId); // Set the selected card (if needed)
    setPopupVisible(true); // Show the popup
  };

  const handleClosePopup = () => {
    setPopupVisible(false); // Hide the popup
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next(); // Trigger next slide
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.previous(); // Trigger previous slide
    }
  };

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
    <div className="w-full bg-primary02 lg:pt-14 pt-8 lg:pb-28 pb-16 h-full relative">
      {/* Carousel */}
      <Carousel
        ref={carouselRef} // Attach the carousel reference
        arrows={false}
        responsive={responsive}
        itemClass="px-4"
      >
        {cardData.map((card) => (
          <div
            key={card.id}
            style={{ boxShadow: "0px 0px 8px 0px #FFFFFF4D" }}
            className="w-full h-full bg-[#FFFFFF] rounded-[9px] relative flex flex-col items-center"
          >
            <Image src={card.imageSrc} width={600} height={250} alt="card" />
            <h1 className="text-primary02 text-24px font-semibold text-center lg:pt-8 pt-3">
              {card.title}
            </h1>
            <p className="text-[100%] lg:pt-4 pt-2 text-center px-4">
              {card.description}
            </p>
            <div className="flex-grow">
              {card.features.map((feature, index) => (
                <React.Fragment key={index}>
                  <p className="lg:pt-8 pt-3 pb-4 border-b w-[250px] border-primary02 text-center text-primary02 font-light">
                    {typeof feature === "string" ? feature : feature.title}
                  </p>
                </React.Fragment>
              ))}
            </div>
            <div className="flex justify-center items-center pt-4 pb-8 mt-auto">
              <div
                className="w-[138px] h-[40px] bg-gradient01 rounded-md border-custom flex justify-center items-center"
              >
                <button onClick={() => handleClick(card.id)} className="text-white">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      {/* Left Arrow Button */}
      <button
        className="hidden lg:flex justify-center items-center absolute top-1/2 xl:-left-16 -left-6 transform -translate-y-1/2 bg-primary01 xl:w-12 xl:h-12 w-10 h-10 rounded-full text-white shadow-lg"
        onClick={handlePrev}
      >
        &#9664; {/* Left Arrow Icon */}
      </button>

      {/* Right Arrow Button */}
      <button
        className="hidden lg:flex justify-center items-center absolute top-1/2 xl:-right-16 -right-6 transform -translate-y-1/2 bg-primary01 xl:w-12 xl:h-12 w-10 h-10 rounded-full text-white shadow-lg"
        onClick={handleNext}
      >
        &#9654; {/* Right Arrow Icon */}
      </button>

      {/* Popup Modal */}
      {isPopupVisible && <BookaDemoPopUp onClose={handleClosePopup} />}
    </div>
  );
}

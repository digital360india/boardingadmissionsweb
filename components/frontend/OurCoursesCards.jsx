"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import BookaDemoPopUp from "./BookaDemoPopUp";

const cardData = [
  {
    id: 1,
    imageSrc: "/icons/card1.svg",
    title: "ACE ENTRATION EXAM",
    route: "/services/Aceinterviewexam",
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
    route: "/services/Foundationcourses",

    description: "Build a Strong Academic Base to thrive in every subject for the courses.",
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
    route: "/services/Softskillmastery",
    description: "Pathway to Personal Excellence or Skills Mastery for your knowledge.",
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
    route: "/services/Boardingcompatibilitytest",

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
    route: "/services/Customizedcourses",

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

const HoverContent = ({ content, style }) => {
  

  return (
    <div className="px-10">
      <div
        className="absolute bg-[#075D70] w-[20.75rem] rounded-md mx-8 py-2 px-3 pt-5 "
        style={style}
      >
        <p className="text-white text-[12px]">{content}</p>
        <div className=" relative  top-5 flex justify-center items-center">
          <Image
            src="/icons/downarrow.svg"
            width={25}
            height={25}
            alt="arrow"
            className=""
          />
        </div>
      </div>
    </div>
  );
};

const OurCoursesCards = () => {
  const [hoveredContent, setHoveredContent] = useState({});

  const handleFeatureHover = (cardId, title, description, top) => {
    setHoveredContent({ cardId, title, description, top });
  };

  const handleFeatureLeave = () => {
    setHoveredContent({});
  };

  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleClick = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="w-full bg-primary02 pt-14 pb-20">
      <div className="px-10 md:px-16">
        <p className="text-[#FFFFFF] ">100% QUALITY COURSES </p>
        <h1 className="text-[2rem] md:text-[3rem] text-[#FFFFFF] font-medium md:w-[65%]">
          Enroll Now for Tailored Preparation and Guaranteed Success
        </h1>
      </div>

      <div className="flex flex-wrap justify-center  space-x-1 gap-x-10 gap-y-10 px-3 md:px-0 ">
        {/* Map through all cards */}
        {cardData.map((card, index) => (
          <div
            key={card.id}
            style={{ boxShadow: "0px 0px 8px 0px #FFFFFF4D" }}
            className="w-[20rem] md:w-[21rem] lg:w-[25rem] xl:w-[30rem] mt-10 bg-[#FFFFFF] rounded-[9px] "
          >
            <Image
              src={card.imageSrc}
              width={1}
              height={250}
              alt="card"
              className="w-full"
            />
            <h1 className="text-primary02 text-[1.15rem] md:text-[1.5rem] font-bold md:font-semibold text-center pt-8">
              {card.title}
            </h1>
            {hoveredContent.cardId === card.id && (
              <HoverContent
                content={hoveredContent.description}
                style={{ top: hoveredContent.top }}
              />
            )}
            <p className="text-[0.87rem] md:text-[1rem] pt-4 text-center px-8">
              {card.description}
            </p>

            {card.features.map((feature, index) => (
              <React.Fragment key={index}>
                {typeof feature === "string" ? (
                  <p className="pt-8 pb-4 text-center text-primary02 font-light cursor-pointer">
                    {feature}
                  </p>
                ) : (
                  <p
                    className="pt-8 pb-4 text-center text-primary02 font-light cursor-pointer relative"
                    onMouseEnter={(e) => {
                      const hoverHeight = 80; // height of the hover content box
                      const elementTop = e.target.offsetTop;
                      const topPosition = elementTop - hoverHeight - 3; // Adjust position by hoverHeight + 4px
                      handleFeatureHover(
                        card.id,
                        feature.title,
                        feature.description,
                        `${topPosition}px`
                      );
                    }}
                    onMouseLeave={handleFeatureLeave}
                  >
                    {feature.title}
                  </p>
                )}
                <hr className="mx-10" />
              </React.Fragment>
            ))}

            <div className="flex justify-center items-center pt-4 pb-8">
              {/* <Link href={card.route}> */}
              <div
                className={`${
                  index === 3 ? "mt-[9.3rem]" : ""
                } w-[138px] h-[40px] bg-gradient01 border-custom flex justify-center items-center`}
              >
                <button onClick={handleClick} className="text-white">
                  Enroll Now
                </button>
                {isPopupVisible && (
                  <BookaDemoPopUp onClose={handleClosePopup} />
                )}
              </div>
              {/* </Link> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCoursesCards;

"use client";
import Image from "next/image";
import React, { useState } from "react";

const cardData = [
  {
    id: 1,
    imageSrc: "/icons/card1.svg",
    title: "ACE ENTRATION EXAM",
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
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, illum.",
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
    <div
      className="absolute bg-[#075D70] w-[20.75rem] rounded-md mx-8 py-2 px-3 pt-5 "
      style={style}
    >
      <p className="text-white text-[12px]">{content}</p>
             <div className=" relative  top-5 flex justify-center items-center">
         <Image src="/icons/downarrow.svg" width={25} height={25} alt="arrow" className="" />
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

  return (
    <div className="w-full bg-primary02 pt-14 pb-20">
      <div className="font-poppins px-16">
        <p className="text-[#FFFFFF]">100% QUALITY COURSES</p>
        <h1 className="h1 text-[#FFFFFF] font-medium w-[50%]">
          Lorem ipsum, dolor sit amet consectetur.
        </h1>
      </div>

      <div className="flex flex-wrap justify-between px-16 space-x-1">
        {/* First Row */}
        {cardData.slice(0, 3).map((card) => (
          <div
            key={card.id}
            className="w-[24.5rem] mt-10 bg-[#FFFFFF] rounded-[9px] relative"
          >
            <Image src={card.imageSrc} width={392} height={250} alt="card" />
            <h1 className="text-primary02 text-[1.5rem] font-semibold text-center pt-8">
              {card.title}
            </h1>
            {hoveredContent.cardId === card.id && (
              <HoverContent
                content={hoveredContent.description}
                style={{ top: hoveredContent.top }}
              />
            )}
            <p className="font-medium text-[1rem] pt-4 text-center px-8">
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
                      const topPosition = elementTop - hoverHeight - 4; // Adjust position by hoverHeight + 4px
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
              <div className="w-[138px] h-[40px] bg-gradient01 border-custom flex justify-center items-center">
                <button className="text-white">Enroll Now</button>
              </div>
            </div>
          </div>
        ))}

        {/* Second Row - Centered */}
        <div className="flex justify-center space-x-5 w-full mt-10">
          {cardData.slice(3).map((card) => (
            <div
              key={card.id}
              className="bg-[#FFFFFF] rounded-[9px] w-[24.5rem] mt-10 mx-2 relative"
            >
              <Image src={card.imageSrc} width={392} height={250} alt="card" />
              <h1 className="text-primary02 text-[1.5rem] font-semibold text-center pt-8">
                {card.title}
              </h1>
              {hoveredContent.cardId === card.id && (
                <HoverContent
                  content={hoveredContent.description}
                  style={{ top: hoveredContent.top }}
                />
              )}
              <p className="font-medium text-[1rem] pt-4 text-center px-8">
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
                        const topPosition = elementTop - hoverHeight - 14; // Adjust position by hoverHeight + 4px
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
                <div className="w-[138px] h-[40px] bg-gradient01 border-custom flex justify-center items-center">
                  <button className="text-white">Enroll Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCoursesCards;

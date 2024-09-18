"use client";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import BookaDemoPopUp from "./BookaDemoPopUp";

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
  // {
  //   id: 5,
  //   imageSrc: "/icons/card5.svg",
  //   title: "CUSTOMIZED COURSES",
  //   description:
  //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, illum.",
  //   features: [
  //     {
  //       title: "One-on-One Classes",
  //       description:
  //         "Experience personalized learning with Boarding Admissions' one-on-one classes, empowering students for boarding school entrance exams and beyond.",
  //     },
  //     {
  //       title: "Learning Material",
  //       description:
  //         "At Boarding Admissions, our interactive learning resources ensure thorough preparation and a solid educational foundation for academic excellence.",
  //     },
  //     {
  //       title: "Flexible Schedule",
  //       description:
  //         "Our customized courses offer flexible scheduling for stress-free learning and optimal preparation.",
  //     },
  //     {
  //       title: "Regular Feedback",
  //       description:
  //         "Join Boarding Admissions for personalized, interactive feedback, guiding your child to academic excellence and keeping you engaged in their progress.",
  //     },
  //   ],
  // },  
  // {
  //   id: 5,
  //   imageSrc: "/icons/card5.svg",
  //   title: "CUSTOMIZED COURSES",
  //   description:
  //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, illum.",
  //   features: [
  //     {
  //       title: "One-on-One Classes",
  //       description:
  //         "Experience personalized learning with Boarding Admissions' one-on-one classes, empowering students for boarding school entrance exams and beyond.",
  //     },
  //     {
  //       title: "Learning Material",
  //       description:
  //         "At Boarding Admissions, our interactive learning resources ensure thorough preparation and a solid educational foundation for academic excellence.",
  //     },
  //     {
  //       title: "Flexible Schedule",
  //       description:
  //         "Our customized courses offer flexible scheduling for stress-free learning and optimal preparation.",
  //     },
  //     {
  //       title: "Regular Feedback",
  //       description:
  //         "Join Boarding Admissions for personalized, interactive feedback, guiding your child to academic excellence and keeping you engaged in their progress.",
  //     },
  //   ],
  // },
];

export default function CourseCarousel() {
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
    <div className="w-full bg-primary02 lg:pt-14 pt-8 lg:pb-28 pb-16 h-full ">
    <Carousel responsive={responsive} itemClass="px-4">
      {cardData.map((card, index) => (
        <div
          key={card.id}
          style={{ boxShadow: "0px 0px 8px 0px #FFFFFF4D" }}
          // style={{ boxShadow: "0 0 6px 0 rgba(0, 0, 0, 0.32)" }}
          className="w-full h-full bg-[#FFFFFF] rounded-[9px] relative flex flex-col items-center "
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
            
          </div>
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
          <div className="flex justify-center items-center pt-4 pb-8 mt-auto">
            {/* <Link href={card.route}>
            <div className="w-[138px] h-[40px] bg-gradient01 rounded-md border-custom flex justify-center items-center">
              <button onClick={handleClick} className="text-white">Enroll Now</button>
              
            </div>
            </Link> */}
          </div>
        </div>
      ))}
    </Carousel>
  </div>
  );
}
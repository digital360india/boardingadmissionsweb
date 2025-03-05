"use client";
import Image from "next/image";
import React, { useState } from "react";
import BookaDemoPopUp from "./BookaDemoPopUp";
import Link from "next/link";

const contentData = [
  {
    id: "Communication skills",
    title: "Communication Skills",
    text: "Communication is key to success. Our Communication Skills program at Boarding Admissions helps students articulate their thoughts clearly through interactive role-plays, group discussions, and one-on-one coaching. We focus on both verbal and non-verbal skills, teaching active listening and clear expression. Mastering these skills boosts academic performance, enhances personal relationships, and prepares students for future leadership roles.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/boardingadmission%2FCommunication%20Skills_.jpg?alt=media&token=c696f153-05ae-47c4-b2e0-be027282b9fa",
    bgColor: "",
  },
  {
    id: "Emotional intelligence",
    title: "Emotional Intelligence",
    text: "Emotional Intelligence (EI) is crucial for academic and personal growth. Our Emotional Intelligence program at Boarding Admissions helps students build skills in self-awareness, self-regulation, empathy, and social interactions through mindfulness exercises, reflective journaling, and group discussions. Strong EI enhances academic performance, mental well-being, and social relationships, preparing students to manage stress and thrive in all areas of life.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/boardingadmission%2FEmotional-Intelligence.jpg?alt=media&token=a371e4de-6245-491b-bee0-144620b9e9b9",
    bgColor: "bg-gradient-to-br from-[#075D70] to-[#0DB2D6]",
  },
  {
    id: "Problem-solving",
    title: "Problem Solving",
    text: "Problem-solving is essential for academic and future success. Our Problem-Solving program at Boarding Admissions teaches students critical thinking and analytical skills through interactive methods like case studies, puzzles, and real-life scenarios. Students learn to break down challenges, find creative solutions, and approach problems with confidence. Strong problem-solving skills enhance exam performance, group projects, and future careers.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/boardingadmission%2FProblem-Solving.jpg?alt=media&token=31ba7f73-02d8-4814-b197-de9161688007",
    bgColor: "",
  },
  {
    id: "Leadership",
    title: "Leadership",
    text: "Leadership skills are vital for personal and professional success. Our Leadership program at Boarding Admissions guides students in decision-making, team management, and inspiring others through expert-led workshops, group projects, and individual coaching. Students develop the confidence and integrity needed to lead effectively in school, extracurricular activities, and future careers.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/boardingadmission%2Fleadership.jpg?alt=media&token=d8806e67-6edf-4e97-8d7d-d6b3bb51e566",
    bgColor: "bg-gradient-to-br from-[#075D70] to-[#0DB2D6]",
  },
];

const SoftSkillMasteryPage = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});

  const handleClick = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  const toggleReadMore = (id) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <>
      {contentData.map((section, index) => (
        <div key={index} className="index">
          <div className={`py-8 ${section.bgColor}`} id={section.id}>
            <div
              className={`mx-4 lg:mx-20 lg:flex lg:justify-between lg:items-center ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              } ${index % 2 === 0 ? "text-primary02" : "text-white"}`}
            >
              <div className="lg:w-1/2">
                <h1
                  className={`lg:text-[48px] text-[32px]  ${
                    index % 2 === 0 ? "text-primary02" : "text-white"
                  }`}
                >
                  {section.title}
                </h1>
                <p
                  className={`text-[0.875rem] lg:text-[20px] mt-4 hidden lg:block ${
                    index % 2 === 0 ? "text-black" : "text-white"
                  }`}
                >
                  {section.text}
                </p>
                <div className="lg:hidden">
                  <p
                    className={`text-[0.875rem] lg:text-[20px] mt-4 ${
                      index % 2 === 0 ? "text-black" : "text-white"
                    }`}
                  >
                    {expandedSections[section.id]
                      ? section.text
                      : `${section.text.substring(0, 100)}...`}
                  </p>
                  <button
                    className="text-blue-400 hover:underline mt-2"
                    onClick={() => toggleReadMore(section.id)}
                  >
                    {expandedSections[section.id] ? "Read Less" : "Read More"}
                  </button>
                </div>
              </div>
              <div className="hidden lg:flex lg:space-x-12 lg:mt-4">
                <Image
                  src={section.image}
                  width={1000}
                  height={1000}
                  alt={section.title}
                  className="w-full rounded shadow-lg h-[380px]"
                />
              </div>
              <div className="lg:hidden mt-4">
                <Image
                  src={section.image}
                  width={1000}
                  height={1000}
                  alt={section.title}
                  className="w-full rounded shadow-lg md:w-[740px] h-full"
                />
              </div>
            </div>
          </div>
          <hr className="mt-5 lg:mt-12" />
        </div>
      ))}
      {isPopupVisible && <BookaDemoPopUp onClose={handleClosePopup} />}
      <div className="hidden lg:block border border-primary02 rounded-3xl mt-[1.25rem] mx-[2rem] mb-14">
        <div className="w-full h-[13.125rem] gap-[2rem] flex justify-center items-center ">
          <div className="text-[2.5rem] text-primary02">
            Ready for top boarding schools? <br /> Start your journey now!
          </div>

          <div>
            <Link href="/enrollnow/foundationcourses">
              <div className="cursor-pointer w-[18.75rem] h-[3.5rem] bg-gradient01  border-custom rounded-md flex items-center justify-center">
                <button className="text-white">Enroll Now</button>
              </div>
            </Link>

            <div className="flex justify-center items-center py-2">
              <div className="bg-[#00000015] w-[120px] h-[1px]"></div>
              <div className="text-[#00000015]">
                &nbsp;&nbsp;&nbsp;OR&nbsp;&nbsp;&nbsp;
              </div>
              <div className="bg-[#00000015] w-[120px] h-[1px]"></div>
            </div>
            <u className="text-primary02 text-center cursor-pointer">
              <h1 className="" onClick={handleClick}>
                Contact Us
              </h1>
            </u>
          </div>
        </div>
      </div>

      <div className="lg:hidden border rounded-md px-4 py-6">
        <div className="w-full h-auto border border-primary02 rounded-md py-[1rem] px-[0.5rem]">
          <h1 className="text-primary02 text-[1.5rem]">
            Want to prepare for top Boarding School ?
          </h1>
          <div className="flex justify-between px-2 pt-4">
            <Link href="/enrollnow/foundationcourses">
              <div className="cursor-pointer w-[7.5rem] h-[1.9rem]  bg-gradient01  border-custom rounded-md flex items-center justify-center text-[0.875rem] text-white ">
                Enroll Now
              </div>
            </Link>
            <div className="text-[#00000080]  text-[0.875rem] pt-[5px]">OR</div>
            <u
              className="text-primary02  text-[0.875rem] pt-[5px] cursor-pointer"
              onClick={handleClick}
            >
              Contact Us
            </u>
          </div>
        </div>
      </div>
    </>
  );
};

export default SoftSkillMasteryPage;

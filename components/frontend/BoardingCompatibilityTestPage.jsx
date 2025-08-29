"use client";
import Image from "next/image";
import React, { useState } from "react";
import BookaDemoPopUp from "./BookaDemoPopUp";
import Link from "next/link";

const contentData = [
  {
    id: "Compatibility Test",
    title: "Compatibility Test",
    text: "Our Compatibility Test is a thoughtfully designed 25-question assessment that evaluates emotional resilience, adaptability, social skills, and academic preparedness. Interactive and engaging, the test offers deep insights into your child&apos;s readiness for boarding school, helping to identify areas needing support for a smooth transition. Ensure your child is set for success with this essential readiness evaluation.",
    image: "/vectors/boarding-test.jpg",
    bgColor: "",
  },
  {
    id: "Psychiatric Evaluation",
    title: "Psychiatric Evaluation",
    text: "At Boarding Admissions, our psychiatric evaluation provides a thorough assessment of your child's mental and emotional well-being. Experienced professionals offer supportive counseling sessions to explore thoughts and feelings, identify any issues, and provide strategies for growth. This evaluation ensures your child is emotionally resilient and mentally prepared for the challenges of boarding school, complementing their academic readiness.",
    image:
      "/vectors/Psychiatric Evaluation.jpg",
    bgColor: "bg-gradient-to-br from-[#075D70] to-[#0DB2D6]",
  },
];

const BoardingCompatibilityTestPage = () => {
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
        <div key={section.id} className="index">
          <div className={`py-8 ${section.bgColor}`} id={section.id}>
            <div
              className={`mx-4 lg:mx-20 lg:flex lg:justify-between lg:items-center ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              } ${index % 2 === 0 ? "text-primary02" : "text-white"}`}
            >
              <div className="lg:w-1/2">
                <h1
                  className={`lg:text-[48px] text-[32px] ${
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
        <div className="w-full h-[13.125rem] gap-[2rem] flex justify-center items-center">
          <div className="text-[2.5rem] text-primary02">
            Ready for top boarding schools? <br /> Start your journey now!
          </div>
          <div>
              <div className="cursor-pointer w-[18.75rem] h-[3.5rem] bg-gradient01 border-custom rounded-md flex items-center justify-center">
                <button onClick={handleClick} className="text-white">Enroll Now</button>
              </div>
            <div className="flex justify-center items-center py-2">
              <div className="bg-[#00000015] w-[120px] h-[1px]"></div>
              <div className="text-[#00000015]">
                &nbsp;&nbsp;&nbsp;OR&nbsp;&nbsp;&nbsp;
              </div>
              <div className="bg-[#00000015] w-[120px] h-[1px]"></div>
            </div>
            <u className="text-primary02 text-center cursor-pointer">
              <h1 onClick={handleClick}>Contact Us</h1>
            </u>
          </div>
        </div>
      </div>
      <div className="lg:hidden border rounded-md px-4 py-6">
        <div className="w-full h-auto border border-primary02 rounded-md py-[1rem] px-[0.5rem]">
          <h1 className="text-primary02 text-[1.5rem]">
            Want to prepare for top Boarding School?
          </h1>
          <div className="flex justify-between px-2 pt-4">
            <div onClick={handleClick} className="cursor-pointer w-[7.5rem] h-[1.9rem] bg-gradient01 border-custom rounded-md flex items-center justify-center text-[0.875rem] text-white">
              Enroll Now
            </div>
            <div className="text-[#00000080] text-[0.875rem] pt-[5px]">OR</div>
            <u
              className="text-primary02 text-[0.875rem] pt-[5px] cursor-pointer"
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

export default BoardingCompatibilityTestPage;

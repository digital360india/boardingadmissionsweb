"use client";
import Image from "next/image";
import React, { useState } from "react";
import BookaDemoPopUp from "./BookaDemoPopUp";
import Link from "next/link";

const SoftSkillMasteryPage = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleClick = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };
  return (
    <>
      <div>
        <div className="">
          <div className="mx-4 mt-2 lg:mx-20 lg:mt-14 lg:flex lg:justify-between lg:items-center">
            <div id="Communication skills" className="lg:w-1/2">
              <h1 className="lg:text-[48px] text-[32px]  text-primary02">
                Communication Skills
              </h1>
              <p className="text-[0.875rem] md:text-[20px] text-[#010101] mt-4">
                Communication is key to success. Our Communication Skills
                program at Boarding Admissions helps students articulate their
                thoughts clearly through interactive role-plays, group
                discussions, and one-on-one coaching. We focus on both verbal
                and non-verbal skills, teaching active listening and clear
                expression. Mastering these skills boosts academic performance,
                enhances personal relationships, and prepares students for
                future leadership roles.
              </p>
            </div>
            <div className=" hidden lg:flex md:space-x-12  md:mt-4">
              <div>
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/boardingadmission%2Fcommunicatio-skills.jpg?alt=media&token=c9426023-ee40-4788-8fa5-0d8c3ec4ec12"
                  width={1000}
                  height={1000}
                  alt="course1"
                  className="w-[638px] h-[280px]"
                />
              </div>
              {/* <div>
                <Image
                  src="/icons/online2.svg"
                  width={1000}
                  height={1000}
                  alt="course1"
                  className="w-[368px] h-[280px]"
                />
              </div> */}
              {/* <div className=" space-y-3 md:hidden xl:block">
                <div>
                  <Image
                    src="/icons/online3.svg"
                    width={1000}
                    height={1000}
                    alt="course1"
                    className="w-[187px] h-[131px]"
                  />
                </div>
                <div>
                  <Image
                    src="/icons/online4.svg"
                    width={1000}
                    height={1000}
                    alt="course1"
                    className="w-[187px] h-[131px]"
                  />
                </div>
              </div> */}
            </div>

            <div className="lg:hidden mt-4">
              <Image
                src="/icons/online1.svg"
                width={1000}
                height={280}
                alt="course1"
              />
            </div>
          </div>

          <hr className="mt-5 md:mt-12" />
          <div className="bg-gradient-to-br from-[#075D70] to-[#0DB2D6]">
            <div className="px-4 mt-4 lg:mt-8 lg:px-20 lg:flex lg:justify-between lg:space-x-14  lg:pt-12 lg:pb-12 w-[100%] pb-10">
              <div className="hidden   lg:flex lg:justify-between  lg:space-x-6 w-[50%]">
                {/* <div>
                <Image
                  src="/icons/PI1.svg"
                  width={1000}
                  height={1000}
                  alt="course1"
                  className="w-[632px] h-[280px]"
                />
              </div> */}
                <div>
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/boardingadmission%2FEmotional-Intelligence.jpg?alt=media&token=a371e4de-6245-491b-bee0-144620b9e9b9"
                    width={1000}
                    height={1000}
                    alt="course1"
                    className="w-[632px] h-[300px]"
                  />
                </div>
              </div>
              <div id="Emotional intelligence" className="lg:w-[50%]">
                <h1 className="lg:text-[44px] text-[28px] text-white">
                  Emotional Intelligence
                </h1>
                <p className="text-[0.875rem] md:text-[20px] text-white mt-4">
                  Emotional Intelligence (EI) is crucial for academic and
                  personal growth. Our Emotional Intelligence program at
                  Boarding Admissions helps students build skills in
                  self-awareness, self-regulation, empathy, and social
                  interactions through mindfulness exercises, reflective
                  journaling, and group discussions. Strong EI enhances academic
                  performance, mental well-being, and social relationships,
                  preparing students to manage stress and thrive in all areas of
                  life.
                </p>
              </div>
              <div className="lg:hidden mt-4">
                <Image
                  src="/icons/PI1.svg"
                  width={1000}
                  height={280}
                  alt="course1"
                  className="w-[280px] md:w-full"
                />
              </div>
            </div>
          </div>
          <hr className="mt-5 md:mt-12" />

          <div className="mx-4 mt-4 lg:mt-8 lg:mx-20 lg:flex lg:justify-between lg:items-center">
            <div className="lg:w-1/2" id="Problem-solving">
              <h1 className="lg:text-[48px] text-[32px] text-primary02">
                Problem Solving
              </h1>
              <p className="text-[0.875rem] md:text-[20px] text-[#010101] mt-4">
                Problem-solving is essential for academic and future success.
                Our Problem-Solving program at Boarding Admissions teaches
                students critical thinking and analytical skills through
                interactive methods like case studies, puzzles, and real-life
                scenarios. Students learn to break down challenges, find
                creative solutions, and approach problems with confidence.
                Strong problem-solving skills enhance exam performance, group
                projects, and future careers.
              </p>
            </div>
            <div className="hidden    lg:flex space-x-12 mt-4">
              {/* <div>
                <Image
                  src="/icons/MT1.svg"
                  width={1000}
                  height={1000}
                  alt="Mock Test"
                  className="w-[632px] h-[280px]"
                />
              </div> */}
              <div>
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/boardingadmission%2FProblem-Solving.jpg?alt=media&token=31ba7f73-02d8-4814-b197-de9161688007"
                  width={1000}
                  height={1000}
                  alt="Mock Test"
                  className="w-[632px] h-[280px]"
                />
              </div>
              {/* <div>
                <Image
                  src="/icons/MT3.svg"
                  width={1000}
                  height={1000}
                  alt="Mock Test"
                  className="w-[280px] h-[280px]"
                />
              </div> */}
            </div>
            <div className="lg:hidden mt-4">
              <Image
                src="/icons/MT1.svg"
                width={1000}
                height={280}
                alt="Mock Test"
              />
            </div>
          </div>
          <hr className="mt-5 md:mt-12" />
          <div className="bg-gradient-to-br from-[#075D70] to-[#0DB2D6] mt-8">
            <div className="mx-4 mt-4 lg:mt-8 lg:mx-20 lg:flex lg:justify-between lg:items-center lg:space-x-12 lg:pt-12 pb-12">
              <div className="hidden  lg:flex lg:w-1/2 lg:justify-start">
                {/* <div>
                <Image
                  src="/icons/Doubt1.svg"
                  width={1000}
                  height={1000}
                  alt="Doubt1"
                  className="w-[632px] h-[280px]"
                />
              </div> */}
                <div>
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/boardingadmission%2FLeadership.jpg?alt=media&token=9ff1e39a-cdfb-48fe-aa45-202d94bfdc93"
                    width={1000}
                    height={1000}
                    alt="Doubt2"
                    className="w-[632px] h-[300px]"
                  />
                </div>

                {/* <div>
                <Image
                  src="/icons/Doubt3.svg"
                  width={1000}
                  height={1000}
                  alt="Doubt3"
                  className="w-[187px] h-[280px]"
                />
              </div> */}
              </div>

              <div className="lg:w-1/2" id="Leadership">
                <h1 className="lg:text-[44px] text-[28px] text-white">
                  Leadership
                </h1>
                <p className="text-[0.875rem] md:text-[20px] text-white mt-4">
                  Leadership skills are vital for personal and professional
                  success. Our Leadership program at Boarding Admissions guides
                  students in decision-making, team management, and inspiring
                  others through expert-led workshops, group projects, and
                  individual coaching. Students develop the confidence and
                  integrity needed to lead effectively in school,
                  extracurricular activities, and future careers.
                </p>
              </div>
              <div className=" lg:hidden mt-4">
                <Image
                  src="/icons/Doubt1.svg"
                  width={1000}
                  height={280}
                  alt="Doubt1"
                />
              </div>
            </div>
          </div>
          <hr className="mt-5 md:mt-12" />

          {isPopupVisible && <BookaDemoPopUp onClose={handleClosePopup} />}
          {/* laptop */}
          <div className="hidden lg:block border border-primary02 rounded-3xl mt-[1.25rem] mx-[2rem] mb-14">
            <div className="w-full h-[13.125rem] gap-[2rem] flex justify-center items-center ">
              <div className="text-[2.5rem] text-primary02">
                Ready for top boarding schools? <br /> Start your journey now!
              </div>

              <div>
                <Link href="/enrollnow/softskillmastery">
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
                <u
                  className="text-primary02 text-center cursor-pointer"
                  onClick={handleClick}
                >
                  <h1 className="">Contact Us</h1>
                </u>
              </div>
            </div>
          </div>

          {/* mobile */}
          <div className="lg:hidden border rounded-md px-4 py-6">
            <div className="w-full h-auto border border-primary02 rounded-md py-[1rem] px-[0.5rem]">
              <h1 className="text-primary02 text-[1.5rem]">
                Want to prepare for top Boarding School ?
              </h1>
              <div className="flex justify-between px-2 pt-4">
                <Link href="/enrollnow/softskillmastery">
                  <div className="cursor-pointer w-[7.5rem] h-[1.9rem]  bg-gradient01  border-custom rounded-md flex items-center justify-center text-[0.875rem] text-white ">
                    Enroll Now
                  </div>
                </Link>
                <div className="text-[#00000080]  text-[0.875rem] pt-[5px]">
                  OR
                </div>
                <u
                  className="text-primary02  text-[0.875rem] pt-[5px] cursor-pointer"
                  onClick={handleClick}
                >
                  Contact Us
                </u>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SoftSkillMasteryPage;

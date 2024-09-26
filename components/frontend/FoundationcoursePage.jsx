"use client"
import Image from "next/image";
import React, { useState } from "react";
import BookaDemoPopUp from "./BookaDemoPopUp";
import Link from "next/link";

const FoundationcoursePage = () => {
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
          <div className="mx-4 mt-2 md:mx-20 md:mt-14">
            <div id="4th-6thGrade">
              <h1 className="text-[1.5rem] font-bold md:text-[3.5rem] text-primary02">
                4TH - 6TH GRADE
              </h1>
              <p className="text-[0.875rem] md:text-[18px] text-[#010101] mt-4">
                Our Foundation Course at Boarding Admissions covers essential
                skills in grammar, math, and science for grades 4 through 6.
                Through interactive lessons, hands-on activities, and
                personalized support, our expert teachers help students develop
                confidence and a solid academic base. Prepare your child for
                future academic success with engaging, tailored instruction.
                Build a strong foundation for top school admissions and
                long-term achievement!
              </p>
            </div>
            <div className=" hidden md:flex md:space-x-12  md:mt-4">
              <div>
                <Image
                  src="/icons/online1.svg"
                  width={1000}
                  height={1000}
                  alt="course1"
                  className="w-[638px] h-[280px]"
                />
              </div>
              <div>
                <Image
                  src="/icons/online2.svg"
                  width={1000}
                  height={1000}
                  alt="course1"
                  className="w-[368px] h-[280px]"
                />
              </div>
              <div className=" space-y-3 md:hidden xl:block">
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
              </div>
            </div>

            <div className="md:hidden lg:hidden mt-4">
              <Image
                src="/icons/online1.svg"
                width={1000}
                height={280}
                alt="course1"
              />
            </div>
          </div>

          <hr className="mt-5 md:mt-12" />
          <div className="mx-4 mt-4 md:mt-8 md:mx-20">
            <div id="6th-8thGrade">
              <h1 className="text-[1.5rem] font-bold md:text-[3.5rem] text-primary02">
                6TH - 8TH GRADE
              </h1>
              <p className="text-[0.875rem] md:text-[18px] text-[#010101] mt-4">
                At Boarding Admissions, our Foundation Course for grades 6
                through 8 prepares students for future academic success with a
                strong focus on English, math, and science. We emphasize grammar
                and calculations through interactive lessons, hands-on
                activities, and engaging quizzes. Expert teachers offer
                personalized support to build confidence and mastery of
                fundamental skills. Ensure your child is ready for advanced
                learning and smooth transitions to high school with our tailored
                program.
              </p>
            </div>
            <div className="hidden   md:flex md:space-x-12 md:mt-4">
              <div>
                <Image
                  src="/icons/PI1.svg"
                  width={1000}
                  height={1000}
                  alt="course1"
                  className="w-[632px] h-[280px]"
                />
              </div>
              <div>
                <Image
                  src="/icons/PI2.svg"
                  width={1000}
                  height={1000}
                  alt="course1"
                  className="w-[579px] h-[280px]"
                />
              </div>
            </div>
            <div className="md:hidden lg:hidden mt-4">
              <Image
                src="/icons/PI1.svg"
                width={1000}
                height={280}
                alt="course1"
              />
            </div>
          </div>
          <hr className="mt-5 md:mt-12" />

          <div className="mx-4 mt-4 md:mt-8 md:mx-20">
            <div className="" id="8thGrade">
              <h1 className="text-[1.5rem] font-bold md:text-[3.5rem] text-primary02">
                8TH GRADE
              </h1>
              <p className="text-[0.875rem] md:text-[18px] text-[#010101] mt-4">
                8th grade is pivotal for high school preparation. At Boarding
                Admissions, we ensure students are ready for advanced topics
                with a focus on English, math, and science, emphasizing grammar
                and calculations. Our interactive curriculum, featuring hands-on
                activities and quizzes, keeps learning enjoyable. Expert
                teachers provide personalized support to meet individual needs,
                boosting confidence and academic skills, and ensuring students
                transition smoothly to high school.
              </p>
            </div>
            <div className="hidden    md:flex space-x-12 mt-4">
              <div>
                <Image
                  src="/icons/MT1.svg"
                  width={1000}
                  height={1000}
                  alt="Mock Test"
                  className="w-[632px] h-[280px]"
                />
              </div>
              <div>
                <Image
                  src="/icons/MT2.svg"
                  width={1000}
                  height={1000}
                  alt="Mock Test"
                  className="w-[262px] h-[280px]"
                />
              </div>
              <div>
                <Image
                  src="/icons/MT3.svg"
                  width={1000}
                  height={1000}
                  alt="Mock Test"
                  className="w-[280px] h-[280px]"
                />
              </div>
            </div>
            <div className="md:hidden lg:hidden mt-4">
              <Image
                src="/icons/MT1.svg"
                width={1000}
                height={280}
                alt="Mock Test"
              />
            </div>
          </div>
          <hr className="mt-5 md:mt-12" />
          <div className="mx-4 mt-4 md:mt-8 md:mx-20">
            <div className="" id="9thGrade">
              <h1 className="text-[1.5rem] font-bold md:text-[3.5rem] text-primary02">
                9TH GRADE
              </h1>
              <p className="text-[0.875rem] md:text-[18px] text-[#010101] mt-4">
                Starting high school is a major milestone. At Boarding
                Admissions, our 9th Grade Foundation Course ensures students are
                ready for higher education challenges with a solid base in
                English, math, and science. Emphasizing grammar and
                calculations, our engaging curriculum includes hands-on
                activities and quizzes. Expert teachers provide personalized
                support, boosting confidence and academic skills, and preparing
                students for advanced topics in high school and beyond.
              </p>
            </div>
            <div className="hidden    md:flex md:space-x-12 md:mt-4">
              <div>
                <Image
                  src="/icons/Doubt1.svg"
                  width={1000}
                  height={1000}
                  alt="Doubt1"
                  className="w-[632px] h-[280px]"
                />
              </div>
              <div>
                <Image
                  src="/icons/Doubt2.svg"
                  width={1000}
                  height={1000}
                  alt="Doubt2"
                  className="w-[368px] h-[280px]"
                />
              </div>

              <div>
                <Image
                  src="/icons/Doubt3.svg"
                  width={1000}
                  height={1000}
                  alt="Doubt3"
                  className="w-[187px] h-[280px]"
                />
              </div>
            </div>
            <div className="md:hidden lg:hidden mt-4">
              <Image
                src="/icons/Doubt1.svg"
                width={1000}
                height={280}
                alt="Doubt1"
              />
            </div>
          </div>
          <hr className="mt-5 md:mt-12" />





          {isPopupVisible && (
                  <BookaDemoPopUp onClose={handleClosePopup} />
                )}

          {/* laptop */}
          <div className="hidden lg:block border border-primary02 rounded-3xl mt-[1.25rem] mx-[2rem] mb-14">
            <div className="w-full h-[13.125rem] gap-[2rem] flex justify-center items-center ">
              <div className="text-[2.5rem] text-primary02">
                Ready for top boarding schools? <br /> Start your journey now!
              </div>

              <div>
              <Link href="/enrollnow/foundationcourses">
                <div className="cursor-pointer w-[18.75rem] h-[3.5rem] bg-gradient01  border-custom rounded-md flex items-center justify-center">
                  <button className="text-white">Enroll Now</button>
                </div></Link>

                <div className="flex justify-center items-center py-2">
                  <div className="bg-[#00000015] w-[120px] h-[1px]"></div>
                  <div className="text-[#00000015]">
                    &nbsp;&nbsp;&nbsp;OR&nbsp;&nbsp;&nbsp;
                  </div>
                  <div className="bg-[#00000015] w-[120px] h-[1px]"></div>
                </div>
                <u className="text-primary02 text-center cursor-pointer">
                  <h1 className="" onClick={handleClick}>Contact Us</h1>
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
              <Link href="/enrollnow/foundationcourses">
                <div className="cursor-pointer w-[7.5rem] h-[1.9rem]  bg-gradient01  border-custom rounded-md flex items-center justify-center text-[0.875rem] text-white ">
                  Enroll Now
                </div>
                </Link>
                <div className="text-[#00000080]  text-[0.875rem] pt-[5px]">
                  OR
                </div>
                <u className="text-primary02  text-[0.875rem] pt-[5px] cursor-pointer" onClick={handleClick}>
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

export default FoundationcoursePage;

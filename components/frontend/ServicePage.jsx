"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import BookaDemoPopUp from "./BookaDemoPopUp";

const ServicePage = () => {
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
            <div id="onlineclass">
              <h1 className="text-[1.5rem] font-bold md:text-[3.5rem] text-primary02">
                ONLINE CLASS
              </h1>
              <p className="text-[0.875rem] md:text-[18px] text-[#010101] mt-4">
                Experience engaging and personalized online learning with
                Boarding Admissions. Our state-of-the-art online classes offer
                flexibility and convenience, allowing students to learn from
                home. Our expert teachers provide tailored instruction, ensuring
                comprehensive preparation for boarding school entrance exams.
                With interactive tools and a comprehensive curriculum, students
                stay engaged and confident.
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
            <div className=" " id="personalinterview">
              <h1 className="text-[1.5rem] font-bold md:text-[3.5rem] text-primary02">
                PERSONAL INTERVIEW PREPARATION
              </h1>
              <p className="text-[0.875rem] md:text-[18px] text-[#010101] mt-4">
                Master the personal interview for boarding school admissions
                with Boarding Admissions. Our program helps students showcase
                their personality, interests, and potential confidently. We
                offer expert guidance on interview techniques, interactive mock
                interviews, and personalized feedback to improve performance.
                Our goal is to build students confidence and prepare them
                thoroughly for their interviews.
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
            <div className="" id="mocktest">
              <h1 className="text-[1.5rem] font-bold md:text-[3.5rem] text-primary02">
                MOCK TEST
              </h1>
              <p className="text-[0.875rem] md:text-[18px] text-[#010101] mt-4">
                Mock tests are vital for boarding school entrance exam prep. At
                Boarding Admissions, our comprehensive tests simulate the actual
                exam environment, helping students reduce anxiety and build
                comfort. Detailed feedback highlights strengths and weaknesses,
                guiding targeted study efforts. Regular practice sessions
                develop effective exam strategies and reinforce learning. Our
                mock tests cover all subjects, ensuring thorough preparation and
                confidence for every aspect of the exam.
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
            <div className="" id="doubtclear">
              <h1 className="text-[1.5rem] font-bold md:text-[3.5rem] text-primary02">
                DOUBT CLEARING SESSION
              </h1>
              <p className="text-[0.875rem] md:text-[18px] text-[#010101] mt-4">
                Our doubt-clearing sessions are designed to address students
                specific challenges in preparation for boarding school entrance
                exams. These interactive sessions offer personalized guidance,
                helping students overcome difficulties and solidify their
                understanding. With expert instructors available to answer
                questions and provide clear explanations, students can resolve
                their doubts efficiently. Regular doubt-clearing sessions ensure
                that no question goes unanswered, boosting students confidence
                and readiness for the exams.
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
                Ready for top boarding schools? <br /> Start your journey now
              </div>

              <div>
              <Link href="/enrollnow/aceentranceexams">
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
                  <h1 className=""  onClick={handleClick}>Contact Us</h1>
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
              <Link href="/enrollnow/aceentranceexams">
                <div className="cursor-pointer w-[7.5rem] h-[1.9rem]  bg-gradient01  border-custom rounded-md flex items-center justify-center text-[0.875rem] text-white ">
                  Enroll Now
                </div></Link>
                <div className="text-[#00000080]  text-[0.875rem] pt-[5px]">
                  OR
                </div>
                <u className="text-primary02 cursor-pointer  text-[0.875rem] pt-[5px]" onClick={handleClick}>
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

export default ServicePage;

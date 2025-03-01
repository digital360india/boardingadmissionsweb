"use client";
import Image from "next/image";
import React, { useState } from "react";
import BookaDemoPopUp from "./BookaDemoPopUp";

const BoardingCompatibilityTestPage = () => {
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
            <div id="Compatibility Test" className="lg:w-1/2">
              <h1 className="lg:text-[48px] text-[32px] text-primary02">
                Compatibility Test
              </h1>
              <p className="text-[0.875rem] md:text-[20px] text-[#010101] mt-4">
                Our Compatibility Test is a thoughtfully designed 25-question
                assessment that evaluates emotional resilience, adaptability,
                social skills, and academic preparedness. Interactive and
                engaging, the test offers deep insights into your child&apos;s
                readiness for boarding school, helping to identify areas needing
                support for a smooth transition. Ensure your child is set for
                success with this essential readinesmd:hidden s evaluation.
              </p>
            </div>
            <div className=" hidden lg:flex md:space-x-12  md:mt-4">
              <div>
                <Image
                  src="/icons/online1.svg"
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
                height={1000}
                alt="course1"
              />
            </div>
          </div>

          <hr className="mt-5 md:mt-12" />
          <div className="bg-gradient-to-br from-[#075D70] to-[#0DB2D6]">
            <div className="px-4 mt-4 lg:mt-8 lg:px-20 lg:flex lg:justify-between lg:space-x-14  lg:pt-12 lg:pb-12 w-[100%] pb-10">
              <div className="hidden   lg:flex lg:justify-between  lg:space-x-6 w-[50%]">
                <div>
                  <Image
                    src="/icons/PI1.svg"
                    width={1000}
                    height={1000}
                    alt="course1"
                    className="w-[632px] h-[280px]"
                  />
                </div>
                {/* <div>
                <Image
                  src="/icons/PI2.svg"
                  width={1000}
                  height={1000}
                  alt="course1"
                  className="w-[579px] h-[280px]"
                />
              </div> */}
              </div>
              <div id="Psychiatric Evaluation" className="lg:w-[50%]">
                <h1 className="lg:text-[44px] text-[28px] text-white">
                  Psychiatric Evaluation
                </h1>
                <p className="text-[0.875rem] md:text-[20px] text-white mt-4">
                  At Boarding Admissions, our psychiatric evaluation provides a
                  thorough assessment of your child&apos;s mental and emotional
                  well-being. Experienced professionals offer supportive
                  counseling sessions to explore thoughts and feelings, identify
                  any issues, and provide strategies for growth. This evaluation
                  ensures your child is emotionally resilient and mentally
                  prepared for the challenges of boarding school, complementing
                  their academic readiness.
                </p>
              </div>
              <div className="lg:hidden mt-4">
                <Image
                  src="/icons/PI1.svg"
                  width={1000}
                  height={1000}
                  alt="course1"
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
                <div className="cursor-pointer w-[18.75rem] h-[3.5rem] bg-gradient01  border-custom rounded-md flex items-center justify-center">
                  <button className="text-white">Enroll Now</button>
                </div>

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

          {/* mobile */}
          <div className="lg:hidden border rounded-md px-4 py-6">
            <div className="w-full h-auto border border-primary02 rounded-md py-[1rem] px-[0.5rem]">
              <h1 className="text-primary02 text-[1.5rem]">
                Want to prepare for top Boarding School ?
              </h1>
              <div className="flex justify-between px-2 pt-4">
                <div className="cursor-pointer w-[7.5rem] h-[1.9rem]  bg-gradient01  border-custom rounded-md flex items-center justify-center text-[0.875rem] text-white ">
                  Enroll Now
                </div>
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

export default BoardingCompatibilityTestPage;

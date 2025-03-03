"use client";
import Image from "next/image";
import React, { useState } from "react";
import BookaDemoPopUp from "./BookaDemoPopUp";

const CustomizedCoursesPage = () => {
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
            <div id="One-on-one classes" className="lg:w-1/2">
              <h1 className="lg:text-[48px] text-[32px]  text-primary02">
                One-On-One Classes
              </h1>
              <p className="text-[0.875rem] md:text-[20px] text-[#010101] mt-4">
                Our one-on-one classes offer tailored instruction to meet each
                student&apos;s unique needs. With individual attention from
                experienced teachers, students receive customized learning plans
                and interactive lessons designed to build confidence and address
                specific challenges. This approach ensures effective preparation
                for entrance exams and supports optimal learning at a pace that
                suits each student&apos;s needs.
              </p>
            </div>
            <div className=" hidden lg:flex md:space-x-12  md:mt-4">
              <div>
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/boardingadmission%2Fasian-women-are-doing-job-interviews-2025-01-08-23-32-21-utc.jpg?alt=media&token=61464198-6dfc-443e-a5c9-75ae3988e164"
                  width={1000}
                  height={1000}
                  alt="course1"
                  className="w-[638px] h-[320px]"
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
                <div>
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/boardingadmission%2Flearning-material.jpg?alt=media&token=4b232463-8352-4ba1-a095-94369fe81c7b"
                    width={1000}
                    height={1000}
                    alt="course1"
                    className="w-[632px] h-[300px]"
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
              <div id="Learning material" className="lg:w-[50%]">
                <h1 className="lg:text-[44px] text-[28px] text-white">
                  Learning Material
                </h1>
                <p className="text-[0.875rem] md:text-[20px] text-white mt-4">
                  At Boarding Admissions, we offer comprehensive learning
                  resources, including PDFs, PPTs, and practice tests tailored
                  to your chosen schools. Our interactive materials cover
                  essential topics and reflect the latest exam patterns,
                  ensuring effective and efficient study. With detailed
                  explanations and ample practice opportunities, students build
                  a strong foundation for their exams and achieve their best
                  results.
                </p>
              </div>
              <div className="lg:hidden mt-4">
                <Image
                  src="/icons/PI1.svg"
                  width={1000}
                  height={280}
                  alt="course1"
                />
              </div>
            </div>
          </div>
          <hr className="mt-5 md:mt-12" />

          <div className="mx-4 mt-4 lg:mt-8 lg:mx-20 lg:flex lg:justify-between lg:items-center">
            <div className="lg:w-1/2" id="Flexible schedule">
              <h1 className="lg:text-[48px] text-[32px] text-primary02">
                Flexible Schedule
              </h1>
              <p className="text-[0.875rem] md:text-[20px] text-[#010101] mt-4">
                At Boarding Admissions, our customized courses offer flexible
                scheduling options to fit your busy lifestyle. Whether it&apos;s
                early mornings, late evenings, or weekends, we adjust to your
                needs for the best learning experience. This flexibility helps
                students balance their studies with other commitments, ensuring
                a productive and stress-free preparation for entrance exams.
              </p>
            </div>
            <div className="hidden    lg:flex space-x-12 mt-4">
              <div>
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/boardingadmission%2Fflexible%20schedulejpg.jpeg?alt=media&token=9f71b653-00d6-4467-8456-c0645d741533"
                  width={1000}
                  height={1000}
                  alt="Mock Test"
                  className="w-[632px] h-[320px]"
                />
              </div>
              {/* <div>
                <Image
                  src="/icons/MT2.svg"
                  width={1000}
                  height={1000}
                  alt="Mock Test"
                  className="w-[262px] h-[280px]"
                />
              </div> */}
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
                <div>
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/boardingadmission%2Ffeedback.jpg?alt=media&token=6f5f24d6-2b34-4480-8b0a-3a96d9153da1"
                    width={1000}
                    height={1000}
                    alt="Doubt1"
                    className="w-[632px] h-[320px]"
                  />
                </div>
                {/* <div>
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
              </div> */}
              </div>

              <div className="lg:w-1/2" id="Regular Feedback">
                <h1 className="lg:text-[44px] text-[28px] text-white">
                  Regular Feedback
                </h1>
                <p className="text-[0.875rem] md:text-[20px] text-white mt-4">
                  At Boarding Admissions, we prioritize regular, constructive
                  feedback for both students and parents. Our interactive
                  sessions highlight strengths and areas for improvement,
                  keeping students motivated and on track. This continuous
                  feedback loop helps you stay informed about your child&apos;s
                  progress and supports their educational journey, ensuring they
                  achieve their best in preparation for entrance exams.
                </p>
              </div>
              <div className="lg:hidden mt-4">
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

export default CustomizedCoursesPage;

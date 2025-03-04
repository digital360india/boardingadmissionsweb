"use client";
import Image from "next/image";
import React, { useState } from "react";
import BookaDemoPopUp from "./BookaDemoPopUp";
import Link from "next/link";

const coursesData = [
  {
    id: "one-on-one-classes",
    title: "One-On-One Classes",
    description:
      "Our one-on-one classes offer tailored instruction to meet each student's unique needs. With individual attention from experienced teachers, students receive customized learning plans and interactive lessons designed to build confidence and address specific challenges. This approach ensures effective preparation for entrance exams and supports optimal learning at a pace that suits each student's needs.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/boardingadmission%2Fasian-women-are-doing-job-interviews-2025-01-08-23-32-21-utc.jpg?alt=media&token=61464198-6dfc-443e-a5c9-75ae3988e164",
  },
  {
    id: "learning-material",
    title: "Learning Material",
    description:
      "At Boarding Admissions, we offer comprehensive learning resources, including PDFs, PPTs, and practice tests tailored to your chosen schools. Our interactive materials cover essential topics and reflect the latest exam patterns, ensuring effective and efficient study. With detailed explanations and ample practice opportunities, students build a strong foundation for their exams and achieve their best results.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/boardingadmission%2Flearning-material.jpg?alt=media&token=4b232463-8352-4ba1-a095-94369fe81c7b",
    bgColor: "bg-gradient-to-br from-[#075D70] to-[#0DB2D6]",
  },
  {
    id: "flexible-schedule",
    title: "Flexible Schedule",
    description:
      "At Boarding Admissions, our customized courses offer flexible scheduling options to fit your busy lifestyle. Whether it's early mornings, late evenings, or weekends, we adjust to your needs for the best learning experience. This flexibility helps students balance their studies with other commitments, ensuring a productive and stress-free preparation for entrance exams.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/boardingadmission%2Fflexible%20schedulejpg.jpeg?alt=media&token=9f71b653-00d6-4467-8456-c0645d741533",
  },
  {
    id: "regular-feedback",
    title: "Regular Feedback",
    description:
      "At Boarding Admissions, we prioritize regular, constructive feedback for both students and parents. Our interactive sessions highlight strengths and areas for improvement, keeping students motivated and on track. This continuous feedback loop helps you stay informed about your child's progress and supports their educational journey, ensuring they achieve their best in preparation for entrance exams.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/boardingadmission%2Ffeedback.jpg?alt=media&token=6f5f24d6-2b34-4480-8b0a-3a96d9153da1",
    bgColor: "bg-gradient-to-br from-[#075D70] to-[#0DB2D6]",
  },
];

const CustomizedCoursesPage = () => {
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
      {coursesData.map((course, index) => (
        <div className="index">
          <div
            key={course.id}
            className={`py-8 ${course.bgColor}`}
            id={course.id}
          >
            <div
              className={`mx-4 lg:mx-20 lg:flex lg:justify-between lg:items-center ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              } ${index % 2 === 0 ? "text-primary02" : "text-white"}`}
            >
              <div className="lg:w-1/2">
                <h1
                  className={`lg:text-[48px] text-[32px]  ${
                    index % 2 == 0 ? "text-primary02" : "text-white"
                  }`}
                >
                  {course.title}
                </h1>
                <p
                  className={`text-[0.875rem] lg:text-[20px]  mt-4 hidden lg:block ${
                    index % 2 == 0 ? "text-black" : "text-white"
                  }`}
                >
                  {course.description}
                </p>
                <div className="lg:hidden">
                  <p
                    className={`text-[0.875rem] lg:text-[20px] mt-4 ${
                      index % 2 == 0 ? "text-black" : "text-white"
                    }`}
                  >
                    {expandedSections[course.id]
                      ? course.description
                      : `${course.description.substring(0, 100)}...`}
                  </p>
                  <button
                    className="text-blue-400 hover:underline mt-2"
                    onClick={() => toggleReadMore(course.id)}
                  >
                    {expandedSections[course.id] ? "Read Less" : "Read More"}
                  </button>
                </div>
              </div>
              <div className="hidden lg:flex lg:space-x-12 lg:mt-4">
                <Image
                  src={course.image}
                  width={1000}
                  height={1000}
                  alt={course.title}
                  className="w-full rounded shadow-lg h-[380px]"
                />
              </div>
              <div className="lg:hidden mt-4">
                <Image
                  src={course.image}
                  width={1000}
                  height={1000}
                  alt={course.title}
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
            <Link href="/enrollnow/foundationcourses">
              <div className="cursor-pointer w-[18.75rem] h-[3.5rem] bg-gradient01 border-custom rounded-md flex items-center justify-center">
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
            <div className="cursor-pointer w-[7.5rem] h-[1.9rem] bg-gradient01 border-custom rounded-md flex items-center justify-center text-[0.875rem] text-white">
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

export default CustomizedCoursesPage;

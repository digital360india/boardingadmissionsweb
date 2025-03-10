"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import BookaDemoPopUp from "./BookaDemoPopUp";

const courseData = [
  {
    id: "4th-6thGrade",
    title: "4TH - 6TH GRADE",
    description:
      "Our Foundation Course at Boarding Admissions covers essential skills in grammar, math, and science for grades 4 through 6. Through interactive lessons, hands-on activities, and personalized support, our expert teachers help students develop confidence and a solid academic base. Prepare your child for future academic success with engaging, tailored instruction. Build a strong foundation for top school admissions and long-term achievement!",
    image:
      "https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/boardingadmission%2F4th%20-%206th%20grade.jpg?alt=media&token=957282c8-ebcd-4b46-8d08-70424df6a7c0",
    bgColor: "",
  },
  {
    id: "6th-8thGrade",
    title: "6TH - 8TH GRADE",
    description:
      "At Boarding Admissions, our Foundation Course for grades 6 through 8 prepares students for future academic success with a strong focus on English, math, and science. We emphasize grammar and calculations through interactive lessons, hands-on activities, and engaging quizzes. Expert teachers offer personalized support to build confidence and mastery of fundamental skills. Ensure your child is ready for advanced learning and smooth transitions to high school with our tailored program.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/boardingadmission%2F6TH%20-%208TH%20GRADE.jpg?alt=media&token=d550f799-1fca-4f7c-8574-d848fc97baec",
    bgColor: "bg-gradient-to-br from-[#075D70] to-[#0DB2D6]",
  },
  {
    id: "8thGrade",
    title: "8TH GRADE",
    description:
      "8th grade is pivotal for high school preparation. At Boarding Admissions, we ensure students are ready for advanced topics with a focus on English, math, and science, emphasizing grammar and calculations. Our interactive curriculum, featuring hands-on activities and quizzes, keeps learning enjoyable. Expert teachers provide personalized support to meet individual needs, boosting confidence and academic skills, and ensuring students transition smoothly to high school.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/boardingadmission%2F8TH%20GRADE.jpeg?alt=media&token=daea6f36-1e0f-4dcc-91b5-ec5bdfed945f",
    bgColor: "",
  },
  {
    id: "9thGrade",
    title: "9TH GRADE",
    description:
      "Starting high school is a major milestone. At Boarding Admissions, our 9th Grade Foundation Course ensures students are ready for higher education challenges with a solid base in English, math, and science. Emphasizing grammar and calculations, our engaging curriculum includes hands-on activities and quizzes. Expert teachers provide personalized support, boosting confidence and academic skills, and preparing students for advanced topics in high school and beyond.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/boardingadmission%2F9th%20grade.jpg?alt=media&token=63400cdf-f581-431b-a9cb-8088fe68bc4d",
    bgColor: "bg-gradient-to-br from-[#075D70] to-[#0DB2D6]",
  },
];

const FoundationcoursePage = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [expandedIds, setExpandedIds] = useState({});

  const handleClick = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  const toggleReadMore = (id) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      {courseData.map((course, index) => (
        <div className="index" key={course.id}>
          <div
            
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
                    {" "}
                    {expandedIds[course.id]
                      ? course.description
                      : `${course.description.substring(0, 100)}...`}
                  </p>
                  <button
                    className="text-blue-400 hover:underline mt-2"
                    onClick={() => toggleReadMore(course.id)}
                  >
                    {expandedIds[course.id] ? "Read Less" : "Read More"}
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

export default FoundationcoursePage;

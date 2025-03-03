"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import BookaDemoPopUp from "./BookaDemoPopUp";

const services = [
  {
    id: "onlineclass",
    title: "Online Class",
    description:
      "Experience engaging and personalized online learning with Boarding Admissions. Our state-of-the-art online classes offer flexibility and convenience, allowing students to learn from home. Our expert teachers provide tailored instruction, ensuring comprehensive preparation for boarding school entrance exams. With interactive tools and a comprehensive curriculum, students stay engaged and confident.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/boardingadmission%2Fhome-based-expert-young-indian-woman-facilitating-2023-11-27-05-27-27-utc.jpg?alt=media&token=e0a752c9-794c-4390-b4f9-dd6c8a6d72a9",

    bgColor: "",
  },
  {
    id: "personalinterview",
    title: "Personal Interview Preparation",
    description:
      "Master the personal interview for boarding school admissions with Boarding Admissions. Our program helps students showcase their personality, interests, and potential confidently. We offer expert guidance on interview techniques, interactive mock interviews, and personalized feedback to improve performance. Our goal is to build students' confidence and prepare them thoroughly for their interviews.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/boardingadmission%2Fpersonal-interview-preparation%20.jpg?alt=media&token=e43c899c-783b-4e8e-b2e2-09b51edddd3d",
    bgColor: "bg-gradient-to-br from-[#075D70] to-[#0DB2D6]",
  },
  {
    id: "mocktest",
    title: "Mock Test",
    description:
      "Mock tests are vital for boarding school entrance exam prep. At Boarding Admissions, our comprehensive tests simulate the actual exam environment, helping students reduce anxiety and build comfort. Detailed feedback highlights strengths and weaknesses, guiding targeted study efforts. Regular practice sessions develop effective exam strategies and reinforce learning. Our mock tests cover all subjects, ensuring thorough preparation and confidence for every aspect of the exam.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/boardingadmission%2FMock-Test.jpg?alt=media&token=0e62ad84-5c08-420b-809e-6cb78dcc9f1e",
    bgColor: "",
  },
  {
    id: "doubtclearing",
    title: "Doubt Clearing Session",
    description:
      "Our doubt-clearing sessions are designed to address students' specific challenges in preparation for boarding school entrance exams. These interactive sessions offer personalized guidance, helping students overcome difficulties and solidify their understanding. With expert instructors available to answer questions and provide clear explanations, students can resolve their doubts efficiently. Regular doubt-clearing sessions ensure that no question goes unanswered, boosting students' confidence and readiness for the exams.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/boardingadmission%2Fdoubt-clearing-session.jpg?alt=media&token=6d6bd85e-bcf7-412b-ace4-bd9c97f12dde",
    bgColor: "bg-gradient-to-br from-[#075D70] to-[#0DB2D6]",
  },
];

const ServicePage = () => {
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
      {services.map((service, index) => (
        <div className="index">
        <div
          key={service.id}
          className={`py-8 ${service.bgColor}`}
          id={service.id}
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
                {service.title}
              </h1>

              <p
                className={`text-[0.875rem] lg:text-[20px]  mt-4 hidden lg:block ${
                  index % 2 == 0 ? "text-black" : "text-white"
                }`}
              >
                {service.description}
              </p>
              <div className="lg:hidden">
                <p className={`text-[0.875rem] lg:text-[20px] mt-4 ${
                  index % 2 == 0 ? "text-black" : "text-white"
                }`}>
                  {expandedIds[service.id]
                    ? service.description
                    : `${service.description.substring(0, 100)}...`}
                </p>
                <button
                  className="text-blue-400 hover:underline mt-2"
                  onClick={() => toggleReadMore(service.id)}
                >
                  {expandedIds[service.id] ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
            <div className="hidden lg:flex lg:space-x-12 lg:mt-4">
              <Image
                src={service.image}
                width={1000}
                height={1000}
                alt={service.title}
                className="w-full rounded shadow-lg h-[380px]"
              />
            </div>
            <div className="lg:hidden mt-4">
              <Image
                src={service.image}
                width={1000}
                height={1000}
                alt={service.title}
                className="w-full rounded shadow-lg md:w-[740px] h-full"
              />
            </div>
          </div>
         
        </div>
        <hr className="mt-5 lg:mt-12" />
        </div>
      ))}
      {isPopupVisible && <BookaDemoPopUp onClose={handleClosePopup} />}
    </>
  );
};

export default ServicePage;

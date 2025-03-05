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
      "https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/boardingadmission%2Fpersonal%20interview.jpg?alt=media&token=6da5f281-9967-4bdb-876d-596a1c7dc98c",
    bgColor: "bg-gradient-to-br from-[#075D70] to-[#0DB2D6]",
  },
  {
    id: "mocktest",
    title: "Mock Test",
    description:
      "Mock tests are vital for boarding school entrance exam prep. At Boarding Admissions, our comprehensive tests simulate the actual exam environment, helping students reduce anxiety and build comfort. Detailed feedback highlights strengths and weaknesses, guiding targeted study efforts. Regular practice sessions develop effective exam strategies and reinforce learning. Our mock tests cover all subjects, ensuring thorough preparation and confidence for every aspect of the exam.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/boardingadmission%2FMock%20Test.jpg?alt=media&token=988ca7eb-3fd6-4cdd-a725-927f251bae0b",
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
        <div className="index" key={service.id}>
          <div
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
                  <p
                    className={`text-[0.875rem] lg:text-[20px] mt-4 ${
                      index % 2 == 0 ? "text-black" : "text-white"
                    }`}
                  >
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

export default ServicePage;

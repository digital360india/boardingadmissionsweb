"use client";
import React from "react";
import Faq from "@/components/frontend/Faqdata";
import Image from "next/image";
import StarRatings from "@/components/frontend/StarRatings";
import schoolFAQs from "@/utils/frontend/FaqData";
import GetPrepared from "@/components/frontend/GetPrepared";
import EnquiryForm from "@/components/frontend/EnquiryForm";
import Broucher from "@/components/frontend/Broucher";
import SchoolCarousel from "../../../components/frontend/SchoolCarousel";

const feeData = [
  {
    class: "I-IV",
    oldStudent: 283000,
    daySchool: 94000,
    boarding: 250000,
    dayScholar: 72000,
  },
  {
    class: "V-VIII",
    oldStudent: 314000,
    daySchool: 97000,
    boarding: 280000,
    dayScholar: 75000,
  },
  {
    class: "IX-X",
    oldStudent: 338000,
    daySchool: 112000,
    boarding: 305000,
    dayScholar: 87000,
  },
  {
    class: "XI-XII",
    oldStudent: 338000,
    daySchool: 112000,
    boarding: 305000,
    dayScholar: 87000,
  },
  {
    class: "XI-XII (Science)",
    oldStudent: 344000,
    daySchool: 118000,
    boarding: 311000,
    dayScholar: 93000,
  },
];

const admissionSteps = [
  {
    title: "Get the Form",
    description:
      "Obtain the application form from the school's website or directly from the campus. Keep track of important dates for submission.",
  },
  {
    title: "Fill Out the Form",
    description:
      "Accurately fill in all required details about the student, including academic background and extracurricular interests.",
  },
  {
    title: "Prepare Documents",
    description:
      "Gather necessary documents such as academic records, birth certificates, and character certificates.",
  },
  {
    title: "Submit the Application",
    description:
      "Submit the completed form along with all required documents either online or in person before the deadline.",
  },
  {
    title: "Entrance Exam Preparation",
    description:
      "If an entrance exam is part of the process, ensure the student is well-prepared in relevant subjects.",
  },
  {
    title: "Take the Exam",
    description: "Attend the scheduled CJM Waverly Entrance exam.",
  },
  {
    title: "Interview",
    description:
      "If required, schedule and attend an interview as part of the admission process.",
  },
  {
    title: "Check Results",
    description:
      "Wait for an official communication via email or the school website regarding the admission status.",
  },
  {
    title: "Complete Enrollment",
    description:
      "If admitted, complete the final steps, including fee payment and procurement of uniforms and supplies.",
  },
];

function CJMwaverlyPage() {
  const CJMWaverly =
    schoolFAQs.find((school) => school.school === "CJMWaverly")?.faqs || [];

  return (
    <div className="h-auto w-[100%] poppins ">
      {/* <div className="relative lg:px-[30px] xl:px-[50px]  ">
        <div className=" h-[250px] xl:h-[300px] lg:h-[350px] w-[100%] ">
          {" "}
          <Image
            src="/images/SchoolBanner/cjmframe.svg"
            alt="Descriptive text for screen readers"
            className="w-full lg:h-[400px] h-[250px]  object-cover lg:rounded-2xl rounded-b-2xl "
            width={1000}
            height={1000}
          />
        </div>
        <div className="w-[13vw] ">
          <Image
            src="/images/SchoolBanner/cjmlogo.svg"
            className="absolute inset-0 left-[5%] lg:top-[300px] top-[80%] lg:w-[132px] lg:h-[130px] w-[90px] h-[80px] "
            width={1000}
            height={1000}
            alt="img"
          />
        </div>
      </div> */}
      <SchoolCarousel />
      <div className="w-[90%] ml-[5%] mt-6">
        <div className="relative h-[150px]   xl:h-[150px] md:h-[120px] lg:h-[170px]    w-full  border-b-2  sm:flex sm:justify-between">
          <div className="w-full flex flex-col  lg:gap-5 gap-2">
            <div className="">
              <h1 className="text-[#075D70]  lg:text-[2rem] text-[18px] font-semibold lg:font-bold ">
                CJM Waverly, Mussoorie, Uttarakhand
              </h1>
            </div>
            <StarRatings
              lat={30.4630602}
              lng={78.0552029}
              schoolName={"Convent Of Jesus & Mary"}
            />

            {/* <div className=" flex sm:w-[50%] gap-3 mb-2 sm:mb-0">
              <h3 className="px-1 py-1 rounded-md bg-[#6198A3] bg-opacity-[12%] text-black ">
                Private School
              </h3>
              <h3 className="px-1 py-1 rounded-md bg-[#6198A3] bg-opacity-[12%] text-black ">
                Estd.- 1995
              </h3>
            </div> */}
          </div>

          <div className=" sm:absolute pt-2  gap-3 flex  sm:right-0 sm:self-center">
            {/* <button className="py-1 px-2 sm:py-1.5 sm:px-2.5 border border-[#075D70] rounded-[5px] flex gap-2">
              <div>
                <Image
                  src="/icons/download.svg"
                  className="w-full h-full pt-1"
                  width={2}
                  height={2}
                  alt="svg"
                />
              </div>

              <p className="text-[#075D70]">Broucher</p>
            </button> */}
            <GetPrepared />
          </div>
        </div>
        <div className="md:hidden mt-6">
          <EnquiryForm />
        </div>

        <div className="md:flex md:justify-between">
          <div className="space-y-4 w-[90vw]  mt-10 ">
            <div className="">
              <h1 className="text-[#075D70] font-semibold  text-[1.5rem] md:text-[2rem] ">
                About CJM Waverly
              </h1>
            </div>
            <div>
              <p className="leading-6 w-[88vw] md:w-[45vw] text-[14px] md:text-[1.15rem] text-justify">
                CJM Waverly, located in the picturesque hills of Mussoorie, is a
                distinguished institution known for its commitment to academic
                excellence and moral development. As one of India&apos;s oldest
                and most esteemed boarding schools, CJM Waverly offers a
                nurturing environment where students are encouraged to grow
                intellectually, culturally, and physically. The school&apos;s
                rigorous academic programs are complemented by a strong emphasis
                on holistic development, ensuring that students are well-rounded
                and prepared for the challenges ahead. Guided by a dedicated
                faculty, CJM Waverly students thrive in a vibrant and inclusive
                community. The serene setting of the school provides an ideal
                atmosphere for learning and personal growth, making CJM Waverly
                a sought-after destination for a comprehensive and enriching
                education
              </p>
            </div>
          </div>
          <div className=" hidden md:block mt-10">
            <EnquiryForm />
          </div>
        </div>

        <div>
          <h2 className="text-[#075D70] font-semibold text-[1.5rem] md:text-[2rem] mt-8 mb-5">
            Fee Structure
          </h2>
          <div className="lg:overflow-auto overflow-x-scroll">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100 text-[14px] md:text-[1.1rem]">
                  <th className="border border-gray-300 p-2">Class</th>
                  <th className="border border-gray-300 p-2">Old Student</th>
                  <th className="border border-gray-300 p-2">Day School</th>
                  <th className="border border-gray-300 p-2">Boarding</th>
                  <th className="border border-gray-300 p-2">Day Scholar</th>
                </tr>
              </thead>
              <tbody>
                {feeData.map((row, index) => (
                  <tr key={index} className="text-[14px]">
                    <td className="border border-gray-300 p-2 text-center">
                      {row.class}
                    </td>
                    <td className="border border-gray-300 p-2 text-center">
                      Rs.{row.oldStudent}/-
                    </td>
                    <td className="border border-gray-300 p-2 text-center">
                      Rs.{row.daySchool}/-
                    </td>
                    <td className="border border-gray-300 p-2 text-center">
                      Rs.{row.boarding}/-
                    </td>
                    <td className="border border-gray-300 p-2 text-center">
                      Rs.{row.dayScholar}/-
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-4 w-[90vw] mb-10 mt-10">
          <div>
            <h1 className="text-[#075D70] font-semibold text-[1.5rem] md:text-[2rem]">
              Admission Procedure
            </h1>
          </div>

          <div>
            <ul className="list-disc pl-4 space-y-4 text-[1.15rem]">
              {admissionSteps.map((step, index) => (
                <li key={index}>
                  <span className="font-medium text-[1rem]">{step.title}:</span>{" "}
                  <span className="text-[14px] md:text-[1.15rem]">
                    {" "}
                    {step.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h1 className="text-[#075D70] font-semibold text-[1.5rem] md:text-[2rem] mb-2">
            Important Note
          </h1>
          <ul className="list-disc text-[14px] md:text-[1.15rem] pl-4 mb-7">
            <li>
              For the latest updates on the admission process and fee structure,
              regularly check the official website of CJM Waverly, as
              information may change.
            </li>
          </ul>
        </div>

        <Broucher />
      </div>

      <div>
        <Faq data={CJMWaverly} />
      </div>
    </div>
  );
}

export default CJMwaverlyPage;

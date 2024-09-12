"use client";
import React from "react";
import Faq from "@/components/frontend/Faqdata";
import Image from "next/image";
import Star from "@/components/frontend/Ratings";
import schoolFAQs from "@/utils/frontend/FaqData";

const star = [
  {
    id: 1,

    ratingByPerson: 4,
  },
];
 

const feeData = [
  { class: 'I-IV', oldStudent: 283000, daySchool: 94000, boarding: 250000, dayScholar: 72000 },
  { class: 'V-VIII', oldStudent: 314000, daySchool: 97000, boarding: 280000, dayScholar: 75000 },
  { class: 'IX-X', oldStudent: 338000, daySchool: 112000, boarding: 305000, dayScholar: 87000 },
  { class: 'XI-XII', oldStudent: 338000, daySchool: 112000, boarding: 305000, dayScholar: 87000 },
  { class: 'XI-XII (Science)', oldStudent: 344000, daySchool: 118000, boarding: 311000, dayScholar: 93000 },
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

  const CJMWaverly = schoolFAQs.find(school => school.school === 'CJMWaverly')?.faqs || [];

  return (
    <div className="h-auto w-[100%] ">
      <div className="relative ">
 <div className=" h-[250px] w-[100%] ">          <Image
            src="/images/SchoolBanner/cjmframe.svg"
            alt="Descriptive text for screen readers"
            className="w-full h-[250px] object-cover rounded-b-2xl "
            width={1000}
            height={1000}
          />
        </div>
        <div className="w-[13vw] ">
          <Image
            src="/images/SchoolBanner/cjmlogo.svg"
           className="absolute inset-0 left-[5%] top-[80%] w-[90px] h-[80px] "
            width={1000}
            height={1000}
            alt="img"
          />
        </div>
      </div>

     <div className="w-[90%] ml-[5%]  mt-[10%] ">
        <div className="relative h-[20vh]  sm:h-[24vh] md:h-[22vh]   w-full  border-b-2  sm:flex sm:justify-between">
          <div className="w-full flex flex-col  lg:gap-5 gap-2">
            <div className="">
              <h1 className="text-[#075D70]  lg:text-[2rem] text-[18px] font-semibold lg:font-bold ">
                CJM Waverly, Mussoorie, Uttarakhand
              </h1>
            </div>
             <div className="flex text-center lg:gap-3 gap-2 items-center">
              <h2 className="text-[#075D70] ">4.2</h2>

              <div className="border-none ">
                {star.map((star) => (
                  <Star key={star.id} star={star} />
                ))}
              </div>

              {/* <div>
                {
                  [1, 2, 3, 4, 5].map((num) => (
                    <button key={num}>
                      <span className='text-yellow-600'>
                        &#9733;
                      </span>
                    </button>
                  ))
                }
              </div> */}
              <p className="text-[#075D70] ">Google reviews</p>
            </div>

            <div className=" flex sm:w-[50%] gap-3 mb-2 sm:mb-0">
              <h3 className="px-1 py-1 rounded-md bg-[#6198A3] bg-opacity-[12%] text-black ">
                Private School
              </h3>
              <h3 className="px-1 py-1 rounded-md bg-[#6198A3] bg-opacity-[12%] text-black ">
                Estd.- 1995
              </h3>
            </div>
          </div>

          <div className=" sm:absolute  gap-3 flex  sm:right-0 sm:self-center">
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
            <button className="py-1 px-2 sm:py-1.5 sm:px-2.5 border border-[#075D70]  rounded-[5px] flex gap-2">
              <div>
                <Image
                  src="/icons/star.svg"
                  className="w-full h-full pt-1"
                  width={2}
                  height={2}
                  alt="img"
                />
              </div>

              <p className="text-[#075D70]">Get Prepared</p>
            </button>
          </div>
        </div>

        <div className="space-y-4 w-[90vw]  mt-10 ">
          <div className="">
            <h1 className="text-[#075D70] font-semibold  text-[2rem] ">
              About School
            </h1>
          </div>
          <div>
            <p className="leading-6 w-[88vw] text-[1.15rem] text-justify">
              CJM Waverly, located in the picturesque hills of Mussoorie, is a
              distinguished institution known for its commitment to academic
              excellence and moral development. As one of India&apos;s oldest
              and most esteemed boarding schools, CJM Waverly offers a nurturing
              environment where students are encouraged to grow intellectually,
              culturally, and physically. The school&apos;s rigorous academic
              programs are complemented by a strong emphasis on holistic
              development, ensuring that students are well-rounded and prepared
              for the challenges ahead. Guided by a dedicated faculty, CJM
              Waverly students thrive in a vibrant and inclusive community. The
              serene setting of the school provides an ideal atmosphere for
              learning and personal growth, making CJM Waverly a sought-after
              destination for a comprehensive and enriching education
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-[#075D70] font-semibold text-[2rem] mt-8 mb-5">
            Fee Structure
          </h2>

          <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Class</th>
            <th className="border border-gray-300 p-2">Old Student</th>
            <th className="border border-gray-300 p-2">Day School</th>
            <th className="border border-gray-300 p-2">Boarding</th>
            <th className="border border-gray-300 p-2">Day Scholar</th>
          </tr>
        </thead>
        <tbody>
          {feeData.map((row, index) => (
            <tr key={index}>
              <td className="border border-gray-300 p-2 text-center">{row.class}</td>
              <td className="border border-gray-300 p-2 text-center">Rs.{row.oldStudent}/-</td>
              <td className="border border-gray-300 p-2 text-center">Rs.{row.daySchool}/-</td>
              <td className="border border-gray-300 p-2 text-center">Rs.{row.boarding}/-</td>
              <td className="border border-gray-300 p-2 text-center">Rs.{row.dayScholar}/-</td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>

        <div className="space-y-4 w-[90vw] mb-10 mt-10">
          <div>
            <h1 className="text-[#075D70] font-semibold text-[2rem]">
              Admission Procedure
            </h1>
          </div>

          <div>
            <ul className="list-disc pl-4 space-y-4 text-[1.15rem]">
              {admissionSteps.map((step, index) => (
                <li key={index}>
                  <span className="font-medium">{step.title}:</span>{" "}
                  {step.description}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h1 className="text-[#075D70] font-semibold text-[2rem] mb-2">Important Note</h1>
          <ul className="list-disc pl-4 mb-7">
            <li>
              For the latest updates on the admission process and fee structure,
              regularly check the official website of CJM Waverly, as
              information may change.
            </li>
          </ul>
        </div>

        <div className="mb-10">
          <h1 className="text-[#075D70] font-semibold text-[1.5rem]">
            Downloads
          </h1>
          {/* <h3 className="text-[#D77A61] text-[1.13rem] ">Fee structure</h3> */}
          <h3 className="text-[#D77A61]  text-[1.13rem]">Broucher</h3>
        </div>
      </div>

      <div>
        <Faq data={CJMWaverly}/>
      </div>
    </div>
  );
}

export default CJMwaverlyPage;

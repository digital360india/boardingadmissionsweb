"use client";
import React from "react";
import Faq from "@/components/frontend/Faqdata";
import Image from "next/image";
import Star from "@/components/frontend/Ratings";

const star = [
  {
    id: 1,

    ratingByPerson: 4,
  },
];

const examDetails = [
  {
    title: "Visit the Website:",
    description:
      "Start by visiting the official Woodstock School website and navigate to the admissions section, where you'll find the 'Apply Now' button.",
  },
  {
    title: "Complete the Application:",
    description:
      "Complete the online application form with the necessary details and upload a recent photograph of the child.",
  },
  {
    title: "Unique Email ID:",
    description:
      "Ensure the child has a unique email ID for the application. If one doesn't exist, you&apos;ll need to create one.",
  },
  {
    title: "Relatives or Siblings:",
    description:
      "If you have any relatives or siblings who attended Woodstock, include their details in the designated section.",
  },
  {
    title: "Contact Admissions Team:",
    description:
      "For any queries during the application process, contact the Woodstock School Admissions team for assistance.",
  },
  {
    title: "Submit Required Documents:",
    description:
      "Prepare and submit all required documents, such as academic records and personal essays, as outlined in the admissions portal.",
  },
  {
    title: "Prepare for Interview:",
    description:
      "Be ready for an interview, as it may be part of the Woodstock School Entrance process to evaluate applicants comprehensively.",
  },
];
  
function WoodStockPage() {
  return (
    <div className="h-auto w-[100%]   md:mt-24">
      <div className="relative ">
        <div className="h-auto w-[100%]">
          <Image
            src="/images/SchoolBanner/woodstockframe.svg"
            alt="Descriptive text for screen readers"
            className="w-full "
            width={2}
            height={2}
          />
        </div>
        <div className="w-[13vw] ">
          <Image
            src="/images/SchoolBanner/woodstocklogo.svg"
            className="absolute inset-0 left-[5%] top-[68%] w-[13vw] "
            width={2}
            height={2}
            alt="school"
          />
        </div>
      </div>

      <div className="w-[90%] ml-[5%]  mt-[5%] ">
        <div className="relative h-[28vh]  sm:h-[24vh] md:h-[22vh]   w-full  border-b-2  sm:flex sm:justify-between">
          <div className="w-full flex flex-col  gap-5">
            <div className="">
              <h1 className="text-[#075D70]  text-[2rem] font-bold">
                Scindia School, Gwalior, Madhya Pradesh
              </h1>
            </div>
            <div className="flex text-center gap-3">
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
              <h2 className="text-[#075D70] ">Google reviews</h2>
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
            <button className="py-1 px-2 sm:py-1.5 sm:px-2.5 border border-[#075D70] rounded-[5px] flex gap-2">
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
            </button>
            <button className="py-1 px-2 sm:py-1.5 sm:px-2.5 border border-[#075D70]  rounded-[5px] flex gap-2">
              <div>
                <Image
                  src="/icons/star.svg"
                  className="w-full h-full pt-1"
                  width={2}
                  height={2}
                  alt="svg"
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
            <p className="leading-6 w-[88vw] text-[1.15rem]">
              Woodstock School, nestled in the scenic hills of Mussoorie,
              Uttarakhand, is one of Asia&apos;s oldest and most prestigious
              residential schools. Established in 1854, it is an independent,
              coeducational institution with a rich legacy of academic
              excellence. Woodstock School is accredited by the Middle States
              Association and recognized as an International Baccalaureate (IB)
              World School, offering a globally recognized education from
              kindergarten through Grade 12. The school&apos;s curriculum blends
              American educational standards with Indian cultural values,
              providing a well-rounded educational experience that prepares
              students for global citizenship.
            </p>
          </div>
        </div>

        <div className="space-y-4 w-[90vw] mb-10 mt-10">
          <div>
            <h1 className="text-[#075D70] font-semibold text-[2rem]">
              Admission Procedure
            </h1>
          </div>
          {/* <div>
            <ul className="list-disc pl-4 space-y-4 text-[1.15rem]">
              <li>
                <span className="font-medium"> Choose the Exam:</span> Decide
                between the Common Aptitude Analysis (CAA) and Scindia School
                Aptitude Analysis (SAA), both covering Mathematics, English, and
                Hindi.
              </li>
              <li>
                {" "}
                <span className="font-medium">Exam Centers: </span>Exams are
                conducted in Kolkata, Mumbai, New Delhi, Lucknow, and Gwalior.
              </li>
              <li>
                <span className="font-medium">Exam Schedules:</span> CAA is held
                every third Saturday of November. SAA is in January/February,
                with Gwalior center registrations open until January 27.
                On-the-spot SAA registrations are available.
              </li>
              <li>
                <span className="font-medium"> Aadhar Card Submission:</span>{" "}
                Mandatory for all Indian states except J & K, Assam, Meghalaya.
              </li>
              <li>
                <span className="font-medium">Eligibility for Admission:</span>{" "}
                Candidates for classes VI, VII, and VIII should be under the
                age-appropriate maximum age as of January 1 of the admission
                year. Classes IX and XI may admit exceptionally meritorious
                students if vacancies are available.
              </li>
              <li>
                <span className="font-medium">Interactive Session: </span>
                Shortlisted students will be invited to the school for an
                interactive session including games, sports, and faculty
                interaction.
              </li>
              <li>
                <span className="font-medium">Download Syllabus: </span>
                Available on the school&apos;s website after registration.
              </li>
            </ul>
          </div> */}

          <div>
            <ul className="list-disc pl-4 space-y-4 text-[1.15rem]">
              {examDetails.map((item, index) => (
                <li key={index}>
                  <span className="font-medium">{item.title}</span>{" "}
                  {item.description}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-10">
          <h1 className="text-[#075D70] font-semibold text-[1.5rem]">
            Downloads
          </h1>
          <h3 className="text-[#D77A61] text-[1.13rem] ">Fee structure</h3>
          <h3 className="text-[#D77A61]  text-[1.13rem]">Broucher</h3>
        </div>
      </div>

      <div>
        <Faq />
      </div>
    </div>
  );
}

export default WoodStockPage;

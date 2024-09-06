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

function MayoBoysPage() {
  const MayoBoys = schoolFAQs.find(school => school.school === 'MayoBoys')?.faqs || [];
  return (
    <div className="h-auto w-[100%]">
      <div className="relative ">
        <div className="h-auto w-[100%]">
          <Image
            src="/images/SchoolBanner/mayoboysframe.svg"
            alt="Descriptive text for screen readers"
            className="w-full "
            width={2}
            height={2}
          />
        </div>
        <div className="w-[13vw] ">
          <Image
            src="/images/SchoolBanner/mayoboyslogo.svg"
            className="absolute inset-0 left-[5%] top-[68%] w-[13vw] "
            width={2}
            height={2}
          />
        </div>
      </div>

      <div className="w-[90%] ml-[5%]  mt-[5%] ">
        <div className="relative h-[28vh]  sm:h-[24vh] md:h-[22vh]   w-full  border-b-2  sm:flex sm:justify-between">
          <div className="w-full flex flex-col  gap-5">
            <div className="">
              <h1 className="text-[#075D70]  text-[2rem] font-bold">
                Mayo Boys School, Ajmer, Rajasthan
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
                      <span className=&apos;text-yellow-600&apos;>
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
              Mayo College Boys School in Ajmer, Rajasthan, is a prestigious
              boys&apos; residential school known for its rich heritage and top-notch
              education. Established in 1875 by Richard Bourke, the school was
              initially founded to educate the sons of Indian nobility. Today,
              Mayo Boys Admissions are highly competitive, with students aiming
              to join an institution that fosters academic excellence and
              holistic development. The schools sprawling green campus, modern
              facilities, and a strong emphasis on character building make it a
              sought-after choice for parents.
            </p>
          </div>
        </div>

        <div className="space-y-4 w-[90vw] my-10">
          <h1 className="text-[#075D70] font-semibold text-[2rem]">
            Admission Procedure
          </h1>
          <p className="leading-6 w-[88vw] text-[1.15rem]">
            The Mayo Boys Admissions process is designed to select students who
            show promise in academics, extracurricular activities, and
            leadership. Here&apos;s a quick guide to help you navigate the process.
          </p>
          <h2 className="text-[#075D70] font-semibold text-[1.4rem] my-4">
            Steps to Admission
          </h2>
          <ol className="list-decimal pl-4 space-y-4 text-[1.15rem]">
            <li>
              <span className="font-medium">Application Form</span>
              <ul className="list-disc pl-4 mt-2 space-y-4">
                <li>
                  <span className="font-medium">Registration:</span> Start by
                  registering on the Mayo College official website. Early
                  registration increases your chances.
                </li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Required Documents</span>
              <ul className="list-disc pl-4 mt-2 space-y-4">
                <li>
                  <span className="font-medium">Documents:</span> Include the
                  student&apos;s birth certificate, previous academic records, and
                  other essential documents.
                </li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Online Application Process</span>
              <ul className="list-disc pl-4 mt-2 space-y-4">
                <li>
                  <span className="font-medium">Submission:</span> Complete the
                  online form, attaching the required documents.
                </li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Mayo Boys Entrance Exam</span>
              <ul className="list-disc pl-4 mt-2 space-y-4">
                <li>
                  <span className="font-medium">Focus Subjects:</span> The
                  entrance exam tests English grammar, general knowledge (GK),
                  and mathematics, aligning with the subjects our course
                  specializes in.
                </li>
                <li>
                  <span className="font-medium">Format:</span> Typically
                  conducted online in January or February.
                </li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Interview and Final Selection</span>
              <ul className="list-disc pl-4 mt-2 space-y-4">
                <li>
                  <span className="font-medium">Interview:</span> Shortlisted
                  candidates are invited for a personal interview.
                </li>
                <li>
                  <span className="font-medium">Selection:</span> Final
                  selection is based on performance in the entrance exam and
                  interview.
                </li>
              </ul>
            </li>
          </ol>
        </div>

        <div className="space-y-4 w-[90vw] my-10">
          <h1 className="text-[#075D70] font-semibold text-[2rem]">
            Fees Structure
          </h1>
          <p className="leading-6 w-[88vw] text-[1.15rem]">
            The fee structure for Mayo Boys Admissions includes several
            components essential for a student&apos;s education and well-being.
          </p>
          <div className="mt-10">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left font-medium">
                    Particulars
                  </th>
                  <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left font-medium">
                    Indian Residents (INR)
                  </th>
                  <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left font-medium">
                    Overseas Residents (INR/USD)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">
                    School Fee (Annual)
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Rs. 8,01,000
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Rs. 16,02,000 / $21,710
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">
                    Caution Money
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Rs. 4,00,000
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Rs. 8,00,000 / $10,830
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">
                    One-Time Admission Fee
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Rs. 5,34,000
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Rs. 10,68,000 / $14,470
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-4 w-[90vw] my-10 ">
          <div>
            <p className="text-[#075D70] font-semibold text-[2rem]">
            Important Dates for Mayo Boys Admissions
            </p>
          </div>
          <div>
            <div>
              <p className="leading-6 w-[88vw] text-[1.15rem]">
              For Mayo Boys Admissions, here are the key dates to remember:
              </p>
            </div>
            <ul className="list-disc pl-4 space-y-4">
                    <li>
                      <span className="font-medium">Registration:</span>
                      Open throughout the year, with early registration recommended.
                    </li>
                    <li>
                      <span className="font-medium">Mayo Boys Entrance Exam:</span>Typically held in January or February.
                    </li>
                    <li>
                      <span className="font-medium">Interviews:</span>Conducted between December and February.
                    </li>
                    <li>
                      <span className="font-medium">Session Start:</span>April.
                    </li>
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
        <Faq data={MayoBoys}/>
      </div>
    </div>
  );
}

export default MayoBoysPage;

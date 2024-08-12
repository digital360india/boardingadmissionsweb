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

function TheDoonPage() {
  return (
    <div className="h-auto w-[100%]">
      <div className="relative ">
        <div className="h-auto w-[100%]">
          <Image
            src="/images/SchoolBanner/thedoonframe.svg"
            alt="Descriptive text for screen readers"
            className="w-full "
            width={2}
            height={2}
          />
        </div>
        <div className="w-[13vw] ">
          <Image
            src="/images/SchoolBanner/thedoonlogo.svg"
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
                The Doon School, Dehradun, Uttarakhand
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
              Founded in 1935, The Doon School has a rich history of academic
              excellence and holistic education. The school&apos;s mission is to
              recruit boys who not only excel in academics but also demonstrate
              strong character, positive attitudes, and talents in sports,
              music, and cultural activities. The school aims to prepare its
              students to become leaders in their communities and beyond. The
              Doon School is unique in its approach to education. It emphasizes
              not only academic success but also the development of personal
              qualities such as leadership, teamwork, and social responsibility.
              The school&apos;s curriculum is designed to challenge students and
              encourage them to reach their full potential.
            </p>
          </div>
        </div>

        <div className="space-y-4 w-[90vw] mb-10 mt-10">
          <div>
            <h1 className="text-[#075D70] font-semibold text-[2rem]">
              Admission Procedure
            </h1>
          </div>
          <div>
            <ul className="list-disc pl-4 space-y-4 text-[1.15rem]">
              <li>
                <span className="font-medium"> Admission Overview :</span> The
                Doon School admits new students into two-year groups: Class VII
                and Class VIII. The school seeks boys who are not only
                academically strong but also demonstrate a desire to stretch
                themselves in various fields. The admission process is highly
                competitive, with many applicants vying for a limited number of
                spots.
              </li>
              <li>
                {" "}
                <span className="font-medium">Entrance Examination: </span>The
                entrance examination is a crucial part of the admission process.
                It is held in October each year and is designed to assess the
                academic potential and aptitude of the applicants. The
                examination covers subjects such as English, Mathematics, and
                General Knowledge. The school no longer provides sample past
                papers for the entrance examination. However, prospective
                parents can contact the Admissions Office for more information
                on the syllabus and exam preparation.
              </li>
              <li>
                <span className="font-medium">Interview and Assessment:</span>{" "}
                In addition to the entrance examination, shortlisted candidates
                are required to attend an interview and assessment process. This
                stage evaluates the applicant's overall personality, including
                their interests, talents, and potential to contribute to the
                school's community. The interview is conducted by a panel of
                educators and senior staff members who assess the candidate's
                suitability for the school's environment. The assessment process
                is holistic, taking into account the candidate's academic
                performance, extracurricular achievements, and personal
                qualities.
              </li>
           
            </ul>
          </div>
        </div>

        <div className="space-y-4 w-[90vw] mb-10 mt-10">
          <div>
            <h1 className="text-[#075D70] font-semibold text-[2rem]">
            Registration
            </h1>
          </div>
          <div>
            <ul className="list-disc pl-4 space-y-4 text-[1.15rem]">
              <li>
                <span className="font-medium">How to Register:</span> The
                Doon School admits new students into two-year groups: Class VII
                and Class VIII. The school seeks boys who are not only
                academically strong but also demonstrate a desire to stretch
                themselves in various fields. The admission process is highly
                competitive, with many applicants vying for a limited number of
                spots.
              </li>
              <div className="">
      

      <ol className="list-decimal list-inside ml-4 mb-6 ">
        <li>
          <span className="text-[1.15rem] font-medium">Submission of Birth Certificate:</span> A certified copy of
          the boy&apos;s birth certificate must be submitted.
        </li>
        <li>
          <span className="text-[1.15rem] font-medium">Payment of Registration Fee:</span> The registration fee
          varies depending on the age of the boy at the time of registration.
          The fee structure is detailed in the table below.
        </li>
      </ol>

      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Registration Fee Structure
      </h3>

      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b border-gray-300 bg-gray-100 text-left">
              Age
            </th>
            <th className="px-4 py-2 border-b border-gray-300 bg-gray-100 text-left">
              Indian Resident (INR)
            </th>
            <th className="px-4 py-2 border-b border-gray-300 bg-gray-100 text-left">
              Overseas Registration (USD)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border-b border-gray-300">Up to 3 years</td>
            <td className="px-4 py-2 border-b border-gray-300">Rs. 12,000</td>
            <td className="px-4 py-2 border-b border-gray-300">$600</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-gray-300">3 – 5 years</td>
            <td className="px-4 py-2 border-b border-gray-300">Rs. 15,000</td>
            <td className="px-4 py-2 border-b border-gray-300">$850</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-gray-300">5 – 7 years</td>
            <td className="px-4 py-2 border-b border-gray-300">Rs. 18,500</td>
            <td className="px-4 py-2 border-b border-gray-300">$1,000</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-gray-300">7 – 9 years</td>
            <td className="px-4 py-2 border-b border-gray-300">Rs. 22,000</td>
            <td className="px-4 py-2 border-b border-gray-300">$1,300</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-gray-300">9 – 11 years</td>
            <td className="px-4 py-2 border-b border-gray-300">Rs. 29,000</td>
            <td className="px-4 py-2 border-b border-gray-300">$1,500</td>
          </tr>
          <tr>
            <td className="px-4 py-2">11 – 13 years</td>
            <td className="px-4 py-2">Rs. 36,000</td>
            <td className="px-4 py-2">$1,800</td>
          </tr>
        </tbody>
      </table>
    </div>
           
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

export default TheDoonPage;

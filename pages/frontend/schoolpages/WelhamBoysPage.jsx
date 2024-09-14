"use client";
import React from "react";
import Faq from "@/components/frontend/Faqdata";
import Image from "next/image";
import Star from "@/components/frontend/Ratings";
import schoolFAQs from "@/utils/frontend/FaqData";
import GetPrepared from "@/components/frontend/GetPrepared";
import EnquiryForm from "@/components/frontend/EnquiryForm";
import Broucher from "@/components/frontend/Broucher";


const star = [
  {
    id: 1,

    ratingByPerson: 4,
  },
]; 

function WelhamBoysPage() {
  const WelhamBoys = schoolFAQs.find(school => school.school === 'WelhamBoys')?.faqs || [];
  return (
    <div className="h-auto w-[100%] poppins lg:mt-28 mt-20 md:mt-16">
      <div className="relative lg:px-[30px] xl:px-[50px]  ">
        <div className=" h-[250px] xl:h-[300px] lg:h-[350px] w-[100%] ">  
       <Image
            src="/images/SchoolBanner/welhamboysframe.svg"
            alt="Descriptive text for screen readers"
           className="w-full lg:h-[400px] h-[250px]  object-cover lg:rounded-2xl rounded-b-2xl "
            width={1000}
            height={1000}
          />
        </div>
        <div className="w-[13vw] ">
          <Image
            src="/images/SchoolBanner/welhamboyslogo.svg"
           className="absolute inset-0 left-[5%] lg:top-[300px] top-[80%] lg:w-[132px] lg:h-[130px] w-[90px] h-[80px] "
            width={1000}
            height={1000}
            alt="img"
          />
        </div>
      </div>


     <div className="w-[90%] ml-[5%]  mt-[10%] ">
        <div className="relative h-[180px]   xl:h-[180px] md:h-[120px] lg:h-[170px]    w-full  border-b-2  sm:flex sm:justify-between">
          <div className="w-full flex flex-col  lg:gap-5 gap-2">
            <div className="">
              <h1 className="text-[#075D70]  lg:text-[2rem] text-[18px] font-semibold lg:font-bold ">
                Welham Boys School, Dehradun, Uttarakhand
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
                       <GetPrepared/>

          </div>
        </div>
<div className="md:hidden mt-6">
<EnquiryForm/>

</div>
        <div className="space-y-4 w-[90vw]  mt-10 ">
          <div className="">
            <h1 className="text-[#075D70] font-semibold  text-[2rem] ">
              About School
            </h1>
          </div>
          <div>
            <p className="leading-6 w-[88vw] text-[1.15rem] text-justify">
              Welham Boys  School, a prestigious institution in Dehradun, is
              dedicated to nurturing boys into well-rounded individuals.
              Affiliated with the CBSE, it offers a curriculum aligned with
              national standards. The school embraces a diverse community,
              welcoming students from various backgrounds, both from India and
              abroad. It focuses on instilling values such as respect,
              integrity, and responsibility, essential for personal growth and
              global perspective.
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
            <p className="leading-6 w-[88vw] text-[1.15rem] text-justify">
              Welham Boys Admissions are competitive, designed to select
              students who can thrive in the school s dynamic environment. The
              primary entry points are in Classes IV, VI, and XI.
            </p>
          </div>
          <div>
            <p className="text-[#075D70] font-semibold text-[1.4rem] my-4">
              Key Steps:
            </p>
          </div>
          <div>
            <ul className="list-disc   pl-4 space-y-4 text-[1.15rem]">
              <li className="">
                <span className="font-medium"> Open Admission Policy:</span>{" "}
                Welham Boys  School invites students from all communities,
                fostering diversity.
              </li>
              <li>
                <span className="font-medium">Primary Entry Points: </span>
                Classes IV, VI, and XI are critical for comprehensive
                educational development.
              </li>
              <li>
                <span className="font-medium">Mandatory Registration:</span> A
                non-refundable registration fee is required, though it doesn&apos;t
                guarantee admission.
              </li>
              </ul>

              <div>
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left font-medium">
                        Grade
                      </th>
                      <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left font-medium">
                        Age Requirement (as of April 1 of the joining year)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">
                        Class IV
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        8 to 9 years
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">
                        Class VI
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        11 to 12 years
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">
                        Class XI
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        15 to 16 years
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="space-y-4 my-10">
                <div>
                  <h1 className="text-[#075D70] font-semibold text-[2rem]">
                    Assessment and Interaction
                  </h1>
                </div>
                <div>
                  <p className="leading-6 w-[88vw] text-[1.15rem] text-justify">
                    Welham Boys Entrance assessments evaluate proficiency in key
                    subjects to ensure students are prepared for the academic
                    rigors.
                  </p>
                </div>

                <div>
                  <p className="text-[#075D70] font-semibold text-[1.4rem] my-4">
                    Assessment Details:
                  </p>
                </div>
                <div>
                  <ul className="list-disc pl-4 space-y-4 text-[1.15rem]">
                    <li>
                      <span className="font-medium">Classes IV - IX:</span>{" "}
                      English, Hindi, Mathematics, Life Skills.
                    </li>
                    <li>
                      <span className="font-medium">Class XI:</span> Subjects
                      vary by stream (Science, Commerce, Humanities).
                    </li>
                  </ul>

                  <div className="mt-10">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr>
                          <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left font-medium">
                            Grade
                          </th>
                          <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left font-medium">
                            Assessment Dates
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">
                            IV - VI
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            October/November
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">
                            VII - IX
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            January
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">
                            XI
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            April/May
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="my-10 text-[1.15rem]">
                      Successful candidates are invited for an interaction
                      session with their parents. This interaction is crucial
                      for the final selection.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-[#075D70] font-semibold text-[2rem]">
                  Important Dates
                </p>
              </div>
              <div>
                <p className="leading-6 w-[88vw] text-[1.15rem] text-justify">
                  Stay updated with Welham Boys Admissions by noting these key
                  dates:
                </p>
              </div>
              <div className="my-10">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left font-medium">
                        Event
                      </th>
                      <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left font-medium">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">
                        Registration Opens
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        June (for the following academic year)
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">
                        Application Submission Deadline
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        September 30
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">
                        Assessment Dates (Classes IV - VI)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        October/November
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">
                        Assessment Dates (Classes VII - IX)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        January
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">
                        Assessment Dates (Class XI)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        April/May
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">
                        Interaction and Final Selection
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Within one month after the assessment results
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">
                        Offer Letter Dispatch
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        After successful interaction
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
        <div>
          <p className="text-[#075D70] font-semibold text-[2rem]">
            Eligibility Criteria
          </p>
        </div>
        <div>
              <p className="leading-6 w-[88vw] text-[1.15rem] text-justify">
              Welham Boys Admissions require candidates to meet specific eligibility criteria, focusing on age and academic prerequisites.
              </p>
            </div>

            <div>
            <p className="text-[#075D70] font-semibold text-[1.4rem] my-4">
            Academic Requirements for Class XI:
            </p>
          </div>

          <div>
            <ul className="list-disc pl-4 space-y-4 text-[1.15rem]">
              <li>
                <span className="font-medium">Science Stream:</span>{" "}
                Strong foundation in Mathematics and Science.
              </li>
              <li>
                <span className="font-medium">Commerce/Humanities Streams:</span>{" "}
                Proficiency in Mathematics and English.
              </li>
              </ul>
              </div>
            </div>
          </div>

          <div>
          <div>
          <p className="text-[#075D70] font-semibold text-[2rem]">
          Fee Structure
          </p>
        </div>
        <div>
              <p className="leading-6 w-[88vw] text-[1.15rem] text-justify">
              Welham Boys  School offers a comprehensive fee structure that covers tuition, boarding, and extracurricular activities.

              </p>
            </div>
            <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left font-medium">
                      Fee Category
                      </th>
                      <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left font-medium">
                      Amount (INR)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">
                      Registration Fee
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                      Rs. 1,000 
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">
                      Admission Fee
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                      Rs. 15,000
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">
                      Annual Tuition Fee
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                      Rs. 5,70,000
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">
                      Security Fee
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                      Rs. 2,85,000
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">
                      Other Fee Annually
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                      RS. 60,000
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="leading-6 w-[88vw] text-[1.15rem] my-6">
            <span className=" text-[1.25rem] font-medium ">Payment Terms:</span>
            Fees are payable in two installments, with specific deadlines. Late payments may incur additional charges.
          </p>
          <p className="leading-6 w-[88vw] text-[1.15rem] my-6">
            <span className=" text-[1.25rem] font-medium ">Refund Policy:</span>
            The registration and admission fees are non-refundable. Partial refunds of tuition and boarding fees may be considered under specific terms.
          </p>
          </div>
          
        </div>
               <Broucher/>


      </div>

      <div>
        <Faq data={WelhamBoys}/>
      </div>
    </div>
  );
}

export default WelhamBoysPage;

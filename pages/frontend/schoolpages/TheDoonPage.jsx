"use client";
import React from "react";
import Faq from "@/components/frontend/Faqdata";
import Image from "next/image";
import Star from "@/components/frontend/Ratings";
import schoolFAQs from "@/utils/frontend/FaqData";
import GetPrepared from "@/components/frontend/GetPrepared";
import EnquiryForm from "@/components/frontend/EnquiryForm";


const star = [
  {
    id: 1,

    ratingByPerson: 4,
  },
]; 

function TheDoonPage() {
  const TheDoon = schoolFAQs.find(school => school.school === 'TheDoon')?.faqs || [];
  return (
    <div className="h-auto w-[100%] poppins">
      <div className="relative lg:px-[30px] xl:px-[50px]  ">
        <div className=" h-[250px] xl:h-[300px] lg:h-[350px] w-[100%] ">       <Image
            src="/images/SchoolBanner/thedoonframe.svg"
            alt="Descriptive text for screen readers"
           className="w-full lg:h-[400px] h-[250px]  object-cover lg:rounded-2xl rounded-b-2xl "
            width={1000}
            height={1000}
          />
        </div>
        <div className="w-[13vw] ">
          <Image
            src="/images/SchoolBanner/thedoonlogo.svg"
           className="absolute inset-0 left-[5%] lg:top-[300px] top-[80%] lg:w-[132px] lg:h-[130px] w-[90px] h-[80px] "
            width={1000}
            height={1000}
          />
        </div>
      </div>

     <div className="w-[90%] ml-[5%]  mt-[10%] ">
        <div className="relative h-[170px]   xl:h-[180px] md:h-[120px] lg:h-[170px]    w-full  border-b-2  sm:flex sm:justify-between">
          <div className="w-full flex flex-col  lg:gap-5 gap-2">
            <div className="">
              <h1 className="text-[#075D70]  lg:text-[2rem] text-[18px] font-semibold lg:font-bold ">
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
              Founded in 1935, The Doon School is known for its academic
              excellence and focus on holistic education. The school&apos;s mission
              is to groom boys who excel in academics, sports, music, and
              cultural activities, while also demonstrating leadership,
              teamwork, and social responsibility.
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
                <span className="font-medium"> Admission Overview :</span>Doon
                School Admissions are available for Class VII and Class VIII.
                The process is highly competitive, seeking boys who are
                academically strong and willing to stretch themselves in various
                fields.
              </li>
              <li>
                <span className="font-medium">Entrance Examination: </span>The
                Doon School Entrance exam is held every October, assessing
                candidates in English, Mathematics, and General Knowledge. No
                sample papers are provided, but the Admissions Office can offer
                guidance on preparation.
              </li>
              <li>
                <span className="font-medium">Interview and Assessment:</span>{" "}
                In addition to the entrance examination, shortlisted candidates
                are required to attend an interview and assessment process. This
                stage evaluates the applicant&apos;s overall personality,
                including their interests, talents, and potential to contribute
                to the school&apos;s community. The interview is conducted by a
                panel of educators and senior staff members who assess the
                candidate&apos;s suitability for the school&apos;s environment.
                The assessment process is holistic, taking into account the
                candidate&apos;s academic performance, extracurricular
                achievements, and personal qualities.
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
                <span className="font-medium">How to Register:</span>Parents can
                register their sons for Doon School Admissions at any time after
                birth, though early registration is advised for lower fees.
              </li>
              <div className="">
                <ol className="list-decimal list-inside ml-4 mb-6 ">
                  <li>
                    <span className="text-[1.15rem] font-medium">
                      Submission of Birth Certificate:
                    </span>
                    A certified copy of the boy&apos;s birth certificate must be
                    submitted.
                  </li>
                  <li>
                    <span className="text-[1.15rem] font-medium">
                      Payment of Registration Fee:
                    </span>
                    The registration fee varies depending on the age of the boy
                    at the time of registration. The fee structure is detailed
                    in the table below.
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
                      <td className="px-4 py-2 border-b border-gray-300">
                        Up to 3 years
                      </td>
                      <td className="px-4 py-2 border-b border-gray-300">
                        Rs. 12,000
                      </td>
                      <td className="px-4 py-2 border-b border-gray-300">
                        $600
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b border-gray-300">
                        3 – 5 years
                      </td>
                      <td className="px-4 py-2 border-b border-gray-300">
                        Rs. 15,000
                      </td>
                      <td className="px-4 py-2 border-b border-gray-300">
                        $850
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b border-gray-300">
                        5 – 7 years
                      </td>
                      <td className="px-4 py-2 border-b border-gray-300">
                        Rs. 18,500
                      </td>
                      <td className="px-4 py-2 border-b border-gray-300">
                        $1,000
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b border-gray-300">
                        7 – 9 years
                      </td>
                      <td className="px-4 py-2 border-b border-gray-300">
                        Rs. 22,000
                      </td>
                      <td className="px-4 py-2 border-b border-gray-300">
                        $1,300
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b border-gray-300">
                        9 – 11 years
                      </td>
                      <td className="px-4 py-2 border-b border-gray-300">
                        Rs. 29,000
                      </td>
                      <td className="px-4 py-2 border-b border-gray-300">
                        $1,500
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">11 – 13 years</td>
                      <td className="px-4 py-2">Rs. 36,000</td>
                      <td className="px-4 py-2">$1,800</td>
                    </tr>
                  </tbody>
                </table>
                <p className="leading-6 w-[88vw] text-[1.15rem] my-6">
                  Please note that the registration fee is non-refundable and
                  does not guarantee admission. The earlier you register, the
                  lower the fee, so it is beneficial to register your son as
                  soon as possible.
                </p>
              </div>
            </ul>
          </div>
        </div>
        <div className="space-y-4 w-[90vw] mb-10 mt-10">
          <div>
            <h1 className="text-[#075D70] font-semibold text-[2rem]">
              Important Notes on Registration
            </h1>
          </div>
          <div>
            <ul className="list-disc pl-4 space-y-4 text-[1.15rem]">
              <li>
                <span className="font-medium">
                  No Admission After Class VIII:
                </span>
                The Doon School admits new students only into Class VII and
                Class VIII. No admissions are allowed after Class VIII.
              </li>
              <li>
                <span className="font-medium">Communication</span> The school
                maintains regular communication with prospective parents.
                However, it is the responsibility of the parents to update the
                school with any changes in physical address, telephone number,
                or email details.
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-4 w-[90vw] mb-10 mt-10">
          <div>
            <h1 className="text-[#075D70] font-semibold text-[2rem]">
              Important Dates
            </h1>
          </div>
          <p className="leading-6 w-[88vw] text-[1.15rem] font-medium my-6">
            Timeline for Admissions
          </p>
          <div>
            <ul className="list-disc pl-4 space-y-4 text-[1.15rem]">
              <li>
                <span className="font-medium">Registration Opens:</span>
                At eligible age.
              </li>
              <li>
                <span className="font-medium">Entrance Examination Date:</span>{" "}
                October.
              </li>
              <li>
                <span className="font-medium">Interview and Assessment:</span>{" "}
                November-December.
              </li>
              <li>
                <span className="font-medium">Final Admission Decision:</span>{" "}
                January.
              </li>
            </ul>
            <p className="leading-6 w-[88vw] text-[1.15rem] my-6">
              Dates may vary slightly each year, so stay in touch with the
              Admissions Office for the latest updates.
            </p>
          </div>
        </div>

        <div className="space-y-4 w-[90vw] mb-10 mt-10">
          <div>
            <h1 className="text-[#075D70] font-semibold text-[2rem]">
              Eligibility Criteria
            </h1>
          </div>
          <div>
            <ul className="list-disc pl-4 space-y-4 text-[1.15rem]">
              <li>
                <span className="font-medium">Academic Requirements:</span>
                Doon School Admissions prioritizes boys with strong academic
                backgrounds, particularly in English and Mathematics.
              </li>
              <li>
                <span className="font-medium">
                  Extracurricular and Personal Qualities:
                </span>{" "}
                The school looks for well-rounded individuals with interests in
                extracurricular activities like sports, music, and community
                service. Leadership potential and a positive attitude are highly
                valued.
              </li>
              <li>
                <span className="font-medium">Age Criteria:</span>
                <ul>
                  <li>
                    <span className="font-medium">Class VII Admission:</span>11
                    to 12 years old.
                  </li>
                  <li>
                    <span className="font-medium">Class VIII Admission:</span>12
                    to 13 years old.
                  </li>
                </ul>
              </li>
            </ul>
            <p className="leading-6 w-[88vw] text-[1.15rem] my-6">
              Dates may vary slightly each year, so stay in touch with the
              Admissions Office for the latest updates.
            </p>
          </div>
        </div>

        <div className="space-y-4 w-[90vw] mb-10 mt-10">
          <div>
            <h1 className="text-[#075D70] font-semibold text-[2rem]">
              Fees Structure
            </h1>
          </div>
          <div>
            <ul className="list-disc pl-4 space-y-4 text-[1.15rem]">
              <li>
                <span className="font-medium">Annual Fees:</span>The fee
                structure covers various aspects of a student&apos;s education,
                including tuition and boarding.
              </li>
              <div className="">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 border-b border-gray-300 bg-gray-100 text-left">
                        Fee Component
                      </th>
                      <th className="px-4 py-2 border-b border-gray-300 bg-gray-100 text-left">
                        Amount (INR)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 border-b border-gray-300">
                        School Fee
                      </td>
                      <td className="px-4 py-2 border-b border-gray-300">
                        Rs.11,20,000
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b border-gray-300">
                        Admission Fee
                      </td>
                      <td className="px-4 py-2 border-b border-gray-300">
                        Rs. 5,00,000
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b border-gray-300">
                        Security Deposit
                      </td>
                      <td className="px-4 py-2 border-b border-gray-300">
                        Rs. 5,50,000
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b border-gray-300">
                        Incidental Expenses
                      </td>
                      <td className="px-4 py-2 border-b border-gray-300">
                        Rs. 25,000
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="leading-6 w-[88vw] text-[1.15rem] my-6">
                  Please note that the registration fee is non-refundable and
                  does not guarantee admission. The earlier you register, the
                  lower the fee, so it is beneficial to register your son as
                  soon as possible.
                </p>
              </div>
            </ul>
          </div>
        </div>

        <div className="space-y-4 w-[90vw] mb-10 mt-10">
          <div>
            <h1 className="text-[#075D70] font-semibold text-[2rem]">
              Additional Costs
            </h1>
          </div>
          <p className="leading-6 w-[88vw] text-[1.15rem] my-6">
            Apart from the standard fees, there are additional costs that
            parents should be aware of:
          </p>
          <div>
            <ul className="list-disc pl-4 space-y-4 text-[1.15rem]">
              <li>
                <span className="font-medium">Uniforms and Books:</span>
                The cost of uniforms, textbooks, and other academic materials is
                not included in the annual fees.
              </li>
              <li>
                <span className="font-medium">Extracurricular Activities:</span>{" "}
                Fees for certain extracurricular activities, such as sports
                coaching or music lessons, may be charged separately.
              </li>
              <li>
                <span className="font-medium">Medical Expenses: </span> The
                school provides basic medical care, but any additional medical
                expenses may be billed to the parents.
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-4 w-[90vw] mb-10 mt-10">
          <div>
            <h1 className="text-[#075D70] font-semibold text-[2rem]">
              Scholarships and Financial Aid
            </h1>
          </div>
          <p className="leading-6 w-[88vw] text-[1.15rem] my-6">
            The Doon School offers scholarships and financial aid based on merit
            and need. Contact the Admissions Office for details.
          </p>
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
        <Faq data={TheDoon}/>
      </div>
    </div>
  );
}

export default TheDoonPage;

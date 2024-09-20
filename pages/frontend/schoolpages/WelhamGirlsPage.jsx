"use client";
import React from "react";
import Faq from "@/components/frontend/Faqdata";
import Image from "next/image";
import StarRatings from "@/components/frontend/StarRatings";
import schoolFAQs from "@/utils/frontend/FaqData";
import GetPrepared from "@/components/frontend/GetPrepared";
import Broucher from "@/components/frontend/Broucher";
import EnquiryForm from "@/components/frontend/EnquiryForm";
import SchoolCarousel from "../../../components/frontend/SchoolCarousel";



function WelhamGirlsPage() {
  const WelhamGirls =
    schoolFAQs.find((school) => school.school === "WelhamGirls")?.faqs || [];
  return (
    <div className="h-auto w-[100%] poppins ">

      {/* <div className="relative ">
        <div className=" h-[250px] w-[100%]  xl:px-[50px] lg:px-[30px]">
          <Image
            src="/images/SchoolBanner/welhamgirlsframe.svg"
            alt="Descriptive text for screen readers"
            className="w-full lg:h-[400px] h-[250px]  object-cover lg:rounded-2xl rounded-b-2xl   "
            width={1000}
            height={1000}
          />
        </div>
        <div className="w-[13vw] ">
          <Image
            src="/images/SchoolBanner/welhamgirlslogo.svg"
            className="absolute inset-0 left-[5%] lg:top-[300px] top-[80%] lg:w-[132px] lg:h-[130px] w-[90px] h-[80px] "
            width={1000}
            height={1000}
          />
        </div>
      </div> */}
      <SchoolCarousel />    

<div className="w-[90%] ml-[5%] mt-9">
        <div className="relative h-[150px]   xl:h-[150px] md:h-[120px] lg:h-[160px]     w-full  border-b-2  sm:flex sm:justify-between">
          <div className="w-full flex flex-col  lg:gap-5 gap-2">
            <div className="">
              <h1 className="text-[#075D70]  lg:text-[2rem] text-[18px] font-semibold lg:font-bold ">
                Welham Girls School, Dehradun, Uttarakhand
              </h1>
            </div>
            <StarRatings
              lat={30.315152}
              lng={78.0384305}
              schoolName={"Welham Girls' School"}
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
        <div className="space-y-4 w-[90vw]  mt-10 ">
          <div className="">
            <p className="text-[#075D70] font-semibold  text-[2rem] ">
              About  Welham Girls School
            </p>
          </div>
          <div>
            <p className="leading-6 w-[88vw] text-[1.15rem] text-justify">
              Established to empower young women, Welham Girls School has become
              synonymous with holistic education. The school offers classes from
              VI to XII, consistently producing students who excel in academics
              and beyond. Located in the tranquil foothills of the Himalayas, it
              provides an ideal environment for learning. .
            </p>
          </div>
        </div>

        <div className="space-y-4 w-[90vw] my-10 ">
          <div>
            <p className="text-[#075D70] font-semibold text-[2rem]">
              Admission Procedure
            </p>
          </div>
          <div>
            <div>
              <p className="leading-6 w-[88vw] text-[1.15rem] text-justify">
                Welham Girls Admissions are competitive, focusing on academic
                potential and overall personality. The process includes the
                submission of an application, entrance exams, and an interview.
                .
              </p>
            </div>
            <div>
              <p className="text-[#075D70] font-semibold text-[1.4rem] my-4">
                Steps to Admission
              </p>
            </div>
            <ol className="list-decimal pl-4 space-y-4 text-[1.15rem]">
              <li>
                <span className="font-medium">Application Form:</span>
                <div className="mt-2">
                  <ul className="list-disc pl-4 space-y-4">
                    <li>Available on the school&apos;s website.</li>
                    <li>
                      Submission requires a fee of Rs. 20,000 (non-refundable).
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <div>
                  <h2 className="text-lg font-semibold mb-2">
                    Required Documents
                  </h2>
                  <p className="mb-4">
                    The following documents are essential for completing the
                    admission application:
                  </p>

                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left font-medium">
                          Document
                        </th>
                        <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left font-medium">
                          Details
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">
                          Original Birth Certificate
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          Issued by a government authority, verifying the
                          student&apos;s date of birth
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">
                          Previous Academic Records
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          Report cards and transcripts from the student&apos;s
                          current/previous schools
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">
                          Recent Passport-Sized Photographs
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          Standard photos of the student for identification
                          purposes
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">
                          Medical Certificate
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          A health status report from a licensed medical
                          practitioner
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">
                          Transfer Certificate (TC)
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          Issued by the student&apos;s current school,
                          indicating official departure
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">
                          Character Certificate
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          Provided by the current/previous school, attesting to
                          the student&apos;s conduct
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">
                          Migration Certificate
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          Required after Class XI if transferring from another
                          board
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </li>

              <li>
                <span className="font-medium">Online Application Process:</span>
                <div className="mt-2">
                  <ul className="list-disc pl-4 space-y-4">
                    <li>
                      <span className="font-medium">Initial Application:</span>{" "}
                      Visit the Welham Girls School website and click on Online
                      Application Process under the Admission tab. Complete the
                      required details accurately.
                    </li>
                    <li>
                      <span className="font-medium">Email Confirmation:</span>{" "}
                      After submission, you will receive an application number
                      via email.
                    </li>
                    <li>
                      <span className="font-medium">
                        Completing the Registration:
                      </span>{" "}
                      Return to the website, click on Online Registration
                      Process, and enter the application number to proceed with
                      the registration. Upload the required documents and pay
                      the registration fee of Rs. 20,000 (Rs. 1,000 for Class VI
                      to VIII and Rs. 500 for Class XI).
                    </li>
                    <li>
                      <span className="font-medium">Confirmation:</span> A
                      confirmation email will be sent once the registration
                      process is complete.
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <div>
                  <h2 className="text-lg font-semibold mb-2">
                    Entrance Examination
                  </h2>
                  <p className="mb-4  ">
                    The Welham Girls Entrance exam covers English, Mathematics,
                    and General Knowledge designed to assess the academic
                    readiness of applicants.
                  </p>

                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left font-medium">
                          Subject
                        </th>
                        <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left font-medium">
                          Focus Areas
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">
                          English
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          Grammar, comprehension, and essay writing skills.
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">
                          Mathematics
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          Arithmetic, geometry, and algebra.
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">
                          General Knowledge
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          Current affairs, historical events, and basic
                          scientific principles.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="my-4">
                    <ul className="list-disc pl-4 space-y-4">
                      <li>
                        {" "}
                        <span className="font-medium">
                          Aptitude/Proficiency Test:
                        </span>
                        In addition to the entrance exam, an
                        Aptitude/Proficiency Test is conducted to evaluate the
                        overall capabilities of the students typically takes
                        place in November/December.
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li>
                <span className="font-medium">
                  Interview and Final Selection
                </span>
                <div className="mt-2">
                  <ul className="list-disc pl-4 space-y-4">
                    <li>
                      <span className="font-medium">Selection Process:</span>
                      Shortlisted candidates are invited for an interview with
                      the admissions committee
                    </li>
                    <li>
                      <span className="font-medium">Notification</span>
                      Successful candidates receive official admission
                      confirmation after the interview process.
                    </li>
                  </ul>
                </div>
              </li>
            </ol>
          </div>
        </div>

        <div className="space-y-4 w-[90vw] my-10">
          <div>
            <p className="text-[#075D70] font-semibold text-[2rem]">
              Preference for Admission
            </p>
            <p className="my-4 pl-2 leading-6 w-[88vw] text-[1.15rem]">
              Welham Girls School gives preference to:
            </p>
          </div>

          <ul className="list-disc ml-6 space-y-4 leading-6 w-[88vw] text-[1.15rem]">
            <li>
              Daughters of transferable Government officials and Armed Forces
              personnel.
            </li>
            <li>
              Girls whose mothers have studied in the school for at least four
              years or have passed out at the end of Class XII.
            </li>
            <li>Siblings currently studying at the school.</li>
          </ul>
        </div>

        <div>
          <p className="text-primary02 text-[2rem] font-semibold mb-4">
            Required Documents
          </p>
          <p className="mb-6 ml-4 leading-6 w-[88vw] text-[1.15rem]">
            Keep track of these important dates for a smooth Welham Girls
            Admissions process:
          </p>

          <table className="w-full border-collapse border border-gray-300 ml-4">
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
                  Application Deadline
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  November (usually)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">
                  Entrance Exam Date
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  January (typically)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">
                  Interview Schedule
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  February (for shortlisted candidates)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">
                  Admission Confirmation
                </td>
                <td className="border border-gray-300 px-4 py-2">March</td>
              </tr>
            </tbody>
          </table>

          <p className="leading-6 w-[88vw] text-[1.15rem] my-6">
            <span className=" text-[1.25rem] font-medium ">Note:</span>
            Dates may vary always check the official website for updates
          </p>
        </div>

        <div>
          <p className="text-primary02 text-[2rem] font-semibold mb-4">
            Eligibility Criteria
          </p>
          <p className="mb-6 ml-4 leading-6 w-[88vw] text-[1.15rem]">
            Eligibility for Welham Girls Admissions depends on the student s age
            and academic performance
          </p>

          <table className="w-full border-collapse border border-gray-300 ml-4">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left font-medium">
                  Class
                </th>
                <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left font-medium">
                  Age Eligibility
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">
                  Class VI
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  10-11 years by April 1st of the year of admission
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">
                  Class VII
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  11-12 years by April 1st of the year of admission
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">
                  Class VIII
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  12-13 years by April 1st of the year of admission
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">
                  Class IX
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  13-14 years by April 1st of the year of admission
                </td>
              </tr>
            </tbody>
          </table>

          <p className="leading-6 w-[88vw] text-[1.15rem] my-6">
            In addition to age requirements, students are expected to have
            strong academic records and demonstrate good character and conduct.
          </p>
        </div>

        <div>
          <p className="text-primary02 text-[2rem] font-semibold mb-4">
            Fee Structure
          </p>
          <p className="mb-6 ml-4 leading-6 w-[88vw] text-[1.15rem]">
            The fee structure for Welham Girls School is as follows:
          </p>

          <table className="w-full border-collapse border border-gray-300 ml-4">
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
                  Annual School Fees
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Rs. 9,35,000
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">
                  Admission Fees
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Rs. 1,00,000 (one-time)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">
                  Security Deposit
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Rs. 4,67,500 (refundable)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">
                  Imprest Deposit
                </td>
                <td className="border border-gray-300 px-4 py-2">Rs. 40,000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">
                  Uniform Deposit
                </td>
                <td className="border border-gray-300 px-4 py-2">Rs. 20,000</td>
              </tr>
            </tbody>
          </table>

          <p className="leading-6 w-[88vw] text-[1.15rem] my-6">
            <span className=" text-[1.25rem] font-medium ">Note:</span>
            Fees are subject to revision; please confirm on the official website
          </p>
        </div>

        <div className="space-y-4 w-[90vw] my-10">
          <div>
            <p className="text-[#075D70] font-semibold text-[2rem]">
              Syllabus Pattern
            </p>
            <p className="my-4 pl-2 leading-6 w-[88vw] text-[1.15rem]">
              The syllabus for the Welham Girls Entrance exam is tailored to
              assess academic readiness:
            </p>
          </div>

          <ul className="list-disc ml-6 space-y-4 leading-6 w-[88vw] text-[1.15rem]">
            <li>
              <span className="font-medium">English:</span>
              Focuses on grammar, comprehension, and essay writing
            </li>
            <li>
              <span className="font-medium">Mathematics:</span>
              Covers arithmetic, geometry, and algebra.
            </li>
            <li>
              <span className="font-medium">General Knowledge:</span>
              Includes current affairs and basic scientific principles.
            </li>
          </ul>
        </div>

        <div className="space-y-4 w-[90vw]  my-10 ">
          <div className="">
            <p className="text-[#075D70] font-semibold  text-[2rem] ">
              Why Choose Welham Girls School?
            </p>
          </div>
          <div>
            <p className="leading-6 w-[88vw] text-[1.15rem] text-justify">
              Welham Girls School offers a balanced education emphasizing
              academic excellence, leadership, and moral values. The
              school&apos;s strong alumni network and commitment to holistic
              development make it a top choice for parents considering Welham
              Girls Admissions.
            </p>
          </div>
        </div>

        <Broucher
          pdfLink={
            "https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/brochure%2FWELHAM%20ENTRANCEExamBrochure.pdf?alt=media&token=83196ac2-120d-47a1-afb0-037bf25848d1"
          }
        />
      </div>

      <div>
        <Faq data={WelhamGirls} />
      </div>
    </div>
  );
}

export default WelhamGirlsPage;

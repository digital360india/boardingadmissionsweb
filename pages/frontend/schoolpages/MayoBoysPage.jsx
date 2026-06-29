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
import { FaFilePdf } from "react-icons/fa";
import Formontact from "@/components/frontend/FormContacts";
import ContactForm from "@/components/frontend/ContactForms";

const syllabusData = [
  {
    name: "Online CAA Syllabus MCGS",
    url: "https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/boardingadmission%2FOnline%20CAA%20Syllabus%20MCGS.pdf?alt=media&token=ffd3eb85-d368-4b5e-802a-7748ecb9933c",
  },
];
const schoolName = "Mayo Boys School_Brochure";

function MayoBoysPage() {
  const MayoBoys =
    schoolFAQs.find((school) => school.school === "MayoBoys")?.faqs || [];
  return (
    <div className="h-auto w-[100%] poppins ">
      {/* <div className="relative lg:px-[30px] xl:px-[50px]  ">
        <div className=" h-[250px] xl:h-[300px] lg:h-[350px] w-[100%] ">    
             <Image
            src="/images/SchoolBanner/mayoboys.svg"
            alt="Descriptive text for screen readers"
           className="w-full lg:h-[400px] h-[250px]  object-cover lg:rounded-2xl rounded-b-2xl "
            width={1000}
            height={1000}
          />
        </div>
        <div className="w-[13vw] ">
          <Image
            src="/images/SchoolBanner/mayoboyslogo.svg"
           className="absolute inset-0 left-[5%] lg:top-[300px] top-[80%] lg:w-[132px] lg:h-[130px] w-[90px] h-[80px] "
            width={1000}
            height={1000}
          />
        </div>
      </div> */}
      <SchoolCarousel />
      <div className="w-[90%] ml-[5%] mt-6">
        <div className="relative h-[150px]   xl:h-[150px] md:h-[120px] lg:h-[170px]    w-full  border-b-2  sm:flex sm:justify-between">
          <div className="w-full flex flex-col  lg:gap-5 gap-2">
            <div className="">
              <h1 className="text-[#075D70]  lg:text-[2rem] text-[18px] font-semibold lg:font-bold ">
                Mayo Boys School, Ajmer, Rajasthan
              </h1>
            </div>
            <div className="flex text-center gap-3">
              <StarRatings
                lat={26.4460952}
                lng={74.6494257}
                schoolName={"Mayo College Ajmer"}
              />

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
            </div>

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
          {/* <EnquiryForm /> */}
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>

        <div className="md:flex md:justify-between">
          <div className="space-y-4 w-[90vw]  mt-10 ">
            <div className="">
              <h1 className="text-[#075D70] font-semibold  text-[1.5rem] md:text-[2rem] ">
                About Mayo Boys School
              </h1>
            </div>
            <div>
              <p className="leading-6 w-[88vw] md:w-[50vw] text-[14px] md:text-[1.15rem] text-justify flex flex-col space-y-3">
                <span>
                  Mayo Boys School - Mayo College in Ajmer, Rajasthan, is an
                  all-boys residential institution that has played a significant
                  role in the history of Indian education. It is one of the
                  country&apos;s premier schools, known for educating young
                  Indians since its inception by the British Viceroy, the Earl
                  of Mayo, in 1875. Referred to by many as "The Eton of the
                  East", Mayo College was initially meant for the children of
                  India&apos;s princely families.
                </span>
                <span>
                  The Mayo College campus sprawls across a vast, historically
                  significant plot of land at the foot of the Madar hills, on
                  the city&apos;s fringes. Students in Classes IV to XII attend
                  the school, with the option to study either the CBSE
                  curriculum or the Cambridge curriculum (CAIE/IGCSE). The boys
                  in the institution get an extremely well-rounded,
                  multidisciplinary education, which is among the finest India
                  has to offer - polo, horse-riding, golf, shooting, and various
                  popular sports can be played here. The admission process for
                  the school remains a highly sought-after event each year for
                  the legacy, the discipline it imbues in its students, and its
                  focus on fostering leaders among the Mayoites.
                </span>
                <span>
                  The girls&apos; school, a mirror to the boys&apos;
                  institution, is just as renowned. Combined with colonial-era
                  structures, cutting-edge facilities and a vast network of
                  former pupils who&apos;ve gained much success, the school
                  still ranks as one of the very best schools for admissions
                  among all of India&apos;s best boarding schools in the
                  country, under the CBSE affiliation.
                </span>
              </p>
            </div>
          </div>

          <div className="md:hidden block">
            <Image
              src="/schoolimg3.png"
              className="w-full h-full pt-8"
              width={1000}
              height={1000}
              alt="svg"
            />
          </div>

          <div className="hidden md:flex items-center justify-center">
            <div>
            <EnquiryForm />
            </div>
          </div>
        </div>

        {/* Admission Procedure */}
        <div className="space-y-4 w-[90vw] my-10">
          <h1 className="text-[#075D70] font-semibold text-[1.5rem] md:text-[2rem]">
            Admission Procedure
          </h1>
          <p className="leading-6 w-[88vw] text-[14px] md:text-[1.15rem]">
            Mayo Boys&apos; Admissions admits meritorious students in academics
            and extracurricular activities, besides demonstrating qualities in
            leadership. Here, you are provided with a quick guide on the Mayo
            College, Ajmer, admission process for classes IV-XI.
          </p>
          <h2 className="text-[#075D70] font-semibold text-[1.5rem] md:text-[2rem] my-4">
            Steps to Admission
          </h2>
          <ol className="list-decimal pl-4 space-y-4 text-[1.15rem]">
            <li>
              <span className="font-medium ">Application Form</span>
              <ul className="list-disc pl-4 mt-2 space-y-4">
                <li className="text-[14px] md:text-[1.15rem]">
                  <span className="font-medium">Registration:</span> All
                  aspiring students must register on the official website of
                  Mayo College first. The earlier they get registered, the
                  higher the chances are to secure a seat, because seats are
                  limited and students from PAN India apply for admission at
                  Mayo&apos;s
                </li>
              </ul>
            </li>
            <li>
              <span className="font-medium">
                Required Documents:{" "}
                <span className="text-[14px] md:text-[1.15rem] font-normal">
                  Be prepared with
                </span>
              </span>
              <ul className="list-disc pl-4 mt-2 space-y-4">
                <li className="text-[14px] md:text-[1.15rem]">
                  Student&apos;s birth certificate
                </li>
                <li className="text-[14px] md:text-[1.15rem]">
                  A copy of the current year&apos;s progress/report cards, class
                  tests, and the last class&apos;s result sheet;
                </li>
                <li className="text-[14px] md:text-[1.15rem]">
                  Transfer certificate of the previous school (if transferred
                  from one),
                </li>
                <li className="text-[14px] md:text-[1.15rem]">
                  2-4 recent passport-size colour photos.
                </li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Online Application Process</span>
              <ul className="list-disc pl-4 mt-2 space-y-4">
                <li className="text-[14px] md:text-[1.15rem]">
                  <span className="font-medium">Submission:</span> Submit the
                  filled form along with all the required documents and fee on
                  the designated form submission portal.
                </li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Mayo Boys Entrance Exam</span>
              <ul className="list-disc pl-4 mt-2 space-y-4">
                <li className="text-[14px] md:text-[1.15rem]">
                  <span className="font-medium">Common Aptitude Analysis:</span>{" "}
                  All the aspiring students give the common aptitude analysis on
                  maths, Hindi and English. Details regarding the format and
                  dates of the entrance exam are notified by the institution on
                  an annual basis; always enquire from the admission office of
                  Mayo College to be sure of the currently effective dates.
                </li>
              </ul>
            </li>
            <li>
              <span className="font-medium">
                Interview and Final Selection :{" "}
              </span>
              After analysing the performance of the candidates in the common
              aptitude analysis, shortlisting of candidates takes place, and
              they get invited for a personal interview along with their
              parents. Performance in the entrance exam and personal interviews
              of both the candidate and parents are considered for final
              selection. In class XI, it depends mainly on the result of the
              class X board examination and, in rare cases, on the entrance exam
              as well.
            </li>
          </ol>
        </div>

        {/* Fees Structure */}
        <div className="space-y-4 w-[90vw] my-10">
          <h1 className="text-[#075D70] font-semibold text-[1.5rem] md:text-[2rem]">
            Fees Structure
          </h1>
          <p className="leading-6 w-[88vw] text-[14px] md:text-[1.15rem]">
            A detailed description of Mayo Boys&apos; admissions fees: A variety
            of fees must be paid for your child to secure their admission and
            board, along with meeting other incidental costs related to the
            education and stay at Mayo College Boys School. The fee components,
            as detailed below, may vary and will change periodically; therefore,
            you are strongly recommended to reconfirm the current Mayo College
            fee structure by yourself before starting the admission process.
          </p>
          <div className="mt-10 text-[14px] md:text-[1.1rem] overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 ">
              <thead>
                <tr className="f">
                  <th className="border font-semibold border-gray-300 px-4 py-2 bg-gray-100 text-left">
                    Particulars
                  </th>
                  <th className="border font-semibold border-gray-300 px-4 py-2 bg-gray-100 text-left ">
                    Indian resident/NRI/OCI (AMOUNT IN Rupees)
                  </th>
                  <th className="border font-semibold border-gray-300 px-4 py-2 bg-gray-100 text-left ">
                    Duration
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">
                    School Fee (Annual)
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Rs. 11,52,000
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Per Annum
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">
                    Caution Money
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Rs. 5,76,000
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    	One Time
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">
                    Admission Fee
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Rs. 2,50,000
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    One Time
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">
                    One Time IT Fee
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Rs. 42,000
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    One Time
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">
                    Imprest Money
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Rs. 80,000
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    One Time
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">
                    Uniform Advance
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Rs. 25,000
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    One Time
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">
                    Prospectus and Sample papers
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Rs. 1000
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    -
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">
                    Registration Fee
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Rs. 25,000
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    -
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Important Dates for Mayo Boys Admissions */}
        <div className="space-y-4 w-[90vw] my-10">
          <div>
            <p className="text-[#075D70] font-semibold text-[1.5rem] md:text-[2rem]">
              Important Dates for Mayo Boys Admissions
            </p>
          </div>
          <div>
            <ol className="list-decimal pl-4 space-y-6 text-[14px] md:text-[1.15rem]">
              <li>
                <span className="font-medium">Registration</span>

                <ul className="mt-2 space-y-3">
                  <li>
                    <span className="font-medium">Timeline:</span> August -
                    September 30
                  </li>

                  <li>
                    <span className="font-medium">Key Details:</span>
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                      <li>Parents are notified in August.</li>
                      <li>Last date to apply: September 30.</li>
                      <li>
                        Fill and submit the online registration form (confirm
                        age eligibility).
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li>
                <span className="font-medium">Mayo Boys Entrance Exam</span>

                <ul className="mt-2 space-y-3">
                  <li>
                    <span className="font-medium">Month:</span> October
                    (Annually)
                  </li>

                  <li>
                    <span className="font-medium">Key Details:</span>
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                      <li>Exam Name: Aptitude Analysis (CAA).</li>
                      <li>Format: Offline (Pen-Paper Test).</li>
                      <li>
                        Test Centres: Multiple locations arranged across India.
                      </li>
                      <li>Subjects: English and Mathematics.</li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li>
                <span className="font-medium">Interviews</span>

                <ul className="mt-2 space-y-3">
                  <li>
                    <span className="font-medium">Month:</span> November and
                    December
                  </li>

                  <li>
                    <span className="font-medium">Key Details:</span>
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                      <li>
                        Shortlisted candidates and parents appear for
                        interaction.
                      </li>
                      <li>
                        Interview Panel: Education Committee, including the
                        Principal of Mayo College.
                      </li>
                      <li>
                        Overseas candidates can attend online (subject to
                        approval).
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li>
                <span className="font-medium">New Academic Session</span>

                <ul className="mt-2 space-y-3">
                  <li>
                    <span className="font-medium">Start Date:</span> First Week
                    of April
                  </li>
                  <li>
                    The new academic session begins in April, with classes
                    running until March of the following year.
                  </li>

                  <li className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 ">
                      <thead>
                        <tr className="f">
                          <th className="border font-semibold border-gray-300 px-2 md:px-4 py-2 bg-gray-100 text-left">
                            Stage
                          </th>
                          <th className="border font-semibold border-gray-300 px-2 md:px-4 py-2 bg-gray-100 text-left ">
                            Month
                          </th>
                          <th className="border font-semibold border-gray-300 px-2 md:px-4 py-2 bg-gray-100 text-left ">
                            Activity
                          </th>
                          <th className="border font-semibold border-gray-300 px-2 md:px-4 py-2 bg-gray-100 text-left ">
                            Deadline
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-2 md:px-4 py-2 font-semibold">
                            Registration
                          </td>
                          <td className="border border-gray-300 px-2 md:px-4 py-2">
                            Aug-Sep
                          </td>
                          <td className="border border-gray-300 px-2 md:px-4 py-2">
                            Form Filling
                          </td>
                          <td className="border border-gray-300 px-2 md:px-4 py-2">
                            Sep 30
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 md:px-4 py-2 font-semibold">
                            Entrance Exam
                          </td>
                          <td className="border border-gray-300 px-2 md:px-4 py-2">
                            October
                          </td>
                          <td className="border border-gray-300 px-2 md:px-4 py-2">
                            CAA Test
                          </td>
                          <td className="border border-gray-300 px-2 md:px-4 py-2">
                            Variable
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 md:px-4 py-2 font-semibold">
                            Interviews
                          </td>
                          <td className="border border-gray-300 px-2 md:px-4 py-2">
                            Nov-Jans
                          </td>
                          <td className="border border-gray-300 px-2 md:px-4 py-2">
                            Interaction
                          </td>
                          <td className="border border-gray-300 px-2 md:px-4 py-2">
                            Variable
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </div>

        {/* why choose mayo boys school */}
        <div className="space-y-4 w-[90vw] my-10">
          <h1 className="text-[#075D70] font-semibold text-[1.5rem] md:text-[2rem]">
            Why Choose Mayo Boys School
          </h1>

          <ol className="list-decimal pl-4 space-y-4 text-[1.15rem]">
            <li>
              India&apos;s most experienced and revered all-boys boarding school (almost 150 years old).
            </li>
            <li>
              Robust CBSE-led education system coupled with global Cambridge streams.
            </li>
            <li>
              Broad range of co-curricular activities, such as polo, horse riding, golf, shooting, swimming, athletics, etc. 
            </li>
            <li>
              Twelve boarding houses, each equipped with dining facilities, a library, a museum and an on-campus doctor.
            </li>
            <li>
              Opportunities for global learning via Round Square exchange programmes.
            </li>
            <li>
              Prestigious network of “Mayoites” in the world of business, public service and the arts.
            </li>
          </ol>
        </div>

        <div className="md:hidden block">
          <Image
            src="/schoolimage2.png"
            className="w-full h-full pt-8"
            width={1000}
            height={1000}
            alt="svg"
          />
        </div>

        <div className="md:hidden mt-6">
          {/* <EnquiryForm /> */}
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>

        <div className="bg-white ">
          <h1 className="text-[#075D70] font-semibold text-[1.75rem] sm:text-[2rem] mb-4">
            Download Syllabus
          </h1>
          <div className="grid sm:grid-cols-2 gap-4">
            {syllabusData.map((syllabus, index) => (
              <>
                <a
                  href={syllabus.url}
                  download
                  className="text-[#075D70] font-medium text-lg hover:underline"
                  target="_blank"
                >
                  <div
                    key={index}
                    className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md cursor-pointer transition-all duration-300 hover:shadow-xl hover:bg-gray-200"
                  >
                    <FaFilePdf className="text-red-600 text-4xl mr-3" />
                    {syllabus.name}
                  </div>
                </a>
              </>
            ))}
          </div>
        </div>

        {/* <Broucher
          pdfLink={
            "https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/brochure%2FEntranceExamBrochure.pdf?alt=media&token=a62ae681-e33f-4129-801c-1087c4530214"
          }
        /> */}
        <Broucher
          pdfLink={
            "https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/brochure%2FEntranceExamBrochure.pdf?alt=media&token=a62ae681-e33f-4129-801c-1087c4530214"
          }
          schoolName={schoolName}
        />
      </div>

      <div className="mt-10">
        <Faq data={MayoBoys} />
      </div>

      <div className="lg:hidden block ">
        <Formontact />
      </div>
    </div>
  );
}

export default MayoBoysPage;

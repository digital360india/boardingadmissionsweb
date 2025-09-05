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

const syllabusData = [
  {
    name: "scindia-girls-school",
    url: "https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/boardingadmission%2FScindia%20CLASS%20VIII%20Syllabus.docx?alt=media&token=04e3495b-64ad-46e1-9158-961eb91f038c",
  },
];

const pdfLink =
  "https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/brochure%2FSKVENTRANCE%20ExamBrochure.pdf?alt=media&token=49068628-3c47-46a6-bce6-f7e12568d268";

function ScindiaSchoolPage() {
  const Scindia =
    schoolFAQs.find((school) => school.school === "Scindia")?.faqs || [];
  return (
    <div className="h-auto w-[100%] poppins ">
      {/* 
      <div className="relative lg:px-[30px] xl:px-[50px]  ">
        <div className=" h-[250px] xl:h-[300px] lg:h-[350px] w-[100%] ">    
             <Image
            src="/images/SchoolBanner/scindia.svg"
            alt="Descriptive text for screen readers"
           className="w-full lg:h-[400px] h-[250px]  object-cover lg:rounded-2xl rounded-b-2xl "
            width={1000}
            height={1000}
          />
        </div>
        <div className="w-[13vw] ">
          <Image
            src="/images/SchoolBanner/scindialogo.svg"
           className="absolute inset-0 left-[5%] lg:top-[300px] top-[80%] lg:w-[132px] lg:h-[130px] w-[90px] h-[80px] "
            width={1000}
            height={1000}
          />
        </div>
      </div> */}
      <SchoolCarousel />
      <div className="w-[90%] ml-[5%] mt-6">
        <div className="relative h-[170px]   xl:h-[180px] md:h-[120px] lg:h-[170px]    w-full  border-b-2  sm:flex sm:justify-between">
          <div className="w-full flex flex-col  lg:gap-5 gap-2">
            <div className="">
              <h1 className="text-[#075D70]  lg:text-[2rem] text-[18px] font-semibold lg:font-bold ">
                Scindia School, Gwalior, Madhya Pradesh
              </h1>
            </div>
            <StarRatings
              lat={26.2179713}
              lng={78.1569787}
              schoolName={"The Scindia School"}
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
                About Scindia Kanya Vidyalaya
              </h1>
            </div>
            <div>
              <p className="leading-6 w-[88vw]  md:w-[45vw] text-[14px] md:text-[1.15rem] text-justify">
                Scindia Kanya Vidyalaya (SKV), situated in the historic city of
                Gwalior, is not just another educational institution; it&apos;s
                a nurturing environment that empowers girls through quality
                education. Established in 1956 by the Late Rajmata of Gwalior,
                Shrimant Vijaya Raje Scindia, SKV is celebrated as one of
                India&apos;s leading residential schools. The school was
                inaugurated by z. Rajendra Prasad, the then President of India,
                marking its significant place in the educational landscape. At
                SKV, the aim is not merely to educate but to cultivate
                confident, capable young women ready to face the challenges of
                the modern world. The curriculum is thoughtfully designed to
                offer experiential learning, equipping students with essential
                life skills, leadership qualities, and moral values. These
                aspects set Scindia Kanya Vidyalaya apart from conventional
                institutions, making it a cherished choice for many families.
              </p>
            </div>
          </div>
          <div className=" hidden md:block mt-10">
            <EnquiryForm />
          </div>
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

        <div className="space-y-4 w-[90vw] mb-10 mt-10">
          <div>
            <h1 className="text-[#075D70] font-semibold text-[1.5rem] md:text-[2rem]">
              Scindia Admissions Process
            </h1>
          </div>
          <div>
            <p className="leading-6 w-[88vw] text-[14px] md:text-[1.15rem] text-justify">
              Scindia School Admissions are open for girls in classes VI to IX
              and XI. The admission process is designed to identify potential
              and provide growth opportunities. Each year, the school conducts
              an Aptitude Assessment followed by an Interaction to evaluate
              applicants.
            </p>
          </div>
          <div>
            <ol className="list-decimal pl-4 space-y-4 text-[1.15rem]">
              <li>
                <span className="font-semibold">Eligibility Criteria:</span>
                <div className="mt-2">
                  <ul className="list-disc pl-4 space-y-4 text-[14px] md:text-[1.15rem]">
                    <li>
                      For Class VI, students must be at least 10½ years old by
                      the first week of April in the admission year.
                    </li>
                    <li>
                      The Aptitude Assessment focuses on English and Mathematics
                      for classes VI to IX, while Class XI candidates are
                      assessed based on the Class X syllabus.
                    </li>
                  </ul>
                </div>
              </li>
            </ol>
            <div>
              <p className="text-[#075D70] font-semibold text-[1.5rem] md:text-[2rem] my-4">
                Steps to Admission
              </p>
            </div>
            <ol className="list-decimal pl-4 space-y-4 text-[1.15rem]">
              <li>
                <span className="font-semibold">Application Form</span>
                <div className="mt-2">
                  <ul className="list-disc pl-4 space-y-4 text-[14px] md:text-[1.15rem]">
                    <li>
                      Begin the process by accessing the online application form
                      available on the SKV website.
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <span className="font-semibold">Required Documents</span>
                <div className="mt-2">
                  <ul className="list-disc pl-4 space-y-4 text-[14px] md:text-[1.15rem]">
                    <li>
                      Prepare the following documents for registration:
                      <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>Birth certificate</li>
                        <li>Aadhar Card</li>
                        <li>Latest mark sheet</li>
                        <li>Samagra ID (for Madhya Pradesh students)</li>
                        <li>Passport-size photograph</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <span className="font-semibold">Entrance Examination</span>
                <div className="mt-2">
                  <ul className="list-disc pl-4 space-y-4 text-[14px] md:text-[1.15rem]">
                    <li>
                      Applicants will undergo an Aptitude Assessment, an
                      essential component of the selection process.
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <span className="font-semibold">
                  Interview and Final Selection
                </span>
                <div className="mt-2">
                  <ul className="list-disc pl-4 space-y-4 text-[14px] md:text-[1.15rem]">
                    <li>
                      Successful candidates will then participate in an
                      Interaction session, after which the final selection is
                      based on their performance and seat availability.
                    </li>
                  </ul>
                </div>
              </li>
            </ol>
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

          <div>
            <p className="text-primary02 text-[1.5rem] md:text-[2rem] font-semibold mb-4">
              Fee Structure
            </p>
            <p className="mb-6 ml-4 leading-6 w-[88vw] text-[14px] md:text-[1.15rem]">
              Grasping the Scindia School Fees is essential for budgeting your
              child&apos;s education. The fee structure is crafted to provide
              transparency for parents.
            </p>

            <table className="w-full border-collapse border border-gray-300 ml-2 text-[14px] md:text-[1.1rem]">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left font-semibold">
                    Category
                  </th>
                  <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left font-semibold">
                    Amount (INR)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">
                    Annual School Fee (Non-Refundable)
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Rs.6,84,000
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">
                    Imprest Deposit
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Rs. 80,000
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">
                    Total Annual Fees
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Rs. 7,64,000
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="mt-2">
              <ul className="list-disc pl-4 space-y-4 text-[14px] md:text-[1.15rem]">
                <li>
                  Installments Breakdown
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>
                      <span className="font-semibold">1st Instalment:</span>1st
                      Term Fees + Imprest Deposit = 4,54,000
                    </li>
                    <li>
                      <span className="font-semibold">2nd Instalment:</span>2nd
                      Term Fees + Replenished Imprest Deposit = 3,10,000
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <p className="leading-6 w-[88vw] text-[14px] md:text-[1.15rem] my-6">
              {/* <span className=" text-[1rem] font-semibold ">Note: </span> */}
              For detailed information on the fee structure, including specifics
              for new admissions and existing students, please check the
              official SKV website or reach out to the admissions office.
            </p>
          </div>
          <div className="">
            <p className="text-[#075D70] font-semibold  text-[1.5rem] md:text-[2rem] ">
              Important Dates
            </p>
          </div>
          <div>
            <p className="leading-6 w-[88vw] text-[14px] md:text-[1.15rem] text-justify">
              Keeping track of important dates is crucial for prospective
              students and their families:
            </p>
          </div>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              <span className="font-semibold">Registration Begins:</span>July
            </li>
            <li>
              <span className="font-semibold">Entrance Assessments:</span>{" "}
              November (for classes VI-IX) and December (for Class XI)
            </li>
            <li>
              <span className="font-semibold">Final Admission Offers:</span>
              January
            </li>
            <li>
              <span className="font-semibold">
                Commencement of the Academic Year:{" "}
              </span>
              April
            </li>
          </ul>
          <p className="leading-6 w-[88vw] text-[14px] md:text-[1.15rem] my-6">
            {/* <span className=" text-[1rem] font-semibold ">Note: </span> */}
            These dates ensure a smooth application process and timely
            preparations.
          </p>

          <div className="">
            <p className="text-[#075D70] font-semibold  text-[1.5rem] md:text-[2rem] ">
              Syllabus Pattern
            </p>
          </div>
          <div>
            <p className="leading-6 w-[88vw] text-[14px] md:text-[1.15rem] text-justify">
              Scindia Kanya Vidyalaya offers a balanced curriculum that
              encompasses core subjects vital for academic success and personal
              growth. The syllabus is crafted to cater to various grade levels
              and includes:
            </p>
          </div>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              <span className="font-semibold">Languages:</span> English, Hindi
            </li>
            <li>
              <span className="font-semibold">Mathematics:</span>Emphasizing
              analytical skills and problem-solving
            </li>
            <li>
              <span className="font-semibold">General Knowledge (GK):</span>
              Fostering awareness of current affairs
            </li>
            <li>
              <span className="font-semibold">Science: </span>Encouraging
              inquiry and hands-on experimentation
            </li>
          </ul>
          <p className="leading-6 w-[88vw] text-[14px] md:text-[1.15rem] my-6">
            {/* <span className=" text-[1rem] font-semibold ">Note: </span> */}
            This comprehensive syllabus prepares students not just for exams but
            also instills a lifelong love for learning and discovery.
          </p>
        </div>

      
        <div className="">
          <p className="text-[#075D70] font-semibold  text-[1.5rem] md:text-[2rem] ">
            Why Choose Scindia Kanya Vidyalaya?
          </p>
        </div>
        <div>
          <p className="leading-6 w-[88vw] md:my-4 text-[14px] md:text-[1.15rem] text-justify">
            Choosing the right school for your daughter is a significant
            decision, and Scindia Kanya Vidyalaya shines for its commitment to
            excellence and holistic development. Here&apos;s why parents should
            consider SKV:
          </p>
        </div>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>
            <span className="font-semibold">Experienced Faculty:</span>A team of
            passionate educators dedicated to fostering a nurturing learning
            environment.
          </li>
          <li>
            <span className="font-semibold">Holistic Development:</span> Focus
            on extracurricular activities, leadership, and life skills.
          </li>
          <li>
            <span className="font-semibold">Strong Alumni Network:</span>
            Successful graduates who serve as role models for current students.
          </li>
          <li>
            <span className="font-semibold">Science: </span>Encouraging inquiry
            and hands-on experimentation
          </li>
        </ul>
        <div className="">
          <p className="text-[#075D70] font-semibold  text-[1.5rem] md:text-[2rem] ">
            Ready to Enroll?
          </p>
        </div>
        <div>
          <p className="leading-6 md:my-4 w-[88vw] text-[14px] md:text-[1.15rem] text-justify">
            Join us today at Boarding Admissions to excel in entrance exams for
            top boarding schools across India. Empower your child&apos;s future
            with the right preparation and support!
          </p>
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
            "https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/brochure%2FSKVENTRANCE%20ExamBrochure.pdf?alt=media&token=49068628-3c47-46a6-bce6-f7e12568d268"
          }
        /> */}

        <div className="w-full flex justify-start mt-10">
          <div className="rounded-xl shadow-md p-4 w-[400px]  relative ">
            <div className="bg-white rounded-md overflow-hidden mb-3 h-[450px]">
              <iframe
                src={`https://docs.google.com/gview?url=${encodeURIComponent(
                  pdfLink
                )}&embedded=true`}
                className="w-full h-[350px] pointer-events-none"
                style={{ border: "none" }}
                title="PDF Preview"
                scrolling="no"
              />
              <div className="px-2 mt-2">
                <p className="font-semibold text-md">
                  Scindia-Girls-School_Brochure
                </p>
              </div>
            </div>

            <div className="relative flex justify-center w-[250px] ml-14 ">
              <div className="absolute inset-0 rounded-md bg-[#075D70] opacity-10 animate-scale-pulse"></div>
              <a
                href={pdfLink}
                download="WELHAM_ENTRANCE_Exam_Brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="relative"
              >
                <button className="bg-[#075D70]  text-white py-2 px-5 sm:py-3 sm:px-6 rounded-md text-base sm:text-lg font-semibold transition">
                  Download Brochure
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Faq data={Scindia} />
      </div>

       <div className="lg:hidden block mt-10">
              <Formontact />
            </div>
    </div>
  );
}

export default ScindiaSchoolPage;

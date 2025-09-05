"use client";
import React from "react";
import Faq from "@/components/frontend/Faqdata";
import { FaFilePdf } from "react-icons/fa";
import StarRatings from "@/components/frontend/StarRatings";
import schoolFAQs from "@/utils/frontend/FaqData";
import GetPrepared from "@/components/frontend/GetPrepared";
import EnquiryForm from "@/components/frontend/EnquiryForm";
import Broucher from "@/components/frontend/Broucher";
import SchoolCarousel from "../../../components/frontend/SchoolCarousel";
import Image from "next/image";
import Formontact from "@/components/frontend/FormContacts";

const tableData = [
  {
    title: "Fee Details",
    headers: ["Category", "Fees (INR)"],
    rows: [
      ["Indian Resident/NRI/OCI", "25,000"],
      ["Renewal Registration Fee", "500"],
      ["Prospectus (School Counter)", "500"],
      ["Prospectus (By Post)", "550"],
      [
        "Common Aptitude Analysis Paper Set (School Counter, per set per year)",
        "100",
      ],
      ["Common Aptitude Analysis Paper Set (By Post, per set per year)", "150"],
      ["Online Common Aptitude Analysis Paper Set", "300"],
    ],
  },
  {
    title: "Admission Timeline",
    headers: ["Event", "Date"],
    rows: [
      ["Notification for Common Aptitude Analysis", "August (preceding year)"],
      ["Common Aptitude Analysis", "3rd Saturday of September"],
      ["Interaction Sessions", "December to February"],
      ["New Entrants Join", "April"],
      ["Overseas Candidates Join", "July (of the year of entry)"],
    ],
  },
  {
    title: "Age Criteria for Admission",
    headers: ["Class", "Minimum Age (Years)", "Maximum Age (Years)"],
    rows: [
      ["IV", "8", "9.5"],
      ["V", "9", "10.5"],
      ["VI", "10", "11.5"],
      ["VII", "11", "12.5"],
      ["VIII", "12", "13.5"],
      ["IX", "13", "14.5"],
    ],
  },
  {
    title: "Fee Structure",
    headers: ["Particulars", "Indian Resident/NRI/OCI (INR)"],
    rows: [
      ["School Fee (Annual)", "9,67,000"],
      ["Caution Money", "4,83,500"],
      ["Admission Fee", "2,50,000"],
      ["One-time IT Fee", "42,000"],
      ["Imprest Money", "80,000"],
      ["Uniform Advance", "25,000"],
      ["Prospectus", "500 (School Counter) / 550 (By Post)"],
    ],
  },
];

const syllabusData = [
  {
    name: "Online CAA Syllabus MCGS",
    url: "https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/boardingadmission%2FOnline%20CAA%20Syllabus%20MCGS.pdf?alt=media&token=ffd3eb85-d368-4b5e-802a-7748ecb9933c",
  },
  {
    name: "Offline Syllabus MCGS",
    url: "https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/boardingadmission%2FSyllabusOffline%20MCGS.pdf?alt=media&token=e4068ac4-875f-4ac0-9308-82a000284914",
  },
];

function MayoGirlsPage() {
  const MayoGirls =
    schoolFAQs.find((school) => school.school === "MayoGirls")?.faqs || [];
  return (
    <div className="h-auto w-[100%] poppins ">
      {/* <div className="relative lg:px-[30px] xl:px-[50px]  ">
        <div className=" h-[250px] xl:h-[300px] lg:h-[350px] w-[100%] ">
          {" "}
          <Image
            src="/images/SchoolBanner/mayogirlsframe.svg"
            alt="Descriptive text for screen readers"
            className="w-full lg:h-[400px] h-[250px]  object-cover lg:rounded-2xl rounded-b-2xl "
            width={1000}
            height={1000}
          />
        </div>
        <div className="w-[13vw] ">
          <Image
            src="/images/SchoolBanner/mayogirlslogo.svg"
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
                Mayo Girls College, Ajmer, Rajasthan
              </h1>
            </div>
            <StarRatings
              lat={26.4428978}
              lng={74.6494307}
              schoolName={"Mayo College Girls School"}
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
          <div className="md:flex md:justify-between">
            <div className="space-y-4">
              <div className="">
                <h1 className="text-[#075D70] font-semibold  text-[2rem] ">
                  About Mayo Girls College
                </h1>
              </div>
              <div>
                <p className="leading-6 w-[88vw] md:w-[45vw] text-[1.15rem] text-justify">
                  Mayo College Girls School, established in 1987 in Ajmer,
                  Rajasthan, is renowned for providing a balanced education
                  rooted in Indian values and modern practices. As the sister
                  school of Mayo College, it emphasizes the holistic development
                  of girls in academics, sports, arts, and extracurricular
                  activities.
                </p>
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
            </div>
            <div className=" hidden md:block ">
              <EnquiryForm />
            </div>
          </div>

          <div className="md:w-[45vw] ">
            <div>
              <p className="text-[#075D70] font-semibold text-[1.4rem] my-4">
                Key Steps:
              </p>
            </div>
            <div>
              <ul className="list-disc pl-4 space-y-4 text-[1.15rem]">
                <li>
                  <span className="font-medium">Residential Campus:</span>A
                  safe, supportive environment for students to live and learn.
                </li>
                <li>
                  <span className="font-medium">Cultural Integration:</span>
                  Blending traditional values with future-ready education
                </li>
                <li>
                  <span className="font-medium">Holistic Development:</span>
                  Focus on all-around growth through academics and activities.
                </li>
              </ul>
            </div>
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
              Mayo Girls Admissions are competitive, focusing on a Common
              Aptitude Analysis (CAA) for English, Hindi, and Mathematics. Here
              a breakdown:
            </p>
          </div>
          <div>
            <div>
              <p className="text-[#075D70] font-semibold text-[1.4rem] my-4">
                Admission Procedure Overview
              </p>
            </div>
            <ul className="list-disc pl-4 space-y-4 text-[1.15rem]">
              <li>
                <span className="font-medium">Common Aptitude Analysis:</span>{" "}
                Held on the 3rd Saturday of September, assessing skills in core
                subjects.
              </li>
              <li>
                <span className="font-medium">Interaction:</span> Qualified
                candidates attend an interaction session from December to
                February.
              </li>
              <li>
                <span className="font-medium">Final Selection:</span> Based on
                CAA and interaction performance.
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-4 w-[90vw] mb-10 mt-10">
          <div>
            <h1 className="text-[#075D70] font-semibold text-[2rem]">
              Important Points
            </h1>
          </div>
          <ul className="list-disc pl-4 space-y-4 text-[1.15rem]">
            <li>
              <span className="font-medium">Class Availability:</span>{" "}
              Admissions from Class IV; Class XI admissions based on Class X
              results and interaction.
            </li>
            <li>
              <span className="font-medium">Preference:</span>Siblings and
              alumni children have priority in Mayo Girls Admissions.
            </li>
          </ul>
        </div>

        <div className="space-y-4 w-[90vw] mb-10 mt-10">
          <div>
            <h1 className="text-[#075D70] font-semibold text-[2rem]">
              Registration
            </h1>
          </div>
          <div>
            <p className="leading-6 w-[88vw] text-[1.15rem] text-justify">
              To participate in Mayo Girls Entrance, advance registration is
              necessary. Details are as follows:
            </p>
          </div>

          <div>
            <p className="text-[1.15rem] font-semibold mb-4">
              Registration Fees
            </p>

            <table className="w-full text-[14px] md:text-[1.1rem] border-collapse border border-gray-300">
              <thead>
                <tr>
                  {tableData[0].headers.map((header, idx) => (
                    <th
                      key={idx}
                      className="border border-gray-300 px-4 py-2 bg-gray-100 text-left font-semibold"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData[0].rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className={`border border-gray-300 px-4 py-2 ${
                          cellIndex === 0 ? "font-semibold" : ""
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="leading-6 w-[88vw] text-[1.15rem] my-6">
              <span className=" text-[1.25rem] font-medium ">Payment:</span>
              Through a Demand Draft payable at Ajmer.
            </p>
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
            <div>
              <p className="text-[#075D70] font-semibold text-[2rem]">
                Important Dates
              </p>
            </div>
            <div className="my-4">
              <p className="leading-6 w-[88vw] text-[1.15rem] text-justify">
                Key dates for Mayo Girls Admissions include:
              </p>
            </div>
            <div className="">
              <p className="mb-4 text-[1.15rem] font-semibold">
                Admission Timeline
              </p>

              <table className="w-full text-[14px] md:text-[1.1rem] border-collapse border border-gray-300">
                <thead>
                  <tr className="font-semibold">
                    {tableData[1].headers.map((header, idx) => (
                      <th
                        key={idx}
                        className="border border-gray-300 px-4 py-2 bg-gray-100 text-left font-semibold"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableData[1].rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className={`border border-gray-300 px-4 py-2 ${
                            cellIndex === 0 ? "font-semibold" : ""
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="leading-6 w-[88vw] text-[1.15rem] my-6">
                <span className=" text-[1.25rem] font-medium ">Note:</span>
                Confirmation of admission is required within ten days of the
                offer to secure the spot.
              </p>
            </div>
          </div>

          <div>
            <div>
              <p className="text-[#075D70] font-semibold text-[2rem]">
                Eligibility Criteria
              </p>
            </div>
            <div>
              <p className="leading-6 w-[88vw] text-[1.15rem] my-4">
                The school has specific age criteria for Mayo Girls Admissions:
              </p>
            </div>
            <div>
              <p className="text-[1.15rem] font-semibold mb-4">
                Age Criteria for Admission
              </p>

              <table className="w-full text-[14px] md:text-[1.1rem] border-collapse border border-gray-300">
                <thead>
                  <tr className="font-semibold">
                    {tableData[2].headers.map((header, idx) => (
                      <th
                        key={idx}
                        className="border border-gray-300 px-4 py-2 bg-gray-100 text-left font-semibold"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableData[2].rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className={`border border-gray-300 px-4 py-2 ${
                            cellIndex === 0 ? "font-semibold" : ""
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="leading-6 w-[88vw] text-[1.15rem] my-6">
                Parents must ensure their child meets the age requirement by
                April 1st of the admission year.
              </p>
            </div>
          </div>
          <div>
            <div>
              <p className="text-[#075D70] font-semibold text-[2rem]">
                Fees Structure
              </p>
            </div>
            <div className="my-4">
              <p className=" leading-6 w-[88vw] text-[1.15rem]">
                Understanding the fee structure is crucial for planning Mayo
                Girls Admissions:
              </p>
            </div>
            <div>
              <p className="text-[1.15rem] font-semibold mb-4">Fee Structure</p>

              <table className="w-full text-[14px] md:text-[1.1rem] border-collapse border border-gray-300">
                <thead>
                  <tr className="font-semibold">
                    {tableData[3].headers.map((header, idx) => (
                      <th
                        key={idx}
                        className="border border-gray-300 px-4 py-2 bg-gray-100 text-left font-semibold"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableData[3].rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className={`border border-gray-300 px-4 py-2 ${
                            cellIndex === 0 ? "font-semibold" : ""
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="leading-6 w-[88vw] text-[1.15rem] my-6">
                <span className=" text-[1.25rem] font-medium ">
                  Additional Costs:
                </span>
                Books, stationery, and uniforms are charged separately based on
                actual usage.
              </p>
            </div>
          </div>

          <div className="bg-white text-gray-800 ">
            <div className="space-y-10">
              {/* Syllabus and Academics Section */}
              <div className="space-y-6">
                <h1 className="text-[#075D70] font-semibold text-[1.75rem] sm:text-[2rem]">
                  Syllabus and Academics
                </h1>
                <p className="leading-6 text-[1.15rem]">
                  Mayo College Girls School follows the CBSE curriculum,
                  offering a well-rounded education.
                </p>
              </div>

              {/* Academic Structure Section */}
              <div className="space-y-6">
                <h2 className="font-semibold text-[1.25rem] sm:text-[1.5rem]">
                  Academic Structure
                </h2>
                <ol className="list-decimal pl-6 space-y-4 text-[1.15rem]">
                  <li>
                    <span className="font-semibold">
                      Primary School (Classes IV-VI):
                    </span>{" "}
                    Building strong foundations in core subjects.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Middle School (Classes VII-IX):
                    </span>{" "}
                    Emphasis on analytical thinking and problem-solving.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Senior School (Classes X-XII):
                    </span>{" "}
                    Preparation for board exams with a choice of streams.
                  </li>
                </ol>
              </div>

              {/* Extracurricular Activities Section */}
              <div className="space-y-6">
                <h2 className="font-semibold text-[1.25rem] sm:text-[1.5rem]">
                  Extracurricular Activities
                </h2>
                <p className="leading-6 text-[1.15rem]">
                  Mayo Girls School offers a wide range of extracurricular
                  activities, including sports, arts, and drama, essential for
                  holistic development.
                </p>
              </div>

              {/* Examination and Assessment Section */}
              <div className="space-y-6">
                <h2 className="font-semibold text-[1.25rem] sm:text-[1.5rem]">
                  Examination and Assessment
                </h2>
                <p className="leading-6 text-[1.15rem]">
                  Regular assessments through written exams, projects, and
                  practical work monitor student progress.
                </p>
              </div>
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
        </div>

        <Broucher />
      </div>

      <div className="mt-10">
        <Faq data={MayoGirls} />
      </div>

      <div className="lg:hidden block mt-10">
        <Formontact />
      </div>
    </div>
  );
}

export default MayoGirlsPage;

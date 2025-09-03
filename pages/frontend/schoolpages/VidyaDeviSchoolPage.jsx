"use client";
import React from "react";
import Faq from "@/components/frontend/Faqdata";
import Image from "next/image";
import StarRatings from "@/components/frontend/StarRatings";
import schoolFAQs from "@/utils/frontend/FaqData";
import GetPrepared from "@/components/frontend/GetPrepared";
import EnquiryForm from "@/components/frontend/EnquiryForm";
import Broucher from "@/components/frontend/Broucher";
import SchoolCarousel from "../../../components/frontend/SchoolCarousel";
import { FaFilePdf } from "react-icons/fa";

const syllabusData = [
  {
    name: "Doon School Aptitude Test Overview",
    url: "https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/boardingadmission%2FDoon-School-Aptitude%20Test%20overview.pdf?alt=media&token=a6b9570f-2738-40fb-9761-bfeb9307c6ee",
  },
];
const admissionSteps = [
  {
    title: "Start the Process:",
    description:
      "Visit the official website at www.vdjs.edu.in and navigate to the 'Admissions' section.",
  },
  {
    title: "Registration:",
    description:
      "Click on the 'Online Registration Form' button and fill in the required details accurately for the prospective student.",
  },
  {
    title: "Fee Submission:",
    description:
      "Submit the registration form along with a non-refundable and non-transferable fee of Rs. 18,000.",
  },
  {
    title: "Next Steps:",
    description:
      "After submission, await communication from the school regarding the next steps in the Vidya Devi Jindal School Admissions process.",
  },
  {
    title: "Eligibility Check:",
    description:
      "Ensure that your child meets the age requirement, especially for Grade 12, where the minimum age is 18 years.",
  },
  {
    title: "Entrance Test:",
    description:
      "Prepare for and schedule the Vidya Devi Jindal School Entrance test as per the school's instructions.",
  },
  {
    title: "Document Submission:",
    description: "Gather and submit the required documents, including:",
    items: [
      "Photocopy of the child's Aadhaar Card",
      "Copy of the child's Birth Certificate",
      "Two recent passport-sized photographs",
    ],
  },
];

function VidyaDeviSchoolPage() {
  const VidyaDeviJindalSchool =
    schoolFAQs.find((school) => school.school === "VidyaDeviJindalSchool")
      ?.faqs || [];
  return (
    <div className="h-auto w-[100%] poppins ">
      {/* <div className="relative lg:px-[30px] xl:px-[50px]  ">
        <div className=" h-[250px] xl:h-[300px] lg:h-[350px] w-[100%] ">
          <Image
            src="/images/SchoolBanner/vidyadeviframe.svg"
            alt="Descriptive text for screen readers"
            className="w-full lg:h-[400px] h-[250px]  object-cover lg:rounded-2xl rounded-b-2xl "
            width={1000}
            height={1000}
          />
        </div>
        <div className="w-[13vw] ">
          <Image
            src="/images/SchoolBanner/vidyadevilogo.svg"
            className="absolute inset-0 left-[5%] lg:top-[300px] top-[80%] lg:w-[132px] lg:h-[130px] w-[90px] h-[80px] "
            width={1000}
            height={1000}
            alt="banner"
          />
        </div>
      </div> */}
      <SchoolCarousel />

      <div className="w-[90%] ml-[5%] mt-6">
        <div className="relative h-[150px]   xl:h-[150px] md:h-[120px] lg:h-[170px]    w-full  border-b-2  sm:flex sm:justify-between">
          <div className="w-full flex flex-col  lg:gap-5 gap-2">
            <div className="">
              <h1 className="text-[#075D70]  lg:text-[2rem] text-[18px] font-semibold lg:font-bold ">
                Vidya Devi Jindal School, Hisar, Haryana
              </h1>
            </div>
            <StarRatings
              lat={29.1047911}
              lng={75.8295657}
              schoolName={"Vidya Devi Jindal School"}
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
                About Vidya Devi Jindal School
              </h1>
            </div>
            <div>
              <p className="leading-6 w-[88vw] md:w-[45vw] text-[14px] md:text-[1.15rem] text-justify">
                Vidya Devi Jindal School in Hisar is a prestigious institution
                dedicated to empowering young women through a comprehensive and
                modern education. The school harmonizes traditional values with
                contemporary teaching methods, creating a nurturing environment
                that fosters academic excellence and personal growth. With a
                curriculum designed to spark intellectual curiosity and critical
                thinking, Vidya Devi Jindal School also emphasizes cultural
                awareness, social responsibility, and global citizenship.
                Supported by state-of-the-art facilities, a broad range of
                extracurricular activities, and a team of dedicated educators,
                the school prepares its students to become confident,
                compassionate leaders ready to excel in a dynamic world.
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
          <div className=" hidden md:block mt-10">
            <EnquiryForm />
          </div>
        </div>

        {/* <div>
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
              </div> */}

        <div className=" ">
          <h2 className="text-[#075D70] font-semibold  text-[1.5rem] md:text-[2rem] mt-8 mb-5">
            Fee Structure
          </h2>
          <div className="overflow-scroll lg:overflow-auto w-[90vw]">
            <table className=" border-collapse border border-gray-300 text-[14px] md:text-[1.1rem]">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2">Class</th>
                  <th className="border border-gray-300 p-2">Admission Fee</th>
                  <th className="border border-gray-300 p-2">Caution Money</th>
                  <th className="border border-gray-300 p-2">School Fee</th>
                  <th className="border border-gray-300 p-2">Joining Kit</th>
                  <th className="border border-gray-300 p-2">
                    Imprest Account
                  </th>
                  <th className="border border-gray-300 p-2">Total Fee</th>
                  <th className="border border-gray-300 p-2">
                    2nd Installment School Fee
                  </th>
                  <th className="border border-gray-300 p-2">Annual Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">IV-VII</td>
                  <td className="border border-gray-300 p-2">Rs. 60,000</td>
                  <td className="border border-gray-300 p-2">50,000</td>
                  <td className="border border-gray-300 p-2">227,000</td>
                  <td className="border border-gray-300 p-2">30,000</td>
                  <td className="border border-gray-300 p-2">20,000</td>
                  <td className="border border-gray-300 p-2">387,000</td>
                  <td className="border border-gray-300 p-2">152,000</td>
                  <td className="border border-gray-300 p-2">539,000</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">IX-XII</td>
                  <td className="border border-gray-300 p-2">Rs. 60,000</td>
                  <td className="border border-gray-300 p-2">50,000</td>
                  <td className="border border-gray-300 p-2">283,50</td>
                  <td className="border border-gray-300 p-2">30,000</td>
                  <td className="border border-gray-300 p-2">20,000</td>
                  <td className="border border-gray-300 p-2">443,500</td>
                  <td className="border border-gray-300 p-2">190,000</td>
                  <td className="border border-gray-300 p-2">633,500</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4">
            <h3 className="text-[#075D70] font-semibold  text-[1.2rem] mb-2">
              Note:
            </h3>
            <ul className="list-disc text-[14px] md:text-[1.15rem] list-inside">
              <li className="mb-1">
                The first installment covers the period from April to September,
                and the second installment covers October to March.
              </li>
              <li>
                Fees should be deposited by 10th March for the first installment
                and by 10th September for the second installment.
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-4 w-[90vw] mb-10 mt-10">
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
            <h1 className="text-[#075D70] font-semibold text-[1.5rem] md:text-[2rem]">
              Admission Procedure
            </h1>
          </div>

          <div>
            <ul className="list-disc pl-4 space-y-4 text-[14px] md:text-[1.15rem]">
              {admissionSteps.map((step, index) => (
                <li key={index}>
                  <span className="font-semibold">{step.title}</span>{" "}
                  {step.description}
                  {step.items && (
                    <ul className="list-disc space-y-2 mt-2">
                      {step.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
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

        <Broucher />
      </div>

      <div className="mt-10">
        <Faq data={VidyaDeviJindalSchool} />
      </div>
    </div>
  );
}

export default VidyaDeviSchoolPage;

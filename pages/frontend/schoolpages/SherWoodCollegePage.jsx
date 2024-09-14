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

const admissionDetails = [
  {
    title: "Registration:",
    description:
      "Begin by visiting the official website, sherwood.edu.in, to register online. Online registration is the only option available, and it typically starts in September.",
  },
  {
    title: "Deadline:",
    description:
      "The registration deadline for Classes III to VIII is generally in December. Ensure that all necessary documents, including passport-size photos, Aadhar cards, and proof of residence, are gathered beforehand.",
  },
  {
    title: "Form Submission:",
    description:
      "Complete the online registration form and upload all required documents. The application fee of INR 7,000 must be paid online during the submission process.",
  },
  {
    title: "Sherwood College Entrance:",
    description:
      "Prepare your child for the Sherwood College Entrance test, as the details will be communicated by the school. The entrance test is a crucial part of the Sherwood College Admissions process.",
  },
  {
    title: "Admission Decision:",
    description:
      "After the entrance test and interview, wait for the school's admission decision. If your child is selected, you will need to pay the security deposit and the annual fees, along with submitting all required documents.",
  },
  {
    title: "Preparation for School:",
    description:
      "Once admitted, make necessary preparations for the new academic session, including purchasing uniforms and books.",
  },
];

function SherWoodCollegePage() {
  const SherwoodCollege =
    schoolFAQs.find((school) => school.school === "SherwoodCollege")?.faqs ||
    [];
  return (
    <div className="h-auto w-[100%] poppins">
      <div className="relative lg:px-[30px] xl:px-[50px]  ">
        <div className=" h-[250px] xl:h-[300px] lg:h-[350px] w-[100%] ">
          {" "}
          <Image
            src="/images/SchoolBanner/sherwoodframe.svg"
            alt="Descriptive text for screen readers"
            className="w-full lg:h-[400px] h-[250px]  object-cover lg:rounded-2xl rounded-b-2xl "
            width={1000}
            height={1000}
          />
        </div>
        <div className="w-[13vw] ">
          <Image
            src="/images/SchoolBanner/sherwoodlogo.svg"
            className="absolute inset-0 left-[5%] lg:top-[300px] top-[80%] lg:w-[132px] lg:h-[130px] w-[90px] h-[80px] "
            width={1000}
            height={1000}
            alt="img"
          />
        </div>
      </div>

      <div className="w-[90%] ml-[5%]  mt-[10%] ">
        <div className="relative h-[170px]   xl:h-[180px] md:h-[120px] lg:h-[170px]    w-full  border-b-2  sm:flex sm:justify-between">
          <div className="w-full flex flex-col  lg:gap-5 gap-2">
            <div className="">
              <h1 className="text-[#075D70]  lg:text-[2rem] text-[18px] font-semibold lg:font-bold ">
                Sherwood College, Nainital, Uttarakhand
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
          <div className="md:hidden mt-6">
<EnquiryForm/>

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

        <div className="space-y-4 w-[90vw]  mt-10 ">
          <div className="">
            <h1 className="text-[#075D70] font-semibold  text-[2rem] ">
              About School
            </h1>
          </div>
          <div>
            <p className="leading-6 w-[88vw] text-[1.15rem] text-justify">
              Sherwood College, nestled in the scenic town of Nainital, is a
              prestigious institution celebrated for its legacy of academic
              excellence and comprehensive development. Surrounded by the
              tranquil beauty of the Kumaon hills, Sherwood College offers an
              enriching environment that stimulates both learning and personal
              growth. The college is recognized for its robust curriculum, which
              balances academic rigor with an extensive array of extracurricular
              activities, ensuring that students receive a well-rounded
              education. Sherwood College&apos;s dedication to fostering
              intellectual, cultural, and physical growth is reflected in its
              diverse programs and state-of-the-art facilities. The
              school&apos;s emphasis on values such as integrity, discipline,
              and respect prepares students to become responsible global
              citizens and future leaders.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-[#075D70] font-semibold text-[2rem] mt-7 mb-5">
            Fee Structure
          </h2>

          <ul className="list-disc pl-10 ">
            <li>
              <span className="font-bold">Application Registration Fees:</span>{" "}
              Rs. 7,000/-
            </li>
            <li>
              <span className="font-bold">Security Deposit:</span> Rs. 10,000/-
            </li>
            <li>
              <span className="font-bold">Annual Fees:</span> Rs. 6,20,000/-
            </li>
          </ul>
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
              {admissionDetails.map((step, index) => (
                <li key={index}>
                  <span className="font-medium">{step.title}</span>{" "}
                  {step.description}
                </li>
              ))}
            </ul>
          </div>
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
        <Faq data={SherwoodCollege} />
      </div>
    </div>
  );
}

export default SherWoodCollegePage;

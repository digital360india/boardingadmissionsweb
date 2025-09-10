"use client";
import React from "react";
import Faq from "@/components/frontend/Faqdata";
import Image from "next/image";
import schoolFAQs from "@/utils/frontend/FaqData";
import GetPrepared from "@/components/frontend/GetPrepared";
import EnquiryForm from "@/components/frontend/EnquiryForm";
import Broucher from "@/components/frontend/Broucher";

import StarRatings from "@/components/frontend/StarRatings";
import SchoolCarousel from "../../../components/frontend/SchoolCarousel";
import Formontact from "@/components/frontend/FormContacts";
import ContactForm from "@/components/frontend/ContactForms";

const registrationSteps = [
  {
    title: "Registration",
    description:
      "Start by registering on the school's admission portal. Ensure you fill in all required details accurately.",
  },
  {
    title: "Document Upload",
    description:
      "Upload necessary documents (under 500 KB each) as part of your application.",
  },
  {
    title: "Submit Application",
    description:
      "Once the form is complete, submit it and pay the application fee. Be sure to double-check everything as no changes are allowed after submission.",
  },
  {
    title: "Selection Process",
    description:
      "After submission, you will receive an email with details about the Bishop Cotton School Entrance exam or selection process, which will require at least one parent to be present.",
  },
  {
    title: "Confirmation",
    description:
      "If selected, you will need to complete the fee payment within the given timeframe to secure admission.",
  },
];

function BishopKarnatakaPage() {
  const BishopKarnatakFAQ =
    schoolFAQs.find((school) => school.school === "BishopCottonSchool")?.faqs ||
    [];

  return (
    <div className="h-auto w-[100%] poppins ">
      {/* <div className="relative lg:px-[30px] xl:px-[50px]  ">
        <div className=" h-[250px] xl:h-[300px] lg:h-[350px] w-[100%] ">
          {" "}
          <Image
            src="/images/SchoolBanner/bishopframe.svg"
            alt="Descriptive text for screen readers"
            className="w-full lg:h-[400px] h-[250px]  object-cover lg:rounded-2xl rounded-b-2xl "
            width={1000}
            height={1000}
          />
        </div>
        <div className="w-[13vw] ">
          <Image
            src="/images/SchoolBanner/bishoplogo.svg"
            className="absolute inset-0 left-[5%] lg:top-[300px] top-[80%] lg:w-[132px] lg:h-[130px] w-[90px] h-[80px] "
            width={1000}
            height={1000}
            alt="img"
          />
        </div>
      </div> */}
      <SchoolCarousel />

      <div className="w-[90%] ml-[5%] mt-6">
        <div className="relative h-[150px]   xl:h-[150px] md:h-[120px] lg:h-[160px]     w-full  border-b-2  sm:flex sm:justify-between">
          <div className="w-full flex flex-col  lg:gap-5 gap-2">
            <div className="">
              <h1 className="text-[#075D70]  lg:text-[2rem] text-[18px] font-semibold lg:font-bold ">
                Bishop Cotton School, Bangalore, Karnataka
              </h1>
            </div>
            <StarRatings
              lat={12.9683377}
              lng={77.5962364}
              schoolName={"Bishop Cotton Boys' School"}
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
          {/* <EnquiryForm /> */}
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>

        <div className="md:flex md:justify-between">
          <div className="space-y-4 w-[90vw]  mt-10 ">
            <div className="">
              <h1 className="text-[#075D70] font-semibold  text-[1.5rem] md:text-[2rem] ">
                About Bishop Cotton School
              </h1>
            </div>
            <div>
              <p className="leading-6 w-[88vw] md:w-[45vw] text-[14px] md:text-[1.15rem] text-justify">
                Bishop Cotton School in Bangalore is one of India&apos;s oldest
                and most respected schools, combining its long-standing
                traditions with modern teaching methods. The school is known for
                offering a balanced education, where students are encouraged to
                excel academically while also exploring their creative, social,
                and physical potential. Located on a vibrant campus in
                Bangalore, the school provides a supportive environment that
                helps students grow into thoughtful and responsible individuals.
                With a strong community of alumni who have gone on to succeed in
                various fields, Bishop Cotton School remains a leader in quality
                education.
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
          </div>
          <div className=" hidden md:block mt-10">
            <EnquiryForm />
          </div>

          <div className="md:hidden mt-6">
            {/* <EnquiryForm /> */}
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>

        <div className="space-y-4 w-[90vw] mb-10 mt-10">
          <div>
            <h1 className="text-[#075D70] font-semibold text-[1.5rem] md:text-[2rem]">
              Admission Procedure
            </h1>

            <h1 className="pt-4 text-[14px] md:text-[1.15rem]">
              To apply for
              <span className="font-bold text-[14px] md:text-[1.15rem]">
                {" "}
                Bishop Cotton School Admissions
              </span>
              , you can register online during the specified application window.
              The process is straightforward:
            </h1>
          </div>
          <div>
            <ul className="list-disc pl-4 space-y-3 text-[1.15rem]">
              {registrationSteps.map((step, index) => (
                <li key={index}>
                  <span className="font-semibold text-[14px] md:text-[1.15rem]">
                    {step.title}:{" "}
                  </span>
                  <span className="text-[14px] md:text-[1.15rem]">
                    {step.description}
                  </span>
                </li>
              ))}
            </ul>
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

        <div className="">
          <h1 className="text-[#075D70] font-semibold  text-[1.5rem] md:text-[2rem] ">
            Important Notes
          </h1>

          <ul className="list-disc pl-4 mt-4  space-y-2 text-[14px] md:text-[1.15rem]">
            <li>
              Make sure to complete the application form accurately, as
              incomplete or incorrect forms may lead to rejection.
            </li>
            <li>Registration does not guarantee admission.</li>
            <li>Keep copies of all documents and receipts for your records.</li>
            <li>
              For up-to-date information on admission dates and procedures,
              visit the school&apos;s official website, as details may change.
            </li>
          </ul>
        </div>

        <div className="mt-5 mb-7">
          <h1 className="text-[14px] md:text-[1.15rem]">
            By following this guide, you&apos;ll be well-prepared for{" "}
            <span className="font-bold">Bishop Cotton School Admissions</span>{" "}
            and ready to navigate the application process smoothly.
          </h1>
        </div>
        <Broucher />
      </div>

      <div>
        <Faq data={BishopKarnatakFAQ} />
      </div>

      <div className="lg:hidden block ">
        <Formontact />
      </div>
    </div>
  );
}

export default BishopKarnatakaPage;

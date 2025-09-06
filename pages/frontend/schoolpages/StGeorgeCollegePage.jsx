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
import Formontact from "@/components/frontend/FormContacts";

const steps = [
  {
    title: "Registration",
    description:
      "Start by visiting the college's official website to initiate the registration process for St. George College Admissions.",
  },
  {
    title: "Eligibility Criteria",
    description:
      "Ensure that your child meets the eligibility criteria for the desired class before applying.",
  },
  {
    title: "Documentation",
    description:
      "Prepare the necessary documents, including a Demand Draft of Rs. 10,000, recent student photographs, the birth certificate, the latest progress report, and the Aadhaar card.",
  },
  {
    title: "Application Form",
    description:
      "Complete the application form online, providing all required details accurately.",
  },
  {
    title: "Entrance Test",
    description:
      "Registration qualifies the student for participation in the St. George College Entrance exam, which is a critical part of the admissions process.",
  },
  {
    title: "Fair Process",
    description:
      "The school emphasizes that it does not accept donations or recommendations for admission, ensuring a transparent and fair procedure.",
  },
  {
    title: "Communication",
    description:
      "Regularly check your email for further instructions and updates regarding the St. George College Admissions process.",
  },
  {
    title: "Queries",
    description:
      "For any questions or further information, contact the school at the provided email addresses or phone numbers.",
  },
];

function StGeorgeCollegePage() {
  const StGeorgeCollege =
    schoolFAQs.find((school) => school.school === "StGeorgeCollege")?.faqs ||
    [];

  return (
    <div className="h-auto w-[100%] poppins ">
      {/* <div className="relative lg:px-[30px] xl:px-[50px]  ">
        <div className=" h-[250px] xl:h-[300px] lg:h-[350px] w-[100%] ">
          <Image
            src="/images/SchoolBanner/stgeorgeframe.svg"
            alt="Descriptive text for screen readers"
            className="w-full lg:h-[440px] h-[250px]  object-cover lg:rounded-2xl rounded-b-2xl "
            width={1000}
            height={1000}
          />
        </div>
        <div className="w-[13vw] ">
          <Image
            src="/images/SchoolBanner/stgeorgelogo.svg"
            className="absolute inset-0 left-[5%] lg:top-[350px] top-[80%] lg:w-[132px] lg:h-[130px] w-[90px] h-[80px] "
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
                St. George College, Mussoorie, Uttarakhand
              </h1>
            </div>
            <StarRatings
              lat={30.4350885}
              lng={78.0154457}
              schoolName={"St. George's College"}
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
                About St. George College
              </h1>
            </div>
            <div>
              <p className="leading-6 w-[88vw] md:w-[45vw] text-[14px] md:text-[1.15rem] text-justify">
                St. George College, set in the picturesque hill station of
                Mussoorie, is a prestigious educational institution celebrated
                for its academic excellence and vibrant co-curricular
                activities. Nestled in the serene Himalayan foothills, the
                college offers a unique learning environment that balances
                academic rigor with personal growth and character development.
                St. George College stands out for its holistic education
                approach, providing a diverse curriculum that blends modern
                teaching practices with traditional values. The
                institution&apos;s commitment to nurturing well-rounded
                individuals is evident through its comprehensive programs,
                dedicated faculty, and state-of-the-art facilities. With a focus
                on developing leadership skills and fostering global
                citizenship, St. George College prepares students to confidently
                navigate the complexities of an ever-changing world.
              </p>
            </div>
          </div>
          <div className=" hidden md:block mt-10">
            <EnquiryForm />
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

        <div>
          <h2 className="text-[#075D70] font-semibold text-[1.5rem] md:text-[2rem] mt-8 mb-5">
            Fee Structure
          </h2>
          <ul className="list-disc pl-2 space-y-4 text-[14px] md:text-[1.15rem]">
            <span className="font-semibold">For New Admissions:</span>
            <ul className="list-disc pl-3 md:pl-10">
              <li>
                <span className="font-semibold">
                  Admission Fees (Non-Refundable):
                </span>{" "}
                Rs. 1,00,000.00
              </li>
              <li>
                <span className="font-semibold">
                  Security Deposit (Interest-Free, Refundable):
                </span>{" "}
                Rs. 50,000.00
              </li>
            </ul>
            <h1 className="font-semibold">Annual School Fees:</h1>
            <ul className="list-disc pl-3 md:pl-10">
              <li>
                <span className="font-semibold">Class IV to VI:</span> Rs.
                7,16,632.00
              </li>
              <li>
                <span className="font-semibold">Class VII to VIII:</span> Rs.
                7,42,962.00
              </li>
              <li>
                <span className="font-semibold">Class IX:</span> Rs. 7,89,470.00
              </li>
              <li>
                <span className="font-semibold">Class X:</span> Rs. 8,17,023.00
              </li>
              <li>
                <span className="font-semibold">
                  Class XI - Commerce/Humanities:
                </span>{" "}
                Rs. 7,76,632.00
              </li>
              <li>
                <span className="font-semibold">Class XI - Science:</span> Rs.
                7,87,189.00
              </li>
              <li>
                <span className="font-semibold">Class XII - Commerce:</span> Rs.
                8,31,595.00
              </li>
              <li>
                <span className="font-semibold">Class XII - Science:</span> Rs.
                8,42,152.00
              </li>
            </ul>
            <h1 className="font-semibold">Other Annual Charges:</h1>
            <ul className="list-disc pl-3 md:pl-10">
              <li>
                <span className="font-semibold">
                  Boarding Students (Class IV to XII):
                </span>{" "}
                Rs. 80,000.00
              </li>
              <li>
                <span className="font-semibold">
                  Day Scholar Students (Class IV to XII):
                </span>{" "}
                Rs. 20,000.00
              </li>
            </ul>
            <h1 className="font-semibold">
              Alternate Fees for New Admissions:
            </h1>
            <ul className="list-disc pl-3 md:pl-10">
              <li>
                <span className="font-semibold">
                  Admission Fees (Non-Refundable):
                </span>{" "}
                Rs. 60,000.00
              </li>
              <li>
                <span className="font-semibold">
                  Security Deposit (Interest-Free, Refundable):
                </span>{" "}
                Rs. 25,000.00
              </li>
            </ul>
            <h1 className="font-semibold">Alternate Annual School Fees:</h1>
            <ul className="list-disc pl-3 md:pl-10">
              <li>
                <span className="font-semibold">Class IV to VI:</span> Rs.
                1,25,568.00
              </li>
              <li>
                <span className="font-semibold">Class VII to VIII:</span> Rs.
                1,39,092.00
              </li>
              <li>
                <span className="font-semibold">Class IX:</span> Rs. 1,56,789.00
              </li>
              <li>
                <span className="font-semibold">Class X:</span> Rs. 1,56,789.00
              </li>
              <li>
                <span className="font-semibold">Class XI - Commerce:</span> Rs.
                1,70,310.00
              </li>
              <li>
                <span className="font-semibold">Class XI - Science:</span> Rs.
                1,80,051.00
              </li>
              <li>
                <span className="font-semibold">Class XII - Commerce:</span> Rs.
                1,70,310.00
              </li>
              <li>
                <span className="font-semibold">Class XII - Science:</span> Rs.
                1,88,051.00
              </li>
            </ul>
            <h1 className="font-semibold">Additional Charges:</h1>
            <ul className="list-disc pl-3 md:pl-10">
              <li>
                <span className="font-semibold">
                  Advance for Textbooks, Stationery, etc. (Boarding Students):
                </span>{" "}
                Rs. 1,00,000.00
              </li>
              <li>
                <span className="font-semibold">Pocket Money:</span> Rs.
                1,00,000.00
              </li>
            </ul>
            <h1 className="font-semibold pt-2">Note:</h1> The school fee
            includes tuition and other charges. The advance against textbooks,
            uniforms, stationery, and sports goods is adjustable at the end of
            the year in the final bill.
          </ul>
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
              Admission Procedure
            </h1>
          </div>

          <div>
            <ul className="list-disc pl-4 space-y-4 text-[14px] md:text-[1.15rem]">
              {steps.map((step, index) => (
                <li key={index}>
                  <span className="font-semibold">{step.title}:</span>{" "}
                  {step.description}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="md:hidden block">
          <Image
            src="/Boardingimg.png"
            className="w-full h-full pt-8"
            width={1000}
            height={1000}
            alt="svg"
          />
        </div>

        <div>
          <h1 className="text-[#075D70] font-semibold text-[1.5rem] md:text-[2rem] mb-2">
            Important Note
          </h1>
          <ul className="list-disc text-[14px] md:text-[1.15rem] pl-4 mb-7">
            <li>
              This guide should help you navigate the St. George College
              Admissions process and understand the associated fees and entrance
              requirements.
            </li>
          </ul>
        </div>

        <Broucher />
      </div>

      <div>
        <Faq data={StGeorgeCollege} />
      </div>

      <div className="lg:hidden block ">
        <Formontact />
      </div>
    </div>
  );
}

export default StGeorgeCollegePage;

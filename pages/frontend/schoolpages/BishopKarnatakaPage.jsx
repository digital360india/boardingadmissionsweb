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
    <div className="h-auto w-[100%] poppins lg:mt-28 mt-20 md:mt-16">
      <div className="relative lg:px-[30px] xl:px-[50px]  ">
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
      </div>

      <div className="w-[90%] ml-[5%]  mt-[10%] ">
        <div className="relative h-[180px]   xl:h-[180px] md:h-[120px] lg:h-[170px]    w-full  border-b-2  sm:flex sm:justify-between">
          <div className="w-full flex flex-col  lg:gap-5 gap-2">
            <div className="">
              <h1 className="text-[#075D70]  lg:text-[2rem] text-[18px] font-semibold lg:font-bold ">
                Bishop Cotton School, Bangalore, Karnataka
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

               {/* <div className=" flex sm:w-[50%] gap-3 mb-2 sm:mb-0">
              <h3 className="px-1 py-1 rounded-md bg-[#6198A3] bg-opacity-[12%] text-black ">
                Private School
              </h3>
              <h3 className="px-1 py-1 rounded-md bg-[#6198A3] bg-opacity-[12%] text-black ">
                Estd.- 1995
              </h3>
            </div> */}
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
              About Bishop Cotton School
            </h1>
          </div>
          <div>
            <p className="leading-6 w-[88vw] text-[1.15rem] text-justify">
              Bishop Cotton School in Bangalore is one of India&apos;s oldest
              and most respected schools, combining its long-standing traditions
              with modern teaching methods. The school is known for offering a
              balanced education, where students are encouraged to excel
              academically while also exploring their creative, social, and
              physical potential. Located on a vibrant campus in Bangalore, the
              school provides a supportive environment that helps students grow
              into thoughtful and responsible individuals. With a strong
              community of alumni who have gone on to succeed in various fields,
              Bishop Cotton School remains a leader in quality education.
            </p>
          </div>
        </div>

        <div className="space-y-4 w-[90vw] mb-10 mt-10">
          <div>
            <h1 className="text-[#075D70] font-semibold text-[2rem]">
              Admission Procedure
            </h1>

            <h1 className="pt-4">
              To apply for
              <span className="font-bold">
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
                  <span className="font-semibold">{step.title}: </span>
                  {step.description}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="">
          <h1 className="text-[#075D70] font-semibold  text-[2rem] ">
            Important Notes
          </h1>

          <ul className="list-disc pl-4 mt-4  space-y-2  text-[1.15rem]">
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
          <h1 className="text-[1.14rem]">
            By following this guide, you&apos;ll be well-prepared for{" "}
            <span className="font-bold">Bishop Cotton School Admissions</span>{" "}
            and ready to navigate the application process smoothly.
          </h1>
        </div>
               <Broucher/>


      </div>

      <div>
        <Faq data={BishopKarnatakFAQ} />
      </div>
    </div>
  );
}

export default BishopKarnatakaPage;

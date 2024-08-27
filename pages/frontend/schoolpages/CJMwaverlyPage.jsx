"use client";
import React from "react";
import Faq from "@/components/frontend/Faqdata";
import Image from "next/image";
import Star from "@/components/frontend/Ratings";

const star = [
  {
    id: 1,

    ratingByPerson: 4,
  },
];

const admissionSteps = [
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

function CJMwaverlyPage() {
  return (
    <div className="h-auto w-[100%] md:mt-24">
      <div className="relative ">
        <div className="h-auto w-[100%]">
          <Image
            src="/images/SchoolBanner/cjmframe.svg"
            alt="Descriptive text for screen readers"
            className="w-full "
            width={2}
            height={2}
          />
        </div>
        <div className="w-[13vw] ">
          <Image
            src="/images/SchoolBanner/cjmlogo.svg"
            className="absolute inset-0 left-[5%] top-[68%] w-[13vw] "
            width={2}
            height={2}
            alt="img"
          />
        </div>
      </div>

      <div className="w-[90%] ml-[5%]  mt-[5%] ">
        <div className="relative h-[28vh]  sm:h-[24vh] md:h-[22vh]   w-full  border-b-2  sm:flex sm:justify-between">
          <div className="w-full flex flex-col  gap-5">
            <div className="">
              <h1 className="text-[#075D70]  text-[2rem] font-bold">
                CJM Waverly, Mussoorie, Uttarakhand
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
                      <span className='text-yellow-600'>
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
            <button className="py-1 px-2 sm:py-1.5 sm:px-2.5 border border-[#075D70] rounded-[5px] flex gap-2">
              <div>
                <Image
                  src="/icons/download.svg"
                  className="w-full h-full pt-1"
                  width={2}
                  height={2}
                  alt="img"
                />
              </div>

              <p className="text-[#075D70]">Broucher</p>
            </button>
            <button className="py-1 px-2 sm:py-1.5 sm:px-2.5 border border-[#075D70]  rounded-[5px] flex gap-2">
              <div>
                <Image
                  src="/icons/star.svg"
                  className="w-full h-full pt-1"
                  width={2}
                  height={2}
                  alt="img"
                />
              </div>

              <p className="text-[#075D70]">Get Prepared</p>
            </button>
          </div>
        </div>

        <div className="space-y-4 w-[90vw]  mt-10 ">
          <div className="">
            <h1 className="text-[#075D70] font-semibold  text-[2rem] ">
              About School
            </h1>
          </div>
          <div>
            <p className="leading-6 w-[88vw] text-[1.15rem]">
              St. George College, set in the picturesque hill station of
              Mussoorie, is a prestigious educational institution celebrated for
              its academic excellence and vibrant co-curricular activities.
              Nestled in the serene Himalayan foothills, the college offers a
              unique learning environment that balances academic rigor with
              personal growth and character development. St. George College
              stands out for its holistic education approach, providing a
              diverse curriculum that blends modern teaching practices with
              traditional values. The institution&apos;s commitment to nurturing
              well-rounded individuals is evident through its comprehensive
              programs, dedicated faculty, and state-of-the-art facilities. With
              a focus on developing leadership skills and fostering global
              citizenship, St. George College prepares students to confidently
              navigate the complexities of an ever-changing world.
            </p>
          </div>
        </div>


        <div>
          <h2 className="text-[#075D70] font-semibold text-[2rem] mt-8 mb-5">
            Fee Structure
          </h2>
          <ul className="list-disc pl-4 space-y-4 text-[1.15rem]">
            <span className="font-semibold">For New Admissions:</span>
            <ul className="list-disc pl-10">
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
            <ul className="list-disc pl-10">
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
            <ul className="list-disc pl-10">
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
            <h1 className="font-semibold">Alternate Fees for New Admissions:</h1>
            <ul className="list-disc pl-10">
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
            <ul className="list-disc pl-10">
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
            <ul className="list-disc pl-10">
              <li>
                <span className="font-semibold">
                  Advance for Textbooks, Stationery, etc. (Boarding Students):
                </span>{" "}
                Rs. 1,00,000.00
              </li>
              <li>
                <span className="font-semibold">Pocket Money:</span> Rs. 1,00,000.00
              </li>
            </ul>
            <h1 className="font-semibold pt-2">Note:</h1> The school fee includes
            tuition and other charges. The advance against textbooks, uniforms,
            stationery, and sports goods is adjustable at the end of the year in
            the final bill.
          </ul>
        </div>

        <div className="space-y-4 w-[90vw] mb-10 mt-10">
          <div>
            <h1 className="text-[#075D70] font-semibold text-[2rem]">
              Admission Procedure
            </h1>
          </div>

          <div>
           
            <ul className="list-disc pl-4 space-y-4 text-[1.15rem]">
              {admissionSteps.map((step, index) => (
                <li key={index}>
                  <span className="font-medium">{step.title}:</span>{" "}
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
          <h3 className="text-[#D77A61] text-[1.13rem] ">Fee structure</h3>
          <h3 className="text-[#D77A61]  text-[1.13rem]">Broucher</h3>
        </div>
      </div>

      <div>
        <Faq />
      </div>
    </div>
  );
}

export default CJMwaverlyPage;

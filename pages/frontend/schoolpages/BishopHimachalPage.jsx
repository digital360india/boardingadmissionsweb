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


const admissionsSteps = [
  {
    title: "Online Registration",
    description: "Prospective students can begin their Bishop Cotton School Admissions process by registering online through the &apos;APPLY&apos; button on the school's official website or by calling 078077 36880 for assistance."
  },
  {
    title: "Admission Test",
    description: "The entrance exam for Bishop Cotton School is planned to be held on the school campus in Shimla, typically early in the year. The school prides itself on high board exam scores and offers a Cambridge curriculum starting from Class 9."
  },
  {
    title: "Test and School Presentation",
    description: "On the day of the test, candidates will also have the opportunity to attend a presentation that provides insight into the school&apos;s culture and values."
  },
  {
    title: "Testing for Junior/Middle School",
    description: "Students will be required to write an essay in English and take a Mathematics test."
  },
  {
    title: "Interview",
    description: "Shortlisted candidates will have an interview conducted in English by either section heads or the Headmaster."
  },
  {
    title: "Further Information",
    description: "For additional details or assistance with the Bishop Cotton School Admissions, you can contact the school directly at (0177) 262 0880."
  },
  {
    title: "Waiting Lists",
    description: "Due to high demand, particularly for Middle School, it is advised to apply early as waiting lists are common."
  }
];

function BishopHimachalPage() {

  const BishopShimlaFAQ = schoolFAQs.find(school => school.school === 'BishopShimla')?.faqs || [];

  return (
    <div className="h-auto w-[100%] poppins lg:mt-28 mt-20 md:mt-16">
      <div className="relative lg:px-[30px] xl:px-[50px]  ">
        <div className=" h-[250px] xl:h-[300px] lg:h-[350px] w-[100%] ">        <Image
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
        <div className="relative h-[170px]   xl:h-[180px] md:h-[120px] lg:h-[170px]    w-full  border-b-2  sm:flex sm:justify-between">
          <div className="w-full flex flex-col  lg:gap-5 gap-2">
            <div className="">
              <h1 className="text-[#075D70]  lg:text-[2rem] text-[18px] font-semibold lg:font-bold ">
                Bishop Cotton School, Shimla, Himanchal Pradesh
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
              About School
            </h1>
          </div>
          <div>
            <p className="leading-6 w-[88vw] text-[1.15rem] text-justify">
              Bishop Cotton School in Shimla is one of India&apos;s top schools,
              known for combining its long-standing traditions with modern
              teaching methods. Located in the beautiful hills of Shimla, the
              school is dedicated to providing a well-rounded education that
              balances academics with a variety of extracurricular activities.
              The school focuses on developing leadership, strong moral values,
              and social responsibility among its students, helping them grow
              into confident and responsible individuals. With excellent
              facilities, experienced teachers, and a lively student community,
              Bishop Cotton School aims to help every student reach their full
              potential.
            </p>
          </div>
        </div>

        <div>
          <h1 className="text-[#075D70] font-semibold  text-[2rem] pt-5">
            Fee Structure
          </h1>

          <ul className="list-disc pl-4 pt-4">
            <li className="text-[1.15rem]">
              <span className="font-semibold">
                Average Daycare Fee per Month:    
              </span>
               Rs. 16,708
            </li>
          </ul>
        </div>

        <div className="space-y-4 w-[90vw] mb-10 mt-6">
          <div>
            <h1 className="text-[#075D70] font-semibold text-[2rem]">
              Admission Procedure
            </h1>
          </div>
          <div>
    <ul className="list-disc pl-4 space-y-4 text-[1.15rem]">
      {admissionsSteps.map((step, index) => (
        <li key={index}>
          <span className="font-medium">{step.title}:</span> {step.description}
        </li>
      ))}
    </ul>
  </div>
        </div>

               <Broucher/>


      </div>

      <div>
        <Faq data={BishopShimlaFAQ}/>
      </div>
    </div>
  );
}

export default BishopHimachalPage;

"use client";
import Image from "next/image";
import React, { useState } from "react";
const Faq = () => {
  const [activeQuestion, setActiveQuestion] = useState(false);
  const handleToggle = (id) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };
  const Faqdata= [
    {
        id:1,
        question: "dfd kfjfk f dfkj df ",
        answer: "Our platform offers expert guidance, application tracking, and continuous support to help you navigate the college admissions process efficiently.",
    },
    {
        id:2,
        question: " technology benefit me?",
        answer: "u find the best college match, saving you time and reducing stress in the decision-making process.",
    },
    {
        id:3,
        question: " application process?",
        answer: " We assist with essay writing, interview preparation, scholarship searches, and financial aid applications.",
    },
    {
        id:4,
        question: " specific career goals?",
        answer: " our platform provides recommendations that align with your aspirations.",
    },
    {
        id:5,
        question: "How can I get started ?",
        answer: "You can then access our expert counseling services and track your applications through our user-friendly platform.",
    },
    {
        id:6,
        question: "financial aid?",
        answer: " ensuring you have access to resources that can help fund your education.",
    },
];
  return (
    <>
      <div className="md:flex md:justify-center md:items-center ">
        <div className="flex flex-col justify-center md:ml-0  lg:ml-0 pt-16 h-auto w-full bg-[#F4FCFD] ">
          <div className="flex justify-center  items-center">
           <h1 className="text-black text-[25px]">FAQs</h1>
          </div>
          <div className="mt-5 text-center">
            <h1 className="text-[24px] md:text-[40px] font-bold text-black">
              Have Questions?
            </h1>
            
          </div>
          <div className="mt-5 flex justify-center items-center">
            <div className="px-5 py-5 flex flex-col gap-5">
              {Faqdata.map((item) => (
                <div
                  key={item.id}
                  className={`w-[75vw]  flex flex-col  justify-between items-center bg-[#F4FCFD] p-4   rounded-xl border border-[#075D70] transition-all ${
                    activeQuestion === item.id ? "h-auto bg-white" : "h-[62px] md:h-[52px] bg-white"
                  }`}
                >
                  <div
                    className="w-full flex justify-between items-center cursor-pointer"
                    onClick={() => handleToggle(item.id)}
                  >
                    <h1
                      className={`text-[1rem] ${
                        activeQuestion === item.id ? "text-black font-semibold " : "text-black font-semibold"
                      }`}
                    >{item.question}
                    </h1>
                    <Image
                      src={
                        activeQuestion === item.id
                          ? "/images/minusicon.svg"
                          : "/images/plus.svg"
                      }
                      alt="icon"
                      width={16}
                      height={16}
                    />
                  </div>
                  {activeQuestion === item.id && (
                    <div className="mt-2 w-full text-[#06656C]">
                      <p className="text-[14px] ">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
        </div>
        <div className="md:hidden w-full h-1 bg[#FFFFFF]"></div>
      </div>
    </>
  );
};
export default Faq;
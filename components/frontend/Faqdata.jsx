"use client";
import Image from "next/image";
import React, { useState } from "react";
import Faqdata from "@/utils/frontend/FaqData.js"
import FaqData from "@/utils/frontend/FaqData.js";
const Faq = ({data}) => {
  const [activeQuestion, setActiveQuestion] = useState(false);
  const handleToggle = (id) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };
  return (
    <>
      <div className="md:flex md:justify-center md:items-center pb-12 bg-[#F4FCFD]">
        <div className="flex flex-col justify-center md:ml-0  lg:ml-0 pt-6 h-auto w-full  ">
          <div className="flex justify-center  items-center">
           <h1 className="text-black text-[25px]">FAQs</h1>
          </div>
          <div className="mt-3 text-center">
            <h1 className="text-[24px] md:text-[40px] font-bold text-black">
              Have Questions?
            </h1>
          </div>
          <div className="mt-5 flex justify-center items-center">
            <div className="px-5 py-5 flex flex-col gap-5">
              {data.map((item,key) => (
                <div
                  key={key}
                  className={`w-[75vw]   flex flex-col  justify-between items-center bg-[#F4FCFD] sm:p-4 p-3   rounded-xl border border-[#075D70] transition-all ${
                    activeQuestion === item.id ? "h-auto bg-white" : "  bg-white"
                  }`}
                >
                  <div
                    className="w-full flex justify-between items-center cursor-pointer"
                    onClick={() => handleToggle(item.id)}
                  >
                    <p
                      className={`text-[1rem] ${
                        activeQuestion === item.id ? "text-black font-semibold " : "text-black font-semibold"
                      }`}
                    >{item.question}
                    </p>
                    <Image
                      src={
                        activeQuestion === item.id
                          ? "/images/minusicon.svg"
                          : "/images/plus.svg"
                      }
                      alt="icon"
                      width={1000}
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
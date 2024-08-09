"use client"
import Image from "next/image";
import React, { useState } from "react";

const cardData = [
  {
    title: "Monthly",
    budget1: "0000/",
    budget2: "month",
    facility1: "Lorem ipsum dolor sit amet psum dol",
    facility2: "Lorem ipsum dolor sit amet psum dol",
    facility3: "Lorem ipsum dolor sit amet psum dol",
    facility4: "Lorem ipsum dolor sit amet psum dol",
  },
  {
    title: "Recommended",
    title2: "Yearly",
    budget1: "00, 000/",
    budget2: "year",
    facility1: "Lorem ipsum dolor sit amet psum dol",
    facility2: "Lorem ipsum dolor sit amet psum dol",
    facility3: "Lorem ipsum dolor sit amet psum dol",
    facility4: "Lorem ipsum dolor sit amet psum dol",
  },
  {
    title: "Customize",
    budget1: "Depends on ",
    budget2: " subjects",
    facility1: "Lorem ipsum dolor sit amet psum dol",
    facility2: "Lorem ipsum dolor sit amet psum dol",
    facility3: "Lorem ipsum dolor sit amet psum dol",
    facility4: "Lorem ipsum dolor sit amet psum dol",
  },
];


const EnrollForCourses = () => {
  
// const [close, setClose] = useState(true);

// const handleClose = () =>{
//   setClose(false);
// }
  return (
    <>

    {/* {close && (    */}
         <div className="p-6  md:p-20">   


        <div className="mt-10 w-full bg-primary02 rounded-xl py-4 pb-20">

        <div className="flex justify-end  ">
          <div className=" absolute  top-[6.25rem]  right-[67px] cursor-pointer" 
          // onClick={handleClose}
          >
            <Image src="/icons/close.svg" width={40} height={40} alt="icon" />
          </div>
        </div>


          <h1 className="text-white text-2xl md:text-3xl text-center ">
            Enroll For Courses
          </h1>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8 px-10">
            {cardData.map((card, index) => (
              <div
                key={index}
                className={`${
                  index === 1 ? " pt-6" : "bg-white px-6"
                }  w-full md:w-1/3 h-auto  rounded-xl shadow-md bg-white`}
              >
                <h2
                  className={`${
                    index === 1
                      ? "text-[1.125rem] font-semibold"
                      : "text-2xl     font-bold pt-8"
                  }
                  
               mb-2 text-center`}
                >
                  {card.title}
                </h2>
                <div
                  className={`${
                    index === 1
                      ? "bg-[#FCA311] h-auto pb-10 text-white"
                      : "bg-white"
                  } `}
                >
                  <h1 className="text-center text-[2rem]  pt-4">
                    {card.title2}
                  </h1>
                  <div className="flex mb-4 justify-center ">
                    <h3
                      className={`
                      ${index === 0 ? "text-[2.5rem]   " : ""}

                      ${index === 1 ? "text-[3rem] text-white " : ""}
                      
                      ${index === 2 ? "text-[2rem] " : ""}
                      text-primary02 font-bold text-center`}
                    >
                      {card.budget1}
                    </h3>
                    <h3
                      className={`
                        ${
                          index === 0
                            ? "text-[2rem] text-primary03 pt-[0.7rem]  "
                            : ""
                        }
                      ${
                        index === 1 ? "text-[2rem] pt-[1.1rem] text-white " : ""
                      }
                      ${index === 2 ? "text-[1.5rem] text-primary03 pt-2 " : ""}
                       text-primary02 font-bold text-center`}
                    >
                      {card.budget2}
                    </h3>
                  </div>
                  <div
                    className={`${
                      index === 1 ? " px-5" : "px-0"
                    } list-disc  space-y-3 `}
                  >
                    <li>{card.facility1}</li>
                    <li>{card.facility2}</li>
                    <li>{card.facility3}</li>
                    <li>{card.facility4}</li>
                  </div>
                </div>
                <div className="flex justify-center p-6">
                  <button
                    type="submit"
                    className="w-[10rem] h-[2.5rem] text-white bg-gradient01 rounded-md"
                  >
                    Submit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    
    {/* )} */}
    </>
  );
};

export default EnrollForCourses;

// import React from 'react'

// const EnrollNowSyllabus = () => {
//   return (
//     <>
//     <div>
// <div className='p-20'>
//     <h1 className='text-[3rem] text-[#000000]'>Welham&apos;s syllabus</h1>

//     <div>
//         <h1 className='text-[#01202B] text-[2rem]'>Need more clarity?</h1>
//         <h1 className='text-[#01202B] text-[0.9rem]'>
//         Book a session with our expert
//         </h1>
//     </div>
// </div>
//     </div>
//     </>
//   )
// }

// export default EnrollNowSyllabus

import Image from "next/image";
import React from "react";
export default function EnrollNowSyllabus() {
  const list = [
    {
      name: "Aptitude",
    },
    {
      name: "General Knowledge",
    },
    {
      name: "Maths",
    },
    {
      name: "English",
    },
  ];
  return (
    <>
      <h1 className="text-[3rem] text-[#000000] font-bold pt-20 px-20">
        Welham&apos;s syllabus
      </h1>

      <div className="flex justify-center items-center gap-10">
        <div className="w-[26.188rem] h-[16.25rem] bg-[#FAF9FF] p-4">
          <div className="flex ">
            <div>
              <h1 className="text-[#01202B] text-[2rem] font-bold">
                Need more clarity?
              </h1>
              <h1 className="text-[#01202B] text-[0.9rem]">
                Book a session with our expert
              </h1>
            </div>
            <div>
              <Image
                src="/icons/sessionClarityHero.svg"
                width={188}
                height={160}
                alt="img"
              />
            </div>
          </div>
          <div className=" pt-8 ">
            <button
              type="submit"
              className="w-[19.3rem] h-[3rem] text-white   rounded-md border border-primary02 bg-primary02 border-custom"
            >
              Book a Demo
            </button>
          </div>
        </div>

        <div className="p-6 rounded-lg bg-[#FFFFFF] ">
          <div className="grid grid-cols-2 gap-2">
            {list.map((item, index) => (
              <div
                key={index}
                className="border-b border-r border-[#F0F0F0] w-[290px] h-[169px] p-6"
              >
                <div className="flex items-center space-x-6">
                  <div className="">
                    <Image
                      src="/images/apti.svg"
                      width={64}
                      height={64}
                      alt="image"
                    />
                  </div>
                  <div className="font-semibold text-14px"> {item.name}</div>
                </div>
                <div className="flex pt-4 space-x-8 text-primary02">
                  <div className="">
                    <p className="font-semibold text-14px">View syllabus </p>
                  </div>
                  <div className="font-semibold text-14px">
                   
                    View full schedule
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

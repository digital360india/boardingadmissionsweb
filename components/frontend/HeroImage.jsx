import React from 'react'
import Desktop from "@/public/images/Desktop-2.svg"

export default function HeroImage() {
  return (
    <div
    className="w-full h-[480px] bg-no-repeat bg-cover bg-center relative"
    style={{ backgroundImage: `url(${Desktop.src})` }}
  >
    <div className="lg:w-[31.25rem]  lg:px-16 pl-[24px]   absolute  bottom-20 text-white  ">
      <h1 className="lg:text-56px text-[32px]  font-semibold lg:w-[31.25rem]  leading-tight">
      Schools
      </h1>
      <p className='lg:text-18px text-14px lg:w-full w-[230px] my-4'>Lorem ipsum dolor sit amet consectetur. Id lectus gravida convallis</p>
      <div className="mt-6 lg:w-[12.5rem] w-[8.5rem] lg:py-0 py-1 lg:h-[2.6rem] bg-white rounded-md flex items-center justify-center cursor-pointer">
        <button className="text-[#13375D]">Primary</button>
      </div>
    </div>
  </div>
  )
}

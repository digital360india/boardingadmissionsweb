import React from 'react'
import Desktop from "@/public/images/Desktop-2.svg"

export default function HeroImage() {
  return (
    <div
    className="w-full h-[480px] bg-no-repeat bg-cover bg-center relative mt-[6.5%]"
    style={{ backgroundImage: `url(${Desktop.src})` }}
  >
    <div className="w-[31.25rem]  px-16   absolute  bottom-20 text-white  ">
      <h1 className="text-56px  font-semibold w-[31.25rem]  leading-tight">
      Schools
      </h1>
      <p className='text-18px my-4'>Lorem ipsum dolor sit amet consectetur. Id lectus gravida convallis</p>
      <div className="mt-6 w-[12.5rem] h-[2.6rem] bg-white rounded-md flex items-center justify-center cursor-pointer">
        <button className="text-[#13375D]">Primary</button>
      </div>
    </div>
  </div>
  )
}

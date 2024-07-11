"use client"
import React from 'react'
import boardingHero from '@/public/icons/boardinghero.svg';

const OurCourses = () => {
  return (
    <div 
      className="w-full h-[480px] bg-no-repeat bg-cover bg-center relative" 
      style={{ backgroundImage: `url(${boardingHero.src})` }}
    >
      <div className='w-[470px] px-16   absolute  bottom-20  text-white  '>
        <h1 className='text-[3.5rem] font-poppins '>Our Courses</h1>
        <p className='mt-2 text-lg'>Lorem ipsum dolor sit amet consectetur. Id lectus gravida convallis</p>
        <div className='mt-6 w-[13.75rem] h-[2.5rem] bg-white rounded-md flex items-center justify-center'>
          <button className='text-[#13375D]'>Primary</button>
        </div>
      </div>
    </div>
  )
}

export default OurCourses

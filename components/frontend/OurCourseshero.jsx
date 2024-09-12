"use client"
import React from 'react'

const OurCourses = () => {
  return (
    <div 
      className="w-full h-[480px] bg-no-repeat bg-cover bg-center relative" 
      style={{ backgroundImage: `url(/icons/boardinghero.svg)` }}
    >
      <div className='w-[19rem] md:w-[470px] px-8 md:px-16   absolute  bottom-20  text-white  '>
        <h1 className='text-[2rem] md:text-[3.5rem] font-poppins '>Our Courses</h1>
        <p className='mt-2 text-sm md:text-lg'>Explore and Enroll in Courses Designed for Your Future Success!</p>
        {/* <div className='mt-6 w-[10rem] h-[2.22rem]  md:w-[13.75rem] md:h-[2.5rem] bg-white rounded-md flex items-center justify-center'>
          <button className='text-[#13375D]'>Explore Now</button>
        </div> */}
      </div>
    </div>
  )
}

export default OurCourses

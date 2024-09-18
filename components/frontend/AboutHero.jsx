import Image from 'next/image'
import React from 'react'

export default function AboutHero() {
  return (
    <div className='h-full  bg-primary02 lg:pt-8 pt-[25%]'>
    <div className='lg:h-[680px] w-full flex items-center bg-primary02 xl:px-[100px] lg:px-[40px] px-[24px]'>
        <div className='flex justify-between lg:gap-0  w-full '>
      <div className='order-2 lg:order-1'>
      <Image
                src="/images/aboutimg.svg"
                width={1000}
                height={1000}
                alt="Image"
                className='lg:w-[316px] lg:h-[459px] w-[214px] h-[311]'
              />
      </div>

      <div className='lg:order-2 order-1 pr-2 flex-col my-auto lg:space-y-0 space-y-9'>
        <div>
            <p className='font-medium text-[#FCA311] lg:text-32px text-18px'>About</p>
            <p className='lg:text-24px text-[#EDDCD2] lg:py-[20px] text-16px'>10+ teachers</p>
        </div>
        <div>
            <p className='font-medium text-[#FCA311] lg:text-32px text-18px'>Expertise</p>
            <p className='lg:text-24px text-16px text-[#EDDCD2] lg:py-[20px]'>6+ Courses</p>
        </div>
        <div>
        <p className='font-medium text-[#FCA311] lg:text-32px text-18px'>Experience</p>
        <p className='lg:text-24px text-16px text-[#EDDCD2] lg:py-[20px]'>Since 2022</p>
        </div>
      </div>

      <div className='w-[310px] h-[459px] text-white lg:order-3 lg:block hidden text-[1.18rem]'>
      <p className='pb-10'>Boarding Admissions is dedicated to guiding students toward success in entrance exams for India&apos;s premier boarding schools. </p>
      <p className='pb-10'> With a 90% success rate, our specialized courses equip students with the essential knowledge and skills to secure admissions to top institutions, paving the way for their bright educational futures.</p>
        {/* <p>d in sit aliquet vel neque adipiscing.d in sit aliquet vel neque adipiscing.</p> */}
      </div>
    </div>
   
    </div> 
    <div className='text-white lg:hidden block px-[24px] pt-6 text-justify'>
        <p className='pb-10'>Boarding Admissions is dedicated to guiding students toward success in entrance exams for India&apos;s premier boarding schools. </p>
        <p className='pb-10'> With a 90% success rate, our specialized courses equip students with the essential knowledge and skills to secure admissions to top institutions, paving the way for their bright educational futures.</p>
        {/* <p>d in sit aliquet vel neque adipiscing.d in sit aliquet vel neque adipiscing.</p> */}
      </div>
    </div>
  )
}

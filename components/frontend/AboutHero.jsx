import Image from 'next/image'
import React from 'react'

export default function AboutHero() {
  return (
    <div className='h-full  bg-[#333333] py-16'>
    <div className='lg:h-[680px] w-full flex items-center bg-[#333333] xl:px-[100px] lg:px-[40px] px-[24px]'>
        <div className='flex justify-between lg:gap-0  w-full '>
      <div className='order-2 lg:order-1'>
      <Image
                src="/images/aboutimg.svg"
                width={1}
                height={1}
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

      <div className='w-[310px] h-[459px] text-white lg:order-3 lg:block hidden'>
        <p className='pb-10'>Lorem ipsum dolor sit amet consectetur. Augue sit dictum aenean velit. Sociis bibendum eu ut id lectus at ornare eget vel. Fames amet cras sagittis phasellus amet. Vel est nulla maecenas pretium sed. Scelerisque vulputate eget in nibh aliquet ultrices vel tempus ut. </p>
        <p className='pb-10'>Id pellentesque arcu fermentum euismod neque turpis amet amet. Id in sit aliquet vel neque adipiscing. Cursus nisi scelerisque orci vivamus est in. Hac quam magna.</p>
        <p>d in sit aliquet vel neque adipiscing.d in sit aliquet vel neque adipiscing.</p>
      </div>
    </div>
   
    </div> 
    <div className='text-white lg:hidden block px-[24px] pt-6'>
        <p className='pb-10'>Lorem ipsum dolor sit amet consectetur. Augue sit dictum aenean velit. Sociis bibendum eu ut id lectus at ornare eget vel. Fames amet cras sagittis phasellus amet. Vel est nulla maecenas pretium sed. Scelerisque vulputate eget in nibh aliquet ultrices vel tempus ut. </p>
        <p className='pb-10'>Id pellentesque arcu fermentum euismod neque turpis amet amet. Id in sit aliquet vel neque adipiscing. Cursus nisi scelerisque orci vivamus est in. Hac quam magna.</p>
        <p>d in sit aliquet vel neque adipiscing.d in sit aliquet vel neque adipiscing.</p>
      </div>
    </div>
  )
}

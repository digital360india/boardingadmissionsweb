import Image from 'next/image'
import React from 'react'

export default function AboutHero() {
  return (
    <div className='h-[680px] flex items-center bg-[#333333] px-[100px]'>
        <div className='flex justify-between w-full '>
      <div>
      <Image
                src="/images/aboutimg.svg"
                width={316}
                height={459}
                alt="Image"
              />
      </div>
      <div>
        <div>
            <p className='font-medium text-[#FCA311] text-32px'>About</p>
            <p className='text-24px   text-[#EDDCD2] py-[20px]'>10+ teachers</p>
        </div>
        <div>
            <p className='font-medium text-[#FCA311] text-32px'>Expertise</p>
            <p className='text-24px   text-[#EDDCD2] py-[20px]'>6+ Courses</p>
        </div>
        <div>
        <p className='font-medium text-[#FCA311] text-32px'>Experience</p>
        <p className='text-24px   text-[#EDDCD2] py-[20px]'>Since 2022</p>
        </div>
      </div>
      <div className='w-[310px] h-[459px] text-white'>
        <p className='pb-10'>Lorem ipsum dolor sit amet consectetur. Augue sit dictum aenean velit. Sociis bibendum eu ut id lectus at ornare eget vel. Fames amet cras sagittis phasellus amet. Vel est nulla maecenas pretium sed. Scelerisque vulputate eget in nibh aliquet ultrices vel tempus ut. </p>
        <p className='pb-10'>Id pellentesque arcu fermentum euismod neque turpis amet amet. Id in sit aliquet vel neque adipiscing. Cursus nisi scelerisque orci vivamus est in. Hac quam magna.</p>
        <p>d in sit aliquet vel neque adipiscing.d in sit aliquet vel neque adipiscing.</p>
      </div>
    </div>
    </div>
  )
}

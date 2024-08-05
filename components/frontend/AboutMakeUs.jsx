import Image from 'next/image'
import React from 'react'

export default function AboutMakeUs() {
  return (
    <div className='flex h-full w-full'>
        <div className='lg:block hidden'>
        <Image
                src="/images/aboutgirl.svg"
                width={700}
                height={700}
                alt="Image"
              />
        </div>

        <div className='bg-[#F4FCFC] '>
          <div>
            <p className='text-primary02 lg:text-32px lg:text-center text-[28px] font-medium lg:font-semibold lg:my-2 lg:px-[0] px-[24px] my-3'>What Makes us Different</p>
            <p className='text-[16px] lg:text-center lg:px-[13%] px-[24px]'>Id pellentesque arcu fermentum euismod neque turpis amet amet. Id in sit aliquet vel neque adipiscing. Cursus nisi scelerisque orci vivamus est in. Hac quam magna.Id</p>
            </div>

            <div className='lg:hidden flex justify-center my-4 px-[24px]'>
        <Image
                src="/images/aboutgirl2.svg"
                className='w-full '
                width={1}
                height={1}
                alt="Image"
              />
        </div>


        <div className='flex  items-center justify-center xl:mt-5 mt-2'>
  <div className='relative w-[90vw] xl:w-[35vw] h-auto xl:h-[38vh] lg:h-[27vh] lg:w-[40vw]'>
    <Image
      src="/images/lines.svg"
      width={2}
      height={2}
      alt="Image"
      className='xl:w-[540px] xl:h-[450px] lg:w-[400px] lg:h-[270px] h-full w-full object-contain'
    />
    {/* First Column - Top Left */}
    <div className='absolute top-[10%] xl:top-[50px] lg:top-[10%] left-[13%] md:left-[10%] lg:left-[8%]  lg:text-left  md:w-[40%] lg:w-[40%]'>
      <p className='text-primary02 text-[20px] md:text-[24px] xl:text-[32px] lg:text-[28px] xl:pb-4 lg:pb-1 pb-4'>lorem ipsum</p>
      <p className='text-[14px] w-[130px] md:w-full md:text-[16px] text-center lg:text-start'>Id pellentesque arcu fermentum</p>
    </div>
    {/* Second Column - Top Right */}
    <div className='absolute top-[10%] xl:top-[50px] lg:top-[10%] left-[50%] md:left-[55%] lg:left-[55%] text-center lg:text-left md:w-[40%] lg:w-[40%]'>
      <p className='text-primary02 text-[20px] md:text-[24px] xl:text-[32px] lg:text-[28px] xl:pb-4 lg:pb-1 pb-4'>lorem ipsum</p>
      <p className='text-[14px] md:text-[16px]'>Id pellentesque arcu fermentum</p>
    </div>
    {/* Third Column - Bottom Left */}
    <div className='absolute top-[60%] left-[5%] lg:top-[50%] xl:top-[240px] md:left-[10%] lg:left-[6%] text-center lg:text-left  md:w-[40%] lg:w-[40%]'>
      <p className='text-primary02 text-[20px] md:text-[24px] xl:text-[32px] lg:text-[28px] xl:pb-4 lg:pb-1 pb-4'>lorem ipsum</p>
      <p className='text-[14px] w-[160px] md:w-full md:text-[16px]'>Id pellentesque arcu fermentum</p>
    </div>
    {/* Fourth Column - Bottom Right */}
    <div className='absolute top-[60%] lg:top-[50%] xl:top-[240px] left-[50%] md:left-[55%] lg:left-[55%] text-center lg:text-left md:w-[40%] lg:w-[40%]'>
      <p className='text-primary02 text-[20px] md:text-[24px] xl:text-[32px] lg:text-[28px] xl:pb-4 lg:pb-1 pb-4'>lorem ipsum</p>
      <p className='text-[14px] md:text-[16px]'>Id pellentesque arcu fermentum</p>
    </div>
  </div>
</div>


        </div>
    </div>
  )
}

import Image from 'next/image'
import React from 'react'

export default function AboutMakeUs() {
  return (
    <div className='flex h-full w-full'>
        <div>
        <Image
                src="/images/aboutgirl.svg"
                width={700}
                height={700}
                alt="Image"
              />
        </div>

        <div className='bg-[#F4FCFC] '>
            <p className='text-primary02 text-32px font-semibold text-center my-6'>What Makes us Different</p>
            <p className='text-[16px] font-normal text-center px-[20%]'>Id pellentesque arcu fermentum euismod neque turpis amet amet. Id in sit aliquet vel neque adipiscing. Cursus nisi scelerisque orci vivamus est in. Hac quam magna.Id</p>
<div className='flex items-center justify-center mt-10'>
<div className='relative'>
<Image
                src="/images/lines.svg"
                width={2}
                height={2}
                alt="Image"
                className='w-[35vw] h-[50vh]'
              />
<div className='absolute inset-0 top-0 left-6 text-center w-[40%]'>
    <p className='text-32px text-primary02 font-normal pb-4'>lorem ipsum</p>
    <p className=''>Id pellentesque arcu fermentum</p>
</div>
<div className='absolute inset-0 top-0 left-[55%] text-center w-[40%]'>
    <p className='text-32px text-primary02 font-normal pb-4'>lorem ipsum</p>
    <p className=''>Id pellentesque arcu fermentum</p>
</div>
<div className='absolute inset-0 top-[50%] left-6 text-center w-[40%]'>
    <p className='text-32px text-primary02 font-normal pb-4'>lorem ipsum</p>
    <p className=''>Id pellentesque arcu fermentum</p>
</div>
<div className='absolute inset-0 top-[50%] left-[55%] text-center w-[40%]'>
    <p className='text-32px text-primary02 font-normal pb-4'>lorem ipsum</p>
    <p className=''>Id pellentesque arcu fermentum</p>
</div>
</div>
</div>

        </div>
    </div>
  )
}

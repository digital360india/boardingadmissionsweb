import React from 'react'

export default function AboutForm() {
  return (
    <div className='flex items-center w-full h-[1000px]'>
      <div className='w-[80%] h-[86%]  mx-auto bg-[#F4FCFC80] border-8 rounded-md border-white' style={{ boxShadow: '0 0 6px 0 rgba(0, 0, 0, 0.32)' }}
      >
        <p className='text-primary02 text-[48px] font-semibold text-center py-8'>Leave Your Question Here</p>
        <p className='text-24px   text-center pb-6'>We aim to respond within 24 hours.</p>

<div>
    <div className='flex justify-center gap-8 py-10'>
    <input className='rounded-md p-4 w-[36vw] border border-[#E7E7E7]' type="text" placeholder='First Name*'/>
    <input className='rounded-md p-4 w-[36vw] border border-[#E7E7E7]' type="text" placeholder='Last Name*' />
    </div>
    <div className='flex justify-center gap-8'>
    <input className='rounded-md p-4 w-[36vw] border border-[#E7E7E7]' type="text" placeholder='Email*'/>
    <input className='rounded-md p-4 w-[36vw] border border-[#E7E7E7]' type="text" placeholder='Phone Number*' />
    </div>
    <div className='flex justify-center py-10'>
    <textarea className='text-[#667085] w-[74vw] rounded-md p-4 border border-[#E7E7E7]' name="" rows={10} cols={100} placeholder='Message' id=""></textarea>
    </div>
    <div className=" flex justify-end pr-10 rounded-md">
    <button className="text-white w-[300px] h-[56px] bg-gradient01 border-custom rounded-md">Primary</button>
    </div>
</div>

      </div>
    </div>
  )
}

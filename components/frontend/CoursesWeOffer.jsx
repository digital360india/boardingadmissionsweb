
import React from 'react'
import CourseCarouel from './CourseCarouel'

export default function CoursesWeOffer() {
  return (
    <div className='bg-[#075D70] xl:px-[100px] lg:px-[40px] px-[12px] pt-[60px]'>
        <div className='lg:ml-0 ml-4'>
          <div>
      <p className='lg:text-24px text-[16px] py-2 text-white  '>COURSES WE OFFER</p></div>
      <div className='lg:text-[48px] text-[32px] text-white font-medium lg:leading-normal leading-tight lg:w-[848px] w-full'>Enroll Now for Tailored Preparation and Guaranteed Success</div></div>
      <CourseCarouel/>
    </div>
  )
}




// // pages/index.js
// import React from 'react';
// import Head from 'next/head';
// import dynamic from 'next/dynamic';

// const SwiperComponent = dynamic(() => import('../components/SwiperComponent'), {
//   ssr: false,
// });

// export default function Home() {
//   return (
//     <div>
   

//       <main className="flex flex-col items-center justify-center min-h-screen py-2">
//         <h1 className="text-4xl font-bold mb-8">My Swiper</h1>
//         <SwiperComponent />
//       </main>
//     </div>
//   );
// }

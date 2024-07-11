
import React from 'react'
import CourseCarouel from './CourseCarouel'

export default function CoursesWeOffer() {
  return (
    <div className='bg-[#075D70] px-[100px] pt-[60px]'>
        <div>
      <p className='text-24px text-white font-normal'>COURSES WE OFFER</p></div>
      <div className='text-[48px] text-white font-medium w-[848px]'>Enroll Now for Tailored Preparation and Guaranteed Success</div>
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

import AboutHero from '@/components/frontend/AboutHero'
import AboutMakeUs from '@/components/frontend/AboutMakeUs'
import AboutMission from '@/components/frontend/AboutMission'
import AboutSuccess from '@/components/frontend/AboutSuccess'
import BookaDemo from '@/components/frontend/BookaDemo'
// import OurCoursesForm from '@/components/frontend/OurCoursesForm'
import React from 'react'

export default function AboutusPage() {
  return (
    <div className=''>
      <AboutHero/>
      <AboutMission/>
      <AboutMakeUs/>
      <AboutSuccess/>
      {/* <OurCoursesForm /> */}
      <BookaDemo />
    </div>
  )
}

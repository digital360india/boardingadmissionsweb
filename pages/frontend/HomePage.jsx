import CoursesWeOffer from '@/components/frontend/CoursesWeOffer'
// import FeaturedBlog from '@/components/frontend/FeaturedBlog'
import OurTeam from '@/components/frontend/OurTeam'
import TrustedByStudent from '@/components/frontend/TrustedByStudent'
import WhoWeAre from '@/components/frontend/WhoWeAre'
import React from 'react'
import '@/app/globals.css'
import Stories from '@/components/frontend/Stories'
import HeroCarousel from '@/components/frontend/HeroCarousel'
import ScrollAnimation from '@/components/frontend/ScrollAnimation'
import SchoolFilter from './SchoolFilter'
const HomePage = () => {



  return (
    <div>
      <HeroCarousel/> 
      <SchoolFilter />
      <WhoWeAre/>
      <ScrollAnimation/>
      <TrustedByStudent/>
      <CoursesWeOffer/>
      <OurTeam/>
      
      {/* <FeaturedBlog/> */}
      <Stories/>

    </div>
  )
}

export default HomePage
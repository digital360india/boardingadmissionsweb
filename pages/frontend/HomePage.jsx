import CoursesWeOffer from '@/components/frontend/CoursesWeOffer'
import FeaturedBlog from '@/components/frontend/FeaturedBlog'
import Navbar from '@/components/frontend/Navbar'
import OurTeam from '@/components/frontend/OurTeam'
import TrustedByStudent from '@/components/frontend/TrustedByStudent'
import WhoWeAre from '@/components/frontend/WhoWeAre'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <WhoWeAre/>
      <TrustedByStudent/>
      <CoursesWeOffer/>
      <OurTeam/>
      <FeaturedBlog/>
    </div>
  )
}

export default HomePage
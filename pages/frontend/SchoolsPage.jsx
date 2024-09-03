import Faq from '@/components/frontend/Faqdata'
import HeroImage from '@/components/frontend/HeroImage'
import SchoolWeCracked from '@/components/frontend/SchoolWeCracked'
import TopSchools from '@/components/frontend/TopSchools'
import TrustedByStudent from '@/components/frontend/TrustedByStudent'
import React from 'react'

const SchoolsPage = () => {
  return (
    <div>
      <HeroImage/>
      <SchoolWeCracked/>
    <TrustedByStudent/>
    <TopSchools/>
    {/* <Faq/> */}
    </div>
  )
}

export default SchoolsPage
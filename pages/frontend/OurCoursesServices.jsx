import React from 'react'
import ServicePage from '@/components/frontend/ServicePage'
import ServicesHero from '@/components/frontend/ServicesHero'
const OurCoursesServices = () => {
        const packageId = "5h7BEq1xnOxTnAR2sMdt"; 

  return (
    <>
    <ServicesHero id={packageId} />
    <ServicePage />
    </>
  )
}

export default OurCoursesServices
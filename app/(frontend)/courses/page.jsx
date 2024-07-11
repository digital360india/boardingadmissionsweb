import Footer from '@/components/frontend/Footer'
import OurCoursesBenefits from '@/components/frontend/OurCoursesBenefits'
import OurCoursesCards from '@/components/frontend/OurCoursesCards'
import OurCoursesForm from '@/components/frontend/OurCoursesForm'
import OurCourseshero from '@/components/frontend/OurCourseshero'
import React from 'react'

const page = () => {
  return (
    <>
      <OurCourseshero />
      <OurCoursesBenefits />
      <OurCoursesCards />
      <OurCoursesForm />
      <Footer />
    </>
  )
}

export default page
import React from "react";
import OurCoursesBenefits from "@/components/frontend/OurCoursesBenefits";
import OurCoursesCards from "@/components/frontend/OurCoursesCards";
import OurCoursesForm from "@/components/frontend/OurCoursesForm";
import OurCourseshero from "@/components/frontend/OurCourseshero";
const OurCourses = () => {
  return (
    <>
      <OurCourseshero />
      <OurCoursesBenefits />
      <OurCoursesCards />
      <OurCoursesForm />
    </>
  );
};

export default OurCourses;

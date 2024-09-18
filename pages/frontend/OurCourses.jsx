import React from "react";
import OurCoursesBenefits from "@/components/frontend/OurCoursesBenefits";
import OurCoursesCards from "@/components/frontend/OurCoursesCards";
import OurCoursesForm from "@/components/frontend/OurCoursesForm";
import OurCourseshero from "@/components/frontend/OurCourseshero";
import BookaDemo from "@/components/frontend/BookaDemo";
const OurCourses = () => {
  return (
    <>
      <OurCourseshero />
      <OurCoursesBenefits />
      <OurCoursesCards />
      {/* <OurCoursesForm /> */}
      <BookaDemo />
    </>
  );
};

export default OurCourses;

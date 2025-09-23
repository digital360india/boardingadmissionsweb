import CustomizedCoursesHero from "@/components/frontend/CustomizedCoursesHero";
import CustomizedCoursesPage from "@/components/frontend/CustomizedCoursesPage";
import React from "react";

const CustomizedCourses = () => {
   const packageId = "0qhKkbXUptCF6xCyBRVY"; 
  return (
    <>
      <CustomizedCoursesHero id={packageId}  />
      <CustomizedCoursesPage />
    </>
  );
};

export default CustomizedCourses;

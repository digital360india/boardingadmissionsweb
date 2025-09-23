import React from "react";
import FoundationcoursePage from "@/components/frontend/FoundationcoursePage";
import FoundationcourseHero from "@/components/frontend/FoundationcourseHero";

const Foundationcourse = () => {
     const packageId = "0qhKkbXUptCF6xCyBRVY"; 

  return (
    <>
      <FoundationcourseHero id={packageId}  />
      <FoundationcoursePage />
    </>
  );
};

export default Foundationcourse;

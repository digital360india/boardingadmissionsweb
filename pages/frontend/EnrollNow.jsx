import EnrollNowAbout from "@/components/frontend/EnrollNowAbout";
import EnrollNowCoursesWeOffer from "@/components/frontend/EnrollNowCoursesWeOffer";
import EnrollNowHero from "@/components/frontend/EnrollNowHero";
import EnrollNowSellingPackage from "@/components/frontend/EnrollNowSellingPackage";
import EnrollNowSyllabus from "@/components/frontend/EnrollNowSyllabus";
import Stories from "@/components/frontend/Stories";
import React from "react";

const EnrollNow = () => {
  return (
    <>
      <EnrollNowHero />
      <EnrollNowCoursesWeOffer />
      <EnrollNowAbout />
      <EnrollNowSellingPackage />
      <EnrollNowSyllabus />
    </>
  );
};

export default EnrollNow;

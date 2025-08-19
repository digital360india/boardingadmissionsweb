import CoursesWeOffer from "@/components/frontend/CoursesWeOffer";
import OurTeam from "@/components/frontend/OurTeam";
import TrustedByStudent from "@/components/frontend/TrustedByStudent";
import WhoWeAre from "@/components/frontend/WhoWeAre";
import React from "react";
import "@/app/globals.css";
import Stories from "@/components/frontend/Stories";
import HeroCarousel from "@/components/frontend/HeroCarousel";
import ScrollAnimation from "@/components/frontend/ScrollAnimation";
import SchoolLogoCard from "@/components/frontend/SchoolLogoCard";
import SchoolFilter from "./SchoolFilter";
import SchoolForm from "@/components/frontend/SchoolForm";
const HomePage = () => {
  return (
    <div>
      <HeroCarousel />
      <div className="hidden lg:block">
        <SchoolFilter />
      </div>
      <div className="lg:hidden block">
        <SchoolForm />
      </div>
      <WhoWeAre />
      <div className="hidden lg:block">
        <ScrollAnimation />
      </div>
      <div className="lg:hidden block">
        <SchoolLogoCard />
      </div>
      <Stories />
      <CoursesWeOffer />
      <TrustedByStudent />
      <OurTeam />
    </div>
  );
};

export default HomePage;

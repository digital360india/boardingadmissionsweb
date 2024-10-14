import React from "react";
import WelhamBoysPage from "@/pages/frontend/schoolpages/WelhamBoysPage";

export const metadata = {
  title: "Welham Boys School | Admission 2025-26",
  description:
    "Join Welham Boys School for 2025-2026! Provide your child with top-tier education and a nurturing environment. Apply today!",
  keywords:
    "Boarding School Admissions, Boarding School consultancy, School consultancy, Boarding Admissions, Boarding School Entrance Prep, Welham Boys, Welham Boys admission, Welham Boys entrance",
  structuredData: [
    {
      "@context": "https://schema.org/",
      "@type": "Product",
      name: "Boarding Admission",
      image: "https://www.boardingadmissions.com/largescreen/welhamboys.png",
      description:
        "Welham Boys' School 2025-26 admissions are now open! Experience a blend of tradition and innovation in a supportive and enriching setting",
      brand: {
        "@type": "Brand",
        name: "Welham Boys School",
      },
      sku: "203",
      offers: {
        "@type": "AggregateOffer",
        url: "https://www.boardingadmissions.com/school/wellham-boys-school",
        priceCurrency: "INR",
        lowPrice: "",
        offerCount: "1",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.3",
        bestRating: "5",
        worstRating: "1",
        ratingCount: "203",
      },
    },
    {
      "@context": "http://schema.org/",
      "@type": "School",
      address: {
        "@type": "PostalAddress",
        addressCountry: "India",
        addressLocality: "Dehradun",
        addressRegion: "Uttarakhand",
        postalCode: "248001",
        streetAddress: "5, Acharya Narender Dev Marg",
        telephone: "8979544955",
        description:
          "Admissions for 2025-26 are open at Welham Boys' School. Discover a learning environment dedicated to academic excellence and holistic development.",
      },
      areaServed: "Dalanwala",
      name: "Welham Boys School",
      image: "https://www.boardingadmissions.com/largescreen/welhamboys.png",
      url: "https://www.boardingadmissions.com/school/wellham-boys-school",
      sameAs: [
        "https://www.instagram.com/welhamboysschool/?hl=en",
        "https://www.facebook.com/WelhamBoys/",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does the Welham Boys admissions process work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Welham Boys admissions process starts with registration, followed by a Proficiency & Aptitude Assessment. Successful candidates are then invited for an interaction with both the child and parents. Admission decisions are made based on performance in these assessments and the interaction.",
          },
        },
        {
          "@type": "Question",
          name: "What are the key subjects for the Welham Boys entrance exam?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For Classes IV-IX, the Welham Boys entrance exam includes subjects like English, Hindi, Mathematics, and Life Skills. For Class XI, the subjects vary by stream: Science Stream includes English, Math, and Science; Commerce and Humanities Streams include English and Math.",
          },
        },
        {
          "@type": "Question",
          name: "Are there specific age requirements for Welham Boys admissions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Welham Boys School has age criteria based on the class for which a student is applying. For example, students applying for Class IV should be between 8 to 9 years old as of April 1st of the year of admission. This ensures students are placed in the appropriate grade level.",
          },
        },
        {
          "@type": "Question",
          name: "What facilities does Welham Boys School offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Welham Boys School provides extensive facilities including modern classrooms, science labs, computer labs, a library, sports fields, and residential accommodations. These facilities are designed to support both the academic and extracurricular needs of the students.",
          },
        },
        {
          "@type": "Question",
          name: "What is the focus of education at Welham Boys School?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The school focuses on providing a well-rounded education that balances academics with extracurricular activities. Students are encouraged to excel not only in their studies but also in sports, arts, and leadership, fostering all-around development.",
          },
        },
      ],
    },
  ],
};

const Page = () => {
  return (
    <div>
      <WelhamBoysPage />
    </div>
  );
};

export default Page;

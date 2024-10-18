import React from 'react';
import ScindiaSchoolPage from '@/pages/frontend/schoolpages/ScindiaSchoolPage';

export const metadata = {
  title: "Scindia Girls School | Admission 2025-26",
  description:
    "Join Scindia Girls School for 2025-2026! Provide your girl with top-tier education and a nurturing environment. Apply today!",
  keywords:
    "Boarding School Admissions, Boarding School consultancy, School consultancy, Boarding Admissions, Boarding School Entrance Prep, Scindia Girls, Scindia Girls admission, Scindia Girls entrance",
  structuredData: [
    {
      "@context": "https://schema.org/",
      "@type": "Product",
      name: "Boarding Admission",
      image: "https://www.boardingadmissions.com/images/banner3.jpg",
      description:
        "Scindia Girls School 2025-26 admissions are now open! Experience a blend of tradition and innovation in a supportive and enriching setting.",
      brand: {
        "@type": "Brand",
        name: "Scindia Girls School",
      },
      sku: "128",
      offers: {
        "@type": "AggregateOffer",
        url: "https://www.boardingadmissions.com/school/scindia-girls-school",
        priceCurrency: "INR",
        lowPrice: "",
        offerCount: "1",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.6",
        bestRating: "5",
        worstRating: "1",
        ratingCount: "128",
      },
    },
    {
      "@context": "http://schema.org/",
      "@type": "School",
      address: {
        "@type": "PostalAddress",
        addressCountry: "India",
        addressLocality: "Gwalior",
        addressRegion: "Madhya Pradesh",
        postalCode: "474009",
        streetAddress: "Moti Mahal Rd, opposite Navjeevan Hospital, Basant Vihar Colony",
        telephone: "7512322137",
        description:
          "Admissions for 2025-26 are open at Scindia Girls School. Discover a learning environment dedicated to academic excellence and holistic development.",
      },
      areaServed: "Lashkar",
      name: "Scindia Girls School",
      image: "https://www.boardingadmissions.com/images/banner3.jpg",
      url: "https://www.boardingadmissions.com/school/scindia-girls-school",
      sameAs: [
        "https://www.instagram.com/scindiakanyavidyalaya",
        "https://www.facebook.com/ScindiaKanyaVidyalayaGwalior/",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What are the eligibility criteria for Scindia School Admissions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Students must be at least 10½ years old for Class VI admissions, and Class XI candidates are assessed based on the Class X syllabus.",
          },
        },
        {
          "@type": "Question",
          name: "How are the Scindia School Fees structured?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The annual fees amount to ₹7,64,000, including an annual school fee of ₹6,84,000 and an imprest deposit of ₹80,000.",
          },
        },
        {
          "@type": "Question",
          name: "What documents are needed for the admission application?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Required documents include a birth certificate, Aadhar Card, latest mark sheet, Samagra ID (for Madhya Pradesh students), and a passport-size photograph.",
          },
        },
        {
          "@type": "Question",
          name: "When do the entrance assessments take place?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Entrance assessments are conducted in November for classes VI-IX and in December for Class XI.",
          },
        },
        {
          "@type": "Question",
          name: "How can I contact the admissions office?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For inquiries, you can call +91-7828102626 or email admissions@skvgwalior.org for more information regarding Scindia School Admissions.",
          },
        },
      ],
    },
  ],
};

const page = () => {
  return (
    <div>
      <ScindiaSchoolPage />
    </div>
  );
};

export default page;

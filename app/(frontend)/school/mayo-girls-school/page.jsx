import React from "react";
import MayoGirlsPage from "@/pages/frontend/schoolpages/MayoGirlsPage";

export const metadata = {
  title: "Mayo Girls' School | Admission 2025-26",
  description:
    "Secure a spot for your child at Mayo Girls' School for the 2025-2026 academic year! Exceptional education and holistic development await. Apply now!",
  keywords:
    "Boarding School Admissions, Boarding School consultancy, School consultancy, Boarding Admissions, Boarding School Entrance Prep, Mayo Girls, Mayo Girls admission, Mayo Girls entrance",
  structuredData: [
    {
      "@context": "https://schema.org/",
      "@type": "Product",
      name: "Boarding Admission",
      image: "https://www.boardingadmissions.com/largescreen/mayogirls.png",
      description:
        "Secure a spot for your child at Mayo Girls&apos; School for the 2025-2026 academic year! Exceptional education and holistic development await. Apply now!",
      brand: {
        "@type": "Brand",
        name: "Mayo Girl&apos;s School",
      },
      sku: "198",
      offers: {
        "@type": "AggregateOffer",
        url: "https://www.boardingadmissions.com/school/mayo-girls-school",
        priceCurrency: "INR",
        lowPrice: "",
        offerCount: "1",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.5",
        bestRating: "5",
        worstRating: "1",
        ratingCount: "198",
      },
    },
    {
      "@context": "http://schema.org/",
      "@type": "School",
      address: {
        "@type": "PostalAddress",
        addressCountry: "India",
        addressLocality: "Ajmer",
        addressRegion: "Rajasthan",
        postalCode: "305007",
        streetAddress: "Mayo Link Rd",
        telephone: "01452636000",
        description:
          "Apply now for Mayo Girls’ School admission 2025-2026! Discover a nurturing environment where academic excellence and holistic growth go hand in hand.",
      },
      areaServed: "Mayo Lake, Nagra",
      name: "Mayo Girls’ School",
      image: "https://www.boardingadmissions.com/largescreen/mayogirls.png",
      url: "https://www.boardingadmissions.com/school/mayo-girls-school",
      sameAs: [
        "https://www.facebook.com/mcgsajmer/",
        "https://www.instagram.com/mcgsajmer/?hl=en",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the Mayo Girls admissions process like?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mayo Girls admissions involve a comprehensive process starting with registration, followed by an entrance exam. The entrance exam evaluates the student&apos;s capabilities in subjects like English, Mathematics, and General Awareness. After the exam, shortlisted candidates are called for an interview, which plays a key role in the final admission decision.",
          },
        },
        {
          "@type": "Question",
          name: "What subjects are covered in the Mayo Girls entrance exam?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Mayo Girls entrance exam typically assesses students in English, Mathematics, and General Awareness. This exam is designed to gauge the student&apos;s readiness and aptitude for the challenging curriculum offered at Mayo College Girls&apos; School.",
          },
        },
        {
          "@type": "Question",
          name: "What age criteria are there for Mayo Girls admissions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mayo College Girls&apos; School has specific age criteria for admission to different classes. For example, students must meet the age requirements for the class they are applying to as of a certain cutoff date. This ensures that students are placed in the appropriate grade level.",
          },
        },
        {
          "@type": "Question",
          name: "What facilities are available at Mayo College Girls&apos; School?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mayo College Girls&apos; School offers a wide array of facilities, including state-of-the-art classrooms, science and computer labs, a well-stocked library, and sports facilities. The school also has extensive provisions for extracurricular activities such as arts, music, and dance.",
          },
        },
        {
          "@type": "Question",
          name: "How does Mayo Girls School support student development beyond academics?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mayo College Girls&apos; School emphasizes holistic development through various programs that include leadership training, social service, and extracurricular activities. The school encourages students to participate in activities that foster personal growth, ethical values, and a sense of responsibility.",
          },
        },
      ],
    },
  ],
};

const Page = () => {
  return (
    <div>
      <MayoGirlsPage />
    </div>
  );
};

export default Page;

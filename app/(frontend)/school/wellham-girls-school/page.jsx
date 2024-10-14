import React from "react";
import WelhamGirlsPage from "@/pages/frontend/schoolpages/WelhamGirlsPage";
import Navbar from "@/components/frontend/Navbar";

export const metadata = {
  title: "Welham Girls School | Admission 2025-26",
  description:
    "Join Welham Girls' School, Dehradun, for 2025-2026 admissions. Empowering girls through exceptional education and character-building experiences.",
  keywords:
    "Boarding School Admissions, Boarding School consultancy, School consultancy, Boarding Admissions, Boarding School Entrance Prep, Welham Girls, Welham Girls admission, Welham Girls entrance",
  structuredData: [
    {
      "@context": "https://schema.org/",
      "@type": "Product",
      name: "Boarding Admission",
      image: "https://www.boardingadmissions.com/largescreen/welhamgirls.png",
      description:
        "Unlock a bright future at Welham Girls' School! Admissions for 2025-26 are open. Don’t miss the chance to join our vibrant learning community.",
      brand: {
        "@type": "Brand",
        name: "Welham Girls School",
      },
      sku: "219",
      offers: {
        "@type": "AggregateOffer",
        url: "https://www.boardingadmissions.com/school/wellham-girls-school",
        priceCurrency: "INR",
        lowPrice: "",
        offerCount: "1",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.3",
        bestRating: "5",
        worstRating: "1",
        ratingCount: "219",
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
        streetAddress: "Municipal Rd, Panchpuri Colony",
        telephone: "01356670100",
        description:
          "Admissions are now open at Welham Girls' School! Prepare for entrance exams and embark on an extraordinary educational journey.",
      },
      areaServed: "Dalanwala",
      name: "Welham Girls School",
      image: "https://www.boardingadmissions.com/largescreen/welhamgirls.png",
      url: "https://www.boardingadmissions.com/school/wellham-girls-school",
      sameAs: [
        "https://www.instagram.com/welhamgirlsdehradun/?hl=en",
        "https://www.facebook.com/p/WelhamgirlsschoolOfficial-100064324622189/",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the Welham Girls Admissions process?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Welham Girls admissions process involves registering the student, followed by an entrance examination. The entrance exam assesses the student’s abilities in key subjects, and successful candidates are then invited for an interview. The final selection is based on the overall performance in the exam and interview.",
          },
        },
        {
          "@type": "Question",
          name: "What subjects are covered in the Welham Girls entrance exam?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Welham Girls entrance exam typically covers subjects like English, Mathematics, and General Awareness. The exam is designed to evaluate the student's proficiency and aptitude in these core areas, ensuring that the student is well-prepared for the rigorous academic environment at the school.",
          },
        },
        {
          "@type": "Question",
          name: "Are there any age restrictions for Welham Girls admissions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Welham Girls School has specific age criteria for admissions to different classes. For instance, applicants must meet the age requirements as specified for the respective grade they are applying for. This ensures that students are at the appropriate developmental stage for their grade level.",
          },
        },
        {
          "@type": "Question",
          name: "What facilities are provided to students at Welham Girls School?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Welham Girls School offers a wide range of facilities, including modern classrooms, science and computer labs, a well-stocked library, sports facilities, and spaces for arts and cultural activities. These facilities support both academic learning and extracurricular engagement.",
          },
        },
        {
          "@type": "Question",
          name: "How does Welham Girls School support holistic development?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The school emphasizes a balanced approach to education by offering opportunities for students to engage in sports, arts, and community service. This holistic approach ensures that students develop not just academically but also socially, emotionally, and physically.",
          },
        },
      ],
    },
  ],
};

const Page = () => {
  return (
    <div>
      <WelhamGirlsPage />
    </div>
  );
};

export default Page;

import React from "react";

import MayoBoysPage from "@/pages/frontend/schoolpages/MayoBoysPage";

const page = () => {
  return (
    <>
      <head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <title>Mayo Boys School | Admission 2025-26</title>

        <meta
          name="description"
          content="Mayo Boys School offers world-class education with holistic development. Admission for 2025-2026 is open—apply now for a transformative learning experience."
        />
        <meta
          name="keywords"
          content="Boarding School Admissions, Boarding School consultancy, School consultancy, Boarding Admissions, Boarding School Entrance Prep, Mayo Boys, Mayo Boys admission, Mayo Boys entrance"
        />

        <script
          type="application/ld+json"
          class="schema"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Product",
              name: "Boarding Admission",
              image:
                "https://www.boardingadmissions.com/largescreen/mayoboys.png",
              description:
                "Join Mayo Boys School for the 2025-2026 session! Experience top-notch education, excellent facilities, and a vibrant community. Enroll now for a bright future!",
              brand: {
                "@type": "Brand",
                name: "Mayo Boy's School",
              },
              sku: "378",
              offers: {
                "@type": "AggregateOffer",
                url: "https://www.boardingadmissions.com/school/mayo-boys-school",
                priceCurrency: "INR",
                lowPrice: "",
                offerCount: "1",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.4",
                bestRating: "5",
                worstRating: "1",
                ratingCount: "378",
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          class="schema"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org/",
              "@type": "School",
              address: {
                "@type": "PostalAddress",
                addressCountry: "India",
                addressLocality: "Ajmer",
                addressRegion: "Rajasthan",
                postalCode: "305001",
                streetAddress: "Srinagar Road",
                telephone: "01452661154",
                description:
                  "Apply now for Mayo Boys' School Admission 2025-2026! Discover top-notch education, holistic development, and a nurturing environment. Secure your spot today!",
              },
              areaServed: "Alwar Gate",
              name: "Mayo Boys School",
              image:
                "https://www.boardingadmissions.com/largescreen/mayoboys.png",
              url: "https://www.boardingadmissions.com/school/mayo-boys-school",
              sameAs: [
                "https://www.facebook.com/mayocollegeofficial/",
                "https://x.com/mayoboys",
                "https://www.instagram.com/mayo_college/?hl=en",
              ],
            }),
          }}
        />

        <script
          type="application/ld+json"
          class="schema"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is the Mayo College boys admissions process?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Mayo College boys admissions process begins with the registration of the prospective student. After registration, the student must take an entrance exam that evaluates their aptitude in core subjects. Successful candidates are then invited for an interview, which is a key part of the final selection process.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What subjects are included in the Mayo College boys entrance exam?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Mayo College boys entrance exam typically assesses the student's abilities in English, Mathematics, and General Knowledge. This examination is designed to measure the student's readiness for the rigorous academic program offered at Mayo College Boys School.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Are there specific age criteria for Mayo College boys admissions?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, Mayo College Boys School has set age requirements for admission to different classes. Applicants must meet the age criteria as of a certain cutoff date to ensure that they are appropriately placed in the correct grade level, which aligns with their developmental stage.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What facilities are offered at Mayo College Boys School?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mayo College Boys School provides extensive facilities, including modern classrooms, science laboratories, a well-equipped library, sports fields, and boarding houses. The school also offers a wide range of extracurricular activities, supporting the all-round development of its students.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How does Mayo College Boys School support overall student development?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mayo College Boys School emphasizes a holistic approach to education, balancing academics with extracurricular activities such as sports, arts, and leadership programs. This approach ensures that students develop not only academically but also socially, emotionally, and physically.",
                  },
                },
              ],
            }),
          }}
        />
      </head>

      <div>
        <MayoBoysPage />
      </div>
    </>
  );
};

export default page;

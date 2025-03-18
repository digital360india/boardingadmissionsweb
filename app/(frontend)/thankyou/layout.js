// import { Barlow, Inter, Jost, Space_Grotesk } from "next/font/google";
import { Poppins } from "next/font/google";

import Head from "next/head";


export const metadata = {
  viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
  title: "Get Admissions in Top Boarding Schools  | Admission 2025-26",
  description:
    "Enroll in the best boarding schools for 2025-26. Give your child a top-quality education today!",
  keywords:
    "Boarding School Admissions,  Boarding School consultancy, School consultancy, Boarding Admissions, Boarding School Entrance Prep, Welham Girls admission, Mayo Girls Admissions, Bishop Cotton Admission, Welham Boys Admission ",
  openGraph: {
    locale: "en_US",
    type: "website",
    title: "Get Admissions in Top Boarding Schools | Admission 2025-26",
    description:
      "Enroll in the best boarding schools for 2025-26. Give your child a top-quality education today!",
    url: "https://www.boardingadmissions.com/",
    siteName: "Boarding Admissions",
    images: [
      {
        url: "https://www.boardingadmissions.com/welhamstudent.png",
        width: 800,
        height: 600,
        alt: "Welham Student",
      },
    ],
  },
};

export default function Layout({ children }) {
  return (<>
<Head> <script
    dangerouslySetInnerHTML={{
      __html: `
        gtag('event', 'conversion', {
            'send_to': 'AW-10787874522/au7eCNuj2KsaENrNh5go',
            'value': 1.0,
            'currency': 'INR'
        });
      `,
    }}
  />  <div dangerouslySetInnerHTML={{ __html: `
    <script>
      var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
      (function() {
        var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/67c6db8770efd41916940706/1ilgcj2u3';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
      })();
    </script>
  `}} /></Head>
  <body>{children}</body>
  </>
  
  );
}

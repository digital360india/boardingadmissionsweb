import { Barlow, Inter, Jost, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";
import { UserProvider } from "@/userProvider";
import Head from "next/head"; // Import Head for adding elements to the head section

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "100", "200", "300", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
<head>
  <meta name="viewport" content={metadata.viewport} />
  <meta name="description" content={metadata.description} />
  <meta name="keywords" content={metadata.keywords} />
  <meta name="google-site-verification" content="e2d7uybW-qYP1CRxNzoD2b3btePllT2VMs0_XqwZIGo" />
  <title>{metadata.title}</title>

  {/* Google Tag (gtag.js) */}
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XHSL8SZLKJ"></script>
  <script
    dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XHSL8SZLKJ');
      `,
    }}
  />

  {/* Facebook Pixel Code */}
  <script
    dangerouslySetInnerHTML={{
      __html: `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1033752393439199');
        fbq('track', 'PageView');
      `,
    }}
  />
  <noscript>
    <img
      height="1"
      width="1"
      style={{ display: "none" }}
      src="https://www.facebook.com/tr?id=1033752393439199&ev=PageView&noscript=1"
    />
  </noscript>
  {/* End Facebook Pixel Code */}
</head>


      <body className={`${poppins.variable}`}>
        {/* <Navbar /> */}
        <UserProvider>{children}</UserProvider>
        {/* <Footer /> */}
      </body>
    </html>
  );
}

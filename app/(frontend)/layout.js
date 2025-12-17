// import { Barlow, Inter, Jost, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/frontend/Footer";
import Navbar from "@/components/frontend/Navbar";
import { UserProvider } from "@/userProvider";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import Flyer from "@/components/frontend/Flyer";
import Script from "next/script";
import FixedPopupButton from "@/pages/frontend/FixedPopupButton";
import Popup from "@/components/frontend/Popup";

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
    <div lang="en">
    
    <UserProvider>
      <div>
        <Navbar />
        <Popup />
        {/* <Flyer /> */}
        {children}
        <Footer />
        <div>
          <div className="fixed z-40 bottom-4 md:left-6 left-2 flex flex-col gap-4">
            <span className="hover:scale-125 duration-300 bg-[#25D366] rounded-full p-4 text-white">
              <Link href="https://wa.me/919058831360">
                <FaWhatsapp className="text-2xl" />
              </Link>
            </span>
            <span className="hover:scale-125 duration-300 bg-primary02 rounded-full p-4 text-white">
              <Link href="tel:+919058831360">
                <img src="/phone.svg" alt="Phone" />
              </Link>
            </span>
          </div>
  
       {/* <FixedPopupButton /> */}
        </div>
      </div>
    </UserProvider>
  
    <div dangerouslySetInnerHTML={{ __html: `
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
    `}} />
  </div>
  
  );
}

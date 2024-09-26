import { Barlow, Inter, Jost, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/frontend/Footer";
import Navbar from "@/components/frontend/Navbar";
import { UserProvider } from "@/userProvider";
import Popup from "@/components/frontend/Popup";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import Flyer from "@/components/frontend/Flyer";
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
      {/* <Popup /> */}
      <UserProvider>
      <body>
  <Navbar />
  <Flyer/>
  {children}
  <Footer />
 {/* Phone call button */}
 <div className="fixed z-[9999] bottom-4 md:right-6 right-2 flex flex-col gap-4">
  <span className="hover:scale-125 duration-300 bg-primary02 rounded-full p-4 text-white">
    <Link href={"tel:+919760548360"}>
      <img src="/phone.svg"/>
    </Link>
  </span>

  {/* WhatsApp button */}
  <span className="hover:scale-125 duration-300 bg-[#25D366] rounded-full p-4 text-white">
    <Link href={"https://wa.me/919760548360"}>
    <FaWhatsapp className="text-2xl" />
    </Link>
  </span>
</div>


</body>
      </UserProvider>
    </html>
  );
}

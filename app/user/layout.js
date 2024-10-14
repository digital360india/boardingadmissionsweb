import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "@/userProvider";
import Navbar from "@/components/frontend/Navbar";
import Footer from "@/components/frontend/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  icons: [{ rel: "icon", url: "./icons/Boardinglogo.svg" }],

  title: "Get Admissions in Top Boarding Schools  | Admission 2025-26",
  description:
    "Enroll in the best boarding schools for 2025-26. Give your child a top-quality education today!",
};

export default function RootLayout({ children }) {
  return (
    <>
      <ToastContainer />
      <UserProvider>
     
        {children} 
      </UserProvider>
    </>
  );
}

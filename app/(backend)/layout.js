import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Get Admissions in Top Boarding Schools  | Admission 2025-26",
  description: "Enroll in the best boarding schools for 2025-26. Give your child a top-quality education today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

import { SideNavBar } from "@/components/admin/SideNavBar";
import "../../globals.css";
import { AdminProvider } from "@/adminProvider";
import { TopNavBar } from "@/components/admin/TopNavBar";
import LayoutFile from "@/components/admin/LayoutFile";

export const metadata = {
  title: "Get Admissions in Top Boarding Schools  | Admission 2025-26",
  description: "Enroll in the best boarding schools for 2025-26. Give your child a top-quality education today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {" "}
      <AdminProvider>
        <LayoutFile children={children} />

      </AdminProvider>
    </html>
  );
}

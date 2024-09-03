import { SideNavBar } from "@/components/admin/SideNavBar";
import "../../globals.css";
import TopNavBar from "@/components/admin/TopNavBar";
import { AdminProvider } from "@/adminProvider";

export const metadata = {
  title: "Get Admissions in Top Boarding Schools  | Admission 2025-26",
  description: "Enroll in the best boarding schools for 2025-26. Give your child a top-quality education today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {" "}
      <AdminProvider>
        <div className="lg:flex">
          <div className="w-1/5 hidden lg:block ">
            <SideNavBar />
          </div>
          <div className="lg:flex flex-col lg:w-4/5">
            <div className="h-16 ">
              <TopNavBar />
            </div>
            <main className="min-h-screen md:mt-16 ">{children}</main>
          </div>
        </div>
      </AdminProvider>
    </html>
  );
}

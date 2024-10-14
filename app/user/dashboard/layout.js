import "../../globals.css";
import { UserProvider } from "@/userProvider";
import LayoutFile from "@/components/backend/LayoutFile";

export const metadata = {
  title: "Get Admissions in Top Boarding Schools  | Admission 2025-26",
  description:
    "Enroll in the best boarding schools for 2025-26. Give your child a top-quality education today!",
};

export default function RootLayout({ children }) {
  return (
    <>
      {" "}
      <UserProvider>
        <LayoutFile >{children}</LayoutFile>
      </UserProvider>
    </>
  );
}

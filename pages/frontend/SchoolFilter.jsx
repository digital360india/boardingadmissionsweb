"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const schoolsData = [
  { name: "Welham Boys School", path: "/school/welham-boys-school" },
  { name: "Welham Girls School", path: "/school/wellham-girls-school" },
  { name: "Mayo Girls School", path: "/school/mayo-girls-school" },
  { name: "Mayo Boys School", path: "/school/mayo-boys-school" },
  { name: "The Doon School", path: "/school/the-doon-school" },
  { name: "Scindia Girls School", path: "/school/scindia-girls-school" },
];

export default function SchoolFilter() {
  const [selectedSchool, setSelectedSchool] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (selectedSchool) {
      const school = schoolsData.find((s) => s.name === selectedSchool);
      if (school) {
        router.push(school.path);
      }
    }
  };

  return (
    <div className="px-6 md:px-20 pt-16 pb-10 flex flex-col items-center bg-[#F4FCFC] space-y-12">
      <div className="text-center">
        <p className="text-4xl md:text-5xl font-medium text-neutral01 leading-tight">
          Exclusive School{" "}
          <span className="text-primary02">Brochures & Guides</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row w-full md:w-[50%] justify-center items-center space-y-4 md:space-y-0 md:space-x-6 ">
        <div
          className="w-full md:w-[60%] px-2 bg-white rounded-lg border-2 border-primary02 
        text-gray-700 transition-all shadow-sm"
        >
          <select
            className="w-full  rounded-lg font-medium   py-3 md:py-4  outline-none  "
            value={selectedSchool}
            onChange={(e) => setSelectedSchool(e.target.value)}
          >
            <option value="" className="font-semibold">Select School</option>
            {schoolsData.map((school) => (
              <option key={school.name} value={school.name}>
                {school.name}
              </option>
            ))}
          </select>
        </div>

        <button
          className={`w-full md:w-auto border-2 rounded-lg px-6 py-3 md:py-4 font-medium transition-all duration-300 
        ${
          !selectedSchool
            ? "border-primary02 text-primary02 cursor-not-allowed opacity-60"
            : "bg-primary02 text-white hover:bg-primary03 hover:scale-105 shadow-md"
        }`}
          disabled={!selectedSchool}
          onClick={handleSearch}
        >
          Search School
        </button>
      </div>
    </div>
  );
}

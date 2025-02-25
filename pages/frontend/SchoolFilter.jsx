"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const schoolsData = [
  { name: "Welhem Boys School", path: "/school/welham-boys-school" },
  { name: "Welhem Girls School", path: "/school/welham-Girls-school" },
  { name: "Mayo Girls School", path: "/school/mayo-girls-school" },
  { name: "Mayo Boys School", path: "/school/mayo-Boys-school" },
  { name: "The Doon School", path: "/school/mayo-girls-schoolthe-doon-school" },
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
    {/* Heading */}
    <div className="text-center">
      <p className="text-4xl md:text-5xl font-semibold text-gray-800 leading-tight">
        Exclusive School <span className="text-primary02">Brochures & Guides</span>
      </p>
    </div>

    {/* Dropdown & Button */}
    <div className="flex flex-col md:flex-row w-full md:w-[50%] justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
      {/* School Dropdown */}
      <select
        className="w-full md:w-[60%] px-5 py-3 md:py-4 rounded-lg border border-primary02 bg-white outline-none 
        text-gray-700 transition-all shadow-sm"
        value={selectedSchool}
        onChange={(e) => setSelectedSchool(e.target.value)}
      >
        <option value="">Select School</option>
        {schoolsData.map((school) => (
          <option key={school.name} value={school.name}>
            {school.name}
          </option>
        ))}
      </select>

      {/* Search Button */}
      <button
        className={`w-full md:w-auto border rounded-lg px-6 py-3 md:py-4 font-medium transition-all duration-300 
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

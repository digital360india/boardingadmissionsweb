"use client";

import { useState } from "react";

const schoolData = [
  { id: 1, school: "school1" },
  { id: 2, school: "school2" },
  { id: 3, school: "school3" },
  { id: 4, school: "school4" },
  { id: 5, school: "school5" },
  { id: 6, school: "school6" },
  { id: 7, school: "school7" },
  { id: 8, school: "school8" },
  { id: 9, school: "school9" },
  { id: 10, school: "school10" },
  { id: 11, school: "school11" },
  { id: 12, school: "school12" },
  { id: 13, school: "school13" },
  { id: 14, school: "school14" },
];

const classData = [
  { id: 1, classes: "class1" },
  { id: 2, classes: "class2" },
  { id: 3, classes: "class3" },
  { id: 4, classes: "class4" },
  { id: 5, classes: "class5" },
  { id: 6, classes: "class6" },
  { id: 7, classes: "class7" },
  { id: 8, classes: "class8" },
  { id: 9, classes: "class9" },
  { id: 10, classes: "class10" },
  { id: 11, classes: "class11" },
  { id: 12, classes: "class12" },
];

const EnrollNowSchools = () => {
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);

  const handleSchoolClick = (id) => {
    setSelectedSchool(id);
    setSelectedClass(null); // Reset class selection when a new school is selected
  };

  const handleClassClick = (id) => {
    setSelectedClass(id);
  };

  return (
    <div className="mt-24 bg-primary02 w-full h-full">
      <div className="flex justify-center items-center p-5 md:p-24">
        <div className="bg-white w-full h-auto rounded-2xl p-5 md:p-10">
          <h1 className="text-[#1E1E1E] text-[1.5rem] md:text-[3rem] font-bold md:text-center leading-none">
            Let&apos;s find the best course for you
          </h1>

          <h1 className="text-[#000000] text-[1rem] md:text-[1.5rem] font-bold  mt-5">
            Select School
          </h1>

          <div className="flex flex-wrap gap-4  mt-5">
            {schoolData.map((school) => (
              <div
                key={school.id}
                onClick={() => handleSchoolClick(school.id)}
                className={`border border-[#000000] rounded-md w-auto h-[2.75rem] flex justify-center items-center px-4 cursor-pointer ${
                  selectedSchool === school.id ? "bg-primary02" : ""
                }`}
              >
                <h1 className="text-[1rem] text-[#000000]">{school.school}</h1>
              </div>
            ))}
          </div>

          {selectedSchool && (
            <div className="mt-10">
              <h1 className="text-[#000000] text-[1rem] md:text-[1.5rem] font-bold ">
                Select Class
              </h1>
              <div className="flex flex-wrap gap-4 mt-5">
                {classData.map((classItem) => (
                  <div
                    key={classItem.id}
                    onClick={() => handleClassClick(classItem.id)}
                    className={`border border-[#000000] rounded-md w-auto h-[2.75rem] flex justify-center items-center px-4 cursor-pointer ${
                      selectedClass === classItem.id ? "bg-primary02 text-white" : ""
                    }`}
                  >
                    <h1 className="text-[1rem] text-[#000000]">{classItem.classes}</h1>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedSchool && selectedClass && (
            <div className="flex justify-center md:justify-end p-5">
              <button
                type="submit"
                className="w-[10rem] md:w-[14rem] h-[2.5rem] text-white bg-gradient01 rounded-md"
              >
                Submit
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnrollNowSchools;

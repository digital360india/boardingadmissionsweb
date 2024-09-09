"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  doc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/firebase/firebase";
import Link from "next/link";

const EnrollNowAllCoursesWeOffer = () => {
  const currentPage = usePathname();
  const pathArray = currentPage.split("/");
  const packageId = pathArray[pathArray.length - 1];
  const [packages, setPackages] = useState([]);
  const [filteredPackages, setFilteredPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filters, setFilters] = useState({
    courseName: "",
    boardName: "",
    schoolName: "",
    packageName: "",
  });
  const [boards, setBoards] = useState([]);
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const fetchPackagesAndCourses = async () => {
      try {
        const q = query(
          collection(db, "coursePackages"),
          where("packageUID", "==", packageId)
        );
        const packageSnapshot = await getDocs(q);
        const packagesData = [];

        for (const docSnap of packageSnapshot.docs) {
          const packageData = docSnap.data();
          const courseIds = packageData.courses || [];
          const boardIds = packageData.targetedBoards || [];
          const schoolIds = packageData.targetedSchools || [];

          const fetchedCourses = [];
          for (const courseId of courseIds) {
            const courseDocRef = doc(db, "courses", courseId);
            const courseDocSnap = await getDoc(courseDocRef);
            if (courseDocSnap.exists()) {
              fetchedCourses.push(courseDocSnap.data());
            }
          }

          const boardNames = [];
          for (const boardId of boardIds) {
            const boardDocRef = doc(db, "boards", boardId);
            const boardDocSnap = await getDoc(boardDocRef);
            if (boardDocSnap.exists()) {
              boardNames.push(boardDocSnap.data().boardName);
            }
          }
          setBoards(boardNames);

          const schoolNames = [];
          for (const schoolId of schoolIds) {
            const schoolDocRef = doc(db, "schools", schoolId);
            const schoolDocSnap = await getDoc(schoolDocRef);
            if (schoolDocSnap.exists()) {
              schoolNames.push(schoolDocSnap.data().schoolName);
            }
          }
          setSchools(schoolNames);

          packagesData.push({
            ...packageData,
            courses: fetchedCourses,
            targetedBoards: boardNames,
            targetedSchools: schoolNames,
          });
        }

        setPackages(packagesData);
        setFilteredPackages(packagesData);
        setLoading(false);
      } catch (error) {
        setError("Failed to load packages and related information");
        setLoading(false);
      }
    };

    fetchPackagesAndCourses();
  }, [packageId]);

  useEffect(() => {
    const applyFilters = () => {
      const filtered = packages.filter((pkg) => {
        const matchCourse = pkg.courses.some((course) =>
          course.courseName
            .toLowerCase()
            .includes(filters.courseName.toLowerCase())
        );
        const matchBoard = pkg.targetedBoards.some((board) =>
          board.toLowerCase().includes(filters.boardName.toLowerCase())
        );
        const matchSchool = pkg.targetedSchools.some((school) =>
          school.toLowerCase().includes(filters.schoolName.toLowerCase())
        );
        const matchPackageName = pkg.packageName
          .toLowerCase()
          .includes(filters.packageName.toLowerCase()); // Added packageName filter

        return (
          (filters.courseName === "" || matchCourse) &&
          (filters.boardName === "" || matchBoard) &&
          (filters.schoolName === "" || matchSchool) &&
          (filters.packageName === "" || matchPackageName)
        ); // Include packageName filter
      });
      setFilteredPackages(filtered);
    };

    applyFilters();
  }, [filters, packages]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="w-full mt-[7rem]">
        <div className="px-6 md:px-12 xl:pt-8">
          <h1 className="text-[1.5rem] md:text-[3rem] text-primary02 font-bold">
            Courses we Offer
          </h1>
          <h1 className="text-[#3C4852] pt-[0.4rem] text-[0.875rem] md:text-[1.13rem]">
            {filteredPackages.length} packages available
          </h1>
        </div>

        <div className="p-3 md:p-12">
          <div className="flex flex-wrap gap-4 mb-6">
            <input
              type="text"
              name="courseName"
              value={filters.courseName}
              onChange={handleFilterChange}
              placeholder="Filter by course name"
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="packageName"
              value={filters.packageName}
              onChange={handleFilterChange}
              placeholder="Filter by package name"
              className="p-2 border border-gray-300 rounded"
            />
            <select
              name="boardName"
              value={filters.boardName}
              onChange={handleFilterChange}
              className="p-2 border border-gray-300 rounded"
            >
              <option value="">Filter by board name</option>
              {boards.map((board, index) => (
                <option key={index} value={board}>
                  {board}
                </option>
              ))}
            </select>
            <select
              name="schoolName"
              value={filters.schoolName}
              onChange={handleFilterChange}
              className="p-2 border border-gray-300 rounded"
            >
              <option value="">Filter by school name</option>
              {schools.map((school, index) => (
                <option key={index} value={school}>
                  {school}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-wrap gap-8 p-3 md:p-12">
            {filteredPackages.map((packageData, index) => (
              <Link href={`/checkout/${packageData.id}`}>
                {" "}
                <div
  key={index}
  className="md:w-[38vw] lg:w-[29vw] bg-[#FFFFFF] border border-[#01010120] rounded-[9px] pb-4 drop-shadow-lg"
>
  <div className="w-full h-72">
    <img
      src={packageData.thumbnailImage}
      alt="Thumbnail"
      className="w-full h-full object-cover rounded-t-[9px]"
    />
  </div>
  <h2 className="text-primary02 text-[1rem] md:text-[1.5rem] font-semibold text-center mt-2 md:mt-3">
    {packageData.packageName}
  </h2>
  <p className="text-[0.5rem] md:text-[0.8rem] text-[#212224] pt-2 md:pt-3 text-center px-8">
    Price: {packageData.price} - Discounted Price:{" "}
    {packageData.discountedPrice}
  </p>

  <hr className="mx-2 md:mx-10 mt-3" />

  <div className="px-4">
    <h3 className="text-[1rem] md:text-[1.2rem] text-primary02 font-semibold">
      Courses in this package:
    </h3>
    <ul className="text-[0.8rem] md:text-[1rem] text-[#666666]">
      {packageData.courses.map((course, idx) => (
        <li key={idx} className="mt-2">
          {course.courseName}
        </li>
      ))}
    </ul>

    <h3 className="text-[1rem] md:text-[1.2rem] text-primary02 font-semibold mt-4">
      Targeted Boards:
    </h3>
    <ul className="text-[0.8rem] md:text-[1rem] text-[#666666]">
      {packageData.targetedBoards.map((board, idx) => (
        <li key={idx} className="mt-2">
          {board}
        </li>
      ))}
    </ul>

    <h3 className="text-[1rem] md:text-[1.2rem] text-primary02 font-semibold mt-4">
      Targeted Schools:
    </h3>
    <ul className="text-[0.8rem] md:text-[1rem] text-[#666666]">
      {packageData.targetedSchools.map((school, idx) => (
        <li key={idx} className="mt-2">
          {school}
        </li>
      ))}
    </ul>
  </div>
</div>

              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EnrollNowAllCoursesWeOffer;

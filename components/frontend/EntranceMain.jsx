"use client";
import EntranceCourse from "@/components/frontend/EntranceCourse";
import EntranceOtherDetail from "@/components/frontend/EntranceOtherDetail";
import EntranceSlaybus from "@/components/frontend/EntranceSlaybus";
import { db } from "@/firebase/firebase";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  query,
  collection,
  getDocs,
  getDoc,
  doc,
  where,
} from "firebase/firestore";
import Link from "next/link";

export default function EntranceMain() {
  const [activeTab, setActiveTab] = useState("Description");
  const currentPage = usePathname();
  const pathArray = currentPage.split("/");
  const [packageData, setPackageData] = useState(null);
  const [boards, setBoards] = useState([]);
  const [schools, setSchools] = useState([]);
  const [courses, setCourses] = useState([]);
  const [tests, setTests] = useState([]);
  const packageId = pathArray[pathArray.length - 1];

  useEffect(() => {
    const fetchPackage = async () => {
      try {
        const q = query(
          collection(db, "coursePackages"),
          where("id", "==", packageId)
        );
        const packageSnapshot = await getDocs(q);

        if (!packageSnapshot.empty) {
          const packageInfo = packageSnapshot.docs[0].data();
          const courseIds = packageInfo.courses || [];
          const boardIds = packageInfo.targetedBoards || [];
          const schoolIds = packageInfo.targetedSchools || [];

          // Fetch courses, boards, and schools
          const [coursesSnap, boardsSnap, schoolsSnap] = await Promise.all([
            Promise.all(
              courseIds.map((courseId) => getDoc(doc(db, "courses", courseId)))
            ),
            Promise.all(
              boardIds.map((boardId) => getDoc(doc(db, "boards", boardId)))
            ),
            Promise.all(
              schoolIds.map((schoolId) => getDoc(doc(db, "schools", schoolId)))
            ),
          ]);

          const courseNames = coursesSnap
            .map((doc) => (doc.exists() ? doc.data() : null))
            .filter(Boolean);
          const boardNames = boardsSnap
            .map((doc) => (doc.exists() ? doc.data().boardName : null))
            .filter(Boolean);
          const schoolNames = schoolsSnap
            .map((doc) => (doc.exists() ? doc.data().schoolName : null))
            .filter(Boolean);

          setPackageData(packageInfo);
          setCourses(courseNames);
          setBoards(boardNames);
          setSchools(schoolNames);
        }
      } catch (error) {
        console.error("Error fetching package: ", error);
      }
    };

    fetchPackage();
  }, [packageId]);

  const fetchCourses = async () => {
    if (packageData) {
      const coursePromises = packageData.courses.map((courseId) =>
        getDoc(doc(db, "courses", courseId))
      );
      const coursesSnap = await Promise.all(coursePromises);
      const fetchedCourses = coursesSnap
        .map((doc) => (doc.exists() ? doc.data() : null))
        .filter(Boolean);
      setCourses(fetchedCourses);
      console.log(fetchedCourses);
    }
  };

  const fetchTests = async () => {
    if (packageData && packageData.tests) {
      const testPromises = packageData.tests.map((testId) =>
        getDoc(doc(db, "testPackages", testId))
      );
      const testsSnap = await Promise.all(testPromises);
      const fetchedTests = testsSnap
        .map((doc) => (doc.exists() ? doc.data() : null))
        .filter(Boolean);
      setTests(fetchedTests);
    }
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "Courses") {
      fetchCourses();
    } else if (tab === "Tests") {
      fetchTests();
    }
  };

  return (
    <div>
      <div className="xl:px-[100px] md:px-[40px] px-[24px]">
        <div className="md:flex space-x-4 justify-between">
          <div>
            {/* Package Image and Title */}
            <div className="relative rounded-t-lg">
              <Image
                src={
                  packageData
                    ? packageData.thumbnailImage
                    : "/images/default.png"
                }
                className="w-full md:h-[125px] h-[55px] object-cover rounded-t-lg"
                width={1000}
                height={1000}
                alt="image"
              />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <p className="text-white md:text-[28px] text-14px font-bold">
                  {packageData ? packageData.packageName : "Loading..."}
                </p>
              </div>
            </div>

            {/* Tabs for Description, Courses, Tests */}
            <div className="flex justify-between md:px-8 px-3 bg-[#FFFFFF01] shadow-2xl w-full h-[40px] mt-2 gap-4">
              <div className="flex md:space-x-6 space-x-2 ">
                {["Description", "Courses", "Tests"].map((tab) => (
                  <div
                    key={tab}
                    className={`md:text-13px text-[12px] cursor-pointer ${
                      activeTab === tab ? "border-b-4 border-primary02" : ""
                    }`}
                    onClick={() => handleTabClick(tab)}
                  >
                    {tab}
                  </div>
                ))}
              </div>
              <Link href="https://wa.me/919760548360" passHref>
                <div className="md:w-[140px] w-[95px] md:h-[32px] h-[20px] border border-[#B4B9C0] px-2 flex justify-between items-center rounded-2xl mt-1 cursor-pointer">
                  <Image
                    src="/vectors/whatsapp.svg"
                    width={1000}
                    height={1000}
                    alt="share"
                    className="md:w-[24px] md:h-[24px] w-[13px] h-[13px]"
                  />
                  <p className="md:text-14px text-[8px] font-semibold text-[#5E6166]">
                    Share batch
                  </p>
                </div>
              </Link>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary02 mb-2 mt-6">
                {packageData ? packageData.packageName : "Loading..."}
              </h2>
              <p className="text-gray-700 mb-4">
                {packageData
                  ? packageData.description
                  : "Loading description..."}
              </p>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-lg font-semibold">
                    <strong>Price:</strong>{" "}
                    <span className="line-through text-gray-500">
                      {packageData ? packageData.price : "Loading..."}
                    </span>
                  </p>
                  <p className="text-xl font-bold text-green-500">
                    <strong>Discounted Price:</strong>{" "}
                    {packageData ? packageData.discountedPrice : "Loading..."}
                  </p>
                </div>
                <div className="bg-green-100 text-green-700 text-sm font-medium px-2 py-1 rounded">
                  Special Offer!
                </div>
              </div>
              {/* <p className="mb-2">
                <strong>Targeted Boards:</strong>{" "}
                {boards.length > 0 ? boards.join(", ") : "Loading..."}
              </p> */}
              <p>
                <strong>Targeted Schools:</strong>{" "}
                {schools.length > 0 ? schools.join(", ") : "Loading..."}
              </p>
              <div className="mt-4">
                <Link href={`/checkout/${packageId}`}>
                  <button className="px-4 py-2 bg-primary02 text-white font-semibold rounded hover:bg-primaryDark transition duration-200">
                    Buy Now
                  </button>
                </Link>
                <button className="ml-2 px-4 py-2 border border-gray-300 text-gray-700 font-semibold rounded hover:bg-gray-100 transition duration-200">
                  Explore
                </button>
              </div>
            </div>

            {/* Package Details Section */}
            <div className="my-10 p-6 rounded-lg">
              {activeTab === "Description" ? (
                <div>
                  <h2 className="md:text-2xl text-[20px] font-bold mb-4 text-black">
                    Courses Package Detials
                  </h2>
                  <div className="poppins text-xl">
                    {packageData
                      ? new Date(packageData.startingDate).toLocaleDateString(
                          "en-US",
                          { year: "numeric", month: "long", day: "numeric" }
                        )
                      : "Loading..."}{" "}
                  </div>
                  <div className="poppins text-xl">
                    <div>{packageData?.description}</div>
                  </div>
                </div>
              ) : activeTab === "Courses" ? (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Courses</h2>
                  {courses.length > 0 ? (
                    courses.map((course, index) => (
                      <div key={index} className="mb-2">
                        <h3 className="font-semibold">{course.courseName}</h3>
                      </div>
                    ))
                  ) : (
                    <p>No courses available.</p>
                  )}
                </div>
              ) : activeTab === "Tests" ? (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Tests</h2>
                  {tests.length > 0 ? (
                    tests.map((test, index) => (
                      <div key={index} className="mb-2">
                        <h3 className="font-semibold">{test.title}</h3>
                        <p>{test.description}</p>
                      </div>
                    ))
                  ) : (
                    <p>No tests available.</p>
                  )}
                </div>
              ) : (
                <p className="text-gray-500">Loading package details...</p>
              )}
            </div>

            <div>
              <EntranceSlaybus />
            </div>
            {/* <div>
              <EntranceOtherDetail />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

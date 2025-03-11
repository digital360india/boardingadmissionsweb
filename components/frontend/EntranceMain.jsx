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
          const boardIds = packageInfo.boards || [];
          const schoolIds = packageInfo.schools || [];

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
    <div className="xl:px-[100px] md:px-[40px] px-[24px]">
      <div className="flex lg:justify-between space-x-10 w-[100%] md:mt-10 mt-6">
        <div className=" md:flex lg:w-[60%]">
          <div className="w-full">
            <div className="relative rounded-t-lg">
              <Image
                // src={
                //   packageData
                //     ? packageData.thumbnailImage
                //     : "/images/default.png"
                // }
                src="/images/ace.svg"
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

            <div className="flex justify-between md:px-8 px-3 bg-[#FFFFFF01] shadow-2xl w-full h-[40px] mt-2 gap-4 mb-4">
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

            <div className="">
              <div className="w-full  shadow-[0px_0px_4px_0px_#01010133] h-fit rounded-md lg:hidden block  ">
                <Image
                  src="/images/ace1.svg"
                  width={1000}
                  height={1000}
                  alt="share"
                  className="w-full h-full"
                />
                <div className="p-4">
                  <h2 className="text-2xl font-bold text-primary02 mb-2 mt-6">
                    {packageData ? packageData.packageName : "Loading..."}
                  </h2>
                  <p className="text-gray-700 mb-4">
                    {packageData
                      ? packageData.description
                      : "Loading description..."}
                  </p>
                  <div className="flex justify-between items-center mb-4">
                    {/* <div>
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
                <div className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded">
                  Discount of 16.67% applied
                </div>
              </div> */}

                    <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                      <div>
                        <p className="text-2xl font-bold text-[#075D70]">
                          {packageData
                            ? `₹${packageData.discountedPrice}`
                            : "Loading..."}{" "}
                          <span className="text-gray-400 line-through text-base ml-2">
                            {packageData
                              ? `₹${packageData.price}`
                              : "Loading..."}
                          </span>
                        </p>
                        <p className="text-sm text-gray-500">
                          (For Full Batch)
                        </p>
                      </div>

                      <div className="flex items-center bg-[#E6F4EA] text-[#2E7D32] text-sm font-medium py-1 px-2 rounded-md gap-2">
                        <div>
                          <Image
                            src="/vectors/Vector.svg"
                            width={1000}
                            height={1000}
                            alt="share"
                            className="md:w-[24px] md:h-[24px] w-[13px] h-[13px]"
                          />
                        </div>
                        Discount of 16.67% applied
                      </div>
                    </div>

                    {/* <div className="bg-green-100 text-green-700 text-sm font-medium px-2 py-1 rounded">
                Special Offer!
              </div> */}
                  </div>
                  <p className="mb-2">
                    <strong>Targeted Boards:</strong>{" "}
                    {boards.length > 0 ? boards.join(", ") : "Loading..."}
                  </p>
                  <p>
                    <strong>Targeted Schools:</strong>{" "}
                    {schools.length > 0 ? schools.join(", ") : "Loading..."}
                  </p>
                </div>
                <div className="mt-4 flex justify-center items-center pb-8 space-x-4">
                  <Link href={`/checkout/${packageId}`}>
                    <button className="px-4 py-2 bg-gradient-to-r from-[#075D70] to-[#A1C5CD]  text-white font-semibold rounded hover:opacity-90 transition duration-200">
                      Buy Now
                    </button>
                  </Link>
                  <button className="ml-2 px-4 py-2 border border-gray-300 text-gray-700 font-semibold rounded hover:bg-gray-100 transition duration-200">
                    Explore
                  </button>
                </div>
              </div>
            </div>

            <div className="border rounded-lg shadow-md overflow-hidden mt-10 w-full md:h-[255px] h-full">
              <div className="bg-[#075D7036] px-4 py-4 flex items-center">
                <span className="mr-2">💡</span>
                <h2 className="font-semibold text-gray-800">
                  Ace Entrance Exam course include
                </h2>
              </div>

              <div className="p-4 grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "Doubt Solving",
                  "Mentorship",
                  "Live and recorded lectures",
                  "Daily Practice Paper",
                  "Test Series",
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <span className="mr-2">⭐</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="my-10 rounded-lg">
              {activeTab === "Description" ? (
                <div>
                  <h2 className="md:text-2xl text-[20px] font-bold mb-4 text-black">
                    Courses Package Details
                  </h2>
                  <div className="poppins text-xl">
                    {packageData
                      ? new Date(packageData.startingDate).toLocaleDateString(
                          "en-US",
                          { year: "numeric", month: "long", day: "numeric" }
                        )
                      : "Loading..."}
                  </div>
                  <div className="poppins text-xl">
                    <div>{packageData?.description}</div>
                  </div>
                </div>
              ) : activeTab === "Courses" ? (
                <div className="shadow-[0px_0px_4px_0px_#01010133] p-6 rounded-md w-full ">
                  <h2 className="text-2xl font-bold mb-4">Courses</h2>
                  {courses.length > 0 ? (
                    courses.map((course, index) => (
                      <div key={index} className="mb-2 flex space-x-4">
                        <div>
                          <img
                            className="w-[75px] h-[75px] rounded-md"
                            src={
                              course.thumbnailImage || "./images/product.png"
                            }
                            alt={course.courseName || "Course Image"}
                          />
                        </div>
                        <h3 className="font-semibold pt-4">
                          {course.courseName}
                        </h3>
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

            <div className="p-6 bg-white rounded-lg shadow-md space-y-6">
              <h2 className="text-2xl font-bold mb-4">This Course includes:</h2>

              {/* <div className="flex items-center mb-2">
                <span className="mr-2">📅</span>
                <div>
                  <span className="font-semibold text-gray-600">Duration:</span>
                  <span className="ml-1 font-medium text-black">
                    Lorem Ipsum dior
                  </span>
                </div>
              </div> */}

              <div className="flex items-center mb-2">
                <span className="mr-2">⭐</span>
                <div>
                  <span className="font-semibold text-gray-600">Validity:</span>
                  <span className="ml-1 font-medium text-black">
                    Till The Exam
                  </span>
                </div>
              </div>

              {[
                "Live and Recorded lectures",
                "Mentorship on telegram groups",
                "Career counseling and guidance available mainly online.",
                "Access to scholarship aptitude tests at Boarding Admission portal (online)",
                "Seminars/Topper's talks at through Zoom mentorship (online)",
              ].map((item, index) => (
                <div key={index} className="flex items-center mb-2">
                  <span className="mr-2">⭐</span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}

              <div className="flex items-start mt-2">
                <span className="mr-2">📚</span>
                <div>
                  <span className="font-semibold text-gray-600">Subjects:</span>
                  <span className="ml-1 text-gray-700">
                    English, Hindi, GS, Maths, Physics, and Chemistry
                  </span>
                </div>
              </div>
            </div>

            <div>
              <EntranceSlaybus />
            </div>
            {/* <div>
              <EntranceOtherDetail />
            </div> */}
          </div>
        </div>

        <div className="w-[30%] shadow-[0px_0px_4px_0px_#01010133] h-fit rounded-md hidden lg:block">
          <Image
            src="/images/ace1.svg"
            width={1000}
            height={1000}
            alt="share"
            className="w-full h-full"
          />
          <div className="p-4">
            <h2 className="text-2xl font-bold text-primary02 mb-2 mt-6">
              {packageData ? packageData.packageName : "Loading..."}
            </h2>
            <p className="text-gray-700 mb-4">
              {packageData ? packageData.description : "Loading description..."}
            </p>
            <div className="flex justify-between items-center mb-4">
              {/* <div>
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
                <div className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded">
                  Discount of 16.67% applied
                </div>
              </div> */}

              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <div>
                  <p className="text-2xl font-bold text-[#075D70]">
                    {packageData
                      ? `₹${packageData.discountedPrice}`
                      : "Loading..."}{" "}
                    <span className="text-gray-400 line-through text-base ml-2">
                      {packageData ? `₹${packageData.price}` : "Loading..."}
                    </span>
                  </p>
                  <p className="text-sm text-gray-500">(For Full Batch)</p>
                </div>

                <div className="flex items-center bg-[#E6F4EA] text-[#2E7D32] text-sm font-medium py-1 px-2 rounded-md gap-2">
                  <div>
                    <Image
                      src="/vectors/Vector.svg"
                      width={1000}
                      height={1000}
                      alt="share"
                      className="md:w-[24px] md:h-[24px] w-[13px] h-[13px]"
                    />
                  </div>
                  Discount of 16.67% applied
                </div>
              </div>

              {/* <div className="bg-green-100 text-green-700 text-sm font-medium px-2 py-1 rounded">
                Special Offer!
              </div> */}
            </div>
            <p className="mb-2">
              <strong>Targeted Boards:</strong>{" "}
              {boards.length > 0 ? boards.join(", ") : "Loading..."}
            </p>
            <p>
              <strong>Targeted Schools:</strong>{" "}
              {schools.length > 0 ? schools.join(", ") : "Loading..."}
            </p>
          </div>
          <div className="mt-4 flex justify-center items-center pb-8 space-x-4">
            <Link href={`/checkout/${packageId}`}>
              <button className="px-4 py-2 bg-gradient-to-r from-[#075D70] to-[#A1C5CD]  text-white font-semibold rounded hover:opacity-90 transition duration-200">
                Buy Now
              </button>
            </Link>
            <button className="ml-2 px-4 py-2 border border-gray-300 text-gray-700 font-semibold rounded hover:bg-gray-100 transition duration-200">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

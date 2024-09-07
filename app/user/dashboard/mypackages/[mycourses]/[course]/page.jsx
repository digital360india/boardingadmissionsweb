"use client";
import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { IoMdArrowBack } from "react-icons/io";
import { FaArrowRightLong, FaArrowDownLong } from "react-icons/fa6";

const Page = () => {
  const router = useRouter(); // Access the router instance

  const pathname = usePathname();
  const pathParts = pathname.split("/");
  const mycourses = pathParts[4];
  const course = pathParts[5];
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [courseData, setCourseData] = useState(null);
  const [selectedChapterIndex, setSelectedChapterIndex] = useState(null);
  const [selectedLectureIndex, setSelectedLectureIndex] = useState(null);
  const [showFullText, setShowFullText] = useState(false);

  const toggleTextDisplay = () => {
    setShowFullText(!showFullText);
  };

  const fetchCourseData = async () => {
    try {
      const courseDoc = await getDoc(doc(db, "courses", course));

      if (!courseDoc.exists()) {
        setError("Course not found.");
        setLoading(false);
        return;
      }

      setCourseData(courseDoc.data());
    } catch (err) {
      setError("Failed to fetch courses. Please try again.");
      console.error("Error fetching courses:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourseData();
  }, [course]);

  const handleChapterClick = (index) => {
    setSelectedChapterIndex(index === selectedChapterIndex ? null : index);
    setSelectedLectureIndex(null); // Reset selected lecture when changing chapter
  };

  const handleLectureClick = (index) => {
    setSelectedLectureIndex(index === selectedLectureIndex ? null : index);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <button className="flex gap-1" onClick={() => router.back()}>
        <IoMdArrowBack className="text-xl" />
        <span>Back</span>
      </button>

      <div className="w-full relative">
        <img src={courseData.heroImage} className="w-full h-48 object-cover" />
        <img
          src={courseData.thumbnailImage}
          className="w-40 h-40 object-cover absolute bottom-2 left-10 rounded-lg shadow-2xl backdrop-blur-2xl"
        />
      </div>

      <h1 className="text-3xl font-bold text-primary02 my-4">
        {courseData.courseName}
      </h1>

      <p className="text-gray-700 mt-2 bg-gray-200 p-5 rounded-md shadow-lg">
        <div className="text-xl font-bold py-2">Course Description</div>
        <div>
          {showFullText
            ? courseData.description
            : courseData.description.split(" ").slice(0, 20).join(" ") + "..."}
        </div>
        <button className="text-blue-600 mt-2" onClick={toggleTextDisplay}>
          {showFullText ? "See Less" : "See More"}
        </button>
      </p>

      <div className="mt-6">
        <h2 className="text-xl font-semibold text-primary02 mb-4">Chapters</h2>
        <div className="space-y-4">
          {courseData.chapters.map((chapter, index) => (
            <div key={index}>
              <div
                className="bg-white shadow-lg rounded-lg p-4 cursor-pointer"
                onClick={() => handleChapterClick(index)}
              >
                <h3 className="text-lg font-semibold text-primary03 flex gap-2 items-center transition-all delay-500">
                  {selectedChapterIndex === index ? (
                    <FaArrowDownLong />
                  ) : (
                    <FaArrowRightLong />
                  )}
                  <span>{chapter.chapterName}</span>
                </h3>
              </div>
              <div
                className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                  selectedChapterIndex === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                {selectedChapterIndex === index && (
                  <div className="mt-4 mb-4 pl-8">
                    <h4 className="text-lg font-semibold text-primary02 mb-2">
                      Lectures
                    </h4>
                    <div className="space-y-4">
                      {chapter.lectures.map((lecture, lectureIndex) => (
                        <div
                          key={lectureIndex}
                          className="bg-white shadow-lg rounded-lg p-4 cursor-pointer"
                          onClick={() => handleLectureClick(lectureIndex)}
                        >
                          <h4 className="text-md font-semibold text-primary03">
                            {lecture.name}
                          </h4>
                          <p className="text-gray-700 mt-2">
                            {`Creation Date: ${lecture.creationDate}`}
                          </p>
                          {selectedLectureIndex === lectureIndex && (
                            <div className="mt-2">
                              {lecture.videoUrl && (
                                <div className="mb-4">
                                  <video
                                    controls
                                    className="w-full h-auto"
                                    src={lecture.videoUrl}
                                  >
                                    Your browser does not support the video tag.
                                  </video>
                                </div>
                              )}
                              <div className="mt-2">
                                {lecture.pdfs.map((pdf, i) => (
                                  <a
                                    key={i}
                                    href={pdf}
                                    className="text-blue-600 block"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    View PDF {i + 1}
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;

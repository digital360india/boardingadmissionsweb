"use client";
import React, { useEffect, useState } from "react";
import { db } from "@/firebase/firebase";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { usePathname, useRouter } from "next/navigation";

const CoursePage = () => {
  const router = useRouter();
  const currentPage = usePathname();
  const pathArray = currentPage.split("/");
  const uniqueID = pathArray[pathArray.length - 1];

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [newChapter, setNewChapter] = useState({
    chapterName: "",
    lectures: [],
  });
  const [selectedChapterIndex, setSelectedChapterIndex] = useState(null);
  const [showLectureDialog, setShowLectureDialog] = useState(false);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const docRef = doc(db, "courses", uniqueID);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setCourse(docSnap.data());
        } else {
          setError("Course not found");
        }
      } catch (err) {
        setError("Failed to fetch course data.");
        console.error("Error fetching course:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [uniqueID]);

  const handleCourseUpdate = async () => {
    try {
      const docRef = doc(db, "courses", uniqueID);
      await updateDoc(docRef, course);
      alert("Course updated successfully");
    } catch (err) {
      console.error("Error updating course:", err);
      alert("Failed to update course");
    }
  };

  const handleDeleteLecture = async (chapterIndex, lectureIndex) => {
    try {
      const updatedChapters = [...course.chapters];
      updatedChapters[chapterIndex].lectures.splice(lectureIndex, 1);

      const docRef = doc(db, "courses", uniqueID);
      await updateDoc(docRef, { chapters: updatedChapters });

      setCourse((prev) => ({ ...prev, chapters: updatedChapters }));

      alert("Lecture deleted successfully");
    } catch (err) {
      console.error("Error deleting lecture:", err);
      alert("Failed to delete lecture");
    }
  };

  const handleAddChapter = async () => {
    try {
      const filteredLectures = newChapter.lectures.filter(
        (lecture) =>
          lecture.name.trim() !== "" ||
          lecture.videoLink.trim() !== "" ||
          lecture.pdfs.some((pdf) => pdf.trim() !== "")
      );

      const updatedChapters = [
        ...(course.chapters || []),
        { ...newChapter, lectures: filteredLectures },
      ];
      const docRef = doc(db, "courses", uniqueID);
      await updateDoc(docRef, { chapters: updatedChapters });
      setCourse((prev) => ({ ...prev, chapters: updatedChapters }));
      setNewChapter({
        chapterName: "",
        lectures: [],
      });
      alert("Chapter added successfully");
    } catch (err) {
      console.error("Error adding chapter:", err);
      alert("Failed to add chapter");
    }
  };

  const handleAddLecture = (index, field, value) => {
    const updatedLectures = [...newChapter.lectures];
    updatedLectures[index] = { ...updatedLectures[index], [field]: value };
    setNewChapter({ ...newChapter, lectures: updatedLectures });
  };

  const addLectureField = () => {
    setNewChapter({
      ...newChapter,
      lectures: [
        ...newChapter.lectures,
        { name: "", videoLink: "", videoUrl: "", creationDate: "", pdfs: [""] },
      ],
    });
  };

  const handleAddPdf = (lectureIndex) => {
    const updatedLectures = [...newChapter.lectures];
    updatedLectures[lectureIndex].pdfs.push("");
    setNewChapter({ ...newChapter, lectures: updatedLectures });
  };

  const handleLecturePdfChange = (lectureIndex, pdfIndex, value) => {
    const updatedLectures = [...newChapter.lectures];
    const updatedPdfs = [...updatedLectures[lectureIndex].pdfs];
    updatedPdfs[pdfIndex] = value;
    updatedLectures[lectureIndex] = {
      ...updatedLectures[lectureIndex],
      pdfs: updatedPdfs,
    };
    setNewChapter({ ...newChapter, lectures: updatedLectures });
  };

  const handleDeleteCourse = async () => {
    try {
      const docRef = doc(db, "courses", uniqueID);
      await deleteDoc(docRef);
      alert("Course deleted successfully");
      router.push("/admin/dashboard/courses");
    } catch (err) {
      console.error("Error deleting course:", err);
      alert("Failed to delete course");
    }
  };

  const handleChapterClick = (index) => {
    setSelectedChapterIndex(index);
    setShowLectureDialog(true);
  };

  const handleAddLectureToChapter = async () => {
    if (selectedChapterIndex === null) return;
    try {
      const updatedChapters = [...course.chapters];
      updatedChapters[selectedChapterIndex].lectures = [
        ...(updatedChapters[selectedChapterIndex].lectures || []),
        ...newChapter.lectures,
      ];
      const docRef = doc(db, "courses", uniqueID);
      await updateDoc(docRef, { chapters: updatedChapters });
      setCourse((prev) => ({ ...prev, chapters: updatedChapters }));
      setShowLectureDialog(false);
      setNewChapter({
        chapterName: "",
        lectures: [],
      });
      alert("Lectures added successfully");
    } catch (err) {
      console.error("Error adding lectures:", err);
      alert("Failed to add lectures");
    }
  };

  if (loading)
    return <div className="text-center py-6 text-gray-600">Loading...</div>;
  if (error)
    return <div className="text-center py-6 text-red-600">{error}</div>;
  return (
    <div className="container mx-auto p-8 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold mb-6 text-gray-900">
        Edit Course
      </h1>

      <div className="mb-6">
        <label className="block text-gray-700 text-lg font-medium mb-2">
          Course Name:
        </label>
        <input
          type="text"
          value={course.courseName || ""}
          onChange={(e) => setCourse({ ...course, courseName: e.target.value })}
          className="border border-gray-300 p-4 rounded-lg w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-lg font-medium mb-2">
          Description:
        </label>
        <textarea
          value={course.description || ""}
          onChange={(e) =>
            setCourse({ ...course, description: e.target.value })
          }
          className="border border-gray-300 p-4 rounded-lg w-full h-40 resize-none shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        onClick={handleCourseUpdate}
        className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Update Course
      </button>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
        Add Chapter
      </h2>
      <div className="mb-6">
        <label className="block text-gray-700 text-lg font-medium mb-2">
          Chapter Name:
        </label>
        <input
          type="text"
          value={newChapter.chapterName}
          onChange={(e) =>
            setNewChapter({ ...newChapter, chapterName: e.target.value })
          }
          className="border border-gray-300 p-4 rounded-lg w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Chapter Dialog for Lectures */}
      {showLectureDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-2xl font-semibold mb-4">
              Add Lectures to Chapter
            </h3>
            {newChapter.lectures.map((lecture, idx) => (
              <div key={idx} className="mb-6">
                <label className="block text-gray-700 text-lg font-medium mb-2">
                  Lecture Name:
                </label>
                <input
                  type="text"
                  value={lecture.name}
                  onChange={(e) =>
                    handleAddLecture(idx, "name", e.target.value)
                  }
                  className="border border-gray-300 p-4 rounded-lg w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label className="block text-gray-700 text-lg font-medium mb-2 mt-4">
                  Video Link:
                </label>
                <input
                  type="text"
                  value={lecture.videoLink}
                  onChange={(e) =>
                    handleAddLecture(idx, "videoLink", e.target.value)
                  }
                  className="border border-gray-300 p-4 rounded-lg w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label className="block text-gray-700 text-lg font-medium mb-2 mt-4">
                  PDFs:
                </label>
                {lecture.pdfs.map((pdf, pdfIdx) => (
                  <input
                    key={pdfIdx}
                    type="text"
                    value={pdf}
                    onChange={(e) =>
                      handleLecturePdfChange(idx, pdfIdx, e.target.value)
                    }
                    className="border border-gray-300 p-4 rounded-lg w-full mb-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ))}
                <button
                  onClick={() => handleAddPdf(idx)}
                  className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Add PDF
                </button>
              </div>
            ))}
            <button
              onClick={addLectureField}
              className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors mb-4"
            >
              Add Lecture Field
            </button>
            <div className="flex justify-end">
              <button
                onClick={handleAddLectureToChapter}
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Add Lectures to Chapter
              </button>
              <button
                onClick={() => setShowLectureDialog(false)}
                className="bg-red-600 text-white p-2 rounded-lg ml-2 hover:bg-red-700 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={handleAddChapter}
        className="bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition-colors"
      >
        Add Chapter
      </button>

      <button
        onClick={handleDeleteCourse}
        className="bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition-colors mt-4"
      >
        Delete Course
      </button>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Chapters</h2>
        <ul>
          {course.chapters?.map((chapter, index) => (
            <li
              key={index}
              className="mb-4 p-4 border border-gray-300 rounded-lg"
            >
              <h3 className="text-xl font-semibold">{chapter.chapterName}</h3>
              <button
                onClick={() => handleChapterClick(index)}
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors mt-2"
              >
                Add Lectures
              </button>
              {chapter.lectures && (
                <ul className="mt-2">
                  {chapter.lectures.map((lecture, lIndex) => (
                    <li key={lIndex} className="mb-2">
                      <div className="font-medium">{lecture.name}</div>
                      <a
                        href={lecture.videoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        Watch Video
                      </a>
                      {lecture.pdfs &&
                        lecture.pdfs.map((pdf, pIndex) => (
                          <div key={pIndex}>
                            <a
                              href={pdf}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 hover:underline"
                            >
                              Download PDF
                            </a>
                          </div>
                        ))}
                      <button
                        onClick={() => handleDeleteLecture(index, lIndex)}
                        className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition-colors mt-2"
                      >
                        Delete Lecture
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CoursePage;

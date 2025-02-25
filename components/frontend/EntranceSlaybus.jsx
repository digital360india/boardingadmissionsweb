import Image from "next/image";
import React, { useState } from "react";

export default function EntranceSlaybus() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const list = [
    {
      name: "Online Classes",
      content: (
        <ul className="list-disc pl-4">
          <li>
            Live, interactive sessions with expert faculty for in-depth concept
            clarity.
          </li>
          <li>
            Structured curriculum covering core subjects like English,
            Mathematics, and Science.
          </li>
          <li>
            Engaging learning methods, including quizzes, discussions, and
            real-time problem-solving.
          </li>
          <li>
            Flexible class schedules to ensure better time management for
            students.
          </li>
          <li>
            Access to recorded lectures for revision and self-paced learning.
          </li>
        </ul>
      ),
    },
    {
      name: "Mock Test",
      content: (
        <ul className="list-disc pl-4">
          <li>
            Full-length mock tests designed as per top boarding schools&apos;
            exam patterns.
          </li>
          <li>
            Real exam simulation to improve speed, accuracy, and time
            management.
          </li>
          <li>
            AI-based performance tracking for personalized feedback and
            improvement.
          </li>
          <li>
            Instant results and detailed analysis to understand strengths and
            weak points.
          </li>
          <li>
            Enhances confidence by making students exam-ready through repeated
            practice.
          </li>
        </ul>
      ),
    },
    {
      name: "Unit Exam",
      content: (
        <ul className="list-disc pl-4">
          <li>
            Chapter-wise tests to ensure strong foundational understanding.
          </li>
          <li>
            Step-by-step assessment to track progress in individual subjects.
          </li>
          <li>
            Focused evaluation on key topics frequently asked in entrance exams.
          </li>
          <li>
            Personalized feedback to help students refine their strategies.
          </li>
          <li>
            Builds a structured learning approach for better retention and
            performance.
          </li>
        </ul>
      ),
    },
    {
      name: "Doubt Clearing Sessions",
      content: (
        <ul className="list-disc pl-4">
          <li>
            One-on-one and group sessions with subject experts for clarity on
            complex topics.
          </li>
          <li>Instant resolution of doubts to ensure seamless learning.</li>
          <li>
            Encourages active participation and interaction for a deeper
            understanding.
          </li>
          <li>Available post-class or as scheduled personalized sessions.</li>
          <li>
            Supports students in overcoming learning gaps with tailored
            explanations.
          </li>
        </ul>
      ),
    },
    {
      name: "Personalized Evaluation",
      content: (
        <ul className="list-disc pl-4">
          <li>
            Detailed performance analysis for every student based on test
            results.
          </li>
          <li>
            Customized study plans and recommendations for continuous
            improvement.
          </li>
          <li>
            Regular progress reports to help students and parents track
            development.
          </li>
          <li>
            Identifies weak areas and provides targeted learning strategies.
          </li>
          <li>
            Enhances self-awareness and goal-setting for academic success.
          </li>
        </ul>
      ),
    },
    {
      name: "Interview Preparation",
      content: (
        <ul className="list-disc pl-4">
          <li>
            Exclusive training for school admission interviews with expert
            guidance.
          </li>
          <li>
            Focus on communication skills, confidence-building, and answering
            techniques.
          </li>
          <li>
            Real-life mock interviews to practice and improve performance.
          </li>
          <li>
            Tips on body language, etiquette, and school-specific expectations.
          </li>
          <li>
            Ensures students leave a lasting impression on admission panels.
          </li>
        </ul>
      ),
    },
  ];

  const toggleDropdown = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="p-4 md:p-6 rounded-lg bg-white my-10 shadow-md">
      <div className="font-semibold text-lg md:text-2xl pb-4 md:pb-6">
        Syllabus We Will Cover
      </div>

      <div className="grid grid-cols-1  gap-4">
        {list.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 p-4 md:p-6 rounded-md flex flex-col"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleDropdown(index)}
            >
              <div className="flex items-center space-x-3 md:space-x-4">
                <Image
                  src="/images/apti.svg"
                  className="w-8 h-8 md:w-16 md:h-16"
                  width={64}
                  height={64}
                  alt="image"
                />
                <div className="font-semibold text-sm md:text-lg">
                  {item.name}
                </div>
              </div>
              <div className="text-xl">
                {expandedIndex === index ? "▲" : "▼"}
              </div>
            </div>

            {expandedIndex === index && (
              <div className="mt-4 text-sm md:text-base text-gray-700">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

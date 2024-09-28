import React from "react";

export default function QuestionPalatte({
  testQuestions,
  responses,
  statusCounts,
  handleQuestionNavigation,
  setCurrentQuestionIndex,
}) {
  return (
    <div>
      <p>Questions Palette</p>
      <div className="grid grid-cols-5 gap-2">
        {testQuestions.map((question, index) => {
          const currentQuestionID = question.id;
          let statusClass = "";

          if (responses[currentQuestionID]) {
            statusClass = statusCounts.markedForReview.includes(
              currentQuestionID
            )
              ? "bg-[#FCA311] text-white"
              : "bg-[#4BB53A] text-white";
          } else if (statusCounts.markedForReview.includes(currentQuestionID)) {
            statusClass = "bg-[#E99202] text-white";
          } else {
            statusClass = "border border-background05 text-background05";
          }

          return (
            <button
              key={index}
              className={`w-10 h-10 flex justify-center items-center rounded-full ${statusClass}`}
              onClick={() => handleQuestionNavigation(index)}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}

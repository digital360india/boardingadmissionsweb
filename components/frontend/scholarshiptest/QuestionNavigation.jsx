import React from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

export default function QuestionNavigation({
  currentQuestionIndex,
  totalQuestions,
  prevQuestion,
  nextQuestion,
}) {
  return (
    <div className="flex md:w-[30vw] lg:w-[20vw] xl:w-[15vw] text-[18px] font-medium justify-between">
      {currentQuestionIndex > 0 && (
        <button
          onClick={prevQuestion}
          className="text-background05 flex items-center"
        >
          <AiFillCaretLeft />
          <span>Previous</span>
        </button>
      )}
      {currentQuestionIndex < totalQuestions - 1 && (
        <button
          onClick={nextQuestion}
          className="text-background05 flex items-center"
        >
          <span>Next</span>
          <AiFillCaretRight />
        </button>
      )}
    </div>
  );
}

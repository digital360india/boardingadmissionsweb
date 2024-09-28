import React from "react";

export default function Question({
  currentQuestion,
  responses,
  handleOptionChange,
}) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <p className="text-[20px] text-background05 font-semibold">
          Question {currentQuestion.sno}
        </p>
        <div>
          <p></p>
          <p className="text-[#4BB53A] font-semibold space-x-2">
            <span>Marks:</span>
            <span className="text-background05">
              {currentQuestion.totalmarks}
            </span>
          </p>
        </div>
      </div>
      <div className="space-y-8 h-[60vh]">
        <p className="text-[18px]  max-h-[184px] overflow-y-scroll scrollbar-hide">
          {currentQuestion.question}
        </p>
        <ul className="space-y-4">
          {Object.entries(currentQuestion.answers).map(([key, option]) => (
            <li key={key} className="flex items-center space-x-3">
              <input
                type="radio"
                name={`question${currentQuestion.id}`}
                value={option}
                checked={responses[currentQuestion.id] === option}
                onChange={() => handleOptionChange(currentQuestion.id, option)}
                className="form-radio h-5 w-5 text-blue-500"
              />
              <label className="text-gray-700">{option}</label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

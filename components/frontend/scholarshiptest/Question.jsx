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
      <div className="space-y-8 md:h-[60vh]">
        {currentQuestion.passageContent && (
          <p
            dangerouslySetInnerHTML={{ __html: currentQuestion.passageContent }}
            className="text-[18px]  max-h-[184px] overflow-y-scroll scrollbar-hide"
          ></p>
        )}
        <p
          dangerouslySetInnerHTML={{ __html: currentQuestion.question }}
          className="text-[18px]  max-h-[184px] overflow-y-scroll scrollbar-hide"
        ></p>
        {currentQuestion.questionType === "numerical" ? (
          <div className="mt-4">
            <input
              type="number"
              name={`question${currentQuestion.id}`}
              value={responses[currentQuestion.id] || ""} // Retrieve the stored numerical answer
              onChange={(e) =>
                handleOptionChange(currentQuestion.id, e.target.value)
              } // Store user's input
              placeholder="Enter your answer"
              className="form-input mt-1 block w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
        ) : (
          currentQuestion.answers && (
            <ul className="space-y-4 mt-4">
              {Object.entries(currentQuestion.answers).map(([key, option]) => (
                <li key={key} className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name={`question${currentQuestion.id}`}
                    value={key} // Store the key (answer option ID)
                    checked={responses[currentQuestion.id] === key}
                    onChange={() => handleOptionChange(currentQuestion.id, key)} // Pass key to parent
                    className="form-radio h-5 w-5 text-blue-500"
                  />
                  <label className="text-gray-700">{option}</label>
                </li>
              ))}
            </ul>
          )
        )}
      </div>
    </div>
  );
}

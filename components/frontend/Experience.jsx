import React from "react";

export const Experience = () => {
  return (
    <div className="w-full px-4 py-8 bg-gray-50 flex justify-center">
      <div className="max-w-4xl w-full flex flex-col sm:flex-row sm:justify-between gap-8 text-center">
        <div className="flex-1 bg-white shadow-lg rounded-xl py-6 sm:py-8 hover:scale-105 transition-transform duration-300">
          <p className="text-[24px] font-bold text-gray-800">90% Success</p>
          <p className="text-base sm:text-lg text-primary02 font-medium mt-2 ">
            {" "}
            In tTop Boarding Schools
          </p>
        </div>

        <div className="flex-1 bg-white shadow-lg rounded-xl py-6 sm:py-8 hover:scale-105 transition-transform duration-300">
          <p className="text-[24px] font-bold text-gray-800">8+ Years</p>
          <p className="text-base sm:text-lg text-primary02 font-medium mt-2">
            Of Expert Experience
          </p>
        </div>

        <div className="flex-1 bg-white shadow-lg rounded-xl py-6 sm:py-8 hover:scale-105 transition-transform duration-300">
          <p className="text-[24px] font-bold text-gray-800">1000+</p>
          <p className="text-base sm:text-lg text-primary02 font-medium mt-2">
            Successful Admissions
          </p>
        </div>
      </div>
    </div>
  );
};

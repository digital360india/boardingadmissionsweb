import React from 'react'

export default function Registration() {
  return (
    <div>
          <div className="px-[100px] mx-auto mt-36 mb-8">
      <div className="ml-4">
        <p className="text-primary02 font-semibold text-32px">
          Registration Form
        </p>
        <p className="  text-18px text-[#8692A6]">
          We are happy to have you here
        </p>
      </div>
      <div className="pt-10">
        <p className="text-primary02 font-medium text-24px ml-3">Primary Details</p>
        <div className="flex justify-evenly space-x-12 py-4">
          <div>
            <p className="text-16px font-medium text-[#696F79] py-4 ">
              {" "}
              Enter your full name
            </p>
            <input
              className="text-14px bg-[#E6E6E64D] border border-primary02 rounded-md text-[#8692A6] p-4 w-[25vw] h-[9.5vh] font-medium"
              type="text"
              placeholder="Full Name*"
            />
          </div>
          <div>
            <p className="text-16px font-medium text-[#696F79] py-4">
              Enter your Father / Mother Name
            </p>
            <input
              className="text-14px bg-[#E6E6E64D] border border-primary02 rounded-md text-[#8692A6] p-4 w-[25vw] h-[9.5vh] font-medium"
              type="text"
              placeholder="Father / Mother Name*"
            />
          </div>
          <div>
            <p className="text-16px font-medium text-[#696F79] py-4">
              Enter your Phone Number
            </p>
            <input
              className="text-14px bg-[#E6E6E64D] border border-primary02 rounded-md text-[#8692A6] p-4 w-[25vw] h-[9.5vh] font-medium"
              type="text"
              placeholder="Phone Number*"
            />
          </div>
        </div>

        <div className="flex justify-evenly space-x-12 pb-10">
          <div>
            <p className="text-16px font-medium text-[#696F79] py-4">
              Enter your email
            </p>
            <input
              className="text-14px bg-[#E6E6E64D] border border-primary02 rounded-md text-[#8692A6] p-4 w-[25vw] h-[9.5vh] font-medium"
              type="text"
              placeholder="Email*"
            />
          </div>
          <div>
            <p className="text-16px font-medium text-[#696F79] py-4">DOB</p>
            <input
              className="text-14px bg-[#E6E6E64D] border border-primary02 rounded-md text-[#8692A6] p-4 w-[25vw] h-[9.5vh] font-medium"
              type="date"
            />
          </div>
          <div>
            <p className="text-16px font-medium text-[#696F79] py-4">
              Enter your City
            </p>
            <input
              className="text-14px bg-[#E6E6E64D] border border-primary02 rounded-md text-[#8692A6] p-4 w-[25vw] h-[9.5vh] font-medium"
              type="text"
              placeholder="City*"
            />
          </div>
        </div>
      </div>

      <div>
        <p className="text-primary02 font-medium text-24px ml-3">
          Educational Details
        </p>
        <div className="flex justify-evenly space-x-12">
          <div>
            <p className="text-16px font-medium text-[#696F79] py-4">
              Enter your current Class
            </p>
            <input
              className="text-14px bg-[#E6E6E64D] border border-primary02 rounded-md text-[#8692A6] p-4 w-[25vw] h-[9.6vh] font-medium"
              type="text"
              placeholder="Class*"
            />
          </div>
          <div>
            <p className="text-16px font-medium text-[#696F79] py-4">
              Enter your School Name
            </p>
            <input
              className="text-14px bg-[#E6E6E64D] border border-primary02 rounded-md text-[#8692A6] p-4 w-[25vw] h-[9.5vh] font-medium"
              type="text"
              placeholder="School name*"
            />
          </div>
          <div>
            <p className="text-16px font-medium text-[#696F79] py-4">
              Enter target School Name
            </p>
            <input
              className="text-14px bg-[#E6E6E64D] border border-primary02 rounded-md text-[#8692A6] p-4 w-[25vw] h-[9.5vh] font-medium"
              type="text"
              placeholder="Target School Name*"
            />
          </div>
        </div>
      </div>
      <div className="py-20 pl-[0.5%]">
        <button className="bg-gradient01 text-16px font-medium text-white w-[28vw] h-[9.5vh] rounded-md">
          Submit
        </button>
      </div>
    </div>
    </div>
  )
}

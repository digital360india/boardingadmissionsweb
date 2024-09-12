import React from "react";
import Image from "next/image";

export default function Login() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center  mt-[3%] mb-16 px-4 lg:px-[100px] lg:mx-0 mx-10">
      <div className="w-full lg:w-[1140px] lg:h-[690px] flex flex-col lg:flex-row lg:space-x-14">
        <div className="w-full lg:w-[426px] flex flex-col my-auto">
          <p className="font-semibold text-2xl lg:text-[30px]">Welcome Back 👋</p>
          <p className="text-lg lg:text-18px text-[#8692A6]">
            We are happy to have you back
          </p>
          <div className="pt-8 flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <label className="text-lg lg:text-16px font-medium text-[#696F79]">
                Your Phone Number/Email
              </label>
              <input
                className="text-sm lg:text-14px text-[#8692A6] bg-[#E6E6E64D] rounded-md border border-[#075D70] p-4 w-full lg:w-[421px] h-[64px]"
                placeholder="Phone Number / Email"
                type="text"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-lg lg:text-16px font-medium text-[#696F79]">
                Password
              </label>
              <input
                className="rounded-md border border-[#075D70] text-sm lg:text-14px text-[#8692A6] p-4 w-full lg:w-[421px] bg-[#E6E6E64D] h-[64px]"
                type="text"
                placeholder="Password"
              />
            </div>
            <div>
              <label className="flex items-center text-sm lg:text-16px font-medium text-[#696F79]">
                <input
                  type="checkbox"
                  className="mr-2"
                />
                <span>I agree to the terms & conditions</span>
              </label>
            </div>
            <div className="flex flex-col xl:space-y-6 lg:space-y-4 xl:pt-6 pt-4 space-y-4">
              <button
                type="submit"
                className="w-full lg:w-[421px] h-[64px] text-lg lg:text-16px font-medium text-white rounded-md border bg-gradient01"
              >
                Login
              </button>
              <div className="text-center text-[#BABABA]">or</div>
              <button
                type="submit"
                className="w-full lg:w-[421px] h-[64px] text-lg lg:text-primary02 bg-white rounded-md border border-primary02"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>

        <div className="hidden lg:block lg:w-full lg:h-full">
          <Image
            src="/images/login.svg"
            width={1140}
            height={690}
            alt="Login Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

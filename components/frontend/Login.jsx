import React from 'react'
import Image from "next/image";
export default function Login() {
  return (
    <div>
        <div className="w-full h-[100vh] mt-48 mb-16 flex justify-center items-center ">
      <div className="w-[1140px] h-[690px] ">
        <div className="flex justify-between space-x-14">
          <div className="w-[426px] ">
            <p className="font-semibold text-[30px]">Welcome Back 👋</p>
            <p className="text-18px   text-[#8692A6]">
              We are happy to have you back
            </p>
            <div className="pt-8 flex-col space-y-4">
              <div className="flex-col space-y-2">
                <label className="text-16px font-medium text-[#696F79] ">
                  Your Phone Number/Email
                </label>
                <input
                  className="  text-14px text-[#8692A6] bg-[#E6E6E64D] rounded-md border border-[#075D70] p-4 w-[421px] h-[64px]"
                  placeholder="Phone Number / Email"
                  type="text"
                />
              </div>
              <div className="flex-col space-y-2">
                <label className="text-16px font-medium text-[#696F79]">
                  Password
                </label>
                <input
                  className=" rounded-md border border-[#075D70]   text-14px text-[#8692A6] p-4 w-[421px] bg-[#E6E6E64D] h-[64px]"
                  type="text"
                  placeholder="Password"
                />
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    className="text-16px font-medium text-[#696F79]"
                  />
                  <span className="pl-4 text-[#696F79]">
                    I agree to the terms & conditions
                  </span>
                </label>
              </div>
              <div className="flex-col space-y-6 pt-6">
                <div>
                  <button
                    type="submit"
                    className="w-[421px] h-[64px] text-16px font-medium text-white  rounded-md border bg-gradient01"
                  >
                    Login
                  </button>
                </div>
                <div className="text-center text-[#BABABA]">or</div>
                <div>
                  {" "}
                  <button
                    type="submit"
                    className="w-[421px] h-[64px] text-primary02 bg-white  rounded-md border border-primary02"
                  >
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Image
              src="/images/login.svg"
              width={1}
              height={1}
              alt="Image"
              className="w-[100%] h-full"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

import Image from "next/image";
import React from "react";

export default function TrustedByStudent() {
  return (
    <div className="relative px-[100px] bg-background01 h-[760px]">
      <div className="flex">
        <div className="w-1/2 flex items-center">
          <div>
            <p className="text-[60px] font-semibold text-primary02 pb-4">
              Trusted By Students
            </p>
            <p className="text-24px w-[419px] h-[108px]">
              Join our live demo class to have all your questions answered by
              our expert.
            </p>
            <div className="py-10">
              <button className=" border  rounded-md w-[223px] py-2 bg-gradient-to-r text-white from-[#075D70] via-[#A1C5CD] to-[#dfdfdf]">
                Book a Demo Class
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2  flex justify-end items-center">
          <div>
            <div className="h-[339px]"></div>
            <div className="">
              <p className="w-[397px] h-[135px] font-normal">
                “Lorem ipsum dolor sit amet consectetur. Pellentesque fringilla
                commodo adipiscing proin. Nibh viverra mauris a integer.
                Facilisis tristique natoque pellentesque mauris urna.”
              </p>
              <p className="font-semibold text-18px">Sakshi Pandey</p>
              <p className="text-primary03 text-14px">Bishop Cotton School</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0">
            <div className="relative inset-0 top-[567px]">
                <div className="flex justify-center ">
          <Image
            src="/images/frame.svg"
            alt="Calendar"
            className="w-full h-[191px]"
            width={2}
            height={2}
          />
          </div>
          <div className="absolute inset-0 -top-[129%] left-[26%]">
            <Image
              src="/images/student.svg"
              alt=""
              className="w-[480px] h-[440px]"
              width={2}
              height={2}
            />
          </div>
          </div>
      </div>
    </div>
  );
}

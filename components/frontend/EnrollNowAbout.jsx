import Image from "next/image";
import React from "react";

const EnrollNowAbout = () => {
  return (
    <>
      <div>
        <div className="mt-8 md:mt-10 md:mb-10">
          <div className="md:flex md:justify-between md:items-center px-6 md:px-32">
            <div>
              <h1 className="text-[#3C4852] text-[1.5rem]">About</h1>

              <p className="text-[0.9rem] text-[#7A8B94] h-[2.6rem] w-[18rem] pt-1 md:pt-2">
                All the learning material you get when you join this batch
              </p>
              <div className="pt-4">
                <div className="flex justify-center items-center gap-3 w-[13.85rem] h-[2.75rem] md:w-[14.1rem] md:h-[3.5rem]  rounded-md border border-[#3C4852] ">
                  <div>
                    <Image
                      src="/icons/dwnld.svg"
                      height={24}
                      width={24}
                      alt="button"
                    />
                  </div>
                  <div className="text-[0.875rem]  text-[#3C4852] font-bold">
                    Download brochure
                  </div>
                </div>
              </div>
            </div>

            <div className="flex mt-10 gap-[1.2rem] md:gap-0 md:mt-0  lg:flex-none">
              <div className="flex gap-2 md:gap-3">
                <div>
                  <Image
                    src="/icons/yt.svg"
                    height={40}
                    width={40}
                    alt="button"
                  />
                </div>
                <div>
                  <h1 className="text-[#7A8B94] text-[0.7rem]">Live classes</h1>
                  <h1 className="text-[#3C4852] text-[0.82rem] font-bold">
                    60+
                  </h1>
                </div>
              </div>
              <div className="flex gap-[0.1rem] md:gap-3">
                <div>
                  <Image
                    src="/icons/message.svg"
                    height={40}
                    width={40}
                    alt="button"
                  />
                </div>
                <div>
                  <h1 className="text-[#7A8B94] text-[0.7rem]">
                    Language of teaching
                  </h1>
                  <h1 className="text-[#3C4852] text-[0.82rem] font-bold">
                    English, Hindi
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* laptop */}
          <div className=" hidden md:block lg:block ">
          <div className="flex px-20 pt-20  ">
            <div>
              <h1 className="text-primary02 text-[3rem] w-[49.563rem] h-[9rem]">
                Take a test for free and win up to 50% of scholarship
              </h1>
              <div className="flex gap-10 pt-5">
                <div className="flex gap-2">
                  <Image
                    src="/icons/check.svg"
                    width={18}
                    height={19}
                    alt="check"
                  />
                  <h1>Just 20 Minutes</h1>
                </div>
                <div className="flex gap-2">
                  <Image
                    src="/icons/check.svg"
                    width={18}
                    height={19}
                    alt="check"
                  />
                  <h1>20 quick questions</h1>
                </div>
              </div>

              <div className=" pt-28">
                <button
                  type="submit"
                  className="md:w-[12.92rem] md:h-[3rem] text-white   rounded-md border border-primary02 bg-gradient01 border-custom"
                >
                  Attempt test now
                </button>
              </div>
            </div>
    

          <div>
            <Image
              src="/icons/OBJECTS.svg"
              width={410}
              height={352}
              alt="img"
            />
          </div>
          </div>
          </div>

          {/* mobile */}
          <div className="flex justify-center items-center  md:hidden lg:hidden  p-[1rem]">
            <div>
              <h1 className="text-primary02 font-bold text-[1.5rem] ">
                Take a test for free and win up to 50% of scholarship
              </h1>

              <div className="flex justify-around gap-[1rem]">
                <div className="">
                  <div className="flex gap-2 pt-2">
                    <Image
                      src="/icons/check.svg"
                      width={18}
                      height={19}
                      alt="check"
                    />
                    <h1 className="text-[0.875rem]">Just 20 Minutes</h1>
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Image
                      src="/icons/check.svg"
                      width={18}
                      height={19}
                      alt="check"
                    />
                    <h1 className="text-[0.875rem]">20 quick questions</h1>
                  </div>
                  <div className="pt-5 ">
                    <button
                      type="submit"
                      className="w-[9rem] h-[2.5rem] text-[0.75rem]  text-white   rounded-md border border-primary02 bg-gradient01 border-custom"
                    >
                      Attempt test now
                    </button>
                  </div>
                </div>
                <div className="">
                  <Image
                    src="/icons/OBJECTS.svg"
                    width={140}
                    height={140}
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnrollNowAbout;

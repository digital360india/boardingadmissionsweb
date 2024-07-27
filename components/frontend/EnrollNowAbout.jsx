import Image from "next/image";
import React from "react";

const EnrollNowAbout = () => {
  return (
    <>
      <div>
        <div className="mt-10 mb-10">
          <div className="flex justify-between items-center px-32">
            <div>
              <h1 className="text-[#3C4852] text-[1.5rem]">About</h1>

              <p className="text-[0.9rem] text-[#7A8B94] h-[2.6rem] w-[18rem] pt-2">
                All the learning material you get when you join this batch
              </p>
              <div className="pt-4">
                <div className="flex justify-center items-center gap-3 w-[14.1rem] h-[3.5rem]  rounded-md border border-[#3C4852] ">
                  <div>
                    <Image
                      src="/icons/dwnld.svg"
                      height={24}
                      width={24}
                      alt="button"
                    />
                  </div>
                  <div className="text-[0.9rem]  text-[#3C4852] font-bold">
                    Download brochure
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
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
                <h1 className="text-[#3C4852] text-[0.82rem] font-bold">60+</h1>
              </div>
            </div>
            <div className="flex gap-3">
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

          <div className="flex justify-center items-center">
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

          <div className="px-[75px]">
            <button
              type="submit"
              className="w-[12.92rem] h-[3rem] text-white   rounded-md border border-primary02 bg-gradient01 border-custom"
            >
              Attempt test now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnrollNowAbout;

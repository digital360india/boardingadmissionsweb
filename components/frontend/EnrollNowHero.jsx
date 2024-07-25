import Image from "next/image";
import React from "react";

const EnrollNowHero = () => {
  return (
    <>
      <div>
        <div className="mt-32 mx-20 flex gap-5">
          <h1 className="pt-1">
            Class 12 Science | All Boards | CUET | Teaching language: English
          </h1>
          <div>
            <button
              type="submit"
              className="w-[5.625rem] h-[2.4rem] text-primary02 bg-white  rounded-md border border-primary02"
            >
              Change
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center pt-10 space-x-20">
          <div className="">
            <Image
              src="/icons/school1.svg"
              width={420}
              height={238}
              alt="school"
            />
          </div>

          <div>
            <h1 className="text-primary02 text-[1.3rem] font-medium">
              Prepare for 2024 batch
            </h1>
            <h1 className="text-primary02 text-[2rem] pt-2 font-bold">
              Welham Boys School, Dehradun, Uttarakhand
            </h1>

            <div className="w-full max-w-[44.313rem] flex flex-col gap-4 pt-10">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Image
                    src="/icons/Background.svg"
                    width={16}
                    height={16}
                    alt="school"
                  />
                  <h1 className="text-[1rem]">
                    High academic standards and quality education.
                  </h1>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/icons/Background.svg"
                    width={16}
                    height={16}
                    alt="school"
                  />
                  <h1 className="text-[1rem]">
                    Modern buildings and great facilities.
                  </h1>
                </div>
              </div>
              <div className="flex justify-between ">
                <div className="flex items-center gap-2">
                  <Image
                    src="/icons/Background.svg"
                    width={16}
                    height={16}
                    alt="school"
                  />
                  <h1 className="text-[1rem]">
                    Focus on overall growth with many activities.
                  </h1>
                </div>

                <div className="flex items-center gap-2">
                  <Image
                    src="/icons/Background.svg"
                    width={16}
                    height={16}
                    alt="school"
                  />
                  <h1 className="text-[1rem]">
                    Prestigious alumni providing mentorship.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between  p-12 px-20 ">
          <div className="flex justify-center items-center gap-5 pb-3">
            <Image
              src="/icons/enroll.svg"
              width={22}
              height={22}
              alt="school"
            />
            <h1>60+ live classes and interview Preparation</h1>
          </div>
          <div className=" flex justify-end pt-4 pb-8">
            <div className="w-[138px] h-[40px] bg-primary02 border-custom rounded-lg flex justify-center items-center">
              <button className="text-white">View Package</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnrollNowHero;

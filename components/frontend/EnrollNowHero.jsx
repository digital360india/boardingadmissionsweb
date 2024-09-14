import Image from "next/image";
import React from "react";

const EnrollNowHero = () => {
  return (
    <>
      <div>
        <div className="mt-24 flex justify-between  px-5 md:px-0 md:mt-32 md:mx-20  md:gap-5">
          <h1 className="pt-1 hidden md:block lg:block">
            Class 12 Science | All Boards | CUET | Teaching language: English
          </h1>
          <h1 className="text-[0.75rem] pt-1  md:hidden lg:hidden">
            12 Science | Welham Boys
          </h1>
          <div>
            <button
              type="submit"
              className="w-[4.25rem] h-[1.8rem] text-[1rem] md:w-[5.625rem] md:h-[2.4rem] text-primary02 bg-white  rounded-md border border-primary02"
            >
              Change
            </button>
          </div>
        </div>

        <div className="px-5 pt-5 md:px-0 md:flex md:justify-center md:items-center md:pt-10 md:space-x-20 ">
          <div className=" md:hidden lg:hidden ">
            <h1 className="text-primary02 text-[1.125rem] md:text-[2rem] pt-2 font-bold">
              Welham Boys School, Dehradun, Uttarakhand
            </h1>
            <h1 className="text-primary02 text-[0.875rem] md:text-[1.3rem] font-medium">
              Prepare for 2024 batch
            </h1>
          </div>

          <div className="pt-3 md:pt-0 md:w-[420px] md:h-[238px]">
            <Image
              src="/icons/school1.svg"
              width={420}
              height={238}
              alt="school"
              className="rounded-lg md:w-[420px] md:h-[238px]"
            />
          </div>

          <div>
            <div className="hidden md:block lg:block ">
              <h1 className="text-primary02 text-[0.875rem] md:text-[1.3rem] font-medium">
                Prepare for 2024 batch
              </h1>
              <h1 className="text-primary02 text-[1.125rem] md:text-[2rem] pt-2 font-bold">
                Welham Boys School, Dehradun, Uttarakhand
              </h1>
            </div>

            <div className="w-full max-w-[44.313rem] flex flex-col gap-2 md:gap-4   pt-5 md:pt-10">
              <div className="flex  md:justify-between">
                <div className="w-[10.2rem] h-[3.5rem] md:w-[18.64rem] md:h-[3rem] flex md:items-center gap-2">
                  <div className="w-[2rem]  h-[2.3rem]">
                    <Image
                      src="/icons/Background.svg"
                      width={16}
                      height={16}
                      alt="school"
                      className="w-[2rem] h-[1rem]"
                    />
                  </div>
                  <h1 className="text-[0.75rem] md:text-[1rem]">
                    High academic standards and quality education.
                  </h1>
                </div>

                <div className="w-[10.2rem] h-[3.5rem] md:w-[18.64rem] md:h-[3rem] flex md:items-center gap-2">
                  <div className="w-[2rem]  h-[2.3rem]">
                    <Image
                      src="/icons/Background.svg"
                      width={32}
                      height={32}
                      alt="school"
                      className="w-[1.5rem] h-[1rem]"
                    />
                  </div>
                  <h1 className="text-[0.75rem] md:text-[1rem]">
                    Modern buildings and great facilities.
                  </h1>
                </div>
              </div>
              <div className="flex md:justify-between ">
                <div className="w-[10.2rem] h-[3.5rem] md:w-[16.64rem] md:h-[3rem] flex md:items-center gap-2">
                  <div className="w-[2rem]  h-[2.3rem]">
                    <Image
                      src="/icons/Background.svg"
                      width={32}
                      height={32}
                      alt="school"
                      className="w-[1.8rem] h-[1rem]"
                    />
                  </div>
                  <h1 className="text-[0.75rem] md:text-[1rem]">
                    Focus on overall growth with many activities.
                  </h1>
                </div>
                <div className="w-[10.2rem] h-[3.5rem] md:w-[18.8rem] md:h-[3rem] flex md:items-center gap-2">
                  <div className="w-[2rem]  h-[2.5rem]">
                    <Image
                      src="/icons/Background.svg"
                      width={32}
                      height={32}
                      alt="school"
                      className="w-[1.8rem] h-[1rem]"
                    />
                  </div>
                  <h1 className="text-[0.75rem] md:text-[1rem]">
                    Prestigious alumni providing mentorship.
                  </h1>
                </div>

                {/* <div className="flex items-center gap-2">
                  <Image
                    src="/icons/Background.svg"
                    width={16}
                    height={16}
                    alt="school"
                  />
                  <h1 className="text-[0.75rem] md:text-[1rem]">
                    Focus on overall growth with many activities.
                  </h1>
                </div> */}

                {/* <div className="flex items-center gap-2">
                  <Image
                    src="/icons/Background.svg"
                    width={16}
                    height={16}
                    alt="school"
                  />
                  <h1 className="text-[0.75rem] md:text-[1rem]">
                    Prestigious alumni providing mentorship.
                  </h1>
                </div> */}
              </div>
            </div>
          </div>
        </div>



        <div className="p-6 md:flex md:justify-between  md:p-12 md:px-20 ">
          <div className="flex justify-center items-center gap-5 pb-3">
            <Image
              src="/icons/enroll.svg"
              width={22}
              height={22}
              alt="school"
            />
            <h1 className="text-[0.875rem]">60+ live classes and interview Preparation</h1>
          </div>
          <div className=" flex justify-center items-center md:justify-end md:pt-4 md:pb-8">
            <div className="w-[6.2rem] h-[2rem] md:w-[138px] md:h-[40px] bg-gradient01 md:bg-primary02 border-custom rounded-lg flex justify-center items-center">
              <button className="text-white text-[0.5rem]">View Package</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnrollNowHero;

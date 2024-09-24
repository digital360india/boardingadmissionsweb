import Image from "next/image";
import React from "react";

export default function AboutMakeUs() {
  return (
    <div className="flex h-full w-full md:py-10  ">
      <div className="lg:block hidden ">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/images%2Faboutmakeusdifferent.png?alt=media&token=496c1d44-4e2b-4c30-9ada-93b011836489"
          width={1000}
          height={1000}
          alt="Image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="bg-[#F4FCFC] w-full ">
        <div>
          <p className="text-primary02 lg:text-32px lg:text-center text-[28px] font-medium lg:font-semibold lg:my-2 lg:px-[0] px-[24px] my-3">
            What Makes us Different
          </p>
          <p className="text-[16px] lg:text-center lg:px-[13%] px-[24px]">
            We excel with a 90% success rate, offering personalized guidance and
            tailored preparation to fully equip students for top boarding school
            admissions.
          </p>
        </div>

        <div className="lg:hidden flex justify-center my-4 px-[24px]">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/images%2Faboutmakeusdifferent.png?alt=media&token=496c1d44-4e2b-4c30-9ada-93b011836489"
            className="w-full "
            width={1000}
            height={1000}
            alt="Image"
          />
        </div>

        {/* Component for Small Screens */}
        <div className="flex items-center justify-center mt-2 lg:hidden">
          <div className="relative w-[90vw] xl:w-[35vw] h-auto xl:h-[38vh] lg:h-[27vh] lg:w-[40vw] grid grid-cols-2 grid-rows-2 gap-y-4 lg:gap-y-8">
            {/* Background Image */}
            <Image
              src="/images/lines.svg"
              width={2}
              height={2}
              alt="Image"
              className="absolute inset-0 xl:w-[540px] xl:h-[450px] lg:w-[400px] lg:h-[270px] h-full w-full object-contain"
            />

            {/* First Column - Top Left */}
            <div className="relative text-center lg:text-left p-2 xl:pt-4">
              <p className="text-primary02 text-[20px] md:text-[24px] lg:text-[28px] pb-1 lg:pb-4">
                <span className="lg:hidden block">
                  High <br /> Success
                </span>
                <span className="lg:block hidden">High Success</span>
              </p>
              <p className="text-[14px] md:text-[16px] w-[80%] md:w-full mx-auto lg:mx-0">
                90% admission success.
              </p>
            </div>

            {/* Second Column - Top Right */}
            <div className="relative text-center lg:text-left p-2 xl:pt-4">
              <p className="text-primary02 text-[20px] md:text-[24px] lg:text-[28px] pb-1 lg:pb-4">
                <span className="lg:hidden block">
                  Expert <br /> Guidance
                </span>
                <span className="lg:block hidden">Expert Guidance</span>
              </p>
              <p className="text-[14px] md:text-[16px]">
                Tailored entrance exam prep.
              </p>
            </div>

            {/* Third Column - Bottom Left */}
            <div className="relative text-center lg:text-left p-2 xl:pt-4">
              <p className="text-primary02 text-[20px] md:text-[24px] lg:text-[28px] pb-1 lg:pb-4">
                Holistic Approach
              </p>
              <p className="text-[14px] md:text-[16px] w-[160px] md:w-full">
                Focus on all-round readiness.
              </p>
            </div>

            {/* Fourth Column - Bottom Right */}
            <div className="relative text-center lg:text-left p-2 xl:pt-4">
              <p className="text-primary02 text-[20px] md:text-[24px] lg:text-[28px] pb-1 lg:pb-4">
                Customized Courses
              </p>
              <p className="text-[14px] md:text-[16px]">
                Specific to top schools.
              </p>
            </div>
          </div>
        </div>

        {/* Component for Larger Screens */}
        <div className="hidden lg:flex items-center justify-center ">
          <div className="relative w-[90vw] xl:w-[32vw] h-auto xl:h-[25vh] lg:h-[27vh] lg:w-[40vw]">
            <Image
              src="/images/Frame 50 (2).svg"
              width={1000}
              height={1000}
              alt="Image"
              className=" xl:h-[315px] w-[1100px] h-[200px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

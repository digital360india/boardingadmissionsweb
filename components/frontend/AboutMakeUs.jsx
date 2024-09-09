import Image from "next/image";
import React from "react";

export default function AboutMakeUs() {
  return (
    <div className="flex h-full w-full">
      <div className="lg:block hidden">
        <Image
          src="/images/aboutgirl.svg"
          width={700}
          height={700}
          alt="Image"
        />
      </div>

      <div className="bg-[#F4FCFC] ">
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
            src="/images/aboutgirl2.svg"
            className="w-full "
            width={1}
            height={1}
            alt="Image"
          />
        </div>

        <div className="flex  items-center justify-center xl:mt-5 mt-2">
          <div className="relative w-[90vw] xl:w-[35vw] h-auto xl:h-[38vh] lg:h-[27vh] lg:w-[40vw]">
            <Image
              src="/images/lines.svg"
              width={2}
              height={2}
              alt="Image"
              className="xl:w-[540px] xl:h-[450px] lg:w-[400px] lg:h-[270px] h-full w-full object-contain"
            />
            {/* First Column - Top Left */}
            <div className="absolute top-[10%] xl:top-[50px] lg:top-[0%] left-[13%] md:left-[10%] lg:left-[5%]  lg:text-left  md:w-[40%] lg:w-[40%]">
              <p className="text-primary02 text-[20px] md:text-[24px] lg:text-[28px] xl:pb-4 lg:pb-1 pb-4">
                High Success
              </p>
              <p className="text-[14px] w-[130px] md:w-full md:text-[16px] text-center lg:text-start">
                {" "}
                90% admission success.
              </p>
            </div>
            {/* Second Column - Top Right */}
            <div className="absolute top-[10%] xl:top-[50px] lg:top-[0%] left-[50%] md:left-[55%] xl:left-[300px] lg:left-[240px] text-center lg:text-left md:w-[40%] lg:w-[40%]">
              <p className="text-primary02 text-[20px] md:text-[24px] lg:text-[28px] xl:pb-4 lg:pb-1 pb-4">
              Expert Guidance
              </p>
              <p className="text-[14px] md:text-[16px]">
              Tailored entrance exam prep.
              </p>
            </div>
            {/* Third Column - Bottom Left */}
            <div className="absolute top-[60%] left-[5%] lg:top-[110%] xl:top-[240px] md:left-[10%] lg:left-[5%] text-center lg:text-left  md:w-[40%] lg:w-[40%]">
              <p className="text-primary02 text-[20px] md:text-[24px] lg:text-[28px] xl:pb-4 lg:pb-1 pb-4">
              Holistic Approach
              </p>
              <p className="text-[14px] w-[160px] md:w-full md:text-[16px]">
              Focus on all-round readiness.
              </p>
            </div>
            {/* Fourth Column - Bottom Right */}
            <div className="absolute top-[60%] lg:top-[110%] xl:top-[240px] left-[50%] md:left-[55%] xl:left-[300px] lg:left-[240px] text-center lg:text-left md:w-[40%] lg:w-[44%]">
              <p className="text-primary02 text-[20px] md:text-[24px]  lg:text-[28px] xl:pb-4 lg:pb-1 pb-4">
              Customized Courses
              </p>
              <p className="text-[14px] md:text-[16px]">
              Specific to top schools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

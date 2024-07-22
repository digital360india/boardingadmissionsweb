import Image from "next/image";
import React from "react";

const SoftSkillMasteryPage = () => {
  return (
    <>
      <div>
        <div className="">
          <div className="mx-4 mt-2 md:mx-20 md:mt-14">
            <div id="Communication skills">
              <h1 className="text-[1.5rem] font-bold md:text-[3.5rem] text-primary02">
                COMMUNICATION SKILLS
              </h1>
              <p className="text-[0.875rem] md:text-[18px] text-[#010101] mt-4">
                Communication is key to success. Our Communication Skills
                program at Boarding Admissions helps students articulate their
                thoughts clearly through interactive role-plays, group
                discussions, and one-on-one coaching. We focus on both verbal
                and non-verbal skills, teaching active listening and clear
                expression. Mastering these skills boosts academic performance,
                enhances personal relationships, and prepares students for
                future leadership roles.
              </p>
            </div>
            <div className=" hidden md:flex md:space-x-12 md:mt-4">
              <div>
                <Image
                  src="/icons/online1.svg"
                  width={632}
                  height={280}
                  alt="course1"
                />
              </div>
              <div>
                <Image
                  src="/icons/online2.svg"
                  width={368}
                  height={280}
                  alt="course1"
                />
              </div>
              <div className="space-y-5">
                <div>
                  <Image
                    src="/icons/online3.svg"
                    width={180}
                    height={128}
                    alt="course1"
                  />
                </div>
                <div>
                  <Image
                    src="/icons/online4.svg"
                    width={180}
                    height={128}
                    alt="course1"
                  />
                </div>
              </div>
            </div>

            <div className="md:hidden lg:hidden mt-4">
              <Image
                src="/icons/online1.svg"
                width={632}
                height={280}
                alt="course1"
              />
            </div>
          </div>

          <hr className="mt-5 md:mt-12" />
          <div className="mx-4 mt-4 md:mt-8 md:mx-20">
            <div id="Emotional intelligence">
              <h1 className="text-[1.5rem] font-bold md:text-[3.5rem] text-primary02">
                EMOTIONAL INTELLIGENCE
              </h1>
              <p className="text-[0.875rem] md:text-[18px] text-[#010101] mt-4">
                Emotional Intelligence (EI) is crucial for academic and personal
                growth. Our Emotional Intelligence program at Boarding
                Admissions helps students build skills in self-awareness,
                self-regulation, empathy, and social interactions through
                mindfulness exercises, reflective journaling, and group
                discussions. Strong EI enhances academic performance, mental
                well-being, and social relationships, preparing students to
                manage stress and thrive in all areas of life.
              </p>
            </div>
            <div className="hidden   md:flex md:space-x-12 md:mt-4">
              <div>
                <Image
                  src="/icons/PI1.svg"
                  width={632}
                  height={280}
                  alt="course1"
                />
              </div>
              <div>
                <Image
                  src="/icons/PI2.svg"
                  width={579}
                  height={280}
                  alt="course1"
                />
              </div>
            </div>
            <div className="md:hidden lg:hidden mt-4">
              <Image
                src="/icons/PI1.svg"
                width={632}
                height={280}
                alt="course1"
              />
            </div>
          </div>
          <hr className="mt-5 md:mt-12" />

          <div className="mx-4 mt-4 md:mt-8 md:mx-20">
            <div className="" id="Problem-solving">
              <h1 className="text-[1.5rem] font-bold md:text-[3.5rem] text-primary02">
                PROBLEM SOLVING
              </h1>
              <p className="text-[0.875rem] md:text-[18px] text-[#010101] mt-4">
                Problem-solving is essential for academic and future success.
                Our Problem-Solving program at Boarding Admissions teaches
                students critical thinking and analytical skills through
                interactive methods like case studies, puzzles, and real-life
                scenarios. Students learn to break down challenges, find
                creative solutions, and approach problems with confidence.
                Strong problem-solving skills enhance exam performance, group
                projects, and future careers.
              </p>
            </div>
            <div className="hidden    md:flex space-x-12 mt-4">
              <div>
                <Image
                  src="/icons/MT1.svg"
                  width={632}
                  height={280}
                  alt="Mock Test"
                />
              </div>
              <div>
                <Image
                  src="/icons/MT2.svg"
                  width={262}
                  height={280}
                  alt="Mock Test"
                />
              </div>
              <div>
                <Image
                  src="/icons/MT3.svg"
                  width={280}
                  height={280}
                  alt="Mock Test"
                />
              </div>
            </div>
            <div className="md:hidden lg:hidden mt-4">
              <Image
                src="/icons/MT1.svg"
                width={632}
                height={280}
                alt="Mock Test"
              />
            </div>
          </div>
          <hr className="mt-5 md:mt-12" />
          <div className="mx-4 mt-4 md:mt-8 md:mx-20">
            <div className="" id="Leadership">
              <h1 className="text-[1.5rem] font-bold md:text-[3.5rem] text-primary02">
                LEADERSHIP
              </h1>
              <p className="text-[0.875rem] md:text-[18px] text-[#010101] mt-4">
              Leadership skills are vital for personal and professional success. Our Leadership program at Boarding Admissions guides students in decision-making, team management, and inspiring others through expert-led workshops, group projects, and individual coaching. Students develop the confidence and integrity needed to lead effectively in school, extracurricular activities, and future careers.
              </p>
            </div>
            <div className="hidden    md:flex md:space-x-12 md:mt-4">
              <div>
                <Image
                  src="/icons/Doubt1.svg"
                  width={632}
                  height={280}
                  alt="Doubt1"
                />
              </div>
              <div>
                <Image
                  src="/icons/Doubt2.svg"
                  width={368}
                  height={280}
                  alt="Doubt2"
                />
              </div>

              <div>
                <Image
                  src="/icons/Doubt3.svg"
                  width={187}
                  height={130}
                  alt="Doubt3"
                />
              </div>
            </div>
            <div className="md:hidden lg:hidden mt-4">
              <Image
                src="/icons/Doubt1.svg"
                width={632}
                height={280}
                alt="Doubt1"
              />
            </div>
          </div>
          <hr className="mt-5 md:mt-12" />

          {/* laptop */}
          <div className="hidden lg:block border border-primary02 rounded-3xl mt-[1.25rem] mx-[2rem]">
            <div className="w-full h-[13.125rem] gap-[2rem] flex justify-center items-center ">
              <div className="text-[2.5rem] text-primary02">
                Ready for top boarding schools? <br /> Start your journey now!
              </div>

              <div>
                <div className=" w-[18.75rem] h-[3.5rem] bg-gradient01  border-custom rounded-md flex items-center justify-center">
                  <button className="text-white">Enroll Now</button>
                </div>

                <div className="flex justify-center items-center py-2">
                  <div className="bg-[#00000015] w-[120px] h-[1px]"></div>
                  <div className="text-[#00000015]">
                    &nbsp;&nbsp;&nbsp;OR&nbsp;&nbsp;&nbsp;
                  </div>
                  <div className="bg-[#00000015] w-[120px] h-[1px]"></div>
                </div>
                <u className="text-primary02 text-center">
                  <h1 className="">Contact Us</h1>
                </u>
              </div>
            </div>
          </div>

          {/* mobile */}
          <div className="lg:hidden border rounded-md px-4 py-6">
            <div className="w-full h-auto border border-primary02 rounded-md py-[1rem] px-[0.5rem]">
              <h1 className="text-primary02 text-[1.5rem]">
                Want to prepare for top Boarding School ?
              </h1>
              <div className="flex justify-between px-2 pt-4">
                <div className="w-[7.5rem] h-[1.9rem]  bg-gradient01  border-custom rounded-md flex items-center justify-center text-[0.875rem] text-white ">
                  Enroll Now
                </div>
                <div className="text-[#00000080]  text-[0.875rem] pt-[5px]">
                  OR
                </div>
                <u className="text-primary02  text-[0.875rem] pt-[5px]">
                  Contact Us
                </u>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SoftSkillMasteryPage;

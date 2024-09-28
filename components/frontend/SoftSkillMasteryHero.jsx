"use client";
import React from "react";
import SoftSkillMastery from "@/public/icons/SoftSkillMastery.svg";
import Link from "next/link";

const SoftSkillMasteryHero = () => {
  return (
    <>
      <div className="md:mx-20">
        <h1 className="text-[2rem] md:text-[3.5rem] text-[#075D70] text-center pb-5 md:pb-8 font-bold">
          SOFT SKILL MASTERY
        </h1>
        <div
          className="w-full h-[30.375rem] bg-no-repeat bg-cover bg-center relative"
          style={{ backgroundImage: `url(${SoftSkillMastery.src})` }}
        >
          <div className="w-full   md:w-[22.563rem] h-[17.5rem] px-10 md:px-0 md:mx-12 mt-10 space-y-7   absolute    text-white  ">
            <p className="md:mt-2 text-justify text-[14px]  md:text-[1rem] ">
              In today&apos;s world, academic excellence is just one part of
              success. At Boarding Admissions, our Soft Skill Mastery module
              equips students with vital skills like communication, emotional
              intelligence, problem-solving, and leadership. This comprehensive
              program helps students build strong relationships, manage stress,
              and approach challenges with confidence. By developing these
              skills, students are prepared for both academic success and a
              successful future. Help your child thrive enroll in our Soft Skill
              Mastery module today!
            </p>
            <div className="w-[7.5rem] md:w-[18.75rem]">
              <Link href="/enrollnow/softskillmastery">
                <div className="w-[7.5rem] h-[2.0rem] md:w-[18.75rem] md:h-[3.5rem] bg-gradient01  border-custom rounded-md flex items-center justify-center text-[1rem] ">
                  <button className="text-white">Enroll Now</button>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* laptop */}
        <div className="hidden  md:hidden  w-full h-[82px] bg-primary02 mt-8 lg:flex lg:items-center px-12 text-white gap-10 rounded-lg">
          <Link href="#Communication skills">
            <div className="border w-[12.4rem] h-[45px] rounded-md flex justify-center items-center">
              <button>Communication skills</button>
            </div>
          </Link>
          <Link href="#Emotional intelligence">
            <div className="border w-[15.75rem] h-[45px] rounded-md flex justify-center items-center">
              <button>Emotional intelligence</button>
            </div>
          </Link>
          <Link href="#Problem-solving">
            <div className="border w-[9.438rem] h-[45px] rounded-md flex justify-center items-center">
              <button>Problem-solving</button>
            </div>
          </Link>
          <Link href="#Leadership">
            <div className="border w-[13.635rem] h-[45px] rounded-md flex justify-center items-center">
              <button>Leadership</button>
            </div>
          </Link>
        </div>

        {/* mobile */}
        <div className="sm:block md:block lg:hidden px-4 py-6">
          <div className="w-full h-auto bg-primary02 rounded-md text-white text-[0.75rem] flex flex-wrap gap-2 p-4">
            <Link href="#Communication skills">
              {" "}
              <h1 className="border border-white rounded-md p-2">
                Communication skills
              </h1>
            </Link>
            <Link href="#Leadership">
              {" "}
              <h1 className="border border-white rounded-md p-2">Leadership</h1>
            </Link>
            <Link href="#Emotional intelligence">
              <h1 className="border border-white rounded-md p-2">
                Emotional intelligence
              </h1>
            </Link>

            <Link href="#Problem-solving">
              {" "}
              <h1 className="border border-white rounded-md p-2">
                Problem-solving
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SoftSkillMasteryHero;

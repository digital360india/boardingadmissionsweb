import Image from "next/image";
import React from "react";

const CustomizedCoursesPage = () => {
  return (
    <>
      <div>
        <div className="">
          <div className="mx-4 mt-2 md:mx-20 md:mt-14">
            <div id="One-on-one classes">
              <h1 className="text-[1.5rem] font-bold md:text-[3.5rem] text-primary02">
                ONE-ON-ONE CLASSES
              </h1>
              <p className="text-[0.875rem] md:text-[18px] text-[#010101] mt-4">
                Our one-on-one classes offer tailored instruction to meet each
                student&apos;s unique needs. With individual attention from
                experienced teachers, students receive customized learning plans
                and interactive lessons designed to build confidence and address
                specific challenges. This approach ensures effective preparation
                for entrance exams and supports optimal learning at a pace that
                suits each student&apos;s needs.
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
            <div id="Learning material">
              <h1 className="text-[1.5rem] font-bold md:text-[3.5rem] text-primary02">
                LEARNING MATERIAL
              </h1>
              <p className="text-[0.875rem] md:text-[18px] text-[#010101] mt-4">
                At Boarding Admissions, we offer comprehensive learning
                resources, including PDFs, PPTs, and practice tests tailored to
                your chosen schools. Our interactive materials cover essential
                topics and reflect the latest exam patterns, ensuring effective
                and efficient study. With detailed explanations and ample
                practice opportunities, students build a strong foundation for
                their exams and achieve their best results.
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
            <div className="" id="Flexible schedule">
              <h1 className="text-[1.5rem] font-bold md:text-[3.5rem] text-primary02">
                FLEXIBLE SCHEDULE
              </h1>
              <p className="text-[0.875rem] md:text-[18px] text-[#010101] mt-4">
                At Boarding Admissions, our customized courses offer flexible
                scheduling options to fit your busy lifestyle. Whether it&apos;s
                early mornings, late evenings, or weekends, we adjust to your
                needs for the best learning experience. This flexibility helps
                students balance their studies with other commitments, ensuring
                a productive and stress-free preparation for entrance exams.
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
            <div className="" id="Regular Feedback">
              <h1 className="text-[1.5rem] font-bold md:text-[3.5rem] text-primary02">
                REGULAR FEEDBACK
              </h1>
              <p className="text-[0.875rem] md:text-[18px] text-[#010101] mt-4">
                At Boarding Admissions, we prioritize regular, constructive
                feedback for both students and parents. Our interactive sessions
                highlight strengths and areas for improvement, keeping students
                motivated and on track. This continuous feedback loop helps you
                stay informed about your child&apos;s progress and supports their
                educational journey, ensuring they achieve their best in
                preparation for entrance exams.
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

export default CustomizedCoursesPage;

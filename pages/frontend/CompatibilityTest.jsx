import React from "react";

const CompatibilityTest = () => {
  return (
    <>
      return (
      <>
        <div
          className="w-full h-[480px] bg-no-repeat bg-cover bg-center relative md:mt-24"
          style={{ backgroundImage: `url(${boardingHero.src})` }}
        >
          <div className="md:w-[31.25rem] px-6 md:px-16   absolute  bottom-20 text-white  ">
            <h1 className="text-[2rem] md:text-[3.5rem] font-poppins font-bold w-[14rem] h-[8.25rem] md:w-[31.25rem] md:h-[9.25rem] leading-tight">
              Boarding Compatibility Test
            </h1>
            <div className="mt-6 w-[10rem] md:w-[12.5rem] h-[2.5rem] bg-white rounded-md flex items-center justify-center cursor-pointer">
              <button className="text-[#13375D]">Take Test</button>
            </div>
          </div>
        </div>

        <div className="mx-6 pt-8 md:mx-16 md:pt-20">
          <h1 className="text-[#075D70] text-[1.5rem] font-bold md:text-[2rem]">
            About Boarding Compatibility test
          </h1>
          <p className="text-[0.9rem]  md:text-[1.13rem] text-[#1E1E1E] pt-4 md:pt-6">
            The Boarding Compatibility test is a Comprehensive Tool, especially
            designed to assess whether a student possesses the psychological and
            emotional maturity, necessary for thriving in a Boarding School
            environment. The test is rigorously prepared by expert psychologists
            to analyze a few key behavioral factors such as adaptability,
            emotional resilience, social skills, and academic preparedness, in a
            student, which are crucial for a successful boarding school
            experience.
          </p>
        </div>

        <div>
          {/* laptop procedure */}
          <div className="bg-[#F3F3F3] md:mt-10 w-full h-[44.688rem] hidden lg:block">
            <h1 className="text-[2rem] text-[#075D70] mx-6 font-bold md:mx-16 pt-10">
              Procedure
            </h1>

            <div className="w-full h-[34.188rem]">
              <div className="flex justify-between  items-center mx-16">
                <div className="flex  flex-col">
                  <div className="w-[26.375rem]  bg-white p-4">
                    <u className="text-[#075D70]">
                      <h1 className="text-[1.5rem] text-[#075D70] text-center">
                        Registration
                      </h1>
                    </u>

                    <h1 className="text-center text-[1rem] text-[#333333] pt-[0.75rem]">
                      You(student) will begin by registering and providing
                      essential and academic information. Further, you will
                      receive a unique code on your registered email, once the
                      payment is complete.
                    </h1>
                    <div className="flex justify-center ">
                      <hr className="w-[6.063rem] bg-[#FCA311] h-[3px] rotate-90 absolute mt-[5rem]" />
                      <h1 className="font-bold  text-center absolute mt-[9.375rem]">
                        STEP 1
                      </h1>
                    </div>
                  </div>
                </div>

                <div className="flex  flex-col">
                  <div className="w-[26.375rem]  bg-white p-4">
                    <u className="text-[#075D70]">
                      <h1 className="text-[1.5rem] text-[#075D70] text-center">
                        Analysis, Feedback, and Counseling Session
                      </h1>
                    </u>

                    <h1 className="text-center text-[1rem] text-[#333333] pt-[0.75rem] ">
                      After the test, experts will analyze results, provide
                      detailed feedback, and conduct a counseling session with a
                      psychologist to discuss results, address concerns, and
                      offer guidance for boarding school transition.
                    </h1>
                    <div className="flex justify-center ">
                      <hr className="w-[6.063rem] bg-[#FCA311] h-[3px] rotate-90 absolute mt-[4.5rem]" />
                      <h1 className="font-bold  text-center absolute mt-[8rem]">
                        STEP 3
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="bg-[#6198A366] h-[3px] mt-[2.5rem]" />

              <div className="flex justify-center items-center flex-col">
                <div className="font-bold absolute pb-[26.25rem]">STEP 2</div>
                <div>
                  <hr className="w-[6.063rem] bg-[#FCA311] h-[3px] rotate-90 mb-[2.5rem]" />
                </div>
                <div className="pt-6">
                  <div className="w-[26.375rem]  bg-white p-4 ">
                    <u className="text-[#075D70]">
                      <h1 className="text-[1.5rem] text-[#075D70] text-center">
                        Compatibility Test
                      </h1>
                    </u>

                    <h1 className="text-center text-[1rem] text-[#333333] pt-[0.75rem]">
                      You will then, undertake a thorough psychological test.
                      This test is composed of various scenarios and questions,
                      crafted to measure their emotional maturity, social
                      adaptability, and academic readiness for the unique
                      environment of a boarding school.
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* mobile procedure */}

          <div className="bg-[#F3F3F3] mt-10  w-full h-auto md:h-[53rem] pb-10   lg:hidden">
            <h1 className="text-[1.5rem] md:text-[2rem] text-[#075D70] mx-6 font-bold md:mx-16 pt-5 md:pt-10">
              Procedure
            </h1>

            <div className="w-full h-auto md:h-[34.188rem] pt-8 md:pt-4 md:px-32">
              {/* Step 1 */}
              <div className="flex flex-col items-center mx-6 md:flex-row md:justify-between md:items-center md:mx-16 ">
                <div className="flex flex-col items-center  ">
                  <div className="font-bold mb-4 ">STEP 1</div>
                  <hr className="w-[30rem] bg-[#FCA311] h-[3px] rotate-90 absolute mt-[16.5rem]" />

                  <div
                    className="md:w-[26.375rem] bg-white p-3 z-10 rounded-sm"
                    style={{ boxShadow: "0 0 6px 0 rgba(0, 0, 0, 0.32)" }}
                  >
                    <u className="text-[#075D70]">
                      <h1 className="text-[1.125rem] md:text-[1.5rem] text-[#075D70] text-center">
                        Registration
                      </h1>
                    </u>
                    <h1 className="text-center text-[0.75rem] md:text-[1rem] text-[#333333] pt-[0.5rem] md:pt-[0.75rem]">
                      You(student) will begin by registering and providing
                      essential and academic information. Further, you will
                      receive a unique code on your registered email, once the
                      payment is complete.
                    </h1>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center mx-6 mt-6 md:flex-row md:justify-between md:items-center md:mx-16">
                <div className="flex flex-col items-center mb-6 md:mb-0 z-10">
                  <div className="font-bold mb-4 bg-[#F3F3F3] w-[4rem] h-[1.6rem] text-center">
                    STEP 2
                  </div>
                  <div
                    className="md:w-[26.375rem] bg-white rounded-sm p-3"
                    style={{ boxShadow: "0 0 6px 0 rgba(0, 0, 0, 0.32)" }}
                  >
                    <u className="text-[#075D70] ">
                      <h1 className="text-[1.125rem]  md:text-[1.5rem] text-[#075D70] text-center">
                        Compatibility Test
                      </h1>
                    </u>
                    <h1 className="text-center text-[0.75rem] md:text-[1rem] text-[#333333] pt-[0.5rem] md:pt-[0.75rem]">
                      You will then, undertake a thorough psychological test.
                      This test is composed of various scenarios and questions,
                      crafted to measure their emotional maturity, social
                      adaptability, and academic readiness for the unique
                      environment of a boarding school.
                    </h1>
                  </div>
                </div>
              </div>

              {/* Step 3 */}

              <div className="flex flex-col items-center mx-6 md:mt-6  md:flex-row md:justify-between md:items-center md:mx-16">
                <div className="flex flex-col items-center  z-10">
                  <div className="font-bold mb-4 bg-[#F3F3F3] w-[4rem] h-[1.6rem] text-center">
                    STEP 3
                  </div>
                  <div
                    className="md:w-[26.375rem] bg-white p-3 rounded-sm"
                    style={{ boxShadow: "0 0 6px 0 rgba(0, 0, 0, 0.32)" }}
                  >
                    <u className="text-[#075D70] ">
                      <h1 className="text-[1.125rem] md:text-[1.5rem] text-[#075D70] text-center">
                        Analysis, Feedback, and Counseling Session
                      </h1>
                    </u>
                    <h1 className="text-center text-[0.75rem] md:text-[1rem] text-[#333333] pt-[0.5rem] md:pt-[0.75rem]">
                      After the test, experts will analyze results, provide
                      detailed feedback, and conduct a counseling session with a
                      psychologist to discuss results, address concerns, and
                      offer guidance for boarding school transition.
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mt-10">
            <div className="w-[9.563rem] h-[2.5rem] bg-gradient01 cursor-pointer text-white  flex justify-center items-center text-[0.9rem] rounded-md">
              <button className="">Take Test</button>
            </div>
          </div>

          {/* our top categories */}
          <div className="mx-6 md:mx-[4rem] mt-[3rem] md:mt-[5rem]">
            <h1 className=" text-[1.5rem] md:text-[2rem] text-[#075D70] font-medium">
              Our Top Categories
            </h1>

            <div className="flex overflow-x-auto hide-scrollbar justify-between items-center mt-5 md:mt-10 mb-10">
              <div className="flex gap-3 flex-shrink-0 ">
                <div className="bg-gradient-to-b from-[#FCA311] to-[#568DA9] rounded-lg w-[13.438rem] h-[17.4rem] md:w-[24.875rem] md:h-[22.813rem] p-[3px]">
                  <div className="h-[17rem] md:h-[22.375rem]   bg-white rounded-lg ">
                    <u className="text-[#075D70]">
                      <h1 className="text-primary02 font-bold text-[1.125rem] md:text-[2rem] text-center pt-[1rem] md:pt-[2rem]">
                        Middle School
                      </h1>
                    </u>
                    <p className="text-[1rem] md:text-[1.5rem] text-primary02 text-center md:pt-[1rem]">
                      Class 6-8
                    </p>
                    <p className="text-[0.88rem] md:text-[1.10rem] text-[#000000] p-[1rem] md:p-[1.75rem]">
                      This level of testing focuses on evaluating how well young
                      children adjust to being away from home, how well they
                      interact with others, & how comfortable they are in
                      unfamiliar settings.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-b from-[#FCA311] to-[#568DA9] rounded-lg w-[13.438rem] h-[17.4rem] md:w-[24.875rem] md:h-[22.813rem] p-[3px]">
                  <div className="h-[17rem] md:h-[22.375rem]   bg-white rounded-lg ">
                    <u className="text-[#075D70]">
                      <h1 className="text-primary02 font-bold text-[1.125rem] md:text-[2rem] text-center pt-[1rem] md:pt-[2rem]">
                        Senior School
                      </h1>
                    </u>
                    <p className="text-[1rem] md:text-[1.5rem] text-primary02 text-center md:pt-[1rem]">
                      Class 9-11
                    </p>
                    <p className="text-[0.88rem] md:text-[1.10rem] text-[#000000] p-[1rem] md:p-[1.75rem]">
                      Assesses preteens for emotional development, emotional
                      maturity, and coping strategies for social and academic
                      pressures.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-b from-[#FCA311] to-[#568DA9] rounded-lg w-[13.438rem] h-[17.4rem] md:w-[24.875rem] md:h-[22.813rem] p-[3px]">
                  <div className="h-[17rem] md:h-[22.375rem]   bg-white rounded-lg ">
                    <u className="text-[#075D70]">
                      <h1 className="text-primary02 font-bold text-[1.125rem] md:text-[2rem] text-center pt-[1rem] md:pt-[2rem]">
                        Primary School
                      </h1>
                    </u>
                    <p className="text-[1rem] md:text-[1.5rem] text-primary02 text-center md:pt-[1rem]">
                      Class 1-5
                    </p>
                    <p className="text-[0.88rem] md:text-[1.10rem] text-[#000000] p-[1rem] md:p-[1.75rem]">
                      Examines students&apos; self-discipline, complex social
                      dynamics, and preparedness for future academic objectives
                      in addition to their readiness for harder academic
                      challenges.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      );
    </>
  );
};

export default CompatibilityTest;

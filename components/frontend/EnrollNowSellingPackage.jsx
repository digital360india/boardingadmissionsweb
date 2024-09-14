import Image from "next/image";
import "./ScrollbarHide.css"; // Import the custom scrollbar CSS

const EnrollNowSellingPackage = () => {
  return (
    <>
      <div>
        <div className="px-4 pt-8 md:pt-0 md:px-16">
          <div className="flex justify-between px-1 ">
            <h1 className="text-[1.5rem] font-bold md:text-[3rem] text-primary02">
              Best Selling Packages
            </h1>
            <u className="text-primary02 pt-[2.5rem] hidden md:block lg:block">
              View all
            </u>
          </div>

          {/* mobile */}

          <div className="md:hidden lg:hidden">
            <div className="flex overflow-x-auto  hide-scrollbar lg:justify-center lg:items-center space-x-2 pt-8">
              <div className="bg-[#BFD1BC60] w-[86vw] h-[17rem] md:w-[40.25rem] md:h-[31.25rem] flex justify-center items-center gap-[14px] md:gap-5 border-dashed border-2 border-[#075D7060] rounded-lg  px-4">
                <div>
                  <div className="w-[7.8rem] h-[7.125rem] md:w-[15.813rem] md:h-[12.5rem]">
                    <Image
                      src="/icons/school2.svg"
                      alt="school"
                      width={1000}
                      height={1000}
                      className="w-[7.8rem] h-[7.125rem] md:w-[15.813rem] md:h-[12.5rem]"
                    />
                  </div>
                  <div className="text-[#1E1E1E] text-[1.125rem] md:text-[1.5rem] text-center  md:p-5">
                    +
                  </div>
                  <div className="w-[7.8rem] h-[7.125rem] md:w-[15.813rem] md:h-[12.5rem]">
                    <Image
                      src="/icons/school4.svg"
                      alt="school"
                      width={1000}
                      height={1000}
                      className="w-[7.8rem] h-[7.125rem] md:w-[15.813rem] md:h-[12.5rem]"
                    />
                  </div>
                </div>
                <div className="bg-[#FFFFFF] rounded-lg w-[7.8rem] h-[15rem] p-2 md:p-0 md:w-[20.3rem] md:h-[28.3rem]  md:pt-[3rem]">
                  <h1 className="text-[#1B1B1B] text-[0.875rem] md:text-[1.75rem] text-center">
                    Prepare for 2 schools together at just
                  </h1>
                  <h1 className="text-primary02 text-[1.5rem] md:text-[3rem] text-center pt-3">
                    $60,000
                  </h1>
                  <h1 className="text-[#666666] text-[0.75rem] md:text-[1.13rem] line-through text-end pr-5 md:pr-10">
                    $75,000
                  </h1>
                  <div className="flex flex-col justify-center items-center gap-4 md:gap-8 pt-4 md:pt-7">
                    <div>
                      <button
                        type="submit"
                        className="w-[6rem] h-[1.865rem] md:w-[9.13rem] md:h-[3rem] text-[0.875rem] text-white rounded-md border border-primary02 bg-gradient01 border-custom"
                      >
                        Buy Now
                      </button>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-[7rem] h-[1.865rem] md:w-[9.13rem] md:h-[3rem] text-[0.875rem] text-primary02 bg-white rounded-md border border-primary02"
                      >
                        Explore Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#BFD1BC60] w-[86.5vw] h-[17rem] md:w-[40.25rem] md:h-[31.25rem] flex justify-center items-center gap-[14px] md:gap-5 border-dashed border-2 border-[#075D7060] rounded-lg  px-4">
                <div className="flex-col">
                  <div className="w-[7.8rem] h-[3rem] ">
                    <Image
                      src="/icons/school7.svg"
                      alt="school"
                      width={253}
                      height={120}
                      className="w-[7.8rem] h-[3rem] "
                    />
                  </div>
                  <div className="text-[#1E1E1E] text-[1.5rem] text-center p-1">
                    +
                  </div>
                  <div className="w-[7.8rem] h-[3rem] ">
                    <Image
                      src="/icons/school5.svg"
                      alt="school"
                      width={253}
                      height={120}
                      className="w-[7.8rem] h-[3rem] "
                    />
                  </div>
                  <div className="text-[#1E1E1E] text-[1.5rem] text-center p-1">
                    +
                  </div>
                  <div className="w-[7.8rem] h-[3rem] ">
                    <Image
                      src="/icons/school6.svg"
                      alt="school"
                      width={253}
                      height={120}
                      className="w-[7.8rem] h-[3rem] "
                    />
                  </div>
                </div>
                <div className="bg-[#FFFFFF] rounded-lg w-[7.8rem] h-[15rem] p-2 md:p-0 md:w-[20.3rem] md:h-[28.3rem]  md:pt-[3rem]">
                  <h1 className="text-[#1B1B1B] text-[0.875rem] md:text-[1.75rem] text-center">
                    Prepare for 3 schools together at just
                  </h1>
                  <h1 className="text-primary02 text-[1.5rem] md:text-[3rem] text-center pt-3">
                    $60,000
                  </h1>
                  <h1 className="text-[#666666] text-[0.75rem] md:text-[1.13rem] line-through text-end pr-5 md:pr-10">
                    $75,000
                  </h1>
                  <div className="flex flex-col justify-center items-center gap-4 md:gap-8 pt-4 md:pt-7">
                    <div>
                      <button
                        type="submit"
                        className="w-[6rem] h-[1.865rem] md:w-[9.13rem] md:h-[3rem] text-[0.875rem] text-white rounded-md border border-primary02 bg-gradient01 border-custom"
                      >
                        Buy Now
                      </button>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-[7rem] h-[1.865rem] md:w-[9.13rem] md:h-[3rem] text-[0.875rem] text-primary02 bg-white rounded-md border border-primary02"
                      >
                        Explore Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block lg:block">
            <div className="flex overflow-x-auto hide-scrollbar lg:justify-center lg:items-center space-x-4 pt-8">
              <div className="bg-[#BFD1BC60] w-full h-[16rem]  md:w-[40.25rem] md:h-[31.25rem]  flex justify-center items-center gap-5 border-dashed border-2 border-[#075D7060] rounded-lg px-4">
                <div>
                  <div>
                    <Image
                      src="/icons/school2.svg"
                      alt="school"
                      width={253}
                      height={200}
                      className="w-[9.063rem] h-[7.125rem] md:w-[15.813rem] md:h-[12.5rem]"
                    />
                  </div>

                  <div className="text-[#1E1E1E] text-[1.125rem] md:text-[1.5rem] text-center  md:p-5">
                    +
                  </div>
                  <div>
                    <Image
                      src="/icons/school4.svg"
                      alt="school"
                      width={253}
                      height={200}
                      className="w-[9.063rem] h-[7.125rem] md:w-[15.813rem] md:h-[12.5rem]"
                    />
                  </div>
                </div>
                <div className="bg-[#FFFFFF] rounded-lg w-[8rem] h-[15rem] p-1 md:p-0 md:w-[20.3rem] md:h-[28.3rem] md:pt-[3rem]">
                  <h1 className="text-[#1B1B1B] text-[0.875rem] md:text-[1.75rem] text-center">
                    Prepare for 2 schools together at just
                  </h1>
                  <h1 className="text-primary02 text-[1.5rem] md:text-[3rem] text-center pt-3">
                    $60,000
                  </h1>
                  <h1 className="text-[#666666] text-[0.75rem] md:text-[1.13rem] line-through text-end pr-5 md:pr-10">
                    $75,000
                  </h1>

                  <div className="flex flex-col justify-center items-center gap-4 md:gap-8 pt-4 md:pt-7">
                    <div className="">
                      <button
                        type="submit"
                        className="w-[6rem] h-[1.865rem] md:w-[9.13rem] md:h-[3rem] text-[0.875rem] text-white   rounded-md border border-primary02 bg-gradient01 border-custom"
                      >
                        Buy Now
                      </button>
                    </div>
                    <div className="">
                      <button
                        type="submit"
                        className="w-[7rem] h-[1.865rem] md:w-[9.13rem] md:h-[3rem] text-[0.875rem] text-primary02 bg-white  rounded-md border border-primary02"
                      >
                        Explore Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#EDDCD260] w-[40.25rem] h-[31.25rem]  flex justify-center items-center gap-5 border-dashed border-2 border-[#075D7060] rounded-lg px-4 ">
                <div className="flex-col">
                  <div className="">
                    <Image
                      src="/icons/school7.svg"
                      alt="school"
                      width={253}
                      height={120}
                    />
                  </div>
                  <div className="text-[#1E1E1E] text-[1.5rem] text-center p-2">
                    +
                  </div>
                  <div className=" ">
                    <Image
                      src="/icons/school5.svg"
                      alt="school"
                      width={253}
                      height={120}
                    />
                  </div>
                  <div className="text-[#1E1E1E] text-[1.5rem] text-center p-2">
                    +
                  </div>
                  <div className="">
                    <Image
                      src="/icons/school6.svg"
                      alt="school"
                      width={253}
                      height={120}
                    />
                  </div>
                </div>
                <div className="bg-[#FFFFFF] rounded-lg w-[20.3rem] h-[28.3rem] pt-[3rem]">
                  <h1 className="text-[#1B1B1B] text-[1.75rem] text-center">
                    Prepare for 3 schools together at just
                  </h1>
                  <h1 className="text-primary02 text-[3rem] text-center pt-3">
                    $60,000
                  </h1>
                  <h1 className="text-[#666666] text-[1.13rem] line-through text-end pr-10">
                    $75,000
                  </h1>

                  <div className="flex flex-col justify-center items-center gap-8 pt-7">
                    <div className="">
                      <button
                        type="submit"
                        className="w-[9.13rem] h-[3rem] text-white   rounded-md border border-primary02 bg-gradient01 border-custom"
                      >
                        Buy Now
                      </button>
                    </div>
                    <div className="">
                      <button
                        type="submit"
                        className="w-[10.63rem] h-[3rem] text-primary02 bg-white  rounded-md border border-primary02"
                      >
                        Explore Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnrollNowSellingPackage;

import Image from "next/image";
export default function EnrollNowSyllabus() {
  const list = [
    {
      name: "Aptitude",
    },
    {
      name: "General Knowledge",
    },
    {
      name: "Maths",
    },
    {
      name: "English",
    },
  ];
  return (
    <>
      <div className="hidden md:block lg:block">
        <h1 className="text-[3rem] text-[#000000] font-bold pt-20 px-20">
          Welham&apos;s syllabus
        </h1>
      </div>

      <div className="md:flex md:justify-center md:items-center md:gap-28 md:pt-0 pt-8">
        <div className="md:w-[26.188rem] w-full h-[16.25rem] bg-[#FAF9FF] p-4">
          <div className="flex ">
            <div>
              <h1 className="text-[#01202B] text-[1.5rem] md:text-[2rem] font-bold">
                Need more clarity?
              </h1>
              <h1 className="text-[#01202B] text-[0.9rem]">
                Book a session with our expert
              </h1>
            </div>
            <div>
              <Image
                src="/icons/sessionClarityHero.svg"
                width={188}
                height={160}
                alt="img"
              />
            </div>
          </div>
          <div className=" pt-8 ">
            <button
              type="submit"
              className="w-[17rem] md:w-[19.3rem] h-[3rem] text-white   rounded-md border border-primary02 bg-primary02 border-custom"
            >
              Book a Demo
            </button>
          </div>
        </div>

        {/* <div className="md:p-6 rounded-lg bg-[#FFFFFF] "> */}
        <div className="font-bold  text-18px  p-5 md:hidden lg:hidden">
          Welham&apos;s Syllabus
        </div>

        <div className="grid grid-cols-2 gap-2">
          {list.map((item, index) => (
            <div
              key={index}
              className="border-b border-r border-[#F0F0F0] lg:w-[290px] lg:h-[169px] w-[163px] h-[81px] md:w-[315px] md:h-[120px] md:p-6 p-3"
            >
              <div className="flex md:items-center md:space-x-6 space-x-3">
                <div className="">
                  <Image
                    src="/images/apti.svg"
                    className="lg:w-[64px] lg:h-[64px] w-[32px] h-[32px]"
                    width={1000}
                    height={1000}
                    alt="image"
                  />
                </div>
                <div className="font-semibold md:text-14px text-[10px]">
                  {" "}
                  {item.name}
                </div>
              </div>
              <div className="md:flex md:pt-4 md:space-x-6 text-primary02 md:pl-2 pl-11 md:text-[12px] text-[8px] font-semibold ">
                <div className="">
                  <p>View syllabus </p>
                </div>
                <div> View full schedule</div>
              </div>
            </div>
          ))}
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

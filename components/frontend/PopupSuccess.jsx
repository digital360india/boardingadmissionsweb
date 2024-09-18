"use client";
import Image from "next/image";
import Link from "next/link";

const PopupSuccess = ({setIsFormVisible, setIsSubmitted }) => {
  const handleBackClick = () => {
    setIsSubmitted(false);
    setIsFormVisible(false);
  };

  return (
    <div className="flex items-center justify-center mt-5 bg-opacity-50 font-poppins">
      <div className="rounded-2xl w-[351px] h-[400px] md:w-[710px] md:h-[400px] lg:w-[900px] lg:h-[420px] sm:p-6 sm:rounded-2xl bg-[#006269]">
        <div className="mt-8 flex justify-center">
          <Image
            src="/icons/Boardinglogo.svg"
            alt="congrats"
            width={152}
            height={120}
          />
        </div>

        <div className="mt-10 text-center text-lg text-white">
          <p>
            Congratulations on embarking on the first step <br /> toward a
            bright future!
          </p>
        </div>

        <div className="max-w-[324px] sm:hidden mt-4 text-center text-[12px] text-white">
          <p>Our Team will connect with you shortly.</p>
        </div>
        <div className="hidden sm:block mt-4 text-center text-[12px] text-white">
          <p>Our Team will connect with you at your preferred time.</p>
        </div>

        <div className="mt-28 flex justify-center text-[16px]">
          {/* Wrap Link only around the anchor tag */}
          <div
            className="px-5 p-2 bg-white text-[#006269] text-[12px] rounded-md transition-colors duration-300 cursor-pointer"
            onClick={handleBackClick}
          >
            <Link href="/">Back To Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupSuccess;

import Image from "next/image";
import React from "react";

export default function AboutSuccess() {
  return (
    <div className="bg-[#C7D5DC] lg:h-[550px] h-full lg:pb-0 pb-16 flex justify-between w-full xl:px-[100px] lg:px-[40px] px-[24px]">
      <div className="w-full lg:w-[46%]">
        <p className="text-[#666666] text-16px lg:text-24px mt-12">
          Success Starts Here
        </p>
        <p className="w-[90%]  lg:w-[510px] text-32px lg:text-[48px] font-medium lg:pb-0 pb-5">
          Your Success is our Top Priority
        </p>

        <div className="lg:hidden flex justify-center items-center w-full">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/images%2Faboutsuccess.png?alt=media&token=deab4dd2-534c-4933-9200-13611b21eb9e"
            width={1000}
            height={1000}
            className="w-full h-full"
            alt="Image"
          />
        </div>

        <div className="w-full">
          <p className="text-18px my-6">
            We provide expert guidance and tailored courses to ensure students
            are fully prepared for India&apos;s top boarding school entrance
            exams. With a deep understanding of elite school requirements, we
            enhance students&apos; chances of admission, setting the stage for
            their academic success and personal growth.
          </p>

          {/* <button className="px-6 lg:px-16 py-2 text-primary02 bg-white mt-12 rounded-md border border-primary02">
      Primary
    </button> */}
        </div>
      </div>

      <div className="hidden lg:flex justify-center mt-14">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/images%2Faboutsuccess.png?alt=media&token=deab4dd2-534c-4933-9200-13611b21eb9e"
          width={1000}
          height={1000}
          alt="Image"
          className="w-[25rem]  h-[28rem] object-cover"
        />
      </div>
    </div> 
  );
}

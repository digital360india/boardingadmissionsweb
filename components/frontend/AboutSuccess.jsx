import Image from "next/image";
import React from "react";

export default function AboutSuccess() {
  return (
    <div className="bg-[#C7D5DC] lg:h-[683px] h-full lg:pb-0 pb-16 flex justify-between w-full xl:px-[100px] lg:px-[40px] px-[24px]">
<div className="w-full lg:w-[46%]">
  <p className="text-[#666666] text-16px lg:text-24px mt-12">
    Lorem Ipsum Dior
  </p>
  <p className="w-[90%] lg:w-[608px] text-32px lg:text-[48px] font-medium lg:pb-0 pb-5">
    Your Success is our Top Priority
  </p>

  <div className="lg:hidden flex justify-center items-center w-full">
    <Image
      src="/images/aboutsuccess2.svg"
      width={380}
      height={380}
      className="w-full"
      alt="Image"
    />
  </div>

  <div className="w-full">
    <p className="text-18px my-6">
      Lorem ipsum dolor sit amet consectetur. Augue sit dictum aenean velit.
      Sociis bibendum eu ut id lectus at ornare eget vel. Fames amet cras
      sagittis phasellus amet. Vel est nulla maecenas pretium sed.
      Scelerisque vulputate eget in nibh aliquet ultrices vel tempus ut.
    </p>
    <p className="text-18px">
      Id pellentesque arcu fermentum euismod neque turpis amet amet. Id in
      sit aliquet vel neque adipiscing. Cursus nisi scelerisque orci vivamus
      est in. Hac quam magna. Id in sit aliquet vel neque adipiscing. Id in
      sit aliquet vel neque adipiscing.
    </p>
    <button className="px-6 lg:px-16 py-2 text-primary02 bg-white mt-12 rounded-md border border-primary02">
      Primary
    </button>
  </div>
</div>

      <div className="hidden lg:flex justify-center items-center">
        <Image
          src="/images/aboutsuccess.svg"
          width={500}
          height={480}
          alt="Image"
        />
      </div>
    </div>
  );
}

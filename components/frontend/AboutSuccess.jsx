import Image from "next/image";
import React from "react";

export default function AboutSuccess() {
  return (
    <div className="bg-[#C7D5DC] h-[683px] flex justify-between w-full px-[100px]">
      <div className="">
        <p className="text-[#666666] font-normal text-24px mt-12">
          Lorem Ipsum Dior
        </p>
        <p className="w-[608px] text-[48px] font-medium">
          Your Success is our Top Priority
        </p>
        <p className="text-18px font-normal w-[600px] my-6">
          Lorem ipsum dolor sit amet consectetur. Augue sit dictum aenean velit.
          Sociis bibendum eu ut id lectus at ornare eget vel. Fames amet cras
          sagittis phasellus amet. Vel est nulla maecenas pretium sed.
          Scelerisque vulputate eget in nibh aliquet ultrices vel tempus ut.{" "}
        </p>
        <p className="text-18px font-normal w-[600px]">
          Id pellentesque arcu fermentum euismod neque turpis amet amet. Id in
          sit aliquet vel neque adipiscing. Cursus nisi scelerisque orci vivamus
          est in. Hac quam magna.d in sit aliquet vel neque adipiscing.d in sit
          aliquet vel neque adipiscing.
        </p>
        <button className="px-16 py-2 text-primary02 bg-white mt-12 rounded-md border border-primary02">
          Primary
        </button>
      </div>
      <div className="flex justify-center items-center">
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

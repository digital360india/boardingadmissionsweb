"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
 
  return (
    <div>
      <div className="flex   font-sans text-xl bg-transparent absolute top-0 py-4 w-full h-[14.5vh] z-20 backdrop-blur-lg backdrop-brightness-50 backdrop-contrast-75 backdrop-grayscale-20 backdrop-saturate-150 backdrop-opacity-10">
        <div className="flex py-4 md:py-0  w-[100vw] items-center  justify-between px-2 md:px-0 md:justify-around    space-x-8 text-white hover:text-gray-300">
          <div className="hamburger ps-6  order-1  cursor-pointer md:hidden">
            <div className="line h-0.5 w-6 bg-black my-1"></div>
            <div className="line h-0.5 w-4 bg-black my-1"></div>
            <div className="line h-0.5 w-6 bg-black my-1"></div>
          </div>
          <div className=" order-2  flex justify-center flex-1 md:flex-none   md:order-1 ">
            <Link href="/">
              <Image
                src="/images/navbar.svg"
                width={1}
                height={1}
                alt="Image"
                className=" h-10 w-10 md:h-24 md:w-28"
              />
            </Link>
          </div>
          <div className=" order-2 text-black text-[16px] md:text-[18px] hidden md:flex space-x-4 lg:space-x-8 ">
            <Link href="/courses">
              {" "}
              <button>Courses</button>
            </Link>
            <Link href="/schools">
              {" "}
              <button>Schools</button>
            </Link>
            {/* <Link href="/blogs">
              {" "}
              <button>Blogs</button>
            </Link> */}
            <Link href="/aboutus">
              {" "}
              <button> About</button>
            </Link>
          </div>

          <div className="  order-3  ">
            <Link href="/scholarshiptest">
            <button
             
             className="border bg-black text-[10px] md:text-[16px] text-white py-2 px-2 md:w-40 rounded-lg mr-4"
           >
             Compatibility Test
           </button>
         
            </Link>
         
          </div>
        </div>
      </div>
    </div>
  );
}

"use client"
import { useEffect, useState } from "react";
import React from "react";
// import Popup from "./Enquirypopup";

export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const openModal = () => {
//     document.body.style.overflow = "hidden";
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   useEffect(() => {
//     if (!isOpen) {
//       document.body.style.overflow = "auto";
//     }
//   }, [isOpen]);

  return (
    <div>
      <div className="flex   font-sans text-xl bg-transparent absolute top-0 py-4 w-full h-[14.5vh] font-sans text-xl z-20 backdrop-blur-lg backdrop-brightness-50 backdrop-contrast-75 backdrop-grayscale-20 backdrop-saturate-150 backdrop-opacity-10">
        <div className="flex py-4 md:py-0  w-[100vw] items-center  justify-between px-2 md:px-0 md:justify-around    space-x-8 text-white hover:text-gray-300">
          <div className="hamburger ps-6  order-1  cursor-pointer md:hidden">
            <div className="line h-0.5 w-6 bg-black my-1"></div>
            <div className="line h-0.5 w-4 bg-black my-1"></div>
            <div className="line h-0.5 w-6 bg-black my-1"></div>
          </div>
          <div className=" order-2  flex justify-center flex-1 md:flex-none   md:order-1 ">
            <img
              src="navbar.png"
              className=" h-10 w-10 md:h-24 md:w-28"
              alt=""
            />
          </div>
          <div className=" order-2  text-[16px] md:text-[18px] hidden md:flex space-x-4 lg:space-x-8 ">
            <button>Courses</button>
            <button>Schools</button>
            <button>Blogs</button>
            <button> Abouts</button>
          </div>

          <div className="  order-3  ">
            <button
            //   onClick={openModal}
              className="border border-white text-[10px] md:text-[18px] text-white py-1 px-2 md:w-40 rounded-lg mr-4"
            >
              Primary
            </button>
            {/* {isOpen && (
              <Popup isOpen={isOpen} closeModal={() => setIsOpen(false)} />
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}

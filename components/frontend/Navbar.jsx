"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const initial = {
    l1: false,
    l2: false,
    l3: false,
  };
  const [list, SetList] = useState(initial);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const path = usePathname();

  useEffect(() => {
    const updatedList = { ...list };

    if (path === "/courses") {
      updatedList.l1 = true;
      updatedList.l2 = false;
      updatedList.l3 = false;
    } else if (path === "/schools") {
      updatedList.l2 = true;
      updatedList.l1 = false;
      updatedList.l3 = false;
    } else if (path === "/aboutus") {
      updatedList.l3 = true;
      updatedList.l2 = false;
      updatedList.l1 = false;
    } else if (path === "/") {
      updatedList.l1 = false;
      updatedList.l2 = false;
      updatedList.l3 = false;
    }

    SetList(updatedList);
  }, [path]);

  return (
    <div>
      <div
        className={`${
          path === "/"
            ? "bg-transparent z-20  backdrop-blur-lg absolute top-0 backdrop-brightness-50 backdrop-contrast-75 backdrop-grayscale-20 backdrop-saturate-150 backdrop-opacity-30"
            : "bg-white  fixed top-0 z-20"
        } flex font-sans text-xl py-4 w-full lg:h-[14.5vh] h-[8vh]`}
      >
        <div className="flex py-4 md:py-0 w-[100vw] items-center px-2 md:px-0 md:justify-around space-x-8 text-white hover:text-gray-300">
          {/* Hamburger Icon */}
          <div
            className="hamburger ps-6 order-1 cursor-pointer md:hidden"
            onClick={() => {
              toggleMenu();
             
            }}
          >
            <div className="line h-0.5 w-6 bg-black my-1"></div>
            <div className="line h-0.5 w-4 bg-black my-1"></div>
            <div className="line h-0.5 w-6 bg-black my-1"></div>
          </div>

          {/* Logo */}
          <div className="order-2 lg:pl-[0px] pl-[9%] flex justify-center items-center md:flex-none md:order-1">
            <Link href="/">
              <Image
                src="/images/navbar.svg"
                width={1}
                height={1}
                alt="Image"
                className="ml-3 md:ml-0 w-full md:h-24 md:w-28 h-16  brightness-150"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div
            className={`order-2 text-black ${
              path === "/" ? `text-white` : `text-[#2d879b]`
            }  md:w-[400px] font-bold text-[16px] md:text-[20px] hidden md:flex justify-center space-x-4 lg:space-x-8`}
          >
            <Link href="/courses">
              <div className="">
                <button
                  className={`duration-200 ${
                    path === "/"
                      ? `hover:text-[#fff78e]`
                      : `hover:text-[#366faf]`
                  } hover:tracking-widest`}
                >
                  Courses
                </button>
                <div
                  className={`h-[3px] rounded-md duration-200 ${
                    list.l1 ? `w-full` : `w-0`
                  } bg-[#2d879b]`}
                ></div>
              </div>
            </Link>
            <Link href="/schools">
              <div className="">
                <button
                  className={`duration-200 ${
                    path === "/"
                      ? `hover:text-[#fff78e]`
                      : `hover:text-[#366faf]`
                  } hover:tracking-widest`}
                >
                  Schools
                </button>
                <div
                  className={`h-[3px] rounded-md duration-200 ${
                    list.l2 ? `w-full` : `w-0`
                  } bg-[#2d879b]`}
                ></div>
              </div>
            </Link>

            <Link href="/aboutus">
              <div className="">
                <button
                  className={`duration-200 ${
                    path === "/"
                      ? `hover:text-[#fff78e]`
                      : `hover:text-[#366faf]`
                  } hover:tracking-widest`}
                >
                  {" "}
                  About
                </button>
                <div
                  className={`h-[3px] rounded-md duration-200 ${
                    list.l3 ? `w-full` : `w-0`
                  } bg-[#2d879b]`}
                ></div>
              </div>
            </Link>
          </div>

          {/* Compatibility Test Button */}
          <div className="order-3  md:w-[200px] h-2">
            {/* <Link href="/scholarshiptest">
              <button className="border bg-black text-[10px] md:text-[16px] text-white py-2 px-2 md:w-40 rounded-lg mr-4">
                Compatibility Test
              </button>
            </Link> */}
          </div>
        </div>
      </div>

      {/* Mobile Menu (Sliding from Left to Right) */}
      <div
        className={`fixed top-0 left-0 h-full bg-white z-30 w-full transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        {/* Mobile Menu Header with Logo and Close Button */}
        <div className="flex justify-between items-center p-4">
          {/* Logo beside Close Button */}
          <Link href="/">
          <button  onClick={toggleMenu}>
            <Image
              src="/images/navbar.svg"
              width={2}
              height={2}
              alt="Image"
              className="h-24 w-40"
            />
          </button>
          </Link>
          {/* Close Button */}
          <button
            className="text-white font-medium text-2xl rounded-full bg-primary02 p-2 "
            onClick={() => {
              toggleMenu();
            
            }}
          >
           <RxCross2 />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <div className="flex flex-col items-start pl-6 text-black space-y-4 mt-4">
          <Link href="/courses">
            <button onClick={toggleMenu} className="text-lg">
              Courses
            </button>
          </Link>
          <Link href="/schools">
            <button onClick={toggleMenu} className="text-lg">
              Schools
            </button>
          </Link>

          <Link href="/aboutus">
            <button onClick={toggleMenu} className="text-lg">
              About
            </button>
          </Link>
          {/* <Link href="/scholarshiptest">
            <button
              onClick={toggleMenu}
              className="border bg-black text-white py-2 px-4 rounded-lg mt-4"
            >
              Compatibility Test
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
}

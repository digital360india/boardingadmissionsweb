"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const path = usePathname();

  return (
    <div>
      <div
        className={`${
          path === "/"
            ? "bg-transparent z-20 backdrop-blur-lg absolute top-0 backdrop-brightness-50 backdrop-contrast-75 backdrop-grayscale-20 backdrop-saturate-150 backdrop-opacity-10"
            : "bg-white fixed top-0 z-20"
        } flex font-sans text-xl py-4 w-full h-[14.5vh]`}
      >
        <div className="flex py-4 md:py-0 w-[100vw] items-center justify-between px-2 md:px-0 md:justify-around space-x-8 text-white hover:text-gray-300">
          {/* Hamburger Icon */}
          <div
            className="hamburger ps-6 order-1 cursor-pointer md:hidden"
            onClick={toggleMenu}
          >
            <div className="line h-0.5 w-6 bg-black my-1"></div>
            <div className="line h-0.5 w-4 bg-black my-1"></div>
            <div className="line h-0.5 w-6 bg-black my-1"></div>
          </div>

          {/* Logo */}
          <div className="order-2 flex justify-center flex-1 md:flex-none md:order-1">
            <Link href="/">
              <Image
                src="/images/navbar.svg"
                width={1}
                height={1}
                alt="Image"
                className="w-full md:h-24 md:w-28"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="order-2 text-black text-[16px] md:text-[18px] hidden md:flex space-x-4 lg:space-x-8">
            <Link href="/courses">
              <button>Courses</button>
            </Link>
            <Link href="/schools">
              <button>Schools</button>
            </Link>

            <Link href="/aboutus">
              <button> About</button>
            </Link>
          </div>

          {/* Compatibility Test Button */}
          <div className="order-3">
            <Link href="/scholarshiptest">
              <button className="border bg-black text-[10px] md:text-[16px] text-white py-2 px-2 md:w-40 rounded-lg mr-4">
                Compatibility Test
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Sliding from Left to Right) */}
      <div
        className={`fixed top-0 left-0 h-full bg-white z-30 w-64 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        {/* Mobile Menu Header with Logo and Close Button */}
        <div className="flex justify-between items-center p-4">
          {/* Logo beside Close Button */}
          <Link href="/">
            <Image
              src="/images/navbar.svg"
              width={1}
              height={1}
              alt="Image"
              className="h-24 w-40"
            />
          </Link>
          {/* Close Button */}
          <button className="text-black text-xl" onClick={toggleMenu}>
            &times;
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
          <Link href="/scholarshiptest">
            <button
              onClick={toggleMenu}
              className="border bg-black text-white py-2 px-4 rounded-lg mt-4"
            >
              Compatibility Test
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

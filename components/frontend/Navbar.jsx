"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Prevent scrolling when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setShowBackdrop(true); // Show backdrop when menu opens
    } else {
      document.body.style.overflow = "auto";
      setTimeout(() => setShowBackdrop(false), 300); // Wait for the transition to hide backdrop
    }

    return () => {
      document.body.style.overflow = "auto"; // Reset overflow on cleanup
    };
  }, [isOpen]);

  const handleClickOutside = (e) => {
    if (e.target.classList.contains("backdrop")) {
      closeMenu();
    }
  };

  return (
    <div className="relative">
      {/* Navbar for desktop */}
      <nav className="hidden md:flex justify-between items-center pl-6 py-2 bg-white shadow">
        <Link href="/">
          <Image
            src="/images/navbar.svg"
            alt="Logo"
            className="w-[130px]"
            width={1000}
            height={1000}
          />
        </Link>
        <ul className="flex space-x-12">
          <Link href="/courses">
            <li className="transition-all duration-300 font-semibold hover:text-primary02 text-[18px] hover:tracking-widest cursor-pointer">
              Course
            </li>
          </Link>
          <Link href="/schools">
            <li className="transition-all duration-300 font-semibold hover:text-primary02 text-[18px] hover:tracking-widest cursor-pointer">
              Schools
            </li>
          </Link>
          <Link href="/aboutus">
            <li className="transition-all duration-300 font-semibold hover:text-primary02 hover:tracking-widest cursor-pointer">
              About Us
            </li>
          </Link>
        </ul>
        <div className=" pr-4 ">
          {" "}
          <Link href="/scholarshiptest"><div className="bg-background04 py-2 px-4 rounded-xl text-white hover:text-gray-100 hover:bg-background05">Boarding Aptitude Test</div></Link>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-between items-center px-4 bg-white shadow">
        <button onClick={toggleMenu} className="text-2xl">
          ☰
        </button>
        <Link href="/">
          <Image
            src="/images/navbar.svg"
            alt="Logo"
            className="w-[130px]"
            width={1000}
            height={1000}
          />
        </Link>
      </div>

      {/* Backdrop with transition */}
      {showBackdrop && (
        <div
          className={`fixed inset-0 z-40 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          } backdrop bg-black bg-opacity-50`}
          onClick={handleClickOutside}
        />
      )}

      {/* Side Navbar with transition */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-2/4 max-w-[200px] p-4 bg-white shadow-lg transition-transform duration-500 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <Image
            src="/images/navbar.svg"
            alt="Logo"
            className="w-[100px]"
            width={1000}
            height={1000}
          />
          {/* Close icon (cross) */}
          <button onClick={closeMenu} className="text-2xl">
            ✕
          </button>
        </div>
        <ul className="flex flex-col space-y-4">
          <li>
            <Link href="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="courses" onClick={closeMenu}>
              Course
            </Link>
          </li>
          <li>
            <Link href="/schools" onClick={closeMenu}>
              Schools
            </Link>
          </li>
          <li>
            <Link href="/aboutus" onClick={closeMenu}>
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

"use client";
import Link from "next/link";
import { FiHome, FiUser } from "react-icons/fi";
import { IoBookSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { UserContext } from "@/userProvider";

export const SideNavBar = () => {
  const router = useRouter();
  const { handleLogout } = useContext(UserContext);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <div
        className={`bg-gradient-to-b from-background04 to-background01 text-white min-h-full top-0 fixed ${
          isCollapsed ? "w-20" : "w-1/5"
        } transition-width duration-300`}
      >
        <button
          onClick={toggleCollapse}
          className="p-2 text-center hover:bg-slate focus:outline-none"
        >
          {isCollapsed ? "Expand" : "Collapse"}
        </button>

        <Link href="/dashboard">
          <div
            className={`flex ${
              isCollapsed ? "flex-col" : "flex-row"
            } items-center justify-center py-4 text-xl`}
          >
            <img
              src="/images/navbar.svg"
              alt=""
              className={`h-20 rounded-full ${
                isCollapsed ? "hidden" : "block"
              }`}
            />
            {!isCollapsed && <p>Admin Boarding Admissions</p>}
          </div>
        </Link>

        <div className="flex flex-col space-y-6 ml-5">
          <Link href="/user/dashboard">
            <div className="flex items-center px-4 py-2 hover:text-lightpink hover:bg-slate">
              <FiHome className="mr-2" />
              {!isCollapsed && <span>Home</span>}
            </div>
          </Link>
          <Link href="/user/dashboard/mypackages">
            <div className="flex items-center px-4 py-2 hover:text-white hover:bg-slate">
              <IoBookSharp className="mr-2" />
              {!isCollapsed && <span>My Courses</span>}
            </div>
          </Link>
          <div
            onClick={handleLogout}
            className="flex items-center px-4 py-2 cursor-pointer hover:text-white hover:bg-slate"
          >
            <FiUser className="mr-2" />
            {!isCollapsed && <span>Logout</span>}
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <div className="w-screen md:hidden bg-gradient-to-r from-[#FF1053] to-[#F7ACCF] text-white flex justify-between fixed bottom-0 lg:hidden px-4">
        <Link href="/dashboard">
          <div className="py-[20px]">
            <FiHome className="w-[40px] h-[40px]" />
          </div>
        </Link>
        <Link href="/admin/dashboard/courses">
          <div className="py-[20px]">
            <IoBookSharp className="w-[40px] h-[40px]" />
          </div>
        </Link>
        <Link href="/admin/dashboard/coursepackages">
          <div className="py-[20px]">
            <FiUser className="w-[40px] h-[40px]" />
          </div>
        </Link>
        <div onClick={handleLogout} className="py-[20px] cursor-pointer">
          <FiUser className="w-[40px] h-[40px]" />
        </div>
      </div>
    </>
  );
};

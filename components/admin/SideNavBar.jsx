"use client"
import Link from "next/link";
import { FiHome, FiTag, FiUser, FiGift } from "react-icons/fi";
import { FaImages } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import React, { useContext } from "react";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { TiTickOutline } from "react-icons/ti";
import { AdminContext } from "@/adminProvider";
import { IoBookSharp } from "react-icons/io5";

export const SideNavBar = () => {
  const router = useRouter();
  const { admin, handleLogout } = useContext(AdminContext);


  return (
    <>
      <div className="bg-gradient-to-b from-background04 to-background01 text-white min-h-full top-0 fixed w-1/5">
        <Link href="/dashboard">
          <div className="flex items-center justify-center py-4 text-7xl">
            <img src="/logo.png" alt="" className="h-20 w-20 rounded-full" />
          </div>
        </Link>
        <div className="flex flex-col space-y-6 ml-5 ">
          <Link href="/dashboard">
            <div className="flex items-center px-4 py-2 hover:text-lightpink hover:bg-slate">
              <FiHome className="mr-2" />
              <span>Home</span>
            </div>
          </Link>
          <Link href="/admin/dashboard/courses">
            <div className="flex items-center px-4 py-2 hover:text-white hover:bg-slate">
              <IoBookSharp className="mr-2" />
              <span>Courses</span>
            </div>
          </Link>
          <Link href="/admin/dashboard/allusers">
            <div className="flex items-center px-4 py-2 hover:text-white hover:bg-slate">
              <FaEdit className="mr-2" />
              <span>Users</span>
            </div>
          </Link>
          <Link href="/admin/dashboard/coursepackages">
            <div className="flex items-center px-4 py-2 hover:text-white hover:bg-slate">
              <FaEdit className="mr-2" />
              <span>Courses Packages</span>
            </div>
          </Link>
          
          <Link href="/admin/dashboard/editphotographerdata">
            <div className="flex items-center px-4 py-2 hover:text-white hover:bg-slate">
              <FaEdit className="mr-2" />
              <span>Edit Photographer Data</span>
            </div>
          </Link>
          <Link href="/admin/dashboard/vendors">
            <div className="flex items-center px-4 py-2 hover:text-white hover:bg-slate">
              <MdOutlinePeopleAlt className="mr-2" />
              <span>Vendors</span>
            </div>
          </Link>
          <Link href="/admin/dashboard/leads">
            <div className="flex items-center px-4 py-2 hover:text-white hover:bg-slate">
              <MdOutlinePeopleAlt className="mr-2" />
              <span>Leads</span>
            </div>
          </Link>
          <div onClick={handleLogout} className="flex items-center px-4 py-2 cursor-pointer hover:text-white hover:bg-slate">
            <FiUser className="mr-2" />
            <span>Logout</span>
          </div>
        </div>
      </div>
      <div className="w-screen md:hidden bg-gradient-to-r from-[#FF1053] to-[#F7ACCF] text-white flex justify-between fixed bottom-0 lg:hidden px-4">
        <Link href="/dashboard">
          <div className="py-[20px]"><FiHome className="w-[40px] h-[40px]" /></div>
        </Link>
        <Link  href="/admin/dashboard/courses">
          <div className="py-[20px]"><IoBookSharp className="w-[40px] h-[40px]" /></div>
        </Link>
        <Link href="/admin/dashboard/coursepackages">
          <div className="py-[20px]"><FiUser className="w-[40px] h-[40px]" /></div>
        </Link>
        <Link href="/admin/dashboard/vendors">
          <div className="py-[20px]"><FiGift className="w-[40px] h-[40px]" /></div>
        </Link>
        <div onClick={handleLogout} className="py-[20px] cursor-pointer">
          <FiUser className="w-[40px] h-[40px]" />
        </div>
      </div>
    </>
  );
};

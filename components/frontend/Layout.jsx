"use client";
import { usePathname } from "next/navigation";
import React from "react";

export default function Layout({ children }) {
  const path = usePathname();
  return (
    <div className={`${path === "/" ? "" : "pt-[14.5vh]"}`}>{children}</div>
  );
}

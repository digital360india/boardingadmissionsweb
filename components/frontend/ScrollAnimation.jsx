"use client";
import React, { useLayoutEffect, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { gsap } from "gsap";
import '@/components/frontend/ScrollAnimation.css';

// Dynamically import ScrollTrigger, disable SSR
const ScrollTrigger = dynamic(() => import("gsap/ScrollTrigger"), { ssr: false });

export default function ScrollAnimation() {
  const boxRef = useRef(null);
  const mainRef = useRef(null);

  useEffect(() => {
    // Ensure GSAP is only used in the browser
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      const animation = gsap.to(mainRef.current, {
        rotation: -120,
        duration: 1,
        scrollTrigger: {
          trigger: boxRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
          pin: true,
        },
      });

      return () => {
        if (animation.scrollTrigger) animation.scrollTrigger.kill();
        animation.kill();
      };
    }
  }, []);


  return (
    <>
      <div
        ref={boxRef}
        className="some h-screen w-full bg-gradient-to-br from-[#075D70] to-[#0DB2D6] relative overflow-hidden"
      >
        <div className="h-[100px]  flex items-center pl-24 w-full">
          <p className="text-[32px] text-white ">Schools we have cracked</p>
        </div>
        <div
          ref={mainRef}
          className={`h-[1440px] w-[1440px]  border  flex gap-8 justify-center items-center absolute rounded-[50%] card top-[50%] [&>div]:relative [&>div]:top-[-50%] [&>div]:left-[41%]`}
        >
          <div className="card1 bg-white w-[300px] h-[350px] rounded-2xl flex flex-col items-center justify-center shadow-xl">
            {" "}
            <img
              className="w-[200px] h-[200px]"
              src="./images/doon_school.png"
              alt=""
            />{" "}
            <button className="w-[220px] mt-5 text-xl text-white h-[50px] rounded-lg bg-[#075D70]">
              THE DOON SCHOOL
            </button>
          </div>
          <div className="card2 bg-white w-[300px] h-[350px] rounded-2xl flex flex-col items-center justify-center shadow-xl">
            {" "}
            <img
              className="w-[200px] h-[200px]"
              src="./images/mayo.png"
              alt=""
            />{" "}
            <button className="w-[220px] mt-5 text-xl text-white h-[50px] rounded-lg bg-[#075D70]">
              MAYO&apos;S SCHOOL
            </button>
          </div>
          <div className="card3 bg-white w-[300px] h-[350px] rounded-2xl flex flex-col items-center justify-center shadow-xl">
            {" "}
            <img
              className="w-[200px] h-[200px]"
              src="./images/scindia.png"
              alt=""
            />{" "}
            <button className="w-[220px] mt-5 text-xl text-white h-[50px] rounded-lg bg-[#075D70]">
              SCINDIA SCHOOL
            </button>
          </div>
          <div className="card4 bg-white w-[300px] h-[350px] rounded-2xl flex flex-col items-center justify-center shadow-xl">
            {" "}
            <img
              className="w-[200px] h-[200px]"
              src="./images/st_george_college.png"
              alt=""
            />{" "}
            <button className="w-[220px] mt-5 text-xl text-white h-[50px] rounded-lg bg-[#075D70]">
              ST GOERGE&apos;S COLLEGE
            </button>
          </div>
          <div className="card5 bg-white w-[300px] h-[350px] rounded-2xl flex flex-col items-center justify-center shadow-xl">
            {" "}
            <img
              className="w-[200px] h-[200px]"
              src="./images/CJM_waverly.png"
              alt=""
            />{" "}
            <button className="w-[220px] mt-5 text-xl text-white h-[50px] rounded-lg bg-[#075D70]">
              CJM WAVERLY
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import dynamic from "next/dynamic";
import "@/components/frontend/ScrollAnimation.css";
import Link from "next/link";

export default function ScrollAnimation() {
  const [scrollTriggerLoaded, setScrollTriggerLoaded] = useState(false);
  const boxRef = useRef(null);
  const mainRef = useRef(null);

  useLayoutEffect(() => {
    let ScrollTrigger;

    const loadScrollTrigger = async () => {
      if (typeof window !== "undefined") {
        ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
        gsap.registerPlugin(ScrollTrigger);
        setScrollTriggerLoaded(true);
      }
    };

    loadScrollTrigger();

    if (scrollTriggerLoaded) {
      const animation = gsap.to(mainRef.current, {
        rotation: -120,
        duration: 1,
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
          pin: true,
        },
      });

      return () => {
        animation.scrollTrigger?.kill();
        animation.kill();
      };
    }
  }, [scrollTriggerLoaded]);

  return (
    <>
      <div
        ref={boxRef}
        className="some h-[85vh] flex justify-center w-full bg-gradient-to-br from-[#075D70] to-[#0DB2D6] relative overflow-hidden"
      >
        <div className="h-[100px]  flex justify-center items-center pt-10 md:pt-0  text-center md:text-start  md:pl-24 w-full">
          <p className="lg:text-[48px] text-[32px] text-white font-medium lg:leading-normal leading-tight text-center w-full">
            Schools We have Cracked
          </p>
        </div>
        <div
          ref={mainRef}
          className={`h-[1440px] w-[1440px]  border  flex gap-8 justify-center items-center absolute rounded-[50%] card top-[50%] [&>div]:relative [&>div]:top-[-50%] [&>div]:left-[41%]`}
        >
          <div className="card1 bg-white w-[300px] h-[350px] rounded-2xl flex flex-col items-center justify-center shadow-xl">
            {" "}
            <img
              className="w-[200px] h-[200px]"
              src="/images/schoolimages/Welham_Girls.svg"
              alt=""
            />{" "}
            <Link href="/school/wellham-girls-school">
              <button className="w-[220px] mt-5 text-xl text-white h-[50px] rounded-lg bg-[#075D70]">
                WELHAM GIRLS
              </button>
            </Link>
          </div>
          <div className="card2 bg-white w-[300px] h-[350px] rounded-2xl flex flex-col items-center justify-center shadow-xl">
            {" "}
            <img
              className="w-[200px] h-[200px]"
              src="/images/schoolimages/The_Doon_School.svg"
              alt=""
            />{" "}
            <Link href="/school/the-doon-school">
              <button className="w-[220px] mt-5 text-xl text-white h-[50px] rounded-lg bg-[#075D70]">
                THE DOON SCHOOL
              </button>
            </Link>
          </div>
          <div className="card3 bg-white w-[300px] h-[350px] rounded-2xl flex flex-col items-center justify-center shadow-xl">
            {" "}
            <img
              className="w-[200px] h-[200px]"
              src="./images/scindia.png"
              alt=""
            />{" "}
            <Link href="school/scindia-girls-school">
              {" "}
              <button className="w-[220px] mt-5 text-xl text-white h-[50px] rounded-lg bg-[#075D70]">
                SCINDIA SCHOOL
              </button>
            </Link>
          </div>
          <div className="card4 bg-white w-[300px] h-[350px] rounded-2xl flex flex-col items-center justify-center shadow-xl">
            {" "}
            <img
              className="w-[200px] h-[200px]"
              src="/images/schoolimages/Lawrence_School.svg"
              alt=""
            />{" "}
            <Link href="/school/laurence-school">
              <button className="w-[220px] mt-5 text-xl text-white h-[50px] rounded-lg bg-[#075D70]">
                LAWRENCE SCHOOL
              </button>
            </Link>
          </div>
          <div className="card5 bg-white w-[300px] h-[350px] rounded-2xl flex flex-col items-center justify-center shadow-xl">
            {" "}
            <img
              className="w-[200px] h-[200px]"
              src="/images/schoolimages/Mayo_Boys_College.svg"
              alt=""
            />{" "}
            <Link href="/school/mayo-boys-school">
              <button className="w-[230px] mt-5 text-xl text-white h-[50px] rounded-lg bg-[#075D70]">
                MAYO COLLEGE{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

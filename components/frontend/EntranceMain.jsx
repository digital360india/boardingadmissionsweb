"use client";
import EntranceCourse from "@/components/frontend/EntranceCourse";
import EntranceOtherDetail from "@/components/frontend/EntranceOtherDetail";
import EntranceSlaybus from "@/components/frontend/EntranceSlaybus";
import Image from "next/image";
import React, { useState } from "react";

export default function EntranceMain() {
  const cardData = [
    {
      id: 1,
      imageSrc: "/icons/card1.svg",
      title: "ACE ENTRANCE EXAM",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vestibulum ut quam pulvinar ultrices vitae magna. Ut. Lorem ipsum dolor sit amet consectetur. Vestibulum ut",
      price1: "$45,000",
      price2: " $75,000",
      batch: "(For Full Batch)",
      discountInfo: "Discount of 55% applied",
    },
  ];

  const [activeTab, setActiveTab] = useState("Description");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const list = [
    {
      name: "Doubt Solving",
    },
    {
      name: "Doubt Solving",
    },
    {
      name: "Doubt Solving",
    },
    {
      name: "Mentorship",
    },
    {
      name: "Daily Practice Paper",
    },
    {
      name: "Test Series",
    },
    {
      name: "Live and recorded lectures",
    },
    {
      name: "Live and recorded lectures",
    },
  ];

  return (
    <div>
      <div className="xl:px-[100px] md:px-[40px] px-[24px] mt-32">
        <div className="md:flex space-x-4 justify-between ">
          <div>
            <div className="relative rounded-t-lg">
              <Image
                src="/images/faoundation.svg"
                className="w-full md:h-[125px] h-[55px] object-cover rounded-t-lg"
                width={1}
                height={1}
                alt="image"
              />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <p className="text-white md:text-[28px] text-14px font-bold">
                  ACE ENTRANCE EXAM + FOUNDATION COURSE
                </p>
              </div>
            </div>

            <div className="flex justify-between md:px-8 px-4 bg-[#FFFFFF01] shadow-2xl w-full  h-[40px] mt-2">
              <div className="flex md:space-x-6 space-x-3">
                <div
                  className={`  md:text-13px text-11px cursor-pointer ${
                    activeTab === "Description"
                      ? "border-b-4 border-primary02"
                      : ""
                  }`}
                  onClick={() => handleTabClick("Description")}
                >
                  Description
                </div>
                <div
                  className={`  md:text-13px text-11px cursor-pointer ${
                    activeTab === "Syllabus"
                      ? "border-b-4 border-primary02"
                      : ""
                  }`}
                  onClick={() => handleTabClick("Syllabus")}
                >
                  Syllabus
                </div>
                <div
                  className={`  md:text-13px text-11px cursor-pointer ${
                    activeTab === "Tests" ? "border-b-4 border-primary02" : ""
                  }`}
                  onClick={() => handleTabClick("Tests")}
                >
                  Tests
                </div>
              </div>
              <div className="md:w-[124px] w-[90px] md:h-[32px] h-[20px] border border-[#B4B9C0] px-2 flex justify-between items-center rounded-2xl mt-1">
                <div>
                  <Image
                    src="/vectors/whatsapp.svg"
                    width={1}
                    height={1}
                    alt="image"
                    className="md:w-[24px] md:h-[24px] w-[13px] h-[13px]"
                  />
                </div>
                <div className="md:text-14px text-[10px] font-semibold text-[#5E6166]">
                  Share batch
                </div>
              </div>
            </div>

{/* just for mobile view */}

{/* <div className="md:hidden block">
            <div
              className=" w-full"
              style={{ boxShadow: "0 1px 8px 0 rgba(0, 0, 0, 0.08)" }}
            >
              <div className="flex flex-wrap justify-center gap-10 ">
                {cardData.map((card) => (
                  <div
                    key={card.id}
                    className="w-[28vw] bg-[#FFFFFF] rounded-[9px] pb-4"
                  >
                    <Image
                      src={card.imageSrc}
                      width={1}
                      height={228}
                      alt="card"
                      className="w-full"
                    />
                    <h1 className="text-primary02 text-[1.5rem] font-semibold text-center mt-3  ">
                      {card.title}
                    </h1>
                    <p className=" text-[0.8rem] text-[#212224] pt-3 text-center px-8">
                      {card.description}
                    </p>
                    <hr className="mx-10 mt-3" />
                    <div className="flex">
                      <div className="flex items-center gap-2 px-8">
                        <h1 className="text-[1.5rem] text-primary02">
                          {card.price1}
                        </h1>
                        <h1 className="text-[0.9rem] text-[#666666] line-through">
                          {card.price2}
                        </h1>
                      </div>
                      <div className="bg-[#ADD1A748] px-2 w-[10rem] h-[2.5rem] mt-2  rounded-lg">
                        <div className="flex items-center pt-[5px]     gap-3">
                          <Image
                            src="/icons/Vector.svg"
                            width={24}
                            height={24}
                            alt="card"
                            className=""
                          />
                          <p className="text-[#000000] text-[0.63rem]">
                            {card.discountInfo}
                          </p>
                          <div>
                            <u className="text-[#000000] text-[7px] cursor-pointer">
                              Remove
                            </u>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-[#666666] text-[0.7rem] px-16">
                      {card.batch}
                    </p>
                    <hr className="mx-10 mt-1" />
                    <div className="flex justify-center gap-8 pt-3">
                      <div className="">
                        <button
                          type="submit"
                          className="w-[8.625rem] h-[2.5rem] text-primary02 bg-white  rounded-md border border-primary02"
                        >
                          Explore
                        </button>
                      </div>
                      <div className="">
                        <button
                          type="submit"
                          className="w-[8.625rem] h-[2.5rem] text-white   rounded-md border border-primary02 bg-gradient01 border-custom"
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div> */}



            <div className="my-10">
              <div className="bg-[#075D7036] relative md:h-[64px] h-[44px] w-full rounded-t-lg">
                <div className="absolute inset-0 p-4 text-black flex items-center space-x-3 text-18px font-medium">
                  <div className="mt-1">
                    {" "}
                    <Image
                      src="/vectors/bulb.svg.svg"
                      width={22}
                      height={22}
                      alt="image"
                    />
                  </div>
                  <div className="font-medium md:text-[18px] text-[14px]">Ace Entrance Exam course include</div>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 grid-cols-2 pl-6 rounded-b-lg border border-[#D9DCE1] pb-4 pt-2">
                {list.map((item, index) => (
                  <div key={index} className="flex items-center lg:my-6 my-2">
                    <div>
                      <Image
                        src="/vectors/star.svg"
                        width={18}
                        height={18}
                        alt="image"
                      />
                    </div>
                    <div className="md:text-16px text-[12px] pl-4 w-[160px]">
                      {item.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <EntranceCourse />
            </div>
            <div>
              <EntranceSlaybus />
            </div>
            <div>
              <EntranceOtherDetail />
            </div>
          </div>

{/* mobile section */}
          <div className="lg:block hidden">
            <div
              className=" w-full"
              style={{ boxShadow: "0 1px 8px 0 rgba(0, 0, 0, 0.08)" }}
            >
              <div className="flex flex-wrap justify-center gap-10 ">
                {cardData.map((card) => (
                  <div
                    key={card.id}
                    className="w-[28vw] bg-[#FFFFFF] rounded-[9px] pb-4"
                  >
                    <Image
                      src={card.imageSrc}
                      width={1}
                      height={228}
                      alt="card"
                      className="w-full"
                    />
                    <h1 className="text-primary02 text-[1.5rem] font-semibold text-center mt-3  ">
                      {card.title}
                    </h1>
                    <p className=" text-[0.8rem] text-[#212224] pt-3 text-center px-8">
                      {card.description}
                    </p>
                    <hr className="mx-10 mt-3" />
                    <div className="flex">
                      <div className="flex items-center gap-2 px-8">
                        <h1 className="text-[1.5rem] text-primary02">
                          {card.price1}
                        </h1>
                        <h1 className="text-[0.9rem] text-[#666666] line-through">
                          {card.price2}
                        </h1>
                      </div>
                      <div className="bg-[#ADD1A748] px-2 w-[10rem] h-[2.5rem] mt-2  rounded-lg">
                        <div className="flex items-center pt-[5px]     gap-3">
                          <Image
                            src="/icons/Vector.svg"
                            width={24}
                            height={24}
                            alt="card"
                            className=""
                          />
                          <p className="text-[#000000] text-[0.63rem]">
                            {card.discountInfo}
                          </p>
                          <div>
                            <u className="text-[#000000] text-[7px] cursor-pointer">
                              Remove
                            </u>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-[#666666] text-[0.7rem] px-16">
                      {card.batch}
                    </p>
                    <hr className="mx-10 mt-1" />
                    <div className="flex justify-center gap-8 pt-3">
                      <div className="">
                        <button
                          type="submit"
                          className="w-[8.625rem] h-[2.5rem] text-primary02 bg-white  rounded-md border border-primary02"
                        >
                          Explore
                        </button>
                      </div>
                      <div className="">
                        <button
                          type="submit"
                          className="w-[8.625rem] h-[2.5rem] text-white   rounded-md border border-primary02 bg-gradient01 border-custom"
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import EntranceCourse from "@/components/frontend/EntranceCourse";
import EntranceOtherDetail from "@/components/frontend/EntranceOtherDetail";
import EntranceSlaybus from "@/components/frontend/EntranceSlaybus";
import Image from "next/image";
import React, { useState } from "react";

export default function EntranceExam() {

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
    <div className="px-[100px] mt-32">
      <div className="flex justify-between ">
        <div>
          <div className="relative">
            <Image
              src="/images/faoundation.svg"
              className="w-full h-[125px]"
              width={1}
              height={1}
              alt="image"
            />
            <div className="absolute inset-0">
              <p className="w-[605px] font-bold text-[28px] text-white p-4">
                ACE ENTRANCE EXAM + FOUNDATION COURSE
              </p>
            </div>
          </div>
          <div className="flex justify-between px-8 bg-[#FFFFFF01] shadow-2xl h-[40px] mt-2">
            <div className="flex space-x-6">
              <div
                className={`  text-13px cursor-pointer ${
                  activeTab === "Description"
                    ? "border-b-4 border-primary02"
                    : ""
                }`}
                onClick={() => handleTabClick("Description")}
              >
                Description
              </div>
              <div
                className={`  text-13px cursor-pointer ${
                  activeTab === "Syllabus" ? "border-b-4 border-primary02" : ""
                }`}
                onClick={() => handleTabClick("Syllabus")}
              >
                Syllabus
              </div>
              <div
                className={`  text-13px cursor-pointer ${
                  activeTab === "Tests" ? "border-b-4 border-primary02" : ""
                }`}
                onClick={() => handleTabClick("Tests")}
              >
                Tests
              </div>
            </div>
            <div className="w-[124px] h-[32px] border border-[#B4B9C0] px-2 flex justify-between items-center rounded-2xl">
              <div>
                <Image
                  src="/vectors/whatsapp.svg"
                  width={24}
                  height={24}
                  alt="image"
                />
              </div>
              <div className="text-14px font-semibold text-[#5E6166]">
                Share batch
              </div>
            </div>
          </div>
          <div className="my-10">
            <div className="bg-[#075D7036] relative h-[64px] w-full rounded-t-lg">
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
                <div>Ace Entrance Exam course include</div>
              </div>
            </div>

            <div className="grid grid-cols-3 pl-6 rounded-b-lg border border-[#D9DCE1]">
              {list.map((item, index) => (
                <div key={index} className="flex items-center my-6">
                  <div>
                    <Image
                      src="/vectors/star.svg"
                      width={18}
                      height={18}
                      alt="image"
                    />
                  </div>
                  <div className="text-16px   pl-4 w-[160px]">
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
            <EntranceOtherDetail/>
          </div>
          
        </div>

        <div>
        <div className=" w-full"  style={{ boxShadow: "0 1px 8px 0 rgba(0, 0, 0, 0.08)" }}>
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
                      <u className="text-[#000000] text-[7px] cursor-pointer">Remove</u>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-[#666666] text-[0.7rem] px-16">{card.batch}</p>
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
  );
}

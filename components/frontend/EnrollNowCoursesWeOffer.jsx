"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const cardData = [
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
  {
    id: 2,
    imageSrc: "/icons/card2.svg",
    title: "FOUNDATION COURSE",
    description:
      "Lorem ipsum dolor sit amet consectetur. Vestibulum ut quam pulvinar ultrices vitae magna. Ut. Lorem ipsum dolor sit amet consectetur. Vestibulum ut",
    price1: "$45,000 ",
    price2: "$75,000",
    batch: "(For Full Batch)",
    discountInfo: " Discount of 55% applied",
  },
  {
    id: 3,
    imageSrc: "/icons/card3.svg",
    title: "FOUNDATION COURSE",
    description:
      "Lorem ipsum dolor sit amet consectetur. Vestibulum ut quam pulvinar ultrices vitae magna. Ut. Lorem ipsum dolor sit amet consectetur. Vestibulum ut",
    price1: "$45,000",
    price2: "$75,000",
    batch: "(For Full Batch)",
    discountInfo: " Discount of 55% applied",
  },
];

const EnrollNowCoursesWeOffer = () => {
  const [discountStates, setDiscountStates] = useState(
    cardData.reduce((acc, card) => {
      acc[card.id] = true;
      return acc;
    }, {})
  );

  const toggleDiscount = (id) => {
    setDiscountStates((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <>
      <div className="bg-primary02 w-full p-14">
        <div className="flex justify-between px-2">
          <h1 className="text-[3rem] text-white">Courses we Offer</h1>
          
          <Link href='/Enrollnowcourse'>
          <u className="text-white pt-[2.5rem]">View all</u></Link>
        </div>

        <div className="flex flex-wrap justify-center gap-10 pt-10">
          {cardData.map((card) => (
            <div key={card.id} className="w-[28vw] bg-[#FFFFFF] rounded-[9px] pb-4">
              <Image src={card.imageSrc} width={1} height={228} alt="card" className="w-full" />
              <h1 className="text-primary02 text-[1.5rem] font-semibold text-center mt-3">
                {card.title}
              </h1>
              <p className="text-[0.8rem] text-[#212224] pt-3 text-center px-8">
                {card.description}
              </p>
              <hr className="mx-10 mt-3" />

              <div className="flex">
                <div className="flex items-center gap-2 px-8">
                  <h1 className="text-[1.5rem] text-primary02">{card.price1}</h1>
                  <h1 className="text-[0.9rem] text-[#666666] line-through ">{card.price2}</h1>
                </div>

                {discountStates[card.id] ? (
                  <div className="bg-[#ADD1A748] px-2 w-[10rem] h-[2.5rem] mt-2 rounded-lg">
                    <div className="flex items-center pt-[5px] gap-3">
                      <Image src="/icons/Vector.svg" width={24} height={24} alt="card" className="" />
                      <p className="text-[#000000] text-[0.63rem]">{card.discountInfo}</p>
                      <div>
                        <u
                          className="text-[#000000] text-[7px] cursor-pointer"
                          onClick={() => toggleDiscount(card.id)}
                        >
                          Remove
                        </u>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-[#ADD1A748] px-2 w-[10rem] h-[2.5rem] mt-2 rounded-lg">
                    {/* <div className=" p-2  "> */}
                      <h1 className="text-[#000000] text-[0.8rem] p-2">Apply Coupon Code</h1>
                    {/* </div> */}
                  </div>
                )}
              </div>

              <p className="text-[#666666] text-[0.7rem] px-16">{card.batch}</p>

              <hr className="mx-10 mt-1" />

              <div className="flex justify-center gap-8 pt-3">
                <div>
                  <button
                    type="submit"
                    className="w-[8.625rem] h-[2.5rem] text-primary02 bg-white rounded-md border border-primary02"
                  >
                    Explore
                  </button>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-[8.625rem] h-[2.5rem] text-white rounded-md border border-primary02 bg-gradient01 border-custom"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EnrollNowCoursesWeOffer;
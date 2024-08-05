"use client";
import React, { useState } from "react";
import Image from "next/image";

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
  {
    id: 4,
    imageSrc: "/icons/card3.svg",
    title: "FOUNDATION COURSE",
    description:
      "Lorem ipsum dolor sit amet consectetur. Vestibulum ut quam pulvinar ultrices vitae magna. Ut. Lorem ipsum dolor sit amet consectetur. Vestibulum ut",
    price1: "$45,000",
    price2: "$75,000",
    batch: "(For Full Batch)",
    discountInfo: " Discount of 55% applied",
  },
  {
    id: 5,
    imageSrc: "/icons/card3.svg",
    title: "FOUNDATION COURSE",
    description:
      "Lorem ipsum dolor sit amet consectetur. Vestibulum ut quam pulvinar ultrices vitae magna. Ut. Lorem ipsum dolor sit amet consectetur. Vestibulum ut",
    price1: "$45,000",
    price2: "$75,000",
    batch: "(For Full Batch)",
    discountInfo: " Discount of 55% applied",
  },
  {
    id: 6,
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

const EnrollNowAllCoursesWeOffer = () => {
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
      <div className=" w-full mt-[7rem]">
        <div className="px-6 md:px-12  xl:pt-8">
          <h1 className="text-[1.5rem] md:text-[3rem] text-primary02 font-bold">
            Courses we Offer
          </h1>
          <h1 className="text-[#3C4852] pt-[0.4rem] text-[0.875rem] md:text-[1.13rem]">
            6 courses availiable
          </h1>
        </div>

        <div className="flex flex-wrap   gap-8 p-3  md:p-12">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="md:w-[38vw] lg:w-[29vw] bg-[#FFFFFF] border border-[#01010120] rounded-[9px] pb-4  drop-shadow-lg"
            >
              <Image
                src={card.imageSrc}
                width={1}
                height={228}
                alt="card"
                className="w-full"
              />
              <h1 className="text-primary02 text-[1rem] md:text-[1.5rem] font-semibold text-center mt-2 md:mt-3">
                {card.title}
              </h1>
              <p className="text-[0.5rem] md:text-[0.8rem] text-[#212224] pt-2 md:pt-3 text-center px-8">
                {card.description}
              </p>
              <hr className="mx-2 md:mx-10 mt-3" />

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 px-4 xl:px-8">
                  <h1 className="text-[1rem] xl:text-[1.5rem] font-bold text-primary02">
                    {card.price1}
                  </h1>
                  <h1 className="text-[0.625rem] xl:text-[0.9rem] text-[#666666] line-through">
                    {card.price2}
                  </h1>
                </div>

                {discountStates[card.id] ? (
                  <div className="bg-[#ADD1A748] px-2 w-[10rem] h-[2.5rem] mt-2 rounded-xl mr-2 ">
                    <div className="flex items-center pt-[5px] gap-3">
                      <Image
                        src="/icons/Vector.svg"
                        width={20}
                        height={20}
                        alt="card"
                        className=""
                      />
                      <p className="text-[#000000] text-[0.5rem] md:text-[0.63rem]">
                        {card.discountInfo}
                      </p>
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
                  <div className="bg-[#ADD1A748] px-2 w-[10rem] h-[2.5rem] mt-2 rounded-xl mr-2 ">
                    <h1 className="text-[#000000] text-[0.8rem] p-2">
                      Apply Coupon Code
                    </h1>
                  </div>
                )}
              </div>

              <p className="text-[#666666] text-[0.5rem] md:text-[0.7rem] px-4 xl:px-16">
                {card.batch}
              </p>

              <hr className="mx-2 md:mx-10 mt-1" />

              <div className="flex justify-between md:justify-center px-2 md:gap-3 xl:gap-8 pt-3">
                <div>
                  <button
                    type="submit"
                    className="w-[7.5rem] h-[2rem] xl:w-[8.625rem] xl:h-[2.5rem] text-primary02 bg-white rounded-md border border-primary02"
                  >
                    Explore
                  </button>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-[7.5rem] h-[2rem] xl:w-[8.625rem] xl:h-[2.5rem] text-white rounded-md border border-primary02 bg-gradient01 border-custom"
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

export default EnrollNowAllCoursesWeOffer;

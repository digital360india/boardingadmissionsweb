"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const testimonials = [
     {
    name: "Avika Agarwal",
    quote:
      "Proud moment for the family Avika Agarwal secures admission to Welham Girls",
    image:
      "https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/testimonials%2F90.png?alt=media&token=c2ed4486-b4bd-4195-8d2f-adfb447d8905",
  },
  {
    name: "Anahat Kaur",
    quote:
      "Proud moment for the family as Anahat Kaur secures admission to Welham Girls.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/testimonials%2FBoarding%20schools%202025%20post%20(23).png?alt=media&token=36e9913f-f219-4739-8476-f5f05decb0fe",
  },
 
];

export default function TestimonialSwiper() {
  return (
    <div className="w-full max-w-3xl px-4 py-6 mx-auto">
      <h2 className="text-3xl  font-medium leading-tight  text-primary02 mb-10  ">
        Proud Parents
      </h2>

      <div className="rounded-2xl overflow-hidden shadow-2xl">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="relative bg-white">
                {/* Image */}
                <div className="w-full h-[350px] relative">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text */}
                <div className="p-6 md:p-8 text-left">
                  <h3 className="text-xl md:text-2xl  text-black">
                    {t.name}
                  </h3>
                  <p className="mt-2 mb-6 text-gray-700 text-sm">"{t.quote}"</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

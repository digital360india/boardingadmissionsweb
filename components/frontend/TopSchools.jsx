import Image from 'next/image';
import React from 'react'

export default function TopSchools() {
    const school = [
        {
          school: "Bishop Cotton School",
          imageSrc: "/images/school.svg",
          location: "(Shimla)",
        },
        {
          school: "Bishop Cotton School",
          imageSrc: "/images/school.svg",
          location: "(Shimla)",
        },
        {
          school: "Bishop Cotton School",
          imageSrc: "/images/school.svg",
          location: "(Shimla)",
        },
        {
          school: "Bishop Cotton School",
          imageSrc: "/images/school.svg",
          location: "(Shimla)",
        },
        {
          school: "Bishop Cotton School",
          imageSrc: "/images/school.svg",
          location: "(Shimla)",
        },
        {
          school: "Bishop Cotton School",
          imageSrc: "/images/school.svg",
          location: "(Shimla)",
        },
        {
          school: "Bishop Cotton School",
          imageSrc: "/images/school.svg",
          location: "(Shimla)",
        },
        {
          school: "Bishop Cotton School",
          imageSrc: "/images/school.svg",
          location: "(Shimla)",
        },
        {
            school: "Bishop Cotton School",
            imageSrc: "/images/school.svg",
            location: "(Shimla)",
          },
          {
            school: "Bishop Cotton School",
            imageSrc: "/images/school.svg",
            location: "(Shimla)",
          },
          {
            school: "Bishop Cotton School",
            imageSrc: "/images/school.svg",
            location: "(Shimla)",
          },
          {
            school: "Bishop Cotton School",
            imageSrc: "/images/school.svg",
            location: "(Shimla)",
          },
          {
            school: "Bishop Cotton School",
            imageSrc: "/images/school.svg",
            location: "(Shimla)",
          },
          {
            school: "Bishop Cotton School",
            imageSrc: "/images/school.svg",
            location: "(Shimla)",
          },
          {
            school: "Bishop Cotton School",
            imageSrc: "/images/school.svg",
            location: "(Shimla)",
          },
          {
            school: "Bishop Cotton School",
            imageSrc: "/images/school.svg",
            location: "(Shimla)",
          },
          
      ];
  return (
    <div>
         <div className="xl:mx-[100px] lg:mx-[40px] mx-[24px] lg:pb-[100px] pb-[50px]">
      <div>
      <p className="text-primary02 py-[40px] lg:text-[48px] text-[24px] lg:w-full  font-semibold text-center">
          Top Schools We have Cracked
        </p>
      </div>
      <div className="flex justify-center mx-auto lg:gap-8 gap-4 flex-wrap ">
        {school.map((member, index) => (
          <div key={index} className="flex-shrink-0 lg:w-[330px] lg:h-[350px] w-[150px] h-[150px] rounded-md lg:border-2 border-4 border-[#075D70]">
            <div className="flex justify-center lg:mt-[8%] mt-[6%] lg:mb-[5%] mb-[3%]">
              <Image
                src={member.imageSrc}
                width={1}
                height={1}
                alt={member.school}
                className='lg:w-[200px] lg:h-[200px] w-[80px] h-[80px]'
              />
            </div>
            <div className="text-center text-primary02 lg:text-24px text-[14px] font-medium">
              <p>{member.school}</p>
              <p>{member.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

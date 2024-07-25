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
         <div className="mx-[100px] pb-[100px]">
      <div>
        <p className="text-primary02 py-[50px] text-[48px] font-semibold text-center">
          Top Schools We have Cracked
        </p>
      </div>
      <div className="flex justify-center gap-8 flex-wrap mx-auto ">
        {school.map((member, index) => (
          <div key={index} className="flex-shrink-0 w-[330px] rounded-md h-[350px] border border-[#075D70]">
            <div className="flex justify-center mt-[8%] mb-[5%]">
              <Image
                src={member.imageSrc}
                width={200}
                height={200}
                alt={member.school}
              />
            </div>
            <div className="text-center text-primary02 text-24px font-medium">
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

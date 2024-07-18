import Image from 'next/image';

export default function Rating({ given, length = 5 }) {
  return (
    <div className="rating flex   sm:mt-1.5">
      {Array.from({ length }).map((_, index) => (
        <div key={index} className="icon-cont">
          {index < given ? (
            <Image
              src="/images/star-active.svg"
              className="sm:w-[1.5vw] sm:h-[2.5vh] h-[3vh] w-[2.5vw] outline-none "
              width={2}
              height={2}
              alt="Active star"
            />
          ) : (
            <Image
              src="/images/star-inactive.svg"
              className="sm:w-[1.5vw] sm:h-[2.5vh] h-[3vh] w-[2.5vw] outline-none"
              width={2}
              height={2}
              alt="Inactive star"
            />
          )}
        </div>
      ))}
    </div>
  );
}
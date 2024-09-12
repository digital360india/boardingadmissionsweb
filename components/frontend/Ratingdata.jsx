import Image from 'next/image';
import { IoMdStar,  } from 'react-icons/io';

export default function Rating({ given, length = 5 }) {
  return (
    <div className="rating flex   sm:mt-1.5">
      {Array.from({ length }).map((_, index) => (
        <div key={index} className="icon-cont">
          {index < given ? (
           <IoMdStar size={16} color='orange' />

          ) : (
            <IoMdStar size={16} color='#808080' />

          )}
        </div>
      ))}
    </div>
  );
}
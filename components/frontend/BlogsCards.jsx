"use client"
import React, { useState } from 'react';
import Image from 'next/image'; // Assuming you are using Next.js for image optimization

const items = [
  {
    imageSrc: '/images/blog.svg', // Replace with your image source
    title: 'Lorem ipsum dolor sit amet consectetur. Nunc.',
    description: 'Lorem ipsum dolor sit amet consectetur. Sem scelerisque amet felis pretium at.',
  },
  {
    imageSrc: '/images/blog.svg', // Replace with your image source
    title: 'Lorem ipsum dolor sit amet consectetur. Nunc.',
    description: 'Lorem ipsum dolor sit amet consectetur. Sem scelerisque amet felis pretium at.',
  },
  {
    imageSrc: '/images/blog.svg', // Replace with your image source
    title: 'Lorem ipsum dolor sit amet consectetur. Nunc.',
    description: 'Lorem ipsum dolor sit amet consectetur. Sem scelerisque amet felis pretium at.',
  },
  {
    imageSrc: '/images/blog.svg', // Replace with your image source
    title: 'Lorem ipsum dolor sit amet consectetur. Nunc.',
    description: 'Lorem ipsum dolor sit amet consectetur. Sem scelerisque amet felis pretium at.',
  },
  {
    imageSrc: '/images/blog.svg', // Replace with your image source
    title: 'Lorem ipsum dolor sit amet consectetur. Nunc.',
    description: 'Lorem ipsum dolor sit amet consectetur. Sem scelerisque amet felis pretium at.',
  },
  {
    imageSrc: '/images/blog.svg', // Replace with your image source
    title: 'Lorem ipsum dolor sit amet consectetur. Nunc.',
    description: 'Lorem ipsum dolor sit amet consectetur. Sem scelerisque amet felis pretium at.',
  },
  {
    imageSrc: '/images/blog.svg', // Replace with your image source
    title: 'Lorem ipsum dolor sit amet consectetur. Nunc.',
    description: 'Lorem ipsum dolor sit amet consectetur. Sem scelerisque amet felis pretium at.',
  },
  {
    imageSrc: '/images/blog.svg', // Replace with your image source
    title: 'Lorem ipsum dolor sit amet consectetur. Nunc.',
    description: 'Lorem ipsum dolor sit amet consectetur. Sem scelerisque amet felis pretium at.',
  },
  {
    imageSrc: '/images/blog.svg', // Replace with your image source
    title: 'Lorem ipsum dolor sit amet consectetur. Nunc.',
    description: 'Lorem ipsum dolor sit amet consectetur. Sem scelerisque amet felis pretium at.',
  },
  {
    imageSrc: '/images/blog.svg', // Replace with your image source
    title: 'Lorem ipsum dolor sit amet consectetur. Nunc.',
    description: 'Lorem ipsum dolor sit amet consectetur. Sem scelerisque amet felis pretium at.',
  },
  {
    imageSrc: '/images/blog.svg', // Replace with your image source
    title: 'Lorem ipsum dolor sit amet consectetur. Nunc.',
    description: 'Lorem ipsum dolor sit amet consectetur. Sem scelerisque amet felis pretium at.',
  },
  {
    imageSrc: '/images/blog.svg', // Replace with your image source
    title: 'Lorem ipsum dolor sit amet consectetur. Nunc.',
    description: 'Lorem ipsum dolor sit amet consectetur. Sem scelerisque amet felis pretium at.',
  },
  {
    imageSrc: '/images/blog.svg', // Replace with your image source
    title: 'Lorem ipsum dolor sit amet consectetur. Nunc.',
    description: 'Lorem ipsum dolor sit amet consectetur. Sem scelerisque amet felis pretium at.',
  },
  {
    imageSrc: '/images/blog.svg', // Replace with your image source
    title: 'Lorem ipsum dolor sit amet consectetur. Nunc.',
    description: 'Lorem ipsum dolor sit amet consectetur. Sem scelerisque amet felis pretium at.',
  },
  {
    imageSrc: '/images/blog.svg', // Replace with your image source
    title: 'Lorem ipsum dolor sit amet consectetur. Nunc.',
    description: 'Lorem ipsum dolor sit amet consectetur. Sem scelerisque amet felis pretium at.',
  },
];

export default function BlogsCards() {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Calculate the total number of pages
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Get the items for the current page
  const currentItems = items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Function to handle page change
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Function to render page numbers
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => goToPage(i)}
          className={`px-4 py-2 rounded-lg mr-2 ${
            currentPage === i ? 'bg-primary02 text-white' : 'bg-gray-200'
          }`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className='px-[99px]'>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {currentItems.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md">
            <div className="mb-4">
              <Image
                src={item.imageSrc}
                width={3}
                height={244}
                alt="Image"
                className="rounded-lg w-full"
              />
            </div>
            <div className='p-6'>
              <div>
                <p className="text-xl font-medium">{item.title}</p>
              </div>
              <div>
                <p className="text-base font-normal">{item.description}</p>
              </div>
              <div className="text-lg text-primary02 mt-4">
                <button className="bg-primary02 text-white px-4 py-2 rounded-lg">READ MORE</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-8 space-x-10 ">
        <button
          onClick={() => goToPage(currentPage - 1)}
          className={`px-4 py-2 rounded-lg mr-2 ${
            currentPage === 1 ? 'cursor-not-allowed' : ' text-black'
          }`}
          disabled={currentPage === 1}
        >
           <Image
                width={1}
                height={1}
                    src="/images/leftbutton.svg"
                    alt="/"
                    className="object-cover w-full h-full "
                  />
        </button>
        {renderPageNumbers()}
        <button
          onClick={() => goToPage(currentPage + 1)}
          className={`px-4 py-2 rounded-lg mr-2 ${
            currentPage === totalPages ? 'cursor-not-allowed' : ' text-white'
          }`}
          disabled={currentPage === totalPages}
        >
           <Image
                width={1}
                height={1}
                    src="/images/rightbutton.svg"
                    alt="/"
                    className="object-cover w-full h-full "
                  />
        </button>
      </div>
    </div>
  );
}
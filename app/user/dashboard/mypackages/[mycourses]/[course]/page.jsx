'use client';
import React from 'react';
import { usePathname } from 'next/navigation';

const Page = () => {
  const pathname = usePathname();
  const pathParts = pathname.split('/');
  const mycourses = pathParts[4]; 
  const course = pathParts[5];

  return (
    <div>
      <h1>Hello</h1>
      <p>Course Package: {mycourses}</p>
      <p>Course ID: {course}</p>
    </div>
  );
};

export default Page;

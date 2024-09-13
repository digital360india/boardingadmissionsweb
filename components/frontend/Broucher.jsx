"use client"
import React from 'react';

export default function Broucher({ pdfLink }) {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfLink;
    link.setAttribute('download', 'Broucher.pdf'); // Force download and set the desired file name
    link.setAttribute('target', '_blank'); // Ensures it doesn't navigate away from the current page
    document.body.appendChild(link);
    link.click();
    link.remove(); // Clean up the DOM
  };

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-[#075D70] font-semibold text-[1.5rem]">Downloads</h1>
        <h3 className="text-[#D77A61] text-[1.13rem]">
          <span
            onClick={handleDownload}
            className="text-[#D77A61] cursor-pointer"
          >
            Broucher
          </span>
        </h3>
      </div>
    </div>
  );
}

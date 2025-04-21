"use client";
import React from "react";

export default function Broucher({ pdfLink, schoolName }) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfLink;
    link.setAttribute("download", "Broucher.pdf"); // Force download and set the desired file name
    link.setAttribute("target", "_blank"); // Ensures it doesn't navigate away from the current page
    document.body.appendChild(link);
    link.click();
    link.remove(); // Clean up the DOM
  };

  // Only render the component if the pdfLink is available
  if (!pdfLink) return null;
  const displayName = schoolName ? `${schoolName}` : "School_Brochure";

  return (
    <div className="my-10">
      {/* <h1 className="text-[#075D70] font-semibold text-[1.5rem]">
        Downloads
      </h1> */}
      {/* <h3 className="text-[#D77A61] text-[1.13rem]">
        <span
          onClick={handleDownload}
          className="text-[#D77A61] cursor-pointer hover:underline"
        >
          Download Broucher
        </span>
      </h3> */}

      <div className="w-full flex justify-start mt-10">
        <div className="rounded-xl shadow-md p-4 w-[400px]  relative ">
          <div className="bg-white rounded-md overflow-hidden mb-3 h-[450px]">
            <iframe
              src={`https://docs.google.com/gview?url=${encodeURIComponent(
                pdfLink
              )}&embedded=true`}
              className="w-full h-[350px] pointer-events-none"
              style={{ border: "none" }}
              title="PDF Preview"
              scrolling="no"
            />
            <div className="px-2 mt-2">
              <p className="font-semibold text-md">{displayName}</p>
            </div>
          </div>

          <div className="relative flex justify-center w-[250px] ml-14 ">
            <div className="absolute inset-0 rounded-md bg-[#075D70] opacity-10 animate-scale-pulse"></div>
            <a
              href={pdfLink}
              download="Brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative"
            >
              <button className="bg-[#075D70]  text-white py-2 px-5 sm:py-3 sm:px-6 rounded-md text-base sm:text-lg font-semibold transition">
                Download Brochure
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

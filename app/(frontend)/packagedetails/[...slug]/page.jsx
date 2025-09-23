"use client"; // MUST be at the very top

import React from "react";
import { useParams } from "next/navigation";
import EntranceExam from "@/pages/frontend/EntranceExam";

export default function PackageDetailsPage() {
  const { slug } = useParams(); 

  if (!slug || slug.length === 0) return <p>Loading...</p>;

  const packageId = slug[slug.length - 1];

  return (
    <div>
      <EntranceExam packageId={packageId} />
    </div>
  );
}

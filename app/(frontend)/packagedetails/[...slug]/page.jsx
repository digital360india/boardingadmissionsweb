"use client";

import EntranceExam from "@/pages/frontend/EntranceExam";
import { useParams } from "next/navigation";
import React from "react";

export default function page() {
  const { id } = useParams();
  return (
    <div>
      <EntranceExam packageId={id} />
    </div>
  );
}

import EntranceMain from "@/components/frontend/EntranceMain";
import React from "react";
import Stories from "@/components/frontend/Stories";

export default function EntranceExam({ id }) {
  return (
    <>
      <EntranceMain packageId={id} />
      <Stories />
    </>
  );
}

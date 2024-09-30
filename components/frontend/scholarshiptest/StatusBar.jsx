import React from "react";

const StatusItem = ({ label, count, color, border, width }) => (
  <div className={`${width ? "" : "w-[50%]"} flex gap-4 items-center `}>
    <p
      className={`${
        border ? "border border-background05 text-background05" : "text-white"
      } w-8 h-8 flex justify-center items-center rounded-full font-semibold`}
      style={{ backgroundColor: border ? undefined : color }}
    >
      {count}
    </p>
    <p className="text-background05 font-semibold">{label}</p>
  </div>
);

export default function Statusbar({ statusCounts }) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <StatusItem
          label="Answered"
          count={statusCounts.answered.length}
          color="#4BB53A"
        />
        <StatusItem
          label="Not Answered"
          count={statusCounts.notAnswered.length}
          color="#CB0000"
        />
      </div>
      <div className="flex justify-between">
        <StatusItem
          label="Not Visited"
          count={statusCounts.notVisited.length}
          border
        />
        <StatusItem
          label="Mark for Review"
          count={statusCounts.markedForReview.length}
          color="#E99202"
        />
      </div>
      <div className="flex justify-between">
        <StatusItem
          label="Answered and mark for review"
          count={statusCounts.answeredAndMarkedForReview.length}
          color="#FCA311"
          width
        />
      </div>
    </div>
  );
}

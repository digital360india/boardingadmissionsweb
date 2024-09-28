import React from "react";

const StatusItem = ({ label, count, color, border }) => (
  <div className="flex gap-4 items-center">
    <p
      className={`${
        border
          ? "border border-background05 text-background05"
          : `bg-[${color}] text-white`
      } w-8 h-8 flex justify-center items-center rounded-full`}
    >
      {count}
    </p>
    <p>{label}</p>
  </div>
);

export default function Statusbar({ statusCounts }) {
  return (
    <div className="space-y-4">
      <div className="flex gap-16">
        <StatusItem
          label="Answered"
          count={statusCounts.answered}
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
        />
      </div>
    </div>
  );
}

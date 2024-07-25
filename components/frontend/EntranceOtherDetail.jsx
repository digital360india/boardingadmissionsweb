import React from "react";

export default function EntranceOtherDetail() {
  const list = [
    {
      id: "01",
      data: "This batch is  for the candidates who are preparing for the Computer Science or Data Science and Artificial Intelligence GATE 2025 Examination.",
    },
    {
      id: "02",
      data: "Subject Planner has been uploaded in the Batch's Notice section.",
    },
    {
      id: "03",
      data: "Classes will be conducted from Monday to Friday.",
    },
    {
      id: "04",
      data: "MCQs, MSQs, NATs types of questions aligned with the GATE pattern.",
    },
    {
      id: "05",
      data: "Live + Recorded lectures by the best faculties of India.",
    },
    {
      id: "06",
      data: "DPP will be provided.",
    },
    {
      id: "07",
      data: "DPP Discussions will be there Topic Wise.",
    },
    {
      id: "08",
      data: "The Doubt Engine will be there for solving the student’s queries and doubts",
    },
    {
      id: "09",
      data: "Regular tests will be conducted.",
    },
    {
      id: "10",
      data: "GATE CSE PYQ in quiz format will be provided with video solutions.",
    },
    {
      id: "11",
      data: "No Refund Policy.",
    },
    {
      id: "12",
      data: "The registration fee is included in the price of the batch which is showing on the website. The breakup of registration fee will be mentioned on invoice. You may be provided with access to Notes, PYQ’s. Mock Test Papers, AITS Test Series, Previous year batches & other materials, the access can vary depending on the batch you purchase, so that exact details might change from one batch to another.",
    },
  ];
  return (
    <div
      style={{ boxShadow: "0 1px 8px 0 rgba(0, 0, 0, 0.08)" }}
      className="p-8 rounded-lg bg-[#FFFFFF] my-14"
    >
      <div className="font-semibold text-32px pb-4">Other Details:</div>

      <div>
      {list.map((item, index) => (
        <div key={index} className="flex items-center py-4 space-x-6 border-b border-[]">
          <div className="">{item.id}</div>
          <div className="w-[38vw]">{item.data}</div>
        </div>
          ))}
      </div>
    </div>
  );
}

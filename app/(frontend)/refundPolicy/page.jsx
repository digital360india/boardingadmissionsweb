import React from "react";

export default function page() {
  return (
    <div className="bg-gray-50 p-6 lg:p-12 rounded-lg shadow-md max-w-4xl mx-auto my-12">
      <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-6 text-center">
        Refund & Cancellation Policy - Boarding Admissions
      </h2>

      <p>
        At Boarding Admissions, we strive to ensure a transparent and fair
        refund process for parents and students enrolling in our entrance exam
        preparation programs.
      </p>
      <div className="space-y-4 mt-4">
        <div>
          <p className="font-medium text-gray-800 mb-2 underline">
            Eligibility for Refund
          </p>{" "}
          A full refund is available only if the cancellation request is made:
          Within 5 days of enrollment, and Before any study material has been
          accessed or shared (including online content, PDFs, video lectures, or
          tests).
        </div>
        <div>
          <p className="font-medium text-gray-800 mb-2 underline">
            Non-Refundable Cases
          </p>
          Refunds will not be issued if: The student has already started the
          preparation (attended a class, downloaded/viewed materials, etc.).
          More than 5 days have passed since enrollment.
        </div>

        <div>
          <p className="font-medium text-gray-800 mb-2 underline">
            Special Considerations
          </p>
          In rare or genuine cases (such as medical emergencies), refund
          requests may be reviewed on a case-by-case basis at the sole
          discretion of the Boarding Admissions team. In such cases, partial
          refunds or credit transfers may be considered.
        </div>

        <div>
          <p className="font-medium text-gray-800 mb-2 underline">
            Cancellation Process{" "}
          </p>
          All refund requests must be submitted via email to
          boardingadmissioninfo@gmail.com with the subject line: "Refund Request
          - [Student Name]".
        </div>
      </div>
      <p className="mt-6">
        Please allow up to 7 working days for review and processing.
      </p>
    </div>
  );
}

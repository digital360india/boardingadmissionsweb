"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

const TermsAndConditions = () => {
  const router = useRouter();
  const searchParams = useSearchParams(); 
  const category = searchParams.get("category");

  const handleAccept = () => {
    router.push(`/scholarshiptest/test?category=${category}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-8">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full border border-gray-200">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-800">
          Terms and Conditions
        </h1>
        <p className="text-gray-700 mb-6">
          Please read the following terms and conditions carefully before
          proceeding to the test:
        </p>
        <div className="text-gray-600 space-y-4 mb-6">
          <h2 className="text-2xl font-semibold">1. Test Participation</h2>
          <p>
            By participating in the test, you agree to abide by the rules and
            guidelines set forth by the test administrators. Any attempt to
            cheat or disrupt the test will result in disqualification.
          </p>

          <h2 className="text-2xl font-semibold">2. Data Privacy</h2>
          <p>
            Your personal information will be collected and stored securely. It
            will only be used for test purposes and will not be shared with
            third parties without your consent.
          </p>

          <h2 className="text-2xl font-semibold">3. Test Results</h2>
          <p>
            Test results will be provided within a specified timeframe. We are
            not responsible for any technical issues that may affect the
            delivery of results.
          </p>

          <h2 className="text-2xl font-semibold">4. Changes and Updates</h2>
          <p>
            The test administrators reserve the right to make changes to the
            terms and conditions at any time. It is your responsibility to
            review the terms regularly.
          </p>

          <h2 className="text-2xl font-semibold">5. Contact Information</h2>
          <p>
            If you have any questions or concerns about the terms and
            conditions, please contact us at [support@example.com].
          </p>
        </div>
        <button
          onClick={handleAccept}
          className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-3 px-8 rounded-lg shadow-lg hover:from-blue-600 hover:to-teal-600 transition-colors"
        >
          Accept and Proceed
        </button>
      </div>
    </div>
  );
};

export default TermsAndConditions;

"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

const TermsAndConditions = () => {
  const router = useRouter();

  const handleAccept = () => {
    router.push('/test'); // Redirect to the test page
  };

  return (
    <div className="terms-container">
      <h1>Terms and Conditions</h1>
      <p>
        {/* Add your terms and conditions text here */}
        Please read and accept the terms and conditions before proceeding to the test.
      </p>
      <button onClick={handleAccept} className="accept-btn">Accept</button>
    </div>
  );
};

export default TermsAndConditions;

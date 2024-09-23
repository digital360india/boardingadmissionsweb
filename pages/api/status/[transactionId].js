"use client";

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const PaymentStatus = () => {
  const router = useRouter();
  const { transactionId } = router.query;
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (transactionId) {
      const fetchPaymentStatus = async () => {
        try {
          const response = await fetch(`/api/payment-status?transactionId=${transactionId}`);
          const data = await response.json();
          setStatus(data.status); 
        } catch (error) {
          console.error('Error fetching payment status:', error);
          setStatus('error');
        }
      };

      fetchPaymentStatus();
    }
  }, [transactionId]);

  return (
    <div>
      <h1>Payment Status</h1>
      {transactionId ? (
        <div>
          <p>Transaction ID: {transactionId}</p>
          {status === null ? (
            <p>Loading status...</p>
          ) : status === 'success' ? (
            <p className="text-green-500">Payment was successful!</p>
          ) : status === 'failure' ? (
            <p className="text-red-500">Payment failed. Please try again.</p>
          ) : (
            <p className="text-yellow-500">An error occurred while fetching the status.</p>
          )}
        </div>
      ) : (
        <p>No transaction ID provided.</p>
      )}
    </div>
  );
};

export default PaymentStatus;

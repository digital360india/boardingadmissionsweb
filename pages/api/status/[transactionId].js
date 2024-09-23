
// "use client"

// import { useRouter } from 'next/router';

// const PaymentStatus = () => {
//   const router = useRouter();
//   const { transactionId } = router.query;

//   // Fetch the transaction status using transactionId, show success/failure
//   return (
//     <div>
//       <h1>Payment Status</h1>
//       <p>Transaction ID: {transactionId}</p>
//       {/* Display status (success/failure) based on transaction ID */}
//     </div>
//   );
// };

// export default PaymentStatus;












// pages/api/status/[transactionId].js

export default async function handler(req, res) {
    const { transactionId } = req.query;
  
    // Handle the callback from the payment gateway
    // Verify the transaction status with PhonePe and update the database
  
    res.status(200).json({ message: `Payment status for ${transactionId}` });
  }
  
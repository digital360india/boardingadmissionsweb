"use client"
import { usePathname, useRouter } from 'next/navigation';
import { startTransition, useEffect, useState } from 'react';
import { db } from '@/firebase/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import axios from 'axios';

const PaymentDetail = () => {
  const router = useRouter();
  const path = usePathname();
  const segments = path.split('/');
  const id = segments[2]; // URL format: /somePath/{id}/...
  const [paymentData, setPaymentData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchPaymentData(id);
    }
  }, [id]);

  const fetchPaymentData = async (paymentId) => {
    try {
      const docRef = doc(db, 'payments', paymentId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setPaymentData({ id: docSnap.id, ...docSnap.data() });
        console.log("Fetched data:", docSnap.data());
      } else {
        console.error('No such document!');
      }
    } catch (error) {
      console.error('Error fetching payment:', error);
    } finally {
      setLoading(false);
    }
  };

  const createOrders = async ({ productId, packageName, totalAmount, currency }) => {
    try {
      const response = await axios.post("/api/create-order", {
        productId,
        packageName,
        totalAmount: Number(totalAmount),
        currency,
      });
      return response.data;
    } catch (error) {
      console.error("Error creating orders", error);
      return { error: "Error creating orders" };
    }
  };

  const verifyPayment = async (data) => {
    try {
      const response = await axios.post("/api/verify-payment", data);
      return response.data;
    } catch (error) {
      console.error("Error verifying payment", error);
      return { error: "Error verifying payment" };
    }
  };

  function handleBuy() {
    startTransition(async () => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;

      script.onload = async () => {
        const paymentPrice = Number(paymentData.paymentPrice) || 0;
        const totalAmount = paymentPrice 

        const result = await createOrders({
          productId: id,
          packageName: paymentData.paymentTitle,
          totalAmount,
          currency: "INR",
        });

        if (result.error) {
          alert("Error creating orders");
          return;
        }

        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Ensure this is set in your env
          amount: result.amount,
          currency: "INR",
          name: "Payment Gateway",
          order_id: result.orderId,
          handler: async function (response) {
            // Verify the payment first
            const verifyResult = await verifyPayment(response);
            if (verifyResult.error) {
              alert("Payment Failed");
              return;
            }
            try {
              // Mark the document as paid in Firestore
              const paymentDocRef = doc(db, 'payments', id);
              await updateDoc(paymentDocRef, { paid: true });
            } catch (updateError) {
              console.error("Error updating payment status:", updateError);
            }
            try {
              // Prepare email details
              const emailData = {
                email: paymentData.email,
                name: paymentData.name,
                paymentTitle: paymentData.paymentTitle,
                paymentDate: new Date().toLocaleDateString("en-US", {
                  timeZone: "Asia/Kolkata",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }),
                amount: paymentData.paymentPrice,
                invoiceNumber: id,
              };
              // Send the invoice email via your API endpoint
              await fetch("/api/send-invoice", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(emailData),
              });
            } catch (emailError) {
              console.error("Error sending confirmation email:", emailError);
            }
            alert("Payment Successful!");
            router.push("/thank-you");
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      };

      document.body.appendChild(script);
    });
  }

  if (loading)
    return <div className="text-center text-2xl mt-10">Loading...</div>;
  if (!paymentData)
    return <div className="text-center text-2xl mt-10">Payment not found.</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-4">Payment Details</h2>
        <p className="text-xl mb-2">
          <span className="font-semibold">Name:</span> {paymentData.name}
        </p>
        <p className="text-xl mb-2">
          <span className="font-semibold">Email:</span> {paymentData.email}
        </p>
        <p className="text-xl mb-2">
          <span className="font-semibold">Phone:</span> {paymentData.phone}
        </p>
        <p className="text-xl mb-2">
          <span className="font-semibold">Payment Title:</span> {paymentData.paymentTitle}
        </p>
        <p className="text-xl mb-2">
          <span className="font-semibold">Amount:</span> ₹{paymentData.paymentPrice}
        </p>
        <button
          onClick={handleBuy}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-4 px-8 rounded-lg text-2xl font-bold mt-6"
        >
          Pay with Razorpay
        </button>
      </div>
    </div>
  );
};

export default PaymentDetail;

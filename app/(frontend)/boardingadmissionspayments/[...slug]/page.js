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
        const totalAmount = paymentPrice * 1.18; // including 18% GST

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
              await axios.post("/api/send-invoice", {
          emailData,
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
      {paymentData.paid ? (
        <div className="max-w-2xl mx-auto bg-green-100 border border-green-400 text-green-700 p-8 rounded-lg text-center">
          <h2 className="text-4xl font-semibold mb-4">Payment Completed</h2>
          <p className="text-2xl">
            Payment for <span className="font-semibold">{paymentData.paymentTitle}</span> was already made by <span className="font-semibold">{paymentData.name}</span>.
          </p>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="md:flex">
            {/* Left Side: Payment Information */}
            <div className="w-full md:w-1/2 p-8 bg-gray-50">
              <h2 className="text-4xl font-semibold mb-6 text-gray-800">Payment Information</h2>
              <div className="mb-4">
                <p className="text-lg text-gray-600">Payment Title</p>
                <p className="text-2xl font-semibold text-gray-800">{paymentData.paymentTitle}</p>
              </div>
              <div className="mb-4">
                <p className="text-lg text-gray-600">Purchaser Name</p>
                <p className="text-2xl font-semibold text-gray-800">{paymentData.name}</p>
              </div>
              <div className="mb-4">
                <p className="text-lg text-gray-600">Payment Date</p>
                <p className="text-2xl font-semibold text-gray-800">
                  {new Date().toLocaleDateString("en-US", {
                    timeZone: "Asia/Kolkata",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
              <div className="mb-4">
                <p className="text-lg text-gray-600">Amount</p>
                <p className="text-2xl font-semibold text-gray-800">₹{paymentData.paymentPrice}</p>
              </div>
              <div className="mb-4">
                <p className="text-lg text-gray-600">Email</p>
                <p className="text-2xl font-semibold text-gray-800">{paymentData.email}</p>
              </div>
              <div className="mb-4">
                <p className="text-lg text-gray-600">Phone</p>
                <p className="text-2xl font-semibold text-gray-800">{paymentData.phone}</p>
              </div>
            </div>
            {/* Right Side: Payment Action */}
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-between bg-white">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Proceed with Payment</h2>
                <p className="text-xl text-gray-700 mb-8">
                  To complete your transaction, please click the button below to pay via Razorpay.
                </p>
              </div>
              <button
                onClick={handleBuy}
                className="w-full bg-green-400 hover:bg-green-600 text-white py-4 px-8 rounded-lg text-2xl font-bold"
              >
                Pay with Razorpay
              </button>
              <p className="mt-4 text-center text-sm text-gray-500">
                Secure Payment Processing via Razorpay.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentDetail;

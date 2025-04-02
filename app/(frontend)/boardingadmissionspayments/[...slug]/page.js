"use client";
import { usePathname, useRouter } from "next/navigation";
import { startTransition, useEffect, useState } from "react";
import { db } from "@/firebase/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import axios from "axios";

const PaymentDetail = () => {
  const router = useRouter();
  const path = usePathname();
  const segments = path.split("/");
  const id = segments[2]; // URL format: /somePath/{id}/...
  
  const [paymentData, setPaymentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [enteredCoupon, setEnteredCoupon] = useState("");
  const [finalAmount, setFinalAmount] = useState(0);
  const [discountApplied, setDiscountApplied] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (id) {
      fetchPaymentData(id);
    }
  }, [id]);

  const fetchPaymentData = async (paymentId) => {
    try {
      const docRef = doc(db, "payments", paymentId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = { id: docSnap.id, ...docSnap.data() };
        setPaymentData(data);
        setFinalAmount(Number(data.paymentPrice) || 0);
      } else {
        console.error("No such document!");
      }
    } catch (error) {
      console.error("Error fetching payment:", error);
    } finally {
      setLoading(false);
    }
  };

  const applyCoupon = () => {
    if (!enteredCoupon) {
      setError("Please enter a coupon code.");
      return;
    }

    if (
      paymentData.coupon &&
      paymentData.coupon.toLowerCase() === enteredCoupon.toLowerCase()
    ) {
      const discount = (Number(paymentData.paymentPrice) * Number(paymentData.couponPercentage)) / 100;
      const newAmount = Number(paymentData.paymentPrice) - discount;
      setFinalAmount(newAmount);
      setDiscountApplied(true);
      setError("");
    } else {
      setError("Invalid coupon code. Please try again.");
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
        const result = await createOrders({
          productId: id,
          packageName: paymentData.paymentTitle,
          totalAmount: finalAmount,
          currency: "INR",
        });

        if (result.error) {
          alert("Error creating orders");
          return;
        }

        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
          amount: result.amount,
          currency: "INR",
          name: "Payment Gateway",
          order_id: result.orderId,
          handler: async function (response) {
            const verifyResult = await verifyPayment(response);
            if (verifyResult.error) {
              alert("Payment Failed");
              return;
            }
            try {
              const paymentDocRef = doc(db, "payments", id);
              await updateDoc(paymentDocRef, { paid: true, finalAmount });
            } catch (updateError) {
              console.error("Error updating payment status:", updateError);
            }
            try {
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
                amount: finalAmount,
                invoiceNumber: id,
              };
              await axios.post("/api/send-invoice", { emailData });
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
    <div className="container mx-auto p-8">
      {paymentData.paid ? (
        <div className="max-w-lg mx-auto bg-green-100 border border-green-400 text-green-800 p-6 rounded-lg text-center shadow-lg">
          <h2 className="text-2xl font-semibold">Payment Successful ✅</h2>
          <p className="text-sm text-gray-700 mt-2">
            Payment for <span className="font-medium">{paymentData.paymentTitle}</span> was completed by <span className="font-medium">{paymentData.name}</span>.
          </p>
  
          {/* Payment Details */}
          <div className="mt-4 text-left text-sm text-gray-700 space-y-1">
            <p><strong>Name:</strong> {paymentData.name}</p>
            <p><strong>Email:</strong> {paymentData.email}</p>
            <p><strong>Phone:</strong> {paymentData.phone}</p>
            <p><strong>Address:</strong> {paymentData.address}, {paymentData.city}, {paymentData.postalCode}</p>
            <p><strong>Original Amount:</strong> ₹{paymentData.paymentPrice}</p>
  
            {/* Show Discount If Applied */}
            {paymentData.coupon && (
              <div className="mt-2">
                <p><strong>Coupon Used:</strong> {paymentData.coupon}</p>
                <p><strong>Discount:</strong> {paymentData.couponPercentage}%</p>
                <p className="text-green-700 font-medium"><strong>Final Amount Paid:</strong> ₹{finalAmount}</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-8 border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Left Column - Payment Details */}
            <div className="bg-gray-50 p-6 rounded-md shadow-md">
              <h2 className="text-xl font-semibold text-gray-800 border-b pb-3 mb-4">Payment Details</h2>
              
              <div className="space-y-2 text-gray-700 text-sm">
                <p><strong>Payment For:</strong> {paymentData.paymentTitle}</p>
                <p><strong>Purchaser:</strong> {paymentData.name}</p>
                <p><strong>Email:</strong> {paymentData.email}</p>
                <p><strong>Phone:</strong> {paymentData.phone}</p>
                <p><strong>Address:</strong> {paymentData.address}, {paymentData.city}, {paymentData.postalCode}</p>
                <p><strong>Amount:</strong> ₹{paymentData.paymentPrice}</p>
              </div>
            </div>
  
            {/* Right Column - Coupon & Payment */}
            <div className="p-6 bg-white rounded-md border shadow-md">
              <h2 className="text-xl font-semibold text-gray-800 border-b pb-3 mb-4">Apply Coupon & Pay</h2>
  
              {!discountApplied && (
                <div className="space-y-2">
                  <input
                    type="text"
                    value={enteredCoupon}
                    onChange={(e) => setEnteredCoupon(e.target.value)}
                    placeholder="Enter Coupon Code"
                    className="border p-3 w-full rounded-md text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  />
                  <button
                    onClick={applyCoupon}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md text-sm font-medium transition duration-200"
                  >
                    Apply Coupon
                  </button>
                  {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
                </div>
              )}
  
              {discountApplied && (
                <p className="text-green-600 mt-3 text-sm">✅ Coupon Applied! New Price: ₹{finalAmount}</p>
              )}
  
              {/* Payment Button */}
              <div className="mt-6">
                <button
                  onClick={handleBuy}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-md text-lg font-semibold shadow-md transition duration-200"
                >
                  Pay ₹{finalAmount} with Razorpay
                </button>
                <p className="mt-2 text-xs text-gray-500 text-center">Secure Payment Processing via Razorpay.</p>
              </div>
            </div>
  
          </div>
        </div>
      )}
    </div>
  );
  
  
}  

export default PaymentDetail;

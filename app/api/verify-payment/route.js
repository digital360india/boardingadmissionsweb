import { NextResponse } from 'next/server';
import { createHmac } from "crypto";

export async function POST(req) {
  const data = await req.json();

  try {
    const shasum = createHmac("sha256", process.env.RAZORPAY_KEY_SECRET);
    shasum.update(`${data.razorpay_order_id}|${data.razorpay_payment_id}`);
    const digest = shasum.digest("hex");
    if (digest !== data.razorpay_signature) {
      return NextResponse.json({ error: "Transaction not legit!" }, { status: 400 });
    }
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.log("Error verifying payment", error);
    return NextResponse.json({ error: "Error verifying payment" }, { status: 500 });
  }
}
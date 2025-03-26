import {NextResponse } from 'next/server';
import RazorpayInstance from "../razorpay.js";

export async function POST(req) {
  const { productId, packageName, totalAmount, currency } = await req.json();

  if (!totalAmount) {
    return NextResponse.json({ error: 'Amount is required' }, { status: 400 });
  }

  try {    
    const orders = await RazorpayInstance.orders.create({
      amount: totalAmount * 100, // amount in the smallest currency unit
      currency: currency || "INR",
    });

    if (!orders) {
      return NextResponse.json({ error: "Error creating orders" }, { status: 500 });
    }

    // Save the order details in the database

    return NextResponse.json({ orderId: orders.id, amount: orders.amount }, { status: 200 });
  } catch (error) {
    console.log("Error creating orders", error);
    return NextResponse.json({ error: "Error creating orders" }, { status: 500 });
  }
}
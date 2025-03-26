import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "boardingadmissioninfo@gmail.com",
    pass: "eifu vdan tjiu hspi",
  },
});

export async function POST(req) {
  try {
    const { email, name, paymentTitle, paymentDate, amount } = await req.json();

    const mailOptions = {
      from: "boardingadmissioninfo@gmail.com",
      to: email,
      subject: "Payment Confirmation",
      text: `Dear ${name},

Your payment for "${paymentTitle}" of amount ₹${amount} on ${paymentDate} has been successfully processed.

Thank you for your payment!

Best regards,
Boarding Admission Team`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Payment confirmation email sent successfully",
    });
  } catch (error) {
    console.error("Error sending payment confirmation email:", error);
    return NextResponse.json({
      success: false,
      message: "Failed to send payment confirmation email",
      error,
    });
  }
}

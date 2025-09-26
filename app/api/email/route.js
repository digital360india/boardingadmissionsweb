import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phoneNumber, url, source, date } = body;

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.RECEIVER_EMAIL) {
      return new Response(
        JSON.stringify({ message: "❌ Missing email environment variables" }),
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Use App Password
      },
    });

    const mailOptions = {
      from: `"Boarding Admissions" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      cc: "digital360india@gmail.com",
      subject: "📩 New Boarding School Enquiry",
      html: `
        <h2>New Enquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phoneNumber}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Source:</strong> ${source}</p>
        <p><strong>Page URL:</strong> ${url}</p>
        <p><strong>Date:</strong> ${date}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "✅ Email sent successfully" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Email send error:", error);
    return new Response(
      JSON.stringify({ message: "❌ Email sending failed", error: error.message }),
      { status: 500 }
    );
  }
}

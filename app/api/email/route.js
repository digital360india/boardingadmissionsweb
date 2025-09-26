import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, phoneNumber, email, url, source, date } = body;

    // ✅ Setup transporter (Gmail example – you can switch to SMTP/other providers)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // app password (not raw Gmail password)
      },
    });

    // ✅ Compose email
    const mailOptions = {
      from: `"Boarding Admissions" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      cc: "digital360india@gmail.com",

      subject: "📩 New Enquiry - Boarding Admissions",
      html: `
        <h2>New Lead Enquiry</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phoneNumber}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Source:</b> ${source}</p>
        <p><b>Page URL:</b> ${url}</p>
        <p><b>Date:</b> ${date}</p>
      `,
    };

    // ✅ Send email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully ✅" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Email error:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}

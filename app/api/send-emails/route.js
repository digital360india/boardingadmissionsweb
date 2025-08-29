import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, phonenumber, school, class: studentClass, textmessage } = await req.json();

    if (!name || !phonenumber || !school || !studentClass) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing required fields" }),
        { status: 400 }
      );
    }

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "boardingadmissioninfo@gmail.com", // Your Gmail
        pass:"xljb mmel dvgf lizs" , // Gmail App Password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Demo Request from ${name}`,
      text: `
        Name: ${name}
        Phone Number: ${phonenumber}
        School: ${school}
        Class: ${studentClass}
        Message: ${textmessage || "N/A"}
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email sending error:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Failed to send email" }),
      { status: 500 }
    );
  }
}

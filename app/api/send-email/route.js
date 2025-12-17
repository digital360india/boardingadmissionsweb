import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("EMAIL API BODY 👉", body);

    const { name, phonenumber, school, class: studentClass, textmessage } = body;

    if (!name || !phonenumber || !school || !studentClass) {
      return new Response(JSON.stringify({ error: "Missing fields" }), {
        status: 400,
      });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "boardingadmissioninfo@gmail.com",
        pass: "xljbmmeldvgflizs", // no spaces
      },
    });

    await transporter.sendMail({
      from: "boardingadmissioninfo@gmail.com",
      to: "boardingadmissioninfo@gmail.com",
      cc: "digital360india@gmail.com",
      subject: `New Demo Request from ${name}`,
      text: `
Name: ${name}
Phone: ${phonenumber}
School: ${school}
Class: ${studentClass}
Message: ${textmessage || "N/A"}
`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("NODEMAILER ERROR 👉", err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}

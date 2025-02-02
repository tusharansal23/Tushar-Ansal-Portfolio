import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    // Parse request body properly
    const body = await req.json(); // <-- Fixes the issue
    const { name, email, message } = body;

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // Use TLS
      auth: {
        user: "tusharansal23@gmail.com" ,
        pass: "bruy phyo fxcv mzws" ,
      },
      debug: true, // Enable debug mode
      logger: true, // Log everything
    });

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "tusharansal23@gmail.com",
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Error sending email" }, { status: 500 });
  }
}

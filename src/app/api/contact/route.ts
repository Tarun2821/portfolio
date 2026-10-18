import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // ── Nodemailer transporter ──────────────────────────────────────────
  // Uses Gmail SMTP with an App Password (NOT your regular password).
  //
  // Setup steps:
  //   1. Go to https://myaccount.google.com/security
  //   2. Enable 2-Step Verification
  //   3. Search "App passwords" → create one for "Mail"
  //   4. Add these to your .env.local:
  //        GMAIL_USER=tarunbiswas2800@gmail.com   ← your actual gmail
  //        GMAIL_PASS=xxxx xxxx xxxx xxxx           ← 16-char app password
  // ───────────────────────────────────────────────────────────────────
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // sends to yourself
      replyTo: email,             // reply goes to the sender
      subject: `New message from ${name} — Portfolio`,
      html: `
        <div style="font-family: sans-serif; max-width: 560px; padding: 32px; background: #141412; color: #e8e4dc; border-radius: 8px;">
          <h2 style="margin: 0 0 24px; font-size: 1.4rem; color: #c8a87a; letter-spacing: 0.05em;">NEW CONTACT MESSAGE</h2>
          <table style="width:100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #888; font-size: 0.8rem; letter-spacing: 0.1em; width: 80px;">NAME</td>
              <td style="padding: 8px 0; color: #e8e4dc;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888; font-size: 0.8rem; letter-spacing: 0.1em;">EMAIL</td>
              <td style="padding: 8px 0; color: #e8e4dc;"><a href="mailto:${email}" style="color: #c8a87a;">${email}</a></td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #2a2a28; margin: 20px 0;" />
          <p style="color: #888; font-size: 0.8rem; letter-spacing: 0.1em; margin-bottom: 10px;">MESSAGE</p>
          <p style="color: #e8e4dc; line-height: 1.7; white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
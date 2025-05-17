import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface Guest {
  name: string;
  dietary: string;
}

interface RsvpRequestBody {
  guests: Guest[];
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: RsvpRequestBody = await request.json();
    const { guests, message } = body;

    if (!guests || !Array.isArray(guests) || guests.length === 0) {
      return NextResponse.json(
        { error: "At least one guest is required" },
        { status: 400 }
      );
    }

    const guestDetails = guests
      .map(
        (guest, idx) =>
          `Guest ${idx + 1}: ${guest.name} ${
            guest.dietary ? `(${guest.dietary})` : ""
          }`
      )
      .join("\n");

    const emailBody = `
RSVP Details:
${guestDetails}

Message:
${message || "No message provided."}
    `;

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `RSVP for Wedding - ${guests[0].name}`,
      text: emailBody,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to process RSVP" },
      { status: 500 }
    );
  }
}

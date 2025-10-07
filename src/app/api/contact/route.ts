import { NextResponse } from "next/server";
import { Resend } from "resend";

// Ensure Node.js runtime for compatibility with Resend SDK
export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body ?? {};
    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ ok: false, error: "Email service not configured (RESEND_API_KEY missing)." }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const subject = `New contact message from ${name}`;
    const to = "fatima.amir.dev@gmail.com";
    const from = "Blueberry IT Sky <onboarding@resend.dev>";

    const html = `
      <div style="font-family:system-ui,Segoe UI,Roboto,Arial,sans-serif;color:#0f172a">
        <h2 style="margin:0 0 8px">New Contact Message</h2>
        <p style="margin:0 0 8px">You received a new message via the contact form.</p>
        <div style="margin:16px 0;padding:12px;border:1px solid #e2e8f0;border-radius:12px;background:#fff">
          <p style="margin:0 0 6px"><strong>Name:</strong> ${String(name)}</p>
          <p style="margin:0 0 6px"><strong>Email:</strong> ${String(email)}</p>
          <p style="margin:0 0 6px"><strong>Message:</strong></p>
          <pre style="white-space:pre-wrap;margin:0">${String(message)}</pre>
        </div>
      </div>
    `;

    try {
      const { error } = await resend.emails.send({ from, to, subject, html, replyTo: String(email) });
      if (error) {
        console.error("Resend error:", error);
        return NextResponse.json({ ok: false, error: "Failed to send email" }, { status: 500 });
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Email service error";
      console.error("Resend thrown error:", err);
      return NextResponse.json({ ok: false, error: msg }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact route invalid request:", error);
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
}



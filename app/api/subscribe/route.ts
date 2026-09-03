import { NextResponse } from "next/server";
import { subscribeToNewsletter } from "@/lib/beehiiv";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}) as { email?: unknown });
  const email = typeof body.email === "string" ? body.email.trim() : "";

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  try {
    await subscribeToNewsletter(email);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("POST /api/subscribe failed:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 502 }
    );
  }
}

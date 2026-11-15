import { NextResponse } from "next/server";

export const runtime = "nodejs";

const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_HITS) {
    return NextResponse.json({ error: "Too many messages. Please try again in a few minutes." }, { status: 429 });
  }
  hits.set(ip, [...recent, now]);

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: pretend success so bots do not retry
  if (str(body.website, 200)) return NextResponse.json({ ok: true });

  const name = str(body.name, 100);
  const email = str(body.email, 200);
  const tour = str(body.tour, 200);
  const date = str(body.date, 20);
  const travelers = str(body.travelers, 5);
  const hotel = str(body.hotel, 200);
  const message = str(body.message, 3000);

  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Enter your name and a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? "info@baligoodshittour.com";
  if (!apiKey || !to) {
    console.error("Missing RESEND_API_KEY or CONTACT_TO_EMAIL");
    return NextResponse.json(
      { error: "Email sending is not set up yet. Please contact us directly by email." },
      { status: 500 },
    );
  }

  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Tour", tour || "Not sure yet"],
    ["Date", date || "-"],
    ["Travelers", travelers || "-"],
    ["Hotel or area", hotel || "-"],
  ];
  const html = `<div style="font-family:system-ui,sans-serif;font-size:15px;color:#16213A">
<h2 style="margin:0 0 12px">New tour enquiry</h2>
<table cellpadding="6" style="border-collapse:collapse">${rows
    .map(([k, v]) => `<tr><td style="color:#5A6472">${k}</td><td><strong>${esc(v)}</strong></td></tr>`)
    .join("")}</table>
<p style="margin:16px 0 4px;color:#5A6472">Message</p>
<p style="white-space:pre-wrap;margin:0">${esc(message) || "-"}</p></div>`;
  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n") + `\n\nMessage:\n${message || "-"}`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? "Bali Good Shit Tour <info@baligoodshittour.com>",
      to: [to],
      reply_to: email,
      subject: `Tour enquiry: ${tour || "General"} (${name})`,
      html,
      text,
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text().catch(() => ""));
    return NextResponse.json({ error: "The message could not be sent. Please try again later." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}

"use client";

import { useState } from "react";
import type { Tour } from "@/data/types";

type State = { status: "idle" | "sending" | "sent" | "error"; message?: string };

export function ContactForm({ tours, defaultTour = "" }: { tours: Pick<Tour, "slug" | "title">[]; defaultTour?: string }) {
  const [state, setState] = useState<State>({ status: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setState({ status: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(data.error ?? "The message could not be sent.");
      form.reset();
      setState({ status: "sent" });
    } catch (err) {
      setState({
        status: "error",
        message: err instanceof Error ? err.message : "The message could not be sent. Try again in a minute.",
      });
    }
  }

  if (state.status === "sent") {
    return (
      <div className="form__done" role="status">
        <p className="form__done-title">Message sent.</p>
        <p>You will get a reply by email, usually within a day. Check your spam folder if you do not see it.</p>
        <button type="button" className="linkbtn" onClick={() => setState({ status: "idle" })}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate={false}>
      <div className="field">
        <label htmlFor="name">Your name</label>
        <input id="name" name="name" required maxLength={100} autoComplete="name" />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required maxLength={200} autoComplete="email" />
      </div>
      <div className="field">
        <label htmlFor="tour">Tour</label>
        <select id="tour" name="tour" defaultValue={defaultTour}>
          <option value="">Not sure yet</option>
          {tours.map((t) => (
            <option key={t.slug} value={t.title}>
              {t.title}
            </option>
          ))}
        </select>
      </div>
      <div className="field field--half">
        <label htmlFor="date">Date</label>
        <input id="date" name="date" type="date" />
      </div>
      <div className="field field--half">
        <label htmlFor="travelers">Travelers</label>
        <input id="travelers" name="travelers" type="number" min={1} max={30} defaultValue={2} />
      </div>
      <div className="field">
        <label htmlFor="hotel">Hotel or area</label>
        <input id="hotel" name="hotel" maxLength={200} placeholder="For example, Seminyak" />
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={4} maxLength={3000} placeholder="Ages of children, mobility, must-see places" />
      </div>
      {/* Honeypot: people never see this, bots fill it in */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <button className="btn btn--sun" type="submit" disabled={state.status === "sending"}>
        {state.status === "sending" ? "Sending" : "Send enquiry"}
      </button>
      {state.status === "error" && (
        <p className="form__error" role="alert">
          {state.message}
        </p>
      )}
    </form>
  );
}

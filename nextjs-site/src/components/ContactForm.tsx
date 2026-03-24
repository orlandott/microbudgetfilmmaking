"use client";

import type { FormEvent } from "react";

const CONTACT_EMAIL = "orlando@microbudgetfilmmaking.com";

export default function ContactForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    const body = [
      name && `Name: ${name}`,
      email && `Email: ${email}`,
      "",
      message || "(No message entered)",
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:${CONTACT_EMAIL}?${new URLSearchParams({
      subject: "Microbudget Filmmaking — contact form",
      body,
    }).toString()}`;

    window.location.href = mailto;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="contact-name">Name</label>
      <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Your name" />

      <label htmlFor="contact-email">Email</label>
      <input
        id="contact-email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="you@example.com"
      />

      <label htmlFor="contact-message">Message</label>
      <textarea
        id="contact-message"
        name="message"
        rows={6}
        placeholder="Tell me about your project, timeline, or collaboration idea…"
      />

      <button type="submit" className="cta-button contact-form-submit">
        Open email to send
      </button>
      <p className="contact-form-note">
        This opens your email app with your message filled in. You can edit before sending.
      </p>
    </form>
  );
}

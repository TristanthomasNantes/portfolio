"use client";

import { FormEvent, useState } from "react";

type Status = { type: "success" | "error"; message: string } | null;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setStatus(null);

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(data.get("name") ?? ""),
          email: String(data.get("email") ?? ""),
          message: String(data.get("message") ?? ""),
          company: String(data.get("company") ?? ""),
        }),
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        setStatus({
          type: "error",
          message: payload.message ?? "Envoi impossible.",
        });
        return;
      }

      form.reset();
      setStatus({
        type: "success",
        message: payload.message ?? "Message envoyé.",
      });
    } catch {
      setStatus({ type: "error", message: "Erreur réseau. Réessaie." });
    } finally {
      setPending(false);
    }
  }

  return (
    <>
      {status ? (
        <p className={`flash flash-${status.type}`} role="status">
          {status.message}
        </p>
      ) : null}

      <form className="contact-form" onSubmit={onSubmit} noValidate>
        <div className="hp-field" aria-hidden="true">
          <label htmlFor="company">Société</label>
          <input
            type="text"
            id="company"
            name="company"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <label htmlFor="name">Nom</label>
        <input
          type="text"
          id="name"
          name="name"
          maxLength={100}
          required
          autoComplete="name"
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          maxLength={150}
          required
          autoComplete="email"
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          maxLength={2000}
          required
        />

        <button type="submit" className="btn btn-primary" disabled={pending}>
          {pending ? "Envoi…" : "Envoyer"}
        </button>
      </form>
    </>
  );
}

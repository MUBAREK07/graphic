import React, { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const data = new FormData(e.target);
    const res = await fetch("https://formspree.io/f/your-form-id", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" }
    });
    if (res.ok) {
      setStatus("sent");
    } else {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5em" }}>
      <input required type="text" name="name" placeholder="Your Name" style={{ padding: '1em', fontSize: '1em' }} />
      <input required type="email" name="email" placeholder="Your Email" style={{ padding: '1em', fontSize: '1em' }} />
      <textarea required name="message" placeholder="Tell me about your project…" rows={5} style={{ padding: '1em', fontSize: '1em' }} />
      <button className="cta" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send Inquiry"}
      </button>
      {status === "sent" && <div style={{ color: "var(--color-accent)", marginTop: "1em" }}>Thank you! I'll get back to you soon.</div>}
      {status === "error" && <div style={{ color: "red", marginTop: "1em" }}>Sorry, something went wrong. Try again.</div>}
    </form>
  );
}
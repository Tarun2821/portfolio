"use client";

import { useState } from "react";
import { site } from "@/data/site";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSend() {
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  const field =
    "bg-transparent border border-[var(--line)] rounded-2xl px-5 py-4 text-base text-cream placeholder:text-dim focus:outline-none focus:border-accent transition-colors";

  return (
    <section id="contact" className="border-t border-[var(--line)] pt-28 md:pt-40 pb-16">
      <div className="wrap">
        <h2 className="f-display text-[clamp(52px,11vw,180px)] leading-[0.92]">
          Got an idea?
          <br />
          Let&apos;s <em className="f-serif text-accent pr-[0.1em]">build</em> it
          <br />
          <span className="outline">together.</span>
        </h2>

        <a
          href={`mailto:${site.email}`}
          className="mt-14 inline-flex items-center gap-6 pl-9 pr-3 py-3 rounded-full border border-[var(--line)] text-lg md:text-xl font-medium transition-colors duration-300 hover:border-accent"
        >
          {site.email}
          <span className="grid place-items-center w-14 h-14 rounded-full bg-accent text-black">→</span>
        </a>

        <div className="mt-20 grid md:grid-cols-[1fr_1.2fr] gap-12">
          <p className="text-muted max-w-[360px] leading-relaxed">
            Prefer a quick note? Tell me what you&apos;re building and I&apos;ll reply within a day or two.
          </p>
          <div className="flex flex-col gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input aria-label="Full name" className={field} placeholder="Full name" value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <input aria-label="Email" type="email" className={field} placeholder="Email" value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <textarea aria-label="Message" rows={5} className={`${field} resize-none`} placeholder="Tell me about your project"
              value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            <div className="flex items-center gap-4">
              <button
                onClick={handleSend}
                disabled={status === "sending" || status === "sent"}
                className="px-8 py-3.5 rounded-full bg-accent text-black font-semibold disabled:opacity-50 transition-transform hover:scale-[1.03]"
              >
                {status === "sending" ? "Sending…" : status === "sent" ? "Message sent" : "Send message"}
              </button>
              {status === "error" && <p className="text-sm text-red-400">Couldn&apos;t send. Please try again.</p>}
            </div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 border-y border-[var(--line)]">
          {site.links.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={`group flex justify-between items-start p-8 hover:bg-[var(--bg-2)] transition-colors ${i > 0 ? "md:border-l border-t md:border-t-0 border-[var(--line)]" : ""}`}
            >
              <div>
                <div className="text-[11px] tracking-[0.15em] uppercase text-muted mb-3">{l.label}</div>
                <div className="f-display text-xl md:text-2xl break-all" style={{ letterSpacing: "-0.03em" }}>{l.handle}</div>
              </div>
              <span className="text-muted transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

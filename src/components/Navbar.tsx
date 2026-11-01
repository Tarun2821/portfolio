"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/data/site";

const links = [
  { label: "Work", href: "/#work", id: "work" },
  { label: "About", href: "/#about", id: "about" },
  { label: "Skills", href: "/#skills", id: "skills" },
  { label: "Contact", href: "/#contact", id: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const els = links.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <nav
      className="fixed top-0 inset-x-0 z-[500] grid grid-cols-[1fr_auto_1fr] items-center px-5 md:px-8 py-5 border-b border-[var(--line)] backdrop-blur-xl"
      style={{ background: "rgba(6,6,6,0.6)" }}
    >
      <Link href="/" className="flex items-center gap-2.5 f-display text-lg w-fit" style={{ letterSpacing: "-0.02em" }}>
        <span className="pulse w-2.5 h-2.5 rounded-full bg-accent" style={{ boxShadow: "0 0 20px #d4ff00" }} />
        {site.name.split(" ").slice(0, 2).join(" ")}
      </Link>

      <ul className="hidden md:flex items-center gap-9 text-sm font-medium text-muted">
        {links.map((l) => (
          <li key={l.id}>
            <Link
              href={l.href}
              className={`relative py-1.5 transition-colors duration-300 hover:text-cream ${active === l.id ? "text-cream" : ""}`}
            >
              {l.label}
              <span
                className="absolute left-0 -bottom-0.5 h-px bg-accent transition-all duration-300"
                style={{ width: active === l.id ? "100%" : 0 }}
              />
            </Link>
          </li>
        ))}
      </ul>

      <div className="justify-self-end">
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 px-[18px] py-2.5 rounded-full border border-[var(--line)] text-[13px] font-semibold transition-colors duration-300 hover:border-accent hover:text-accent"
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#52d18a", boxShadow: "0 0 10px #52d18a" }} />
          <span className="hidden sm:inline">Available for work</span>
          <span className="sm:hidden">Hire me</span>
        </Link>
      </div>
    </nav>
  );
}

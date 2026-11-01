"use client";

import { processSteps } from "@/data/portfolio";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { ProcessStep } from "@/types/index";

export default function Process() {
  return (
    <section className="bg-ink px-10 md:px-16 pb-24 flex flex-col gap-5 overflow-hidden">
      {processSteps.map((step, index) => (
        <ProcessCard key={step.number} step={step} index={index} />
      ))}
    </section>
  );
}

function ProcessCard({ step, index }: { step: ProcessStep; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.2);
  const [hovered, setHovered] = useState(false);

  const getOffset = (i: number): string => {
    if (i === 0) return "0%";
    if (i === 1) return "8%";
    if (i === 2) return "16%";
    if (i === 3) return "8%";
    if (i === 4) return "0%";
    return "0%";
  };

  const getWidth = (i: number): string => {
    if (i === 0 || i === 4) return "100%";
    if (i === 1 || i === 3) return "92%";
    if (i === 2) return "84%";
    return "100%";
  };

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "visible" : ""} rounded-[5px] cursor-pointer`}
      style={{
        marginLeft: getOffset(index),   // ✅ from card 1
        width: getWidth(index),          // ✅ from card 1
        transitionDelay: `${index * 0.06}s`,
        background: hovered ? (step.bgColor ?? "#2a2a22") : "#1a1a18",
        border: "1px solid #2a2a28",
        padding: hovered ? "3rem" : "2rem 3rem",
        minHeight: hovered ? "320px" : "160px",
        transition: "background 0.5s, padding 0.5s, min-height 0.5s",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8">
        <div className="flex-1">
          <span className="font-condensed font-bold text-base tracking-[0.1em] text-cream/50 block mb-2">
            {step.number}
          </span>
          <h3
            className="font-condensed font-black text-cream leading-[0.9] tracking-[-0.02em] uppercase mb-5"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
          >
            {step.title}
          </h3>

          {/* Description — reveals on hover */}
          <div
            className="overflow-hidden transition-all duration-500"
            style={{ maxHeight: hovered ? "200px" : "0px", opacity: hovered ? 1 : 0 }}
          >
            <p className="font-body text-[0.9rem] text-cream/75 leading-[1.75] max-w-[500px]">
              {step.description}
            </p>
          </div>
        </div>

        {/* Tags — fade + slide on hover */}
        <div
          className="flex flex-col items-start md:items-end gap-[6px] shrink-0 transition-all duration-500"
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(8px)",
          }}
        >
          {step.tags.map((tag) => (
            <span key={tag} className="font-condensed font-bold text-[0.78rem] tracking-[0.15em] text-cream/65">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
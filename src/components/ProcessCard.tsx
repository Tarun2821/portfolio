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

// Staircase: 0→0%, 1→8%, 2→16%, 3→8%, 4→0%
function getMargin(i: number) {
  if (i === 0 || i === 4) return 0;
  if (i === 1 || i === 3) return 8;
  if (i === 2) return 16;
  return 0;
}

function ProcessCard({ step, index }: { step: ProcessStep; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.22);
  const [hovered, setHovered] = useState(false);
  const margin = getMargin(index);

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "visible" : ""} rounded-[5px] cursor-pointer transition-all duration-500`}
      style={{
        background: hovered ? step.bgColor : "#1a1a18",
        marginLeft: `${margin}%`,
        width: `${100 - margin}%`,
        transitionDelay: `${index * 0.07}s`,
        zIndex: index,
        position: "relative",
        minHeight: hovered ? "320px" : "160px",
        padding: hovered ? "3rem" : "2rem 3rem",
        border: hovered ? `1px solid ${step.bgColor}` : "1px solid #2a2a28",
        transform: hovered ? "scale(1.01)" : "scale(1)",
        transition:
          "background 0.5s ease, min-height 0.5s ease, padding 0.5s ease, transform 0.3s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8">
        <div className="flex-1">
          <span className="font-condensed font-bold text-base tracking-[0.1em] text-cream/60 block mb-2">
            {step.number}
          </span>
          <h3
            className="font-condensed font-black text-cream leading-[0.9] tracking-[-0.02em] uppercase mb-5"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
          >
            {step.title}
          </h3>

          <div
            className="overflow-hidden transition-all duration-500"
            style={{
              maxHeight: hovered ? "200px" : "0px",
              opacity: hovered ? 1 : 0,
            }}
          >
            <p className="font-body text-[0.9rem] text-cream/75 leading-[1.75] max-w-[480px]">
              {step.description}
            </p>
          </div>
        </div>

        <div
          className="flex flex-col items-start md:items-end gap-[6px] shrink-0 transition-all duration-500"
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(8px)",
          }}
        >
          {step.tags.map((tag) => (
            <span
              key={tag}
              className="font-condensed font-bold text-[0.78rem] tracking-[0.15em] text-cream/65"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
"use client";

import { motion } from "framer-motion";
import { cities } from "@/data/cities";
import { MotionReveal } from "@/components/ui/MotionReveal";
import Link from "next/link";

const positions: Record<string, { x: number; y: number }> = {
  "los-angeles": { x: 12, y: 46 },
  "las-vegas": { x: 18, y: 42 },
  miami: { x: 28, y: 56 },
  boston: { x: 32, y: 38 },
  "new-york": { x: 30, y: 40 },
  london: { x: 50, y: 32 },
  ibiza: { x: 51, y: 42 },
  dubai: { x: 66, y: 50 },
};

const demandColor = (level: string) => {
  if (level === "High Demand") return "bg-champagne";
  if (level === "Members First") return "bg-velvet-bright";
  if (level === "Rising") return "bg-emerald-300";
  return "bg-ivory-soft";
};

export function AccessMap() {
  return (
    <section className="relative py-20 md:py-28 border-t border-smoke/40">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <MotionReveal>
          <div className="max-w-3xl">
            <p className="text-[10px] uppercase tracking-[0.32em] text-champagne mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-champagne/60" />
              Access map
            </p>
            <h2 className="font-display text-4xl md:text-6xl leading-[0.95] tracking-tightest text-ivory">
              Eight markets,{" "}
              <span className="italic champagne-text">one private layer.</span>
            </h2>
            <p className="mt-5 text-base text-ivory-soft leading-relaxed">
              The Afterlist is built city-by-city. Each marker carries its own demand
              signal, lead time, and access mix. Hover to read the room.
            </p>
          </div>
        </MotionReveal>

        <div className="mt-12 md:mt-16 relative rounded-3xl border border-smoke bg-charcoal/40 backdrop-blur-md p-5 md:p-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,97,0.06),transparent_60%)] pointer-events-none" />

          {/* Map plate */}
          <div
            className="relative w-full aspect-[16/9] md:aspect-[2.4/1] rounded-2xl bg-ink/60 ring-1 ring-smoke overflow-hidden"
            style={{
              backgroundImage:
                "linear-gradient(rgba(201,169,97,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,97,0.06) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          >
            {/* fake continents */}
            <div className="absolute inset-0">
              <div className="absolute left-[8%] top-[24%] w-[30%] h-[55%] rounded-[40%_60%_55%_45%] bg-charcoal-light/40 blur-sm" />
              <div className="absolute left-[42%] top-[18%] w-[18%] h-[40%] rounded-[55%_45%_50%_50%] bg-charcoal-light/40 blur-sm" />
              <div className="absolute left-[55%] top-[28%] w-[28%] h-[55%] rounded-[60%_40%_45%_55%] bg-charcoal-light/40 blur-sm" />
              <div className="absolute left-[80%] top-[40%] w-[14%] h-[45%] rounded-[50%_50%_45%_55%] bg-charcoal-light/40 blur-sm" />
            </div>

            {/* Pulses */}
            {cities.map((c, i) => {
              const p = positions[c.slug];
              if (!p) return null;
              return (
                <motion.div
                  key={c.id}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.06 }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group"
                  style={{ left: `${p.x}%`, top: `${p.y}%` }}
                >
                  <Link
                    href={`/cities/${c.slug}`}
                    className="relative flex flex-col items-center"
                  >
                    <span className="relative flex h-3 w-3">
                      <span
                        className={`absolute inset-0 rounded-full animate-ping-soft ${demandColor(
                          c.demandLevel
                        )} opacity-70`}
                      />
                      <span
                        className={`relative h-3 w-3 rounded-full ring-2 ring-ink ${demandColor(
                          c.demandLevel
                        )}`}
                      />
                    </span>
                    <span className="mt-2 text-[10px] uppercase tracking-[0.18em] text-ivory-soft group-hover:text-champagne transition-colors whitespace-nowrap">
                      {c.name}
                    </span>
                    {/* tooltip */}
                    <span className="pointer-events-none absolute top-7 -translate-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <span className="block w-44 mt-1 rounded-lg bg-ink/95 ring-1 ring-smoke backdrop-blur p-3 text-left">
                        <span className="block text-[9px] uppercase tracking-[0.22em] text-champagne">
                          {c.demandLevel}
                        </span>
                        <span className="block font-display text-base text-ivory mt-0.5">
                          {c.name}
                        </span>
                        <span className="block text-[10px] text-ivory-soft mt-1 leading-relaxed">
                          {c.signalNote}
                        </span>
                      </span>
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[10px] uppercase tracking-[0.22em]">
            {[
              { label: "High Demand", color: "bg-champagne" },
              { label: "Members First", color: "bg-velvet-bright" },
              { label: "Rising", color: "bg-emerald-300" },
              { label: "Quiet", color: "bg-ivory-soft" },
            ].map((l) => (
              <span
                key={l.label}
                className="inline-flex items-center gap-2 text-ivory-soft"
              >
                <span className={`h-1.5 w-1.5 rounded-full ${l.color}`} />
                {l.label}
              </span>
            ))}
            <span className="ml-auto text-ivory-dim">Sample positions · concept</span>
          </div>
        </div>
      </div>
    </section>
  );
}

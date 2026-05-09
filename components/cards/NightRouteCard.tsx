"use client";

import { motion } from "framer-motion";
import { UtensilsCrossed, Wine, Music, DoorClosed } from "lucide-react";

const stops = [
  {
    icon: UtensilsCrossed,
    time: "8:30 PM",
    label: "Dinner",
    detail: "Private dining wing, four-course tasting.",
  },
  {
    icon: Wine,
    time: "10:45 PM",
    label: "Rooftop",
    detail: "Skyline terrace, post-dinner pause.",
  },
  {
    icon: Music,
    time: "12:15 AM",
    label: "Lounge",
    detail: "Late-tempo room, reserved booth.",
  },
  {
    icon: DoorClosed,
    time: "2:00 AM",
    label: "Private Room",
    detail: "Members floor, quiet close.",
  },
];

export function NightRouteCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
      className="relative rounded-2xl border border-smoke bg-charcoal/60 backdrop-blur-md p-6 md:p-8 overflow-hidden"
    >
      <div className="absolute -top-32 -right-32 w-72 h-72 rounded-full bg-champagne/[0.06] blur-3xl pointer-events-none" />

      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-[10px] uppercase tracking-[0.32em] text-champagne">
            Night Route · Sample
          </p>
          <h3 className="mt-2 font-display text-2xl md:text-[28px] tracking-tight text-ivory">
            Dinner → Rooftop → Lounge → Private Room
          </h3>
        </div>
        <span className="hidden md:inline-flex text-[10px] uppercase tracking-[0.22em] text-ivory-soft ring-1 ring-smoke bg-charcoal-light/60 rounded-full px-2.5 py-1">
          Concierge plan
        </span>
      </div>

      <ol className="mt-6 grid gap-3">
        {stops.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.li
              key={s.label}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.08, ease: [0.22, 0.61, 0.36, 1] }}
              className="relative flex items-start gap-4 rounded-xl border border-smoke/70 bg-charcoal-light/40 p-4 hover:border-champagne/30 transition-colors"
            >
              {i < stops.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-[27px] top-12 bottom-[-12px] w-px bg-gradient-to-b from-champagne/40 to-transparent"
                />
              )}
              <span className="relative h-9 w-9 shrink-0 rounded-full bg-charcoal flex items-center justify-center ring-1 ring-champagne/40 text-champagne">
                <Icon className="w-4 h-4" strokeWidth={1.5} />
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-display text-lg leading-none tracking-tight text-ivory">
                    {s.label}
                  </p>
                  <span className="font-mono text-[11px] tracking-[0.18em] text-ivory-soft">
                    {s.time}
                  </span>
                </div>
                <p className="mt-1.5 text-xs text-ivory-soft leading-relaxed">
                  {s.detail}
                </p>
              </div>
            </motion.li>
          );
        })}
      </ol>

      <div className="mt-6 pt-5 border-t border-smoke/60 flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-ivory-dim">
        <span>One request, four stops</span>
        <span className="text-champagne">Routed by city, vibe, party size</span>
      </div>
    </motion.div>
  );
}

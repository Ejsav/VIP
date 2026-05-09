"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Sparkles,
  Wine,
  Clock,
  Users,
  Crown,
  ArrowUpRight,
  Lock,
} from "lucide-react";

// A cinematic, fictional "product dashboard" used in the hero.
// Pure UI mock — no real data, no live state. Establishes that this is a product, not a page.
export function ProductDashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
      className="relative w-full"
    >
      {/* Outer frame */}
      <div className="relative rounded-3xl border border-smoke bg-charcoal/70 backdrop-blur-2xl p-3 md:p-4 shadow-panel">
        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-champagne/60 to-transparent" />
        <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-champagne/[0.08] to-transparent pointer-events-none" />

        {/* Top bar */}
        <div className="flex items-center justify-between px-3 py-2">
          <div className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-velvet/60" />
            <span className="h-2 w-2 rounded-full bg-champagne/60" />
            <span className="h-2 w-2 rounded-full bg-emerald-300/40" />
            <span className="ml-3 text-[10px] uppercase tracking-[0.22em] text-ivory-dim">
              afterlist · console · request flow
            </span>
          </div>
          <span className="text-[10px] uppercase tracking-[0.22em] text-ivory-dim hidden md:inline">
            v1.0 · concept
          </span>
        </div>

        {/* Body grid */}
        <div className="rounded-2xl bg-ink/70 border border-smoke/70 overflow-hidden">
          <div className="grid grid-cols-12 gap-px bg-smoke/60">
            {/* Left rail */}
            <aside className="col-span-12 md:col-span-3 bg-ink/90 p-4 md:p-5">
              <p className="text-[9px] uppercase tracking-[0.32em] text-champagne mb-3">
                Network
              </p>
              <ul className="space-y-1.5">
                {["Miami", "New York", "Las Vegas", "Los Angeles", "London", "Dubai"].map(
                  (c, i) => (
                    <li
                      key={c}
                      className={`flex items-center justify-between text-xs px-2.5 py-2 rounded-lg ${
                        i === 0
                          ? "bg-champagne/[0.08] text-ivory ring-1 ring-champagne/30"
                          : "text-ivory-soft hover:text-ivory"
                      }`}
                    >
                      <span className="inline-flex items-center gap-2">
                        <MapPin className="w-3 h-3" strokeWidth={1.5} />
                        {c}
                      </span>
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          i === 0
                            ? "bg-champagne shadow-[0_0_8px_rgba(201,169,97,0.7)]"
                            : i === 2
                            ? "bg-champagne/70"
                            : i === 4
                            ? "bg-velvet-bright/70"
                            : "bg-ivory-dim/40"
                        }`}
                      />
                    </li>
                  )
                )}
              </ul>

              <div className="mt-5 pt-4 border-t border-smoke/60">
                <p className="text-[9px] uppercase tracking-[0.32em] text-ivory-dim mb-2">
                  Membership
                </p>
                <div className="flex items-center justify-between rounded-lg bg-charcoal-light/40 ring-1 ring-velvet/30 px-2.5 py-2">
                  <span className="inline-flex items-center gap-2 text-xs text-ivory">
                    <Crown className="w-3.5 h-3.5 text-champagne" strokeWidth={1.5} />
                    Black Card
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.22em] text-velvet-bright">
                    Active
                  </span>
                </div>
              </div>
            </aside>

            {/* Main column */}
            <main className="col-span-12 md:col-span-6 bg-ink p-4 md:p-5">
              <div className="flex items-center justify-between mb-3">
                <p className="text-[9px] uppercase tracking-[0.32em] text-champagne">
                  Tonight · Miami
                </p>
                <span className="text-[9px] uppercase tracking-[0.22em] text-ivory-dim">
                  3 active drops
                </span>
              </div>

              {/* Active drop */}
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
                className="rounded-xl bg-charcoal/80 ring-1 ring-champagne/30 p-4 relative overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-champagne/[0.08] blur-2xl" />
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-champagne ring-1 ring-champagne/30 bg-charcoal-light/40 rounded-full px-2.5 py-1">
                    <span className="relative h-1.5 w-1.5">
                      <span className="absolute inset-0 rounded-full bg-champagne animate-ping-soft" />
                      <span className="relative h-1.5 w-1.5 rounded-full bg-champagne" />
                    </span>
                    Limited Requests
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.18em] text-orange-300 inline-flex items-center gap-1">
                    <Clock className="w-3 h-3" strokeWidth={1.5} />
                    16h left
                  </span>
                </div>
                <p className="mt-3 font-display text-xl text-ivory leading-tight">
                  Noir House · Private Table
                </p>
                <p className="text-[11px] text-ivory-soft mt-1">
                  Saturday · Party of 6 to 10 · Late tempo
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex -space-x-1.5">
                    {[1, 2, 3].map((i) => (
                      <span
                        key={i}
                        className="h-5 w-5 rounded-full ring-2 ring-ink bg-gradient-to-br from-champagne/60 to-velvet/60"
                      />
                    ))}
                    <span className="ml-2.5 text-[10px] tracking-[0.18em] text-ivory-soft uppercase">
                      Saved by 12
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-champagne text-obsidian px-2.5 py-1 text-[9px] uppercase tracking-[0.22em] font-medium">
                    Request <ArrowUpRight className="w-3 h-3" strokeWidth={1.5} />
                  </span>
                </div>
              </motion.div>

              {/* Smaller drop */}
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.05, ease: [0.22, 0.61, 0.36, 1] }}
                className="mt-3 rounded-xl bg-charcoal/60 ring-1 ring-smoke p-3"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-ivory-dim">
                      Friday · Rooftop
                    </p>
                    <p className="font-display text-base text-ivory leading-tight mt-0.5 truncate">
                      Atlas Roof · Sunset cabana
                    </p>
                  </div>
                  <span className="text-[9px] uppercase tracking-[0.22em] text-velvet-bright ring-1 ring-velvet/30 bg-charcoal-light/40 rounded-full px-2 py-1 shrink-0">
                    Members First
                  </span>
                </div>
              </motion.div>

              {/* Request progress */}
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.2, ease: [0.22, 0.61, 0.36, 1] }}
                className="mt-4 pt-4 border-t border-smoke/60"
              >
                <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.22em] text-ivory-dim mb-2">
                  <span>Active request</span>
                  <span className="text-champagne">Step 5 of 7</span>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                    <span
                      key={i}
                      className={`h-1 flex-1 rounded-full ${
                        i <= 5 ? "bg-champagne" : "bg-smoke"
                      }`}
                    />
                  ))}
                </div>
                <div className="mt-3 flex items-center justify-between rounded-lg bg-charcoal-light/40 ring-1 ring-smoke px-3 py-2.5">
                  <span className="text-xs text-ivory inline-flex items-center gap-2">
                    <Wine className="w-3.5 h-3.5 text-champagne" strokeWidth={1.5} />
                    Private Table · Party of 8
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.22em] text-ivory-soft">
                    Budget tier
                  </span>
                </div>
              </motion.div>
            </main>

            {/* Right rail */}
            <aside className="col-span-12 md:col-span-3 bg-ink/95 p-4 md:p-5">
              <p className="text-[9px] uppercase tracking-[0.32em] text-champagne mb-3">
                Demand signal
              </p>
              <div className="space-y-2.5">
                {[
                  { city: "Miami", level: "High", color: "text-champagne", bar: 88 },
                  { city: "New York", level: "Members", color: "text-velvet-bright", bar: 72 },
                  { city: "Vegas", level: "High", color: "text-champagne", bar: 81 },
                  { city: "London", level: "Members", color: "text-velvet-bright", bar: 64 },
                  { city: "Ibiza", level: "Rising", color: "text-emerald-300", bar: 52 },
                ].map((d) => (
                  <div key={d.city}>
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.18em]">
                      <span className="text-ivory-soft">{d.city}</span>
                      <span className={d.color}>{d.level}</span>
                    </div>
                    <div className="mt-1 h-1 rounded-full bg-smoke overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${d.bar}%` }}
                        transition={{ duration: 1.4, delay: 1.0, ease: [0.22, 0.61, 0.36, 1] }}
                        className="h-full bg-gradient-to-r from-champagne/60 to-champagne"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-smoke/60">
                <p className="text-[9px] uppercase tracking-[0.32em] text-ivory-dim mb-2">
                  Private review
                </p>
                <div className="rounded-lg bg-charcoal-light/40 ring-1 ring-velvet/30 p-3">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-xs text-ivory">
                      <Lock className="w-3 h-3 text-velvet-bright" strokeWidth={1.5} />
                      Velvet Room
                    </span>
                    <Sparkles className="w-3 h-3 text-champagne" strokeWidth={1.5} />
                  </div>
                  <p className="mt-1.5 text-[10px] text-ivory-soft leading-relaxed">
                    Routed for member review. Decision window 48h.
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-smoke/60">
                <p className="text-[9px] uppercase tracking-[0.32em] text-ivory-dim mb-2">
                  Group profile
                </p>
                <div className="flex items-center gap-2 text-xs text-ivory-soft">
                  <Users className="w-3.5 h-3.5 text-champagne" strokeWidth={1.5} />
                  <span>8 guests · 4:4 ratio</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* Reflection */}
      <div
        aria-hidden
        className="hidden md:block absolute -bottom-24 left-8 right-8 h-24 bg-gradient-to-b from-champagne/[0.06] to-transparent blur-xl rounded-full"
      />
    </motion.div>
  );
}

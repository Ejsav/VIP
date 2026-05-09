"use client";

import { motion } from "framer-motion";
import { MapPin, Sparkles, Users, FileCheck, Send } from "lucide-react";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { LuxuryLink } from "@/components/ui/LuxuryButton";

const steps = [
  {
    n: "01",
    icon: MapPin,
    title: "Choose your city",
    body: "Filter by mood, lead time, and access type. Each city carries its own demand signal and best-night data.",
  },
  {
    n: "02",
    icon: Sparkles,
    title: "Pick the access style",
    body: "Guest list, private table, rooftop, private room, birthday, group entry, dinner-to-club, or full concierge plan.",
  },
  {
    n: "03",
    icon: Users,
    title: "Submit party details",
    body: "Date, party size, occasion, vibe, budget tier, and contact details. The form qualifies as it routes.",
  },
  {
    n: "04",
    icon: FileCheck,
    title: "Review the request",
    body: "A clean summary screen surfaces what was selected, what's missing, and how the request would be routed.",
  },
  {
    n: "05",
    icon: Send,
    title: "Receive a fictional confirmation",
    body: "A polished demo confirmation explains how a real platform would route, qualify, and respond.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-20 md:py-28 border-t border-smoke/40"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <MotionReveal>
          <div className="max-w-3xl">
            <p className="text-[10px] uppercase tracking-[0.32em] text-champagne mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-champagne/60" />
              How it works
            </p>
            <h2 className="font-display text-4xl md:text-6xl leading-[0.95] tracking-tightest text-ivory">
              From interest to request{" "}
              <span className="italic champagne-text">in one premium flow.</span>
            </h2>
            <p className="mt-5 text-base text-ivory-soft leading-relaxed">
              The Afterlist demonstrates how a luxury lead capture and booking system
              could move a guest from city to confirmed request without ever feeling
              like a form.
            </p>
          </div>
        </MotionReveal>

        <ol className="mt-14 md:mt-20 grid gap-3 md:gap-4">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 0.61, 0.36, 1] }}
                className="group relative grid grid-cols-12 items-center gap-4 md:gap-6 rounded-2xl border border-smoke bg-charcoal/50 backdrop-blur-md px-5 md:px-7 py-5 md:py-6 hover:border-champagne/30 transition-colors"
              >
                <div className="col-span-2 md:col-span-1">
                  <span className="font-display text-2xl md:text-3xl text-ivory-dim group-hover:text-champagne transition-colors">
                    {s.n}
                  </span>
                </div>
                <div className="col-span-10 md:col-span-1 flex md:justify-center">
                  <span className="h-9 w-9 rounded-full ring-1 ring-smoke flex items-center justify-center bg-charcoal-light/60 text-champagne group-hover:ring-champagne/40 transition-colors">
                    <Icon className="w-4 h-4" strokeWidth={1.5} />
                  </span>
                </div>
                <div className="col-span-12 md:col-span-4">
                  <h3 className="font-display text-xl md:text-2xl tracking-tight text-ivory">
                    {s.title}
                  </h3>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <p className="text-sm text-ivory-soft leading-relaxed">{s.body}</p>
                </div>
              </motion.li>
            );
          })}
        </ol>

        <div className="mt-12 flex flex-wrap items-center gap-3">
          <LuxuryLink href="/request" arrow>
            Start a request
          </LuxuryLink>
          <LuxuryLink href="/how-it-works" variant="ghost" arrow>
            Read the full flow
          </LuxuryLink>
        </div>
      </div>
    </section>
  );
}

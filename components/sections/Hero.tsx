"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { LuxuryLink } from "@/components/ui/LuxuryButton";
import { ConceptBadge } from "@/components/ui/ConceptBadge";
import { VerticalSwitcher } from "@/components/system/VerticalSwitcher";
import { useVertical } from "@/lib/VerticalContext";
import { ProductDashboardMockup } from "./ProductDashboardMockup";

const proofPoints = [
  "Luxury UX",
  "Marketplace flow",
  "Conversion strategy",
  "Fictional product system",
];

export function Hero() {
  const { vertical, isAdapted } = useVertical();
  const v = vertical;

  return (
    <section className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden">
      {/* Vignettes */}
      <div className="absolute inset-x-0 top-0 h-[80vh] bg-[radial-gradient(ellipse_at_top,rgba(201,169,97,0.06),transparent_55%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative">
        <div className="flex flex-col items-start gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <ConceptBadge />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-champagne"
          >
            <span className="h-px w-8 bg-champagne/60" />
            <span>The Afterlist</span>
            <span className="text-ivory-dim">/</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={v.id}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.3 }}
                className="text-ivory-soft"
              >
                {v.hero.eyebrow}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] }}
            className="font-display text-[clamp(2.6rem,8vw,6.5rem)] leading-[0.95] tracking-tightest text-ivory max-w-5xl"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={v.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
                className="block"
              >
                {v.hero.titleA}
                <br />
                <span className="champagne-text italic">{v.hero.titleAccent}</span>{" "}
                {v.hero.titleB}
              </motion.span>
            </AnimatePresence>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
            className="max-w-2xl text-base md:text-lg text-ivory-soft leading-relaxed"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={v.id}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.4 }}
                className="block"
              >
                {v.hero.description} A fictional product concept by{" "}
                <span className="text-ivory">Eric Jokl</span>.
              </motion.span>
            </AnimatePresence>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
            className="flex flex-wrap items-center gap-3"
          >
            <LuxuryLink href="/request" arrow>
              {v.hero.primaryCta}
            </LuxuryLink>
            <LuxuryLink href="/experiences" variant="secondary" arrow>
              {v.hero.secondaryCta}
            </LuxuryLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
            className="mt-2 md:mt-4 max-w-3xl w-full"
          >
            <VerticalSwitcher />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.7 }}
            className="mt-4 md:mt-6 flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            {proofPoints.map((p, i) => (
              <div key={p} className="flex items-center gap-2.5">
                {i > 0 && (
                  <span aria-hidden className="hidden sm:inline-block h-3 w-px bg-smoke" />
                )}
                <span className="h-1 w-1 rounded-full bg-champagne/70" />
                <span className="text-[11px] uppercase tracking-[0.22em] text-ivory-soft">
                  {p}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dashboard mockup */}
        <div className="mt-14 md:mt-20 relative">
          <ProductDashboardMockup />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 md:mt-24 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[11px] uppercase tracking-[0.24em] text-ivory-dim"
        >
          <div className="flex items-center gap-3">
            <ArrowDown className="w-3.5 h-3.5 animate-pulse" strokeWidth={1.5} />
            <span>
              {isAdapted
                ? `Re-skinned for ${v.name.toLowerCase()} · same matcher, same primitives`
                : "Eight cities · One request flow · Three membership tiers"}
            </span>
          </div>
          <span className="hidden md:inline">Concept · v2.0 · By Eric Jokl</span>
        </motion.div>
      </div>
    </section>
  );
}

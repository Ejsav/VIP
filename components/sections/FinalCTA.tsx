"use client";

import { AnimatePresence, motion } from "framer-motion";
import { LuxuryLink } from "@/components/ui/LuxuryButton";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { useVertical } from "@/lib/VerticalContext";

export function FinalCTA() {
  const { vertical: v } = useVertical();
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,97,0.08),transparent_55%)] pointer-events-none" />
      <div className="absolute inset-x-0 top-0 hairline" />

      <div className="max-w-5xl mx-auto px-5 md:px-8 text-center relative">
        <MotionReveal>
          <p className="text-[10px] uppercase tracking-[0.32em] text-champagne mb-6 inline-flex items-center gap-3">
            <span className="h-px w-8 bg-champagne/60" />
            <AnimatePresence mode="wait">
              <motion.span
                key={v.id}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {v.finalCta.eyebrow}
              </motion.span>
            </AnimatePresence>
            <span className="h-px w-8 bg-champagne/60" />
          </p>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tightest text-ivory">
            <AnimatePresence mode="wait">
              <motion.span
                key={v.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.5 }}
                className="block"
              >
                <span className="italic champagne-text">{v.finalCta.title}</span>
              </motion.span>
            </AnimatePresence>
          </h2>
          <p className="mt-7 max-w-2xl mx-auto text-base md:text-lg text-ivory-soft leading-relaxed">
            <AnimatePresence mode="wait">
              <motion.span
                key={v.id}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.4 }}
                className="block"
              >
                {v.finalCta.description}
              </motion.span>
            </AnimatePresence>
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <LuxuryLink href="/request" arrow size="lg">
              {v.hero.primaryCta}
            </LuxuryLink>
            <LuxuryLink href="/case-study" variant="secondary" arrow size="lg">
              View Case Study
            </LuxuryLink>
          </div>
          <p className="mt-8 text-[11px] uppercase tracking-[0.24em] text-ivory-dim">
            Fictional product concept by Eric Jokl · Sample data only
          </p>
        </MotionReveal>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { ArrowUpRight, Clock, Users, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { featuredExperiences } from "@/data/experiences";
import { ExperienceCard } from "@/components/experience/ExperienceCard";
import { useVertical } from "@/lib/VerticalContext";
import type { VerticalSampleCard } from "@/lib/verticals";
import { cn } from "@/lib/cn";

export function CuratedExperiences() {
  const { vertical: v, id, isAdapted } = useVertical();
  const samples = v.curated.samples;

  return (
    <section className="relative max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-36">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
        className="flex items-end justify-between gap-6 flex-wrap mb-10 md:mb-14"
      >
        <div className="max-w-2xl">
          <p className="text-[10px] uppercase tracking-[0.32em] text-champagne mb-3 flex items-center gap-3">
            <span className="h-px w-8 bg-champagne/60" />
            <AnimatePresence mode="wait">
              <motion.span
                key={id}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {v.curated.eyebrow}
              </motion.span>
            </AnimatePresence>
          </p>
          <h2 className="font-display text-4xl md:text-6xl tracking-tightest text-ivory leading-[1.0]">
            <AnimatePresence mode="wait">
              <motion.span
                key={id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.5 }}
                className="block"
              >
                {v.curated.titleA}{" "}
                <span className="italic champagne-text">{v.curated.titleAccent}</span>
              </motion.span>
            </AnimatePresence>
          </h2>
          <p className="mt-4 text-base md:text-lg text-ivory-soft leading-relaxed">
            <AnimatePresence mode="wait">
              <motion.span
                key={id}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.4 }}
                className="block"
              >
                {v.curated.description}
              </motion.span>
            </AnimatePresence>
          </p>
        </div>
        <Link
          href="/experiences"
          className="hidden md:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-ivory-soft hover:text-champagne transition-colors"
        >
          {isAdapted ? "Nightlife inventory →" : "All experiences"}
          <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
        </Link>
      </motion.div>

      <AnimatePresence mode="wait">
        {isAdapted && samples.length > 0 ? (
          <motion.div
            key={`samples-${id}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 auto-rows-fr"
          >
            {samples.map((s, i) => (
              <SampleCard key={`${id}-${s.name}`} card={s} index={i} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="nightlife"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 auto-rows-fr"
          >
            {featuredExperiences.slice(0, 6).map((exp, i) => (
              <ExperienceCard key={exp.id} experience={exp} index={i} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-10 md:hidden">
        <Link
          href="/experiences"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-champagne"
        >
          See all experiences
          <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
        </Link>
      </div>

      {isAdapted && (
        <div className="mt-10 rounded-2xl border border-champagne/20 bg-champagne/[0.04] backdrop-blur-md p-5 md:p-6 max-w-3xl">
          <p className="text-[10px] uppercase tracking-[0.32em] text-champagne mb-2 flex items-center gap-2">
            <Sparkles className="w-3 h-3" strokeWidth={1.5} />
            Re-skin demonstration
          </p>
          <p className="text-sm md:text-base text-ivory-soft leading-relaxed">
            These cards are sample inventory for the{" "}
            <span className="text-ivory">{v.name.toLowerCase()}</span> vertical. The
            same data shape, marketplace primitives, request flow, and{" "}
            <span className="text-ivory">matchAccess</span> engine power them. Reset to{" "}
            <span className="text-ivory">Nightlife</span> for the deep portfolio
            inventory and detail pages.
          </p>
        </div>
      )}
    </section>
  );
}

function SampleCard({
  card,
  index,
}: {
  card: VerticalSampleCard;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: (index % 6) * 0.06,
        ease: [0.22, 0.61, 0.36, 1],
      }}
      className="group h-full"
    >
      <div className="relative flex flex-col h-full rounded-2xl border border-smoke bg-charcoal/55 backdrop-blur-md overflow-hidden glow-border">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        <div
          className={cn(
            "relative overflow-hidden border-b border-smoke/60 aspect-[16/9]"
          )}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,169,97,0.18),transparent_55%),radial-gradient(ellipse_at_80%_80%,rgba(122,20,40,0.16),transparent_55%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-charcoal/30 to-transparent" />
          <div className="absolute inset-0 flex items-end p-5">
            <div className="w-full flex items-end justify-between gap-3">
              <span className="font-display text-[10px] uppercase tracking-[0.32em] text-champagne">
                {card.cityStyleName}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.22em] ring-1 ring-champagne/30 text-champagne bg-charcoal-light/60 backdrop-blur">
                {card.status}
              </span>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="font-display tracking-tightest text-ivory/[0.05] uppercase select-none whitespace-nowrap text-[5rem] md:text-[7rem]">
              {card.name.split(" ")[0]}
            </span>
          </div>
        </div>

        <div className="p-5 md:p-6 flex-1 flex flex-col">
          <h3 className="font-display tracking-tight text-ivory leading-tight text-2xl md:text-[26px]">
            {card.name}
          </h3>
          <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-ivory-soft">
            {card.accessTypeName}
          </p>
          <p className="mt-3 text-sm text-ivory-soft leading-relaxed line-clamp-2">
            {card.description}
          </p>

          <div className="mt-4 grid grid-cols-2 gap-3 text-[10px] uppercase tracking-[0.22em]">
            <div className="flex items-center gap-1.5 text-ivory-soft">
              <Users className="w-3 h-3 text-champagne" strokeWidth={1.5} />
              {card.groupFit}
            </div>
            <div className="flex items-center gap-1.5 text-ivory-soft">
              <Clock className="w-3 h-3 text-champagne" strokeWidth={1.5} />
              {card.arrivalWindow.split(" · ")[0]}
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-smoke/60 flex flex-wrap gap-1.5">
            {card.tags.slice(0, 3).map((t) => (
              <span
                key={t}
                className="text-[9px] uppercase tracking-[0.2em] text-ivory-soft bg-charcoal-light/60 ring-1 ring-smoke rounded-full px-2 py-0.5"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="px-5 md:px-6 py-4 border-t border-smoke/60 flex items-center justify-between gap-3">
          <p className="text-[10px] uppercase tracking-[0.22em] text-ivory-dim">
            Sample re-skin · same primitives
          </p>
          <span className="shrink-0 inline-flex items-center gap-1.5 rounded-full ring-1 ring-champagne/30 bg-charcoal-light/40 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-champagne">
            <Sparkles className="w-3 h-3" strokeWidth={1.5} />
            Demo card
          </span>
        </div>
      </div>
    </motion.div>
  );
}

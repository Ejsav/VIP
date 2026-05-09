"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Users, Sparkles } from "lucide-react";
import type { Experience, ExperienceStatus } from "@/lib/types";
import { cn } from "@/lib/cn";

const statusStyle: Record<
  ExperienceStatus,
  { ring: string; text: string; bg: string; pulse?: boolean }
> = {
  Curated: {
    ring: "ring-champagne/30",
    text: "text-champagne",
    bg: "bg-charcoal-light/60",
  },
  "Limited Window": {
    ring: "ring-orange-400/30",
    text: "text-orange-300",
    bg: "bg-charcoal-light/60",
    pulse: true,
  },
  "Priority Route": {
    ring: "ring-champagne/40",
    text: "text-champagne-bright",
    bg: "bg-champagne/[0.07]",
  },
  "Concierge Pick": {
    ring: "ring-velvet/40",
    text: "text-velvet-bright",
    bg: "bg-charcoal-light/60",
  },
  "Private Hold": {
    ring: "ring-velvet/40",
    text: "text-velvet-bright",
    bg: "bg-charcoal-light/60",
  },
  "High Demand": {
    ring: "ring-champagne/30",
    text: "text-champagne",
    bg: "bg-charcoal-light/60",
    pulse: true,
  },
};

export function ExperienceCard({
  experience,
  index = 0,
  variant = "default",
}: {
  experience: Experience;
  index?: number;
  variant?: "default" | "compact" | "feature";
}) {
  const s = statusStyle[experience.status];
  const isFeature = variant === "feature";
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{
        duration: 0.75,
        delay: (index % 6) * 0.05,
        ease: [0.22, 0.61, 0.36, 1],
      }}
      whileHover={{ y: -3 }}
      className={cn("group h-full", isFeature && "lg:col-span-2")}
    >
      <Link
        href={`/experiences/${experience.slug}`}
        className={cn(
          "relative flex flex-col h-full rounded-2xl border bg-charcoal/55 backdrop-blur-md overflow-hidden glow-border transition-colors",
          isFeature ? "border-champagne/30" : "border-smoke"
        )}
      >
        {/* Edge glow */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        {isFeature && (
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/60 to-transparent" />
        )}

        {/* Visual plate */}
        <div
          className={cn(
            "relative overflow-hidden border-b border-smoke/60",
            isFeature ? "aspect-[16/8] md:aspect-[16/6]" : "aspect-[16/9]"
          )}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,169,97,0.18),transparent_55%),radial-gradient(ellipse_at_80%_80%,rgba(122,20,40,0.16),transparent_55%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-charcoal/30 to-transparent" />
          <div className="absolute inset-0 flex items-end p-5 md:p-6">
            <div className="w-full flex items-end justify-between gap-3">
              <span className="font-display text-[10px] uppercase tracking-[0.32em] text-champagne">
                {experience.cityStyleName}
              </span>
              <span
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.22em] ring-1 backdrop-blur",
                  s.ring,
                  s.text,
                  s.bg
                )}
              >
                {s.pulse && (
                  <span className="relative h-1.5 w-1.5">
                    <span className="absolute inset-0 rounded-full bg-current animate-ping-soft opacity-70" />
                    <span className="relative h-1.5 w-1.5 rounded-full bg-current" />
                  </span>
                )}
                {experience.status}
              </span>
            </div>
          </div>
          {/* Echo of experience name as background type */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span
              className={cn(
                "font-display tracking-tightest text-ivory/[0.05] uppercase select-none whitespace-nowrap",
                isFeature ? "text-[7rem] md:text-[12rem]" : "text-[5rem] md:text-[7rem]"
              )}
            >
              {experience.name.split(" ")[0]}
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="p-5 md:p-6 flex-1 flex flex-col">
          <h3
            className={cn(
              "font-display tracking-tight text-ivory leading-tight",
              isFeature ? "text-3xl md:text-4xl" : "text-2xl md:text-[26px]"
            )}
          >
            {experience.name}
          </h3>
          <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-ivory-soft">
            {experience.accessTypeName} · {experience.atmosphere}
          </p>

          <p
            className={cn(
              "mt-3 text-ivory-soft leading-relaxed",
              isFeature ? "text-base line-clamp-3" : "text-sm line-clamp-2"
            )}
          >
            {experience.description}
          </p>

          <div className="mt-4 grid grid-cols-2 gap-3 text-[10px] uppercase tracking-[0.22em]">
            <div className="flex items-center gap-1.5 text-ivory-soft">
              <Users className="w-3 h-3 text-champagne" strokeWidth={1.5} />
              {experience.groupFit[0]}–{experience.groupFit[experience.groupFit.length - 1]}
            </div>
            <div className="flex items-center gap-1.5 text-ivory-soft">
              <Clock className="w-3 h-3 text-champagne" strokeWidth={1.5} />
              {experience.arrivalWindow.split(" – ")[0]}
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-smoke/60 flex flex-wrap gap-1.5">
            {experience.tags.slice(0, 3).map((t) => (
              <span
                key={t}
                className="text-[9px] uppercase tracking-[0.2em] text-ivory-soft bg-charcoal-light/60 ring-1 ring-smoke rounded-full px-2 py-0.5"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 md:px-6 py-4 border-t border-smoke/60 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-[0.22em] text-ivory-dim">
              Hosted spend
            </p>
            <p className="text-xs text-ivory truncate mt-0.5">
              {experience.spendRange[0]}
              {experience.spendRange.length > 1 ? " +" : ""}
            </p>
          </div>
          <span className="shrink-0 inline-flex items-center gap-1.5 rounded-full ring-1 ring-champagne/30 bg-charcoal-light/40 px-3.5 py-1.5 text-[10px] uppercase tracking-[0.22em] text-champagne group-hover:bg-champagne group-hover:text-obsidian transition-colors">
            <Sparkles className="w-3 h-3" strokeWidth={1.5} />
            View experience
            <ArrowUpRight
              className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={1.5}
            />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

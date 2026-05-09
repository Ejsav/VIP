"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  ArrowUpRight,
  Clock,
  Users,
  DollarSign,
  CheckCircle2,
  Lock,
} from "lucide-react";
import type { MatchResult } from "@/lib/types";
import { cn } from "@/lib/cn";

const confidenceStyle = {
  "Priority Match": {
    ring: "ring-champagne/50",
    text: "text-champagne-bright",
    bg: "bg-champagne/[0.08]",
    pulse: true,
  },
  "Strong Match": {
    ring: "ring-champagne/30",
    text: "text-champagne",
    bg: "bg-charcoal-light/60",
    pulse: false,
  },
  "Light Match": {
    ring: "ring-smoke",
    text: "text-ivory-soft",
    bg: "bg-charcoal-light/40",
    pulse: false,
  },
} as const;

export function AccessMatch({
  match,
  variant = "panel",
}: {
  match: MatchResult;
  variant?: "panel" | "inline";
}) {
  const c = confidenceStyle[match.confidence];
  const isInline = variant === "inline";
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={match.experience.id}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
        className={cn(
          "relative rounded-3xl border bg-charcoal/70 backdrop-blur-xl overflow-hidden",
          isInline ? "border-smoke" : "border-champagne/30 shadow-glow-soft"
        )}
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne to-transparent" />
        <div className="absolute -top-32 -right-32 w-72 h-72 rounded-full bg-champagne/[0.07] blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-72 h-72 rounded-full bg-velvet/[0.06] blur-3xl pointer-events-none" />

        <div className="relative p-6 md:p-9">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <p className="text-[10px] uppercase tracking-[0.32em] text-champagne flex items-center gap-3">
                <span className="h-px w-8 bg-champagne/60" />
                Best fit · routed
              </p>
              <h3 className="mt-3 font-display text-3xl md:text-5xl tracking-tightest text-ivory leading-[1.0]">
                {match.experience.name}
              </h3>
              <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-ivory-soft">
                {match.experience.accessTypeName} · {match.experience.cityStyleName}
              </p>
            </div>
            <span
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] ring-1 backdrop-blur",
                c.ring,
                c.text,
                c.bg
              )}
            >
              {c.pulse && (
                <span className="relative h-1.5 w-1.5">
                  <span className="absolute inset-0 rounded-full bg-current animate-ping-soft opacity-70" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-current" />
                </span>
              )}
              {match.confidence}
            </span>
          </div>

          {/* Positioning */}
          <p className="mt-5 max-w-2xl text-base text-ivory-soft leading-relaxed">
            {match.experience.positioning}
          </p>

          {/* Details */}
          <div className="mt-7 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            <Detail
              icon={Clock}
              label="Suggested arrival"
              value={match.arrivalWindow}
            />
            <Detail icon={Users} label="Group fit" value={match.groupFitNote} />
            <Detail
              icon={DollarSign}
              label="Hosted spend"
              value={match.spendNote}
            />
          </div>

          {/* Why */}
          <div className="mt-7 pt-6 border-t border-smoke/60">
            <p className="text-[10px] uppercase tracking-[0.32em] text-ivory-dim mb-3 flex items-center gap-2">
              <Sparkles className="w-3 h-3 text-champagne" strokeWidth={1.5} />
              Why this matches
            </p>
            <ul className="grid gap-2">
              {match.why.map((w, i) => (
                <motion.li
                  key={`${match.experience.id}-w-${i}`}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
                  className="flex items-start gap-2.5 text-sm text-ivory-soft leading-relaxed"
                >
                  <CheckCircle2
                    className="w-4 h-4 text-champagne mt-0.5 shrink-0"
                    strokeWidth={1.5}
                  />
                  {w}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Tier note */}
          <div className="mt-7 flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-ivory-dim">
            <Lock className="w-3 h-3 text-velvet-bright" strokeWidth={1.5} />
            Routing under {match.experience.minTier} review · sample logic only
          </div>

          {/* CTA row */}
          {!isInline && (
            <div className="mt-8 pt-6 border-t border-smoke/60 flex items-center justify-between gap-3 flex-wrap">
              <Link
                href={`/experiences/${match.experience.slug}`}
                className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.22em] text-champagne hover:text-champagne-bright transition-colors"
              >
                View experience profile
                <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
              </Link>
              {match.alternates.length > 0 && (
                <span className="text-[10px] uppercase tracking-[0.22em] text-ivory-dim">
                  + {match.alternates.length} alternate route
                  {match.alternates.length > 1 ? "s" : ""} ready
                </span>
              )}
            </div>
          )}
        </div>

        {/* Alternates */}
        {!isInline && match.alternates.length > 0 && (
          <div className="border-t border-smoke/60 bg-ink/30 px-6 md:px-9 py-5">
            <p className="text-[10px] uppercase tracking-[0.32em] text-ivory-dim mb-3">
              Alternate routes
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
              {match.alternates.map((alt) => (
                <li key={alt.id}>
                  <Link
                    href={`/experiences/${alt.slug}`}
                    className="block rounded-xl border border-smoke/70 bg-charcoal-light/40 px-4 py-3 hover:border-champagne/30 transition-colors group"
                  >
                    <p className="text-[10px] uppercase tracking-[0.22em] text-ivory-dim group-hover:text-champagne transition-colors">
                      {alt.cityStyleName}
                    </p>
                    <p className="mt-0.5 font-display text-base text-ivory truncate">
                      {alt.name}
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-ivory-soft mt-1 truncate">
                      {alt.accessTypeName} · {alt.minTier}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

function Detail({
  icon: Icon,
  label,
  value,
}: {
  icon: any;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-smoke/60 bg-charcoal-light/40 px-4 py-3">
      <p className="text-[10px] uppercase tracking-[0.22em] text-ivory-dim flex items-center gap-1.5">
        <Icon className="w-3 h-3 text-champagne" strokeWidth={1.5} />
        {label}
      </p>
      <p className="mt-1.5 text-sm text-ivory leading-snug">{value}</p>
    </div>
  );
}

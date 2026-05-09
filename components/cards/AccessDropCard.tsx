"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Users, MapPin, ArrowUpRight } from "lucide-react";
import type { AccessDrop } from "@/lib/types";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { getAccessType } from "@/data/accessTypes";

function CountdownPill({ hoursLeft }: { hoursLeft: number }) {
  const isUrgent = hoursLeft <= 24;
  const days = Math.floor(hoursLeft / 24);
  const hrs = hoursLeft % 24;
  const label = days > 0 ? `${days}d ${hrs}h` : `${hrs}h`;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 ring-1 text-[10px] uppercase tracking-[0.18em] font-medium font-mono backdrop-blur ${
        isUrgent
          ? "text-orange-300 ring-orange-300/20 bg-charcoal-light/40"
          : "text-ivory ring-smoke bg-charcoal-light/50"
      }`}
    >
      <Clock className="w-3 h-3" strokeWidth={1.5} />
      {label} window
    </span>
  );
}

export function AccessDropCard({
  drop,
  index = 0,
  variant = "default",
}: {
  drop: AccessDrop;
  index?: number;
  variant?: "default" | "compact";
}) {
  const accessType = getAccessType(drop.accessType);
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 0.7, delay: (index % 6) * 0.05, ease: [0.22, 0.61, 0.36, 1] }}
      whileHover={{ y: -3 }}
      className="group h-full"
    >
      <article className="relative flex flex-col h-full rounded-2xl border border-smoke bg-charcoal/70 backdrop-blur-md overflow-hidden glow-border">
        {/* Edge glow */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Header */}
        <div className="p-5 md:p-6 pb-4 flex items-start justify-between gap-4">
          <div className="flex items-center gap-2 min-w-0">
            <StatusBadge status={drop.status} />
          </div>
          <CountdownPill hoursLeft={drop.hoursLeft} />
        </div>

        {/* Body */}
        <div className="px-5 md:px-6 pb-5 flex-1">
          <p className="text-[11px] uppercase tracking-[0.22em] text-champagne mb-2">
            {drop.dateLabel} · {accessType?.name ?? "Access"}
          </p>
          <h3 className="font-display text-2xl md:text-[26px] leading-tight tracking-tight text-ivory">
            {drop.venueName}
          </h3>
          <div className="mt-1 flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-ivory-soft">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3 h-3" strokeWidth={1.5} />
              {drop.cityName}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Users className="w-3 h-3" strokeWidth={1.5} />
              Party of {drop.partySize}
            </span>
          </div>
          {variant !== "compact" && (
            <p className="mt-3 text-sm text-ivory-soft leading-relaxed line-clamp-2">
              {drop.description}
            </p>
          )}
        </div>

        {/* Footer */}
        <div className="mt-auto px-5 md:px-6 py-4 border-t border-smoke/60 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-[0.22em] text-ivory-dim">Closes</p>
            <p className="text-xs text-ivory-soft truncate mt-0.5">{drop.deadline}</p>
          </div>
          <Link
            href={`/request?city=${drop.citySlug}&accessType=${drop.accessType}&drop=${drop.id}`}
            className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-champagne text-obsidian px-4 py-2 text-[10px] uppercase tracking-[0.22em] font-medium hover:bg-champagne-bright transition-colors"
          >
            {drop.ctaLabel}
            <ArrowUpRight className="w-3 h-3" strokeWidth={1.5} />
          </Link>
        </div>
      </article>
    </motion.div>
  );
}

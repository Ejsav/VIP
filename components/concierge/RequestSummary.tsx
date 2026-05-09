"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  MapPin,
  Wine,
  Users,
  DollarSign,
  Clock,
  Calendar,
  Star,
  Crown,
  ChevronDown,
} from "lucide-react";
import { useMemo, useState } from "react";
import type { ConciergeRequest } from "@/lib/types";
import { getCityStyle } from "@/data/cityStyles";
import { getAccessType } from "@/data/accessTypes";
import { matchAccess, requestSignalLabel } from "@/lib/matchAccess";
import { cn } from "@/lib/cn";

const tierIcon = {
  guest: Star,
  select: Sparkles,
  "black-card": Crown,
} as const;

export function RequestSummary({
  request,
  variant = "rail",
  className,
}: {
  request: ConciergeRequest;
  variant?: "rail" | "panel" | "mobile";
  className?: string;
}) {
  const [expanded, setExpanded] = useState(false);

  const cityStyle = getCityStyle(request.cityStyle);
  const access = request.accessType
    ? getAccessType(request.accessType)
    : undefined;
  const match = useMemo(() => matchAccess(request), [request]);
  const signal = requestSignalLabel(request);
  const TierIcon = tierIcon[request.tier ?? "guest"];

  const live = buildLiveLine({
    cityStyleName: cityStyle?.name,
    accessName: access?.name,
    atmosphere: request.atmosphere,
    groupSize: request.groupSize,
  });

  const rows = [
    {
      icon: MapPin,
      label: "Market style",
      value: cityStyle ? cityStyle.name : "—",
      sub: cityStyle?.shortLabel,
    },
    {
      icon: Sparkles,
      label: "Access type",
      value: access?.name ?? "—",
      sub: access?.short,
    },
    {
      icon: Wine,
      label: "Atmosphere",
      value: request.atmosphere || "—",
    },
    {
      icon: Users,
      label: "Group size",
      value: request.groupSize ? `Party of ${request.groupSize}` : "—",
    },
    {
      icon: Calendar,
      label: "Target date",
      value: request.date || "—",
    },
    {
      icon: DollarSign,
      label: "Spend range",
      value: request.spendRange || "—",
    },
    {
      icon: TierIcon,
      label: "Tier",
      value: tierLabel(request.tier),
    },
  ];

  const isMobile = variant === "mobile";

  return (
    <aside
      className={cn(
        "relative rounded-2xl border border-smoke bg-charcoal/60 backdrop-blur-xl overflow-hidden",
        variant === "rail" && "lg:sticky lg:top-28",
        className
      )}
    >
      {/* glow strip */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent" />
      <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-champagne/[0.06] blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="px-5 md:px-6 pt-5 md:pt-6 pb-4 relative">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[10px] uppercase tracking-[0.32em] text-champagne flex items-center gap-2">
            <Sparkles className="w-3 h-3" strokeWidth={1.5} />
            Live request
          </p>
          <SignalPill level={signal.level} pct={signal.pct} />
        </div>

        <p className="mt-3 font-display text-base md:text-lg text-ivory leading-snug">
          <AnimatePresence mode="wait">
            <motion.span
              key={live}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.4 }}
            >
              {live}
            </motion.span>
          </AnimatePresence>
        </p>
      </div>

      {/* Rows */}
      <div
        className={cn(
          isMobile && !expanded
            ? "max-h-0 overflow-hidden"
            : "max-h-[2000px]",
          "transition-all duration-500"
        )}
      >
        <div className="divide-y divide-smoke/40 border-t border-smoke/40">
          {rows.map((r) => {
            const Icon = r.icon;
            const filled = r.value !== "—";
            return (
              <div
                key={r.label}
                className="flex items-start gap-3 px-5 md:px-6 py-3"
              >
                <span
                  className={cn(
                    "h-7 w-7 rounded-full ring-1 flex items-center justify-center mt-0.5 shrink-0 transition-colors",
                    filled
                      ? "ring-champagne/40 text-champagne bg-charcoal-light/60"
                      : "ring-smoke text-ivory-dim bg-charcoal-light/30"
                  )}
                >
                  <Icon className="w-3.5 h-3.5" strokeWidth={1.5} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-ivory-dim">
                    {r.label}
                  </p>
                  <p
                    className={cn(
                      "text-sm leading-snug truncate",
                      filled ? "text-ivory" : "text-ivory-dim"
                    )}
                  >
                    {r.value}
                  </p>
                  {r.sub && filled && (
                    <p className="text-[11px] text-ivory-soft mt-0.5 truncate">
                      {r.sub}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Match preview */}
        {match && signal.pct >= 33 && (
          <div className="px-5 md:px-6 py-5 border-t border-smoke/40 bg-gradient-to-b from-transparent to-champagne/[0.03]">
            <div className="flex items-center justify-between gap-3 mb-2">
              <p className="text-[10px] uppercase tracking-[0.32em] text-champagne">
                Best fit forming
              </p>
              <span
                className={cn(
                  "text-[9px] uppercase tracking-[0.22em] rounded-full px-2 py-0.5 ring-1",
                  match.confidence === "Priority Match"
                    ? "ring-champagne/50 text-champagne-bright bg-champagne/10"
                    : match.confidence === "Strong Match"
                    ? "ring-champagne/30 text-champagne bg-charcoal-light/60"
                    : "ring-smoke text-ivory-soft bg-charcoal-light/40"
                )}
              >
                {match.confidence}
              </span>
            </div>
            <p className="font-display text-xl md:text-2xl tracking-tight text-ivory leading-tight">
              {match.experience.name}
            </p>
            <p className="text-[11px] uppercase tracking-[0.22em] text-ivory-soft mt-1">
              {match.experience.accessTypeName} · {match.experience.cityStyleName}
            </p>
            <p className="text-xs text-ivory-soft mt-2 leading-relaxed line-clamp-2">
              {match.experience.positioning}
            </p>
            <div className="mt-3 flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-ivory-dim">
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3 h-3" strokeWidth={1.5} />
                {match.experience.arrivalWindow.split(" – ")[0]}
              </span>
              <span>·</span>
              <span>{match.experience.minTier} routing</span>
            </div>
          </div>
        )}
      </div>

      {isMobile && (
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          className="w-full flex items-center justify-center gap-2 border-t border-smoke/40 py-3 text-[10px] uppercase tracking-[0.22em] text-ivory-soft hover:text-champagne transition-colors"
        >
          {expanded ? "Hide live summary" : "View live summary"}
          <ChevronDown
            className={cn(
              "w-3 h-3 transition-transform",
              expanded && "rotate-180"
            )}
            strokeWidth={1.5}
          />
        </button>
      )}
    </aside>
  );
}

function SignalPill({
  level,
  pct,
}: {
  level: "Light" | "Building" | "Strong";
  pct: number;
}) {
  const color =
    level === "Strong"
      ? "text-champagne ring-champagne/30"
      : level === "Building"
      ? "text-champagne/80 ring-smoke"
      : "text-ivory-soft ring-smoke";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.22em] rounded-full px-2 py-1 ring-1 bg-charcoal-light/40",
        color
      )}
    >
      <span className="relative h-12 w-px hidden">{pct}</span>
      <span className="font-mono">{pct}%</span>
      <span>{level} signal</span>
    </span>
  );
}

function buildLiveLine({
  cityStyleName,
  accessName,
  atmosphere,
  groupSize,
}: {
  cityStyleName?: string;
  accessName?: string;
  atmosphere?: string;
  groupSize?: string;
}) {
  if (!cityStyleName && !accessName && !atmosphere && !groupSize) {
    return "Choose a market style and access type to begin shaping the request.";
  }
  const parts: string[] = [];
  if (accessName) parts.push(accessName.toLowerCase());
  if (atmosphere) parts.push(atmosphere.split(" / ")[0].toLowerCase());
  const subject = parts.length ? parts.join(" · ") : "private access";
  const where = cityStyleName ? ` in ${cityStyleName}` : "";
  const who = groupSize ? ` for a party of ${groupSize}` : "";
  return `Your access profile is being shaped around ${subject}${who}${where}.`;
}

function tierLabel(t?: string) {
  if (!t) return "Guest";
  if (t === "guest") return "Guest";
  if (t === "select") return "Select";
  if (t === "black-card") return "Black Card";
  return "Guest";
}

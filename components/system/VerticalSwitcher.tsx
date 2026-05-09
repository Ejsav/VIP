"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Plane,
  Wine,
  Compass,
  RefreshCcw,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { useVertical } from "@/lib/VerticalContext";
import { VERTICAL_LIST, type VerticalId } from "@/lib/verticals";
import { cn } from "@/lib/cn";

const ICON: Record<VerticalId, any> = {
  nightlife: Sparkles,
  charter: Plane,
  restaurant: Wine,
  concierge: Compass,
};

export function VerticalSwitcher({
  variant = "inline",
  className,
}: {
  variant?: "inline" | "rail";
  className?: string;
}) {
  const { id, setVertical, isAdapted, vertical } = useVertical();

  if (variant === "rail") {
    return <FloatingRail id={id} setVertical={setVertical} />;
  }

  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-center justify-between mb-3 gap-3 flex-wrap">
        <p className="text-[10px] uppercase tracking-[0.32em] text-champagne flex items-center gap-3">
          <span className="h-px w-6 bg-champagne/60" />
          Re-skin the system
        </p>
        <div className="flex items-center gap-3">
          <span className="text-[10px] uppercase tracking-[0.22em] text-ivory-dim">
            Active mode
          </span>
          <AnimatePresence mode="wait">
            <motion.span
              key={id}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.3 }}
              className="text-[10px] uppercase tracking-[0.22em] text-ivory"
            >
              {vertical.name}
            </motion.span>
          </AnimatePresence>
          {isAdapted && (
            <button
              type="button"
              onClick={() => setVertical("nightlife")}
              className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.22em] text-ivory-dim hover:text-champagne transition-colors"
            >
              <RefreshCcw className="w-3 h-3" strokeWidth={1.5} />
              Reset
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 rounded-2xl border border-smoke bg-charcoal/50 backdrop-blur-md p-2">
        {VERTICAL_LIST.map((v) => {
          const Icon = ICON[v.id];
          const active = v.id === id;
          return (
            <button
              key={v.id}
              type="button"
              onClick={() => setVertical(v.id)}
              aria-pressed={active}
              className={cn(
                "relative rounded-xl px-3 py-3 md:py-4 text-left transition-all duration-300 overflow-hidden group",
                active
                  ? "bg-champagne/[0.07] ring-1 ring-champagne/40 shadow-glow-soft"
                  : "ring-1 ring-transparent hover:bg-charcoal-light/40 hover:ring-smoke"
              )}
            >
              {active && (
                <motion.span
                  layoutId="vertical-active-glow"
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne to-transparent"
                />
              )}
              <div className="flex items-center gap-2.5">
                <span
                  className={cn(
                    "h-8 w-8 rounded-full flex items-center justify-center ring-1 transition-colors shrink-0",
                    active
                      ? "bg-charcoal ring-champagne/40 text-champagne"
                      : "bg-charcoal-light/60 ring-smoke text-ivory-soft group-hover:text-champagne"
                  )}
                >
                  <Icon className="w-3.5 h-3.5" strokeWidth={1.5} />
                </span>
                <div className="min-w-0">
                  <p
                    className={cn(
                      "text-[10px] uppercase tracking-[0.22em] truncate",
                      active ? "text-champagne" : "text-ivory-soft"
                    )}
                  >
                    {v.shortLabel}
                  </p>
                  <p
                    className={cn(
                      "text-[11px] truncate mt-0.5",
                      active ? "text-ivory" : "text-ivory-dim"
                    )}
                  >
                    {v.accent.name}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
      <p className="mt-2.5 text-[10px] uppercase tracking-[0.22em] text-ivory-dim">
        Same data shape · same matcher · same UI primitives. Different vertical.
      </p>
    </div>
  );
}

function FloatingRail({
  id,
  setVertical,
}: {
  id: VerticalId;
  setVertical: (id: VerticalId) => void;
}) {
  const [open, setOpen] = useState(false);
  const Icon = ICON[id];
  const v = VERTICAL_LIST.find((x) => x.id === id) ?? VERTICAL_LIST[0];

  return (
    <div className="fixed bottom-5 right-5 z-40 hidden md:block">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-full right-0 mb-3 w-72 rounded-2xl border border-smoke bg-charcoal/85 backdrop-blur-2xl shadow-panel overflow-hidden"
          >
            <p className="px-4 pt-3 pb-2 text-[10px] uppercase tracking-[0.32em] text-champagne">
              Adapt the system
            </p>
            <ul className="py-1">
              {VERTICAL_LIST.map((opt) => {
                const I = ICON[opt.id];
                const active = opt.id === id;
                return (
                  <li key={opt.id}>
                    <button
                      type="button"
                      onClick={() => {
                        setVertical(opt.id);
                        setOpen(false);
                      }}
                      className={cn(
                        "w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors",
                        active
                          ? "bg-champagne/[0.07] text-ivory"
                          : "text-ivory-soft hover:bg-charcoal-light/40"
                      )}
                    >
                      <I className="w-3.5 h-3.5 text-champagne" strokeWidth={1.5} />
                      <div className="min-w-0">
                        <p className="text-sm">{opt.name}</p>
                        <p className="text-[10px] uppercase tracking-[0.22em] text-ivory-dim mt-0.5 truncate">
                          {opt.productLabel}
                        </p>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="rounded-full ring-1 ring-champagne/30 bg-charcoal/85 backdrop-blur-xl pl-2 pr-3.5 py-2 flex items-center gap-2 hover:ring-champagne/60 transition-all shadow-panel"
      >
        <span className="h-7 w-7 rounded-full bg-charcoal-light/60 flex items-center justify-center text-champagne ring-1 ring-champagne/30">
          <Icon className="w-3.5 h-3.5" strokeWidth={1.5} />
        </span>
        <span className="text-[10px] uppercase tracking-[0.22em] text-ivory">
          {v.shortLabel}
        </span>
        <ChevronDown
          className={cn(
            "w-3 h-3 text-ivory-soft transition-transform",
            open && "rotate-180"
          )}
          strokeWidth={1.5}
        />
      </button>
    </div>
  );
}

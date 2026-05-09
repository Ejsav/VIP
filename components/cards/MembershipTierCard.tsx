"use client";

import { motion } from "framer-motion";
import { Check, Crown, Sparkles, Star } from "lucide-react";
import type { MembershipTier } from "@/lib/types";
import { LuxuryLink } from "@/components/ui/LuxuryButton";
import { cn } from "@/lib/cn";

const tierStyles: Record<
  MembershipTier["id"],
  {
    border: string;
    accent: string;
    bg: string;
    icon: any;
    iconColor: string;
    badgeBg: string;
  }
> = {
  guest: {
    border: "border-smoke",
    accent: "text-ivory",
    bg: "bg-charcoal/60",
    icon: Star,
    iconColor: "text-ivory-soft",
    badgeBg: "bg-charcoal-light/60 ring-smoke text-ivory-soft",
  },
  select: {
    border: "border-champagne/40",
    accent: "text-champagne",
    bg: "bg-charcoal/70",
    icon: Sparkles,
    iconColor: "text-champagne",
    badgeBg: "bg-champagne/10 ring-champagne/30 text-champagne",
  },
  "black-card": {
    border: "border-velvet/60",
    accent: "text-velvet-bright",
    bg: "bg-gradient-to-br from-charcoal to-ink",
    icon: Crown,
    iconColor: "text-champagne",
    badgeBg: "bg-velvet/20 ring-velvet/40 text-velvet-bright",
  },
};

export function MembershipTierCard({
  tier,
  highlighted,
  index = 0,
}: {
  tier: MembershipTier;
  highlighted?: boolean;
  index?: number;
}) {
  const s = tierStyles[tier.id];
  const Icon = s.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 0.85, delay: index * 0.08, ease: [0.22, 0.61, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className={cn(
        "relative rounded-2xl border backdrop-blur-md p-7 md:p-8 flex flex-col h-full overflow-hidden",
        s.border,
        s.bg,
        highlighted && "shadow-glow-soft"
      )}
    >
      {highlighted && (
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-champagne to-transparent" />
      )}
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-champagne/[0.04] blur-3xl pointer-events-none" />

      <div className="flex items-center justify-between gap-3 relative">
        <div className="flex items-center gap-3">
          <span
            className={cn(
              "h-9 w-9 rounded-full ring-1 ring-smoke flex items-center justify-center bg-charcoal-light/60",
              s.iconColor
            )}
          >
            <Icon className="w-4 h-4" strokeWidth={1.5} />
          </span>
          <h3 className="font-display text-2xl md:text-[28px] leading-none tracking-tight text-ivory">
            {tier.name}
          </h3>
        </div>
        <span
          className={cn(
            "text-[10px] uppercase tracking-[0.22em] rounded-full px-2.5 py-1 ring-1",
            s.badgeBg
          )}
        >
          {tier.badge}
        </span>
      </div>

      <p className="mt-4 text-sm text-ivory-soft leading-relaxed">
        {tier.positioning}
      </p>

      <div className="mt-6 pb-6 border-b border-smoke/60">
        <p className="font-display text-3xl text-ivory">{tier.price}</p>
        <p className="text-[11px] uppercase tracking-[0.22em] text-ivory-dim mt-1">
          {tier.priceNote}
        </p>
      </div>

      <ul className="mt-6 space-y-3 flex-1">
        {tier.features.map((f) => {
          const isHighlight = tier.highlightFeatures.includes(f);
          return (
            <li key={f} className="flex items-start gap-3 text-sm">
              <Check
                className={cn(
                  "w-4 h-4 mt-0.5 shrink-0",
                  isHighlight ? "text-champagne" : "text-ivory-dim"
                )}
                strokeWidth={2}
              />
              <span className={cn(isHighlight ? "text-ivory" : "text-ivory-soft")}>
                {f}
              </span>
            </li>
          );
        })}
      </ul>

      <div className="mt-8 pt-6 border-t border-smoke/60">
        <LuxuryLink
          href={`/request?tier=${tier.id}`}
          variant={highlighted ? "primary" : "secondary"}
          size="md"
          arrow
          className="w-full"
        >
          {tier.id === "guest" ? "Submit standard request" : `Request ${tier.name}`}
        </LuxuryLink>
        <p className="mt-3 text-[10px] uppercase tracking-[0.22em] text-ivory-dim text-center">
          Demo tier · fictional concept
        </p>
      </div>
    </motion.div>
  );
}

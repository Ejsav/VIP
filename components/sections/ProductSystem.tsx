"use client";

import { motion } from "framer-motion";
import {
  Globe,
  ListFilter,
  Sparkles,
  Crown,
  FormInput,
  TrendingUp,
  Layers,
  ArrowRight,
} from "lucide-react";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { NightRouteCard } from "@/components/cards/NightRouteCard";
import { LuxuryLink } from "@/components/ui/LuxuryButton";

const systemPieces = [
  { icon: Globe, label: "Browsable inventory" },
  { icon: ListFilter, label: "Filterable categories" },
  { icon: Sparkles, label: "Scarcity-based drops" },
  { icon: Crown, label: "Tiered memberships" },
  { icon: FormInput, label: "Multi-step request forms" },
  { icon: TrendingUp, label: "Qualified lead capture" },
  { icon: Layers, label: "Premium UI system" },
  { icon: ArrowRight, label: "Conversion-focused CTAs" },
];

const adaptableFor = [
  "Restaurant reservations",
  "Private event booking",
  "Luxury travel planning",
  "Charter and transport requests",
  "Real estate showings",
  "Private membership clubs",
  "Concierge marketplaces",
  "Wedding vendors",
  "Local service lead routing",
];

export function ProductSystem() {
  return (
    <section className="relative py-20 md:py-28 border-t border-smoke/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <MotionReveal>
          <div className="max-w-3xl">
            <p className="text-[10px] uppercase tracking-[0.32em] text-champagne mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-champagne/60" />
              Product system
            </p>
            <h2 className="font-display text-4xl md:text-6xl leading-[0.95] tracking-tightest text-ivory">
              Built like a product,{" "}
              <span className="italic champagne-text">not a landing page.</span>
            </h2>
            <p className="mt-5 text-base text-ivory-soft leading-relaxed">
              The Afterlist includes marketplace browsing, city filtering, venue cards,
              access drops, membership tiers, and a multi-step request flow, designed to
              show how Eric Jokl can build digital systems that adapt to hospitality,
              events, luxury services, and local marketplaces.
            </p>
          </div>
        </MotionReveal>

        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5">
            <NightRouteCard />
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 content-start">
            {systemPieces.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.6, delay: i * 0.04 }}
                  className="flex items-center gap-3 rounded-xl border border-smoke bg-charcoal/40 backdrop-blur p-4 hover:border-champagne/30 transition-colors"
                >
                  <span className="h-9 w-9 rounded-lg ring-1 ring-smoke flex items-center justify-center bg-charcoal-light/60 text-champagne shrink-0">
                    <Icon className="w-4 h-4" strokeWidth={1.5} />
                  </span>
                  <span className="text-sm text-ivory">{p.label}</span>
                </motion.div>
              );
            })}

            <div className="sm:col-span-2 mt-2 rounded-xl border border-smoke bg-charcoal/50 backdrop-blur-md p-5 md:p-6">
              <p className="text-[10px] uppercase tracking-[0.32em] text-champagne mb-3">
                Client-customizable system · Adapts for
              </p>
              <ul className="flex flex-wrap gap-1.5">
                {adaptableFor.map((a) => (
                  <li
                    key={a}
                    className="text-[11px] uppercase tracking-[0.16em] text-ivory-soft bg-charcoal-light/60 ring-1 ring-smoke rounded-full px-2.5 py-1"
                  >
                    {a}
                  </li>
                ))}
              </ul>
              <div className="mt-5 pt-4 border-t border-smoke/60 flex items-center justify-between gap-3 flex-wrap">
                <p className="text-xs text-ivory-soft leading-relaxed max-w-md">
                  The same architecture re-skins into private clubs, concierge marketplaces,
                  charter services, restaurant groups, and luxury service brands.
                </p>
                <LuxuryLink href="/case-study" variant="ghost" arrow size="sm">
                  Read case study
                </LuxuryLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

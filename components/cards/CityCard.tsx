"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { City } from "@/lib/types";
import { DemandBadge } from "@/components/ui/StatusBadge";

const moodGradients: Record<string, string> = {
  miami: "from-rose-300/20 via-amber-300/10 to-transparent",
  "new-york": "from-zinc-300/15 via-champagne/10 to-transparent",
  "las-vegas": "from-amber-200/20 via-rose-300/10 to-transparent",
  "los-angeles": "from-orange-200/20 via-pink-200/10 to-transparent",
  boston: "from-amber-300/15 via-orange-200/8 to-transparent",
  london: "from-stone-200/15 via-zinc-300/8 to-transparent",
  dubai: "from-amber-200/25 via-yellow-200/10 to-transparent",
  ibiza: "from-sky-200/20 via-rose-200/10 to-transparent",
};

export function CityCard({ city, index = 0 }: { city: City; index?: number }) {
  const gradient = moodGradients[city.slug] ?? "from-champagne/10 to-transparent";
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{
        duration: 0.85,
        delay: (index % 4) * 0.06,
        ease: [0.22, 0.61, 0.36, 1],
      }}
      whileHover={{ y: -4 }}
      className="group"
    >
      <Link
        href={`/cities/${city.slug}`}
        className="relative block rounded-2xl border border-smoke bg-charcoal/60 backdrop-blur-md overflow-hidden glow-border h-full"
      >
        {/* Mood image plate */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${gradient}`}
            aria-hidden
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,169,97,0.15),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,0,0,0.7),transparent_70%)]" />
          {/* faint city glyph */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-[7rem] md:text-[8rem] leading-none text-ivory/[0.06] tracking-tightest select-none">
              {city.name.split(" ").map((s) => s[0]).join("")}
            </span>
          </div>
          <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-3">
            <DemandBadge level={city.demandLevel} />
            <span className="text-[10px] uppercase tracking-[0.22em] text-ivory-soft bg-charcoal/70 ring-1 ring-smoke rounded-full px-2.5 py-1 backdrop-blur">
              {city.region}
            </span>
          </div>
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent" />
        </div>

        <div className="p-5 md:p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-2xl md:text-[28px] leading-[1.05] tracking-tight text-ivory">
              {city.name}
            </h3>
            <span className="mt-1.5 text-ivory-dim group-hover:text-champagne transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
            </span>
          </div>
          <p className="mt-2 text-sm text-ivory-soft leading-relaxed">
            {city.headline}
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {city.mood.slice(0, 3).map((m) => (
              <span
                key={m}
                className="text-[10px] uppercase tracking-[0.18em] text-ivory-soft bg-charcoal-light/60 ring-1 ring-smoke rounded-full px-2.5 py-1"
              >
                {m}
              </span>
            ))}
          </div>
          <div className="mt-5 pt-4 border-t border-smoke/60 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-ivory-dim">
            <span>{city.accessTypes.length} access types</span>
            <span className="text-champagne">View city →</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

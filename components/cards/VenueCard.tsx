"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { Venue } from "@/lib/types";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { getAccessType } from "@/data/accessTypes";

const tierAccent: Record<Venue["accessLevel"], string> = {
  Guest: "text-ivory-soft",
  Select: "text-champagne",
  "Black Card": "text-velvet-bright",
};

export function VenueCard({ venue, index = 0 }: { venue: Venue; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 0.7, delay: (index % 6) * 0.04, ease: [0.22, 0.61, 0.36, 1] }}
      whileHover={{ y: -3 }}
      className="group h-full"
    >
      <Link
        href={`/venues/${venue.slug}`}
        className="relative flex flex-col h-full rounded-2xl border border-smoke bg-charcoal/60 backdrop-blur-md overflow-hidden glow-border"
      >
        <div className="relative aspect-[5/3] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(201,169,97,0.18),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(122,20,40,0.18),transparent_50%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/30 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-[5rem] md:text-[6rem] leading-none text-ivory/[0.07] tracking-tightest select-none uppercase">
              {venue.name.split(" ")[0]}
            </span>
          </div>
          <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-3">
            <StatusBadge status={venue.status} />
            <span className={`text-[10px] uppercase tracking-[0.22em] bg-charcoal/70 ring-1 ring-smoke rounded-full px-2.5 py-1 backdrop-blur ${tierAccent[venue.accessLevel]}`}>
              {venue.accessLevel}
            </span>
          </div>
        </div>

        <div className="flex-1 p-5 md:p-6 flex flex-col">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="font-display text-xl md:text-2xl leading-tight tracking-tight text-ivory truncate">
                {venue.name}
              </h3>
              <div className="mt-1 flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-ivory-soft">
                <MapPin className="w-3 h-3" strokeWidth={1.5} />
                <span>{venue.cityName}</span>
                <span className="text-ivory-dim">·</span>
                <span>{venue.type}</span>
              </div>
            </div>
            <span className="mt-1 text-ivory-dim group-hover:text-champagne transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
            </span>
          </div>

          <p className="mt-3 text-sm text-ivory-soft leading-relaxed line-clamp-2">
            {venue.tagline}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {venue.accessOptions.slice(0, 3).map((id) => {
              const a = getAccessType(id);
              if (!a) return null;
              return (
                <span
                  key={id}
                  className="text-[10px] uppercase tracking-[0.16em] text-ivory-soft bg-charcoal-light/60 ring-1 ring-smoke rounded-full px-2.5 py-1"
                >
                  {a.name}
                </span>
              );
            })}
            {venue.accessOptions.length > 3 && (
              <span className="text-[10px] uppercase tracking-[0.16em] text-champagne bg-charcoal-light/60 ring-1 ring-smoke rounded-full px-2.5 py-1">
                +{venue.accessOptions.length - 3}
              </span>
            )}
          </div>

          <div className="mt-auto pt-5 border-t border-smoke/60 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-ivory-dim">
            <span>{venue.requestWindow}</span>
            <span className="text-champagne">View venue →</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

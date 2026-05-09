"use client";

import { motion } from "framer-motion";
import {
  Users,
  Wine,
  Sunset,
  DoorClosed,
  Cake,
  UsersRound,
  Route,
  Sparkles,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import type { AccessType } from "@/lib/types";

const iconMap: Record<string, LucideIcon> = {
  Users,
  Wine,
  Sunset,
  DoorClosed,
  Cake,
  UsersRound,
  Route,
  Sparkles,
};

export function AccessTypeCard({
  type,
  index = 0,
}: {
  type: AccessType;
  index?: number;
}) {
  const Icon = iconMap[type.icon] ?? Sparkles;
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 0.7, delay: (index % 4) * 0.06, ease: [0.22, 0.61, 0.36, 1] }}
      whileHover={{ y: -3 }}
      className="group h-full"
    >
      <Link
        href={`/request?accessType=${type.id}`}
        className="relative flex flex-col h-full rounded-2xl border border-smoke bg-charcoal/50 backdrop-blur-md p-6 md:p-7 overflow-hidden glow-border"
      >
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-champagne/0 to-transparent group-hover:via-champagne/40 transition-all duration-500" />
        <div className="flex items-start justify-between gap-3">
          <span className="h-10 w-10 rounded-xl ring-1 ring-smoke flex items-center justify-center bg-charcoal-light/60 text-champagne group-hover:ring-champagne/40 transition-colors">
            <Icon className="w-4 h-4" strokeWidth={1.5} />
          </span>
          <ArrowUpRight
            className="w-4 h-4 text-ivory-dim group-hover:text-champagne transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            strokeWidth={1.5}
          />
        </div>

        <h3 className="mt-5 font-display text-xl md:text-[22px] leading-tight tracking-tight text-ivory">
          {type.name}
        </h3>
        <p className="mt-2 text-sm text-ivory-soft leading-relaxed">
          {type.short}
        </p>

        <div className="mt-5 pt-5 border-t border-smoke/60">
          <p className="text-[10px] uppercase tracking-[0.22em] text-ivory-dim mb-2">
            Form collects
          </p>
          <ul className="flex flex-wrap gap-1.5">
            {type.collects.map((c) => (
              <li
                key={c}
                className="text-[10px] uppercase tracking-[0.16em] text-ivory-soft bg-charcoal-light/60 ring-1 ring-smoke rounded-full px-2.5 py-1"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </motion.div>
  );
}

"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { featuredExperiences } from "@/data/experiences";
import { ExperienceCard } from "@/components/experience/ExperienceCard";

export function CuratedExperiences() {
  return (
    <section className="relative max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-36">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
        className="flex items-end justify-between gap-6 flex-wrap mb-10 md:mb-14"
      >
        <div className="max-w-2xl">
          <p className="text-[10px] uppercase tracking-[0.32em] text-champagne mb-3 flex items-center gap-3">
            <span className="h-px w-8 bg-champagne/60" />
            Curated experiences · Routed access
          </p>
          <h2 className="font-display text-4xl md:text-6xl tracking-tightest text-ivory leading-[1.0]">
            Access programs,{" "}
            <span className="italic champagne-text">already shaped.</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-ivory-soft leading-relaxed">
            Each experience is a curated route — a city style, a room, a hosted spend, a
            window. The shape of inventory premium hospitality groups can run on.
          </p>
        </div>
        <Link
          href="/experiences"
          className="hidden md:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-ivory-soft hover:text-champagne transition-colors"
        >
          All experiences
          <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 auto-rows-fr">
        {featuredExperiences.slice(0, 6).map((exp, i) => (
          <ExperienceCard key={exp.id} experience={exp} index={i} />
        ))}
      </div>

      <div className="mt-10 md:hidden">
        <Link
          href="/experiences"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-champagne"
        >
          See all experiences
          <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
        </Link>
      </div>
    </section>
  );
}

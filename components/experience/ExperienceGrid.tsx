"use client";

import type { Experience } from "@/lib/types";
import { ExperienceCard } from "./ExperienceCard";

export function ExperienceGrid({
  items,
  featureFirst,
}: {
  items: Experience[];
  featureFirst?: boolean;
}) {
  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-smoke bg-charcoal/40 backdrop-blur p-12 text-center">
        <p className="font-display text-2xl text-ivory">
          No experiences match those filters.
        </p>
        <p className="mt-2 text-sm text-ivory-soft">
          Try clearing a filter or selecting a different city style.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 auto-rows-fr">
      {items.map((exp, i) => (
        <ExperienceCard
          key={exp.id}
          experience={exp}
          index={i}
          variant={featureFirst && i === 0 ? "feature" : "default"}
        />
      ))}
    </div>
  );
}

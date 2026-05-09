"use client";

import { useMemo, useState } from "react";
import { cities } from "@/data/cities";
import { accessTypes } from "@/data/accessTypes";
import { CityCard } from "@/components/cards/CityCard";
import { PageHeader } from "@/components/ui/PageHeader";
import { SearchInput } from "@/components/ui/SearchInput";
import { FilterChips } from "@/components/ui/FilterChips";
import { DisclaimerBanner } from "@/components/ui/DisclaimerBanner";

const moodOptions = [
  { value: "all", label: "All moods" },
  { value: "High-energy", label: "High-energy" },
  { value: "Private", label: "Private" },
  { value: "Rooftop", label: "Rooftop" },
  { value: "Members-only", label: "Members-only" },
  { value: "After-hours", label: "After-hours" },
  { value: "Editorial", label: "Editorial" },
  { value: "Local insider", label: "Local insider" },
  { value: "Tourist premium", label: "Tourist premium" },
];

export default function CitiesPage() {
  const [q, setQ] = useState("");
  const [mood, setMood] = useState("all");
  const [accessType, setAccessType] = useState("all");

  const accessOptions = useMemo(
    () => [
      { value: "all", label: "All access" },
      ...accessTypes.map((a) => ({ value: a.id, label: a.name })),
    ],
    []
  );

  const filtered = useMemo(() => {
    return cities.filter((c) => {
      if (q && !`${c.name} ${c.headline} ${c.region}`.toLowerCase().includes(q.toLowerCase()))
        return false;
      if (mood !== "all" && !c.mood.includes(mood)) return false;
      if (accessType !== "all" && !c.accessTypes.includes(accessType as any)) return false;
      return true;
    });
  }, [q, mood, accessType]);

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <PageHeader
        eyebrow="Cities · Network"
        title="Eight cities. One private layer."
        description="Browse the fictional network by city, vibe, and access type. Each city carries its own demand signal and access mix."
      />

      <div className="mt-4 mb-10 grid gap-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-stretch">
          <SearchInput
            value={q}
            onChange={setQ}
            placeholder="Search cities, regions, vibes…"
            className="md:col-span-5"
          />
          <FilterChips
            options={moodOptions}
            value={mood}
            onChange={setMood}
            className="md:col-span-7"
          />
        </div>
        <FilterChips
          options={accessOptions}
          value={accessType}
          onChange={setAccessType}
          size="sm"
        />
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {filtered.map((c, i) => (
            <CityCard key={c.id} city={c} index={i} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-smoke bg-charcoal/40 backdrop-blur p-12 text-center">
          <p className="font-display text-2xl text-ivory">No cities match these filters.</p>
          <p className="mt-2 text-sm text-ivory-soft">
            Try clearing search or selecting a different mood.
          </p>
        </div>
      )}

      <div className="mt-16">
        <DisclaimerBanner variant="full" />
      </div>
    </div>
  );
}

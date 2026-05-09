"use client";

import { useMemo, useState } from "react";
import { accessDrops } from "@/data/accessDrops";
import { cities } from "@/data/cities";
import { accessTypes } from "@/data/accessTypes";
import { AccessDropCard } from "@/components/cards/AccessDropCard";
import { PageHeader } from "@/components/ui/PageHeader";
import { FilterChips } from "@/components/ui/FilterChips";
import { DisclaimerBanner } from "@/components/ui/DisclaimerBanner";

const statusOptions = [
  { value: "all", label: "All statuses" },
  { value: "Open for Requests", label: "Open" },
  { value: "Limited Requests", label: "Limited" },
  { value: "Members First", label: "Members First" },
  { value: "Closing Soon", label: "Closing Soon" },
  { value: "Private Review", label: "Private Review" },
  { value: "Waitlist Only", label: "Waitlist" },
];

export default function AccessDropsPage() {
  const [city, setCity] = useState("all");
  const [accessType, setAccessType] = useState("all");
  const [status, setStatus] = useState("all");

  const cityOptions = useMemo(
    () => [
      { value: "all", label: "All cities" },
      ...cities.map((c) => ({ value: c.slug, label: c.name })),
    ],
    []
  );

  const accessOptions = useMemo(
    () => [
      { value: "all", label: "All access" },
      ...accessTypes.map((a) => ({ value: a.id, label: a.name })),
    ],
    []
  );

  const filtered = useMemo(() => {
    return accessDrops.filter((d) => {
      if (city !== "all" && d.citySlug !== city) return false;
      if (accessType !== "all" && d.accessType !== accessType) return false;
      if (status !== "all" && d.status !== status) return false;
      return true;
    });
  }, [city, accessType, status]);

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <PageHeader
        eyebrow="Access drops · Limited"
        title="Sample drops, designed for urgency."
        description="Fictional access drops show how scarcity, deadlines, and tier-routed reviews can turn high-intent demand into a structured booking flow."
      />

      <div className="mb-10 grid gap-3">
        <FilterChips options={cityOptions} value={city} onChange={setCity} />
        <FilterChips
          options={accessOptions}
          value={accessType}
          onChange={setAccessType}
          size="sm"
        />
        <FilterChips
          options={statusOptions}
          value={status}
          onChange={setStatus}
          size="sm"
        />
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((d, i) => (
            <AccessDropCard key={d.id} drop={d} index={i} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-smoke bg-charcoal/40 backdrop-blur p-12 text-center">
          <p className="font-display text-2xl text-ivory">
            No drops match these filters.
          </p>
          <p className="mt-2 text-sm text-ivory-soft">
            Adjust the filters to see other windows.
          </p>
        </div>
      )}

      <div className="mt-16">
        <DisclaimerBanner variant="full" />
      </div>
    </div>
  );
}

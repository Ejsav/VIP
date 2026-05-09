"use client";

import { useMemo, useState } from "react";
import { venues } from "@/data/venues";
import { cities } from "@/data/cities";
import { accessTypes } from "@/data/accessTypes";
import { VenueCard } from "@/components/cards/VenueCard";
import { PageHeader } from "@/components/ui/PageHeader";
import { SearchInput } from "@/components/ui/SearchInput";
import { FilterChips } from "@/components/ui/FilterChips";
import { DisclaimerBanner } from "@/components/ui/DisclaimerBanner";
import { SlidersHorizontal, X } from "lucide-react";

const moodOptions = [
  { value: "all", label: "All moods" },
  { value: "Editorial", label: "Editorial" },
  { value: "Private", label: "Private" },
  { value: "Members-only", label: "Members-only" },
  { value: "Rooftop", label: "Rooftop" },
  { value: "After-hours", label: "After-hours" },
  { value: "Late-tempo", label: "Late-tempo" },
  { value: "Luxury dinner", label: "Luxury dinner" },
  { value: "High-energy", label: "High-energy" },
];

const statusOptions = [
  { value: "all", label: "All statuses" },
  { value: "Open for Requests", label: "Open" },
  { value: "Limited Requests", label: "Limited" },
  { value: "Members First", label: "Members First" },
  { value: "Private Review", label: "Private Review" },
  { value: "Waitlist Only", label: "Waitlist" },
];

export default function VenuesPage() {
  const [q, setQ] = useState("");
  const [city, setCity] = useState("all");
  const [accessType, setAccessType] = useState("all");
  const [mood, setMood] = useState("all");
  const [status, setStatus] = useState("all");
  const [drawerOpen, setDrawerOpen] = useState(false);

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
    return venues.filter((v) => {
      if (q && !`${v.name} ${v.cityName} ${v.type} ${v.tagline}`.toLowerCase().includes(q.toLowerCase()))
        return false;
      if (city !== "all" && v.citySlug !== city) return false;
      if (accessType !== "all" && !v.accessOptions.includes(accessType as any))
        return false;
      if (mood !== "all" && !v.mood.includes(mood)) return false;
      if (status !== "all" && v.status !== status) return false;
      return true;
    });
  }, [q, city, accessType, mood, status]);

  const activeFilters =
    (city !== "all" ? 1 : 0) +
    (accessType !== "all" ? 1 : 0) +
    (mood !== "all" ? 1 : 0) +
    (status !== "all" ? 1 : 0);

  const clear = () => {
    setCity("all");
    setAccessType("all");
    setMood("all");
    setStatus("all");
  };

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <PageHeader
        eyebrow="Venues · Marketplace"
        title="Sample fictional venues across the network."
        description="Filter by city, access type, mood, and status. Each card carries a sample request window and access mix."
      />

      {/* Desktop filters */}
      <div className="hidden md:grid gap-4 mb-10">
        <div className="grid grid-cols-12 gap-3">
          <SearchInput
            value={q}
            onChange={setQ}
            placeholder="Search venues, cities, vibes…"
            className="col-span-5"
          />
          <FilterChips
            options={cityOptions}
            value={city}
            onChange={setCity}
            className="col-span-7"
          />
        </div>
        <FilterChips
          options={accessOptions}
          value={accessType}
          onChange={setAccessType}
          size="sm"
        />
        <div className="grid grid-cols-12 gap-3">
          <FilterChips
            options={moodOptions}
            value={mood}
            onChange={setMood}
            className="col-span-7"
            size="sm"
          />
          <FilterChips
            options={statusOptions}
            value={status}
            onChange={setStatus}
            className="col-span-5"
            size="sm"
          />
        </div>
      </div>

      {/* Mobile: search + filter trigger */}
      <div className="md:hidden mb-6 grid gap-3">
        <SearchInput value={q} onChange={setQ} placeholder="Search venues…" />
        <button
          onClick={() => setDrawerOpen(true)}
          className="inline-flex items-center justify-between rounded-full border border-smoke bg-charcoal-light/40 px-4 py-3 text-[11px] uppercase tracking-[0.22em] text-ivory-soft hover:border-champagne/40 transition-colors"
        >
          <span className="inline-flex items-center gap-2">
            <SlidersHorizontal className="w-3.5 h-3.5" strokeWidth={1.5} />
            Filters {activeFilters > 0 && <span className="text-champagne">· {activeFilters}</span>}
          </span>
          {activeFilters > 0 && (
            <span
              role="button"
              aria-label="Clear filters"
              onClick={(e) => {
                e.stopPropagation();
                clear();
              }}
              className="text-ivory-dim"
            >
              Clear
            </span>
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      {drawerOpen && (
        <div
          className="md:hidden fixed inset-0 z-50 bg-ink/80 backdrop-blur-sm flex items-end"
          onClick={() => setDrawerOpen(false)}
        >
          <div
            className="w-full rounded-t-3xl bg-charcoal border-t border-smoke p-5 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-5">
              <p className="font-display text-2xl text-ivory">Filters</p>
              <button
                aria-label="Close filters"
                onClick={() => setDrawerOpen(false)}
                className="p-2 rounded-full ring-1 ring-smoke text-ivory-soft"
              >
                <X className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </div>
            <div className="space-y-5">
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-ivory-dim mb-2">
                  City
                </p>
                <FilterChips options={cityOptions} value={city} onChange={setCity} size="sm" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-ivory-dim mb-2">
                  Access type
                </p>
                <FilterChips
                  options={accessOptions}
                  value={accessType}
                  onChange={setAccessType}
                  size="sm"
                />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-ivory-dim mb-2">
                  Mood
                </p>
                <FilterChips options={moodOptions} value={mood} onChange={setMood} size="sm" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-ivory-dim mb-2">
                  Status
                </p>
                <FilterChips
                  options={statusOptions}
                  value={status}
                  onChange={setStatus}
                  size="sm"
                />
              </div>
              <div className="pt-4 flex gap-3">
                <button
                  onClick={() => {
                    clear();
                    setDrawerOpen(false);
                  }}
                  className="flex-1 rounded-full border border-smoke px-5 py-3 text-[11px] uppercase tracking-[0.22em] text-ivory-soft"
                >
                  Clear
                </button>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="flex-1 rounded-full bg-champagne text-obsidian px-5 py-3 text-[11px] uppercase tracking-[0.22em] font-medium"
                >
                  Apply ({filtered.length})
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-ivory-dim mb-5">
        <span>{filtered.length} venues</span>
        {(q || activeFilters > 0) && (
          <button
            onClick={() => {
              setQ("");
              clear();
            }}
            className="text-champagne hover:text-champagne-bright"
          >
            Reset all
          </button>
        )}
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((v, i) => (
            <VenueCard key={v.id} venue={v} index={i} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-smoke bg-charcoal/40 backdrop-blur p-12 text-center">
          <p className="font-display text-2xl text-ivory">
            No venues match these filters.
          </p>
          <p className="mt-2 text-sm text-ivory-soft">
            Adjust your filters or clear them to browse the full network.
          </p>
        </div>
      )}

      <div className="mt-16">
        <DisclaimerBanner variant="full" />
      </div>
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";
import { experiences } from "@/data/experiences";
import { cityStyles } from "@/data/cityStyles";
import { accessTypes } from "@/data/accessTypes";
import { ExperienceGrid } from "@/components/experience/ExperienceGrid";
import { PageHeader } from "@/components/ui/PageHeader";
import { FilterChips } from "@/components/ui/FilterChips";
import { DisclaimerBanner } from "@/components/ui/DisclaimerBanner";

const statusOptions = [
  { value: "all", label: "All statuses" },
  { value: "Curated", label: "Curated" },
  { value: "Priority Route", label: "Priority Route" },
  { value: "Concierge Pick", label: "Concierge Pick" },
  { value: "Limited Window", label: "Limited Window" },
  { value: "Private Hold", label: "Private Hold" },
  { value: "High Demand", label: "High Demand" },
];

export default function ExperiencesPage() {
  const [cityStyle, setCityStyle] = useState("all");
  const [accessType, setAccessType] = useState("all");
  const [status, setStatus] = useState("all");

  const cityStyleOptions = useMemo(
    () => [
      { value: "all", label: "All markets" },
      ...cityStyles.map((c) => ({ value: c.id, label: c.name })),
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
    return experiences.filter((e) => {
      if (cityStyle !== "all" && e.cityStyle !== cityStyle) return false;
      if (accessType !== "all" && e.accessType !== accessType) return false;
      if (status !== "all" && e.status !== status) return false;
      return true;
    });
  }, [cityStyle, accessType, status]);

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <PageHeader
        eyebrow="Curated experiences · Access programs"
        title="A marketplace of routed access."
        description="Each experience is a curated access program — a city style, a room style, a hosted spend, and a routing window. The shape of inventory premium hospitality groups can run on."
      />

      <div className="mb-10 grid gap-3">
        <FilterChips
          options={cityStyleOptions}
          value={cityStyle}
          onChange={setCityStyle}
        />
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

      <ExperienceGrid items={filtered} featureFirst={cityStyle === "all" && status === "all"} />

      <div className="mt-16">
        <DisclaimerBanner variant="full" />
      </div>
    </div>
  );
}

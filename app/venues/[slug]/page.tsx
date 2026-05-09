import { notFound } from "next/navigation";
import Link from "next/link";
import { venues, getVenue } from "@/data/venues";
import { getCity } from "@/data/cities";
import { dropsByCity } from "@/data/accessDrops";
import { getAccessType } from "@/data/accessTypes";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { LuxuryLink } from "@/components/ui/LuxuryButton";
import { DisclaimerBanner } from "@/components/ui/DisclaimerBanner";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { AccessDropCard } from "@/components/cards/AccessDropCard";
import { ArrowUpRight, MapPin, Users, Shirt, Clock } from "lucide-react";

export async function generateStaticParams() {
  return venues.map((v) => ({ slug: v.slug }));
}

export default function VenuePage({ params }: { params: { slug: string } }) {
  const venue = getVenue(params.slug);
  if (!venue) return notFound();

  const city = getCity(venue.citySlug);
  const cityDrops = dropsByCity(venue.citySlug).filter((d) => d.venueId === venue.id);

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      {/* Hero */}
      <header className="relative pt-32 md:pt-40 pb-12">
        <MotionReveal>
          <Link
            href="/venues"
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-ivory-soft hover:text-champagne transition-colors mb-6"
          >
            ← All venues
          </Link>
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div className="max-w-3xl">
              <p className="text-[10px] uppercase tracking-[0.32em] text-champagne mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-champagne/60" />
                {venue.cityName} · {venue.type}
              </p>
              <h1 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tightest text-ivory">
                {venue.name}.
              </h1>
              <p className="mt-5 text-lg md:text-xl text-ivory-soft leading-relaxed max-w-2xl">
                {venue.tagline}
              </p>
            </div>
            <div className="flex flex-col items-start gap-3">
              <StatusBadge status={venue.status} />
              <span className="text-[10px] uppercase tracking-[0.22em] text-velvet-bright ring-1 ring-velvet/30 bg-charcoal-light/40 rounded-full px-3 py-1">
                Tier · {venue.accessLevel}
              </span>
            </div>
          </div>
        </MotionReveal>
      </header>

      {/* Visual plate */}
      <div className="relative aspect-[16/7] rounded-3xl overflow-hidden border border-smoke">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(201,169,97,0.18),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(122,20,40,0.18),transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-charcoal/30 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-[8rem] md:text-[14rem] leading-none text-ivory/[0.06] tracking-tightest select-none uppercase">
            {venue.name.split(" ")[0]}
          </span>
        </div>
        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
          <div className="text-[11px] uppercase tracking-[0.22em] text-ivory-soft">
            Sample mood plate · concept visual
          </div>
          {city && (
            <Link
              href={`/cities/${city.slug}`}
              className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.22em] text-champagne hover:text-champagne-bright"
            >
              <MapPin className="w-3 h-3" strokeWidth={1.5} />
              View {city.name}
            </Link>
          )}
        </div>
      </div>

      {/* Detail grid */}
      <section className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6">
        <div className="lg:col-span-7 rounded-2xl border border-smoke bg-charcoal/50 backdrop-blur-md p-6 md:p-8">
          <h2 className="font-display text-2xl md:text-3xl text-ivory leading-tight">
            Mood
          </h2>
          <p className="mt-3 text-base text-ivory-soft leading-relaxed">{venue.notes}</p>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {venue.mood.map((m) => (
              <span
                key={m}
                className="text-[10px] uppercase tracking-[0.18em] text-ivory-soft bg-charcoal-light/60 ring-1 ring-smoke rounded-full px-2.5 py-1"
              >
                {m}
              </span>
            ))}
          </div>

          <div className="mt-7 pt-6 border-t border-smoke/60 grid grid-cols-2 md:grid-cols-3 gap-5">
            <Detail icon={Users} label="Capacity style" value={venue.capacityStyle} />
            <Detail icon={Shirt} label="Dress code" value={venue.dressCode} />
            <Detail icon={Clock} label="Request window" value={venue.requestWindow} />
          </div>
        </div>

        <div className="lg:col-span-5 rounded-2xl border border-smoke bg-charcoal/50 backdrop-blur-md p-6 md:p-8">
          <h2 className="font-display text-2xl md:text-3xl text-ivory leading-tight">
            Access options
          </h2>
          <p className="mt-2 text-sm text-ivory-soft">
            The request types this venue routes most often.
          </p>
          <ul className="mt-5 space-y-2.5">
            {venue.accessOptions.map((id) => {
              const a = getAccessType(id);
              if (!a) return null;
              return (
                <li
                  key={id}
                  className="flex items-center justify-between gap-3 rounded-xl border border-smoke/70 bg-charcoal-light/40 px-4 py-3 hover:border-champagne/30 transition-colors"
                >
                  <div className="min-w-0">
                    <p className="text-sm text-ivory truncate">{a.name}</p>
                    <p className="text-[11px] text-ivory-soft truncate">{a.short}</p>
                  </div>
                  <Link
                    href={`/request?city=${venue.citySlug}&accessType=${a.id}&venue=${venue.slug}`}
                    className="shrink-0 text-[10px] uppercase tracking-[0.22em] text-champagne hover:text-champagne-bright transition-colors inline-flex items-center gap-1"
                  >
                    Request
                    <ArrowUpRight className="w-3 h-3" strokeWidth={1.5} />
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-6 pt-5 border-t border-smoke/60">
            <p className="text-[10px] uppercase tracking-[0.22em] text-ivory-dim">
              Demand label
            </p>
            <p className="mt-1 text-sm text-ivory">{venue.demandLabel}</p>
          </div>
        </div>
      </section>

      {/* Featured drops at this venue */}
      {cityDrops.length > 0 && (
        <section className="mt-16">
          <div className="flex items-end justify-between gap-4 flex-wrap mb-6">
            <h2 className="font-display text-3xl md:text-4xl tracking-tightest text-ivory">
              Active drops at this venue.
            </h2>
            <LuxuryLink href="/access-drops" variant="ghost" arrow size="sm">
              All drops
            </LuxuryLink>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {cityDrops.map((d, i) => (
              <AccessDropCard key={d.id} drop={d} index={i} />
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="mt-20 rounded-3xl border border-smoke bg-charcoal/60 backdrop-blur-md p-8 md:p-12 relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-72 h-72 rounded-full bg-velvet/[0.08] blur-3xl pointer-events-none" />
        <div className="relative grid md:grid-cols-2 gap-6 items-center">
          <div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-champagne mb-3 flex items-center gap-3">
              <span className="h-px w-6 bg-champagne/60" />
              Ready to request
            </p>
            <h3 className="font-display text-3xl md:text-4xl tracking-tight text-ivory leading-tight">
              Submit a request for {venue.name}.
            </h3>
            <p className="mt-3 text-sm text-ivory-soft leading-relaxed max-w-md">
              Routed by tier, party size, and atmosphere. Demo confirmation only — no real
              booking is created.
            </p>
          </div>
          <div className="md:justify-self-end">
            <div className="flex flex-wrap gap-3">
              <LuxuryLink
                href={`/request?city=${venue.citySlug}&venue=${venue.slug}`}
                arrow
              >
                Request this venue
              </LuxuryLink>
              <LuxuryLink href="/membership" variant="secondary" arrow>
                View membership
              </LuxuryLink>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-12">
        <DisclaimerBanner variant="full" />
      </div>
    </div>
  );
}

function Detail({
  icon: Icon,
  label,
  value,
}: {
  icon: any;
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.22em] text-ivory-dim flex items-center gap-1.5">
        <Icon className="w-3 h-3 text-champagne" strokeWidth={1.5} />
        {label}
      </p>
      <p className="mt-1 text-sm text-ivory leading-snug">{value}</p>
    </div>
  );
}

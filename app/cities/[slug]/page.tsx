import { notFound } from "next/navigation";
import { cities, getCity } from "@/data/cities";
import { venuesByIds } from "@/data/venues";
import { dropsByCity } from "@/data/accessDrops";
import { getAccessType } from "@/data/accessTypes";
import { VenueCard } from "@/components/cards/VenueCard";
import { AccessDropCard } from "@/components/cards/AccessDropCard";
import { LuxuryLink } from "@/components/ui/LuxuryButton";
import { DemandBadge } from "@/components/ui/StatusBadge";
import { DisclaimerBanner } from "@/components/ui/DisclaimerBanner";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { ArrowUpRight, Clock, MapPin, Sparkles } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  return cities.map((c) => ({ slug: c.slug }));
}

export default function CityPage({ params }: { params: { slug: string } }) {
  const city = getCity(params.slug);
  if (!city) return notFound();

  const featuredVenues = venuesByIds(city.featuredVenueIds);
  const drops = dropsByCity(city.slug);

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      {/* Hero */}
      <header className="relative pt-32 md:pt-40 pb-12 md:pb-16">
        <MotionReveal>
          <Link
            href="/cities"
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-ivory-soft hover:text-champagne transition-colors mb-6"
          >
            ← All cities
          </Link>
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div className="max-w-3xl">
              <p className="text-[10px] uppercase tracking-[0.32em] text-champagne mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-champagne/60" />
                {city.region}
              </p>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tightest text-ivory">
                {city.name}.
              </h1>
              <p className="mt-5 text-lg md:text-xl text-ivory-soft leading-relaxed">
                {city.headline}
              </p>
            </div>
            <div className="flex flex-col items-start gap-3">
              <DemandBadge level={city.demandLevel} />
              <span className="text-[10px] uppercase tracking-[0.22em] text-ivory-soft ring-1 ring-smoke bg-charcoal-light/40 rounded-full px-3 py-1">
                Lead time · {city.leadTime}
              </span>
            </div>
          </div>
        </MotionReveal>
      </header>

      {/* Profile grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6">
        <div className="lg:col-span-7 rounded-2xl border border-smoke bg-charcoal/50 backdrop-blur-md p-6 md:p-8">
          <h2 className="font-display text-2xl md:text-3xl text-ivory leading-tight">
            Nightlife profile
          </h2>
          <p className="mt-3 text-base text-ivory-soft leading-relaxed">
            {city.description}
          </p>
          <div className="mt-6 pt-5 border-t border-smoke/60 grid grid-cols-2 md:grid-cols-3 gap-5">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-ivory-dim">
                Best nights
              </p>
              <p className="mt-1 text-sm text-ivory">{city.bestNights.join(", ")}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-ivory-dim">
                Lead time
              </p>
              <p className="mt-1 text-sm text-ivory">{city.leadTime}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-ivory-dim">
                Hero mood
              </p>
              <p className="mt-1 text-sm text-ivory">{city.heroImageMood}</p>
            </div>
          </div>
          <div className="mt-6 pt-5 border-t border-smoke/60 flex items-start gap-3">
            <Sparkles className="w-4 h-4 text-champagne mt-0.5 shrink-0" strokeWidth={1.5} />
            <p className="text-sm text-ivory-soft leading-relaxed">{city.signalNote}</p>
          </div>
        </div>

        <div className="lg:col-span-5 rounded-2xl border border-smoke bg-charcoal/50 backdrop-blur-md p-6 md:p-8">
          <h2 className="font-display text-2xl md:text-3xl text-ivory leading-tight">
            Access mix
          </h2>
          <p className="mt-2 text-sm text-ivory-soft">
            The request types this city routes most often.
          </p>
          <ul className="mt-5 space-y-2.5">
            {city.accessTypes.map((id) => {
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
                    href={`/request?city=${city.slug}&accessType=${a.id}`}
                    className="shrink-0 text-[10px] uppercase tracking-[0.22em] text-champagne hover:text-champagne-bright transition-colors inline-flex items-center gap-1"
                  >
                    Request
                    <ArrowUpRight className="w-3 h-3" strokeWidth={1.5} />
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-6 pt-5 border-t border-smoke/60 flex flex-wrap gap-1.5">
            {city.mood.map((m) => (
              <span
                key={m}
                className="text-[10px] uppercase tracking-[0.18em] text-ivory-soft bg-charcoal-light/60 ring-1 ring-smoke rounded-full px-2.5 py-1"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured venues */}
      {featuredVenues.length > 0 && (
        <section className="mt-16 md:mt-24">
          <MotionReveal>
            <div className="flex items-end justify-between gap-4 flex-wrap">
              <div>
                <p className="text-[10px] uppercase tracking-[0.32em] text-champagne mb-2 flex items-center gap-3">
                  <span className="h-px w-6 bg-champagne/60" />
                  Featured fictional venues
                </p>
                <h2 className="font-display text-3xl md:text-5xl tracking-tightest text-ivory">
                  Rooms in {city.name}.
                </h2>
              </div>
              <LuxuryLink
                href={`/venues?city=${city.slug}`}
                variant="ghost"
                arrow
                size="sm"
              >
                All venues
              </LuxuryLink>
            </div>
          </MotionReveal>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredVenues.map((v, i) => (
              <VenueCard key={v.id} venue={v} index={i} />
            ))}
          </div>
        </section>
      )}

      {/* Drops in this city */}
      {drops.length > 0 && (
        <section className="mt-16 md:mt-24">
          <MotionReveal>
            <div className="flex items-end justify-between gap-4 flex-wrap">
              <div>
                <p className="text-[10px] uppercase tracking-[0.32em] text-velvet-bright mb-2 flex items-center gap-3">
                  <span className="h-px w-6 bg-velvet/60" />
                  Live in {city.name}
                </p>
                <h2 className="font-display text-3xl md:text-5xl tracking-tightest text-ivory">
                  Sample access drops.
                </h2>
              </div>
              <LuxuryLink href="/access-drops" variant="ghost" arrow size="sm">
                All drops
              </LuxuryLink>
            </div>
          </MotionReveal>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {drops.map((d, i) => (
              <AccessDropCard key={d.id} drop={d} index={i} />
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="mt-20 rounded-3xl border border-smoke bg-charcoal/60 backdrop-blur-md p-8 md:p-12 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-72 h-72 rounded-full bg-champagne/[0.06] blur-3xl pointer-events-none" />
        <div className="relative grid md:grid-cols-2 gap-6 items-center">
          <div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-champagne mb-3 flex items-center gap-3">
              <span className="h-px w-6 bg-champagne/60" />
              Ready to request
            </p>
            <h3 className="font-display text-3xl md:text-4xl tracking-tight text-ivory leading-tight">
              Request access in {city.name}.
            </h3>
            <p className="mt-3 text-sm text-ivory-soft leading-relaxed max-w-md">
              The request flow captures city, access type, party size, vibe, budget, and
              date. Routed by tier and demand signal.
            </p>
          </div>
          <div className="md:justify-self-end">
            <div className="flex flex-wrap gap-3">
              <LuxuryLink href={`/request?city=${city.slug}`} arrow>
                Start a request
              </LuxuryLink>
              <LuxuryLink href="/membership" variant="secondary" arrow>
                View membership
              </LuxuryLink>
            </div>
            <div className="mt-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-ivory-dim">
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3 h-3" strokeWidth={1.5} />
                {city.leadTime}
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3 h-3" strokeWidth={1.5} />
                {city.name}
              </span>
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

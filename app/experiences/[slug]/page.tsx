import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Sparkles,
  Clock,
  Users,
  DollarSign,
  Crown,
  ArrowUpRight,
  Wine,
  ShieldCheck,
} from "lucide-react";
import { experiences, getExperience } from "@/data/experiences";
import { cityStyles, getCityStyle } from "@/data/cityStyles";
import { ExperienceCard } from "@/components/experience/ExperienceCard";
import { LuxuryLink } from "@/components/ui/LuxuryButton";
import { DisclaimerBanner } from "@/components/ui/DisclaimerBanner";

export function generateStaticParams() {
  return experiences.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const exp = getExperience(params.slug);
  if (!exp) return { title: "Experience · The Afterlist" };
  return {
    title: `${exp.name} · The Afterlist`,
    description: exp.positioning,
  };
}

export default function ExperienceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const exp = getExperience(params.slug);
  if (!exp) return notFound();

  const cityStyle = getCityStyle(exp.cityStyle);
  const related = experiences
    .filter((e) => e.id !== exp.id)
    .filter((e) => e.cityStyle === exp.cityStyle || e.accessType === exp.accessType)
    .slice(0, 3);

  return (
    <div className="max-w-6xl mx-auto px-5 md:px-8">
      {/* Hero */}
      <section className="pt-20 md:pt-28 pb-12 md:pb-16">
        <Link
          href="/experiences"
          className="text-[11px] uppercase tracking-[0.22em] text-ivory-dim hover:text-champagne transition-colors inline-flex items-center gap-1.5"
        >
          ← Curated experiences
        </Link>

        <div className="mt-6 flex items-start justify-between gap-6 flex-wrap">
          <div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-champagne flex items-center gap-3">
              <span className="h-px w-8 bg-champagne/60" />
              {exp.cityStyleName} · {exp.accessTypeName}
            </p>
            <h1 className="mt-4 font-display text-5xl md:text-7xl tracking-tightest text-ivory leading-[0.95]">
              {exp.name}
            </h1>
            <p className="mt-5 max-w-2xl text-lg md:text-xl text-ivory-soft leading-relaxed">
              {exp.positioning}
            </p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] ring-1 ring-champagne/30 bg-charcoal-light/60 text-champagne">
            {exp.status}
          </span>
        </div>

        <div className="mt-9 flex flex-wrap gap-3">
          <LuxuryLink
            href={`/request?cityStyle=${exp.cityStyle}&accessType=${exp.accessType}`}
            arrow
            size="lg"
          >
            Request this experience
          </LuxuryLink>
          {cityStyle && (
            <LuxuryLink
              href={`/cities/${cityStyle.citySlug}`}
              variant="secondary"
              arrow
            >
              See {cityStyle.cityName}
            </LuxuryLink>
          )}
        </div>
      </section>

      {/* Detail grid */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6">
        <Detail icon={Wine} label="Atmosphere" value={exp.atmosphere} />
        <Detail
          icon={Clock}
          label="Suggested arrival"
          value={exp.arrivalWindow}
        />
        <Detail
          icon={Users}
          label="Group fit"
          value={`Party of ${exp.groupFit.join(", ")}`}
        />
        <Detail
          icon={DollarSign}
          label="Hosted spend"
          value={exp.spendRange.join(" / ")}
        />
        <Detail icon={Crown} label="Routing tier" value={exp.minTier} />
        <Detail
          icon={ShieldCheck}
          label="Status"
          value={exp.status}
        />
      </section>

      {/* Description + tags */}
      <section className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-2xl border border-smoke bg-charcoal/50 backdrop-blur-md p-7 md:p-9">
          <p className="text-[10px] uppercase tracking-[0.32em] text-champagne mb-3">
            About this access
          </p>
          <p className="text-base md:text-lg text-ivory leading-relaxed">
            {exp.description}
          </p>

          <div className="mt-7 pt-6 border-t border-smoke/60">
            <p className="text-[10px] uppercase tracking-[0.22em] text-ivory-dim mb-3">
              Tags
            </p>
            <div className="flex flex-wrap gap-1.5">
              {exp.tags.map((t) => (
                <span
                  key={t}
                  className="text-[10px] uppercase tracking-[0.18em] text-ivory-soft bg-charcoal-light/60 ring-1 ring-smoke rounded-full px-2.5 py-1"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* City style sidebar */}
        {cityStyle && (
          <aside className="rounded-2xl border border-smoke bg-charcoal/50 backdrop-blur-md p-6 md:p-7">
            <p className="text-[10px] uppercase tracking-[0.32em] text-champagne mb-2">
              Market style
            </p>
            <h3 className="font-display text-2xl md:text-3xl tracking-tight text-ivory leading-tight">
              {cityStyle.name}
            </h3>
            <p className="text-[11px] uppercase tracking-[0.22em] text-ivory-soft mt-1">
              {cityStyle.tempo} · {cityStyle.region}
            </p>
            <p className="mt-3 text-sm text-ivory-soft leading-relaxed">
              {cityStyle.description}
            </p>
            <ul className="mt-5 space-y-1.5 text-sm text-ivory-soft">
              {cityStyle.signature.map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-champagne" />
                  {s}
                </li>
              ))}
            </ul>
            <Link
              href={`/cities/${cityStyle.citySlug}`}
              className="mt-6 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.22em] text-champagne hover:text-champagne-bright transition-colors"
            >
              Visit {cityStyle.cityName}
              <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
            </Link>
          </aside>
        )}
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-20">
          <div className="flex items-end justify-between gap-4 mb-7">
            <div>
              <p className="text-[10px] uppercase tracking-[0.32em] text-champagne mb-2">
                Routed alongside
              </p>
              <h2 className="font-display text-3xl md:text-4xl tracking-tight text-ivory">
                Related access programs.
              </h2>
            </div>
            <Link
              href="/experiences"
              className="text-[11px] uppercase tracking-[0.22em] text-ivory-soft hover:text-champagne transition-colors hidden md:inline-flex items-center gap-1.5"
            >
              All experiences
              <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {related.map((r, i) => (
              <ExperienceCard key={r.id} experience={r} index={i} />
            ))}
          </div>
        </section>
      )}

      <div className="mt-16">
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
    <div className="rounded-2xl border border-smoke bg-charcoal/50 backdrop-blur-md p-5 md:p-6">
      <p className="text-[10px] uppercase tracking-[0.22em] text-ivory-dim flex items-center gap-2">
        <Icon className="w-3.5 h-3.5 text-champagne" strokeWidth={1.5} />
        {label}
      </p>
      <p className="mt-2 text-base md:text-lg text-ivory leading-snug">{value}</p>
    </div>
  );
}

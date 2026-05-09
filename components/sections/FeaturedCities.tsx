import { cities } from "@/data/cities";
import { CityCard } from "@/components/cards/CityCard";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { LuxuryLink } from "@/components/ui/LuxuryButton";

export function FeaturedCities() {
  return (
    <section
      id="cities"
      className="relative py-20 md:py-28 border-t border-smoke/40"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <MotionReveal>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div className="max-w-2xl">
              <p className="text-[10px] uppercase tracking-[0.32em] text-champagne mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-champagne/60" />
                Network · 8 cities
              </p>
              <h2 className="font-display text-4xl md:text-6xl leading-[0.95] tracking-tightest text-ivory">
                Cities built for{" "}
                <span className="italic champagne-text">after-dark access.</span>
              </h2>
              <p className="mt-5 max-w-xl text-base text-ivory-soft leading-relaxed">
                The Afterlist is built city-first. Each market routes by mood, access type,
                lead time, and demand signal, organized into one premium request flow.
              </p>
            </div>
            <div className="hidden md:block">
              <LuxuryLink href="/cities" variant="secondary" arrow>
                Browse all cities
              </LuxuryLink>
            </div>
          </div>
        </MotionReveal>

        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {cities.map((c, i) => (
            <CityCard key={c.id} city={c} index={i} />
          ))}
        </div>

        <div className="mt-10 md:hidden">
          <LuxuryLink href="/cities" variant="secondary" arrow className="w-full">
            Browse all cities
          </LuxuryLink>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { LuxuryLink } from "@/components/ui/LuxuryButton";

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-5 md:px-8 pt-32 md:pt-44 pb-24 text-center">
      <p className="text-[10px] uppercase tracking-[0.32em] text-champagne mb-5">
        Closed Door · 404
      </p>
      <h1 className="font-display text-6xl md:text-8xl tracking-tightest text-ivory leading-[0.95]">
        Not on the list.
      </h1>
      <p className="mt-6 text-base text-ivory-soft leading-relaxed">
        The page you were looking for is not part of the network. Try the cities, the
        access drops, or start a request.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <LuxuryLink href="/" arrow>
          Back to The Afterlist
        </LuxuryLink>
        <LuxuryLink href="/request" variant="secondary" arrow>
          Start a request
        </LuxuryLink>
      </div>
      <p className="mt-12 text-[10px] uppercase tracking-[0.22em] text-ivory-dim">
        Fictional concept by Eric Jokl
      </p>
    </div>
  );
}

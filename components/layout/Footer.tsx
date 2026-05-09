import Link from "next/link";
import { FOOTER_LINKS, DISCLAIMER_FULL } from "@/lib/copy";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-smoke/60 bg-ink/60 backdrop-blur-md">
      <div className="absolute inset-x-0 top-0 hairline" />
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <span className="relative flex h-7 w-7 items-center justify-center rounded-full ring-1 ring-champagne/40 bg-charcoal">
                <span className="block h-1.5 w-1.5 rounded-full bg-champagne shadow-[0_0_10px_rgba(201,169,97,0.7)]" />
              </span>
              <span className="font-display text-xl tracking-tight text-ivory">
                The Afterlist
              </span>
            </Link>
            <p className="mt-5 text-sm text-ivory-soft leading-relaxed max-w-md">
              Private access to the city after dark. A fictional premium nightlife access product
              concept by Eric Jokl, designed to demonstrate luxury UX, marketplace structure,
              and conversion-focused request flows.
            </p>
            <div className="mt-6 flex items-center gap-4 text-[11px] uppercase tracking-[0.22em] text-ivory-dim">
              <span>Concept</span>
              <span className="h-px flex-1 bg-smoke" />
              <span>v1.0</span>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.32em] text-champagne mb-5">
              Product
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.product.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-ivory-soft hover:text-ivory transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.32em] text-champagne mb-5">
              About
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.about.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-ivory-soft hover:text-ivory transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.32em] text-champagne mb-5">
              By Eric Jokl
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.external.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-ivory hover:text-champagne transition-colors group"
                  >
                    {l.label}
                    <ArrowUpRight
                      className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={1.5}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-smoke/60">
          <p className="text-xs leading-relaxed text-ivory-dim max-w-3xl">
            <span className="text-ivory-soft mr-1.5">Concept notice.</span>
            {DISCLAIMER_FULL}
          </p>
          <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-[11px] uppercase tracking-[0.22em] text-ivory-dim">
              © The Afterlist · Fictional concept by Eric Jokl
            </p>
            <p className="text-[11px] uppercase tracking-[0.22em] text-ivory-dim">
              Designed and built · {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

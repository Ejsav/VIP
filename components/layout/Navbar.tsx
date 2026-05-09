"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/copy";
import { LuxuryLink } from "@/components/ui/LuxuryButton";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "backdrop-blur-xl bg-obsidian/70 border-b border-smoke/60"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 flex items-center justify-between gap-6">
        <Link
          href="/"
          aria-label="The Afterlist home"
          className="flex items-center gap-3 group"
        >
          <span className="relative flex h-7 w-7 items-center justify-center rounded-full ring-1 ring-champagne/40 bg-charcoal group-hover:ring-champagne transition-all">
            <span className="block h-1.5 w-1.5 rounded-full bg-champagne shadow-[0_0_10px_rgba(201,169,97,0.7)]" />
          </span>
          <span className="font-display text-[19px] tracking-tight text-ivory leading-none">
            The Afterlist
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "relative text-[12px] uppercase tracking-[0.22em] transition-colors",
                pathname?.startsWith(l.href)
                  ? "text-champagne"
                  : "text-ivory-soft hover:text-ivory"
              )}
            >
              {l.label}
              {pathname?.startsWith(l.href) && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-2 left-0 right-0 h-px bg-champagne"
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <LuxuryLink href="/request" size="sm" arrow>
            Request Access
          </LuxuryLink>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 rounded-full ring-1 ring-smoke text-ivory-soft hover:text-champagne transition-colors"
        >
          {open ? <X className="w-4 h-4" strokeWidth={1.5} /> : <Menu className="w-4 h-4" strokeWidth={1.5} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
            className="lg:hidden border-t border-smoke/60 bg-obsidian/95 backdrop-blur-xl"
          >
            <div className="max-w-7xl mx-auto px-5 py-6 flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "py-3 px-2 rounded-lg text-base tracking-tight transition-colors flex items-center justify-between",
                    pathname?.startsWith(l.href)
                      ? "text-champagne"
                      : "text-ivory hover:text-champagne"
                  )}
                >
                  <span>{l.label}</span>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-ivory-dim">→</span>
                </Link>
              ))}
              <div className="pt-4 border-t border-smoke/60 mt-2">
                <LuxuryLink href="/request" size="md" arrow className="w-full">
                  Request Access
                </LuxuryLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

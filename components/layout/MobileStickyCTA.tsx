"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function MobileStickyCTA() {
  const pathname = usePathname();
  const hideOn = ["/request"];
  const hidden = hideOn.some((p) => pathname?.startsWith(p));

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
          className="lg:hidden fixed bottom-3 inset-x-3 z-40"
        >
          <Link
            href="/request"
            className="flex items-center justify-between gap-3 rounded-full bg-champagne text-obsidian px-5 py-4 shadow-glow-champagne"
          >
            <span className="flex flex-col">
              <span className="text-[9px] uppercase tracking-[0.28em] opacity-70">
                One request flow
              </span>
              <span className="text-sm font-medium tracking-tight">
                Request Access
              </span>
            </span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-obsidian text-champagne">
              <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
            </span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

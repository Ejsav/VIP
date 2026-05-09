"use client";

import { cn } from "@/lib/cn";

type Option = { value: string; label: string };

type Props = {
  options: Option[];
  value: string;
  onChange: (v: string) => void;
  className?: string;
  size?: "sm" | "md";
};

export function FilterChips({
  options,
  value,
  onChange,
  className,
  size = "md",
}: Props) {
  return (
    <div
      className={cn(
        "flex gap-2 overflow-x-auto no-scrollbar -mx-1 px-1",
        className
      )}
      role="tablist"
    >
      {options.map((o) => {
        const active = o.value === value;
        return (
          <button
            type="button"
            role="tab"
            aria-selected={active}
            key={o.value}
            onClick={() => onChange(o.value)}
            className={cn(
              "shrink-0 rounded-full border transition-all duration-300 whitespace-nowrap font-sans uppercase tracking-[0.18em]",
              size === "sm" ? "px-3 py-1.5 text-[10px]" : "px-4 py-2 text-[11px]",
              active
                ? "bg-champagne text-obsidian border-champagne shadow-glow-champagne"
                : "bg-charcoal-light/40 text-ivory-soft border-smoke hover:border-champagne/50 hover:text-champagne"
            )}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

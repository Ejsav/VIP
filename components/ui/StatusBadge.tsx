import { cn } from "@/lib/cn";
import type { VenueStatus } from "@/lib/types";

const statusStyles: Record<VenueStatus, { dot: string; text: string; ring: string; label: string }> = {
  "Open for Requests": {
    dot: "bg-emerald-400",
    text: "text-emerald-300",
    ring: "ring-emerald-400/20",
    label: "Open for Requests",
  },
  "Limited Requests": {
    dot: "bg-champagne",
    text: "text-champagne",
    ring: "ring-champagne/30",
    label: "Limited Requests",
  },
  "Members First": {
    dot: "bg-velvet-bright",
    text: "text-velvet-bright",
    ring: "ring-velvet/30",
    label: "Members First",
  },
  "Private Room Available": {
    dot: "bg-champagne-bright",
    text: "text-champagne-bright",
    ring: "ring-champagne/30",
    label: "Private Room Available",
  },
  "Waitlist Only": {
    dot: "bg-ivory-soft",
    text: "text-ivory-soft",
    ring: "ring-smoke",
    label: "Waitlist Only",
  },
  "Closing Soon": {
    dot: "bg-orange-300",
    text: "text-orange-300",
    ring: "ring-orange-400/20",
    label: "Closing Soon",
  },
  "Private Review": {
    dot: "bg-velvet-bright",
    text: "text-velvet-bright",
    ring: "ring-velvet/30",
    label: "Private Review",
  },
};

export function StatusBadge({
  status,
  size = "sm",
  className,
}: {
  status: VenueStatus;
  size?: "sm" | "md";
  className?: string;
}) {
  const s = statusStyles[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1 ring-1 bg-charcoal-light/50 backdrop-blur",
        s.text,
        s.ring,
        size === "sm" ? "text-[10px] tracking-[0.18em]" : "text-xs tracking-[0.2em]",
        "uppercase font-medium",
        className
      )}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className={cn("absolute inset-0 rounded-full animate-ping-soft", s.dot)} />
        <span className={cn("relative h-1.5 w-1.5 rounded-full", s.dot)} />
      </span>
      {s.label}
    </span>
  );
}

export function DemandBadge({
  level,
  className,
}: {
  level: "Quiet" | "Rising" | "High Demand" | "Members First";
  className?: string;
}) {
  const map = {
    Quiet: "text-ivory-soft ring-smoke",
    Rising: "text-emerald-300 ring-emerald-400/20",
    "High Demand": "text-champagne ring-champagne/30",
    "Members First": "text-velvet-bright ring-velvet/30",
  } as const;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1 ring-1 bg-charcoal-light/40 backdrop-blur uppercase tracking-[0.18em] text-[10px] font-medium",
        map[level],
        className
      )}
    >
      <span className="opacity-60">Signal</span>
      <span>{level}</span>
    </span>
  );
}

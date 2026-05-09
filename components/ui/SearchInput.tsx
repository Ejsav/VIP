"use client";

import { Search, X } from "lucide-react";
import { cn } from "@/lib/cn";

type Props = {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  className?: string;
};

export function SearchInput({
  value,
  onChange,
  placeholder = "Search…",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "group relative flex items-center rounded-full bg-charcoal-light/50 border border-smoke focus-within:border-champagne/50 transition-colors backdrop-blur",
        className
      )}
    >
      <Search
        className="ml-4 w-4 h-4 text-ivory-soft group-focus-within:text-champagne transition-colors"
        strokeWidth={1.5}
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="flex-1 bg-transparent border-0 outline-none px-3 py-3 text-sm text-ivory placeholder:text-ivory-dim"
      />
      {value && (
        <button
          type="button"
          aria-label="Clear search"
          onClick={() => onChange("")}
          className="mr-3 p-1 rounded-full text-ivory-soft hover:text-champagne transition-colors"
        >
          <X className="w-3.5 h-3.5" strokeWidth={1.5} />
        </button>
      )}
    </div>
  );
}

"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  DEFAULT_VERTICAL,
  VERTICALS,
  type Vertical,
  type VerticalId,
} from "@/lib/verticals";

type VerticalContextValue = {
  id: VerticalId;
  vertical: Vertical;
  setVertical: (id: VerticalId) => void;
  isAdapted: boolean;
};

const VerticalContext = createContext<VerticalContextValue | null>(null);

const STORAGE_KEY = "afterlist:vertical";

export function VerticalProvider({ children }: { children: React.ReactNode }) {
  const [id, setId] = useState<VerticalId>(DEFAULT_VERTICAL);

  // hydrate
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored && stored in VERTICALS) {
        setId(stored as VerticalId);
      }
    } catch {
      /* ignore */
    }
  }, []);

  // sync accent CSS variable + html data attribute
  useEffect(() => {
    const v = VERTICALS[id];
    if (typeof document === "undefined") return;
    document.documentElement.setAttribute("data-vertical", id);
    document.documentElement.style.setProperty("--vertical-accent", v.accent.hex);
    document.documentElement.style.setProperty(
      "--vertical-accent-bright",
      v.accent.bright
    );
  }, [id]);

  const setVertical = useCallback((next: VerticalId) => {
    setId(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo<VerticalContextValue>(
    () => ({
      id,
      vertical: VERTICALS[id],
      setVertical,
      isAdapted: id !== DEFAULT_VERTICAL,
    }),
    [id, setVertical]
  );

  return (
    <VerticalContext.Provider value={value}>{children}</VerticalContext.Provider>
  );
}

export function useVertical(): VerticalContextValue {
  const ctx = useContext(VerticalContext);
  if (!ctx) {
    // SSR-safe fallback
    return {
      id: DEFAULT_VERTICAL,
      vertical: VERTICALS[DEFAULT_VERTICAL],
      setVertical: () => {},
      isAdapted: false,
    };
  }
  return ctx;
}

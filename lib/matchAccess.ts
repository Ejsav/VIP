import type {
  ConciergeRequest,
  Experience,
  GroupFit,
  MatchConfidence,
  MatchResult,
  SpendRange,
} from "@/lib/types";
import { experiences } from "@/data/experiences";

/**
 * Pure, deterministic frontend matcher.
 * Scores each experience against the request signal and returns the best fit
 * plus alternates and a "why" explanation. No backend, no fake availability.
 */
export function matchAccess(req: ConciergeRequest): MatchResult | null {
  if (!experiences.length) return null;

  const scored = experiences.map((exp) => {
    const breakdown: { reason: string; weight: number }[] = [];
    let score = 0;

    // City style — strongest signal
    if (req.cityStyle && exp.cityStyle === req.cityStyle) {
      score += 30;
      breakdown.push({
        reason: `${exp.cityStyleName} matches the requested market style.`,
        weight: 30,
      });
    } else if (req.cityStyle) {
      score += 4; // small floor so other markets can still surface
    }

    // Access type
    if (req.accessType && exp.accessType === req.accessType) {
      score += 22;
      breakdown.push({
        reason: `${exp.accessTypeName} aligns with the requested access type.`,
        weight: 22,
      });
    }

    // Atmosphere
    if (req.atmosphere && exp.atmosphere === req.atmosphere) {
      score += 18;
      breakdown.push({
        reason: `${exp.atmosphere} matches the requested vibe.`,
        weight: 18,
      });
    }

    // Group fit
    if (req.groupSize && exp.groupFit.includes(req.groupSize as GroupFit)) {
      score += 14;
      breakdown.push({
        reason: `Group of ${req.groupSize} fits within the room's hosted range.`,
        weight: 14,
      });
    } else if (req.groupSize) {
      score -= 6; // penalize mismatched capacity
    }

    // Spend
    if (req.spendRange && exp.spendRange.includes(req.spendRange as SpendRange)) {
      score += 10;
      breakdown.push({
        reason: `${req.spendRange} is within the experience's hosted spend range.`,
        weight: 10,
      });
    }

    // Tier alignment
    const tierRank = { guest: 0, select: 1, "black-card": 2 } as const;
    const minTierRank = { Guest: 0, Select: 1, "Black Card": 2 } as const;
    const userTier = tierRank[req.tier ?? "guest"];
    if (userTier >= minTierRank[exp.minTier]) {
      score += 6;
    } else {
      score -= 12;
      breakdown.push({
        reason: `Routed under ${exp.minTier} tier review.`,
        weight: 0,
      });
    }

    // Featured nudge — equal-tie breaker
    if (exp.featured) score += 2;

    return { exp, score, breakdown };
  });

  scored.sort((a, b) => b.score - a.score);
  const best = scored[0];
  if (!best) return null;

  const confidence: MatchConfidence =
    best.score >= 65
      ? "Priority Match"
      : best.score >= 38
      ? "Strong Match"
      : "Light Match";

  const why = best.breakdown
    .filter((b) => b.weight > 0)
    .slice(0, 4)
    .map((b) => b.reason);

  if (why.length === 0) {
    why.push(
      `${best.exp.name} is the closest available curated route given the request.`
    );
  }

  const groupFitNote = req.groupSize
    ? best.exp.groupFit.includes(req.groupSize as GroupFit)
      ? `Hosted comfortably for parties of ${req.groupSize}.`
      : `Best fit for parties of ${best.exp.groupFit.join(", ")}.`
    : `Routed for parties of ${best.exp.groupFit.join(", ")}.`;

  const spendNote = req.spendRange
    ? best.exp.spendRange.includes(req.spendRange as SpendRange)
      ? `Spend range ${req.spendRange} is within the hosted band.`
      : `Hosted at ${best.exp.spendRange.join(" / ")} typically.`
    : `Hosted at ${best.exp.spendRange.join(" / ")}.`;

  const alternates = scored
    .slice(1, 4)
    .filter((s) => s.score > 12)
    .map((s) => s.exp);

  return {
    experience: best.exp,
    confidence,
    score: Math.min(100, Math.max(0, Math.round((best.score / 100) * 100))),
    why,
    arrivalWindow: best.exp.arrivalWindow,
    groupFitNote,
    spendNote,
    alternates,
  };
}

/** Returns true once the request has enough signal to render a match. */
export function isRequestMatchable(req: ConciergeRequest): boolean {
  const fields: (string | undefined)[] = [
    req.cityStyle,
    req.accessType,
    req.atmosphere,
    req.groupSize,
  ];
  const filled = fields.filter(Boolean).length;
  return filled >= 2;
}

/** Cheap human label of how complete the request signal is. */
export function requestSignalLabel(req: ConciergeRequest): {
  level: "Light" | "Building" | "Strong";
  pct: number;
} {
  const fields: (string | undefined)[] = [
    req.cityStyle,
    req.accessType,
    req.atmosphere,
    req.groupSize,
    req.spendRange,
    req.date,
  ];
  const filled = fields.filter(Boolean).length;
  const pct = Math.round((filled / fields.length) * 100);
  const level = filled <= 2 ? "Light" : filled <= 4 ? "Building" : "Strong";
  return { level, pct };
}

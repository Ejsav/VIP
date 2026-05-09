import type { MembershipTier } from "@/lib/types";

export const membershipTiers: MembershipTier[] = [
  {
    id: "guest",
    name: "Guest",
    positioning: "Open browsing, standard request flow.",
    price: "Free",
    priceNote: "Demo tier",
    badge: "Entry",
    features: [
      "Browse cities and fictional venues",
      "View public access drops",
      "Submit standard requests",
      "Email-based confirmation flow",
    ],
    highlightFeatures: [
      "Standard request review",
    ],
  },
  {
    id: "select",
    name: "Select",
    positioning: "Priority review, saved preferences, group tools.",
    price: "Demo tier",
    priceNote: "Modeled at a mid-tier monthly fee",
    badge: "Priority",
    features: [
      "Priority request review",
      "Saved preferences and party profiles",
      "Early access to limited drops",
      "Group planning tools (8+ headcount)",
      "Repeat request shortcuts",
    ],
    highlightFeatures: [
      "Priority review",
      "Early access drops",
    ],
  },
  {
    id: "black-card",
    name: "Black Card",
    positioning: "Concierge-style flow, members-first drops, route planning.",
    price: "Demo tier",
    priceNote: "Modeled at an annual concierge fee",
    badge: "Members First",
    features: [
      "Concierge-style request UI",
      "Members-first access drops",
      "Multi-stop route planning (dinner → lounge → club → room)",
      "Private review queue",
      "Highest priority across cities",
      "Off-menu and private room routing",
    ],
    highlightFeatures: [
      "Members-first drops",
      "Concierge route planning",
    ],
  },
];

export const getTier = (id: MembershipTier["id"]) =>
  membershipTiers.find((t) => t.id === id);

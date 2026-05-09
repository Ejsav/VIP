import type { AccessType } from "@/lib/types";

export const accessTypes: AccessType[] = [
  {
    id: "guest-list",
    name: "Guest List",
    short: "Front of the line, controlled entry.",
    description:
      "Skip-the-line guest list submissions for nights with controlled entry. The flow collects party size, arrival window, and host preference.",
    collects: ["Party size", "Arrival window", "Host preference"],
    icon: "Users",
  },
  {
    id: "private-table",
    name: "Private Table",
    short: "Bottle service and reserved seating.",
    description:
      "Bottle service tables with reserved seating and minimum spend ranges. The form qualifies budget tier, occasion, and atmosphere.",
    collects: ["Budget range", "Occasion", "Atmosphere"],
    icon: "Wine",
  },
  {
    id: "rooftop",
    name: "Rooftop Reservation",
    short: "Open-air, view-first venues.",
    description:
      "Reservations across rooftop bars, terraces, and skyline lounges. The flow captures sunset preference, party size, and seating style.",
    collects: ["Sunset window", "Party size", "Seating style"],
    icon: "Sunset",
  },
  {
    id: "private-room",
    name: "Private Room",
    short: "Closed doors, private hosting.",
    description:
      "Private rooms inside members-only venues for hosted nights and discreet gatherings. Routes by occasion, capacity, and approval window.",
    collects: ["Occasion", "Capacity", "Approval window"],
    icon: "DoorClosed",
  },
  {
    id: "birthday",
    name: "Birthday Night",
    short: "Coordinated celebration moments.",
    description:
      "Birthday-led requests with coordinated cake, sparkler, and table moments. Captures guest of honor, headcount, and theme.",
    collects: ["Guest of honor", "Headcount", "Theme"],
    icon: "Cake",
  },
  {
    id: "group-entry",
    name: "Group Entry",
    short: "Coordinated arrival for 8+.",
    description:
      "Coordinated entry for parties of eight or more. Routes by ratio, arrival timing, and combined party preference.",
    collects: ["Total headcount", "Ratio", "Arrival timing"],
    icon: "UsersRound",
  },
  {
    id: "dinner-to-club",
    name: "Dinner to Club Route",
    short: "One night, two stops, one flow.",
    description:
      "A planned route from dinner to a late-night room, sequenced through one request. Captures cuisine, tempo, and transition window.",
    collects: ["Cuisine preference", "Tempo", "Transition window"],
    icon: "Route",
  },
  {
    id: "concierge-night",
    name: "Concierge Night Plan",
    short: "Full-night planning request.",
    description:
      "A full-night plan request that combines dinner, lounge, club, and private room into a single concierge-style brief.",
    collects: ["Full-night intent", "Anchor venue", "Group profile"],
    icon: "Sparkles",
  },
];

export const getAccessType = (id: string) =>
  accessTypes.find((t) => t.id === id);

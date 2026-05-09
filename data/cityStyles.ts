import type { CityStyle, CityStyleId } from "@/lib/types";

export const cityStyles: CityStyle[] = [
  {
    id: "miami-energy",
    name: "Miami Energy",
    citySlug: "miami",
    cityName: "Miami",
    region: "South Florida",
    shortLabel: "Tropical, late, fast-tempo",
    description:
      "Tropical heat, ocean-side terraces, late dinners that cross into rooftop sets. Fast tempo by 1AM, slow burn after.",
    signature: ["Rooftop", "Late dinner", "Beach club", "High tempo"],
    tempo: "High-energy",
  },
  {
    id: "nyc-private-room",
    name: "New York Private Room",
    citySlug: "new-york",
    cityName: "New York",
    region: "Northeast",
    shortLabel: "Members rooms, supper, low light",
    description:
      "Velvet floors above the city. Private dining wings, members-only rooms, and after-dinner lounges that never publish a door.",
    signature: ["Private room", "Members club", "Editorial supper"],
    tempo: "Editorial",
  },
  {
    id: "vegas-table-service",
    name: "Vegas Table Service",
    citySlug: "las-vegas",
    cityName: "Las Vegas",
    region: "Mountain West",
    shortLabel: "Bottles, high-energy, hosted",
    description:
      "Hosted tables, sharp service, peak-tempo rooms. Dinner-to-club routes that pre-clear the door before you arrive.",
    signature: ["Bottle service", "Hosted table", "High-energy floor"],
    tempo: "High-energy",
  },
  {
    id: "la-rooftop",
    name: "LA Rooftop",
    citySlug: "los-angeles",
    cityName: "Los Angeles",
    region: "West Coast",
    shortLabel: "Sunset rooftops, slow build",
    description:
      "Hill-line views, slow-build rooftops, dinner first and an editorial close. Quiet luxury more than loud display.",
    signature: ["Rooftop", "Sunset", "Editorial vibe"],
    tempo: "Cinematic",
  },
  {
    id: "boston-supper-club",
    name: "Boston Supper Club",
    citySlug: "boston",
    cityName: "Boston",
    region: "Northeast",
    shortLabel: "Tailored, intimate, supper-led",
    description:
      "Tailored rooms above brick streets. Supper-club tempo: dinner long, music close, room small.",
    signature: ["Supper club", "Editorial", "Private dining"],
    tempo: "Editorial",
  },
  {
    id: "london-members-club",
    name: "London Members Club",
    citySlug: "london",
    cityName: "London",
    region: "United Kingdom",
    shortLabel: "Members floors, controlled",
    description:
      "Old-money posture, members-only floors, dinner upstairs and the city below. Discretion is the product.",
    signature: ["Members club", "Private floor", "Editorial dinner"],
    tempo: "Editorial",
  },
  {
    id: "dubai-skyline",
    name: "Dubai Skyline",
    citySlug: "dubai",
    cityName: "Dubai",
    region: "Middle East",
    shortLabel: "Skyline rooms, hosted, high-spend",
    description:
      "Tower-top rooms, late dinners with view, hosted floors that route the entire night for the table.",
    signature: ["Skyline view", "Hosted", "Private dining"],
    tempo: "Cinematic",
  },
  {
    id: "ibiza-late-night",
    name: "Ibiza Late Night",
    citySlug: "ibiza",
    cityName: "Ibiza",
    region: "Balearic Islands",
    shortLabel: "Late tempo, sunrise close",
    description:
      "After-hours rooms, set-led rooms, sunrise terraces. Built for guests who plan around the close, not the open.",
    signature: ["After-hours", "Sunrise", "Late tempo"],
    tempo: "Late-tempo",
  },
];

export function getCityStyle(id?: CityStyleId | string | null) {
  if (!id) return undefined;
  return cityStyles.find((c) => c.id === id);
}

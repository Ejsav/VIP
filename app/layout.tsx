import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { AmbientBackground } from "@/components/layout/AmbientBackground";
import { VerticalProvider } from "@/lib/VerticalContext";
import { VerticalSwitcher } from "@/components/system/VerticalSwitcher";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "The Afterlist — Private access to the city after dark · Concept by Eric Jokl",
  description:
    "A fictional premium nightlife access platform concept by Eric Jokl. Curated city-by-city access drops, members-only rooms, private tables, rooftops, and a multi-step request flow — built as a portfolio demonstration of luxury UX, marketplace structure, and conversion strategy.",
  metadataBase: new URL("https://ericjokl.com"),
  openGraph: {
    title: "The Afterlist — Private access to the city after dark",
    description:
      "Fictional premium nightlife access platform concept. Designed by Eric Jokl as a portfolio demonstration.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Afterlist · Concept by Eric Jokl",
    description:
      "A fictional luxury nightlife access platform demonstrating premium UX, marketplace structure, and conversion-focused request flows.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="font-sans bg-obsidian text-ivory antialiased grain selection:bg-champagne selection:text-obsidian">
        <VerticalProvider>
          <AmbientBackground />
          <Navbar />
          <main className="relative z-10">{children}</main>
          <Footer />
          <MobileStickyCTA />
          <VerticalSwitcher variant="rail" />
        </VerticalProvider>
      </body>
    </html>
  );
}

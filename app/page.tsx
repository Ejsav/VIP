import { Hero } from "@/components/sections/Hero";
import { FeaturedCities } from "@/components/sections/FeaturedCities";
import { AccessMap } from "@/components/sections/AccessMap";
import { AccessTypes } from "@/components/sections/AccessTypes";
import { FeaturedDrops } from "@/components/sections/FeaturedDrops";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { MembershipPreview } from "@/components/sections/MembershipPreview";
import { ProductSystem } from "@/components/sections/ProductSystem";
import { PortfolioSafeNotice } from "@/components/sections/PortfolioSafeNotice";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCities />
      <AccessMap />
      <AccessTypes />
      <FeaturedDrops />
      <HowItWorks />
      <MembershipPreview />
      <ProductSystem />
      <PortfolioSafeNotice />
      <FinalCTA />
    </>
  );
}

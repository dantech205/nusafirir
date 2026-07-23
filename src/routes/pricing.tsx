import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CtaBanner } from "@/components/site/CtaBanner";
import { PageHero } from "@/components/site/PageHero";
import { PricingSection } from "@/components/site/sections";
import { IMG } from "@/data/site";

export const Route = createFileRoute("/pricing")({
  component: () => (
    <div className="min-h-screen bg-background">
      <Navbar transparent />
      <PageHero title="Booking" image={IMG.heroServices} crumb="Booking" />
      <PricingSection />
      <CtaBanner />
      <Footer />
    </div>
  ),
  head: () => ({ meta: [{ title: "Pricing — Nusafiri" }, { name: "description", content: "Transparent Nusafiri travel pricing — Essential, Premium and Luxury tiers." }] }),
});

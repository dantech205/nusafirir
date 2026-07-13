import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CtaBanner } from "@/components/site/CtaBanner";
import { PageHero } from "@/components/site/PageHero";
import { FaqSection } from "@/components/site/sections";
import { IMG } from "@/data/site";

export const Route = createFileRoute("/faq")({
  component: () => (
    <div className="min-h-screen bg-background">
      <Navbar transparent />
      <PageHero title="FAQ" image={IMG.heroServices} crumb="FAQ" />
      <FaqSection />
      <CtaBanner />
      <Footer />
    </div>
  ),
  head: () => ({ meta: [{ title: "FAQ — Voyanta" }, { name: "description", content: "Answers to common questions about booking, payments, itineraries and support." }] }),
});

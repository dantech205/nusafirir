import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CtaBanner } from "@/components/site/CtaBanner";
import { PageHero } from "@/components/site/PageHero";
import { Eyebrow } from "@/components/site/Eyebrow";
import { Counter } from "@/components/site/Counter";
import { WhyChooseUs, TeamGrid, TestimonialsSection, ValuesSection } from "@/components/site/sections";
import { IMG } from "@/data/site";
import { Compass } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({ meta: [{ title: "About — Voyanta" }, { name: "description", content: "Meet Voyanta — a travel agency crafting unforgettable, considered journeys around the world." }] }),
});

function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar transparent />
      <PageHero title="About Us" image={IMG.heroAbout} crumb="About" />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-14">
          <div>
            <Eyebrow>About Us</Eyebrow>
            <h2 className="mt-5 text-4xl md:text-5xl leading-[1.05]">Creating Unforgettable Journeys Around the World</h2>
          </div>
          <p className="text-muted-foreground text-lg">Voyanta is a small team of travel obsessives with a simple belief: the best trips are the ones designed around you. We combine deep destination knowledge with quiet vendor relationships and 24/7 support.</p>
        </div>
      </section>
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-6">
          <div className="rounded-3xl bg-card border border-border p-8">
            <div className="h-14 w-14 rounded-full bg-foreground flex items-center justify-center" style={{ color: '#D2B073' }}><Compass className="h-6 w-6" /></div>
            <p className="mt-6 text-muted-foreground">At Voyanta we believe travel is more than visiting new places — it's a way of collecting stories, tasting cultures and returning home a little braver than you left.</p>
            <Link to="/contact" className="btn-outline-dark mt-6">Contact Us</Link>
          </div>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
            <img src={IMG.sailboat} alt="Explore Around" className="h-full w-full object-cover" />
            <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur text-white text-sm px-4 py-1.5 rounded-full">Explore Around</div>
          </div>
          <div className="space-y-5">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden -rotate-2 shadow-xl"><img src={IMG.aerialBeach} alt="" className="h-full w-full object-cover" /></div>
            <p className="text-muted-foreground">From mountain escapes and tropical beaches to cultural discoveries, we design journeys that fit how you actually travel — not the other way around.</p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-background border-y border-border">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
          {[[7,"Years Experience"],[300,"Destinations"],[10000,"Happy Travelers"],[50,"Travel Experts"]].map(([n,l]) => (
            <div key={l as string}><Counter to={n as number} label={l as string} /></div>
          ))}
        </div>
      </section>
      <ValuesSection withPhoto />
      <WhyChooseUs />
      <TeamGrid />
      <TestimonialsSection />
      <CtaBanner />
      <Footer />
    </div>
  );
}

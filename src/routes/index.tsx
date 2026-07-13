import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CtaBanner } from "@/components/site/CtaBanner";
import { HeroSlider } from "@/components/site/HeroSlider";
import { AboutSection, StatsRow, WhyChooseUs, ServicesList, HowItWorks, ValuesSection, TeamGrid, TestimonialsSection, PricingSection, FaqSection, BlogPreview } from "@/components/site/sections";
import { Counter } from "@/components/site/Counter";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar transparent />
      <HeroSlider />
      <section className="py-16 bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-start md:items-end gap-8 md:gap-16">
          <div className="text-sm tracking-[0.25em] uppercase text-muted-foreground">Trusted by</div>
          <Counter to={10000} big label="Travelers Worldwide" />
        </div>
      </section>
      <AboutSection />
      <StatsRow />
      <WhyChooseUs />
      <ServicesList />
      <HowItWorks />
      <ValuesSection />
      <TeamGrid />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <BlogPreview />
      <CtaBanner />
      <Footer />
    </div>
  );
}

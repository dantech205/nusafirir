import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CtaBanner } from "@/components/site/CtaBanner";
import { HeroSlider } from "@/components/site/HeroSlider";
import { AboutSection, StatsRow, WhyChooseUs, ServicesList, HowItWorks, TestimonialsSection, PricingSection, FaqSection, BlogPreview } from "@/components/site/sections";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar transparent />
      <HeroSlider />
      <AboutSection />
      <StatsRow />
      <WhyChooseUs />
      <ServicesList />
      <HowItWorks />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <BlogPreview />
      <CtaBanner />
      <Footer />
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CtaBanner } from "@/components/site/CtaBanner";
import { PageHero } from "@/components/site/PageHero";
import { IMG, testimonials } from "@/data/site";
import { Quote } from "lucide-react";

export const Route = createFileRoute("/testimonial")({
  component: TestimonialPage,
  head: () => ({ meta: [{ title: "Testimonials — Voyanta" }, { name: "description", content: "What Voyanta travelers say about their journeys." }] }),
});

function TestimonialPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar transparent />
      <PageHero title="Testimonials" image={IMG.heroTest} crumb="Testimonials" />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="relative bg-card rounded-3xl p-8 pl-10 border border-border">
              <div className="absolute left-0 top-6 bottom-6 w-1.5 bg-lime rounded-r" />
              <Quote className="h-8 w-8 text-lime" />
              <p className="mt-4 text-lg leading-relaxed">"{t.quote}"</p>
              <div className="mt-5 font-display font-semibold">{t.name}</div>
              <div className="text-sm text-muted-foreground">{t.type}</div>
            </div>
          ))}
        </div>
      </section>
      <CtaBanner />
      <Footer />
    </div>
  );
}

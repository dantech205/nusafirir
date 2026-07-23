import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { IMG } from "@/data/site";

export const Route = createFileRoute("/notice")({
  component: () => (
    <div className="min-h-screen bg-background">
      <Navbar transparent />
      <PageHero title="Notice" image={IMG.heroServices} crumb="Notice" />
      <section className="py-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <div className="eyebrow text-lime justify-center"><span>✳</span> Travel Advisory</div>
          <h2 className="mt-6 text-4xl md:text-5xl">Seasonal Operating Hours</h2>
          <p className="mt-6 text-muted-foreground">Our office will operate on reduced hours between December 24 and January 2. Emergency on-trip support remains 24/7 for all active bookings. Non-urgent enquiries submitted in this window will receive a reply on January 3.</p>
          <Link to="/contact" className="btn-lime mt-8 inline-flex">Contact Us</Link>
        </div>
      </section>
      <Footer />
    </div>
  ),
  head: () => ({ meta: [{ title: "Notice — Nusafiri" }] }),
});

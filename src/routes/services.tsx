import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CtaBanner } from "@/components/site/CtaBanner";
import { PageHero } from "@/components/site/PageHero";
import { Eyebrow } from "@/components/site/Eyebrow";
import { IMG, services } from "@/data/site";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({ meta: [{ title: "Services — Voyanta" }, { name: "description", content: "Vacation packages, adventure tours, cultural experiences and business travel — all designed by Voyanta." }] }),
});

function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar transparent />
      <PageHero title="Services" image={IMG.heroServices} crumb="Services" />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-14">
          <div>
            <Eyebrow>Our Services</Eyebrow>
            <h2 className="mt-5 text-4xl md:text-5xl leading-[1.05]">Comprehensive Travel Solutions for Every Journey</h2>
          </div>
          <p className="text-muted-foreground text-lg">Whether you're planning a relaxing getaway, an adventurous expedition, or a business trip, our team designs travel that feels considered, personal and effortlessly organised.</p>
        </div>
        <div className="mx-auto max-w-7xl px-6 mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <Link key={s.slug} to="/service-details/$slug" params={{ slug: s.slug }} className="group relative aspect-[3/4] rounded-3xl overflow-hidden">
              <img src={s.image} alt={s.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <div className="text-xl font-display font-semibold">{s.name}</div>
                <div className="mt-1 text-sm text-white/70">Explore →</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <CtaBanner />
      <Footer />
    </div>
  );
}

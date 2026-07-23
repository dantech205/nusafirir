import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Eyebrow } from "@/components/site/Eyebrow";
import { IMG, services } from "@/data/site";
import { Check, Clock } from "lucide-react";

export const Route = createFileRoute("/service-details/$slug")({
  component: ServiceDetails,
  loader: ({ params }) => {
    const svc = services.find((s) => s.slug === params.slug);
    if (!svc) throw notFound();
    return svc;
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.name} — Nusafiri` },
      { name: "description", content: loaderData.tagline },
      { property: "og:image", content: loaderData.image },
    ] : [],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center"><p>Service not found. <Link to="/services" className="text-lime">Back</Link></p></div>
  ),
  errorComponent: ({ reset }) => (
    <div className="min-h-screen flex items-center justify-center"><button onClick={reset} className="btn-lime">Try again</button></div>
  ),
});

function ServiceDetails() {
  const svc = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== svc.slug);
  return (
    <div className="min-h-screen bg-background">
      <Navbar transparent />
      <PageHero title="Service Details" image={IMG.heroServices} crumb="Service Details" />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-14">
          <h1 className="text-5xl md:text-6xl">{svc.name}</h1>
          <div>
            <div className="text-2xl font-display font-semibold">{svc.tagline}</div>
            <p className="mt-4 text-muted-foreground">{svc.intro}</p>
          </div>
        </div>
      </section>
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[1.5fr_1fr] gap-8 items-start">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden"><img src={svc.image} alt={svc.name} className="h-full w-full object-cover" /></div>
          <div className="rounded-3xl bg-card border border-border p-8">
            <div className="font-display text-xl font-semibold">Highlights</div>
            <ul className="mt-4 space-y-3">
              {svc.highlights.map((h: string) => <li key={h} className="flex items-start gap-3 text-sm"><Check className="h-4 w-4 mt-0.5 text-lime" /> {h}</li>)}
            </ul>
            <div className="my-6 h-px bg-border" />
            <div className="flex items-center gap-2 text-sm text-muted-foreground"><Clock className="h-4 w-4" /> Duration: {svc.duration}</div>
            <div className="mt-4 text-4xl font-display font-semibold">${svc.price}<span className="text-base text-muted-foreground font-normal"> / per person</span></div>
            <Link to="/contact" search={{ service: svc.slug }} className="mt-6 inline-flex btn-outline-dark w-full justify-center">Book Now</Link>
          </div>
        </div>
      </section>
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl">About this service</h2>
          <p className="mt-6 text-muted-foreground">{svc.body}</p>
          <p className="mt-4 text-muted-foreground">Every itinerary is designed by a senior travel consultant, reviewed by our on-ground team and stress-tested end-to-end before you receive it. If something doesn't feel right, we rebuild it — no design fee.</p>
        </div>
      </section>
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-14">
          <div>
            <h2 className="text-3xl md:text-4xl">Service Included</h2>
            <p className="mt-4 text-muted-foreground">Everything on this page is baked into the base rate. No surprise line items when you land, and no rushed upsells during your trip.</p>
          </div>
          <ul className="grid grid-cols-1 gap-3">
            {svc.included.map((i: string) => <li key={i} className="flex items-start gap-3"><Check className="h-4 w-4 mt-1 text-lime" /> {i}</li>)}
          </ul>
        </div>
      </section>
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-6">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden"><img src={IMG.mountain} alt="" className="h-full w-full object-cover" /></div>
          <div className="aspect-[4/3] rounded-3xl overflow-hidden"><img src={IMG.aerialBeach} alt="" className="h-full w-full object-cover" /></div>
        </div>
      </section>
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl">Service Benefit</h2>
          <p className="mt-6 text-muted-foreground">{svc.benefit}</p>
        </div>
      </section>
      <section className="py-24 bg-secondary/60">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <Eyebrow>Other Services</Eyebrow>
              <h2 className="mt-5 text-3xl md:text-5xl max-w-xl leading-[1.05]">Explore Other Services</h2>
            </div>
            <Link to="/services" className="btn-outline-dark">All Services</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {others.map((s) => (
              <Link key={s.slug} to="/service-details/$slug" params={{ slug: s.slug }} className="group relative aspect-[3/4] rounded-3xl overflow-hidden">
                <img src={s.image} alt={s.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white text-xl font-display font-semibold">{s.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

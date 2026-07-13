import { Link } from "@tanstack/react-router";
import { Compass, Globe2, Briefcase, Star, Phone, Play, Quote, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Eyebrow } from "./Eyebrow";
import { Counter } from "./Counter";
import { IMG, services, team, testimonials, pricing, faqs, blog, values } from "@/data/site";
import { useState } from "react";

export function AboutSection() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-14 items-start">
        <div>
          <Eyebrow>About Us</Eyebrow>
          <h2 className="mt-5 text-4xl md:text-5xl leading-[1.05]">Curating Remarkable Events. Delivering Bespoke Experiences.</h2>
        </div>
        <div className="space-y-6 text-muted-foreground">
          <div className="flex items-start gap-5">
            <div className="h-14 w-14 shrink-0 rounded-full bg-foreground text-lime flex items-center justify-center"><Compass className="h-6 w-6" /></div>
            <p>Nusafiri is a luxury hospitality and experiential concierge brand dedicated to creating meaningful, tailor-made experiences for discerning travelers, VIP guests, and visionary conveners.</p>
          </div>
          <p>From mountain escapes and tropical beaches to cultural discoveries and family retreats, we design journeys that fit how you actually travel — not the other way around.</p>
          <Link to="/about" className="btn-outline-dark mt-2">More About Us</Link>
        </div>
      </div>
    </section>
  );
}

export function StatsRow() {
  return (
    <section className="py-20 bg-background border-y border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-14">
          <h2 className="text-4xl md:text-5xl">Explore Around</h2>
          <p className="mt-4 text-muted-foreground">From bespoke travel and wellness journeys to high-level guest management, event logistics, and intentional convenings, we offer a seamless fusion of service, excellence and care to curate unforgettable experiences.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {[[7,"Years Experience"],[300,"Destinations"],[10000,"Happy Travelers"],[50,"Travel Experts"]].map(([n,l]) => (
            <div key={l as string}><Counter to={n as number} label={l as string} /></div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  const cards = [
    { icon: Globe2, title: "Handpicked Destinations", body: "Every route is scouted in person. If we wouldn't send our own family, it's not on the map." },
    { icon: Briefcase, title: "Tailored Travel Packages", body: "No rigid templates. Every itinerary is rebuilt around your pace, interests and budget." },
    { icon: Star, title: "Exceptional Service", body: "Senior travel designers, quiet vendor relationships and a bias toward hospitality." },
    { icon: Phone, title: "24/7 Customer Support", body: "Real humans on call from enquiry through arrival home — never a chatbot.", highlight: true },
  ];
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-start">
        <div>
          <Eyebrow>Why Choose Us</Eyebrow>
          <h2 className="mt-5 text-4xl md:text-5xl leading-[1.05]">Your Trusted Partner for Memorable Travel Experiences</h2>
          <div className="mt-10 grid grid-cols-2 gap-5">
            {cards.map((c) => (
              <div key={c.title} className={`rounded-3xl bg-card p-6 border ${c.highlight ? "border-lime" : "border-border"} transition hover:-translate-y-1 hover:shadow-lg`}>
                <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center"><c.icon className="h-5 w-5" /></div>
                <div className="mt-5 font-display text-lg font-semibold">{c.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-[560px] rounded-3xl overflow-hidden shadow-xl">
          <img src={IMG.turquoise} alt="" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
}

export function ServicesList() {
  return (
    <section className="py-24 bg-secondary/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <Eyebrow>Our Services</Eyebrow>
            <h2 className="mt-5 text-4xl md:text-5xl max-w-2xl leading-[1.05]">Comprehensive Travel Solutions for Every Journey</h2>
          </div>
          <div className="max-w-md text-muted-foreground">
            <p>From weekend escapes to complex multi-country expeditions, our team designs travel that feels considered, personal and effortlessly organised.</p>
            <Link to="/services" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold hover:text-lime">All Services →</Link>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <Link key={s.slug} to="/service-details/$slug" params={{ slug: s.slug }} className="group relative aspect-[3/4] rounded-3xl overflow-hidden">
              <img src={s.image} alt={s.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <div className="text-xl font-display font-semibold">{s.name}</div>
                <div className="mt-1 text-sm text-white/70 opacity-0 group-hover:opacity-100 transition">Explore →</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    { n: "01", t: "Explore Destinations", d: "Browse curated routes or tell us where your imagination goes first." },
    { n: "02", t: "Choose Your Package", d: "Pick a tier — Essential, Premium, Luxury — or ask for a bespoke design." },
    { n: "03", t: "Secure Your Booking", d: "Confirm dates, pay a small deposit and we lock in every reservation." },
    { n: "04", t: "Enjoy Your Journey", d: "Arrive, unpack, and lean on your 24/7 concierge for anything you need." },
  ];
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-4xl md:text-5xl max-w-2xl">Plan Your Perfect Journey in 4 Simple Steps</h2>
        <div className="mt-14 grid md:grid-cols-4 gap-8">
          {steps.map((s) => (
            <motion.div key={s.n} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div className="text-lime text-5xl font-display font-semibold">{s.n}</div>
              <div className="mt-4 text-xl font-display font-semibold">{s.t}</div>
              <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ValuesSection({ withPhoto = false }: { withPhoto?: boolean }) {
  return (
    <section className="py-24 bg-secondary/60">
      <div className="mx-auto max-w-7xl px-6">
        {withPhoto && <div className="text-center mb-14"><Eyebrow>Our Values</Eyebrow></div>}
        <h2 className={`text-4xl md:text-5xl ${withPhoto ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}`}>The Principles That Guide Every Journey</h2>
        <div className={`mt-14 ${withPhoto ? "grid lg:grid-cols-[1fr_auto_1fr] gap-10 items-center" : "grid md:grid-cols-4 gap-8"}`}>
          {withPhoto ? (
            <>
              <div className="space-y-8">
                {values.slice(0, 2).map((v) => <ValueCard key={v.title} {...v} />)}
              </div>
              <div className="h-[520px] w-full lg:w-[280px] rounded-3xl overflow-hidden shadow-xl"><img src={IMG.waterfall} alt="" className="h-full w-full object-cover" /></div>
              <div className="space-y-8">
                {values.slice(2).map((v) => <ValueCard key={v.title} {...v} />)}
              </div>
            </>
          ) : values.map((v) => <ValueCard key={v.title} {...v} />)}
        </div>
      </div>
    </section>
  );
}
function ValueCard({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <div className="text-xl font-display font-semibold">{title}</div>
      <div className="mt-4 h-px bg-border" />
      <p className="mt-4 text-sm text-muted-foreground">{body}</p>
    </div>
  );
}

export function TeamGrid({ items = team.slice(0, 3) }: { items?: typeof team }) {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Eyebrow>Meet Our Team</Eyebrow>
          <h2 className="mt-5 text-4xl md:text-5xl leading-[1.05]">The Travel Experts Behind Every Unforgettable Journey</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((m) => (
            <div key={m.name} className="relative aspect-[3/4] rounded-3xl overflow-hidden group">
              <img src={m.img} alt={m.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
              <div className="absolute top-4 left-4 bg-black/50 backdrop-blur text-white text-sm px-4 py-1.5 rounded-full">{m.name}</div>
              <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur text-white text-sm px-4 py-1.5 rounded-full">{m.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection({ items = testimonials.slice(0, 2) }: { items?: typeof testimonials }) {
  return (
    <section className="py-24 bg-secondary/60">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <Eyebrow>Testimonials</Eyebrow>
          <h2 className="mt-5 text-4xl md:text-5xl leading-[1.05]">What Our Travelers Say</h2>
          <p className="mt-4 text-muted-foreground max-w-md">Real stories from real Voyanta travelers — from solo adventurers to families of five.</p>
          <div className="mt-10 relative w-64 aspect-video rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
            <img src={IMG.mountain} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="h-14 w-14 rounded-full bg-lime text-foreground flex items-center justify-center group-hover:scale-110 transition"><Play className="h-5 w-5 ml-0.5" fill="currentColor" /></div>
            </div>
          </div>
        </div>
        <div className="space-y-5">
          {items.map((t) => (
            <div key={t.name} className="relative bg-card rounded-3xl p-8 pl-10 border border-border shadow-sm">
              <div className="absolute left-0 top-6 bottom-6 w-1.5 bg-lime rounded-r" />
              <Quote className="h-8 w-8 text-lime" />
              <p className="mt-4 text-lg text-foreground/90 leading-relaxed">"{t.quote}"</p>
              <div className="mt-5">
                <div className="font-display font-semibold">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.type}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PricingSection() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-4xl md:text-5xl">Choose your pricing plans</h2>
          <p className="mt-4 text-muted-foreground">Transparent tiers with no hidden fees. Every plan can be tailored — just ask.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {pricing.map((p) => (
            <div key={p.name} className={`rounded-3xl p-8 border transition ${p.highlight ? "bg-foreground text-primary-foreground border-foreground" : "bg-card border-border"}`}>
              <div className={`h-12 w-12 rounded-full flex items-center justify-center ${p.highlight ? "bg-lime text-foreground" : "bg-muted"}`}>
                <Compass className="h-5 w-5" />
              </div>
              <div className="mt-6 text-2xl font-display font-semibold">{p.name}</div>
              <p className={`mt-2 text-sm ${p.highlight ? "text-white/70" : "text-muted-foreground"}`}>{p.desc}</p>
              <div className="mt-6 flex items-end gap-2">
                <div className="text-5xl font-display font-semibold">${p.price}</div>
                <div className={`pb-2 text-sm ${p.highlight ? "text-white/70" : "text-muted-foreground"}`}>/ per person</div>
              </div>
              <Link to="/contact" search={{ plan: p.name }} className={p.highlight ? "btn-lime mt-6 w-full" : "btn-lime mt-6 w-full"}>Book Now</Link>
              <ul className="mt-8 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3"><Check className={`h-4 w-4 mt-0.5 ${p.highlight ? "text-lime" : "text-foreground"}`} /> {f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 bg-secondary/60">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[1fr_1.4fr] gap-14">
        <div>
          <h2 className="text-4xl md:text-5xl leading-[1.05]">Frequently Asked Questions</h2>
          <p className="mt-6 text-muted-foreground">Still have questions? Our travel team is one message away.</p>
          <Link to="/contact" className="btn-outline-dark mt-6">Contact Us</Link>
        </div>
        <div className="divide-y divide-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="py-5">
                <button onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-start gap-6 text-left">
                  <span className="text-lime font-display text-lg w-10 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <span className="flex-1 font-display text-lg md:text-xl">{f.q}</span>
                  <span className="text-2xl leading-none">{isOpen ? "–" : "+"}</span>
                </button>
                {isOpen && <div className="pl-16 pr-8 pt-3 text-muted-foreground">{f.a}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function BlogPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 gap-6">
          <h2 className="text-4xl md:text-5xl max-w-xl leading-[1.05]">Travel Stories, Tips & Destination Guides</h2>
          <Link to="/blog" className="text-sm font-semibold hover:text-lime">All Stories →</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {blog.map((b) => (
            <Link key={b.slug} to="/blog/$slug" params={{ slug: b.slug }} className="group">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                <img src={b.img} alt={b.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="mt-5 text-xs uppercase tracking-widest text-muted-foreground">{b.author} — {b.date}</div>
              <div className="mt-2 font-display text-xl font-semibold group-hover:text-lime transition">{b.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{b.excerpt}</p>
              <div className="mt-3 text-sm font-semibold">Read More →</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

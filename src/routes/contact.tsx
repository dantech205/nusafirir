import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CtaBanner } from "@/components/site/CtaBanner";
import { PageHero } from "@/components/site/PageHero";
import { IMG } from "@/data/site";
import { useForm } from "react-hook-form";
import { Phone, Clock, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({ meta: [{ title: "Contact — Voyanta" }, { name: "description", content: "Talk to a Voyanta travel consultant. We reply within one business day." }] }),
});

type FormValues = { name: string; email: string; phone: string; message: string };

function Contact() {
  const { register, handleSubmit, reset, formState: { isSubmitSuccessful } } = useForm<FormValues>();
  return (
    <div className="min-h-screen bg-background">
      <Navbar transparent />
      <PageHero title="Contact" image={IMG.heroContact} crumb="Contact" />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-14">
          <h2 className="text-4xl md:text-5xl">Get In Touch</h2>
          <div>
            <div className="text-2xl font-display font-semibold">Let's Plan Your Next Adventure Together</div>
            <p className="mt-4 text-muted-foreground">Tell us a little about the trip you're dreaming of. A travel consultant will reply within one business day with a tailored plan.</p>
          </div>
        </div>
      </section>
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[1.2fr_1fr] gap-8">
          <form onSubmit={handleSubmit((v) => { console.log(v); reset(); })} className="rounded-3xl bg-card border border-border p-8 space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <input {...register("name", { required: true })} placeholder="Full Name" className="w-full rounded-full border border-border bg-background px-5 py-3 focus:outline-none focus:border-lime" />
              <input {...register("email", { required: true })} type="email" placeholder="Email Address" className="w-full rounded-full border border-border bg-background px-5 py-3 focus:outline-none focus:border-lime" />
            </div>
            <input {...register("phone")} placeholder="Phone" className="w-full rounded-full border border-border bg-background px-5 py-3 focus:outline-none focus:border-lime" />
            <textarea {...register("message", { required: true })} rows={6} placeholder="Message" className="w-full rounded-3xl border border-border bg-background px-5 py-4 focus:outline-none focus:border-lime" />
            <button className="btn-outline-dark">Send Message</button>
            {isSubmitSuccessful && <div className="text-sm text-lime">Thanks — we'll be in touch shortly.</div>}
          </form>
          <div className="relative aspect-square rounded-3xl overflow-hidden">
            <img src={IMG.jungle} alt="" className="h-full w-full object-cover" />
            <div className="absolute top-6 right-6 bg-black/50 backdrop-blur text-white text-xs tracking-widest uppercase px-4 py-1.5 rounded-full">Travel Experts</div>
          </div>
        </div>
      </section>
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-6">
          {[
            { I: Phone, t: "Phone Number", l: ["+1 (555) 010-2233", "+1 (555) 010-9987"] },
            { I: Clock, t: "Working Hours", l: ["Mon–Fri: 09:00–18:00", "Sat: 09:00–15:00", "Sun: Closed"] },
            { I: MapPin, t: "Office Address", l: ["221B Palm Grove Ave,", "Santa Monica, CA 90401"] },
          ].map((c) => (
            <div key={c.t} className="rounded-3xl bg-card border border-border p-8 text-center">
              <div className="mx-auto h-14 w-14 rounded-full bg-foreground text-lime flex items-center justify-center"><c.I className="h-5 w-5" /></div>
              <div className="mt-5 font-display text-lg font-semibold">{c.t}</div>
              <div className="mt-2 text-sm text-muted-foreground">{c.l.map((x) => <div key={x}>{x}</div>)}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="aspect-[21/9] rounded-3xl overflow-hidden">
            <iframe title="Voyanta office" src="https://www.openstreetmap.org/export/embed.html?bbox=-118.5%2C34.00%2C-118.45%2C34.03&layer=mapnik" className="h-full w-full border-0" />
          </div>
        </div>
      </section>
      <CtaBanner />
      <Footer />
    </div>
  );
}

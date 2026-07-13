import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CtaBanner } from "@/components/site/CtaBanner";
import { PageHero } from "@/components/site/PageHero";
import { IMG } from "@/data/site";
import { MapPin, Briefcase } from "lucide-react";

const jobs = [
  { title: "Senior Travel Consultant", team: "Consulting", location: "Remote — Americas", type: "Full-time" },
  { title: "Adventure Guide (Alpine)", team: "Field Operations", location: "Chamonix, FR", type: "Seasonal" },
  { title: "Cultural Experiences Lead", team: "Product", location: "Lisbon, PT", type: "Full-time" },
  { title: "Operations Coordinator", team: "Operations", location: "Remote — EU", type: "Full-time" },
];

export const Route = createFileRoute("/career")({
  component: Career,
  head: () => ({ meta: [{ title: "Careers — Voyanta" }, { name: "description", content: "Open roles at Voyanta. Join a team that builds trips travelers remember for a lifetime." }] }),
});

function Career() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar transparent />
      <PageHero title="Career" image={IMG.mountain} crumb="Career" />
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 space-y-4">
          {jobs.map((j) => (
            <div key={j.title} className="rounded-3xl bg-card border border-border p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <div className="font-display text-xl font-semibold">{j.title}</div>
                <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2"><Briefcase className="h-4 w-4" />{j.team}</span>
                  <span className="flex items-center gap-2"><MapPin className="h-4 w-4" />{j.location}</span>
                  <span>{j.type}</span>
                </div>
              </div>
              <Link to="/contact" className="btn-lime">Apply</Link>
            </div>
          ))}
        </div>
      </section>
      <CtaBanner />
      <Footer />
    </div>
  );
}

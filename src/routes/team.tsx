import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CtaBanner } from "@/components/site/CtaBanner";
import { PageHero } from "@/components/site/PageHero";
import { TeamGrid } from "@/components/site/sections";
import { IMG, team } from "@/data/site";

export const Route = createFileRoute("/team")({
  component: () => (
    <div className="min-h-screen bg-background">
      <Navbar transparent />
      <PageHero title="Team" image={IMG.heroAbout} crumb="Team" />
      <TeamGrid items={team} />
      <CtaBanner />
      <Footer />
    </div>
  ),
  head: () => ({ meta: [{ title: "Team — Voyanta" }, { name: "description", content: "The Voyanta team — travel designers, guides and operators behind every journey." }] }),
});

import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CtaBanner } from "@/components/site/CtaBanner";
import { PageHero } from "@/components/site/PageHero";
import { IMG, blog } from "@/data/site";

export const Route = createFileRoute("/blog")({
  component: Blog,
  head: () => ({ meta: [{ title: "Blog — Nusafiri" }, { name: "description", content: "Travel stories, tips and destination guides from the Nusafiri team." }] }),
});

function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar transparent />
      <PageHero title="Memories" image={IMG.heroTest} crumb="Memories" />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-6">
          {blog.map((b) => (
            <Link key={b.slug} to="/blog/$slug" params={{ slug: b.slug }} className="group">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden"><img src={b.img} alt={b.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /></div>
              <div className="mt-5 text-xs uppercase tracking-widest text-muted-foreground">{b.author} — {b.date}</div>
              <div className="mt-2 font-display text-xl font-semibold group-hover:text-lime transition">{b.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{b.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
      <CtaBanner />
      <Footer />
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { IMG } from "@/data/site";

export const Route = createFileRoute("/404")({
  component: () => (
    <div className="min-h-screen bg-background">
      <Navbar transparent />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img src={IMG.heroHome} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-6">
          <div className="text-9xl md:text-[12rem] font-display font-semibold text-lime">404</div>
          <h1 className="mt-4 text-4xl md:text-5xl">You've wandered off the map</h1>
          <p className="mt-4 text-white/80 max-w-md mx-auto">This page doesn't exist — but plenty of destinations still do.</p>
          <Link to="/" className="btn-lime mt-8 inline-flex">Back to Home</Link>
        </div>
      </section>
      <Footer />
    </div>
  ),
  head: () => ({ meta: [{ title: "404 — Voyanta" }] }),
});

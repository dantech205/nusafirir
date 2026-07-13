import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { IMG } from "@/data/site";

export function CtaBanner() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-56 h-72 rounded-3xl overflow-hidden shadow-xl -rotate-6">
          <img src={IMG.waterfall} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-56 h-72 rounded-3xl overflow-hidden shadow-xl rotate-6">
          <img src={IMG.aerialBeach} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="text-center max-w-2xl mx-auto py-12">
          <h2 className="text-4xl md:text-6xl">Ready to Explore Your Next Destination?</h2>
          <p className="mt-4 text-muted-foreground">Your dream vacation is just a few clicks away.</p>
          <Link to="/contact" className="btn-lime mt-8 inline-flex">Get Started</Link>
        </div>
        <div className="mt-10 flex items-center justify-between text-sm text-muted-foreground">
          <div className="hidden md:block">Follow us on Social Media</div>
          <div className="flex gap-3 mx-auto md:mx-0">
            {[Facebook, Twitter, Youtube, Instagram].map((I, i) => (
              <a key={i} href="#" className="h-9 w-9 rounded-full border border-border flex items-center justify-center hover:bg-lime hover:border-lime transition"><I className="h-4 w-4" /></a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

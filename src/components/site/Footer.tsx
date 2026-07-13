import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0f0f10] text-white/80">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="text-2xl font-display font-semibold text-white flex items-center gap-2"><span className="text-lime">✻</span> Nusafiri</div>
          <p className="mt-4 max-w-sm text-sm">Handpicked destinations, tailored packages and unforgettable journeys — designed by travelers, for travelers.</p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Twitter, Youtube, Instagram].map((I, i) => (
              <a key={i} href="#" className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-lime hover:text-foreground hover:border-lime transition"><I className="h-4 w-4" /></a>
            ))}
          </div>
        </div>
        <div>
          <div className="text-white font-semibold mb-4">Quick Links</div>
          <ul className="space-y-2 text-sm">
            {[["/","Home"],["/about","About"],["/services","Services"],["/team","Team"]].map(([to,l]) => <li key={to}><Link to={to} className="hover:text-lime">{l}</Link></li>)}
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold mb-4">Explore</div>
          <ul className="space-y-2 text-sm">
            {[["/testimonial","Testimonial"],["/pricing","Pricing"],["/career","Career"],["/faq","FAQ"]].map(([to,l]) => <li key={to}><Link to={to} className="hover:text-lime">{l}</Link></li>)}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs text-white/60">
          <div>© {new Date().getFullYear()} Nusafiri. All rights reserved.</div>
          <div className="flex gap-6"><a href="#" className="hover:text-lime">Privacy Policy</a><a href="#" className="hover:text-lime">Term & Condition</a><a href="#" className="hover:text-lime">Disclaimer</a></div>
        </div>
      </div>
    </footer>
  );
}

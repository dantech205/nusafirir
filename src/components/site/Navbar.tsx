import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const servicesMenu = [
  { to: "/services", label: "All Services" },
  { to: "/service-details/vacation-packages", label: "Vacation Packages" },
  { to: "/service-details/adventure-tours", label: "Adventure Tours" },
  { to: "/service-details/cultural-experiences", label: "Cultural Experiences" },
  { to: "/service-details/business-travel", label: "Business Travel" },
];
const pagesMenu = [
  { to: "/contact", label: "Contact" },
  { to: "/testimonial", label: "Testimonial" },
  { to: "/pricing", label: "Pricing" },
  { to: "/career", label: "Career" },
  { to: "/team", label: "Team" },
  { to: "/faq", label: "FAQ" },
  { to: "/blog", label: "Blog" },
  { to: "/notice", label: "Notice Page" },
  { to: "/404", label: "404 Page" },
];

export function Navbar({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const solid = !transparent || scrolled;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${solid ? "bg-white/95 backdrop-blur border-b border-border shadow-sm" : "bg-transparent"}`}>
      <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
        <Link to="/" className={`flex items-center gap-2 text-xl font-display font-semibold tracking-tight ${solid ? "text-foreground" : "text-white"}`}>
          <span className="text-lime text-2xl">✻</span> Voyanta
        </Link>
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
          {[
            { to: "/", label: "HOME" },
            { to: "/about", label: "ABOUT" },
          ].map((l) => (
            <Link key={l.to} to={l.to} className={solid ? "text-foreground hover:text-lime" : "text-white hover:text-lime"}>{l.label}</Link>
          ))}
          <Dropdown label="SERVICES" items={servicesMenu} solid={solid} />
          <Dropdown label="PAGES" items={pagesMenu} solid={solid} />
        </nav>
        <div className="hidden lg:block">
          <Link to="/contact" className="btn-lime">Contact Us</Link>
        </div>
        <button className="lg:hidden" onClick={() => setOpen(true)} aria-label="Menu">
          <Menu className={solid ? "text-foreground" : "text-white"} />
        </button>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col">
          <div className="flex items-center justify-between h-20 px-6 border-b border-border">
            <span className="text-xl font-display font-semibold"><span className="text-lime">✻</span> Voyanta</span>
            <button onClick={() => setOpen(false)} aria-label="Close"><X /></button>
          </div>
          <nav className="flex flex-col px-6 py-6 gap-4 text-lg">
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setOpen(false)}>About</Link>
            <details><summary className="cursor-pointer">Services</summary>
              <div className="pl-4 pt-3 flex flex-col gap-2 text-base">
                {servicesMenu.map(i => <Link key={i.to} to={i.to} onClick={() => setOpen(false)}>{i.label}</Link>)}
              </div>
            </details>
            <details><summary className="cursor-pointer">Pages</summary>
              <div className="pl-4 pt-3 flex flex-col gap-2 text-base">
                {pagesMenu.map(i => <Link key={i.to} to={i.to} onClick={() => setOpen(false)}>{i.label}</Link>)}
              </div>
            </details>
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-lime mt-4 w-fit">Contact Us</Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function Dropdown({ label, items, solid }: { label: string; items: { to: string; label: string }[]; solid: boolean }) {
  return (
    <div className="relative group">
      <button className={`flex items-center gap-1 ${solid ? "text-foreground hover:text-lime" : "text-white hover:text-lime"}`}>
        {label} <ChevronDown className="h-3.5 w-3.5" />
      </button>
      <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
        <div className="min-w-[220px] bg-white border border-border rounded-xl shadow-lg py-2">
          {items.map((i) => (
            <Link key={i.to} to={i.to} className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-lime">{i.label}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}

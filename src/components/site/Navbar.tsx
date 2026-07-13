import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const mainMenu = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Experiences" },
  { to: "/blog", label: "Memories" },
  { to: "/pricing", label: "Booking" },
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
          {mainMenu.map((l) => (
            <Link key={l.to} to={l.to} className={solid ? "text-foreground hover:text-lime" : "text-white hover:text-lime"}>{l.label}</Link>
          ))}
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
            {mainMenu.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)}>{l.label}</Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-lime mt-4 w-fit">Contact Us</Link>
          </nav>
        </div>
      )}
    </header>
  );
}

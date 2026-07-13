import { Link } from "@tanstack/react-router";

export function PageHero({ title, image, crumb }: { title: string; image: string; crumb: string }) {
  return (
    <section className="relative h-[52vh] min-h-[380px] w-full overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-semibold">{title}</h1>
        <div className="mt-4 text-xs tracking-[0.25em] uppercase text-white/80">
          <Link to="/" className="hover:text-lime">Home</Link>
          <span className="mx-3">▪</span>
          <span className="text-lime">{crumb}</span>
        </div>
      </div>
    </section>
  );
}

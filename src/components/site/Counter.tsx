import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

export function Counter({ to, suffix = "+", label, big = false }: { to: number; suffix?: string; label?: string; big?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  const display = to >= 1000 ? `${(n / 1000).toFixed(n >= 1000 ? 0 : 1)}K` : n.toString();
  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className={big ? "text-6xl md:text-8xl font-display font-semibold tracking-tight" : "text-4xl md:text-5xl font-display font-semibold tracking-tight"}
      >
        {display}{suffix}
      </motion.div>
      {label && <div className="mt-2 text-sm text-muted-foreground">{label}</div>}
    </div>
  );
}

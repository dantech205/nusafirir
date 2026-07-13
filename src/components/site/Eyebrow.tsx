export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span className={"eyebrow " + (light ? "text-white/80" : "text-foreground/80")}>
      <span className="text-lime text-lg leading-none">✳</span>
      {children}
    </span>
  );
}

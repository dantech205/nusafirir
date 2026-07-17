export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span
      className="eyebrow"
      style={{
        color: '#07090DCC',
        fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
        fontSize: '11.5px',
      }}
    >
      <span className="leading-none" style={{ color: '#16062B', fontSize: '11.5px' }}>✳</span>
      {children}
    </span>
  );
}

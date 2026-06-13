"use client";

export function AuroraBackground({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {/* Mesh gradient blobs */}
      <div className="absolute -top-1/4 -left-1/4 w-[60%] h-[60%] rounded-full bg-[radial-gradient(circle,var(--color-gradient-from)_0%,transparent_70%)] opacity-25 blur-3xl animate-aurora-1" />
      <div className="absolute top-1/3 -right-1/4 w-[55%] h-[55%] rounded-full bg-[radial-gradient(circle,var(--color-accent)_0%,transparent_70%)] opacity-20 blur-3xl animate-aurora-2" />
      <div className="absolute -bottom-1/4 left-1/4 w-[50%] h-[50%] rounded-full bg-[radial-gradient(circle,var(--color-secondary)_0%,transparent_70%)] opacity-15 blur-3xl animate-aurora-3" />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-[var(--color-accent)] animate-particle"
            style={{
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              left: `${(i * 8.3) % 100}%`,
              top: `${(i * 13.7) % 100}%`,
              opacity: 0.15 + (i % 4) * 0.05,
              animationDuration: `${14 + (i % 5) * 3}s`,
              animationDelay: `${i * 0.7}s`,
            }}
          />
        ))}
      </div>

      {/* Soft moving lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]" preserveAspectRatio="none">
        <line x1="0" y1="20%" x2="100%" y2="35%" stroke="var(--color-accent)" strokeWidth="1" className="animate-line-drift" />
        <line x1="0" y1="70%" x2="100%" y2="55%" stroke="var(--color-primary)" strokeWidth="1" className="animate-line-drift-reverse" />
      </svg>

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.025] mix-blend-overlay" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />
    </div>
  );
}

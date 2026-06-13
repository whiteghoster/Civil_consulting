"use client";

import { useState, MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export function RippleButton({
  children,
  className,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setRipples((prev) => [...prev, { id, x: e.clientX - rect.left, y: e.clientY - rect.top }]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 650);
    onClick?.();
  };

  return (
    <button onClick={handleClick} className={cn("relative overflow-hidden btn-shine", className)}>
      {children}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="ripple-effect"
          style={{ left: r.x, top: r.y }}
        />
      ))}
    </button>
  );
}

"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const move = (e: MouseEvent) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed z-[9998] hidden lg:block"
      style={{
        width: "500px",
        height: "500px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(232,196,104,0.06) 0%, rgba(232,196,104,0.02) 40%, transparent 70%)",
        transform: "translate(-50%, -50%)",
        transition: "left 0.12s ease-out, top 0.12s ease-out",
        top: "-999px",
        left: "-999px",
      }}
    />
  );
}

"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

type Berry = { id: number; x: number; y: number; size: number };

type Props = { count?: number };

export default function FloatingBerries({ count = 6 }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [berries, setBerries] = useState<Berry[]>([]);

  // Generate random positions client-side only to avoid SSR hydration mismatches
  useEffect(() => {
    const arr: Berry[] = Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 6 + Math.random() * 12,
    }));
    setBerries(arr);
  }, []);

  // Animate after berries are placed
  useEffect(() => {
    if (!containerRef.current || berries.length === 0) return;
    const ctx = gsap.context(() => {
      berries.forEach((b) => {
        const el = document.getElementById(`berry-${b.id}`);
        if (!el) return;
        const randY = 4 + Math.random() * 6;
        const randX = 2 + Math.random() * 5;
        const dur = 6 + Math.random() * 4;
        const tl = gsap.timeline({ repeat: -1, yoyo: true });
        tl.to(el, {
          y: `+=${randY}`,
          x: `+=${randX}`,
          duration: dur,
          ease: "sine.inOut",
          opacity: 0.4,
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, [berries]);

  return (
    <div ref={containerRef} aria-hidden className="pointer-events-none absolute inset-0 -z-0" suppressHydrationWarning>
      {berries.map((b) => (
        <div
          key={b.id}
          id={`berry-${b.id}`}
          style={{
            position: "absolute",
            left: `${b.x}%`,
            top: `${b.y}%`,
            width: b.size,
            height: b.size,
            borderRadius: "9999px",
            background: "radial-gradient(circle, rgba(59,130,246,0.45), rgba(59,130,246,0))",
            boxShadow: "0 0 10px rgba(59,130,246,0.25)",
          }}
        />
      ))}
    </div>
  );
}
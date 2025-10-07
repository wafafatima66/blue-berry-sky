"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Berry = { id: number; x: number; y: number; size: number; dx: number; dy: number; dur: number };

type Props = { count?: number };

export default function FloatingBerries({ count = 6 }: Props) {
  const [berries, setBerries] = useState<Berry[]>([]);

  // Generate random positions client-side only to avoid SSR hydration mismatches
  useEffect(() => {
    const arr: Berry[] = Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 6 + Math.random() * 12,
      dx: 2 + Math.random() * 5,
      dy: 4 + Math.random() * 6,
      dur: 6 + Math.random() * 4,
    }));
    setBerries(arr);
  }, [count]);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-0" suppressHydrationWarning>
      {berries.map((b) => (
        <motion.div
          key={b.id}
          initial={{ x: 0, y: 0, opacity: 0.3 }}
          animate={{ x: [0, b.dx], y: [0, b.dy], opacity: [0.3, 0.45] }}
          transition={{ duration: b.dur, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
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
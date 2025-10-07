"use client";
import { motion } from "framer-motion";

const dots = Array.from({ length: 18 }).map((_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 10 + Math.random() * 20,
  delay: Math.random() * 4,
}));

export default function NeonIcons() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-0">
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <radialGradient id="berry" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
      {dots.map((d) => (
        <motion.div
          key={d.id}
          className="neon"
          style={{
            position: "absolute",
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: d.size,
            height: d.size,
            borderRadius: "9999px",
            background: "radial-gradient(circle, rgba(56,189,248,0.7), rgba(56,189,248,0))",
            opacity: 0.55,
          }}
          animate={{ y: [0, -8, 0], x: [0, 6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: d.delay }}
        />
      ))}
    </div>
  );
}



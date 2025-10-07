"use client";
import { motion } from "framer-motion";

type Berry = {
  id: number;
  x: number;
  y: number;
  scale: number;
  delay: number;
};

const berries: Berry[] = Array.from({ length: 10 }).map((_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  scale: 0.6 + Math.random() * 0.8,
  delay: Math.random() * 3,
}));

function BerrySVG() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <defs>
        <radialGradient id="g" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.1" />
        </radialGradient>
      </defs>
      {/* cluster of berries */}
      <circle cx="14" cy="18" r="8" fill="url(#g)" />
      <circle cx="24" cy="16" r="8" fill="url(#g)" />
      <circle cx="20" cy="26" r="8" fill="url(#g)" />
      {/* leaf */}
      <path d="M26 10 C30 6, 36 6, 34 12 C30 12, 28 12, 26 10" fill="#22c55e" opacity="0.6" />
    </svg>
  );
}

export default function BerryField() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-0">
      {berries.map((b) => (
        <motion.div
          key={b.id}
          style={{ position: "absolute", left: `${b.x}%`, top: `${b.y}%` }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.6, scale: b.scale, y: [0, -6, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: b.delay }}
          className="neon"
        >
          <BerrySVG />
        </motion.div>
      ))}
    </div>
  );
}



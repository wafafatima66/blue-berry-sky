"use client";
import { motion, useAnimationControls, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function Clouds() {
  const controls = useAnimationControls();
  const { scrollY } = useScroll();

  // subtle parallax based on scroll
  const backY = useTransform(scrollY, [0, 600], [0, 14]);
  const midY = useTransform(scrollY, [0, 600], [0, 22]);
  const frontY = useTransform(scrollY, [0, 600], [0, 30]);

  useEffect(() => {
    controls.start({
      x: [0, 18, -18, 0],
      y: [0, -10, 8, 0],
      opacity: [0.7, 0.85, 0.8, 0.7],
      transition: { duration: 24, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
    });
  }, [controls]);

  return (
    <div aria-hidden className="fixed inset-0 pointer-events-none z-0">
      {/* sky wash (stronger, still subtle) */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-100/70 to-white" />

      {/* Back layer: large, very soft blobs */}
      <motion.div style={{ y: backY }} className="absolute inset-x-0 top-0 h-[55vh] opacity-85">
        <motion.div animate={controls} className="absolute left-[6%] top-[8%] w-72 h-36 rounded-full mix-blend-soft-light" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.75) 40%, rgba(147, 197, 253, 0.35) 100%)", filter: "blur(42px)" }} />
        <motion.div animate={controls} className="absolute left-[26%] top-[18%] w-96 h-40 rounded-full mix-blend-soft-light" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.72) 40%, rgba(147, 197, 253, 0.33) 100%)", filter: "blur(40px)" }} />
        <motion.div animate={controls} className="absolute left-[52%] top-[10%] w-80 h-36 rounded-full mix-blend-soft-light" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.75) 40%, rgba(125, 211, 252, 0.34) 100%)", filter: "blur(38px)" }} />
        <motion.div animate={controls} className="absolute left-[74%] top-[16%] w-72 h-34 rounded-full mix-blend-soft-light" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.7) 40%, rgba(147, 197, 253, 0.3) 100%)", filter: "blur(36px)" }} />
      </motion.div>

      {/* Mid layer: moderate blur for depth */}
      <motion.div style={{ y: midY }} className="absolute inset-x-0 top-[25vh] h-[45vh] opacity-90">
        <motion.div animate={controls} className="absolute left-[14%] top-[10%] w-80 h-40 rounded-full mix-blend-soft-light" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.75) 40%, rgba(147, 197, 253, 0.38) 100%)", filter: "blur(36px)" }} />
        <motion.div animate={controls} className="absolute left-[38%] top-[14%] w-[26rem] h-44 rounded-full mix-blend-soft-light" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.75) 40%, rgba(59, 130, 246, 0.30) 100%)", filter: "blur(38px)" }} />
        <motion.div animate={controls} className="absolute left-[62%] top-[8%] w-96 h-40 rounded-full mix-blend-soft-light" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.75) 40%, rgba(147, 197, 253, 0.34) 100%)", filter: "blur(36px)" }} />
      </motion.div>

      {/* Front layer: slightly denser, slow drift */}
      <motion.div style={{ y: frontY }} className="absolute inset-x-0 top-[50vh] h-[35vh] opacity-95">
        <motion.div animate={controls} className="absolute left-[10%] top-[6%] w-72 h-36 rounded-full mix-blend-soft-light" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.8) 40%, rgba(147, 197, 253, 0.42) 100%)", filter: "blur(34px)" }} />
        <motion.div animate={controls} className="absolute left-[34%] top-[12%] w-[22rem] h-40 rounded-full mix-blend-soft-light" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.78) 40%, rgba(125, 211, 252, 0.36) 100%)", filter: "blur(32px)" }} />
        <motion.div animate={controls} className="absolute left-[58%] top-[6%] w-80 h-36 rounded-full mix-blend-soft-light" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.8) 40%, rgba(147, 197, 253, 0.4) 100%)", filter: "blur(32px)" }} />
      </motion.div>
    </div>
  );
}
"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BerryIcon from "./BerryIcon";

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), 1500);
    return () => clearTimeout(timeout);
  }, []);

  if (!visible) return null;
  return (
    <motion.div initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none" aria-hidden>
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50/60 to-white" />
      <div className="relative flex flex-col items-center gap-3">
        <motion.div initial={{ opacity: 0, y: 8, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.6, ease: "easeOut" }}>
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 1.2, ease: "linear", repeat: Infinity }}>
            <BerryIcon className="w-10 h-10" />
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }} className="text-2xl md:text-3xl font-extrabold tracking-wide text-slate-900">
          Blueberry IT Sky
        </motion.div>
      </div>
    </motion.div>
  );
}
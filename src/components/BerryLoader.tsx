"use client";
import React from "react";
import { motion } from "framer-motion";

export default function BerryLoader() {
  return (
    <div className="inline-flex items-center gap-4">
      <div className="relative w-14 h-14">
        <motion.svg
          viewBox="0 0 40 40"
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
        >
          <defs>
            <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
          </defs>
          <circle cx="20" cy="20" r="16" fill="none" stroke="url(#ringGrad)" strokeWidth="3" strokeLinecap="round" strokeDasharray="60 40" />
        </motion.svg>
        {/* berries as dots along the ring */}
        <motion.div className="absolute -top-1 left-1" animate={{ y: [0, 2, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <div className="w-3 h-3 rounded-full bg-sky-400 ring-2 ring-sky-200" />
        </motion.div>
        <motion.div className="absolute bottom-0 right-0" animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}>
          <div className="w-3 h-3 rounded-full bg-sky-500 ring-2 ring-sky-200" />
        </motion.div>
      </div>
      <div>
        <div className="text-sm font-semibold">Loading secure systems</div>
        <div className="text-xs text-slate-500">Optimizing clouds and hardware pipelines…</div>
      </div>
    </div>
  );
}
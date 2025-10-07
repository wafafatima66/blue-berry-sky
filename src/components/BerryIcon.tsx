"use client";
import React from "react";

type Props = {
  className?: string;
  animated?: boolean;
};

export default function BerryIcon({ className = "w-6 h-6", animated = true }: Props) {
  return (
    <svg
      className={`${className} ${animated ? "berry-animated" : ""}`}
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <radialGradient id="berryGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="1" />
          <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.25" />
        </radialGradient>
        <linearGradient id="leafGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      {/* Crisp berries cluster with thin stroke */}
      <circle cx="14" cy="18" r="8" fill="url(#berryGrad)" stroke="#0ea5e9" strokeWidth="1" />
      <circle cx="24" cy="16" r="8" fill="url(#berryGrad)" stroke="#0ea5e9" strokeWidth="1" />
      <circle cx="20" cy="26" r="8" fill="url(#berryGrad)" stroke="#0ea5e9" strokeWidth="1" />
      {/* leaf */}
      <path
        d="M26 10 C30 6, 36 6, 34 12 C30 12, 28 12, 26 10"
        fill="url(#leafGrad)"
        stroke="#0f766e"
        strokeWidth="0.8"
      />
    </svg>
  );
}
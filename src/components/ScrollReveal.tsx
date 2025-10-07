"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollReveal() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const opts = { y: 16, opacity: 0, duration: 0.5, ease: "power2.out" } as const;

    gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
      gsap.from(el, {
        ...opts,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    gsap.utils.toArray<HTMLElement>(".reveal-up").forEach((el) => {
      gsap.from(el, {
        y: 22,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    // Apply fade-in + slide to each section element
    gsap.utils.toArray<HTMLElement>("section").forEach((sec) => {
      gsap.from(sec, {
        y: 18,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sec,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });
  }, []);
  return null;
}
"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export default function SmoothScroll() {
  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
    const headerOffset = 80;

    const scrollToHash = (hash: string) => {
      const id = hash.replace(/^#/, "");
      const target = document.getElementById(id);
      if (!target) return;
      gsap.to(window, {
        duration: 0.6,
        scrollTo: { y: target, offsetY: headerOffset },
        ease: "power2.out",
      });
    };

    // On first load, if there is a hash, scroll to it after layout
    if (window.location.hash) {
      requestAnimationFrame(() => scrollToHash(window.location.hash));
    }

    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest<HTMLAnchorElement>("a[href^='#'], a[href*='/#']");
      if (!link) return;
      const url = new URL(link.href);
      // Only intercept same-page hash navigations
      const samePath = url.pathname === window.location.pathname;
      const hash = url.hash;
      if (!hash) return;
      e.preventDefault();
      if (!samePath) {
        // Navigate first, then scroll after the route renders
        window.location.href = `${url.pathname}${url.hash}`;
        // hashchange will fire after navigation
        return;
      }
      scrollToHash(hash);
    };

    const onHashChange = () => {
      scrollToHash(window.location.hash);
    };

    document.addEventListener("click", onClick);
    window.addEventListener("hashchange", onHashChange);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);
  return null;
}
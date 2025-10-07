"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function RouteProgress() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    // Simulate progress on route change
    setActive(true);
    setProgress(10);
    const step1 = setTimeout(() => setProgress(60), 120);
    const step2 = setTimeout(() => setProgress(85), 260);
    const step3 = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setActive(false);
        setProgress(0);
      }, 200);
    }, 520);
    return () => {
      clearTimeout(step1);
      clearTimeout(step2);
      clearTimeout(step3);
    };
  }, [pathname]);

  if (!active) return null;
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="h-[3px] bg-sky-500" style={{ width: `${progress}%`, transition: "width 160ms ease" }} />
    </div>
  );
}
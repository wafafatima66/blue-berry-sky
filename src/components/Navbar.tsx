"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-20 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-extrabold text-xl tracking-tight">
          <span className="text-sky-500">Blueberry</span>
          <span className="text-slate-900"> IT Sky</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={clsx(
                "link-underline hover:text-slate-900 transition-colors",
                pathname === l.href ? "text-slate-900" : "text-slate-600"
              )}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-sky-500 text-white px-4 py-2 shadow-md hover:shadow-lg hover:bg-sky-600 transition hover-glow"
          >
            Get in touch
          </Link>
        </nav>

        <button
          onClick={() => setOpen((s) => !s)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50"
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>
      </div>

      <motion.nav
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className="md:hidden overflow-hidden border-t border-slate-200"
      >
        <div className="px-4 py-3 flex flex-col gap-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={clsx(
                "py-2",
                pathname === l.href ? "text-slate-900" : "text-slate-600"
              )}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="rounded-full bg-sky-500 text-white px-4 py-2 shadow-md hover-glow"
          >
            Get in touch
          </Link>
        </div>
      </motion.nav>
    </header>
  );
}



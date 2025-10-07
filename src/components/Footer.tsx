import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="font-extrabold text-lg"><span className="text-sky-500">Blueberry</span> IT Sky</div>
          <p className="mt-2 text-sm text-slate-600 max-w-sm">
            Modern IT solutions, secure cloud, and enterprise hardware supply.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="text-sm font-semibold text-slate-900">Company</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-slate-900">About</Link></li>
              <li><Link href="/services" className="hover:text-slate-900">Services</Link></li>
              <li><Link href="/contact" className="hover:text-slate-900">Contact</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-900">Legal</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-slate-900">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-slate-900">Terms</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex items-start md:justify-end gap-3">
          <a href="mailto:hello@example.com" className="p-2 rounded-full border border-slate-200 hover:bg-slate-50" aria-label="Email"><Mail size={18} /></a>
          <a href="#" className="p-2 rounded-full border border-slate-200 hover:bg-slate-50" aria-label="GitHub"><Github size={18} /></a>
          <a href="#" className="p-2 rounded-full border border-slate-200 hover:bg-slate-50" aria-label="LinkedIn"><Linkedin size={18} /></a>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} BlueBerry IT Sky. All rights reserved.
      </div>
    </footer>
  );
}



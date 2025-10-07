import Link from "next/link";
import { PhoneCall } from "lucide-react";

export default function FloatingContact() {
  return (
    <Link
      href="/contact"
      className="fixed bottom-6 right-6 z-20 rounded-full bg-sky-500 text-white px-5 py-3 shadow-xl hover:bg-sky-600 transition hover-glow"
    >
      <span className="inline-flex items-center gap-2 text-sm font-semibold">
        <PhoneCall size={16} /> Contact Us
      </span>
    </Link>
  );
}



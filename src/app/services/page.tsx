import { ShieldCheck, Cloud, Cpu, Code, Network, Shield, Bot, LineChart } from "lucide-react";
import BerryIcon from "@/components/BerryIcon";
import Link from "next/link";

const services = [
  { slug: "it-consulting", icon: Shield, title: "IT Consulting", desc: "Assess, plan, and modernize your stack with minimal risk." },
  { slug: "software-development", icon: Code, title: "Software Development", desc: "Web, APIs, and mobile engineered for performance and scale." },
  { slug: "cloud-computing", icon: Cloud, title: "Cloud Computing", desc: "AWS/Azure/GCP architecture, migration, and FinOps." },
  { slug: "cybersecurity", icon: ShieldCheck, title: "Cybersecurity", desc: "Threat modeling, audits, SOC hardening, and training." },
  { slug: "networking", icon: Network, title: "Networking", desc: "Design, rollout, and monitoring for resilient networks." },
  { slug: "hardware-supply", icon: Cpu, title: "Hardware Supply", desc: "Servers, storage, networking gear, and accessories." },
];

const featured = [
  {
    title: "Artificial Intelligence (AI) Solutions",
    icon: Bot,
    bullets: [
      "Chatbots and intelligent automation",
      "Reduce costs and improve CX",
      "Ideal for retail, healthcare, finance",
    ],
    badge: "Very High",
  },
  {
    title: "Business Data Analysis",
    icon: LineChart,
    bullets: [
      "Dashboards and insights",
      "Data-driven decisions",
      "Unlock hidden opportunities",
    ],
    badge: "High",
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">


      {/* Hero / Intro */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
          <BerryIcon className="w-8 h-8" />
          Services
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-700">
          End-to-end IT capabilities—from consulting to software delivery and
          secure infrastructure—plus enterprise hardware procurement.        </p>
      </section>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {featured.map((f) => (
          <div key={f.title} className="rounded-2xl border border-slate-200 p-6 bg-white shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center">
                <f.icon className="text-sky-500" />
              </div>
              <div className="font-semibold text-lg">{f.title}</div>
              <span className="ml-auto text-xs rounded-full bg-emerald-50 text-emerald-700 px-2 py-1">{f.badge}</span>
            </div>
            <ul className="mt-4 list-disc list-inside text-sm text-slate-700 space-y-1">
              {f.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="group rounded-2xl border border-slate-200 p-6 bg-white shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1">
            <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center mb-4">
              <s.icon className="text-sky-500" />
            </div>
            <div className="font-semibold text-lg">{s.title}</div>
            <p className="mt-1 text-sm">{s.desc}</p>
            <div className="mt-4 text-sm font-semibold text-sky-600">
              <Link href={`/services/${s.slug}`}>Learn more →</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



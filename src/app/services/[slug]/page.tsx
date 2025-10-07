import { notFound } from "next/navigation";
import Link from "next/link";
import BerryIcon from "@/components/BerryIcon";
import { ShieldCheck, Cloud, Cpu, Code, Network, Shield } from "lucide-react";

type Params = { slug: string };

const details = {
  "it-consulting": {
    title: "IT Consulting",
    icon: Shield,
    intro:
      "Assess, plan, and modernize your stack with minimal risk. We align technology with business goals to reduce cost and complexity.",
    bullets: [
      "Architecture reviews and modernization plans",
      "Security posture, compliance, and risk mitigation",
      "Roadmaps, tooling selection, and vendor guidance",
    ],
  },
  "software-development": {
    title: "Software Development",
    icon: Code,
    intro:
      "Web, APIs, and mobile engineered for performance and scale. From MVPs to enterprise systems, we deliver clean, maintainable code.",
    bullets: [
      "Product discovery and UX-first design",
      "API-first architectures and integrations",
      "CI/CD, testing, and observability",
    ],
  },
  "cloud-computing": {
    title: "Cloud Computing",
    icon: Cloud,
    intro:
      "AWS, Azure, and GCP architecture, migration, and FinOps. Optimize reliability, scalability, and cost across your cloud footprint.",
    bullets: [
      "Well-Architected reviews and landing zones",
      "Containers, serverless, and data platforms",
      "Cost optimization (FinOps) and governance",
    ],
  },
  cybersecurity: {
    title: "Cybersecurity",
    icon: ShieldCheck,
    intro:
      "Threat modeling, audits, SOC hardening, and training. We help prevent incidents and improve resilience across systems and teams.",
    bullets: [
      "Secure SDLC and vulnerability management",
      "Identity, access, and zero-trust architectures",
      "Incident response runbooks and tabletop exercises",
    ],
  },
  networking: {
    title: "Networking",
    icon: Network,
    intro:
      "Design, rollout, and monitoring for resilient networks. Deliver secure connectivity for offices, branches, and data centers.",
    bullets: [
      "LAN/WAN, Wi‑Fi, SD‑WAN, and VPN solutions",
      "Segmentation, firewalling, and policy enforcement",
      "Monitoring, alerting, and performance tuning",
    ],
  },
  "hardware-supply": {
    title: "Hardware Supply",
    icon: Cpu,
    intro:
      "Servers, storage, networking gear, and accessories. Procure and deploy hardware that matches your workload and budget.",
    bullets: [
      "Vendor selection and competitive sourcing",
      "Rack design, power, and cooling considerations",
      "Lifecycle, warranties, and support planning",
    ],
  },
} as const;

export function generateStaticParams() {
  return Object.keys(details).map((slug) => ({ slug }));
}

export default function ServiceDetailPage({ params }: { params: Params }) {
  const data = details[params.slug as keyof typeof details];
  if (!data) return notFound();
  const Icon = data.icon;
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <nav className="mb-6 text-sm">
        <Link href="/services" className="text-slate-600">← Back to Services</Link>
      </nav>

      <section className="mb-10">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
          <BerryIcon className="w-8 h-8" />
          {data.title}
        </h1>
        <p className="mt-4 max-w-3xl text-lg">
          {data.intro}
        </p>
      </section>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center">
              <Icon className="text-sky-500" />
            </div>
            <div className="font-semibold">What’s Included</div>
          </div>
          <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
            {data.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm md:col-span-2">
          <h3 className="text-lg font-semibold">Outcomes</h3>
          <p className="mt-2 text-sm text-slate-700">
            We tailor delivery to your goals: faster releases, stronger security, improved reliability,
            or reduced costs. Engagements range from short assessments to full implementation.
          </p>
          <div className="mt-4">
            <Link href="/contact" className="inline-flex items-center rounded-full bg-sky-500 text-white px-5 py-2.5 font-semibold shadow">Discuss Your Needs</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
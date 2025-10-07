"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Cloud,
  Cpu,
  Code,
  Network,
  Shield,
  CheckCircle2,
} from "lucide-react";
import BerryIcon from "@/components/BerryIcon";

const services = [
  {
    slug: "cybersecurity",
    icon: <ShieldCheck className="text-sky-500" />,
    title: "Cybersecurity",
    desc: "Proactive defense, audits, and compliance for resilient systems.",
  },
  {
    slug: "cloud-computing",
    icon: <Cloud className="text-sky-500" />,
    title: "Cloud & DevOps",
    desc: "Scalable cloud, CI/CD pipelines, and cost optimization.",
  },
  {
    slug: "software-development",
    icon: <Code className="text-sky-500" />,
    title: "Software & Apps",
    desc: "Web and mobile tailored to your business outcomes.",
  },
  {
    slug: "hardware-supply",
    icon: <Cpu className="text-sky-500" />,
    title: "Hardware Supply",
    desc: "Servers, networking, workstations, and accessories.",
  },
  {
    slug: "networking",
    icon: <Network className="text-sky-500" />,
    title: "Networking",
    desc: "Secure, high-availability network architecture and rollout.",
  },
  {
    slug: "it-consulting",
    icon: <Shield className="text-sky-500" />,
    title: "IT Consulting",
    desc: "Strategic guidance to modernize and de-risk technology.",
  },
];

export default function Home() {
  return (
    <div className="relative">

      {/* ─────────────── Hero Section ─────────────── */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24 md:pt-36 md:pb-28">

        {/* Static hero; no animated clouds or berries */}

        {/* Text & Image */}
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Empowering Your Business with Smart Digital Solutions
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              We design digital experiences that inspire and empower.
            </p>
            <div className="mt-8 flex items-center md:justify-start justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-sky-500 text-white px-6 py-3 shadow-lg"
              >
                Start Your Project
              </Link>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative rounded-2xl p-3  ">
              <Image
                src="/6.svg"
                alt="Blueberries illustration"
                width={768}
                height={768}
                priority
                className="w-full max-w-md h-auto rounded-xl mask-soft mix-blend-multiply hero-image-animated"
              />
            </div>
          </div>
        </div>

        {/* Decorative blueberry graphic (static) */}
        <div className="mt-16 mx-auto w-8 h-8">
          <BerryIcon className="w-8 h-8" />
        </div>
      </section>

      {/* ─────────────── About Section ─────────────── */}
      <section
        id="about"
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24 mt-10"
      >
        <div className="p-8 md:p-10 border-t border-slate-200">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-800">
            <BerryIcon className="w-6 h-6" />
            About Blueberry IT Sky
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            We are a full-service IT agency based in Dhaka, dedicated to crafting
            seamless digital experiences. From startups to enterprises, we design,
            develop, and maintain technology that transforms businesses into
            digital leaders.
          </p>
        </div>
      </section>

      {/* ─────────────── Services Section ─────────────── */}
      <section id="services" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex items-end justify-between">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-800">
            <BerryIcon className="w-6 h-6" />
            What We Do
          </h2>
          <Link
            href="/services"
            className="text-slate-700"
          >
            View all services →
          </Link>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="service-bubble rounded-2xl border border-slate-200 p-6 bg-white shadow-sm"
            >
              <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center mb-4">
                {s.icon}
              </div>
              <div className="font-semibold text-lg">{s.title}</div>
              <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
              <div className="mt-4 text-sm font-semibold text-sky-600 opacity-100">
                <Link href={`/services/${s.slug}`}>Learn more →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────── Why Choose Us ─────────────── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-800">
          <BerryIcon className="w-6 h-6" />
          Why Choose Us
        </h2>

        <div className="mt-6 grid sm:grid-cols-2 gap-2">
          {[
            "Experienced Developers & Designers",
            "Timely Project Delivery",
            "Transparent Communication",
            "Long-Term Client Support",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 p-3 md:p-4 border-b border-slate-200/60 bg-transparent rounded-none shadow-none"
            >
              <div className="mt-0.5 text-green-600">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="font-medium text-slate-800">{item}</div>
            </div>
          ))}
        </div>
      </section>

      

      {/* ─────────────── Final CTA ─────────────── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
        <div className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/80 p-8 md:p-10 shadow-sm">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-sky-50" />

          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Let’s Create Something Magical Together.
          </h2>
          <p className="mt-2 text-slate-700">
            White fading back into blue — simple, calm, and inviting.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-sky-500 text-white px-6 py-3 font-semibold shadow"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

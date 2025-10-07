"use client";
import { useState } from "react";
import BerryIcon from "@/components/BerryIcon";

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(formData: FormData) {
    setStatus(null);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });
    const data = await res.json();
    setStatus(data.ok ? "Thanks! We'll get back to you soon." : data.error || "Something went wrong.");
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">


      <section className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
          <BerryIcon className="w-8 h-8" />
          Contact us
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-700">
          Tell us about your project or hardware needs. We usually respond within
          one business day.        </p>
      </section>


      {/* <div className="mt-10 grid md:grid-cols-2 gap-10">
        <form
          action={onSubmit}
          className="reveal-up rounded-2xl border border-slate-200 p-6 bg-white shadow-md hover:shadow-lg transition"
        >
          <div>
            <label className="block text-sm font-medium text-slate-700">Name</label>
            <input name="name" required className="mt-1 w-full rounded-lg border-slate-300 focus:ring-sky-500 focus:border-sky-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <input type="email" name="email" required className="mt-1 w-full rounded-lg border-slate-300 focus:ring-sky-500 focus:border-sky-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Message</label>
            <textarea name="message" rows={5} required className="mt-1 w-full rounded-lg border-slate-300 focus:ring-sky-500 focus:border-sky-500" />
          </div>
          <button type="submit" className="rounded-full bg-sky-500 text-white px-6 py-3 shadow hover:bg-sky-600 hover-glow">Send message</button>
          {status && <div className="text-sm text-slate-600" aria-live="polite">{status}</div>}
        </form>

        <div className="reveal-up">
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-[320px]">
            <iframe
              title="Map"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19800.86367685271!2d-0.1276!3d51.5072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCity!5e0!3m2!1sen!2s!4v1610000000000"
            ></iframe>
          </div>
          <div className="mt-6 space-y-2 text-sm">
            <div>Email: hello@example.com</div>
            <div>Phone: +1 (555) 123-4567</div>
            <div className="flex gap-4"><a href="#" className="link-underline">LinkedIn</a><a href="#" className="link-underline">GitHub</a></div>
          </div>
        </div>
      </div> */}


      <div className="mt-10 grid md:grid-cols-2 gap-10">
  {/* Contact Form */}
  <form
    onSubmit={(e) => {
      e.preventDefault();
      const fd = new FormData(e.currentTarget);
      onSubmit(fd);
    }}
    className="reveal-up rounded-2xl border border-slate-200 p-8 bg-white shadow-md hover:shadow-lg transition"
  >
    <h2 className="text-2xl font-semibold text-slate-900 mb-6">Get in Touch</h2>

    <div className="mb-4">
      <label className="block text-sm font-medium text-slate-700">Name</label>
      <input
        name="name"
        required
        placeholder="Your Name"
        className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:ring-sky-500 focus:border-sky-500 transition"
      />
    </div>

    <div className="mb-4">
      <label className="block text-sm font-medium text-slate-700">Email</label>
      <input
        type="email"
        name="email"
        required
        placeholder="you@example.com"
        className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:ring-sky-500 focus:border-sky-500 transition"
      />
    </div>

    <div className="mb-4">
      <label className="block text-sm font-medium text-slate-700">Message</label>
      <textarea
        name="message"
        rows={5}
        required
        placeholder="Your message..."
        className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:ring-sky-500 focus:border-sky-500 transition"
      />
    </div>

    <button
      type="submit"
      className="rounded-full bg-sky-500 text-white px-6 py-3 shadow hover:bg-sky-600 hover-glow transition"
    >
      Send Message
    </button>

    {status && (
      <div className="text-sm text-slate-600 mt-3" aria-live="polite">
        {status}
      </div>
    )}
  </form>

  {/* Contact Info & Map */}
  <div className="reveal-up flex flex-col gap-6">
    {/* Map */}
    <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-[320px]">
      <iframe
        title="Blueberry IT Sky Location"
        width="100%"
        height="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.43276012345!2d90.4125!3d23.7806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7b51f2b1234%3A0x123456789abcdef!2sBarun%20Bhaban%2C%20Gulshan-2%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v0000000000000"
      ></iframe>
    </div>

    {/* Contact Details */}
    <div className="space-y-2 text-slate-700">
      <div>
        <span className="font-semibold">Contact:</span> Fuad Bin Ansar, Proprietor & CEO
      </div>
      <div>
        <span className="font-semibold">Phone:</span> +8801633180008
      </div>
      <div>
        <span className="font-semibold">Address:</span> Barun Bhaban, Plot-15, Gulshan-2, Dhaka-1212
      </div>

    </div>
  </div>
</div>

    </div>
  );
}



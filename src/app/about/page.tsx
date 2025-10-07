import BerryIcon from "@/components/BerryIcon";

export default function AboutPage() {
  return (
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      {/* Floating background clouds */}
      <div className="absolute inset-0 -z-10  overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-sky-100/70 blur-3xl rounded-full animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/60 blur-3xl rounded-full animate-float-slow" />
      </div>

      {/* Hero / Intro */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
                  <BerryIcon className="w-8 h-8" />

          About Blueberry IT Sky
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-700">
          We build simple, powerful, and human-centered technology that inspires growth.
        </p>
      </section>

      {/* Who We Are */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-slate-800">Who We Are</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          At Blueberry IT Sky, we believe technology should be simple, powerful,
          and accessible. Since our founding, we’ve been helping businesses
          modernize their digital presence through smart software solutions and
          thoughtful design thinking. Our goal is to bridge creativity with
          technology to create seamless, beautiful experiences.
        </p>
      </section>

      {/* Our Mission */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-slate-800">Our Mission</h2>
        <p className="mt-3 max-w-3xl text-slate-700 leading-relaxed">
          To empower businesses through cutting-edge technology that inspires
          innovation and drives growth. We aim to deliver value through every
          line of code and every creative decision we make.
        </p>
      </section>

      {/* Our Vision */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-slate-800">Our Vision</h2>
        <p className="mt-3 max-w-3xl text-slate-700 leading-relaxed">
          To become a global leader in creative IT solutions — where technology
          works for people, not the other way around. We envision a digital
          world that’s both efficient and human, powered by innovation and empathy.
        </p>
      </section>

{/* Our Core Values */}
<section className="mb-12 relative">
  <h2 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center gap-2">
    {/* <BerryIcon className="w-6 h-6 text-sky-500" /> */}
    Our Core Values
  </h2>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      { title: "Integrity", icon: "🛡️", desc: "We act with honesty, fairness, and responsibility in all we do." },
      { title: "Innovation", icon: "💡", desc: "We embrace creativity to develop forward-thinking technology solutions." },
      { title: "Collaboration", icon: "🤝", desc: "We work together with clients and teams to achieve greater impact." },
      { title: "Quality", icon: "✅", desc: "We deliver products and services that exceed expectations." },
      { title: "Customer Satisfaction", icon: "💬", desc: "We prioritize client success and long-term relationships." },
    ].map((value) => (
      <div
        key={value.title}
        className="relative bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all hover:translate-y-[-4px] hover:bg-sky-50 border border-slate-200"
      >
        <div className="text-3xl mb-3">{value.icon}</div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">{value.title}</h3>
        <p className="text-slate-700 leading-relaxed">{value.desc}</p>
      </div>
    ))}
  </div>

  {/* Optional subtle background floating blueberries */}
  <div className="absolute -top-10 -left-10 w-24 h-24 bg-blue-200/30 blur-2xl rounded-full animate-pulse-slow pointer-events-none" />
  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-sky-300/20 blur-3xl rounded-full animate-float-slow pointer-events-none" />
</section>


      {/* Meet Our Founder */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-slate-800">Meet Our Founder</h2>
        <div className="mt-4">
          <div className="text-lg font-semibold text-slate-900">Fuad Bin Ansar</div>
          <div className="text-slate-700">Proprietor & CEO</div>
          <p className="mt-3 max-w-3xl text-slate-700 leading-relaxed">
            With a passion for technology and a vision for digital excellence,
            Fuad leads Blueberry IT Sky in delivering results-driven IT solutions
            to clients worldwide. His leadership ensures that every project
            combines innovation, precision, and long-term value.
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section>
        <h2 className="text-2xl font-semibold text-slate-800">Quick Stats</h2>
        <div className="mt-6 grid sm:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm text-center backdrop-blur-sm">
            <div className="text-xl font-semibold text-slate-900">🚀 100+ Projects Completed</div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm text-center backdrop-blur-sm">
            <div className="text-xl font-semibold text-slate-900">💬 98% Client Satisfaction</div>
          </div>
        </div>
      </section>
    </div>
  );
}

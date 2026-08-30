import SectionHeading from "./SectionHeading";

const steps = [
  {
    step: "01",
    title: "Free consultation",
    description: "Tell us about your business. We recommend the right entity type, filings and brand scope — and quote it upfront.",
  },
  {
    step: "02",
    title: "Documents & design",
    description: "We run your CAC name search, prepare filing documents, and kick off brand discovery in parallel.",
  },
  {
    step: "03",
    title: "Filing & build",
    description: "We submit to the CAC and FIRS while our design team builds your identity, socials and website.",
  },
  {
    step: "04",
    title: "Launch & support",
    description: "You receive certificates, tax documents and a full brand kit — plus a compliance calendar so nothing lapses.",
  },
];

const HowItWorks = () => (
  <section className="py-20 lg:py-28 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="How it works"
        title="Four steps from idea to official"
        description="One transparent workflow that covers both the legal filings and the brand you launch with."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <div key={s.step} className="relative">
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-7 left-[calc(50%+2.5rem)] right-[-1.5rem] h-px bg-slate-200"></div>
            )}
            <div className="relative bg-slate-50 rounded-2xl p-7 h-full border border-slate-100">
              <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-5 shadow-lg shadow-primary/25">
                <span className="text-primary-foreground font-extrabold">{s.step}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{s.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;

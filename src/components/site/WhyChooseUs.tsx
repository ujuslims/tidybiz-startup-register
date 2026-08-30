import { BadgeCheck, Wallet, Sparkles, Headphones } from "lucide-react";
import SectionHeading from "./SectionHeading";

const reasons = [
  {
    icon: BadgeCheck,
    title: "CAC-accredited specialists",
    description:
      "Your filings are prepared and submitted by accredited agents who deal with the Corporate Affairs Commission daily — not a generic freelancer.",
  },
  {
    icon: Wallet,
    title: "Transparent Naira pricing",
    description:
      "Every package lists what is included and what statutory fees apply. No surprise charges once work has started.",
  },
  {
    icon: Sparkles,
    title: "Legal and creative under one roof",
    description:
      "Register, get tax-ready and launch a brand people trust — without juggling three different vendors and timelines.",
  },
  {
    icon: Headphones,
    title: "A real person on WhatsApp",
    description:
      "You get a named account manager who answers questions in plain English and keeps you updated at every stage.",
  },
];

const WhyChooseUs = () => (
  <section className="py-20 lg:py-28 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Why TidyBiz"
        title="Built for founders who'd rather be building"
        description="Registration in Nigeria is full of avoidable delays. We remove them so you can focus on your customers."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((r) => (
          <div
            key={r.title}
            className="bg-white rounded-2xl border border-slate-200 p-7 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <r.icon className="text-primary" size={22} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{r.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{r.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;

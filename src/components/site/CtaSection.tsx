import { ArrowRight, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

type Props = {
  title?: string;
  description?: string;
  primaryLabel?: string;
};

const CtaSection = ({
  title = "Ready to launch the tidy way?",
  description = "Book a free 20-minute consultation. We'll map out the registration, compliance and brand work your business actually needs — and what it will cost.",
  primaryLabel = "Get started today",
}: Props) => (
  <section className="py-20 lg:py-24 bg-slate-900 relative overflow-hidden">
    <div className="absolute -top-24 left-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">{title}</h2>
      <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">{description}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/contact"
          className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold hover:opacity-90 transition-opacity"
        >
          {primaryLabel}
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
        <a
          href="tel:+2349012345678"
          className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-colors"
        >
          <PhoneCall size={18} />
          +234 901 234 5678
        </a>
      </div>
    </div>
  </section>
);

export default CtaSection;

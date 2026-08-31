import { ArrowRight, Sparkles, Palette, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from '@/components/Seo';
import SectionHeading from '@/components/site/SectionHeading';
import ServiceCard from '@/components/site/ServiceCard';
import FaqList from '@/components/site/FaqList';
import CtaSection from '@/components/site/CtaSection';
import { brandServices } from '@/data/services';

const brandingFaqs = [
  {
    q: 'Should I brand before or after registration?',
    a: 'Register first — your CAC-approved name determines your legal brand name. We run brand discovery during the filing window so nothing is wasted if a name is rejected.',
  },
  {
    q: 'Do I own my logo and website?',
    a: 'Yes. Full ownership and all source files transfer to you on final payment, and your domain and hosting are registered in your own name.',
  },
  {
    q: 'How long does a brand project take?',
    a: 'Logo design takes 7–10 days, a full brand identity 3–4 weeks, and a business website 2–4 weeks. Registration and branding usually run in parallel.',
  },
];

const Branding = () => (
  <>
    <Seo
      title="Brand Identity, Logo & Website Design for Nigerian Startups | TidyBiz"
      description="Logo design, brand identity systems, social media setup and website design for Nigerian startups — built to make a new business look established from day one."
      path="/branding"
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: brandServices.map((s, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: s.shortTitle,
          url: `https://tidybiz-startup-register.lovable.app/branding/${s.slug}`,
        })),
      }}
    />

    <section className="relative overflow-hidden bg-slate-50 py-16 lg:py-24 border-b border-slate-100">
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-5">
          Pillar 02 — Branding
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
          Look as credible as the business you're building
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Logo and visual identity, brand guidelines, social media setup and website design — everything a newly
          registered business needs to look established from day one.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-9">
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold hover:opacity-90 transition-opacity"
          >
            Start my brand
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/registration"
            className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-bold hover:border-primary hover:text-primary transition-colors"
          >
            See Registration services →
          </Link>
        </div>
      </div>
    </section>

    <section className="py-14 bg-white border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-3 gap-6 text-center">
        {[
          { icon: Sparkles, label: 'Original concepts, never templates' },
          { icon: Palette, label: 'Complete, documented guidelines' },
          { icon: Rocket, label: 'Registration and brand run in parallel' },
        ].map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
              <Icon className="text-primary" size={22} />
            </div>
            <p className="text-sm font-semibold text-slate-700">{label}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Brand & digital presence services"
          description="Identity, design and web presence that earns trust — pick a single service or a complete package."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brandServices.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="FAQs" title="Branding questions, answered" />
        <FaqList faqs={brandingFaqs} />
      </div>
    </section>

    <CtaSection
      title="Ready to build a brand that looks the part?"
      description="Tell us about your business and we'll recommend the right brand scope — with a fixed quote within 24 hours."
      primaryLabel="Get a branding quote"
    />
  </>
);

export default Branding;

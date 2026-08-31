import { Target, Heart, Users, Building2 } from 'lucide-react';
import Seo from '@/components/Seo';
import SectionHeading from '@/components/site/SectionHeading';
import CtaSection from '@/components/site/CtaSection';
import Testimonials from '@/components/Testimonials';

const values = [
  { icon: Target, title: 'Clarity over jargon', description: 'We explain CAC and FIRS requirements in plain English so you always know what you are paying for and why.' },
  { icon: Heart, title: 'Founder-first', description: 'We price for early-stage realities and never upsell filings a business at your stage does not need.' },
  { icon: Users, title: 'Accountability', description: 'One named account manager owns your file from consultation to certificate handover.' },
  { icon: Building2, title: 'Built for Nigeria', description: 'Our processes are designed around how the CAC portal, FIRS and Nigerian banks actually operate.' },
];

const About = () => (
  <>
    <Seo
      title="About TidyBiz | CAC Registration & Branding Specialists in Nigeria"
      description="TidyBiz is an Abuja-based team of CAC-accredited filing agents and brand designers helping Nigerian founders register, stay compliant and launch credible brands."
      path="/about"
    />

    <section className="bg-slate-50 py-16 lg:py-24 border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-5">
          About us
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
          We make starting a Nigerian business feel simple
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          TidyBiz was founded in Abuja after watching too many good ideas stall in paperwork. We combine
          CAC-accredited filing expertise with a full in-house design studio, so a founder can go from idea to a
          registered, professional-looking business in weeks — not months.
        </p>
      </div>
    </section>

    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-start">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-5">Our story</h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              We started as a two-person filing practice helping friends register business names. The same question
              kept coming up after every certificate was issued: "Now how do I make this look like a real company?"
            </p>
            <p>
              So we built the other half. Today TidyBiz runs two connected practices — a compliance team that handles
              CAC incorporation, tax registration, trademarks and annual returns, and a design studio that produces
              brand identities, pitch decks and websites.
            </p>
            <p>
              More than 500 Nigerian businesses have launched with us, from fintech startups in Lagos to agro-logistics
              firms in Kano. Every one of them got the same thing: a clear quote, a named contact, and a business that
              is both legal and credible on day one.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {[
            { value: '500+', label: 'Businesses registered' },
            { value: '9', label: 'Years of CAC practice' },
            { value: '4.9/5', label: 'Client satisfaction' },
            { value: '48hrs', label: 'Fastest turnaround' },
          ].map((s) => (
            <div key={s.label} className="bg-slate-50 rounded-2xl border border-slate-100 p-8 text-center">
              <p className="text-4xl font-extrabold text-primary mb-2">{s.value}</p>
              <p className="text-slate-600 text-sm font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Our values" title="How we work with founders" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-white rounded-2xl border border-slate-200 p-7 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <v.icon className="text-primary" size={22} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{v.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Testimonials />
    <CtaSection title="Let's get your business official" />
  </>
);

export default About;

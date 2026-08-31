import { ArrowRight, ShieldCheck, Clock, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from '@/components/Seo';
import SectionHeading from '@/components/site/SectionHeading';
import ServiceCard from '@/components/site/ServiceCard';
import FaqList from '@/components/site/FaqList';
import CtaSection from '@/components/site/CtaSection';
import { registrationServices } from '@/data/services';

const registrationFaqs = [
  {
    q: 'What is the difference between a business name and a limited company?',
    a: 'A business name is a registered trading name for a sole proprietor or partnership with no separate legal personality. A limited company is a distinct legal entity with limited liability, shares and directors — required for most funding, tenders and expatriate quotas.',
  },
  {
    q: 'Can a foreigner own a Nigerian company?',
    a: '100% foreign ownership is permitted, but foreign-owned companies must meet the ₦100 million minimum share capital requirement and register with the NIPC before commencing business.',
  },
  {
    q: 'When must I file CAC annual returns?',
    a: 'Companies file within 42 days of the annual general meeting each year. Business names file by 30 June, starting the year after registration.',
  },
];

const Registration = () => (
  <>
    <Seo
      title="Company Registration & CAC Compliance in Nigeria | TidyBiz"
      description="Register a business name, limited company or trademark with the CAC, get your TIN and VAT sorted, and stay compliant — handled end to end by TidyBiz."
      path="/registration"
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: registrationServices.map((s, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: s.shortTitle,
          url: `https://tidybiz-startup-register.lovable.app/registration/${s.slug}`,
        })),
      }}
    />

    <section className="relative overflow-hidden bg-slate-50 py-16 lg:py-24 border-b border-slate-100">
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-5">
          Pillar 01 — Registration
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
          Get legally registered, the tidy way
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          CAC business name and limited company incorporation, TIN and VAT registration, trademarks and ongoing
          compliance — filed by CAC-certified agents who handle the paperwork so you don't have to.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-9">
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold hover:opacity-90 transition-opacity"
          >
            Start my registration
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/branding"
            className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-bold hover:border-primary hover:text-primary transition-colors"
          >
            See Branding services →
          </Link>
        </div>
      </div>
    </section>

    <section className="py-14 bg-white border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-3 gap-6 text-center">
        {[
          { icon: ShieldCheck, label: 'CAC-certified filing agents' },
          { icon: Clock, label: 'Business names in 3–5 working days' },
          { icon: FileCheck, label: 'Fixed fees, quoted upfront' },
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
          title="Registration & compliance services"
          description="Official CAC and FIRS filings, handled end to end — pick a single service or bundle several."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {registrationServices.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="FAQs" title="Registration questions, answered" />
        <FaqList faqs={registrationFaqs} />
      </div>
    </section>

    <CtaSection
      title="Ready to make it official?"
      description="Tell us what you're building and we'll recommend the right entity type and filings — with a fixed quote within 24 hours."
      primaryLabel="Get a registration quote"
    />
  </>
);

export default Registration;

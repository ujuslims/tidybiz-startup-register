import { ArrowRight, BookOpen, FileText, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from '@/components/Seo';
import SectionHeading from '@/components/site/SectionHeading';
import FaqList from '@/components/site/FaqList';
import CtaSection from '@/components/site/CtaSection';

const guides = [
  {
    icon: FileText,
    title: 'Business name vs limited company',
    description: 'Which CAC entity fits your stage, liability exposure and funding plans — with a side-by-side cost comparison.',
    to: '/services/company-registration',
    cta: 'Compare on our registration page',
  },
  {
    icon: Calculator,
    title: 'What CAC registration really costs',
    description: 'Professional fees, statutory fees and share-capital stamp duty explained, with typical totals in Naira.',
    to: '/pricing',
    cta: 'See our pricing',
  },
  {
    icon: BookOpen,
    title: 'Your first-year compliance checklist',
    description: 'Annual returns, VAT filings, tax clearance and register upkeep — with the deadlines that trip founders up.',
    to: '/services/business-compliance',
    cta: 'Read the compliance service',
  },
];

const faqGroups = [
  {
    title: 'Registration',
    faqs: [
      { q: 'What is the difference between a business name and a limited company?', a: 'A business name is a registered trading name for a sole proprietor or partnership with no separate legal personality. A limited company is a distinct legal entity with limited liability, shares and directors — required for most funding, tenders and expatriate quotas.' },
      { q: 'Can a foreigner own a Nigerian company?', a: 'Yes. 100% foreign ownership is permitted, but foreign-owned companies must meet the ₦100 million minimum share capital requirement and register with the NIPC before commencing business.' },
      { q: 'How do I check if my business name is available?', a: 'We run a free CAC availability search for you. Names that are identical, misleading, or contain restricted words such as "Federal", "National" or "Holdings" are commonly rejected.' },
      { q: 'What documents do I need to register?', a: 'A valid government ID (NIN slip, driver\'s licence, voter\'s card or passport), a passport photograph, a residential address, phone number and email for each proprietor, director or shareholder.' },
    ],
  },
  {
    title: 'Tax & compliance',
    faqs: [
      { q: 'When must I file CAC annual returns?', a: 'Companies file within 42 days of the annual general meeting each year. Business names file by 30 June, starting the year after registration.' },
      { q: 'Do I need to register for VAT?', a: 'Businesses above the statutory turnover threshold must register and charge VAT. Below it, registration is optional but often required by corporate clients.' },
      { q: 'What is a tax clearance certificate used for?', a: 'It proves your tax affairs are up to date and is required for government tenders, large contracts, some visa applications and certain bank facilities.' },
    ],
  },
  {
    title: 'Branding & web',
    faqs: [
      { q: 'Should I brand before or after registration?', a: 'Register first — your CAC-approved name determines your legal brand name. We run brand discovery during the filing window so nothing is wasted if a name is rejected.' },
      { q: 'Do I own my logo and website?', a: 'Yes. Full ownership and all source files transfer to you on final payment, and your domain and hosting are registered in your own name.' },
      { q: 'How long does a brand project take?', a: 'Logo design takes 7–10 days, a full brand identity 3–4 weeks, and a business website 2–4 weeks. Registration and branding usually run in parallel.' },
    ],
  },
];

const Resources = () => (
  <>
    <Seo
      title="Resources & FAQs | Nigerian Business Registration Guides — TidyBiz"
      description="Guides and answers on CAC registration, business name vs limited company, TIN and VAT, annual returns, trademarks and branding for Nigerian businesses."
      path="/resources"
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqGroups.flatMap((g) =>
          g.faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        ),
      }}
    />

    <section className="bg-slate-50 py-16 lg:py-24 border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-5">
          Resources
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
          Guides & FAQs for Nigerian founders
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Straight answers on CAC registration, tax, compliance and branding — written by the team that files these
          documents every day.
        </p>
      </div>
    </section>

    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Guides" title="Start here" />
        <div className="grid md:grid-cols-3 gap-6">
          {guides.map((g) => (
            <Link
              key={g.title}
              to={g.to}
              className="group bg-slate-50 rounded-2xl border border-slate-100 p-7 hover:-translate-y-1 hover:bg-white hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <g.icon className="text-primary" size={22} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{g.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">{g.description}</p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                {g.cta}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 lg:py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        <SectionHeading eyebrow="FAQs" title="Frequently asked questions" />
        {faqGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-xl font-bold text-slate-900 mb-5">{group.title}</h3>
            <FaqList faqs={group.faqs} />
          </div>
        ))}
      </div>
    </section>

    <CtaSection title="Still have a question?" primaryLabel="Ask our team" />
  </>
);

export default Resources;

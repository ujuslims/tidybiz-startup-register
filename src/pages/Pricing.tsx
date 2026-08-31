import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from '@/components/Seo';
import SectionHeading from '@/components/site/SectionHeading';
import FaqList from '@/components/site/FaqList';
import CtaSection from '@/components/site/CtaSection';
import { services, servicePath } from '@/data/services';

const bundles = [
  {
    name: 'Launch Basic',
    price: '₦120,000',
    description: 'For solo founders formalising a small business.',
    features: ['Business name registration', 'TIN application', 'Logo (Essential)', 'Social profile pack', 'Compliance calendar'],
  },
  {
    name: 'Launch Pro',
    price: '₦450,000',
    description: 'Our most popular bundle for funded and fast-growing startups.',
    features: [
      'Limited company incorporation',
      'TIN + VAT registration',
      'Full brand identity & guidelines',
      'Business website (up to 6 pages)',
      'First-year annual return filing',
    ],
    highlight: true,
  },
  {
    name: 'Launch Enterprise',
    price: 'From ₦900,000',
    description: 'For teams that want compliance and brand fully managed.',
    features: [
      'Everything in Launch Pro',
      'Trademark registration (1 class)',
      'Corporate secretary service',
      'Pitch deck & photography direction',
      'Dedicated account manager',
    ],
  },
];

const pricingFaqs = [
  { q: 'Are statutory CAC fees included?', a: 'Our listed prices include our professional fee and standard statutory filing fees for the typical case. Where share capital, sector or class count changes the government fee, we quote the exact figure before starting.' },
  { q: 'Do you offer payment plans?', a: 'Yes. Bundles above ₦300,000 can be split 60% upfront and 40% on delivery.' },
  { q: 'Can I mix services from different packages?', a: 'Absolutely. Most clients build a custom scope — tell us what you need and we will price it line by line.' },
  { q: 'Are there hidden or recurring costs?', a: 'The only recurring costs are annual returns, domain and hosting renewals, and trademark renewals. We list all of them in your quote.' },
];

const Pricing = () => (
  <>
    <Seo
      title="Pricing | CAC Registration & Branding Packages in Naira — TidyBiz"
      description="Transparent Naira pricing for CAC registration, tax registration, compliance, trademarks, branding and websites. Bundles from ₦120,000 for Nigerian startups."
      path="/pricing"
    />

    <section className="bg-slate-50 py-16 lg:py-24 border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-5">
          Pricing
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
          Clear Naira pricing, quoted upfront
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Bundle registration and branding to save, or buy any service individually. Nothing starts until you have
          approved a fixed quote.
        </p>
      </div>
    </section>

    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Bundles" title="Launch packages" description="Best value when you need registration and brand together." />
        <div className="grid md:grid-cols-3 gap-6">
          {bundles.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-3xl p-8 border flex flex-col transition-all duration-300 ${
                pkg.highlight
                  ? 'bg-slate-900 border-slate-900 shadow-2xl shadow-slate-900/20 lg:-translate-y-3'
                  : 'bg-white border-slate-200 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5'
              }`}
            >
              {pkg.highlight && (
                <span className="self-start mb-4 text-xs font-bold uppercase tracking-widest bg-primary text-primary-foreground px-3 py-1 rounded-full">
                  Most popular
                </span>
              )}
              <h3 className={`text-xl font-bold mb-2 ${pkg.highlight ? 'text-white' : 'text-slate-900'}`}>{pkg.name}</h3>
              <p className={`text-4xl font-extrabold mb-3 ${pkg.highlight ? 'text-white' : 'text-slate-900'}`}>{pkg.price}</p>
              <p className={`text-sm mb-7 ${pkg.highlight ? 'text-slate-400' : 'text-slate-500'}`}>{pkg.description}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className={`flex items-start text-sm ${pkg.highlight ? 'text-slate-300' : 'text-slate-600'}`}>
                    <Check className="text-primary mr-3 mt-0.5 flex-shrink-0" size={16} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`w-full py-3.5 rounded-xl font-bold text-center transition-all ${
                  pkg.highlight ? 'bg-primary text-primary-foreground hover:opacity-90' : 'bg-slate-100 text-slate-900 hover:bg-primary hover:text-primary-foreground'
                }`}
              >
                Get this package
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 lg:py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Individual services" title="Buy any service on its own" />
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden divide-y divide-slate-100">
          {services.map((s) => (
            <Link
              key={s.slug}
              to={servicePath(s)}
              className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 p-6 hover:bg-slate-50 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <s.icon className="text-primary" size={20} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 group-hover:text-primary transition-colors">{s.shortTitle}</h3>
                <p className="text-sm text-slate-500">{s.timeline}</p>
              </div>
              <p className="font-bold text-slate-900">From {s.startingPrice}</p>
              <ArrowRight className="text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-all hidden sm:block" size={18} />
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="FAQs" title="Pricing questions" />
        <FaqList faqs={pricingFaqs} />
      </div>
    </section>

    <CtaSection title="Get a fixed quote in 24 hours" primaryLabel="Request a quote" />
  </>
);

export default Pricing;

import { ArrowRight, ShieldCheck, Clock, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from '@/components/Seo';
import SectionHeading from '@/components/site/SectionHeading';
import ServiceCard from '@/components/site/ServiceCard';
import FaqList from '@/components/site/FaqList';
import CtaSection from '@/components/site/CtaSection';
import AnnualReturnsEstimator from '@/components/site/AnnualReturnsEstimator';
import { complianceServices } from '@/data/services';

const complianceFaqs = [
  {
    q: 'What if I owe annual returns for several years?',
    a: 'Use the estimator above — it covers 1 to 10 years outstanding at a flat rate. Beyond 10 years, we move to a manual quote after a quick look at your history.',
  },
  {
    q: 'Does the estimate include CAC penalties?',
    a: "The estimate reflects TidyBiz's service fee. Any CAC statutory penalties are confirmed separately once we pull your filing history — never an unexplained surprise at the end.",
  },
  {
    q: 'My company shows as inactive — what does that mean?',
    a: "It usually means annual returns have gone unfiled for an extended period. A status change back to active is often handled together with the outstanding returns in one engagement.",
  },
];

const StayCompliant = () => (
  <>
    <Seo
      title="Stay Compliant with the CAC | Annual Returns & Post-Incorporation — TidyBiz"
      description="Annual returns, status reports, status changes and director/shareholder updates for Nigerian businesses. Get an instant annual returns estimate before you call."
      path="/compliance"
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: complianceServices.map((s, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: s.shortTitle,
          url: `https://tidybiz-startup-register.netlify.app/compliance/${s.slug}`,
        })),
      }}
    />

    <section className="relative overflow-hidden bg-slate-50 py-16 lg:py-24 border-b border-slate-100">
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-5">
          Pillar 02 — Stay Compliant
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
          Know what you owe. No stress.
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Annual returns, status reports and post-incorporation changes — handled without a single anxious phone
          call. See your estimate below before you talk to anyone.
        </p>
      </div>
    </section>

    <section className="py-14 bg-white border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-3 gap-6 text-center">
        {[
          { icon: ShieldCheck, label: 'CAC-certified filing agents' },
          { icon: Clock, label: 'Most filings in 5–10 working days' },
          { icon: FileCheck, label: 'Instant estimate, no obligation' },
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

    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Start here"
          title="Not sure what you owe?"
          description="Company size and years outstanding — that's all it takes to see an instant number."
        />
        <AnnualReturnsEstimator />
      </div>
    </section>

    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Post-incorporation & compliance services"
          description="Keep your company or business name in good standing with the CAC."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {complianceServices.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="FAQs" title="Compliance questions, answered" />
        <FaqList faqs={complianceFaqs} />
      </div>
    </section>

    <CtaSection
      title="Let's get you current"
      description="Whether it's one year behind or ten, we'll give you a clear number and handle the filing — with no judgment either way."
      primaryLabel="Talk to us"
    />
  </>
);

export default StayCompliant;

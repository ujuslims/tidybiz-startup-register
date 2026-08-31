import { Building2, Palette } from 'lucide-react';
import Seo from '@/components/Seo';
import SectionHeading from '@/components/site/SectionHeading';
import ServiceCard from '@/components/site/ServiceCard';
import CtaSection from '@/components/site/CtaSection';
import HowItWorks from '@/components/site/HowItWorks';
import { registrationServices, brandServices, services } from '@/data/services';

const ServicesPage = () => (
  <>
    <Seo
      title="Our Services | CAC Registration, Tax & Branding — TidyBiz"
      description="Explore TidyBiz services for Nigerian businesses: company and business name registration, tax registration, compliance, trademarks, branding, logo design and websites."
      path="/services"
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: services.map((s, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: s.shortTitle,
          url: `https://tidybiz-startup-register.lovable.app/services/${s.slug}`,
        })),
      }}
    />

    <section className="bg-slate-50 py-16 lg:py-24 border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-5">
          Services
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
          Everything your business needs to launch — legally and beautifully
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Each service below has its own dedicated page with full details, timelines, packages and answers to
          the questions Nigerian founders ask most.
        </p>
      </div>
    </section>

    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
            <Building2 className="text-primary" size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Registration & Compliance</h2>
            <p className="text-slate-600">Official CAC and FIRS filings, handled end to end.</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {registrationServices.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </div>
    </section>

    <section className="pb-20 lg:pb-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
            <Palette className="text-primary" size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Brand & Digital Presence</h2>
            <p className="text-slate-600">Identity, design and web presence that earns trust.</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brandServices.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </div>
    </section>

    <HowItWorks />
    <CtaSection title="Not sure which service you need?" primaryLabel="Talk to a specialist" />
  </>
);

export default ServicesPage;

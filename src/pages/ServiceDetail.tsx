import { ArrowRight, Check, ChevronRight, Clock, Wallet } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Seo from '@/components/Seo';
import SectionHeading from '@/components/site/SectionHeading';
import FaqList from '@/components/site/FaqList';
import CtaSection from '@/components/site/CtaSection';
import ServiceCard from '@/components/site/ServiceCard';
import { getService, services, servicePath, categoryPath, type Service } from '@/data/services';

type ServiceDetailProps = {
  /** Which pillar this route belongs to — /registration/:slug vs /branding/:slug. */
  category: Service['category'];
};

const ServiceDetail = ({ category }: ServiceDetailProps) => {
  const { slug } = useParams();
  const service = getService(slug);

  // 404 if the slug doesn't exist, or exists under the other pillar (wrong URL for this service).
  if (!service || service.category !== category) return <Navigate to={categoryPath(category)} replace />;

  const related = services.filter((s) => s.slug !== service.slug && s.category === service.category).slice(0, 3);
  const path = servicePath(service);
  const pillarLabel = service.category === 'Registration' ? 'Registration' : 'Branding';

  return (
    <>
      <Seo
        title={service.metaTitle}
        description={service.metaDescription}
        path={path}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: service.title,
            description: service.summary,
            provider: { '@type': 'Organization', name: 'TidyBiz' },
            areaServed: 'NG',
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tidybiz-startup-register.lovable.app/' },
              { '@type': 'ListItem', position: 2, name: pillarLabel, item: `https://tidybiz-startup-register.lovable.app${categoryPath(service.category)}` },
              { '@type': 'ListItem', position: 3, name: service.shortTitle, item: `https://tidybiz-startup-register.lovable.app${path}` },
            ],
          },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-50 py-14 lg:py-20 border-b border-slate-100">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to={categoryPath(service.category)} className="hover:text-primary transition-colors">{pillarLabel}</Link>
            <ChevronRight size={14} />
            <span className="text-slate-900 font-medium">{service.shortTitle}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-5">
                {service.category}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
                {service.title}
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">{service.summary}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-full font-bold hover:opacity-90 transition-opacity"
                >
                  Get started
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="#packages"
                  className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 border border-slate-200 px-7 py-4 rounded-full font-bold hover:border-primary hover:text-primary transition-colors"
                >
                  See packages
                </a>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-xl rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 p-8">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <service.icon className="text-primary" size={28} />
              </div>
              <p className="text-lg font-bold text-slate-900 mb-6">{service.tagline}</p>
              <ul className="space-y-3 mb-8">
                {service.heroPoints.map((p) => (
                  <li key={p} className="flex items-start text-slate-600">
                    <Check className="text-primary mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <Wallet className="text-primary" size={18} />
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-400 font-semibold">From</p>
                    <p className="font-bold text-slate-900">{service.startingPrice}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="text-primary" size={18} />
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-400 font-semibold">Timeline</p>
                    <p className="font-bold text-slate-900 text-sm">{service.timeline}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Benefits" title={`Why ${service.shortTitle.toLowerCase()} matters`} />
          <div className="grid sm:grid-cols-2 gap-6">
            {service.benefits.map((b) => (
              <div
                key={b.title}
                className="bg-slate-50 rounded-2xl border border-slate-100 p-7 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Check className="text-primary" size={18} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{b.title}</h3>
                <p className="text-slate-600 leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="The process" title="How we deliver it" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, i) => (
              <div key={step.title} className="bg-white rounded-2xl border border-slate-200 p-7 h-full">
                <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center mb-5 shadow-lg shadow-primary/20">
                  <span className="text-primary-foreground font-extrabold">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-20 lg:py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Pricing"
            title="Packages & pricing"
            description="Transparent Naira pricing. Statutory CAC or registry fees, where applicable, are quoted upfront before work begins."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {service.packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-3xl p-8 border flex flex-col transition-all duration-300 ${
                  pkg.highlight
                    ? 'bg-slate-900 border-slate-900 shadow-2xl shadow-slate-900/20 lg:-translate-y-2'
                    : 'bg-white border-slate-200 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5'
                }`}
              >
                {pkg.highlight && (
                  <span className="self-start mb-4 text-xs font-bold uppercase tracking-widest bg-primary text-primary-foreground px-3 py-1 rounded-full">
                    Most popular
                  </span>
                )}
                <h3 className={`text-xl font-bold mb-1 ${pkg.highlight ? 'text-white' : 'text-slate-900'}`}>{pkg.name}</h3>
                <p className={`text-3xl font-extrabold mb-1 ${pkg.highlight ? 'text-white' : 'text-slate-900'}`}>{pkg.price}</p>
                <p className={`text-sm mb-6 ${pkg.highlight ? 'text-slate-400' : 'text-slate-500'}`}>{pkg.timeline}</p>
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
                    pkg.highlight
                      ? 'bg-primary text-primary-foreground hover:opacity-90'
                      : 'bg-slate-100 text-slate-900 hover:bg-primary hover:text-primary-foreground'
                  }`}
                >
                  Choose {pkg.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQs" title={`${service.shortTitle} questions, answered`} />
          <FaqList faqs={service.faqs} />
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Related" title="Often paired with" />
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaSection
        title={`Start your ${service.shortTitle.toLowerCase()} today`}
        description="Send us your details and a TidyBiz specialist will confirm requirements, timeline and a fixed quote within 24 hours."
      />
    </>
  );
};

export default ServiceDetail;

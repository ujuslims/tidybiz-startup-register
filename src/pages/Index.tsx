import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from '@/components/Seo';
import Hero from '@/components/Hero';
import TrustBar from '@/components/site/TrustBar';
import SectionHeading from '@/components/site/SectionHeading';
import ServiceCard from '@/components/site/ServiceCard';
import WhyChooseUs from '@/components/site/WhyChooseUs';
import HowItWorks from '@/components/site/HowItWorks';
import Testimonials from '@/components/Testimonials';
import FaqList from '@/components/site/FaqList';
import CtaSection from '@/components/site/CtaSection';
import { services } from '@/data/services';

const homeFaqs = [
  {
    q: 'How long does it take to register a business in Nigeria?',
    a: 'A business name typically takes 3–5 working days, and a limited company 5–10 working days once documents are complete. Our express options can deliver in 24–72 hours.',
  },
  {
    q: 'How much does CAC registration cost?',
    a: 'Business name registration starts at ₦25,000 and limited company incorporation at ₦75,000, inclusive of our professional fee. Statutory CAC fees vary with share capital and are always quoted upfront.',
  },
  {
    q: 'Can you handle registration and branding together?',
    a: 'Yes — that is what TidyBiz is built for. We run your CAC filing and your brand identity in parallel so you launch legally registered and looking professional on the same day.',
  },
  {
    q: 'Do I need to visit your office?',
    a: 'No. The entire process is handled remotely via email and WhatsApp. We are based in Abuja and can meet in person if you prefer.',
  },
  {
    q: 'Do you work with businesses outside Abuja?',
    a: 'We serve founders across Nigeria and Nigerian companies owned from abroad. CAC registration is federal, so your location does not restrict anything.',
  },
];

const Index = () => {
  const featured = services.filter((s) =>
    ['company-registration', 'business-name-registration', 'tax-registration', 'branding', 'logo-design', 'website-design'].includes(s.slug),
  );

  return (
    <>
      <Seo
        title="TidyBiz — Company Registration & Branding for Nigerian Startups"
        description="TidyBiz handles CAC company registration, tax and compliance, and builds your brand identity, logo and website. Trusted by 500+ Nigerian founders."
        path="/"
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'TidyBiz',
            description:
              'Company registration, tax compliance and brand identity services for Nigerian startups.',
            areaServed: 'NG',
            telephone: '+234 901 234 5678',
            email: 'hello@tidybiz.ng',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Plot 420, Cadastral Zone A09',
              addressLocality: 'Abuja',
              addressCountry: 'NG',
            },
          },
        ]}
      />

      <Hero />
      <TrustBar />

      {/* Key services */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What we do"
            title="Key services for Nigerian founders"
            description="Everything you need to become a legally registered, credible business — explore each service in detail."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-primary transition-colors"
            >
              View all services
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />

      {/* FAQs */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FAQs"
            title="Questions founders ask us most"
            description="Still unsure? Our resources page has the full guide."
          />
          <FaqList faqs={homeFaqs} />
          <div className="text-center mt-10">
            <Link to="/resources" className="text-primary font-semibold hover:underline">
              Read all FAQs and resources →
            </Link>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
};

export default Index;

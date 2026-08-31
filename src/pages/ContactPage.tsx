import Seo from '@/components/Seo';
import Contact from '@/components/Contact';

const ContactPage = () => (
  <>
    <Seo
      title="Contact TidyBiz | Free Consultation for Nigerian Businesses"
      description="Talk to TidyBiz about CAC registration, tax setup, compliance or branding. Free 20-minute consultation, response within 24 hours. Abuja, Nigeria."
      path="/contact"
    />

    <section className="bg-white py-16 lg:py-20 border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-5">
          Contact
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
          Let's get your business official
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Tell us what you're building. A TidyBiz specialist will reply within 24 hours with requirements,
          timeline and a fixed quote.
        </p>
      </div>
    </section>

    <Contact />
  </>
);

export default ContactPage;

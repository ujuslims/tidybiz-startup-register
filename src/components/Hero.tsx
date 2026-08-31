import { ArrowRight, CheckCircle, FileCheck, Palette, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-300/10 rounded-full blur-3xl translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            Nigeria's Startup Launchpad
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6">
            From Idea to <span className="text-primary">Official.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-9">
            TidyBiz registers your company with the CAC, keeps you tax-compliant, and builds the brand
            that makes Nigerian customers take you seriously — all under one roof.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/registration"
              className="group inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-primary transition-colors"
            >
              Explore our services
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-bold hover:border-primary hover:text-primary transition-colors"
            >
              Book a free consultation
            </Link>
          </div>
          <div className="flex items-center justify-center gap-2 mt-7 text-sm text-slate-500">
            <span className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
              ))}
            </span>
            <span className="font-medium">Trusted by 500+ Nigerian founders</span>
          </div>
        </div>

        {/* The Two Pillars */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="group relative bg-white/70 backdrop-blur-xl p-8 lg:p-10 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 hover:border-primary/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
            <div className="absolute top-0 right-0 p-6">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Pillar 01</span>
            </div>
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
              <FileCheck className="text-primary group-hover:text-primary-foreground transition-colors" size={28} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Company Registration</h2>
            <p className="text-slate-600 mb-8">
              Hassle-free CAC business name and company incorporation, tax registration and ongoing compliance.
            </p>
            <ul className="space-y-3 mb-10">
              {['Business Name / Limited Company', 'TIN, VAT & FIRS registration', 'Annual returns & compliance'].map((t) => (
                <li key={t} className="flex items-center text-sm text-slate-600 font-medium">
                  <CheckCircle className="text-primary mr-3 flex-shrink-0" size={16} />
                  {t}
                </li>
              ))}
            </ul>
            <Link
              to="/registration/company-registration"
              className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center group/btn"
            >
              View service
              <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={18} />
            </Link>
          </div>

          <div className="group relative bg-white/70 backdrop-blur-xl p-8 lg:p-10 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 hover:border-primary/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
            <div className="absolute top-0 right-0 p-6">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Pillar 02</span>
            </div>
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
              <Palette className="text-primary group-hover:text-primary-foreground transition-colors" size={28} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Brand Identity</h2>
            <p className="text-slate-600 mb-8">
              Visual storytelling for modern startups. We design the look and build the digital presence you deserve.
            </p>
            <ul className="space-y-3 mb-10">
              {['Logo & brand guidelines', 'Social media setup', 'Website & landing pages'].map((t) => (
                <li key={t} className="flex items-center text-sm text-slate-600 font-medium">
                  <CheckCircle className="text-primary mr-3 flex-shrink-0" size={16} />
                  {t}
                </li>
              ))}
            </ul>
            <Link
              to="/branding/brand-identity"
              className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:opacity-90 transition-all flex items-center justify-center group/btn"
            >
              View service
              <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

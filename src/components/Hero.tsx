import { ArrowRight, CheckCircle, FileCheck, Palette } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">
      {/* Soft background blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-300/10 rounded-full blur-3xl translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            Nigeria's Startup Launchpad
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            From Idea to <span className="text-primary">Official.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            TidyBiz is the all-in-one launchpad for Nigerian startups. We handle your CAC registration 
            and build your complete brand identity in one tidy package.
          </p>
        </div>

        {/* The Two Pillars */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Pillar 1: CAC Registration */}
          <div className="group relative bg-white/70 backdrop-blur-xl p-8 lg:p-10 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
            <div className="absolute top-0 right-0 p-6">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Pillar 01</span>
            </div>
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
              <FileCheck className="w-7 h-7 text-primary group-hover:text-white transition-colors" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Company Registration</h3>
            <p className="text-slate-600 mb-8">
              Hassle-free CAC business name and company incorporation. We handle the paperwork, you get the certificate.
            </p>
            <ul className="space-y-3 mb-10">
              <li className="flex items-center text-sm text-slate-600 font-medium">
                <CheckCircle className="w-4 h-4 text-primary mr-3" size={16} />
                Business Name / Limited Company
              </li>
              <li className="flex items-center text-sm text-slate-600 font-medium">
                <CheckCircle className="w-4 h-4 text-primary mr-3" size={16} />
                TIN & Tax Documentation
              </li>
              <li className="flex items-center text-sm text-slate-600 font-medium">
                <CheckCircle className="w-4 h-4 text-primary mr-3" size={16} />
                Trademark & Partnership Registration
              </li>
            </ul>
            <a href="#contact" className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center group/btn">
              Start Registration
              <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={18} />
            </a>
          </div>

          {/* Pillar 2: Brand Identity */}
          <div className="group relative bg-white/70 backdrop-blur-xl p-8 lg:p-10 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
            <div className="absolute top-0 right-0 p-6">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Pillar 02</span>
            </div>
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
              <Palette className="w-7 h-7 text-primary group-hover:text-white transition-colors" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Brand Identity</h3>
            <p className="text-slate-600 mb-8">
              Visual storytelling for modern startups. We design the look and build the digital presence you deserve.
            </p>
            <ul className="space-y-3 mb-10">
              <li className="flex items-center text-sm text-slate-600 font-medium">
                <CheckCircle className="w-4 h-4 text-primary mr-3" size={16} />
                Logo & Brand Guidelines
              </li>
              <li className="flex items-center text-sm text-slate-600 font-medium">
                <CheckCircle className="w-4 h-4 text-primary mr-3" size={16} />
                Social Media Setup
              </li>
              <li className="flex items-center text-sm text-slate-600 font-medium">
                <CheckCircle className="w-4 h-4 text-primary mr-3" size={16} />
                Website & Landing Pages
              </li>
            </ul>
            <a href="#contact" className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center group/btn">
              Build My Brand
              <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={18} />
            </a>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-16 flex flex-col items-center gap-4">
          <p className="text-slate-400 text-sm font-medium uppercase tracking-widest">Trusted by Nigerian Founders</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50 grayscale">
            <span className="text-lg font-bold text-slate-900">Lagos Tech</span>
            <span className="text-lg font-bold text-slate-900">Abuja Startups</span>
            <span className="text-lg font-bold text-slate-900">PH Founders</span>
            <span className="text-lg font-bold text-slate-900">Ibadan SMEs</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

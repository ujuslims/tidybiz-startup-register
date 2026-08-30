import { ShieldCheck, Clock, Users, Star } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Businesses launched" },
  { icon: ShieldCheck, value: "CAC", label: "Accredited filing agents" },
  { icon: Clock, value: "48hrs", label: "Express registration" },
  { icon: Star, value: "4.9/5", label: "Average client rating" },
];

const TrustBar = () => (
  <section className="bg-white border-y border-slate-100 py-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
        Trusted by founders in Lagos, Abuja, Port Harcourt & Ibadan
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="flex items-center gap-4 justify-center lg:justify-start">
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <s.icon className="text-primary" size={20} />
            </div>
            <div>
              <p className="text-xl font-extrabold text-slate-900 leading-none">{s.value}</p>
              <p className="text-sm text-slate-500 mt-1">{s.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;

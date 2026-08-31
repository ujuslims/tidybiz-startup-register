import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { servicePath, type Service } from "@/data/services";

const ServiceCard = ({ service }: { service: Service }) => (
  <Link
    to={servicePath(service)}
    className="group flex flex-col bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-7 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40 transition-all duration-300"
  >
    <div className="flex items-start justify-between mb-6">
      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
        <service.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={22} />
      </div>
      <span className="text-xs font-bold uppercase tracking-widest text-slate-400">{service.category}</span>
    </div>

    <h3 className="text-xl font-bold text-slate-900 mb-2">{service.shortTitle}</h3>
    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">{service.summary}</p>

    <div className="flex items-center justify-between pt-5 border-t border-slate-100">
      <div>
        <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">From</p>
        <p className="text-primary font-bold">{service.startingPrice}</p>
      </div>
      <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 group-hover:text-primary transition-colors">
        View service
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </span>
    </div>
  </Link>
);

export default ServiceCard;

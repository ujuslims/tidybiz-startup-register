import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { registrationServices, brandServices } from '@/data/services';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-primary-foreground rounded-sm"></div>
              </div>
              <span className="text-xl font-bold">TidyBiz</span>
            </Link>
            <p className="text-slate-400 leading-relaxed text-sm">
              Your all-in-one launchpad for Nigerian startups. We handle CAC registration, tax and
              compliance, then build the brand that makes you look the part.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500">Register</h4>
            <ul className="space-y-2 text-sm">
              {registrationServices.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-slate-400 hover:text-white transition-colors">
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500">Brand</h4>
            <ul className="space-y-2 text-sm">
              {brandServices.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-slate-400 hover:text-white transition-colors">
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 pt-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/pricing" className="text-slate-400 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/resources" className="text-slate-400 hover:text-white transition-colors">Resources & FAQs</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="text-primary flex-shrink-0" size={16} />
                <span className="text-slate-400">+234 901 234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-primary flex-shrink-0" size={16} />
                <span className="text-slate-400">hello@tidybiz.ng</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="text-primary flex-shrink-0 mt-1" size={16} />
                <span className="text-slate-400">Plot 420, Cadastral Zone A09<br />Central Business District, Abuja</span>
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex mt-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Book a free consultation
            </Link>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} TidyBiz Solutions. CAC-accredited filing agents.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/resources" className="text-slate-500 hover:text-white transition-colors">Resources</Link>
            <Link to="/services" className="text-slate-500 hover:text-white transition-colors">All Services</Link>
            <Link to="/contact" className="text-slate-500 hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

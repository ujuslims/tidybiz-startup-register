import { Menu, X, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { registrationServices, brandServices } from '@/data/services';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Resources', to: '/resources' },
  { label: 'Contact', to: '/contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-primary-foreground rounded-sm"></div>
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-slate-900">TidyBiz</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
            {navItems.map((item) => (
              <div key={item.to} className={item.to === '/services' ? 'relative group' : ''}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `inline-flex items-center gap-1 transition-colors hover:text-primary ${
                      isActive ? 'text-primary' : ''
                    }`
                  }
                >
                  {item.label}
                  {item.to === '/services' && <ChevronDown size={14} />}
                </NavLink>

                {item.to === '/services' && (
                  <div className="invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[34rem]">
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl shadow-slate-300/40 p-6 grid grid-cols-2 gap-6">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Register</p>
                        <ul className="space-y-2">
                          {registrationServices.map((s) => (
                            <li key={s.slug}>
                              <Link to={`/services/${s.slug}`} className="text-slate-600 hover:text-primary transition-colors">
                                {s.shortTitle}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Brand</p>
                        <ul className="space-y-2">
                          {brandServices.map((s) => (
                            <li key={s.slug}>
                              <Link to={`/services/${s.slug}`} className="text-slate-600 hover:text-primary transition-colors">
                                {s.shortTitle}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <Link
              to="/contact"
              className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-700 hover:text-primary"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-100 max-h-[75vh] overflow-y-auto">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className="text-slate-700 hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="pt-2 border-t border-slate-100">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 my-3">All Services</p>
                <ul className="space-y-3">
                  {[...registrationServices, ...brandServices].map((s) => (
                    <li key={s.slug}>
                      <Link to={`/services/${s.slug}`} className="text-slate-600 hover:text-primary transition-colors text-sm">
                        {s.shortTitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to="/contact"
                className="bg-slate-900 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary transition-colors text-center"
              >
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

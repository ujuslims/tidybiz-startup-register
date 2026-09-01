import { Menu, X, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { registrationServices, brandServices, servicePath } from '@/data/services';

/** Two pillar dropdowns (Registration, Branding) plus the site's other top-level pages. */
const pillars = [
  { label: 'Registration', to: '/registration', services: registrationServices },
  { label: 'Branding', to: '/branding', services: brandServices },
] as const;

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Resources', to: '/resources' },
  { label: 'About Us', to: '/about' },
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
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `inline-flex items-center gap-1 transition-colors hover:text-primary ${isActive ? 'text-primary' : ''}`
              }
            >
              Home
            </NavLink>

            {pillars.map((pillar) => (
              <div key={pillar.to} className="relative group">
                <NavLink
                  to={pillar.to}
                  className={({ isActive }) =>
                    `inline-flex items-center gap-1 transition-colors hover:text-primary ${
                      isActive ? 'text-primary' : ''
                    }`
                  }
                >
                  {pillar.label}
                  <ChevronDown size={14} />
                </NavLink>

                <div className="invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 absolute left-1/2 -translate-x-1/2 top-full pt-4 w-72">
                  <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl shadow-slate-300/40 p-6">
                    <Link
                      to={pillar.to}
                      className="block text-xs font-bold uppercase tracking-widest text-primary mb-3 hover:underline"
                    >
                      {pillar.label} overview →
                    </Link>
                    <ul className="space-y-2">
                      {pillar.services.map((s) => (
                        <li key={s.slug}>
                          <Link to={servicePath(s)} className="text-slate-600 hover:text-primary transition-colors">
                            {s.shortTitle}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}

            {navItems.slice(1).map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `inline-flex items-center gap-1 transition-colors hover:text-primary ${isActive ? 'text-primary' : ''}`
                }
              >
                {item.label}
              </NavLink>
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
              <NavLink to="/" end className="text-slate-700 hover:text-primary transition-colors font-medium">
                Home
              </NavLink>

              {pillars.map((pillar) => (
                <div key={pillar.to} className="pt-2 border-t border-slate-100">
                  <Link to={pillar.to} className="text-slate-900 hover:text-primary transition-colors font-bold">
                    {pillar.label}
                  </Link>
                  <ul className="space-y-2 mt-3">
                    {pillar.services.map((s) => (
                      <li key={s.slug}>
                        <Link to={servicePath(s)} className="text-slate-600 hover:text-primary transition-colors text-sm">
                          {s.shortTitle}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {navItems.slice(1).map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className="text-slate-700 hover:text-primary transition-colors font-medium pt-2 border-t border-slate-100"
                >
                  {item.label}
                </NavLink>
              ))}

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

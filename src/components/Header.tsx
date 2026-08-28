import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white rounded-sm"></div>
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-slate-900">TidyBiz</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#services" className="hover:text-primary transition-colors">Registration</a>
            <a href="#services" className="hover:text-primary transition-colors">Branding</a>
            <a href="#process" className="hover:text-primary transition-colors">Process</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center">
            <a href="#contact" className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary transition-colors">
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-700 hover:text-primary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-100">
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="text-slate-700 hover:text-primary transition-colors">Registration</a>
              <a href="#services" className="text-slate-700 hover:text-primary transition-colors">Branding</a>
              <a href="#process" className="text-slate-700 hover:text-primary transition-colors">Process</a>
              <a href="#testimonials" className="text-slate-700 hover:text-primary transition-colors">Testimonials</a>
              <a href="#contact" className="text-slate-700 hover:text-primary transition-colors">Contact</a>
              <a href="#contact" className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary transition-colors text-center">
                Get Started
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;


import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import University_logo from './University_logo.png';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className={`${isScrolled ? 'bg-blue-500' : 'bg-blue-600/20'} p-2 rounded-lg transition-colors duration-300 shadow-sm backdrop-blur-0`}>
            <img 
              src={University_logo} 
              className="w-14 h-14 object-contain" 
              alt="Foundation University Logo" 
            />
          </div>
          <div>
            <h1 className={`font-oswald text-xl font-bold tracking-tighter leading-none ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
              FUSST <span className="text-amber-500">SPORTS</span>
            </h1>
            <p className={`text-[10px] uppercase tracking-widest font-bold ${isScrolled ? 'text-slate-500' : 'text-slate-200'}`}>
              Society of Foundation University
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-semibold uppercase tracking-wider hover:text-amber-500 transition-colors ${
                isScrolled ? 'text-slate-700' : 'text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#register"
            className="bg-amber-500 hover:bg-amber-600 text-blue-900 px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider shadow-lg transform hover:-translate-y-1 transition-all"
          >
            Register Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={isScrolled ? 'text-slate-900' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 border-t shadow-xl animate-fade-in-down">
          <div className="flex flex-col p-6 space-y-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-800 text-lg font-bold uppercase tracking-wide hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#register"
              className="bg-blue-900 text-white text-center py-3 rounded-lg font-bold uppercase"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join a Team
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;

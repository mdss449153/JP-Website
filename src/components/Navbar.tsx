import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'About', id: 'about' },
    { label: 'Our Work', id: 'our-work' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-neutral-200/80 py-2 sm:py-2.5'
            : 'bg-white border-b border-neutral-100 py-2.5 sm:py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo on the Left */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-1 sm:gap-1.5 group text-left focus:outline-hidden cursor-pointer"
            aria-label="JustPromot Home"
          >
            <img
              src="/jp.png"
              alt="JP Logo"
              className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <span className="text-xl sm:text-2xl font-black tracking-tight text-neutral-950 font-display">
              Just <span className="text-blue-600">Promot</span>
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`px-3.5 py-2 text-sm font-medium transition-colors relative ${
                    isActive
                      ? 'text-neutral-950 font-bold'
                      : 'text-neutral-600 hover:text-neutral-950'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-neutral-950 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Prominent CTA */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => handleLinkClick('contact')}
              className="px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-sm rounded-xl transition-all shadow-xs hover:shadow-md hover:-translate-y-0.5 flex items-center gap-2 group cursor-pointer border border-neutral-900 focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <span>Get Started</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => handleLinkClick('contact')}
              className="px-3.5 py-1.5 bg-neutral-900 text-white font-medium text-xs rounded-lg transition-colors"
            >
              Get Started
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 focus:outline-hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-neutral-200 px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-2 mb-5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`text-left px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-neutral-100 text-neutral-950 font-bold'
                      : 'text-neutral-700 hover:bg-neutral-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="pt-4 border-t border-neutral-100 space-y-3">
              <a
                href="tel:+9182555869"
                className="flex items-center gap-2 text-sm text-neutral-800 p-2 rounded-lg hover:bg-neutral-50"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span className="font-semibold">+91 82555 86589</span>
              </a>
              <a
                href="mailto:justpromot@gmail.com"
                className="flex items-center gap-2 text-sm text-neutral-800 p-2 rounded-lg hover:bg-neutral-50"
              >
                <Mail className="w-4 h-4 text-emerald-600" />
                <span>justpromot@gmail.com</span>
              </a>
              <button
                onClick={() => handleLinkClick('contact')}
                className="w-full py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-sm rounded-xl text-center shadow-xs flex items-center justify-center gap-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;

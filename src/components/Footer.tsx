import React from 'react';
import { Mail, Phone, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onSelectServiceAndContact: (serviceName: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectServiceAndContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-1 sm:gap-1.5 px-3.5 py-1.5 bg-white rounded-xl shadow-xs border border-neutral-200/80">
              <img
                src="/jp.png"
                alt="JP Logo"
                className="h-7 sm:h-8 w-auto object-contain"
              />
              <span className="text-xl sm:text-2xl font-black tracking-tight text-neutral-950 font-display">
                Just <span className="text-blue-600">Promot</span>
              </span>
            </div>

            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              Digital solutions for businesses ready to grow online.
            </p>

            <p className="text-xs text-neutral-500 max-w-sm leading-relaxed">
              Helping businesses establish and strengthen their digital presence through tailored
              websites, local Google business visibility, and engaging short-form video reels.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('our-work')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Our Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onSelectServiceAndContact('Website Development')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Website Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectServiceAndContact('Google Business Profile')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Google Business Profile
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectServiceAndContact('Reel Services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Reel Services
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contact
            </h4>
            <div className="space-y-3 text-xs">
              <a
                href="mailto:justpromot@gmail.com"
                className="flex items-center gap-2.5 hover:text-emerald-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-neutral-900 flex items-center justify-center text-neutral-400 group-hover:text-emerald-400 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span>justpromot@gmail.com</span>
              </a>

              <a
                href="tel:+9182555869"
                className="flex items-center gap-2.5 hover:text-emerald-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-neutral-900 flex items-center justify-center text-neutral-400 group-hover:text-emerald-400 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+91 82555 86589</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-14 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>© 2026 JustPromot. All Rights Reserved.</div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-neutral-600">Static Website Architecture</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

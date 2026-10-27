import React, { useState } from 'react';
import { Logo } from './Logo';
import { Menu, X, PhoneCall } from 'lucide-react';

interface HeaderProps {
  onOpenContact: () => void;
  onOpenPitchDeck: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact, onOpenPitchDeck }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-sky-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark / Logo */}
        <div className="flex items-center shrink-0">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 whitespace-nowrap focus:outline-none"
          >
            <Logo />
          </a>
        </div>

        {/* Zone 2: 4-5 Clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
          <button
            onClick={() => scrollTo('services')}
            className="hover:text-sky-600 transition-colors whitespace-nowrap shrink-0 cursor-pointer text-left"
          >
            Media Network
          </button>
          <button
            onClick={() => scrollTo('production')}
            className="hover:text-sky-600 transition-colors whitespace-nowrap shrink-0 cursor-pointer text-left"
          >
            Video Production
          </button>
          <button
            onClick={() => scrollTo('planner')}
            className="hover:text-sky-600 transition-colors whitespace-nowrap shrink-0 cursor-pointer text-left"
          >
            Campaign Planner
          </button>
          <button
            onClick={() => scrollTo('about')}
            className="hover:text-sky-600 transition-colors whitespace-nowrap shrink-0 cursor-pointer text-left"
          >
            About Network
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="hover:text-sky-600 transition-colors whitespace-nowrap shrink-0 cursor-pointer text-left"
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenPitchDeck}
            className="px-3.5 py-2 text-xs font-semibold text-sky-700 bg-sky-50 hover:bg-sky-100 border border-sky-200 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Pitch Deck
          </button>
          <button
            onClick={onOpenContact}
            className="px-5 py-2.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 active:bg-sky-700 rounded-lg shadow-sm shadow-sky-500/25 transition-all whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Connect With Us</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-sky-100 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <button
            onClick={() => scrollTo('services')}
            className="block w-full text-left py-2 text-sm font-medium text-slate-700 hover:text-sky-600"
          >
            Media Network (9 Offerings)
          </button>
          <button
            onClick={() => scrollTo('production')}
            className="block w-full text-left py-2 text-sm font-medium text-slate-700 hover:text-sky-600"
          >
            Video Production & Studio
          </button>
          <button
            onClick={() => scrollTo('planner')}
            className="block w-full text-left py-2 text-sm font-medium text-slate-700 hover:text-sky-600"
          >
            Campaign Reach Planner
          </button>
          <button
            onClick={() => scrollTo('about')}
            className="block w-full text-left py-2 text-sm font-medium text-slate-700 hover:text-sky-600"
          >
            About Ramay Entertainment
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="block w-full text-left py-2 text-sm font-medium text-slate-700 hover:text-sky-600"
          >
            Contact & Office Locations
          </button>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPitchDeck();
              }}
              className="w-full py-2.5 text-center text-xs font-semibold text-sky-700 bg-sky-50 rounded-lg border border-sky-200"
            >
              View Pitch Deck & Proposal
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 text-center text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg shadow-sm"
            >
              Connect With Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

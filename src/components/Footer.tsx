import React from 'react';
import { Logo } from './Logo';
import { Mail, Phone, MapPin, Globe, Film, ChevronRight } from 'lucide-react';
import { BRAND_POSITIONING } from '../data/content';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenPitchDeck: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onOpenPitchDeck,
  onOpenContact,
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="footer" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mt-3">
              Central India's fastest growing entertainment network offering multiplatform services: Web series, TV serials, Talkshows, Music albums, Film PR, and India’s Integrated Media Distribution Network.
            </p>
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xs text-sky-300">
              <span className="font-semibold text-white">Positioning:</span> {BRAND_POSITIONING}
            </div>
            <div className="text-xs text-slate-400 space-y-1">
              <p><span className="text-white font-medium">Headquarters:</span> 113, Dewas road, Ujjain, Madhya Pradesh 456010</p>
              <p><span className="text-white font-medium">Phone:</span> <a href="tel:+919039655399" className="hover:text-sky-400 text-slate-300 font-semibold">+91 90396 55399</a></p>
              <p><span className="text-white font-medium">WhatsApp:</span> <a href="https://wa.me/919993540314" target="_blank" rel="noreferrer" className="hover:text-emerald-400 text-emerald-300 font-semibold">+91 99935 40314</a></p>
              <p><span className="text-white font-medium">Email:</span> <a href="mailto:ramayentertainment@gmail.com" className="hover:text-sky-400 text-slate-300 font-semibold">ramayentertainment@gmail.com</a></p>
            </div>
          </div>

          {/* Media Network Offerings */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading">
              Media Channels
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-sky-400 transition-colors cursor-pointer text-left">
                  3,000+ Cinema Screens
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-sky-400 transition-colors cursor-pointer text-left">
                  350+ Media Websites
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-sky-400 transition-colors cursor-pointer text-left">
                  16+ OTT Platforms
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-sky-400 transition-colors cursor-pointer text-left">
                  JioHotstar Commercials
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-sky-400 transition-colors cursor-pointer text-left">
                  500+ Local City Hubs
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-sky-400 transition-colors cursor-pointer text-left">
                  100+ Print & Digital Magazines
                </button>
              </li>
            </ul>
          </div>

          {/* Entertainment & Production */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading">
              Production Studio
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => scrollTo('production')} className="hover:text-sky-400 transition-colors cursor-pointer text-left">
                  Podcasts & Talkshows
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('production')} className="hover:text-sky-400 transition-colors cursor-pointer text-left">
                  Cinema & TVC Ad Films
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('production')} className="hover:text-sky-400 transition-colors cursor-pointer text-left">
                  Brand & Product Shoots
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('about')} className="hover:text-sky-400 transition-colors cursor-pointer text-left">
                  Web Series Production
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('about')} className="hover:text-sky-400 transition-colors cursor-pointer text-left">
                  Music Album Distribution
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('about')} className="hover:text-sky-400 transition-colors cursor-pointer text-left">
                  Film Promotion & PR
                </button>
              </li>
            </ul>
          </div>

          {/* Client Resources & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading">
              Resources & Legal
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={onOpenPitchDeck} className="hover:text-sky-400 transition-colors cursor-pointer text-left">
                  Corporate Pitch Deck
                </button>
              </li>
              <li>
                <button onClick={onOpenPitchDeck} className="hover:text-sky-400 transition-colors cursor-pointer text-left">
                  Company Profile Brochure
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('planner')} className="hover:text-sky-400 transition-colors cursor-pointer text-left">
                  Media Reach Estimator
                </button>
              </li>
              <li>
                <button onClick={onOpenPrivacy} className="hover:text-sky-400 transition-colors cursor-pointer text-left font-semibold text-sky-400">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={onOpenTerms} className="hover:text-sky-400 transition-colors cursor-pointer text-left">
                  Terms of Service & Distribution
                </button>
              </li>
              <li>
                <button onClick={onOpenContact} className="hover:text-sky-400 transition-colors cursor-pointer text-left">
                  Contact & Branch Locations
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-slate-950/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Ramay Entertainment. All rights reserved. Central India · Pan-India Network.
          </div>
          <div className="flex items-center gap-4">
            <button onClick={onOpenPrivacy} className="hover:text-slate-300 transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <span>·</span>
            <button onClick={onOpenTerms} className="hover:text-slate-300 transition-colors cursor-pointer">
              Terms of Distribution
            </button>
            <span>·</span>
            <button onClick={onOpenContact} className="hover:text-slate-300 transition-colors cursor-pointer">
              Grievance Officer
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Printer, Download, Sparkles, Building2, Film, Globe, CheckCircle2 } from 'lucide-react';
import { Logo } from './Logo';
import { CORE_STATS, BRAND_POSITIONING, SERVICE_OFFERINGS } from '../data/content';

interface PitchDeckModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const PitchDeckModal: React.FC<PitchDeckModalProps> = ({ isOpen, onClose, onOpenContact }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [viewMode, setViewMode] = useState<'pitch' | 'brochure'>('pitch');

  if (!isOpen) return null;

  const slides = [
    {
      title: 'Ramay Entertainment Overview',
      subtitle: "Central India's Fastest Growing Entertainment & Media Distribution Network",
      badge: 'Executive Summary',
      content: (
        <div className="space-y-4 text-slate-700">
          <p className="text-base leading-relaxed">
            <strong>Ramay Entertainment</strong> is Central India’s premier entertainment network offering multiplatform services including the production of <strong>Web series, TV serials, Talkshows, and Music albums</strong>.
          </p>
          <p className="text-sm leading-relaxed text-slate-600">
            Along with in-house studio production, Ramay Entertainment spearheads <strong>Film promotion and PR</strong>, providing a swift and verified bridge between creative products and audiences across the nation.
          </p>
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-3 rounded-lg bg-sky-50 border border-sky-100">
              <span className="text-xs font-bold text-sky-800">Production Studio</span>
              <p className="text-xs text-slate-600 mt-1">Web series, TV serials, music albums & podcasts.</p>
            </div>
            <div className="p-3 rounded-lg bg-sky-50 border border-sky-100">
              <span className="text-xs font-bold text-sky-800">Distribution Engine</span>
              <p className="text-xs text-slate-600 mt-1">3,000+ cinema screens, 16+ OTTs & 350+ media sites.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'The Modern Brand Challenge',
      subtitle: 'Why Isolated Promotion Fails and Unified Networks Succeed',
      badge: 'Market Thesis',
      content: (
        <div className="space-y-4 text-slate-700">
          <p className="text-sm leading-relaxed">
            Most businesses and film producers today suffer from <strong>fragmented promotion</strong> — dealing with disparate PR agents, standalone cinema aggregators, individual digital managers, and separate video production crews.
          </p>
          <div className="p-4 bg-sky-50/70 rounded-xl border border-sky-200">
            <h5 className="text-sm font-bold text-slate-900 mb-1">The Ramay Solution:</h5>
            <p className="text-xs text-slate-700 leading-relaxed">
              We offer a complete media distribution solution that supports brand awareness, audience engagement, market expansion, and credibility building at scale under one unified network.
            </p>
          </div>
          <p className="text-xs text-slate-600 italic">
            “One network. Multiple media channels. Pan-India brand reach.”
          </p>
        </div>
      ),
    },
    {
      title: 'Pan-India Distribution Scale',
      subtitle: '9 High-Impact Media Channels Activated Nationwide',
      badge: 'Network Matrix',
      content: (
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
            <span className="font-bold text-sky-700">3,000+ Cinema Screens</span>
            <p className="text-slate-500 mt-0.5">PVR INOX, Cinepolis mass reach.</p>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
            <span className="font-bold text-sky-700">350+ Media Websites</span>
            <p className="text-slate-500 mt-0.5">High authority Google News PR.</p>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
            <span className="font-bold text-sky-700">16+ OTT Streaming Networks</span>
            <p className="text-slate-500 mt-0.5">Domestic and global diaspora reach.</p>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
            <span className="font-bold text-sky-700">JioHotstar Commercials</span>
            <p className="text-slate-500 mt-0.5">Nationwide & micro PIN-code targeting.</p>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
            <span className="font-bold text-sky-700">500+ Local City Updates</span>
            <p className="text-slate-500 mt-0.5">Hyperlocal regional engagement.</p>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
            <span className="font-bold text-sky-700">100+ Prestigious Magazines</span>
            <p className="text-slate-500 mt-0.5">Print & digital authority branding.</p>
          </div>
        </div>
      ),
    },
    {
      title: 'Full-Stack Video Production',
      subtitle: 'From Studio Podcasts to Cinematic TVCs & Ad Films',
      badge: 'Creative Wing',
      content: (
        <div className="space-y-3 text-slate-700 text-sm">
          <p className="text-xs text-slate-600">
            Our state-of-the-art studio ensures brands not only distribute content effectively but also create high-quality material that commands respect:
          </p>
          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div className="p-2 rounded bg-sky-50 font-medium">Podcasts</div>
            <div className="p-2 rounded bg-sky-50 font-medium">Brand Shoots</div>
            <div className="p-2 rounded bg-sky-50 font-medium">Product Shoots</div>
            <div className="p-2 rounded bg-sky-50 font-medium">Ad Films</div>
            <div className="p-2 rounded bg-sky-50 font-medium">Viral Reels</div>
            <div className="p-2 rounded bg-sky-50 font-medium">Interviews</div>
          </div>
          <p className="text-xs text-slate-500">
            Integrated handoff: Studio shoots are directly optimized and pushed to Cinema screens, OTT ads, and 350+ digital news outlets.
          </p>
        </div>
      ),
    },
    {
      title: 'Strategic Partnership & Next Steps',
      subtitle: 'Central India Headquarters & Nationwide Execution',
      badge: 'Collaboration',
      content: (
        <div className="space-y-4 text-slate-700 text-sm">
          <p>
            Ramay Entertainment acts as your strategic media partner to scale presence through a structured, professional, and results-oriented roadmap.
          </p>
          <div className="p-3 bg-slate-50 rounded-lg text-xs space-y-1">
            <p><strong>Indore HQ:</strong> Vijay Nagar Commercial Hub, Indore, MP 452010</p>
            <p><strong>Bhopal Studio:</strong> MP Nagar Zone-II, Bhopal, MP 462011</p>
            <p><strong>Mumbai Liaison:</strong> Andheri West, Mumbai, Maharashtra 400053</p>
            <p><strong>Phone:</strong> +91 98260 00000 · <strong>Email:</strong> business@ramayentertainment.com</p>
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="w-full py-3 bg-sky-600 hover:bg-sky-500 text-white rounded-xl font-bold text-xs shadow-md transition-colors cursor-pointer"
          >
            Schedule Discovery & Strategy Session
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-sky-100 animate-in fade-in zoom-in-95 duration-150">
        {/* Header Bar */}
        <div className="p-4 sm:p-5 border-b border-sky-100 flex items-center justify-between bg-white">
          <div className="flex items-center gap-3">
            <Logo />
            <div className="hidden sm:flex items-center gap-1.5 ml-4 p-1 bg-slate-100 rounded-lg text-xs font-semibold">
              <button
                onClick={() => setViewMode('pitch')}
                className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                  viewMode === 'pitch' ? 'bg-white text-sky-700 shadow-2xs' : 'text-slate-600'
                }`}
              >
                Pitch Slides
              </button>
              <button
                onClick={() => setViewMode('brochure')}
                className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                  viewMode === 'brochure' ? 'bg-white text-sky-700 shadow-2xs' : 'text-slate-600'
                }`}
              >
                Company Profile (Brochure)
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              title="Print document"
              className="p-2 text-slate-500 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {viewMode === 'pitch' ? (
            <div className="space-y-6">
              {/* Slide Badge & Counter */}
              <div className="flex items-center justify-between text-xs font-medium text-slate-500">
                <span className="font-semibold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200">
                  {slides[activeSlide].badge}
                </span>
                <span className="font-mono">
                  Slide {activeSlide + 1} of {slides.length}
                </span>
              </div>

              {/* Slide Headings */}
              <div>
                <h3 className="text-2xl font-extrabold text-slate-900 font-heading">
                  {slides[activeSlide].title}
                </h3>
                <p className="text-sm font-medium text-sky-700 mt-1">
                  {slides[activeSlide].subtitle}
                </p>
              </div>

              {/* Slide Content Box */}
              <div className="p-6 rounded-2xl bg-sky-50/40 border border-sky-100 min-h-[220px]">
                {slides[activeSlide].content}
              </div>

              {/* Slide Stepper Controls */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <button
                  disabled={activeSlide === 0}
                  onClick={() => setActiveSlide(prev => Math.max(0, prev - 1))}
                  className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <div className="flex items-center gap-1.5">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSlide(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                        activeSlide === idx ? 'bg-sky-600 w-6' : 'bg-slate-200 hover:bg-slate-300'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  disabled={activeSlide === slides.length - 1}
                  onClick={() => setActiveSlide(prev => Math.min(slides.length - 1, prev + 1))}
                  className="px-4 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 disabled:opacity-30 disabled:cursor-not-allowed rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* Brochure View */
            <div className="space-y-6 text-sm text-slate-700 print:text-black">
              <div className="border-b border-sky-100 pb-4">
                <span className="text-xs uppercase font-bold text-sky-600 tracking-wider">
                  Corporate Profile & Media Capability Statement
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">
                  Ramay Entertainment: Integrated Media Distribution Network
                </h3>
                <p className="text-xs text-slate-500 mt-1 italic">
                  “One network. Multiple media channels. Pan-India brand reach.”
                </p>
              </div>

              <div className="space-y-3 leading-relaxed">
                <p>
                  <strong>About Ramay Entertainment:</strong> Ramay Entertainment is Central India's fastest growing entertainment network offering multiplatform services including making of Web series, TV serials, Talkshows, and Music albums. Along with this, Ramay Entertainment also deals in areas of Film promotion and PR, providing a swift platform between the product and the audience.
                </p>
                <p>
                  We help creators and brands by providing various suitable digital platforms for making as well as releasing of your music, movies, and serials which makes your product reach and appreciated by a wider audience across India.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {CORE_STATS.map((stat, i) => (
                  <div key={i} className="p-3 bg-sky-50 rounded-lg border border-sky-100 text-center">
                    <div className="text-xl font-bold font-mono text-sky-700">{stat.value}</div>
                    <div className="text-xs font-semibold text-slate-800">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-2 pt-2">
                <h4 className="font-bold text-slate-900 text-sm">Key Media Inventory Available:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {SERVICE_OFFERINGS.map(s => (
                    <div key={s.id} className="p-2 border border-slate-200 rounded flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                      <span><strong>{s.title}:</strong> {s.shortDesc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                <div>
                  <p className="font-bold text-slate-800">Direct Inquiries: business@ramayentertainment.com</p>
                  <p className="text-slate-500">Central India HQ: Indore & Bhopal · Mumbai Liaison</p>
                </div>
                <button
                  onClick={() => {
                    onClose();
                    onOpenContact();
                  }}
                  className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg font-bold transition-colors cursor-pointer"
                >
                  Book Campaign Strategy
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Mic, Camera, Package, Film, Smartphone, UserCheck, ArrowRight, Video } from 'lucide-react';

interface ProductionShowcaseProps {
  onOpenContact: (formatName?: string) => void;
}

const PRODUCTION_FORMATS = [
  {
    id: 'podcasts',
    name: 'Podcasts & Talkshows',
    icon: Mic,
    desc: 'Multi-camera 4K podcast setups, sound-treated acoustics, live switching, professional audio mastering, and episodic syndication.',
    turnaround: '3 - 5 Days',
    idealFor: 'Founders, thought-leaders, celebrity deep-dives & corporate roundtables'
  },
  {
    id: 'brand-shoots',
    name: 'Brand Shoots',
    icon: Camera,
    desc: 'High-concept visual storytelling capturing company culture, corporate values, brand manifestos, and architectural spaces.',
    turnaround: '1 - 2 Weeks',
    idealFor: 'Annual campaigns, investor pitches, brand identity overhauls'
  },
  {
    id: 'product-shoots',
    name: 'Product Shoots',
    icon: Package,
    desc: 'Precision tabletop lighting, high-speed macro motion, e-commerce catalog renders, and stylized lifestyle unboxings.',
    turnaround: '3 - 5 Days',
    idealFor: 'FMCG, electronics, fashion, jewellery & consumer goods'
  },
  {
    id: 'ad-films',
    name: 'Ad Films (Cinema & TVC)',
    icon: Film,
    desc: 'Full cinematic production: scriptwriting, casting, cinematography, VFX, color grading, and broadcast delivery masters.',
    turnaround: '2 - 3 Weeks',
    idealFor: 'Cinema screens (PVR/INOX), National TVCs, and JioHotstar digital commercials'
  },
  {
    id: 'reels',
    name: 'High-Impact Social Reels',
    icon: Smartphone,
    desc: 'Bite-sized, viral-optimized vertical 9:16 videos engineered for Instagram, YouTube Shorts, and LinkedIn video feeds.',
    turnaround: '48 Hours',
    idealFor: 'Product drops, trends, customer engagement & daily organic reach'
  },
  {
    id: 'interviews',
    name: 'Executive & Celebrity Interviews',
    icon: UserCheck,
    desc: 'Curated 2-camera interview rigs, teleprompters, discreet lighting, and media-trained interviewing support.',
    turnaround: '3 - 4 Days',
    idealFor: 'C-suite announcements, PR launches & industry summits'
  }
];

export const ProductionShowcase: React.FC<ProductionShowcaseProps> = ({ onOpenContact }) => {
  const [selectedFormat, setSelectedFormat] = useState(PRODUCTION_FORMATS[0]);

  return (
    <section id="production" className="py-16 lg:py-24 bg-white border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Context */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-semibold text-sky-800">
              <Video className="w-3.5 h-3.5 text-sky-600" />
              <span>Full-Stack Video Production Support</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading text-balance">
              Content That Reflects Your Identity & Commands Attention
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Distribution succeeds when the content itself is extraordinary. At <strong className="text-slate-900">Ramay Entertainment</strong>, our dedicated creative studio crafts high-definition visual assets tailored for modern broadcast, OTT, digital platforms, and cinema screens.
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-xl bg-sky-50/60 border border-sky-100 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center shrink-0 font-bold text-xs">
                  4K
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Cinema & Digital Grade Production</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Equipped with cinema cameras, pro lighting, wireless multi-track audio, and seasoned directors.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 font-bold text-xs">
                  PR
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Integrated Distribution Hand-off</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Assets are formatted immediately for cinema commercials, 16+ OTT platforms, and 350+ media sites.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenContact(`Video Production (${selectedFormat.name})`)}
              className="px-6 py-3 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-xl shadow-xs transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Book Studio & Shoot Crew</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Right Column: Studio Photo Showcase & Interactive Formats Selector */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-sky-200 shadow-lg bg-slate-900 group">
              <img
                src="/src/assets/images/video_production_studio_1793085962648.jpg"
                alt="Ramay Entertainment Video Production Studio, Podcasts, Brand Shoots and Ad Films"
                className="w-full aspect-[16/9] object-cover group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="inline-block bg-sky-500/90 backdrop-blur-xs px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider mb-1">
                  Ramay Creative Studios
                </div>
                <h3 className="text-lg font-bold">
                  Podcasts · Brand Shoots · Ad Films · Reels · Interviews
                </h3>
              </div>
            </div>

            {/* 6 Production Format Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {PRODUCTION_FORMATS.map((item) => {
                const Icon = item.icon;
                const isSelected = selectedFormat.id === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedFormat(item)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'border-sky-500 bg-sky-50 shadow-xs'
                        : 'border-slate-200 bg-white hover:border-sky-300 hover:bg-sky-50/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Icon className={`w-4 h-4 ${isSelected ? 'text-sky-600' : 'text-slate-500'}`} />
                      <span className="text-[10px] font-mono text-slate-500">{item.turnaround}</span>
                    </div>
                    <div className={`text-xs font-bold leading-tight ${isSelected ? 'text-sky-900' : 'text-slate-900'}`}>
                      {item.name}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Format Detail Callout */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold text-slate-900 mb-0.5">
                  Selected Format: <span className="text-sky-600">{selectedFormat.name}</span>
                </p>
                <p className="text-xs text-slate-600">
                  {selectedFormat.desc}
                </p>
              </div>
              <button
                onClick={() => onOpenContact(`Inquiry for ${selectedFormat.name}`)}
                className="px-3.5 py-2 text-xs font-semibold text-sky-700 bg-sky-100/70 hover:bg-sky-200/80 rounded-lg whitespace-nowrap cursor-pointer transition-colors"
              >
                Inquire Rates
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

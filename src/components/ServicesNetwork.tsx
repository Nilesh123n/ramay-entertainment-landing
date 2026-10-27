import React, { useState } from 'react';
import { SERVICE_OFFERINGS } from '../data/content';
import { ServiceOffering } from '../types';
import { Check, ArrowUpRight, Film, Globe, Users, Newspaper, Play, Radio, MapPin } from 'lucide-react';

interface ServicesNetworkProps {
  onSelectServiceForPlan: (serviceId: string) => void;
  onOpenContact: (prefillService?: string) => void;
}

export const ServicesNetwork: React.FC<ServicesNetworkProps> = ({
  onSelectServiceForPlan,
  onOpenContact,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>('cinema-screens');

  const filteredOfferings = activeCategory === 'all'
    ? SERVICE_OFFERINGS
    : SERVICE_OFFERINGS.filter((item) => item.category === activeCategory);

  return (
    <section id="services" className="py-16 lg:py-24 bg-sky-50/40 border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-sky-200 text-xs font-semibold text-sky-800 mb-3 shadow-2xs">
            <span>Unified Media Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading text-balance">
            What We Offer: 9 Strategic Media Channels
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            At <strong className="text-slate-900">Ramay Entertainment</strong>, we do not offer isolated promotion. We bring together multiple media channels under one strategic network, enabling brands to communicate with the right audience across digital, print, business, regional, cinema, OTT, and video content formats.
          </p>

          {/* Interactive Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-1.5 p-1 bg-white border border-sky-200 rounded-xl max-w-2xl mx-auto shadow-2xs">
            {[
              { id: 'all', label: 'All 9 Channels' },
              { id: 'cinema-ott', label: 'Cinema & OTT' },
              { id: 'digital', label: 'Digital PR & Media' },
              { id: 'b2b-regional', label: 'B2B & Regional' },
              { id: 'production', label: 'Video Production' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === tab.id
                    ? 'bg-sky-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-sky-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Highlight Banner: 3,000+ Cinema Screens Showcase */}
        {(activeCategory === 'all' || activeCategory === 'cinema-ott') && (
          <div className="mb-12 bg-white rounded-2xl border border-sky-200 overflow-hidden shadow-md grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full">
              <img
                src="/src/assets/images/cinema_screens_showcase_1793085963006.jpg"
                alt="3,000+ Cinema Screens Nationwide in PVR INOX, Cinepolis"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent lg:hidden" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-md text-xs font-bold text-sky-900 flex items-center gap-1.5 shadow-xs">
                <Film className="w-3.5 h-3.5 text-sky-600" />
                <span>Major Multiplex Networks</span>
              </div>
            </div>

            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-xs font-mono font-bold text-sky-600 mb-2">
                  <span>OFFERING 06</span>
                  <span>·</span>
                  <span className="text-slate-500">MASS VISIBILITY & HIGH RECALL</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                  3,000+ Cinema Screens Nationwide
                </h3>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  Through major cinema networks such as <strong>PVR INOX, Cinepolis, and other leading chains</strong>, we offer powerful cinema advertising opportunities across a wide screen network. This is an effective medium for mass visibility and high-impact brand recall.
                </p>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Pre-show and interval on-screen commercials</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Lobby standees, video walls & kiosk sampling</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Pan-India multiplexes & Central India regional screens</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Blockbuster movie alignment for guaranteed captive audience</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="font-bold text-sky-700 text-lg tabular-nums">3,000+</span>
                  <span>Screens Activated Across All Key Indian Territories</span>
                </div>
                <button
                  onClick={() => onOpenContact('Cinema Advertising (3000+ Screens)')}
                  className="px-4 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Book Cinema Inventory</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 9 Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOfferings.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-sky-100 hover:border-sky-300 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all group relative"
              >
                <div>
                  {/* Top Metadata Row */}
                  <div className="flex items-center justify-between text-xs mb-3 text-slate-500 font-mono">
                    <span className="font-bold text-sky-600">{item.number}.</span>
                    <span className="text-[11px] font-sans font-semibold uppercase tracking-wider text-slate-600">
                      {item.metricLabel}
                    </span>
                  </div>

                  {/* Title & Metric */}
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  {/* Highlight Metric Callout */}
                  <div className="mb-3 text-xs font-bold text-sky-700 bg-sky-50/80 px-2.5 py-1 rounded inline-block">
                    Network Scale: <span className="text-sky-900 font-mono">{item.metric}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-2 text-xs text-slate-700 mb-6">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action Row */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2 text-xs">
                  <button
                    onClick={() => onSelectServiceForPlan(item.id)}
                    className="font-medium text-slate-600 hover:text-sky-700 transition-colors cursor-pointer"
                  >
                    + Add to Proposal
                  </button>
                  <button
                    onClick={() => onOpenContact(item.title)}
                    className="font-semibold text-sky-600 hover:text-sky-800 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Inquire Now</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Media Positioning Quote Strip */}
        <div className="mt-14 bg-gradient-to-r from-sky-600 to-sky-700 rounded-2xl p-6 sm:p-8 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-bold font-heading">
              Looking for a tailored Pan-India Media Mix?
            </h4>
            <p className="text-sm text-sky-100 max-w-2xl">
              From JioHotstar PIN-code targeted commercials to 350+ media websites and 500+ local city update pages, we map out the exact channels for your campaign goals.
            </p>
          </div>
          <button
            onClick={() => onOpenContact('Integrated Media Consultation')}
            className="px-6 py-3 text-xs font-bold text-sky-900 bg-white hover:bg-sky-50 active:bg-sky-100 rounded-xl shadow-md transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            Request Custom Media Matrix
          </button>
        </div>
      </div>
    </section>
  );
};

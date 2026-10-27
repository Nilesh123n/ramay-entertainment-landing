import React from 'react';
import { CORE_STATS, BRAND_POSITIONING } from '../data/content';
import { ArrowRight, Film, Radio, Tv, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onExploreServices }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-sky-100/70">
      {/* Decorative Sky Blue subtle ambient highlights */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-20 left-10 w-80 h-80 bg-sky-100/40 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Subtitle / Regional Trust Marker */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-sky-200/80 shadow-xs text-xs font-semibold text-sky-800 mb-6">
          <span className="w-2 h-2 rounded-full bg-sky-500" />
          <span>Central India's Fastest Growing Entertainment Network</span>
          <span className="text-sky-300">|</span>
          <span className="text-slate-600 font-normal">Pan-India Media Distribution</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-slate-900 leading-[1.12] font-heading text-balance">
              India’s Integrated <span className="text-sky-600 underline decoration-sky-300 decoration-wavy decoration-2 underline-offset-8">Media Distribution</span> Network
            </h1>

            <p className="text-lg text-slate-700 leading-relaxed max-w-2xl">
              We help brands build strong <strong className="font-semibold text-slate-900">Pan-India visibility, reach, and presence</strong> through a unified media ecosystem designed for modern business growth. We do not offer isolated promotion — we provide a complete multiplatform media distribution solution from Central India to across the nation.
            </p>

            {/* Quick Multiplatform Capabilities bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Web Series & TV Serials Production</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Music Albums & Multiplatform Release</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Film Promotion & Direct PR Engine</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>3,000+ Cinema Screens & 16+ OTT Platforms</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenContact}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 active:bg-sky-700 rounded-xl shadow-md shadow-sky-600/25 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Launch Pan-India Campaign</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreServices}
                className="px-6 py-3.5 text-sm font-semibold text-slate-700 hover:text-sky-700 bg-white hover:bg-sky-50 border border-slate-200 hover:border-sky-300 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore 9 Media Channels</span>
              </button>
            </div>

            {/* Tagline Positioning Banner */}
            <div className="pt-4 border-t border-slate-200/80">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                <span className="font-semibold text-sky-700">Positioning:</span>
                <span className="italic text-slate-800">“{BRAND_POSITIONING}”</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Focal Carrier with live studio image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-sky-100 shadow-xl bg-white p-2">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-900">
                <img
                  src="/src/assets/images/hero_media_network_1793085961798.jpg"
                  alt="Ramay Entertainment Media Broadcasting and Pan-India Distribution Control Room"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Overlaid Studio Tag */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/60 shadow-xs flex items-center gap-1.5 text-[11px] font-semibold text-sky-900">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span>ON AIR · Broadcast & PR Hub</span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs font-semibold tracking-wide text-sky-200">
                    RAMAY BROADCAST & DISTRIBUTION ENGINE
                  </p>
                  <p className="text-sm font-medium text-white/95 truncate">
                    Connecting Central India creators & national brands to Pan-India audiences
                  </p>
                </div>
              </div>

              {/* Floating mini stat callouts */}
              <div className="p-3 bg-gradient-to-r from-sky-50 to-white rounded-xl mt-2 border border-sky-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <img
                    src="/assets/aistudio/images__4__c39db79e.jfif"
                    alt="Ramay Entertainment"
                    className="w-9 h-9 rounded-lg object-cover border border-sky-200 shadow-2xs"
                  />
                  <div>
                    <p className="font-bold text-slate-900">Ramay Central India HQ</p>
                    <p className="text-[11px] text-slate-500">Madhya Pradesh · Pan-India Network</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sky-600 font-bold tabular-nums">100% Integrated</span>
                  <p className="text-[11px] text-slate-500">Digital · Print · Cinema · OTT</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Core Metrics Strip */}
        <div className="mt-14 pt-8 border-t border-sky-100 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {CORE_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/80 p-4 rounded-xl border border-sky-100/80 shadow-xs hover:border-sky-300 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-sky-600 font-mono tabular-nums tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-slate-900 mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

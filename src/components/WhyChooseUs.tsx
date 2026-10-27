import React from 'react';
import { WHY_CHOOSE_US_POINTS, BRAND_POSITIONING } from '../data/content';
import { CheckCircle2, TrendingUp, ShieldCheck, Target, Zap, Layers } from 'lucide-react';

const PILLAR_ICONS = [TrendingUp, ShieldCheck, Target, Zap, Layers];

interface WhyChooseUsProps {
  onOpenContact: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenContact }) => {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-semibold text-sky-800 mb-3">
            <span>Strategic Media Partnership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading text-balance">
            Why Brands Choose Ramay Entertainment
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            At <strong className="text-slate-900">Ramay Entertainment</strong>, we understand that today’s brands need more than promotion. They need <span className="text-sky-700 font-semibold">reach, relevance, consistency, and credibility</span> across multiple platforms. Our integrated media network is built to deliver all four.
          </p>
        </div>

        {/* 4 Core Tenets Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { word: 'Reach', desc: 'Pan-India footprint across 3,000+ screens and 500+ cities' },
            { word: 'Relevance', desc: 'Hyperlocal targeting and tailored cultural messaging' },
            { word: 'Consistency', desc: 'Cohesive narrative across cinema, OTT, web and print' },
            { word: 'Credibility', desc: 'Authoritative placement in 350+ news portals and magazines' },
          ].map((item, i) => (
            <div key={i} className="p-5 rounded-2xl bg-sky-50/60 border border-sky-100 text-center">
              <span className="text-xs font-mono font-bold text-sky-600 uppercase">Tenet 0{i+1}</span>
              <h3 className="text-xl font-extrabold text-slate-900 font-heading mt-1">{item.word}</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* 5 Points Detailed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US_POINTS.map((pt, idx) => {
            const Icon = PILLAR_ICONS[idx % PILLAR_ICONS.length];
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all bg-white group"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  {pt.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            );
          })}

          {/* Positioning Feature Card */}
          <div className="p-6 rounded-2xl border border-sky-300 bg-gradient-to-br from-sky-500 to-sky-600 text-white flex flex-col justify-between shadow-md">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-sky-100">
                Our Strategic Positioning
              </span>
              <h4 className="text-xl sm:text-2xl font-black font-heading mt-2 leading-tight">
                {BRAND_POSITIONING}
              </h4>
              <p className="text-xs sm:text-sm text-sky-100 mt-3 leading-relaxed">
                That is the value Ramay Entertainment brings to every brand we work with. We act as a strategic media partner for businesses that want to scale their presence through a structured, professional, and results-oriented approach.
              </p>
            </div>
            <div className="pt-4">
              <button
                onClick={onOpenContact}
                className="w-full py-2.5 text-xs font-bold text-sky-900 bg-white hover:bg-sky-50 rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                Start Collaboration
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

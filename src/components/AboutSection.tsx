import React from 'react';
import { ENTERTAINMENT_SERVICES } from '../data/content';
import { Tv, Clapperboard, Mic2, Disc3, Megaphone, Share2, Award, Globe2 } from 'lucide-react';

const ICONS = [Clapperboard, Tv, Mic2, Disc3, Megaphone, Share2];

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-sky-600 mb-2">
            Central India’s Entertainment Network
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading text-balance">
            Crafting, Promoting & Distributing Stories Across India
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Ramay Entertainment is central India's fastest growing entertainment network offering multiplatform services including making of <strong className="text-slate-800">Web series, TV serials, Talkshows, and Music albums</strong>. Along with this, Ramay Entertainment specializes in <strong className="text-slate-800">Film promotion and PR</strong>, providing a swift platform between the product and the audience.
          </p>
        </div>

        {/* Narrative Split Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-br from-sky-50/60 to-white p-6 sm:p-8 rounded-2xl border border-sky-100 mb-14">
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Your Launchpad for Music, Movies & High-Impact Serials
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              We at <span className="font-semibold text-sky-700">Ramay Entertainment</span> help creators and brands by providing various suitable digital platforms for making as well as releasing of your music, movies, and serials — ensuring your content reaches and is appreciated by a wider audience across India.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Whether you are an independent creator launching a music album, a production house preparing for a theatrical movie premiere, or a brand requiring film PR tie-ups, our end-to-end infrastructure accelerates execution without the friction of fragmented agencies.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-700">
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-sky-200 shadow-2xs">
                <Globe2 className="w-4 h-4 text-sky-600" />
                <span>Pan-India Distribution Reach</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-sky-200 shadow-2xs">
                <Award className="w-4 h-4 text-sky-600" />
                <span>Central India Creative Backbone</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-sky-200 shadow-xs space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-sky-600">
              The Ramay Advantage
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-2.5">
                <span className="font-bold text-sky-600 tabular-nums">01.</span>
                <span><strong>Multi-Screen Footprint:</strong> Simultaneous theatrical, OTT, broadcast television, and digital release pipelines.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="font-bold text-sky-600 tabular-nums">02.</span>
                <span><strong>Swift PR Bridge:</strong> Direct access to 350+ news portals and 40+ business media for instantaneous press buzz.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="font-bold text-sky-600 tabular-nums">03.</span>
                <span><strong>Hyperlocal Connection:</strong> Rooted in Central India with extensive 500+ local city update hubs for authentic regional engagement.</span>
              </div>
            </div>
            <div className="pt-2">
              <button
                onClick={onOpenContact}
                className="w-full py-2.5 text-xs font-semibold text-center text-sky-700 bg-sky-50 hover:bg-sky-100 border border-sky-200 rounded-lg transition-colors cursor-pointer"
              >
                Discuss Film / Music Release Platform
              </button>
            </div>
          </div>
        </div>

        {/* 6 Entertainment & Production Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ENTERTAINMENT_SERVICES.map((serv, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded">
                    {serv.badge}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                  {serv.title}
                </h4>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {serv.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

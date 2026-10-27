import React, { useState } from 'react';
import { Calculator, CheckSquare, Square, Download, ArrowRight, Sparkles, PieChart, ShieldCheck } from 'lucide-react';

interface ChannelConfig {
  id: string;
  name: string;
  reach: number; // in Millions of impressions
  category: string;
  includedByDefault: boolean;
}

const CHANNELS: ChannelConfig[] = [
  { id: 'cinema', name: '3,000+ Cinema Screens (PVR, INOX, Cinepolis)', reach: 18.5, category: 'Mass Theatrical', includedByDefault: true },
  { id: 'jiohotstar', name: 'JioHotstar Brand Commercials (PIN-Targeted)', reach: 12.0, category: 'Digital Video', includedByDefault: true },
  { id: 'media-web', name: '350+ Digital News & Media Websites', reach: 8.5, category: 'Digital PR', includedByDefault: true },
  { id: 'ott-stream', name: '16+ OTT Streaming Platforms', reach: 6.2, category: 'Connected TV / OTT', includedByDefault: false },
  { id: 'city-hubs', name: '500+ Local City Update Accounts (Hyperlocal)', reach: 4.8, category: 'Regional Social', includedByDefault: true },
  { id: 'magazines', name: '100+ Print & Digital Magazines', reach: 1.5, category: 'Authority Print', includedByDefault: false },
  { id: 'linkedin-b2b', name: '40+ Business Media LinkedIn Accounts', reach: 0.9, category: 'B2B CXO Network', includedByDefault: false },
  { id: 'video-studio', name: 'Complete Video Production (Shoots/Films)', reach: 2.0, category: 'Creative Studio', includedByDefault: true },
];

interface CampaignPlannerProps {
  onGenerateProposal: (selectedChannels: string[], totalReach: number) => void;
}

export const CampaignPlanner: React.FC<CampaignPlannerProps> = ({ onGenerateProposal }) => {
  const [selectedIds, setSelectedIds] = useState<string[]>(
    CHANNELS.filter(c => c.includedByDefault).map(c => c.id)
  );

  const toggleChannel = (id: string) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const selectAll = () => {
    setSelectedIds(CHANNELS.map(c => c.id));
  };

  const clearAll = () => {
    setSelectedIds([]);
  };

  const selectedChannels = CHANNELS.filter(c => selectedIds.includes(c.id));
  const totalReachMillions = selectedChannels.reduce((acc, curr) => acc + curr.reach, 0);

  return (
    <section id="planner" className="py-16 lg:py-24 bg-gradient-to-b from-white via-sky-50/50 to-white border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5 text-sky-600" />
            <span>Interactive Media Reach Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading text-balance">
            Design Your Client Proposal & Reach Matrix
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Select the channels matching your brand strategy to estimate campaign footprint across India and generate a custom proposal draft.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Channel Selector */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-sky-100 p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Media Inventory Selection ({selectedIds.length} of {CHANNELS.length} selected)
              </span>
              <div className="flex items-center gap-3 text-xs">
                <button
                  onClick={selectAll}
                  className="text-sky-600 hover:text-sky-800 font-semibold cursor-pointer"
                >
                  Select All
                </button>
                <span className="text-slate-300">|</span>
                <button
                  onClick={clearAll}
                  className="text-slate-500 hover:text-slate-700 font-medium cursor-pointer"
                >
                  Clear
                </button>
              </div>
            </div>

            <div className="space-y-2.5">
              {CHANNELS.map((channel) => {
                const isSelected = selectedIds.includes(channel.id);
                return (
                  <div
                    key={channel.id}
                    onClick={() => toggleChannel(channel.id)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'border-sky-500 bg-sky-50/70 shadow-2xs'
                        : 'border-slate-200 bg-white hover:border-sky-200 hover:bg-slate-50/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isSelected ? (
                        <CheckSquare className="w-5 h-5 text-sky-600 shrink-0" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-400 shrink-0" />
                      )}
                      <div>
                        <div className={`text-sm font-bold ${isSelected ? 'text-sky-950' : 'text-slate-900'}`}>
                          {channel.name}
                        </div>
                        <div className="text-xs text-slate-500">
                          Category: {channel.category}
                        </div>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-xs font-mono font-bold text-sky-700 tabular-nums">
                        ~{channel.reach.toFixed(1)}M
                      </span>
                      <p className="text-[10px] text-slate-500">monthly reach</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Proposal Summary & Impact Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-sky-200 p-6 sm:p-8 shadow-md sticky top-28 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-sky-100">
              <h3 className="text-lg font-bold text-slate-900 font-heading">
                Campaign Proposal Estimate
              </h3>
              <span className="text-[11px] font-semibold text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200">
                Ramay Network
              </span>
            </div>

            {/* Aggregated Estimated Metric */}
            <div className="bg-gradient-to-br from-sky-600 to-sky-700 rounded-xl p-6 text-white text-center shadow-xs">
              <span className="text-xs uppercase tracking-widest text-sky-200 font-semibold">
                Projected National Footprint
              </span>
              <div className="text-4xl sm:text-5xl font-black font-mono tracking-tight tabular-nums mt-1">
                {totalReachMillions.toFixed(1)}M+
              </div>
              <p className="text-xs text-sky-100 mt-1">
                Targeted views, cinema footfalls & digital impressions
              </p>
            </div>

            {/* Selected Breakdown */}
            <div className="space-y-2 text-xs">
              <span className="font-bold text-slate-700">Channels in Proposal ({selectedChannels.length}):</span>
              {selectedChannels.length === 0 ? (
                <p className="text-xs text-slate-400 italic">Select at least one channel from the left</p>
              ) : (
                <div className="max-h-36 overflow-y-auto space-y-1 pr-1">
                  {selectedChannels.map(c => (
                    <div key={c.id} className="flex items-center justify-between py-1 border-b border-slate-100 text-slate-600">
                      <span className="truncate max-w-[200px]">{c.name}</span>
                      <span className="font-mono font-semibold text-slate-800">~{c.reach}M</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Value Proposition bullets */}
            <div className="p-3.5 rounded-xl bg-sky-50/60 border border-sky-100 text-xs text-slate-700 space-y-2">
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <span>Single consolidated SLA & billing invoice across all activated channels.</span>
              </div>
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <span>End-to-end verified release reports & geo-tagged audience telemetry.</span>
              </div>
            </div>

            <button
              disabled={selectedChannels.length === 0}
              onClick={() => onGenerateProposal(selectedChannels.map(c => c.name), totalReachMillions)}
              className="w-full py-3.5 text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Submit for Official Proposal & Rate Card</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

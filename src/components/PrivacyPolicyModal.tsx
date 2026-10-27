import React, { useState } from 'react';
import { X, ShieldCheck, FileText, Lock, Building, CheckCircle } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'privacy' | 'terms';
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({
  isOpen,
  onClose,
  defaultTab = 'privacy',
}) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>(defaultTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-sky-100 animate-in fade-in zoom-in-95 duration-150">
        {/* Header Bar */}
        <div className="p-5 border-b border-sky-100 flex items-center justify-between bg-sky-50/50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 font-heading">
                Legal & Governance
              </h3>
              <p className="text-xs text-slate-500">
                Ramay Entertainment · Media Distribution Network
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex border-b border-slate-200 px-6 pt-3 gap-6 text-sm font-semibold">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`pb-3 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'privacy'
                ? 'border-sky-600 text-sky-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Lock className="w-4 h-4" />
            <span>Privacy Policy</span>
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`pb-3 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'terms'
                ? 'border-sky-600 text-sky-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Terms of Service & Distribution</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-700 leading-relaxed">
          {activeTab === 'privacy' ? (
            <div className="space-y-5">
              <div>
                <p className="text-xs text-slate-500">
                  Last Updated: October 2026 · Compliant with DPDP Act 2023 & Information Technology Act 2000 (India)
                </p>
                <h4 className="text-base font-bold text-slate-900 mt-2">
                  1. Information We Collect
                </h4>
                <p className="mt-1">
                  At <strong>Ramay Entertainment</strong>, we collect business and professional information submitted through our media inquiry forms, proposals, and campaign consultations, including name, organization name, corporate email address, contact numbers, and campaign specifications.
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-slate-900">
                  2. Use of Information
                </h4>
                <p className="mt-1">
                  We use collected information solely to:
                </p>
                <ul className="list-disc pl-5 mt-1 space-y-1 text-slate-600">
                  <li>Formulate customized Pan-India media distribution plans across cinema, OTT, and digital networks.</li>
                  <li>Coordinate video production shoots, podcast studios, and advertising deliverables.</li>
                  <li>Execute film promotion and PR activities with 350+ media websites and publication editors.</li>
                  <li>Provide campaign verification, telemetry proof-of-play, and media accounting.</li>
                </ul>
              </div>

              <div>
                <h4 className="text-base font-bold text-slate-900">
                  3. Media Distribution & Third-Party Disclosure
                </h4>
                <p className="mt-1">
                  To execute advertising and PR campaigns, authorized creative assets (trailers, ad films, press statements) are distributed to accredited partners including multiplex operators (such as PVR INOX, Cinepolis), OTT platforms, JioHotstar ad servers, and authorized media publishers under strict confidentiality agreements. We never sell personal or corporate data to external third-party data brokers.
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-slate-900">
                  4. Data Security & Storage
                </h4>
                <p className="mt-1">
                  All campaign materials and client communications are securely processed and retained in compliance with applicable Indian cybersecurity regulations.
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-slate-900">
                  5. Grievance Officer & Central India Contact
                </h4>
                <p className="mt-1">
                  For privacy inquiries or rights requests, contact:
                </p>
                <div className="mt-2 p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-800">
                  <p><strong>Grievance Officer:</strong> Legal & Regulatory Affairs, Ramay Entertainment</p>
                  <p><strong>Office:</strong> Vijay Nagar Commercial Hub, AB Road, Indore, Madhya Pradesh 452010</p>
                  <p><strong>Phone:</strong> +91 90396 55399</p>
                  <p><strong>Email:</strong> ramayentertainment@gmail.com</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              <div>
                <p className="text-xs text-slate-500">
                  Standard Distribution Agreement & Broadcaster Protocol
                </p>
                <h4 className="text-base font-bold text-slate-900 mt-2">
                  1. Scope of Services
                </h4>
                <p className="mt-1">
                  Ramay Entertainment provides end-to-end media network aggregation, including placement across 350+ media websites, 100+ magazines, 3,000+ cinema screens, 16+ OTT platforms, JioHotstar commercials, and video production services.
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-slate-900">
                  2. Content Compliance & Approvals
                </h4>
                <p className="mt-1">
                  Clients certifying material for cinema or broadcast distribution represent that all commercial videos, songs, trailers, or PR texts comply with the Advertising Standards Council of India (ASCI) code, Central Board of Film Certification (CBFC) requirements where applicable, and intellectual property statutes.
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-slate-900">
                  3. Theatrical & Broadcast Schedules
                </h4>
                <p className="mt-1">
                  Cinema screen time allocations (pre-show/interval) in multiplexes (PVR INOX, Cinepolis) and OTT slots are subject to network programming grids and confirmed booking orders. Proof of play and compliance certificates are issued post-campaign.
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-slate-900">
                  4. Jurisdiction
                </h4>
                <p className="mt-1">
                  All commercial agreements are governed by the laws of India, and disputes shall be subject to the exclusive jurisdiction of the competent courts in Indore / Central India.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer Bar */}
        <div className="p-4 border-t border-slate-100 flex items-center justify-between bg-slate-50">
          <span className="text-xs text-slate-500">
            Ramay Entertainment © {new Date().getFullYear()}
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg transition-colors cursor-pointer"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};

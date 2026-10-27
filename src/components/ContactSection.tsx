import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Clock, Building2 } from 'lucide-react';
import { InquiryFormData } from '../types';

interface ContactSectionProps {
  initialService?: string;
  onClearInitialService?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService,
  onClearInitialService,
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    serviceCategory: initialService || 'Integrated Pan-India Media Network',
    budgetRange: '₹5 Lakh - ₹15 Lakh',
    targetRegion: 'Pan-India',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [inquiryId, setInquiryId] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceCategory: initialService }));
    }
  }, [initialService]);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.companyName.trim()) errs.companyName = 'Please enter your brand or company name';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'Please provide a valid business email address';
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      errs.phone = 'Please provide a valid contact number';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const generatedId = `RAMAY-${Math.floor(100000 + Math.random() * 900000)}`;
      setInquiryId(generatedId);
      setSubmitted(true);
      if (onClearInitialService) onClearInitialService();
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      serviceCategory: 'Integrated Pan-India Media Network',
      budgetRange: '₹5 Lakh - ₹15 Lakh',
      targetRegion: 'Pan-India',
      message: '',
    });
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Ramay Entertainment team, I would like to inquire about your media distribution and production services for my brand ${formData.companyName || ''}.`
    );
    window.open(`https://wa.me/919993540314?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-sky-50/50 border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-sky-200 text-xs font-semibold text-sky-800 mb-3 shadow-2xs">
            <span>Direct Client Partnership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading text-balance">
            Connect With Ramay Entertainment
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Ready to distribute your film, release your music album, or launch a high-impact Pan-India brand campaign across cinema, OTT, and 350+ media websites? Speak directly with our media planners.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Office Locations & Direct Contacts */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-sky-100 p-6 sm:p-7 shadow-xs space-y-6">
              <h3 className="text-xl font-bold text-slate-900 font-heading">
                Central India Headquarters
              </h3>

              {/* Central India Ujjain HQ */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-sky-50/70 border border-sky-100">
                <div className="w-9 h-9 rounded-xl bg-sky-600 text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-sm">
                  <span className="font-bold text-slate-900 block">Central India HQ</span>
                  <p className="text-slate-700 text-xs mt-1 leading-relaxed font-medium">
                    113, Dewas road, Ujjain, Madhya Pradesh 456010
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-3 text-sm">
                <div className="flex items-center gap-3 text-slate-700">
                  <Phone className="w-4 h-4 text-sky-600 shrink-0" />
                  <a href="tel:+919039655399" className="hover:text-sky-600 font-semibold text-slate-900">
                    +91 90396 55399
                  </a>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <Mail className="w-4 h-4 text-sky-600 shrink-0" />
                  <a href="mailto:ramayentertainment@gmail.com" className="hover:text-sky-600 font-semibold text-slate-900">
                    ramayentertainment@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-slate-700 text-xs">
                  <Clock className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Monday – Saturday: 10:00 AM – 7:30 PM IST</span>
                </div>
              </div>

              {/* Instant WhatsApp Action */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={openWhatsApp}
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp (+91 99935 40314)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-sky-100 p-6 sm:p-8 shadow-md">
            {submitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 font-heading">
                  Inquiry Received Successfully!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span>. Your proposal reference number is{' '}
                  <span className="font-mono font-bold text-sky-700">{inquiryId}</span>.
                </p>
                <div className="p-4 rounded-xl bg-sky-50 border border-sky-100 max-w-md mx-auto text-left text-xs text-slate-700 space-y-1">
                  <p><strong>Brand:</strong> {formData.companyName}</p>
                  <p><strong>Service Focus:</strong> {formData.serviceCategory}</p>
                  <p><strong>Target Region:</strong> {formData.targetRegion}</p>
                  <p><strong>Next Step:</strong> A Senior Media Distribution Director will contact you within 4 business hours with custom inventory availabilities.</p>
                </div>
                <div className="pt-4 flex items-center justify-center gap-4">
                  <button
                    onClick={resetForm}
                    className="px-5 py-2.5 text-xs font-semibold text-sky-700 bg-white border border-sky-300 rounded-lg hover:bg-sky-50 transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                  <button
                    onClick={openWhatsApp}
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors cursor-pointer"
                  >
                    Fast-Track on WhatsApp
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-100 pb-3 mb-4">
                  <h3 className="text-lg font-bold text-slate-900 font-heading">
                    Request Media Plan & Commercial Proposal
                  </h3>
                  <p className="text-xs text-slate-500">
                    Fill out the parameters below to receive customized rate cards and schedule availabilities.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all"
                    />
                    {errors.fullName && <p className="text-[11px] text-rose-500 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Brand / Company / Production House *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Corp / Studio"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all"
                    />
                    {errors.companyName && <p className="text-[11px] text-rose-500 mt-1">{errors.companyName}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Business Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all"
                    />
                    {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number (WhatsApp Preferred) *
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all"
                    />
                    {errors.phone && <p className="text-[11px] text-rose-500 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Primary Service Category
                    </label>
                    <select
                      value={formData.serviceCategory}
                      onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all bg-white"
                    >
                      <option value="Integrated Pan-India Media Network">Integrated Pan-India Media Network (All Channels)</option>
                      <option value="Cinema Advertising (3000+ Screens)">Cinema Advertising (3,000+ Screens - PVR/INOX/Cinepolis)</option>
                      <option value="Digital PR & 350+ Media Websites">Digital PR & 350+ Media Websites</option>
                      <option value="JioHotstar Commercials (PIN-Targeted)">JioHotstar Brand Commercials (PIN-Targeted)</option>
                      <option value="16+ OTT Streaming Distribution">16+ OTT Streaming Platforms Distribution</option>
                      <option value="500+ Local City Update Pages">500+ Local City Update Accounts (Hyperlocal)</option>
                      <option value="Video Production (Podcasts, Shoots, Ad Films)">Video Production (Podcasts, Shoots, Ad Films)</option>
                      <option value="Film Promotion & Entertainment PR">Film Promotion & Entertainment PR</option>
                      <option value="Web Series & Music Album Release">Web Series & Music Album Release</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Target Geography
                    </label>
                    <select
                      value={formData.targetRegion}
                      onChange={(e) => setFormData({ ...formData, targetRegion: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all bg-white"
                    >
                      <option value="Pan-India">Pan-India (Tier 1, 2 & 3 National)</option>
                      <option value="Central India">Central India Focus (Ujjain, MP & Regional Markets)</option>
                      <option value="Metro Clusters">Top 8 Metros (Delhi-NCR, Bengaluru, Mumbai, etc.)</option>
                      <option value="PIN-Code Targeted">Micro PIN-Code Geo Clusters (JioHotstar)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Campaign Scope or Message Details
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your brand goals, expected timeline, launch dates, or specific content to distribute..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 text-sm font-bold text-white bg-sky-600 hover:bg-sky-500 active:bg-sky-700 rounded-xl shadow-md shadow-sky-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Media Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { Upload, RefreshCw } from 'lucide-react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'footer';
  showUploadTrigger?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'light',
  showUploadTrigger = false,
}) => {
  const [customLogoUrl, setCustomLogoUrl] = useState<string | null>(null);
  const [showUploadModal, setShowUploadModal] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('ramay_custom_logo');
    if (saved) {
      setCustomLogoUrl(saved);
    }
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          localStorage.setItem('ramay_custom_logo', result);
          setCustomLogoUrl(result);
          setShowUploadModal(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReset = () => {
    localStorage.removeItem('ramay_custom_logo');
    setCustomLogoUrl(null);
    setShowUploadModal(false);
  };

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {customLogoUrl ? (
        <div className="relative group flex items-center">
          <img
            src={customLogoUrl}
            alt="Ramay Entertainment Logo"
            className="h-10 max-w-[200px] object-contain rounded"
          />
          {showUploadTrigger && (
            <button
              onClick={() => setShowUploadModal(true)}
              title="Change uploaded logo"
              className="ml-2 text-xs text-sky-600 hover:text-sky-800 underline flex items-center gap-1"
            >
              <Upload className="w-3 h-3" />
              <span>Change</span>
            </button>
          )}
        </div>
      ) : (
        <div className="flex items-center gap-2.5 group">
          {/* Custom Sky-Blue Vector Brand Emblem */}
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 via-sky-500 to-sky-600 p-0.5 shadow-sm shadow-sky-500/20 flex items-center justify-center shrink-0">
            <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center relative overflow-hidden">
              <svg viewBox="0 0 36 36" fill="none" className="w-7 h-7">
                <defs>
                  <linearGradient id="ramaySkyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0ea5e9" />
                    <stop offset="100%" stopColor="#0284c7" />
                  </linearGradient>
                </defs>
                {/* Stylized Film Reel & 'R' Monogram */}
                <path
                  d="M8 7H18C22.4183 7 26 10.5817 26 15C26 18.2583 23.9535 21.0375 21.0536 22.25L26 29H19.5L15 22.5H13V29H8V7Z"
                  fill="url(#ramaySkyGrad)"
                />
                <circle cx="15.5" cy="14.5" r="3" fill="#ffffff" />
                <path
                  d="M26 9L30 5M28 15H33M26 21L30 25"
                  stroke="#38bdf8"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 leading-none">
              <span className={`text-xl font-extrabold tracking-tight font-heading ${
                variant === 'footer' ? 'text-white' : 'text-slate-900'
              }`}>
                RAMAY
              </span>
              <span className="text-xl font-extrabold tracking-tight font-heading text-sky-500">
                MEDIA
              </span>
            </div>
            <span className={`text-[10px] uppercase font-semibold tracking-[0.2em] mt-0.5 ${
              variant === 'footer' ? 'text-sky-300' : 'text-slate-500'
            }`}>
              Entertainment
            </span>
          </div>

          {showUploadTrigger && (
            <button
              onClick={() => setShowUploadModal(true)}
              className="text-[11px] text-sky-600 hover:text-sky-700 bg-sky-50 hover:bg-sky-100 border border-sky-200 px-2 py-0.5 rounded transition-colors ml-1 hidden sm:inline-flex items-center gap-1"
              title="Upload your company logo file"
            >
              <Upload className="w-3 h-3" />
              <span>Upload Logo</span>
            </button>
          )}
        </div>
      )}

      {/* Upload Logo Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-sky-100">
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              Upload Ramay Entertainment Logo
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              Select your official company logo file (PNG, JPG, SVG). It will immediately display in the header, footer, proposal generator, and pitch deck.
            </p>

            <div className="border-2 border-dashed border-sky-200 hover:border-sky-400 rounded-xl p-6 text-center bg-sky-50/50 transition-colors cursor-pointer relative mb-4">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
              />
              <Upload className="w-8 h-8 text-sky-500 mx-auto mb-2" />
              <p className="text-sm font-medium text-slate-800">
                Click to browse or drag & drop logo file
              </p>
              <p className="text-xs text-slate-500 mt-1">PNG, JPG, WebP, or SVG</p>
            </div>

            <div className="flex items-center justify-between pt-2">
              {customLogoUrl ? (
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs text-rose-600 hover:text-rose-700 flex items-center gap-1"
                >
                  <RefreshCw className="w-3 h-3" />
                  Reset to default logo
                </button>
              ) : <div />}

              <button
                type="button"
                onClick={() => setShowUploadModal(false)}
                className="px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'footer';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'light',
}) => {
  const OFFICIAL_LOGO_PATH = '/assets/aistudio/images__4__c39db79e.jfif';

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <div className="flex items-center gap-3">
        {/* Official Uploaded Logo Emblem */}
        <div className="relative overflow-hidden rounded-xl border border-sky-200/80 shadow-sm bg-sky-500/10 flex items-center justify-center p-0.5 shrink-0">
          <img
            src={OFFICIAL_LOGO_PATH}
            alt="Ramay Entertainment Official Logo"
            className="h-11 w-11 object-cover rounded-lg transition-transform duration-200 hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Wordmark Lockup */}
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 leading-none">
            <span
              className={`text-xl font-extrabold tracking-tight font-heading ${
                variant === 'footer' ? 'text-white' : 'text-slate-900'
              }`}
            >
              RAMAY
            </span>
            <span className="text-xl font-extrabold tracking-tight font-heading text-[#0080ff]">
              ENTERTAINMENT
            </span>
          </div>
          <span
            className={`text-[10px] tracking-[0.14em] font-semibold uppercase mt-0.5 ${
              variant === 'footer' ? 'text-sky-300' : 'text-slate-500'
            }`}
          >
            PR & Film Production · Central India
          </span>
        </div>
      </div>
    </div>
  );
};

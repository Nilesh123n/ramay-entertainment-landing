/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesNetwork } from './components/ServicesNetwork';
import { ProductionShowcase } from './components/ProductionShowcase';
import { CampaignPlanner } from './components/CampaignPlanner';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ContactSection } from './components/ContactSection';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { PitchDeckModal } from './components/PitchDeckModal';
import { Footer } from './components/Footer';

export default function App() {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [privacyModalTab, setPrivacyModalTab] = useState<'privacy' | 'terms'>('privacy');
  const [pitchDeckModalOpen, setPitchDeckModalOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState<string>('');

  const handleOpenContactWithService = (serviceName?: string) => {
    if (serviceName) {
      setPrefilledService(serviceName);
    }
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForPlan = (serviceId: string) => {
    const el = document.getElementById('planner');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGenerateProposal = (selectedChannels: string[], totalReach: number) => {
    setPrefilledService(`Media Proposal: ${selectedChannels.length} Channels (~${totalReach.toFixed(1)}M Projected Reach)`);
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans selection:bg-sky-500 selection:text-white">
      {/* Top Bar Header */}
      <Header
        onOpenContact={() => handleOpenContactWithService()}
        onOpenPitchDeck={() => setPitchDeckModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenContact={() => handleOpenContactWithService()}
          onExploreServices={() => {
            const el = document.getElementById('services');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 2. Services Network - 9 Media Distribution Channels */}
        <ServicesNetwork
          onSelectServiceForPlan={handleSelectServiceForPlan}
          onOpenContact={handleOpenContactWithService}
        />

        {/* 3. Full-Stack Video Production Showcase (Podcasts, Shoots, Ad Films) */}
        <ProductionShowcase
          onOpenContact={handleOpenContactWithService}
        />

        {/* 4. Interactive Campaign Reach Planner & Proposal Estimator */}
        <CampaignPlanner
          onGenerateProposal={handleGenerateProposal}
        />

        {/* 5. About Section - Central India Roots, Web Series, Serials, PR */}
        <AboutSection
          onOpenContact={() => handleOpenContactWithService()}
        />

        {/* 6. Why Brands Choose Us & Positioning */}
        <WhyChooseUs
          onOpenContact={() => handleOpenContactWithService()}
        />

        {/* 7. Contact Us Section */}
        <ContactSection
          initialService={prefilledService}
          onClearInitialService={() => setPrefilledService('')}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => {
          setPrivacyModalTab('privacy');
          setPrivacyModalOpen(true);
        }}
        onOpenTerms={() => {
          setPrivacyModalTab('terms');
          setPrivacyModalOpen(true);
        }}
        onOpenPitchDeck={() => setPitchDeckModalOpen(true)}
        onOpenContact={() => handleOpenContactWithService()}
      />

      {/* Modals */}
      <PrivacyPolicyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
        defaultTab={privacyModalTab}
      />

      <PitchDeckModal
        isOpen={pitchDeckModalOpen}
        onClose={() => setPitchDeckModalOpen(false)}
        onOpenContact={() => handleOpenContactWithService()}
      />
    </div>
  );
}

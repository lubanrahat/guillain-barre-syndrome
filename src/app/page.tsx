import React from "react";
import { Navbar } from "@/components/navbar";
import { PageLoader } from "@/components/page-loader";
import { ScrollProgress } from "@/components/scroll-progress";
import { FloatingElements } from "@/components/floating-elements";
import { BackToTop } from "@/components/back-to-top";
import { HeroSection } from "@/components/sections/hero-section";
import { WhatIsGBS } from "@/components/sections/what-is-gbs";
import { SymptomsSection } from "@/components/sections/symptoms-section";
import { EmergencySection } from "@/components/sections/emergency-section";
import { TreatmentSection } from "@/components/sections/treatment-section";
import { PhysiotherapySection } from "@/components/sections/physiotherapy-section";
import { LifestyleSection } from "@/components/sections/lifestyle-section";
import { DietSection } from "@/components/sections/diet-section";
import { FamilyAdviceSection } from "@/components/sections/family-advice-section";
import { RecoveryJourneySection } from "@/components/sections/recovery-journey-section";
import { ResearchSection } from "@/components/sections/research-section";
import { FAQSection } from "@/components/sections/faq-section";
import { FooterSection } from "@/components/sections/footer-section";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background">
      {/* Premium startup full-screen loader */}
      <PageLoader />

      {/* Fluid scroll progress bar */}
      <ScrollProgress />

      {/* Sticky header navbar */}
      <Navbar />

      {/* Decorative medical background icons */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <FloatingElements />
      </div>

      {/* Structured Sections layout */}
      <main className="flex-1 relative z-10">
        <HeroSection />
        <WhatIsGBS />
        <SymptomsSection />
        <EmergencySection />
        <TreatmentSection />
        <PhysiotherapySection />
        <LifestyleSection />
        <DietSection />
        <FamilyAdviceSection />
        <RecoveryJourneySection />
        <ResearchSection />
        <FAQSection />
      </main>

      {/* Footer layout */}
      <FooterSection />

      {/* Scroll to Top helper widget */}
      <BackToTop />
    </div>
  );
}

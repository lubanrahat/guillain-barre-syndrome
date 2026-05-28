"use client";

import React from "react";
import { ArrowDown, Brain, Activity, ShieldAlert, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { FadeIn, FloatingElement } from "../motion-wrapper";

import { ParticleBackground } from "../particle-background";

export function HeroSection() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-linear-to-b from-primary/5 via-accent/5 to-background"
    >
      {/* Premium dynamic particle and glow background */}
      <ParticleBackground />
      
      {/* Decorative dot matrix grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Floating Medical Assets - Top Left (Nerve Cell / Brain Symbol) */}
      <FloatingElement
        yRange={[0, -15]}
        duration={5}
        className="absolute top-24 left-[8%] hidden lg:block z-10 pointer-events-none"
      >
        <div className="relative p-4 rounded-2xl glass-card flex items-center justify-center border border-primary/20 shadow-lg text-primary">
          <Brain className="h-10 w-10" />
          <div className="absolute -top-1.5 -right-1.5 h-3.5 w-3.5 rounded-full bg-accent animate-pulse" />
        </div>
      </FloatingElement>

      {/* Floating Medical Assets - Bottom Left (Heartbeat/Activity Glow) */}
      <FloatingElement
        yRange={[0, 12]}
        duration={4.5}
        className="absolute bottom-28 left-[12%] hidden lg:block z-10 pointer-events-none"
      >
        <div className="p-4 rounded-2xl glass-card flex items-center justify-center border border-accent/20 shadow-lg text-accent">
          <Activity className="h-9 w-9" />
        </div>
      </FloatingElement>

      {/* Floating Medical Assets - Top Right (DNA Helix Vector SVG) */}
      <FloatingElement
        yRange={[0, -18]}
        duration={6}
        className="absolute top-28 right-[10%] hidden lg:block z-10 pointer-events-none"
      >
        <div className="p-4 rounded-2xl glass-card border border-primary/20 shadow-lg bg-white/10 dark:bg-slate-900/40 backdrop-blur-md">
          <svg className="w-16 h-16 text-primary/75" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M20,50 Q35,20 50,50 T80,50" />
            <path d="M20,50 Q35,80 50,50 T80,50" strokeDasharray="3,3" />
            <line x1="30" y1="40" x2="30" y2="60" />
            <line x1="40" y1="45" x2="40" y2="55" />
            <line x1="50" y1="50" x2="50" y2="50" />
            <line x1="60" y1="45" x2="60" y2="55" />
            <line x1="70" y1="40" x2="70" y2="60" />
          </svg>
        </div>
      </FloatingElement>

      {/* Floating Medical Assets - Bottom Right (Pill / Capsule) */}
      <FloatingElement
        yRange={[0, 14]}
        duration={5.5}
        className="absolute bottom-24 right-[15%] hidden lg:block z-10 pointer-events-none"
      >
        <div className="p-4 rounded-2xl glass-card border border-destructive/20 shadow-lg text-destructive">
          <ShieldAlert className="h-8 w-8" />
        </div>
      </FloatingElement>

      <div className="container mx-auto px-4 relative z-20 text-center max-w-4xl">
        <FadeIn direction="up" duration={0.6} className="space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs md:text-sm font-semibold tracking-wide backdrop-blur-md animate-pulse">
            <Sparkles className="h-4 w-4 text-accent" />
            গিলেন-বারে সিনড্রোম (GBS) সচেতনতা মাস
          </div>

          {/* GBS Awareness Title */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            হঠাৎ হাত-পা অবশ? <br className="sm:hidden" />
            এটি হতে পারে{" "}
            <span className="bg-linear-to-r from-primary to-sky-600 bg-clip-text text-transparent">
              গিলেন-বারে সিনড্রোম
            </span>
          </h1>

          {/* Short Description */}
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
            জিবিএস (GBS) কোনো ছোঁয়াচে রোগ বা সাধারণ পক্ষাঘাত নয়। এটি শরীরের রোগ প্রতিরোধ ব্যবস্থার একটি সাময়িক বিভ্রান্তি। সচেতনতা, দ্রুত সঠিক চিকিৎসা এবং নিয়মিত ফিজিওথেরাপির মাধ্যমে সম্পূর্ণ সুস্থ হওয়া সম্ভব।
          </p>

          {/* Inspirational Recovery Message */}
          <div className="max-w-lg mx-auto p-4 rounded-2xl glass-card border border-accent/20 bg-accent/5 text-sm md:text-base font-medium text-foreground flex items-center justify-center gap-3">
            <div className="h-2 w-2 rounded-full bg-accent animate-ping shrink-0" />
            <p className="text-left">
              <strong>বাস্তব জয়ী বার্তা:</strong> চার হাত-পা সম্পূর্ণ অবশ হয়ে যাওয়া রোগীও সঠিক ফিজিওথেরাপি ও অদম্য ইচ্ছাশক্তিতে ৩-৬ মাসে সুস্থ হয়েছেন।
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={() => handleScrollTo("what-is-gbs")}
              className="cursor-pointer w-full sm:w-auto h-12 px-8 rounded-xl font-bold bg-primary hover:bg-primary/95 text-white shadow-lg shadow-primary/20 hover:scale-103 transition-transform"
            >
              জিবিএস কী?
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => handleScrollTo("treatment")}
              className="cursor-pointer w-full sm:w-auto h-12 px-8 rounded-xl font-bold glass hover:bg-secondary/50 border-primary/20 text-foreground hover:scale-103 transition-transform"
            >
              চিকিৎসা সম্পর্কে জানুন
            </Button>
          </div>
        </FadeIn>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer opacity-70 hover:opacity-100 transition-opacity" onClick={() => handleScrollTo("what-is-gbs")}>
          {/* <span className="text-xs uppercase tracking-widest font-bold text-muted-foreground">স্ক্রল করুন</span> */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/10 bg-white/50 dark:bg-slate-800/50 shadow-xs animate-bounce">
            <ArrowDown className="h-4 w-4 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { Sparkles, Heart, Quote, Trophy, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import { SectionHeader } from "../section-header";
import { FadeIn, StaggerContainer, StaggerItem } from "../motion-wrapper";
import { Card, CardContent } from "../ui/card";
import { AnimatedCounter } from "../animated-counter";
import { toBengaliNumber } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const RECOVERY_TIMELINE = [
  {
    phase: "ধাপ ১",
    title: "চরম দুর্বলতা কাটিয়ে ওঠা",
    desc: "চিকিৎসা (IVIG/প্লাজমা) সমাপ্তির পর রোগ বৃদ্ধি পাওয়া থমকে যায়। শরীরে ধীরে ধীরে ক্লান্তিভাব কেটে নতুন শক্তির উন্মেষ ঘটে।",
    duration: "১–২ সপ্তাহ",
    actions: [
      "পর্যাপ্ত বিশ্রাম এবং চিকিৎসকের পরামর্শ অনুযায়ী মৃদু অঙ্গ সঞ্চালন করা।",
      "শ্বাসপ্রশ্বাস এবং হৃদস্পন্দনের অবস্থা নিয়মিত মনিটর করা।",
      "ইতিবাচক চিন্তা করা এবং নার্স ও পরিবারের মানুষদের সাথে কথা বলা।"
    ]
  },
  {
    phase: "ধাপ ২",
    title: "অনুভূতির ক্রমান্বয় প্রত্যাবর্তন",
    desc: "প্রথমে গলার ও মুখের অসাড়তা কাটে, এরপর বুক, হাত ও সবশেষে পায়ের অবশ ভাব বা সুই-ফোটা অনুভূতি হ্রাস পায়।",
    duration: "৩–৪ সপ্তাহ",
    actions: [
      "হালকা স্ট্রেচিং এবং জয়েন্ট মোবিলাইজেশন ব্যায়াম শুরু করা।",
      "শরীরের অবশ অংশগুলোতে হালকা ম্যাসাজ বা থেরাপিউটিক টাচ দেওয়া।",
      "খাবার গিলতে বা কথা বলতে সমস্যা হলে স্পিচ থেরাপির সাহায্য নেওয়া।"
    ]
  },
  {
    phase: "ধাপ ৩",
    title: "ফিজিওথেরাপির মাধ্যমে সক্রিয় হওয়া",
    desc: "থেরাপিস্টের অধীনে দৈনিক ২-৩ বার নির্দিষ্ট ব্যায়াম করার ফলে হাত ও পায়ের পেশীর শক্তি আবার ফেরত আসতে শুরু করে।",
    duration: "১–৩ মাস",
    actions: [
      "পেশী শক্তিশালী করার জন্য রেজিস্ট্যান্স এবং ব্যালেন্সিং ব্যায়াম করা।",
      "ওয়াকার বা সাপোর্টের সাহায্যে উঠে দাঁড়ানো এবং হাঁটার চেষ্টা করা।",
      "ধৈর্য ধরে প্রতিদিন অন্তত ২ বার ব্যায়ামের প্র্যাকটিস করা।"
    ]
  },
  {
    phase: "ধাপ ৪",
    title: "সম্পূর্ণ স্বাভাবিক জীবনে ফেরা",
    desc: "ওয়াকার বা সাহায্য ছাড়াই রোগী একা একা হাঁটতে ও দৈনন্দিন সব ব্যক্তিগত ও সামাজিক কাজে অংশ নিতে সম্পূর্ণ সচেষ্ট হন।",
    duration: "৩–৬ মাস+",
    actions: [
      "সম্পূর্ণ স্বাধীনভাবে হাঁটার ও নিজের কাজ করার অভ্যাস ফিরিয়ে আনা।",
      "পেশীর পূর্ণ ক্ষমতা এবং স্ট্যামিনা ধরে রাখতে হালকা অ্যারোবিক ব্যায়াম করা।",
      "নিয়মিত পুষ্টিকর খাদ্য গ্রহণ ও পর্যাপ্ত ঘুম নিশ্চিত করা।"
    ]
  },
];

const STATS = [
  { 
    prefix: "৬০-", 
    value: 80, 
    suffix: "%", 
    label: "সম্পূর্ণ আরোগ্য লাভ", 
    desc: "অধিকাংশ রোগী কোনো স্থায়ী সমস্যা ছাড়াই ১ বছরের মধ্যে সম্পূর্ণ স্বাভাবিক জীবনে ফিরতে সক্ষম হন।" 
  },
  { 
    prefix: "১৫-", 
    value: 20, 
    suffix: "%", 
    label: "সামান্য আংশিক দুর্বলতা", 
    desc: "কিছু রোগীর হাত বা পায়ে সামান্য ক্লান্তি ভাব থেকে যেতে পারে, যা নিয়মিত ব্যায়ামে সহনীয় হয়ে যায়।" 
  },
  { 
    prefix: "", 
    value: 95, 
    suffix: "%", 
    label: "বেঁচে থাকার হার", 
    desc: "আধুনিক আইসিইউ ও ভেন্টিলেটর এবং IVIG চিকিৎসার কল্যাণে মৃত্যুহার প্রায় শূন্যের কোঠায় নেমে এসেছে।" 
  },
];

export function RecoveryJourneySection() {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <section id="recovery" className="py-24 bg-background relative overflow-hidden">
      {/* Visual background circles */}
      <div className="absolute right-0 bottom-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute left-0 top-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <SectionHeader
          badge="আরোগ্য লাভের পথ"
          title="সুস্থতার ক্রমান্বয় রিকভারি জার্নি"
          subtitle="জিবিএস একটি সাময়িক ঝড়। আপনার মনে অদম্য সাহস এবং পরিশ্রমী অনুশীলন থাকলে এই পথ পাড়ি দিয়ে আবার বিজয়ী হওয়া সম্ভব।"
        />

        {/* Dynamic Statistics Display Panel */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
          {STATS.map((stat, idx) => (
            <StaggerItem key={idx}>
              <Card className="h-full glass-card border border-primary/10 hover:shadow-lg transition-all duration-300 relative overflow-hidden group rounded-2xl">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-linear-to-b from-primary to-accent" />
                <CardContent className="pt-6 pl-8 pb-6">
                  <span className="text-4xl md:text-5xl font-black bg-linear-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 block mb-2">
                    {stat.prefix}
                    <AnimatedCounter value={stat.value} formatter={toBengaliNumber} />
                    {stat.suffix}
                  </span>
                  <h4 className="text-base md:text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {stat.label}
                  </h4>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {stat.desc}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Success Recovery Timeline visual pathway */}
        <div className="max-w-4xl mx-auto mb-20">
          <h3 className="text-2xl font-bold mb-10 text-center flex items-center justify-center gap-2">
            <TrendingUp className="h-5.5 w-5.5 text-primary" />
            ধাপে ধাপে সুস্থ হওয়ার ক্রমান্বয় পথরেখা
          </h3>
          
          {/* Custom Interactive Stepper Nodes */}
          <div className="glass-card border border-primary/10 p-6 md:p-8 rounded-3xl space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 relative z-10">
              {RECOVERY_TIMELINE.map((time, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePhase(idx)}
                  className={`relative p-4 rounded-2xl border text-center transition-all cursor-pointer ${
                    activePhase === idx
                      ? "bg-primary/10 border-primary text-primary font-bold shadow-md shadow-primary/5"
                      : "bg-background/40 border-border hover:border-primary/50 text-muted-foreground"
                  }`}
                >
                  <span className="block text-xs text-accent font-semibold uppercase tracking-wider mb-1">
                    {time.duration}
                  </span>
                  <span className="text-sm md:text-base font-extrabold block">
                    {time.phase}: {time.title.split(" ")[0]}
                  </span>
                  {activePhase === idx && (
                    <motion.div
                      layoutId="activeTimelineStep"
                      className="absolute inset-0 border-2 border-primary rounded-2xl pointer-events-none"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Stepper Detail Card with transition */}
            <div className="relative overflow-hidden min-h-[220px] rounded-2xl bg-secondary/30 dark:bg-slate-900/30 p-6 border border-border/50">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePhase}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-border/50 pb-3">
                    <div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold mb-1">
                        <Sparkles className="h-3 w-3" />
                        {RECOVERY_TIMELINE[activePhase].duration}
                      </span>
                      <h4 className="text-lg md:text-xl font-bold text-foreground">
                        {RECOVERY_TIMELINE[activePhase].phase}: {RECOVERY_TIMELINE[activePhase].title}
                      </h4>
                    </div>
                  </div>

                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {RECOVERY_TIMELINE[activePhase].desc}
                  </p>

                  <div className="space-y-2 pt-2">
                    <h5 className="text-xs md:text-sm font-bold text-primary flex items-center gap-1">
                      <CheckCircle className="h-4 w-4" />
                      এই ধাপের গুরুত্বপূর্ণ করণীয় ও পুনরুদ্ধার অ্যাকশনসমূহ:
                    </h5>
                    <ul className="grid sm:grid-cols-2 gap-2 pl-1">
                      {RECOVERY_TIMELINE[activePhase].actions.map((act, i) => (
                        <li key={i} className="text-xs md:text-sm text-foreground/80 flex items-start gap-2 bg-background/50 p-2.5 rounded-xl border border-border/40">
                          <ArrowRight className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Inspirational Quote visual panel */}
        <FadeIn direction="up" className="max-w-4xl mx-auto">
          <div className="relative p-8 md:p-12 rounded-3xl bg-linear-to-tr from-primary/10 to-accent/10 border border-primary/20 shadow-xl overflow-hidden text-center">
            {/* Quote watermark icon */}
            <Quote className="absolute -left-4 -top-4 w-32 h-32 text-primary/5 pointer-events-none" />
            
            <div className="relative z-10 space-y-6">
              <div className="h-12 w-12 rounded-full bg-primary/15 text-primary flex items-center justify-center mx-auto shrink-0 animate-pulse">
                <Trophy className="h-6 w-6" />
              </div>
              
              <p className="text-lg md:text-2xl font-bold italic text-foreground leading-relaxed max-w-2xl mx-auto">
                "জিবিএস একটি কঠিন পরীক্ষা হতে পারে, কিন্তু এটি জীবনের সমাপ্তি নয়। ধৈর্য, নিয়মিত ফিজিওথেরাপি আর মনের জোর থাকলে আপনি অবশ্যই আবার সোজা হয়ে দাঁড়াবেন এবং বিজয়ী বেশে স্বাভাবিক জীবনে ফিরবেন।"
              </p>
              
              <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-extrabold text-primary uppercase tracking-widest">
                <CheckCircle className="h-4.5 w-4.5 text-accent animate-bounce" />
                বাস্তব জয়ীদের অনুপ্রেরণামূলক বাণী
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

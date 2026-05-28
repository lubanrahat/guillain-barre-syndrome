"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Calendar, HeartPulse, Activity, Trophy, ArrowRight } from "lucide-react";
import { SectionHeader } from "../section-header";
import { FadeIn, StaggerContainer, StaggerItem } from "../motion-wrapper";
import { Card, CardContent } from "../ui/card";
import { Progress } from "../ui/progress";
import { Badge } from "../ui/badge";

const RECOVERY_STAGES = [
  {
    stage: "ধাপ ১",
    title: "বেডসাইড ফিজিওথেরাপি (Passive Exercises)",
    duration: "হাসপাতালে থাকাকালীন (১–৪ সপ্তাহ)",
    desc: "যখন রোগী সম্পূর্ণ প্যারালাইজড বা বিছানায় শুয়ে থাকেন, তখন জয়েন্টগুলো শক্ত হওয়া রোধ করতে এবং রক্ত চলাচল সচল রাখতে থেরাপিস্ট রোগীর হাত-পা নিষ্ক্রিয়ভাবে নাড়াচড়া (Passive Range of Motion) করিয়ে দেন। এটি পেশীর সংকোচন প্রতিরোধ করে।",
    progress: 20,
  },
  {
    stage: "ধাপ ২",
    title: "সক্রিয় সহায়তামূলক ব্যায়াম (Active-Assisted)",
    duration: "হাসপাতাল থেকে ছাড়ার পর (৪–৮ সপ্তাহ)",
    desc: "রোগী যখন সামান্য শক্তি ফিরে পান, তখন থেরাপিস্টের সাহায্য নিয়ে নিজে নিজে হাত-পা নড়াচড়া করার চেষ্টা করেন। এই ধাপে পেশীর সংযোগ আবার তৈরি হতে শুরু করে এবং রোগীর মনোবল বৃদ্ধি পায়।",
    progress: 45,
  },
  {
    stage: "ধাপ ৩",
    title: "ভারসাম্য ও বসার অনুশীলন (Sitting & Balance)",
    duration: "পুনর্বাসন কেন্দ্র বা বাসায় (২–৩ মাস)",
    desc: "রোগীকে বিছানা থেকে উঠে বসা, পিঠ সোজা রাখা এবং নিজে নিজে বসার ভারসাম্য বজায় রাখার প্রশিক্ষণ দেওয়া হয়। হাত দিয়ে সাধারণ জিনিস ধরা বা মুঠো করার শক্তি ফিরে আসে।",
    progress: 70,
  },
  {
    stage: "ধাপ ৪",
    title: "দাঁড়ানো ও হাঁটার পুনর্বাসন (Standing & Gait)",
    duration: "পুনর্বাসনের চূড়ান্ত ধাপ (৩–৬ মাস)",
    desc: "প্রথমে প্যারালাল বার বা ওয়াকার দিয়ে রোগীকে দাঁড়ানোর অনুশীলন করানো হয়। পেশীর বল বাড়ার সাথে সাথে ওয়াকার ছাড়াই ধীরে ধীরে হাঁটাচলা ও স্বাভাবিক সিঁড়ি ভাঙার অনুশীলন করানো হয়।",
    progress: 100,
  },
];

export function PhysiotherapySection() {
  const [activeStage, setActiveStage] = useState(0);
  const [progressVal, setProgressVal] = useState(0);

  useEffect(() => {
    // Animate the progress bar width based on active stage
    const timer = setTimeout(() => {
      setProgressVal(RECOVERY_STAGES[activeStage].progress);
    }, 150);
    return () => clearTimeout(timer);
  }, [activeStage]);

  return (
    <section id="physiotherapy" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute left-0 top-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <SectionHeader
          badge="পুনর্বাসন ও ফিজিওথেরাপি"
          title="ফিজিওথেরাপি ও দীর্ঘমেয়াদী রিকভারি প্রসেস"
          subtitle="জিবিএস থেকে সম্পূর্ণ আরোগ্য লাভের মূল চাবিকাঠি হলো সঠিক ও নিয়মিত ফিজিওথেরাপি। ৩–৬ মাস বা তার বেশি সময়ের ধৈর্যশীল সাধনায় হাত-পা আবার সচল হয়।"
        />

        {/* Dash Board Layout */}
        <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto mb-16 items-center">
          {/* Left panel: Info and interactive progress indicator */}
          <FadeIn direction="left" className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-extrabold text-foreground flex items-center gap-2">
                <HeartPulse className="h-6 w-6 text-primary animate-pulse" />
                পেশীর শক্তি পুনরুদ্ধারের গতিপথ
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                জিবিএস-এ আক্রান্ত হলে স্নায়ু ক্ষতিগ্রস্ত হওয়ার কারণে মাংসপেশী শুকিয়ে দুর্বল হয়ে পড়ে। শুধুমাত্র ওষুধে পেশীর শক্তি ফিরে আসে না। নিয়মিত বৈজ্ঞানিক ফিজিওথেরাপি ব্যায়ামের মাধ্যমে ধীরে ধীরে মোটর স্নায়ুর সংকেত চলাচল স্বাভাবিক হয়।
              </p>
            </div>

            {/* Simulated Live Recovery Tracker Dashboard */}
            <div className="p-6 rounded-3xl glass-card border border-primary/10 space-y-4 shadow-md bg-white/70">
              <div className="flex justify-between items-center text-xs md:text-sm">
                <span className="font-bold text-foreground">মোটর ফাংশন পুনরুদ্ধার মাত্রা:</span>
                <span className="font-black text-primary text-base">{progressVal}%</span>
              </div>
              <Progress value={progressVal} className="h-3.5 bg-secondary" />
              <div className="flex justify-between items-center text-[10px] md:text-xs text-muted-foreground">
                <span className="font-semibold flex items-center gap-1"><Calendar className="h-3 w-3" /> ৩–৬ মাস লেগে থাকে</span>
                <span className="font-semibold flex items-center gap-1"><Trophy className="h-3 w-3" /> সম্পূর্ণ সুস্থতার লক্ষ্য</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-accent/5 border border-accent/20 text-accent-foreground text-xs md:text-sm flex gap-3 items-center">
              <Sparkles className="h-5 w-5 shrink-0 text-accent animate-spin" />
              <div>
                <strong>বাস্তব অভিজ্ঞতার আলো:</strong> ৩ মাস নিবিড় পুনর্বাসন ও ফিজিওথেরাপির পর আমাদের অনুপ্রেরণাদায়ী রোগী নিজে পায়ে হেঁটে বাড়ি ফিরেছেন।
              </div>
            </div>
          </FadeIn>

          {/* Right panel: Active recovery stages explorer */}
          <div className="lg:col-span-7 space-y-4">
            <h4 className="text-lg font-bold text-foreground mb-2">
              রিকভারির ৪টি গুরুত্বপূর্ণ ধাপ বা পর্যায়:
            </h4>
            <div className="space-y-4">
              {RECOVERY_STAGES.map((stage, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveStage(idx)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex gap-4 items-start ${
                    activeStage === idx
                      ? "bg-primary/5 border-primary/45 shadow-md -translate-x-1"
                      : "border-primary/10 bg-secondary/40"
                  }`}
                >
                  <div className={`h-10 w-10 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                    activeStage === idx ? "bg-primary text-white" : "bg-secondary text-muted-foreground"
                  }`}>
                    {stage.stage.split(" ")[1]}
                  </div>

                  <div className="space-y-1 flex-1">
                    <div className="flex flex-wrap justify-between items-baseline gap-2">
                      <h5 className={`text-base font-bold transition-colors ${
                        activeStage === idx ? "text-primary" : "text-foreground"
                      }`}>
                        {stage.title}
                      </h5>
                      <span className="text-[10px] md:text-xs text-primary font-semibold">
                        {stage.duration}
                      </span>
                    </div>
                    {activeStage === idx && (
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed pt-2 animate-fade-in">
                        {stage.desc}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

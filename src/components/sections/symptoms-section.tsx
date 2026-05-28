"use client";

import React, { useState } from "react";
import { MoveRight, ShieldAlert, Sparkles, Smile, ShieldCheck, HeartPulse } from "lucide-react";
import { SectionHeader } from "../section-header";
import { FadeIn, StaggerContainer, StaggerItem } from "../motion-wrapper";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

const SYMPTOMS = [
  {
    title: "হাত-পা অবশ হওয়া",
    desc: "পা থেকে শুরু হয়ে অসাড়তা বা অবশ ভাব ধীরে ধীরে শরীরের উপরের অংশে ছড়িয়ে পড়ে।",
    icon: "🦶",
    severity: "সাধারণ লক্ষণ",
    badgeColor: "bg-primary/10 text-primary border-primary/20",
  },
  {
    title: "পেশীর চরম দুর্বলতা",
    desc: "মাংসপেশীর শক্তি হ্রাস পায়, যার ফলে কোনো জিনিস ধরা বা হাত উপরে তোলা অসম্ভব হয়ে দাঁড়ায়।",
    icon: "💪",
    severity: "সাধারণ লক্ষণ",
    badgeColor: "bg-primary/10 text-primary border-primary/20",
  },
  {
    title: "তীব্র ঝিঁঝিঁ ভাব",
    desc: "হাত এবং পায়ের আঙ্গুলে সুই ফোটার মতো অনুভূতি বা সুই-সুঁই অবশ ভাব অনুভূত হয়।",
    icon: "⚡",
    severity: "প্রাথমিক লক্ষণ",
    badgeColor: "bg-accent/10 text-accent-foreground border-accent/20",
  },
  {
    title: "হাঁটতে সমস্যা",
    desc: "পায়ের শক্তি কমে যাওয়ায় সোজা হয়ে দাঁড়াতে ও হাঁটতে মারাত্মক কষ্ট হয়।",
    icon: "🚶",
    severity: "সাধারণ লক্ষণ",
    badgeColor: "bg-primary/10 text-primary border-primary/20",
  },
  {
    title: "ভারসাম্য হারানো",
    desc: "শরীর নিজের নিয়ন্ত্রণ বজায় রাখতে পারে না, ফলে দাঁড়িয়ে থাকতে গেলে পড়ে যাওয়ার সম্ভাবনা থাকে।",
    icon: "⚖️",
    severity: "সাধারণ লক্ষণ",
    badgeColor: "bg-primary/10 text-primary border-primary/20",
  },
  {
    title: "তীব্র শ্বাসকষ্ট",
    desc: "শ্বাসপ্রশ্বাসের পেশী দুর্বল হয়ে পড়ায় শ্বাস নিতে অসম্ভব কষ্ট হয়। (জরুরি ICU এবং ভেন্টিলেটর সহায়তা প্রয়োজন)।",
    icon: "🫁",
    severity: "গুরুতর লক্ষণ",
    badgeColor: "bg-destructive/10 text-destructive border-destructive/20 animate-pulse",
  },
  {
    title: "গিলতে ও চিবানোয় সমস্যা",
    desc: "গলার পেশী অসাড় হয়ে পড়ায় খাবার চিবিয়ে গিলতে চরম কষ্ট হয়, পানি পানেও গলায় আটকে যায়।",
    icon: "👅",
    severity: "গুরুতর লক্ষণ",
    badgeColor: "bg-destructive/10 text-destructive border-destructive/20",
  },
  {
    title: "মুখের পেশী দুর্বল হওয়া",
    desc: "মুখের একপাশ বা দুপাশ অবশ হয়ে কথা বলতে বা হাসতে সমস্যা হয় (ফেশিয়াল প্যারালাইসিস সদৃশ)।",
    icon: "🗣️",
    severity: "গুরুতর লক্ষণ",
    badgeColor: "bg-destructive/10 text-destructive border-destructive/20",
  },
];

const TIMELINE_STAGES = [
  {
    phase: "পর্যায় ১",
    title: "প্রগতি পর্যায় (Progressive Phase)",
    duration: "১–৪ সপ্তাহ",
    desc: "এই ধাপে রোগের লক্ষণগুলো খুব দ্রুত তীব্র হতে শুরু করে। প্রথম পায়ে ঝিঁঝিঁ ভাব বা দুর্বলতা দেখা দেয় এবং কয়েকদিনের মধ্যে তা হাত ও বুকে ছড়িয়ে পড়ে। ২০-৩০% রোগীর শ্বাসকষ্ট শুরু হওয়ায় আইসিইউ লাগতে পারে।",
    icon: ShieldAlert,
    color: "from-destructive to-amber-500 shadow-destructive/20",
  },
  {
    phase: "পর্যায় ২",
    title: "স্থিতিশীল পর্যায় (Plateau Phase)",
    duration: "কয়েক দিন–কয়েক সপ্তাহ",
    desc: "পক্ষাঘাত বা অবশ ভাব যখন চরম পর্যায়ে পৌঁছে যায়, তখন রোগটি বৃদ্ধি পাওয়া বন্ধ হয়ে এক জায়গায় থমকে দাঁড়ায়। এই ধাপে রোগীর অবস্থা অপরিবর্তিত থাকে এবং নিবিড় পর্যবেক্ষণে রেখে নার্সিং সেবা দেওয়া হয়।",
    icon: HeartPulse,
    color: "from-primary to-accent shadow-primary/20",
  },
  {
    phase: "পর্যায় ৩",
    title: "পুনরুদ্ধার পর্যায় (Recovery Phase)",
    duration: "কয়েক মাস–২ বছর",
    desc: "স্নায়ুর আবরণ (মায়োলিন) পুনরায় তৈরি হতে শুরু করায় পক্ষাঘাত বা অবশ ভাব কমতে থাকে। সঠিক ফিজিওথেরাপি ও পুষ্টিকর খাবারের মাধ্যমে পেশীর শক্তি ফিরে আসে। অধিকাংশ রোগী এ পর্যায়ে সম্পূর্ণ স্বাভাবিক জীবনে ফিরে যান।",
    icon: ShieldCheck,
    color: "from-green-500 to-emerald-600 shadow-green-500/20",
  },
];

export function SymptomsSection() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section id="symptoms" className="py-24 bg-linear-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <SectionHeader
          badge="লক্ষণ ও রোগ অগ্রগতি"
          title="জিবিএস-এর প্রধান লক্ষণসমূহ"
          subtitle="রোগের লক্ষণগুলো সাধারণত পা থেকে শুরু হয়ে ঊর্ধ্বমুখী ছড়ায়। প্রাথমিক লক্ষণ থেকে শুরু করে চরম পর্যায়ের ধাপগুলো জেনে রাখুন।"
        />

        {/* Symptoms Grid */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
          {SYMPTOMS.map((symptom, index) => (
            <StaggerItem key={index}>
              <Card className="h-full glass-card border border-primary/10 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                <CardContent className="pt-6 relative flex flex-col justify-between h-full gap-4">
                  <div>
                    {/* Badge and Icon */}
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-3xl filter drop-shadow-md group-hover:scale-115 transition-transform duration-300">{symptom.icon}</span>
                      <Badge variant="outline" className={`${symptom.badgeColor} text-[10px] md:text-xs font-semibold rounded-full border`}>
                        {symptom.severity}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {symptom.title}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {symptom.desc}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Symptoms Timeline Animation */}
        <FadeIn direction="up" className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold flex items-center justify-center gap-2">
              <Sparkles className="h-5 w-5 text-accent animate-pulse" />
              রোগের অগ্রগতির ৩টি প্রধান পর্যায় (Timeline)
            </h3>
            <p className="text-sm md:text-base text-muted-foreground mt-2 max-w-xl mx-auto">
              জিবিএস রোগের শুরু থেকে পূর্ণ সুস্থ হওয়া পর্যন্ত প্রধান ৩টি ধাপ নিচে ইন্টারেক্টিভ টাইমলাইনের মাধ্যমে দেখানো হলো।
            </p>
          </div>

          {/* Interactive Timeline Tabs */}
          <div className="grid grid-cols-3 gap-3 md:gap-4 mb-8 bg-secondary/50 p-2 rounded-2xl border border-primary/10">
            {TIMELINE_STAGES.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStage(idx)}
                  className={`py-3 md:py-4 px-2 rounded-xl font-bold text-xs md:text-sm transition-all duration-300 flex flex-col md:flex-row items-center justify-center gap-2 cursor-pointer ${
                    activeStage === idx
                      ? "bg-linear-to-r from-primary to-accent text-white shadow-md"
                      : "text-muted-foreground hover:text-foreground hover:bg-background/40"
                  }`}
                >
                  <Icon className="h-4.5 w-4.5 shrink-0" />
                  <span className="text-center md:text-left">{stage.phase}</span>
                </button>
              );
            })}
          </div>

          {/* Stage Details Card */}
          <div className="relative overflow-hidden rounded-3xl border border-primary/15 bg-white/70 dark:bg-slate-800/40 p-6 md:p-8 shadow-xl backdrop-blur-md">
            {/* Background design */}
            <div className="absolute right-0 top-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />

            <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <Badge className="bg-primary hover:bg-primary/95 text-white rounded-full font-bold px-3 py-0.5 text-xs">
                    স্থায়িত্ব: {TIMELINE_STAGES[activeStage].duration}
                  </Badge>
                </div>
                <h4 className="text-xl md:text-2xl font-extrabold text-foreground">
                  {TIMELINE_STAGES[activeStage].title}
                </h4>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {TIMELINE_STAGES[activeStage].desc}
                </p>
              </div>

              {/* Graphical representation/Icon */}
              <div className={`h-24 w-24 rounded-3xl bg-linear-to-tr ${TIMELINE_STAGES[activeStage].color} flex items-center justify-center text-white shrink-0 self-center md:self-auto shadow-lg hover:scale-105 transition-transform duration-300`}>
                {React.createElement(TIMELINE_STAGES[activeStage].icon, { className: "h-10 w-10" })}
              </div>
            </div>

            {/* Bottom Nav Helper */}
            {activeStage < 2 && (
              <div className="mt-6 pt-4 border-t border-primary/10 flex justify-end">
                <button
                  onClick={() => setActiveStage((prev) => prev + 1)}
                  className="flex items-center gap-1.5 text-xs md:text-sm font-bold text-primary hover:text-primary-foreground cursor-pointer transition-colors"
                >
                  পরবর্তী পর্যায় দেখুন
                  <MoveRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

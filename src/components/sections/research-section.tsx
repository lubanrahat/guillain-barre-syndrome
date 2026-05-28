"use client";

import React from "react";
import { Landmark, Globe, Microscope, ShieldAlert, Award, FileSpreadsheet } from "lucide-react";
import { SectionHeader } from "../section-header";
import { FadeIn, StaggerContainer, StaggerItem } from "../motion-wrapper";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

const RESEARCH_CENTERS = [
  {
    name: "Johns Hopkins University, USA",
    desc: "জিবিএস-এর ইমিউনোলজি এবং অটোইমিউন আক্রমণ প্রক্রিয়ার ওপর বিশ্বের অন্যতম প্রধান গবেষণা কেন্দ্র। এরা রোগীর অ্যান্টিবডি আক্রমণ প্রক্রিয়া এবং ইমিউন থেরাপি নিয়ে অত্যন্ত সূক্ষ্ম ডায়াগনস্টিক গবেষণা পরিচালনা করে থাকে।",
    icon: Globe,
  },
  {
    name: "Erasmus MC, Netherlands",
    desc: "বিশ্বের বৃহত্তম জিবিএস গবেষণা সমীক্ষা—'International GBS Outcome Study (IGOS)'—এর প্রধান সমন্বয়ক। এরা বিশ্বব্যাপী হাজার হাজার রোগীর রিকভারি ডাটা বিশ্লেষণ করে কোন রোগী দ্রুত সুস্থ হবে তা চিহ্নিত করার জন্য কাজ করছে।",
    icon: Landmark,
  },
  {
    name: "University College London (UCL), UK",
    desc: "ইউরোপের শীর্ষস্থানীয় নিউরোমাসকুলার রোগ গবেষণা কেন্দ্র। এরা স্নায়ুর আবরণ (মায়োলিন) পুনরায় তৈরি করার ঔষধ এবং নতুন কেমিক্যাল এজেন্ট নিয়ে বিশ্বসেরা ক্লিনিক্যাল ট্রায়াল ও ল্যাবরেটরি পরীক্ষা চালাচ্ছে।",
    icon: Microscope,
  },
];

const RESEARCH_TIMELINE = [
  { year: "১৯৫০-৬০", event: "AIDP আবিষ্কার", desc: "জিবিএস-এর প্রধান প্রদাহজনিত ধরন (Acute Inflammatory Demyelinating Polyneuropathy) বিজ্ঞানীরা প্রথম আবিষ্কার করেন।" },
  { year: "১৯৭৬", event: "ভ্যাকসিন ও জিবিএস লিংক", desc: "ইনফ্লুয়েঞ্জা ভ্যাকসিনের সাথে জিবিএস-এর সংযোগ এবং শরীরে ইমিউন ট্রিগার প্রক্রিয়া গভীরভাবে গবেষণায় উন্মোচিত হয়।" },
  { year: "১৯৮০-এর দশক", event: "প্লাজমা ও IVIG উদ্ভাবন", desc: "রক্ত পরিবর্তন এবং আধুনিক ইন্ট্রাভেনাস ইমিউনোগ্লোবুলিন থেরাপি উদ্ভাবন যা মৃত্যুর হার ব্যাপকভাবে কমিয়ে দেয়।" },
  { year: "১৯৯০-এর দশক", event: "Axonal GBS প্রকারভেদ", desc: "চীন ও জাপানের বিজ্ঞানীদের হাত ধরে অ্যাক্সন আক্রান্তকারী গুরুতর প্রকার (AMAN ও AMSAN) চিহ্নিত ও শ্রেণীবদ্ধ করা হয়।" },
];

export function ResearchSection() {
  return (
    <section id="research" className="py-24 bg-linear-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <SectionHeader
          badge="বৈজ্ঞানিক গবেষণা ও আপডেট"
          title="জিবিএস নিয়ে বিশ্বব্যাপী গবেষণা ও বাংলাদেশের প্রেক্ষাপট"
          subtitle="বিশ্বের নেতৃস্থানীয় চিকিৎসা বিজ্ঞানীদের সাম্প্রতিক গবেষণা, কালপঞ্জি এবং বাংলাদেশসহ দক্ষিণ এশিয়ার বিশেষ ধরন সম্পর্কে জানুন।"
        />

        {/* Bangladesh & South Asia Context - Big Visual Alert banner */}
        <FadeIn direction="up" className="max-w-5xl mx-auto mb-16">
          <div className="relative p-6 md:p-8 rounded-3xl bg-amber-500/5 border-2 border-amber-500/20 shadow-xl overflow-hidden">
            {/* Background badge decorations */}
            <div className="absolute -right-8 -top-8 w-24 h-24 bg-amber-500/10 rounded-full blur-xl" />

            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Specialized Icon */}
              <div className="h-14 w-14 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/20">
                <ShieldAlert className="h-7 w-7" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Badge className="bg-amber-500 hover:bg-amber-500/95 text-white rounded-full font-bold px-3 py-0.5 text-xs">
                    দক্ষিণ এশিয়া ও বাংলাদেশ প্রেক্ষাপট
                  </Badge>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground">
                  বাংলাদেশে জিবিএস-এর বিশেষ ধরন: বিশুদ্ধ মোটর অ্যাক্সন আক্রমণ (Pure Motor Axonal Type)
                </h3>
                <p className="text-xs md:text-sm md:text-base text-muted-foreground leading-relaxed">
                  আন্তর্জাতিক গবেষণায় দেখা গেছে, ইউরোপ বা আমেরিকার মতো উন্নত দেশের তুলনায় বাংলাদেশ ও দক্ষিণ এশিয়ায় জিবিএস-এর একটি ভিন্ন ধরন বেশি দেখা যায়। একে <strong>Pure Motor Axonal (AMAN)</strong> বলা হয়, যেখানে স্নায়ুর উপরের আবরণের বদলে সরাসরি ভেতরের মূল সংকেত বাহক বা অ্যাক্সন আক্রান্ত হয়। এটি সাধারণত গরম আবহাওয়া এবং পেটের ডায়রিয়া জীবাণু (Campylobacter jejuni) দ্বারা বেশি ট্রিগার হয়। আন্তর্জাতিক গবেষণা সমীক্ষা <strong>IGOS</strong>-এ বাংলাদেশ থেকে সংগৃহীত ডাটা বিশ্বজুড়ে এই ভৌগোলিক পার্থক্য স্পষ্টভাবে প্রমাণ করেছে।
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Global Research Centers */}
        <div className="max-w-5xl mx-auto mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
            <Award className="h-5.5 w-5.5 text-primary" />
            জিবিএস গবেষণায় নেতৃত্বদানকারী বৈশ্বিক প্রতিষ্ঠানসমূহ
          </h3>
          
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {RESEARCH_CENTERS.map((center, idx) => {
              const Icon = center.icon;
              return (
                <StaggerItem key={idx}>
                  <Card className="h-full glass-card border border-primary/10 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 relative flex flex-col justify-between h-full gap-4">
                      <div className="space-y-3">
                        <div className="p-3 rounded-2xl bg-primary/10 text-primary border border-primary/15 shrink-0 w-11 h-11 flex items-center justify-center group-hover:scale-105 duration-300">
                          <Icon className="h-5.5 w-5.5" />
                        </div>
                        <h4 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                          {center.name}
                        </h4>
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                          {center.desc}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>

        {/* Global History Timeline Grid */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
            <FileSpreadsheet className="h-5.5 w-5.5 text-primary" />
            গবেষণার প্রধান মাইলফলক ও আবিষ্কারের ইতিহাস
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {RESEARCH_TIMELINE.map((time, idx) => (
              <FadeIn key={idx} direction="up" delay={idx * 0.1} className="relative group">
                <Card className="h-full glass-card border border-primary/10 hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                  <CardContent className="pt-6 relative flex flex-col justify-between h-full gap-4">
                    <div className="space-y-3">
                      <span className="h-7 px-2.5 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center w-fit">
                        {time.year}
                      </span>
                      <h4 className="text-sm md:text-base font-bold text-foreground group-hover:text-primary transition-colors">
                        {time.event}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {time.desc}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

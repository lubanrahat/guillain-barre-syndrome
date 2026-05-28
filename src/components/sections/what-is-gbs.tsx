"use client";

import React from "react";
import { ShieldX, Network, HelpCircle, History, Sparkles, AlertCircle } from "lucide-react";
import { SectionHeader } from "../section-header";
import { FadeIn, StaggerContainer, StaggerItem } from "../motion-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

const GBS_FACTS = [
  {
    icon: HelpCircle,
    title: "জিবিএস (GBS) কী?",
    description: "গিলেন-বারে সিনড্রোম (Guillain-Barré Syndrome) হলো একটি বিরল কিন্তু মারাত্মক স্নায়বিক অবস্থা যেখানে শরীরের রোগ প্রতিরোধ ব্যবস্থা (Immune System) ভুলবশত নিজের পেরিফেরাল স্নায়ুতন্ত্রকে আক্রমণ করে বসে।",
    color: "text-primary bg-primary/5 border-primary/20",
  },
  {
    icon: ShieldX,
    title: "এটি ভাইরাস বা ছোঁয়াচে রোগ নয়",
    description: "জিবিএস কোনো সংক্রামক ভাইরাস বা ব্যাকটেরিয়া নয় এবং এটি একজনের শরীর থেকে অন্যজনের শরীরে ছড়ায় না। এটি শরীরের নিজস্ব ইমিউন সিস্টেমের একটি ত্রুটিপূর্ণ অটোইমিউন প্রতিক্রিয়া (Autoimmune Disease)।",
    color: "text-destructive bg-destructive/5 border-destructive/20",
  },
  {
    icon: Network,
    title: "মায়োলিন শিথ (Myelin Sheath) ধ্বংস হওয়া",
    description: "আমাদের স্নায়ুর ওপর দিয়ে সংকেত চলাচলের জন্য একটি প্রলেপ থাকে যাকে মায়োলিন শিথ বলে। জিবিত্রস আক্রান্ত হলে অ্যান্টিবডি এই প্রলেপটি নষ্ট করে ফেলে, ফলে মস্তিষ্ক থেকে হাত-পায়ে সংকেত আদান-প্রদান ব্যাহত হয় এবং শরীর অবশ হয়ে পড়ে।",
    color: "text-accent bg-accent/5 border-accent/20",
  },
];

const HISTORICAL_MILESTONES = [
  { year: "১৮৫৯", title: "ল্যান্ড্রি-র পর্যবেক্ষণ", desc: "ফরাসি চিকিৎসক জ্যাঁ-ব্যাপটিস্ট অক্টাভ ল্যান্ড্রি প্রথম এই ধরনের ঊর্ধ্বমুখী পক্ষাঘাত (ascending paralysis) পর্যবেক্ষণ ও বর্ণনা করেন।" },
  { year: "১৯১৬", title: "যুগান্তকারী আবিষ্কার", desc: "প্রথম বিশ্বযুদ্ধের সময় ফরাসি চিকিৎসক জর্জ গিলেন, জ্যাঁ-আলেকজান্দ্র বারে এবং আন্দ্রে স্ট্রহল আবিষ্কার করেন যে রোগীর মেরুদণ্ডের তরলে প্রোটিন বাড়ে কিন্তু রক্তকণিকা স্বাভাবিক থাকে।" },
  { year: "পরবর্তীকাল", title: "syndrome নামকরণ", desc: "তাঁদের এই বিশেষ পরীক্ষা পদ্ধতি ও গবেষণার সম্মানে রোগটির নামকরণ করা হয় 'গিলেন-বারে সিন্ড্রোম' (Guillain-Barré Syndrome)।" },
];

const PATHOGENS = [
  { name: "Campylobacter jejuni", disease: "ডায়রিয়া বা পেটের সংক্রমণ", link: "সবচেয়ে সাধারণ কারণ (প্রায় ৩০%)" },
  { name: "Cytomegalovirus (CMV)", disease: "ভাইরাল ফ্লু বা জ্বর", link: "দ্বিতীয় প্রধান কারণ" },
  { name: "Epstein-Barr Virus", disease: "মনোনিউক্লিওসিস বা গ্ল্যান্ডুলার ফিভার", link: "পরিচিত ট্রিগার" },
  { name: "Influenza Virus", disease: "সাধারণ ইনফ্লুয়েঞ্জা বা ফ্লু", link: "উল্লেখযোগ্য ট্রিগার" },
  { name: "SARS-CoV-2", disease: "COVID-19 বা করোনা ভাইরাসের জটিলতা", link: "সাম্প্রতিক গবেষণায় সংশ্লিষ্ট" },
  { name: "Zika Virus", disease: "জিকা মশার কামড়ে সৃষ্ট জ্বর", link: "প্রাদুর্ভাবের সময় বৃদ্ধি লক্ষ্য করা যায়" },
];

export function WhatIsGBS() {
  return (
    <section id="what-is-gbs" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <SectionHeader
          badge="রোগ পরিচিতি ও ইতিহাস"
          title="গিলেন-বারে সিনড্রোম কী?"
          subtitle="সহজ ভাষায় রোগের অভ্যন্তরীণ শারীরবৃত্তীয় প্রক্রিয়া ও উৎপত্তির ইতিহাস"
        />

        {/* Fact Cards */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {GBS_FACTS.map((fact, index) => {
            const Icon = fact.icon;
            return (
              <StaggerItem key={index}>
                <Card className={`h-full glass-card border border-primary/10 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1`}>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className={`p-3 rounded-2xl ${fact.color} border shrink-0 transition-transform group-hover:scale-110 duration-300`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg md:text-xl font-bold leading-tight">
                      {fact.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="-mt-2 text-muted-foreground text-sm md:text-base leading-relaxed">
                    {fact.description}
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Naming and History Timeline */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20 items-center">
          <FadeIn direction="left">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
              <History className="h-6 w-6 text-primary animate-pulse" />
              নামকরণ ও গবেষণার সংক্ষিপ্ত ইতিহাস
            </h3>
            <p className="text-muted-foreground mb-8 text-sm md:text-base leading-relaxed">
              ১৯১৬ সালের ১৩ অক্টোবর সমের যুদ্ধের প্রাক্কালে ফরাসি চিকিৎসকরা আবিষ্কার করেছিলেন এই বিশেষ ঊর্ধ্বমুখী পক্ষাঘাতের আসল কারণ। তরল পদার্থের প্রোটিন বিশ্লেষণের মাধ্যমে এটি সাধারণ মেরুদণ্ডের আঘাত থেকে আলাদা করা সম্ভব হয়।
            </p>
            <div className="relative border-l-2 border-primary/20 pl-6 space-y-8">
              {HISTORICAL_MILESTONES.map((milestone, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full border-2 border-primary bg-background group-hover:bg-primary transition-colors" />
                  <div className="absolute -left-[30px] top-2.5 h-1.5 w-1.5 rounded-full bg-accent animate-ping" />
                  <span className="text-xs font-bold text-primary tracking-wide block mb-1">
                    {milestone.year}
                  </span>
                  <h4 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {milestone.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {milestone.desc}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="right" className="glass-card border border-primary/10 rounded-3xl p-4 sm:p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-accent" />
              সংক্রমণের সাথে জিবিএস-এর সম্পর্ক
            </h3>
            <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
              জিবিএস হওয়ার সাধারণত ১ থেকে ৬ সপ্তাহ আগে ডায়রিয়া বা ফ্লু জাতীয় কোনো ইনফেকশন হয়ে থাকে। এই প্রক্রিয়াকে চিকিৎসাবিজ্ঞানে <strong>'Molecular Mimicry'</strong> বলা হয়, যেখানে জীবাণুর সাথে স্নায়ুর আবরণের গাঠনিক মিল থাকার কারণে অ্যান্টিবডি ভুল করে স্নায়ুতে আক্রমণ করে।
            </p>

            <div className="p-4 rounded-2xl bg-destructive/5 border border-destructive/10 text-destructive text-sm flex gap-3 mb-6 items-start">
              <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
              <div>
                <strong>মনে রাখবেন:</strong> যেকোনো ফ্লু বা ডায়রিয়া থেকে সেরে ওঠার পর হঠাৎ হাত-পায়ে অবশ ভাব দেখা দিলে অবিলম্বে নিউরোলজিস্টের শরণাপন্ন হতে হবে।
              </div>
            </div>

            <h4 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wider">
              সাধারণ ট্র্রিগারকারী জীবাণুসমূহ:
            </h4>
            <div className="overflow-x-auto rounded-xl border border-primary/10">
              <Table className="w-full min-w-[500px]">
                <TableHeader className="bg-primary/5">
                  <TableRow>
                    <TableHead className="font-bold text-xs uppercase text-primary">জীবাণুর নাম</TableHead>
                    <TableHead className="font-bold text-xs uppercase text-primary">সম্পর্কিত রোগ</TableHead>
                    <TableHead className="font-bold text-xs uppercase text-primary">জিবিএস-এর ভূমিকা</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {PATHOGENS.map((p, idx) => (
                    <TableRow key={idx} className="hover:bg-primary/5 transition-colors">
                      <TableCell className="font-semibold text-xs md:text-sm text-foreground">{p.name}</TableCell>
                      <TableCell className="text-xs md:text-sm text-muted-foreground">{p.disease}</TableCell>
                      <TableCell className="text-xs md:text-sm text-primary font-medium">{p.link}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

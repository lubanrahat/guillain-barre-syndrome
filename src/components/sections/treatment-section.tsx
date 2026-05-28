"use client";

import React from "react";
import { ShieldCheck, HeartPulse, Activity, Zap, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "../section-header";
import { FadeIn } from "../motion-wrapper";
import { Card, CardContent } from "../ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

const TREATMENTS = [
  {
    title: "IVIG (Intravenous Immunoglobulin)",
    desc: "সুস্থ মানুষের রক্তের অ্যান্টিবডি প্রক্রিয়াজাত করে রোগীর শরীরে শিরায় ইনজেকশনের মাধ্যমে দেওয়া হয়। এটি রক্তের ক্ষতিকর অ্যান্টিবডিগুলোকে ধ্বংস করে এবং ইমিউন সিস্টেমের নার্ভ আক্রমণ প্রতিহত করে। এটি বাংলাদেশে সবচেয়ে বহুল ব্যবহৃত আধুনিক চিকিৎসা।",
    timing: "লক্ষণ দেখা দেওয়ার ৭–১৪ দিনের মধ্যে শুরু করতে হয়।",
    icon: ShieldCheck,
    color: "text-primary bg-primary/10 border-primary/20",
  },
  {
    title: "প্লাজমা এক্সচেঞ্জ (Plasmapheresis)",
    desc: "একটি বিশেষ মেশিনের সাহায্যে রোগীর রক্ত শরীর থেকে বের করে নিয়ে তার তরল অংশ (প্লাজমা), যাতে ক্ষতিকর অ্যান্টিবডি থাকে, তা ছেঁকে আলাদা করা হয়। এরপর ফিল্টারকৃত রক্ত আবার শরীরে ফিরিয়ে দেওয়া হয়। এটি রক্তের অ্যান্টিবডি পরিষ্কার করার অত্যন্ত দ্রুত ও কার্যকর পদ্ধতি।",
    timing: "গুরুতর রোগীদের ক্ষেত্রে হাসপাতালে ভর্তির পরপরই ৩-৫টি সেশনে করা হয়।",
    icon: Zap,
    color: "text-accent bg-accent/10 border-accent/20",
  },
  {
    title: "আইসিইউ ও ভেন্টিলেটর সহায়তা (ICU & Ventilator)",
    desc: "যদি জিবিএস রোগীর বুকের খাঁচার বা ফুসফুসের শ্বাস নেওয়ার পেশী অবশ হয়ে পড়ে এবং শ্বাস বন্ধ হতে শুরু করে, তবে লাইফ সাপোর্ট বা কৃত্রিম শ্বাসপ্রশ্বাস (ভেন্টিলেটর) দেওয়া অপরিহার্য হয়ে পড়ে। এটি জীবন বাঁচাতে অন্যতম মূল অনুষঙ্গ।",
    timing: "শ্বাসকষ্ট শুরু হওয়া মাত্র অবিলম্বে আইসিইউতে স্থানান্তর করে দেওয়া হয়।",
    icon: HeartPulse,
    color: "text-destructive bg-destructive/10 border-destructive/20",
  },
  {
    title: "সহায়ক ও ব্যথা ব্যবস্থাপনা (Supportive & Pain Care)",
    desc: "জিবিএস-এ আক্রান্ত রোগীর পেশীতে তীব্র ব্যথা বা পিঠে জ্বালাপোড়া অনুভূতি হতে পারে। এর জন্য বিশেষ স্নায়ুবিক ব্যথানাশক ওষুধ, কোষ্ঠকাঠিন্য প্রতিরোধ, ত্বকে বেড সোর এড়াতে নিয়মিত পজিশন পরিবর্তন এবং প্রেশার নিয়ন্ত্রণের সহায়ক চিকিৎসা দেওয়া হয়।",
    timing: "চিকিৎসা চলাকালে এবং রিকভারি ধাপে নিয়মিত দেওয়া হয়।",
    icon: Activity,
    color: "text-green-500 bg-green-500/10 border-green-500/20",
  },
];

export function TreatmentSection() {
  return (
    <section id="treatment" className="py-24 bg-linear-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Visual background gradient circles */}
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute left-0 bottom-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <SectionHeader
          badge="চিকিৎসা নির্দেশিকা"
          title="জিবিএস রোগের প্রধান চিকিৎসা পদ্ধতিসমূহ"
          subtitle="জিবিএস কোনো দীর্ঘস্থায়ী বা নিরাময় অযোগ্য রোগ নয়। সঠিক সময়ে উপযুক্ত উন্নত চিকিৎসা শুরু করলে দ্রুত সুস্থ হওয়া সম্ভব।"
        />

        {/* Detailed Comparison Table */}
        <FadeIn direction="up" className="max-w-5xl mx-auto mb-20 glass-card rounded-3xl p-4 sm:p-6 md:p-8 border border-primary/10">
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
            <CheckCircle2 className="h-5.5 w-5.5 text-primary" />
            প্রধান চিকিৎসা পদ্ধতির তুলনা
          </h3>
          <div className="overflow-x-auto rounded-2xl border border-primary/10">
            <Table className="w-full min-w-[650px]">
              <TableHeader className="bg-primary/5">
                <TableRow>
                  <TableHead className="font-bold text-xs uppercase text-primary w-[250px]">চিকিৎসা পদ্ধতি</TableHead>
                  <TableHead className="font-bold text-xs uppercase text-primary">কীভাবে কাজ করে</TableHead>
                  <TableHead className="font-bold text-xs uppercase text-primary">কখন দেওয়া হয়</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {TREATMENTS.map((item, idx) => (
                  <TableRow key={idx} className="hover:bg-primary/5 transition-colors">
                    <TableCell className="font-bold text-xs md:text-sm text-foreground flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary shrink-0" />
                      {item.title.split(" (")[0]}
                    </TableCell>
                    <TableCell className="text-xs md:text-sm text-muted-foreground leading-relaxed">{item.desc.substring(0, 110)}...</TableCell>
                    <TableCell className="text-xs md:text-sm text-primary font-medium">{item.timing}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </FadeIn>

        {/* Vertical Timeline Design */}
        <div className="max-w-4xl mx-auto relative pl-6 md:pl-10 border-l-2 border-primary/20 space-y-12">
          {TREATMENTS.map((t, idx) => {
            const Icon = t.icon;
            return (
              <FadeIn key={idx} direction="up" className="relative group">
                {/* Timeline Point Indicator */}
                <div className="absolute -left-[35px] md:-left-[51px] top-2.5 h-6 w-6 rounded-full border-4 border-primary bg-background group-hover:bg-primary transition-colors flex items-center justify-center z-10">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent animate-ping" />
                </div>

                <Card className="glass-card border border-primary/10 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                  <CardContent className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
                    {/* Treatment Icon wrapper */}
                    <div className={`p-4 rounded-2xl ${t.color} border shrink-0 transition-transform group-hover:scale-110 duration-300`}>
                      <Icon className="h-7 w-7" />
                    </div>

                    <div className="space-y-3 flex-1">
                      <h4 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {t.title}
                      </h4>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                        {t.desc}
                      </p>
                      <div className="pt-2 border-t border-primary/5 flex flex-wrap gap-2 items-center text-xs text-primary font-semibold">
                        <span className="text-muted-foreground">সময়কাল বা উপযুক্ত ক্ষণ:</span>
                        {t.timing}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

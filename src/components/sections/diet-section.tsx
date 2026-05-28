"use client";

import React from "react";
import { CheckCircle2, XCircle, UtensilsCrossed, Apple, Fish, Flame, Sparkles, Egg, Droplet, Ban } from "lucide-react";
import { SectionHeader } from "../section-header";
import { FadeIn } from "../motion-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const FOODS_TO_EAT = [
  {
    name: "উচ্চ প্রোটিনসমৃদ্ধ খাবার",
    desc: "মাংসপেশী ক্ষয় রোধ করতে এবং দ্রুত শক্তি ফিরিয়ে আনতে ডিম, মুরগির মাংস এবং ডাল অত্যন্ত গুরুত্বপূর্ণ।",
    icon: Egg,
  },
  {
    name: "তাজা সামুদ্রিক বা দেশী মাছ",
    desc: "মাছে থাকে ওমেগা-৩ ফ্যাটি অ্যাসিড, যা স্নায়ুর প্রদাহ (inflammation) কমাতে এবং হাড় সচল করতে অত্যন্ত কার্যকরী।",
    icon: Fish,
  },
  {
    name: "দুধ ও ক্যালসিয়াম সমৃদ্ধ খাবার",
    desc: "প্রতিদিন এক গ্লাস ইষদুষ্ণ দুধ বা দুগ্ধজাত খাবার হাড়ের ঘনত্ব ও পেশীর নমনীয়তা ঠিক রাখে।",
    icon: UtensilsCrossed,
  },
  {
    name: "তাজা ফলমূল ও শাকসবজি",
    desc: "ভিটামিন বি-কমপ্লেক্স ও সি যুক্ত ফলমূল (যেমন লেবু, আমলকী, আপেল, পালং শাক) শরীরের রোগ প্রতিরোধ ক্ষমতা স্বাভাবিক করে।",
    icon: Apple,
  },
  {
    name: "পর্যাপ্ত পানি ও তরল",
    desc: "পেশী সতেজ রাখতে এবং ডিহাইড্রেশন বা কোষ্ঠকাঠিন্য দূর করতে দৈনিক অন্তত ২.৫–৩ লিটার বিশুদ্ধ পানি পান করুন।",
    icon: Droplet,
  },
];

const FOODS_TO_AVOID = [
  {
    name: "অতিরিক্ত ভাজা পোড়া ও তেলযুক্ত খাবার",
    desc: "অতিরিক্ত ট্রান্স-ফ্যাট বা ডুবো তেলে ভাজা খাবার শরীরে প্রদাহ ও কোলেস্টেরল বাড়িয়ে রিকভারি প্রক্রিয়াকে মন্থর করে দেয়।",
    icon: Flame,
  },
  {
    name: "চিনি ও প্রসেসড সুইটস",
    desc: "চিনি বা অতিরিক্ত মিষ্টি খাবার শরীরের মেটাবলিজম নষ্ট করে এবং স্নায়ুবিক জটিলতা বাড়াতে ট্রিগার হিসেবে কাজ করে।",
    icon: Ban,
  },
  {
    name: "জাঙ্ক ফুড ও ফাস্ট ফুড",
    desc: "পিৎজা, বার্গার বা প্রিজারভেটিভ যুক্ত প্যাকেটজাত খাবার পরিহার করুন। এগুলোতে কোনো পুষ্টিগুণ থাকে না।",
    icon: XCircle,
  },
  {
    name: "অনিয়মিত খাবার গ্রহণ",
    desc: "সময়মতো খাবার না খেলে রক্তের সুগার লেভেল ওঠানামা করে, ফলে চরম শারীরিক দুর্বলতা অনুভূত হয়।",
    icon: Ban,
  },
];

export function DietSection() {
  return (
    <section id="diet" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-green-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute left-0 bottom-1/3 w-96 h-96 bg-destructive/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <SectionHeader
          badge="খাদ্যাভ্যাস ও পুষ্টি"
          title="জিবিএস রোগীদের জন্য আদর্শ খাদ্যাভ্যাস"
          subtitle="পেশীর পুষ্টি এবং স্নায়ুর দ্রুত আরোগ্য লাভে সুষম খাদ্যাভ্যাস ও সঠিক ডায়েট চার্ট অত্যন্ত বড় ভূমিকা পালন করে।"
        />

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Green Healthy Section - Foods to Eat */}
          <FadeIn direction="left">
            <Card className="h-full border border-green-500/20 bg-green-500/5 rounded-3xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-green-500" />
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl md:text-2xl font-extrabold text-green-700 flex items-center gap-2.5">
                  <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0" />
                  কী কী খাবার বেশি খাবেন
                </CardTitle>
                <p className="text-xs md:text-sm text-green-600 font-semibold leading-relaxed">
                  পেশী গঠনে সাহায্যকারী প্রোটিন, স্নায়ু পুনর্গঠনকারী ভিটামিন এবং খনিজ সমৃদ্ধ পুষ্টিকর খাদ্যতালিকা:
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {FOODS_TO_EAT.map((food, idx) => {
                  const Icon = food.icon;
                  return (
                    <div key={idx} className="flex gap-4 p-4 bg-white/70 dark:bg-slate-800/40 rounded-2xl border border-green-500/10 hover:shadow-md transition-all duration-200">
                      <div className="p-2.5 rounded-xl bg-green-500/10 text-green-600 border border-green-500/20 shrink-0 self-start">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-foreground mb-1">{food.name}</h4>
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{food.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </FadeIn>

          {/* Red/Amber Warning Section - Foods to Avoid */}
          <FadeIn direction="right">
            <Card className="h-full border border-destructive/20 bg-destructive/5 rounded-3xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-destructive" />
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl md:text-2xl font-extrabold text-destructive flex items-center gap-2.5">
                  <Ban className="h-6 w-6 text-destructive shrink-0" />
                  কী কী খাবার এড়িয়ে চলবেন
                </CardTitle>
                <p className="text-xs md:text-sm text-destructive/80 font-semibold leading-relaxed">
                  রোগ নিরাময় প্রক্রিয়াকে মন্থর করতে পারে বা শারীরিক প্রদাহ বৃদ্ধি করতে পারে এমন খাবারসমূহ পরিহার করুন:
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {FOODS_TO_AVOID.map((food, idx) => {
                  const Icon = food.icon;
                  return (
                    <div key={idx} className="flex gap-4 p-4 bg-white/70 dark:bg-slate-800/40 rounded-2xl border border-destructive/10 hover:shadow-md transition-all duration-200">
                      <div className="p-2.5 rounded-xl bg-destructive/10 text-destructive border border-destructive/20 shrink-0 self-start">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-foreground mb-1">{food.name}</h4>
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{food.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

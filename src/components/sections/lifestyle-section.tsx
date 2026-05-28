"use client";

import React from "react";
import { BedDouble, Moon, HeartPulse, BrainCircuit, Users, HeartHandshake } from "lucide-react";
import { SectionHeader } from "../section-header";
import { StaggerContainer, StaggerItem } from "../motion-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const LIFESTYLES = [
  {
    icon: BedDouble,
    title: "পর্যাপ্ত বিশ্রাম",
    desc: "রিকভারি পিরিয়ডে শরীরকে অতিরিক্ত খাটিয়ে ফেলা যাবে না। যেকোনো পরিশ্রম বা থেরাপির পর পেশীকে পর্যাপ্ত সময় দিন বিশ্রাম নিয়ে পুনরায় উজ্জীবিত হওয়ার জন্য।",
    color: "from-sky-400 to-primary",
  },
  {
    icon: Moon,
    title: "নিয়মিত পর্যাপ্ত ঘুম",
    desc: "ঘুমের সময় আমাদের শরীরের কোষগুলো দ্রুত মেরামত হয় এবং স্নায়ুর পুনর্গঠন ত্বরান্বিত হয়। তাই দৈনিক অন্তত ৭–৮ ঘণ্টা শান্ত ও গভীর ঘুম নিশ্চিত করুন।",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: HeartPulse,
    title: "নিয়মিত হালকা ব্যায়াম",
    desc: "থেরাপিস্টের নির্দেশ মতো জয়েন্ট ও পেশী সচল রাখতে হালকা স্ট্রেচিং বা অ্যাক্টিভ মুভমেন্ট করুন। দীর্ঘ সময় একস্থানে বসে বা শুয়ে থাকা এড়িয়ে চলুন।",
    color: "from-teal-400 to-emerald-500",
  },
  {
    icon: BrainCircuit,
    title: "মানসিকভাবে ইতিবাচক থাকা",
    desc: "জিবিএস-এ পক্ষাঘাতগ্রস্ত অবস্থায় মনের জোর সবচেয়ে বড় ওষুধ। সবসময় ভাবুন আপনি খুব দ্রুত সুস্থ হয়ে উঠছেন এবং ইতিবাচক চিন্তা দিয়ে বিষণ্ণতা দূর করুন।",
    color: "from-purple-400 to-pink-500",
  },
  {
    icon: Users,
    title: "পরিবারের সাপোর্ট নেওয়া",
    desc: "শারীরিক চলাফেরা বা ছোটখাটো কাজে সংকোচ না করে পরিবারের সাহায্য নিন। তাঁদের আন্তরিক পরিবেশ ও সঙ্গ আপনার রিকভারি গতি অনেক বাড়িয়ে দেবে।",
    color: "from-orange-400 to-amber-500",
  },
  {
    icon: HeartHandshake,
    title: "নিরাপদ চলাফেরা",
    desc: "পেশী পুরোপুরি শক্ত না হওয়া পর্যন্ত একা একা বা অসাবধানতাবশত হাঁটতে যাবেন না। পিচ্ছিল মেঝে বা বাথরুমে সব সময় ওয়াকার ব্যবহার বা কারও হাত ধরে চলুন।",
    color: "from-rose-400 to-red-500",
  },
];

export function LifestyleSection() {
  return (
    <section id="lifestyle" className="py-24 bg-linear-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Background soft lighting */}
      <div className="absolute left-1/4 top-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <SectionHeader
          badge="সুস্থ জীবনধারা"
          title="জীবনযাপন ও লাইফস্টাইল নির্দেশিকা"
          subtitle="জিবিএস রোগীদের দৈনন্দিন নিয়মতান্ত্রিক জীবনযাপন এবং সতর্ক চলাফেরা দ্রুত আরোগ্য লাভে সহায়ক ভূমিকা পালন করে।"
        />

        {/* Lifestyles Grid */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {LIFESTYLES.map((life, index) => {
            const Icon = life.icon;
            return (
              <StaggerItem key={index}>
                <Card className="h-full glass-card border border-primary/10 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1.5 relative overflow-hidden">
                  {/* Small decorative colored gradient bar on top */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${life.color}`} />
                  
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className={`p-3 rounded-2xl bg-linear-to-tr ${life.color} text-white shrink-0 shadow-md transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg md:text-xl font-bold leading-tight">
                      {life.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="-mt-2 text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {life.desc}
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

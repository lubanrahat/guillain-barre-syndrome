"use client";

import React from "react";
import { AlertOctagon, ShieldAlert, PhoneCall, HeartCrack, Ambulance } from "lucide-react";
import { SectionHeader } from "../section-header";
import { FadeIn, StaggerContainer, StaggerItem } from "../motion-wrapper";
import { Card, CardContent } from "../ui/card";

const EMERGENCY_STEPS = [
  {
    title: "১. অবিলম্বে হাসপাতালে নেওয়া",
    desc: "যদি রোগীর শ্বাস নিতে সমস্যা হয়, খাবার গিলতে কষ্ট হয়, অথবা হাত-পায়ের দুর্বলতা চোখের পলকে ছড়ায়, তবে দেরি না করে নিকটস্থ হাসপাতালে বা স্পেশালাইজড নিউরো হাসপাতালের ইমার্জেন্সিতে নিয়ে যান।",
    icon: Ambulance,
  },
  {
    title: "২. নিউরোলজিস্টের তত্ত্বাবধান",
    desc: "জিবিএস রোগের চিকিৎসা অত্যন্ত সূক্ষ্ম এবং স্নায়ু বিশেষজ্ঞের তত্ত্ববধানে করা আবশ্যক। হাসপাতালে ভর্তির সাথে সাথেই একজন অভিজ্ঞ নিউরোলজিস্টের (Neurology Specialist) অধীনে চিকিৎসা নিশ্চিত করুন।",
    icon: ShieldAlert,
  },
  {
    title: "৩. আইসিইউ (ICU) প্রস্তুতি রাখা",
    desc: "জিবিএস রোগীদের শ্বাসতন্ত্রের পেশী হঠাৎ পক্ষাঘাতগ্রস্ত হতে পারে। এতে রোগীর যেকোনো সময় শ্বাস বন্ধ হয়ে আসতে পারে। তাই হাসপাতালে ভর্তির সময় আইসিইউ এবং ভেন্টিলেটরের সুবিধা আছে কি না তা আগেভাগেই নিশ্চিত করুন।",
    icon: HeartCrack,
  },
  {
    title: "৪. দ্রুত চিকিৎসা শুরু করা",
    desc: "লক্ষণ দেখা দেওয়ার প্রথম ১ থেকে ২ সপ্তাহের মধ্যে চিকিৎসা (যেমন IVIG বা প্লাজমাফেরেসিস) শুরু করতে পারলে স্নায়ুর স্থায়ী ক্ষতি কমানো যায় এবং রোগী খুব দ্রুত সুস্থতার পথে এগিয়ে যান।",
    icon: AlertOctagon,
  },
];

export function EmergencySection() {
  return (
    <section id="emergency" className="py-20 bg-background relative overflow-hidden">
      {/* Background soft red blob */}
      <div className="absolute right-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-destructive/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <SectionHeader
          badge="জরুরি সতর্কতা"
          title="হঠাৎ জিবিএস লক্ষণ দেখা দিলে করণীয়"
          subtitle="জিবিএস একটি মেডিকেল ইমার্জেন্সি বা জরুরি অবস্থা। সময় নষ্ট না করে চিকিৎসকের পরামর্শ অনুযায়ী প্রয়োজনীয় ব্যবস্থা নিন।"
        />

        {/* Emergency Alert Pulsing Block */}
        <FadeIn direction="up" className="max-w-4xl mx-auto mb-16">
          <div className="relative p-6 md:p-8 rounded-3xl bg-destructive/5 border-2 border-destructive/20 shadow-xl overflow-hidden animate-pulse-glow">
            {/* Background design elements */}
            <div className="absolute -right-8 -top-8 w-24 h-24 bg-destructive/10 rounded-full blur-xl" />

            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Emergency Icon */}
              <div className="h-14 w-14 rounded-2xl bg-destructive text-white flex items-center justify-center shrink-0 shadow-lg shadow-destructive/20 animate-bounce">
                <AlertOctagon className="h-7 w-7" />
              </div>

              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-black text-destructive tracking-wide uppercase">
                  মেডিকেল ইমার্জেন্সি সতর্কতা!
                </h3>
                <p className="text-sm md:text-base font-bold text-foreground leading-relaxed">
                  জিবিএস-এর লক্ষণ দেখা দিলে বা অবশ ভাব হাত-পা থেকে বুকের দিকে উঠে আসলে এক ঘণ্টাও অবহেলা করবেন না। দ্রুত শ্বাস নিতে না পারা বা কার্ডিয়াক অ্যারেস্টের মতো মারাত্মক প্রাণঘাতী জটিলতা সৃষ্টি হতে পারে।
                </p>
                <div className="flex flex-wrap gap-4 items-center pt-2">
                  <a 
                    href="tel:999"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-destructive hover:bg-destructive/90 text-white font-bold text-sm shadow-md transition-all"
                  >
                    <PhoneCall className="h-4 w-4" />
                    জরুরি কল: ৯৯৯
                  </a>
                  <span className="text-xs md:text-sm text-muted-foreground font-semibold">
                    অথবা যোগাযোগ করুন নিকটস্থ সরকারি মেডিকেল বা নিউরো সায়েন্স ইনস্টিটিউটে।
                  </span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Four Emergency Steps */}
        <StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {EMERGENCY_STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={idx}>
                <Card className="h-full glass-card border border-destructive/10 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                  <CardContent className="pt-6 flex gap-4 items-start">
                    <div className="p-3 rounded-2xl bg-destructive/10 text-destructive border border-destructive/15 shrink-0 transition-transform group-hover:scale-110 duration-300">
                      <Icon className="h-5.5 w-5.5" />
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-bold text-foreground mb-1.5 group-hover:text-destructive transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
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

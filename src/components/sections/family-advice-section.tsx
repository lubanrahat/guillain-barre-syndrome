"use client";

import React from "react";
import { Heart, Smile, Users, HeartHandshake, Sparkles, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "../section-header";
import { StaggerContainer, StaggerItem, FadeIn } from "../motion-wrapper";
import { Card, CardContent } from "../ui/card";

const FAMILY_ADVICE = [
  {
    title: "রোগীকে পরম মানসিক সাহস দেওয়া",
    desc: "প্যারালাইসিস অবস্থায় রোগীরা অত্যন্ত ভেঙে পড়েন এবং সুস্থ হওয়া নিয়ে আশঙ্কায় ভোগেন। রোগীকে প্রতিনিয়ত বোঝান যে এটি সাময়িক এবং তিনি অবশ্যই আবার আগের মতো হেঁটে বেড়াবেন।",
    icon: Smile,
    color: "from-pink-500 to-rose-600 shadow-rose-500/10",
  },
  {
    title: "চরম ধৈর্য ধারণ করা",
    desc: "জিবিএস-এর রিকভারি প্রসেস খুবই ধীরগতির। প্রতিদিনের সামান্য অগ্রগতিতেও আনন্দ প্রকাশ করুন এবং কোনো দিন ক্লান্তি বা বিরক্তি প্রকাশ করে রোগীর মন ভেঙে দেবেন না।",
    icon: Heart,
    color: "from-purple-500 to-indigo-600 shadow-indigo-500/10",
  },
  {
    title: "হাঁটাচলায় পরম যত্ন সহকারে সাহায্য",
    desc: "হাত-পায়ের শক্তি কম থাকায় রোগী যেন পড়ে না যান সেদিকে কঠোর নজর রাখুন। থেরাপি সেশন ও বাথরুমে যাওয়ার সময় ছায়ার মতো পাশে থেকে নিরাপদে সাহায্য করুন।",
    icon: HeartHandshake,
    color: "from-sky-500 to-blue-600 shadow-blue-500/10",
  },
  {
    title: "নিয়মিত থেরাপি ও রুটিন নিশ্চিতকরণ",
    desc: "ফিজিওথেরাপিস্টের শেখানো সাধারণ ব্যায়ামগুলো বাসায় দিনে ৩-৪ বার নিয়মিত করান। থেরাপি সেশনগুলোর ডেট বা টাইমিং যেন কোনো অবস্থাতেই মিস না হয় তা খেয়াল রাখুন।",
    icon: CheckCircle2,
    color: "from-teal-500 to-emerald-600 shadow-emerald-500/10",
  },
  {
    title: "বাসায় অত্যন্ত ইতিবাচক পরিবেশ তৈরি",
    desc: "রোগীর রুমটি পরিষ্কার-পরিচ্ছন্ন, আলো-বাতাসপূর্ণ রাখুন। রুমে আনন্দদায়ক বা ইতিবাচক আলোচনা করুন এবং যেকোনো হতাশাজনক কথাবার্তা বা ঝগড়াঝাঁটি কঠোরভাবে এড়িয়ে চলুন।",
    icon: Users,
    color: "from-orange-500 to-amber-600 shadow-amber-500/10",
  },
];

export function FamilyAdviceSection() {
  return (
    <section id="family-advice" className="py-24 bg-linear-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Background soft lavender highlight */}
      <div className="absolute right-1/4 bottom-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <SectionHeader
          badge="পারিবারিক গুরুত্ব"
          title="পরিবারের সদস্যদের জন্য কিছু বিশেষ পরামর্শ"
          subtitle="জিবিএস রোগীর সুস্থ হয়ে ওঠার লড়াইয়ে ডাক্তারের চিকিৎসার চেয়েও পরিবারের সদস্যদের পরম ভালোবাসা, ধৈর্য ও মানসিক সাপোর্ট অনেক বেশি গুরুত্বপূর্ণ।"
        />

        <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-center">
          {/* Left Panel: Warm Supportive Message Banner */}
          <FadeIn direction="left" className="lg:col-span-5 space-y-6">
            <div className="p-6 md:p-8 rounded-3xl border border-purple-500/20 bg-purple-500/5 space-y-4 shadow-md relative overflow-hidden">
              {/* Background sparkles */}
              <div className="absolute -right-6 -top-6 w-20 h-20 bg-purple-500/10 rounded-full blur-xl" />
              
              <div className="h-12 w-12 rounded-2xl bg-purple-500 text-white flex items-center justify-center shrink-0 shadow-md">
                <Heart className="h-6 w-6 animate-pulse" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-extrabold text-foreground">
                ভালোবাসাই অন্যতম শ্রেষ্ঠ ওষুধ
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                একজন মানুষের চার হাত-পা হঠাৎ সম্পূর্ণ প্যারালাইজড হয়ে যাওয়া যে কতটা মানসিক যন্ত্রণাদায়ক তা শুধু ভুক্তভোগীই বোঝেন। এই কঠিন সময় যদি পরিবারের মানুষগুলো শক্ত হয়ে পাশে দাঁড়ায় এবং রোগীকে সাহস দেয়, তবে রিকভারি অর্ধেক সম্পন্ন হয়ে যায়। আপনার একটু ধৈর্য ও হাসিমুখ একজন রোগীকে নতুন জীবন এনে দিতে পারে।
              </p>
              
              <div className="pt-2 flex items-center gap-2 text-xs text-purple-600 font-bold">
                <Sparkles className="h-4 w-4 text-purple-500 animate-spin" />
                আপনার আন্তরিক সেবাই এনে দেবে সুস্থতা
              </div>
            </div>
          </FadeIn>

          {/* Right Panel: Advice Cards */}
          <div className="lg:col-span-7">
            <StaggerContainer className="grid gap-4">
              {FAMILY_ADVICE.map((advice, idx) => {
                const Icon = advice.icon;
                return (
                  <StaggerItem key={idx}>
                    <Card className="glass-card border border-primary/10 hover:shadow-lg transition-all duration-300 group hover:-translate-y-0.5">
                      <CardContent className="p-5 flex gap-4 items-center">
                        {/* Bullet Icon */}
                        <div className={`h-11 w-11 rounded-2xl bg-linear-to-tr ${advice.color} text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 duration-300`}>
                          <Icon className="h-5.5 w-5.5" />
                        </div>
                        
                        <div>
                          <h4 className="text-base font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                            {advice.title}
                          </h4>
                          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                            {advice.desc}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

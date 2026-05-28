"use client";

import React from "react";
import { AlertCircle, HeartPulse, Sparkles, BookOpen } from "lucide-react";

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-secondary/80 border-t border-primary/10 pt-16 pb-8 overflow-hidden backdrop-blur-md">
      {/* Background decoration */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-12 gap-8 mb-12">
          {/* Logo & Slogan info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-xl bg-linear-to-tr from-primary to-accent text-white flex items-center justify-center shadow-md">
                <HeartPulse className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-foreground flex items-center gap-1.5">
                  জিবিএস সচেতনতা
                  <Sparkles className="h-3.5 w-3.5 text-accent animate-pulse" />
                </h3>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">
                  Guillain-Barré Syndrome
                </p>
              </div>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              এই ওয়েবসাইটটির লক্ষ্য হলো গিলেন-বারে সিনড্রোম (GBS) সম্পর্কে সঠিক বাংলা তথ্য ছড়িয়ে দেওয়া, রোগীদের রিকভারিতে দিকনির্দেশনা দেওয়া এবং তাঁদের পরিবারকে মানসিকভাবে সাহায্য ও সাহস প্রদান করা।
            </p>
          </div>

          {/* Clinical Data Sources info */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs md:text-sm font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="h-4 w-4 text-primary shrink-0" />
              নির্ভরযোগ্য তথ্যসূত্র
            </h4>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              <li>• বিশ্ব স্বাস্থ্য সংস্থা (WHO)</li>
              <li>• NORD (Rare Diseases Organization)</li>
              <li>• Mayo Clinic (USA)</li>
              <li>• Oxford Brain Journal</li>
              <li>• Lancet Neurology</li>
              <li>• International GBS Study (IGOS)</li>
            </ul>
          </div>

          {/* Emergency warning block */}
          <div className="md:col-span-4 space-y-3">
            <div className="p-4 rounded-2xl bg-destructive/5 border border-destructive/20 text-destructive text-xs space-y-2">
              <div className="flex items-center gap-2 font-extrabold uppercase tracking-wide">
                <AlertCircle className="h-4.5 w-4.5 shrink-0" />
                জরুরি নোটিশ / ডিসক্লেমার
              </div>
              <p className="leading-relaxed font-medium">
                এই ওয়েবসাইটে প্রকাশিত তথ্য ও পরামর্শসমূহ শুধুমাত্র সচেতনতা বৃদ্ধির উদ্দেশ্যে তৈরি। এটি কোনোভাবেই একজন বিশেষজ্ঞ নিউরোলজিস্টের সরাসরি প্রেসক্রিপশন বা চিকিৎসার বিকল্প নয়।
              </p>
              <p className="font-black pt-1 border-t border-destructive/10">
                “যেকোনো চিকিৎসার সিদ্ধান্ত নেওয়ার আগে অবশ্যই একজন বিশেষজ্ঞ স্নায়ুরোগ ডাক্তারের সরাসরি পরামর্শ নিন।”
              </p>
            </div>
          </div>
        </div>

        {/* Bottom border & copyrights */}
        <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-semibold text-center">
          <p>© {currentYear} গিলেন-বারে সিন্ড্রোম সচেতনতা উদ্যোগ। সর্বস্বত্ব সংরক্ষিত।</p>
          <div className="flex gap-4">
            <a href="#hero" className="hover:text-primary transition-colors">হোম</a>
            <a href="#what-is-gbs" className="hover:text-primary transition-colors">জিবিএস কী?</a>
            <a href="#symptoms" className="hover:text-primary transition-colors">লক্ষণ</a>
            <a href="#emergency" className="hover:text-primary transition-colors">জরুরি হেল্প</a>
            <a href="#faq" className="hover:text-primary transition-colors">প্রশ্নোত্তর</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

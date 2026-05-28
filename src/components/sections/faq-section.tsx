"use client";

import React from "react";
import { HelpCircle, Sparkles } from "lucide-react";
import { SectionHeader } from "../section-header";
import { FadeIn } from "../motion-wrapper";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

const FAQS = [
  {
    question: "GBS কি কোনো ছোঁয়াচে রোগ?",
    answer: "না, জিবিএস (GBS) সম্পূর্ণ অব্যাক্টেরিয়াল বা অটোইমিউন রোগ। এটি কোনো ছোঁয়াচে রোগ নয়, অর্থাৎ আক্রান্ত ব্যক্তির সাথে কথা বললে, মেলামেশা করলে বা তাঁর ব্যবহৃত পোশাক স্পর্শ করলে এটি অন্য কারও শরীরে ছড়ায় না।",
  },
  {
    question: "জিবিএস আক্রান্ত রোগী কি সম্পূর্ণ সুস্থ হতে পারেন?",
    answer: "হ্যাঁ, জিবিএস আক্রান্ত প্রায় ৬০% থেকে ৮০% রোগী সঠিক চিকিৎসা এবং নিবিড় ফিজিওথেরাপির মাধ্যমে ১ বছরের মধ্যে সম্পূর্ণ সুস্থ ও স্বাভাবিক জীবনে ফিরে যান। তবে রিকভারি প্রসেস বা আরোগ্য লাভ সম্পন্ন হতে কিছুটা দীর্ঘ সময় (৩–৬ মাস বা তার বেশি) ধৈর্য ধরতে হয়।",
  },
  {
    question: "জিবিএস রোগের চিকিৎসা করতে কতদিন সময় লাগে?",
    answer: "হাসপাতালে ভর্তি এবং মূল চিকিৎসা (যেমন IVIG বা প্লাজমা এক্সচেঞ্জ সেশন) সম্পন্ন হতে সাধারণ ২ থেকে ৪ সপ্তাহ সময় লাগে। তবে হাসপাতাল থেকে ছাড়পত্র পাওয়ার পর হাত-পায়ের শক্তি স্বাভাবিক পর্যায়ে ফিরিয়ে আনতে বাসায় বা পুনর্বাসন কেন্দ্রে ৩ থেকে ৬ মাস মেয়াদী দীর্ঘ ও নিয়মিত ফিজিওথেরাপি চালিয়ে যেতে হয়।",
  },
  {
    question: "জিবিএস রোগ হলে ICU কেন প্রয়োজন হতে পারে?",
    answer: "জিবিএস-এ আক্রান্ত প্রায় ২০% থেকে ৩০% রোগীর পক্ষাঘাত বা অবশ ভাব বুকের খাঁচার শ্বাসপ্রশ্বাসের পেশীগুলোকে আক্রমণ করে। এর ফলে রোগী তীব্র শ্বাসকষ্টে ভোগেন এবং নিজে নিজে অক্সিজেন নিতে পারেন না। এমতাবস্থায় রোগীর জীবন বাঁচাতে ভেন্টিলেটর বা কৃত্রিম শ্বাসপ্রশ্বাস ব্যবস্থা সম্বলিত নিবিড় পর্যবেক্ষণ কেন্দ্র (ICU) অপরিহার্য হয়ে পড়ে।",
  },
  {
    question: "ফিজিওথেরাপি কতদিন করতে হয়?",
    answer: "এটি রোগীর স্নায়ুর ক্ষতির মাত্রা এবং পেশীর বর্তমান শক্তির ওপর নির্ভর করে। সাধারণত ৩ থেকে ৬ মাস নিয়মিত দৈনিক থেরাপি প্রয়োজন হয়। তবে গুরুতর আক্রান্ত রোগীদের ক্ষেত্রে সম্পূর্ণ স্বাভাবিক অবস্থায় ফিরে আসতে ১ থেকে ২ বছরও নিয়মিত হালকা ব্যায়াম ও পুনর্বাসন কার্যক্রম চালানো লাগতে পারে।",
  },
  {
    question: "ইনফ্লুয়েঞ্জা বা জিকা ভাইরাসের ভ্যাকসিনের সাথে কি জিবিএস-এর সম্পর্ক আছে?",
    answer: "খুবই সামান্য। বিভিন্ন ক্লিনিক্যাল সমীক্ষায় দেখা গেছে যে ভ্যাকসিন নেওয়ার পর জিবিএস হওয়ার সম্ভাবনা অত্যন্ত বিরল (প্রতি ১০ লাখে মাত্র ১ বা ২টি কেস)। ভ্যাকসিনের চেয়ে সাধারণত সাধারণ ফ্লু বা ডায়রিয়া সংক্রমণে আক্রান্ত হলে জিবিএস হওয়ার ঝুঁকি বহুগুণ বেশি থাকে।",
  },
  {
    question: "এটি কি শিশুদেরও হতে পারে?",
    answer: "হ্যাঁ, জিবিএস যেকোনো বয়সের পুরুষ বা নারী এবং শিশুদেরও হতে পারে। তবে বয়স্ক ব্যক্তি এবং পুরুষদের মধ্যে এই রোগের প্রকোপ তুলনামূলক কিছুটা বেশি দেখা যায়।",
  },
  {
    question: "একবার সুস্থ হওয়ার পর পুনরায় কি জিবিএস হওয়ার সম্ভাবনা আছে?",
    answer: "জিবিএস সাধারণত জীবনে একবারই হয়ে থাকে। সুস্থ হওয়ার পর পুনরায় জিবিএস হওয়ার সম্ভাবনা অত্যন্ত বিরল (মাত্র ২% থেকে ৫% কেস)। তাই একবার সুস্থ হয়ে উঠলে আতঙ্কিত হওয়ার কোনো প্রয়োজন নেই।",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-background relative overflow-hidden">
      {/* Background soft decoration circle */}
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section Header */}
        <SectionHeader
          badge="সাধারণ জিজ্ঞাসা ও উত্তর"
          title="জিবিএস নিয়ে সচরাচর জিজ্ঞাসিত প্রশ্নসমূহ"
          subtitle="রোগী ও তাঁদের স্বজনদের মনে সচরাচর ঘুরপাক খাওয়া গুরুত্বপূর্ণ কিছু প্রশ্নের বৈজ্ঞানিক ও বাস্তবসম্মত উত্তর।"
        />

        {/* Accordion List */}
        <FadeIn direction="up" className="glass-card rounded-3xl p-6 md:p-8 border border-primary/10 shadow-lg">
          <div className="flex items-center gap-2 mb-6 text-primary">
            <HelpCircle className="h-6 w-6 animate-pulse" />
            <span className="font-extrabold text-lg text-foreground">জিবিএস সম্পর্কে বিস্তারিত প্রশ্নোত্তর</span>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {FAQS.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="border border-primary/10 rounded-2xl px-4 py-1 hover:bg-secondary/40 transition-all duration-200"
              >
                <AccordionTrigger className="text-sm md:text-base font-bold text-foreground hover:no-underline text-left cursor-pointer group-aria-expanded/accordion-trigger:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-xs md:text-sm text-muted-foreground leading-relaxed pt-2 pb-4 border-t border-primary/5 mt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8 p-4 rounded-2xl bg-primary/5 border border-primary/10 text-primary text-xs md:text-sm flex gap-3 items-center justify-center">
            <Sparkles className="h-5 w-5 text-accent animate-bounce shrink-0" />
            <p className="font-semibold text-center text-foreground">
              আপনার মনে অন্য কোনো প্রশ্ন থাকলে অনুগ্রহ করে কমেন্ট করুন অথবা সরাসরি স্নায়ু বিশেষজ্ঞ ডাক্তারের পরামর্শ নিন।
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

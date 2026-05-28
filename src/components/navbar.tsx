"use client";

import React, { useState, useEffect } from "react";
import { Menu, HeartPulse, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from "./ui/sheet";
import { ThemeToggle } from "./theme-toggle";
import { useActiveSection } from "@/hooks/use-active-section";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { id: "hero", label: "হোম" },
  { id: "what-is-gbs", label: "জিবিএস কী?" },
  { id: "symptoms", label: "লক্ষণসমূহ" },
  { id: "emergency", label: "জরুরি করণীয়" },
  { id: "treatment", label: "চিকিৎসা" },
  { id: "physiotherapy", label: "ফিজিওথেরাপি" },
  { id: "lifestyle", label: "জীবনযাপন" },
  { id: "diet", label: "খাদ্যাভ্যাস" },
  { id: "recovery", label: "রিকভারি" },
  { id: "research", label: "গবেষণা" },
  { id: "faq", label: "প্রশ্নোত্তর" },
];

export function Navbar() {
  const { y: scrollY } = useScrollPosition();
  const isScrolled = scrollY > 20;

  const sectionIds = NAV_ITEMS.map((item) => item.id);
  const activeSection = useActiveSection(sectionIds);

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80; // navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass shadow-md py-3 border-b border-primary/10"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={() => handleNavClick("hero")}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-tr from-primary to-accent text-white shadow-md shadow-primary/20 group-hover:scale-105 transition-transform">
            <HeartPulse className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
            </span>
          </div>
          <div>
            <h1 className="text-base md:text-xl font-bold tracking-tight bg-linear-to-r from-primary to-primary-foreground bg-clip-text text-foreground flex items-center gap-1.5">
              জিবিএস সচেতনতা
              <Sparkles className="h-3.5 w-3.5 text-accent animate-pulse" />
            </h1>
            <p className="hidden sm:block text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">
              Guillain-Barré Syndrome
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeSection === item.id || (item.id === "hero" && !activeSection)
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              {item.label}
              {(activeSection === item.id || (item.id === "hero" && !activeSection)) && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-2 right-2 h-[2px] bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Action Button & Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button
            size="sm"
            onClick={() => handleNavClick("emergency")}
            className="cursor-pointer bg-destructive hover:bg-destructive/95 text-white font-semibold shadow-md shadow-destructive/20 hover:scale-102 transition-transform rounded-xl"
          >
            জরুরি হেল্প
          </Button>
        </div>

        {/* Mobile Nav Button */}
        <div className="xl:hidden flex items-center gap-2">
          <ThemeToggle />
          
          <Button
            size="sm"
            onClick={() => handleNavClick("emergency")}
            className="hidden sm:inline-flex cursor-pointer bg-destructive hover:bg-destructive/95 text-white font-semibold shadow-md shadow-destructive/20 text-xs px-2.5 h-8 rounded-lg"
          >
            জরুরি হেল্প
          </Button>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9 cursor-pointer rounded-xl border border-border/50 glass">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] p-6 glass border-l border-primary/10 flex flex-col justify-between">
              <div>
                <SheetHeader className="text-left pb-4 border-b border-primary/10">
                  <SheetTitle className="flex items-center gap-2 text-primary font-bold">
                    <HeartPulse className="h-5 w-5 animate-pulse" />
                    জিবিএস সচেতনতা
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-1.5 mt-6">
                  {NAV_ITEMS.map((item) => (
                    <SheetClose asChild key={item.id}>
                      <button
                        onClick={() => handleNavClick(item.id)}
                        className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all cursor-pointer ${
                          activeSection === item.id || (item.id === "hero" && !activeSection)
                            ? "bg-primary/10 text-primary font-semibold border-l-4 border-primary pl-3"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                        }`}
                      >
                        {item.label}
                      </button>
                    </SheetClose>
                  ))}
                </div>
              </div>

              {/* Mobile Drawer Footer with Emergency Call */}
              <div className="pt-4 border-t border-primary/10 flex flex-col gap-3">
                <SheetClose asChild>
                  <Button
                    onClick={() => handleNavClick("emergency")}
                    className="w-full cursor-pointer bg-destructive hover:bg-destructive/95 text-white font-semibold shadow-lg shadow-destructive/20 py-5 rounded-xl text-sm"
                  >
                    জরুরি হেল্পলাইন কল করুন
                  </Button>
                </SheetClose>
                <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest font-semibold">
                  Guillain-Barré Syndrome Guide
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

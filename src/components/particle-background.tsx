"use client";

import * as React from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export function ParticleBackground() {
  const isMobile = useIsMobile();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Ambient glowing radial orbs */}
      <div 
        className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary/5 dark:bg-primary/10 blur-[100px] animate-pulse" 
        style={{ animationDuration: "8s" }} 
      />
      <div 
        className="absolute bottom-[20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-indigo-500/5 dark:bg-indigo-500/10 blur-[130px] animate-pulse" 
        style={{ animationDuration: "12s", animationDelay: "2s" }} 
      />

      {/* Floating accent elements (desktop only to preserve mobile performance) */}
      {!isMobile && (
        <>
          <div 
            className="absolute top-[25%] right-[15%] w-48 h-48 rounded-full bg-cyan-400/5 blur-[80px] animate-float-slow" 
            style={{ animationDuration: "10s" }} 
          />
          <div 
            className="absolute bottom-[35%] left-[10%] w-72 h-72 rounded-full bg-violet-400/5 blur-[100px] animate-float-medium" 
            style={{ animationDuration: "14s" }} 
          />
        </>
      )}
    </div>
  );
}

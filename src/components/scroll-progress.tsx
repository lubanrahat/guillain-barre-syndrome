"use client";

import * as React from "react";
import { useScrollPosition } from "@/hooks/use-scroll-position";

export function ScrollProgress() {
  const { progress } = useScrollPosition();

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] bg-transparent z-[100] pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-primary via-indigo-500 to-cyan-400 transition-all duration-75 ease-out rounded-r-full shadow-[0_1px_10px_rgba(99,102,241,0.5)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

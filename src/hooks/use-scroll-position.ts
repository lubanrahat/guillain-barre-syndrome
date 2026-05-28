"use client";

import { useEffect, useState } from "react";

export function useScrollPosition() {
  const [scrollData, setScrollData] = useState({
    y: 0,
    progress: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = scrollHeight > 0 ? (currentScroll / scrollHeight) * 100 : 0;

      setScrollData({
        y: currentScroll,
        progress: progress,
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger initially
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollData;
}

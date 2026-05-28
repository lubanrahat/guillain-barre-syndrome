"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Activity, Heart, ShieldPlus, Sparkles } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function FloatingElements() {
  const isMobile = useIsMobile();
  const reducedMotion = useReducedMotion();

  if (reducedMotion) return null;

  const iconList = [
    { icon: Activity, size: 24, top: "15%", left: "8%", delay: 0, duration: 8, color: "text-primary/10 dark:text-primary/20" },
    { icon: Heart, size: 20, top: "45%", left: "90%", delay: 1, duration: 10, color: "text-rose-500/10 dark:text-rose-500/20" },
    { icon: ShieldPlus, size: 28, top: "70%", left: "12%", delay: 2, duration: 12, color: "text-emerald-500/10 dark:text-emerald-500/20" },
    { icon: Sparkles, size: 16, top: "85%", left: "82%", delay: 0.5, duration: 9, color: "text-amber-500/10 dark:text-amber-500/20" },
  ];

  // Restrict elements on mobile viewports for smooth framerates
  const visibleIcons = isMobile ? iconList.slice(0, 2) : iconList;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {visibleIcons.map((item, idx) => {
        const IconComponent = item.icon;
        return (
          <motion.div
            key={idx}
            className={`absolute ${item.color}`}
            style={{
              top: item.top,
              left: item.left,
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            }}
          >
            <IconComponent size={item.size} />
          </motion.div>
        );
      })}
    </div>
  );
}

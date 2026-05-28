"use client";

import React from "react";
import { FadeIn } from "./motion-wrapper";
import { Badge } from "./ui/badge";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  center = true,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 flex flex-col ${center ? "items-center text-center" : "items-start text-left"}`}>
      <FadeIn direction="up" delay={0.05} className="flex flex-col items-center">
        {badge && (
          <Badge variant="outline" className="mb-3 px-3 py-1 text-xs md:text-sm font-medium tracking-wide border-primary/30 text-primary bg-primary/5 rounded-full">
            {badge}
          </Badge>
        )}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
          {title}
        </h2>
        {/* Decorative divider */}
        <div className="relative mt-4 mb-3 h-1 w-24 overflow-hidden rounded-full bg-primary/10">
          <div className="absolute left-0 top-0 h-full w-12 animate-[float_3s_ease-in-out_infinite] rounded-full bg-linear-to-r from-primary to-accent" style={{ animationDuration: '3s', animationIterationCount: 'infinite' }} />
        </div>
        {subtitle && (
          <p className="mt-2 max-w-2xl text-base md:text-lg text-muted-foreground font-normal leading-relaxed">
            {subtitle}
          </p>
        )}
      </FadeIn>
    </div>
  );
}

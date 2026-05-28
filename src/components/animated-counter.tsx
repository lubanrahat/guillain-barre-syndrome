"use client";

import * as React from "react";
import { useInView, animate } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  formatter?: (val: string) => string;
}

export function AnimatedCounter({
  value,
  duration = 2,
  suffix = "",
  prefix = "",
  decimals = 0,
  formatter,
}: AnimatedCounterProps) {
  const nodeRef = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  React.useEffect(() => {
    if (!inView || !nodeRef.current) return;

    const node = nodeRef.current;

    const controls = animate(0, value, {
      duration: duration,
      ease: "easeOut",
      onUpdate(latest) {
        const formattedVal = latest.toFixed(decimals);
        const output = prefix + (formatter ? formatter(formattedVal) : formattedVal) + suffix;
        node.textContent = output;
      },
    });

    return () => controls.stop();
  }, [inView, value, duration, suffix, prefix, decimals, formatter]);

  const initialVal = (0).toFixed(decimals);
  const initialOutput = prefix + (formatter ? formatter(initialVal) : initialVal) + suffix;

  return <span ref={nodeRef} className="tabular-nums">{initialOutput}</span>;
}

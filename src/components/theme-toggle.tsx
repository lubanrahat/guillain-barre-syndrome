"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="w-10 h-10 rounded-xl glass border-border/50" disabled>
        <span className="sr-only">Toggle theme</span>
        <div className="w-4 h-4 rounded-full bg-muted animate-pulse" />
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-10 h-10 rounded-xl glass hover:bg-accent/20 border-border/50 overflow-hidden flex items-center justify-center cursor-pointer transition-colors shadow-sm active:scale-95"
      aria-label="Toggle Theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? "dark" : "light"}
          initial={{ y: -20, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 20, opacity: 0, rotate: 45 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="text-foreground"
        >
          {isDark ? (
            <Sun className="h-[1.2rem] w-[1.2rem] text-amber-400 fill-amber-400/20" />
          ) : (
            <Moon className="h-[1.2rem] w-[1.2rem] text-indigo-600 fill-indigo-600/10" />
          )}
        </motion.div>
      </AnimatePresence>
    </Button>
  );
}

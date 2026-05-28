"use client";

import * as React from "react";
import { ArrowUp } from "lucide-react";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function BackToTop() {
  const { y } = useScrollPosition();
  const show = y > 400;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-6 right-6 z-40 pointer-events-auto"
        >
          <Button
            size="icon"
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full cursor-pointer bg-primary hover:bg-primary/95 text-white shadow-xl shadow-primary/20 border border-primary/10 flex items-center justify-center transition-all active:scale-95"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5.5 w-5.5" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

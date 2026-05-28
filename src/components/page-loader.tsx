"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity } from "lucide-react";

export function PageLoader() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 950);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } }}
          className="fixed inset-0 bg-background z-[9999] flex flex-col items-center justify-center pointer-events-auto"
        >
          <div className="relative flex flex-col items-center space-y-4">
            {/* Pulsing ring glow */}
            <div className="relative flex items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.15, 0.4, 0.15],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute w-24 h-24 rounded-full bg-primary/20 blur-md"
              />
              <motion.div
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.05, 0.2, 0.05],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
                className="absolute w-36 h-36 rounded-full bg-primary/10 blur-lg"
              />

              <div className="relative w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-lg glass">
                <motion.div
                  animate={{
                    scale: [1, 1.15, 0.95, 1.15, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Activity className="h-8 w-8 text-primary" />
                </motion.div>
              </div>
            </div>

            <div className="text-center space-y-1">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-sans font-bold text-lg md:text-xl text-foreground tracking-wide"
              >
                গিলেন-বারে সিনড্রোম (GBS)
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 0.4 }}
                className="text-xs md:text-sm text-muted-foreground font-medium"
              >
                সচেতনতা ও পুনরুদ্ধার গাইড লোড হচ্ছে...
              </motion.p>
            </div>

            {/* Micro loading progress indicator */}
            <div className="w-40 h-[2px] bg-muted rounded-full overflow-hidden relative">
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { useState, useEffect } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);
  const [pendingTheme, setPendingTheme] = useState<"dark" | "light" | null>(null);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setPendingTheme(newTheme);
    setIsAnimating(true);
  };

  useEffect(() => {
    if (isAnimating && pendingTheme) {
      // Switch theme midway through animation
      const themeTimer = setTimeout(() => {
        setTheme(pendingTheme);
      }, 300);

      // Remove overlay after animation completes
      const resetTimer = setTimeout(() => {
        setIsAnimating(false);
        setPendingTheme(null);
      }, 300);

      return () => {
        clearTimeout(themeTimer);
        clearTimeout(resetTimer);
      };
    }
  }, [isAnimating, pendingTheme, setTheme]);

  return (
    <>
      {/* Circular theme transition overlay */}
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            key="theme-overlay"
            initial={{ clipPath: "circle(0% at calc(100% - 44px) 44px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 44px) 44px)" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], exit: { duration: 0.1 } }}
            className={`fixed inset-0 z-40 pointer-events-none ${
              pendingTheme === "light" ? "bg-[#fafafa]" : "bg-[#0a0a0a]"
            }`}
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed top-6 right-6 z-50"
      >
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          disabled={isAnimating}
          className="relative h-10 w-10 rounded-full border-border bg-card/80 backdrop-blur-sm hover:bg-card transition-colors"
        >
          <AnimatePresence mode="wait" initial={false}>
            {theme === "dark" ? (
              <motion.div
                key="sun"
                initial={{ scale: 0, rotate: -90, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                exit={{ scale: 0, rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Sun className="h-5 w-5 text-foreground" />
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{ scale: 0, rotate: 90, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                exit={{ scale: 0, rotate: -90, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Moon className="h-5 w-5 text-foreground" />
              </motion.div>
            )}
          </AnimatePresence>
          <span className="sr-only">Toggle theme</span>
        </Button>
      </motion.div>
    </>
  );
}

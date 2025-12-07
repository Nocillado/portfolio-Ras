import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithSkeleton } from "./ui/image-skeleton";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const roles = ["Developer", "Designer"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center px-6 md:px-12 pt-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-mono text-5xl sm:text-6xl md:text-8xl lg:text-[120px] font-medium leading-none tracking-tight whitespace-nowrap"
            >
              Front-End
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 text-muted-foreground max-w-md text-sm sm:text-base leading-relaxed"
            >
              I'm a junior developer who loves creating <span className="text-foreground italic">beautiful, intuitive</span> web applications.
            </motion.p>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center gap-4"
            >
              <Button variant="hero" size="lg" className="group" asChild>
                <a href="#projects">
                  Projects
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-2"
            >
              <div className="h-[1.5em] text-5xl sm:text-6xl md:text-8xl lg:text-[120px] overflow-hidden relative pb-4">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[currentIndex]}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="font-mono font-medium leading-none tracking-tight"
                  >
                    {roles[currentIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Project Cards Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {/* Montclair */}
          <a
            href="https://montclair-ras.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="aspect-[4/3] rounded-2xl bg-card border border-border hover:border-muted-foreground/30 transition-all duration-300 relative overflow-hidden group hover:scale-[1.02] hover:shadow-lg"
          >
            <ImageWithSkeleton src="/Projects/1.png" alt="Montclair" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="font-mono text-sm text-white bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">Montclair</span>
            </div>
          </a>

          {/* Steel Stallion */}
          <a
            href="https://steelstallion.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="aspect-[4/3] rounded-2xl bg-card border border-border hover:border-muted-foreground/30 transition-all duration-300 relative overflow-hidden group hover:scale-[1.02] hover:shadow-lg"
          >
            <ImageWithSkeleton src="/Projects/2.png" alt="Steel Stallion" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="font-mono text-sm text-white bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">Steel Stallion</span>
            </div>
          </a>

          {/* View All Projects */}
          <a
            href="#projects"
            className="aspect-[4/3] rounded-2xl bg-card border border-border hover:border-muted-foreground/30 transition-all duration-300 relative overflow-hidden group hover:scale-[1.02] hover:shadow-lg hover:bg-muted/50"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">View All</span>
            </div>
            <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full border border-border bg-background/50 backdrop-blur-sm flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-300 group-hover:scale-110">
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </a>
        </motion.div>
      </div>

      {/* Decorative arc */}
      <div className="arc-decoration w-[600px] h-[600px] -bottom-[300px] -left-[300px] opacity-30" />
    </section>
  );
};

export default HeroSection;

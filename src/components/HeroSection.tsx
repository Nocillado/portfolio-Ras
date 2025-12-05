import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center px-6 md:px-12 pt-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-mono text-5xl md:text-7xl lg:text-8xl font-medium leading-none tracking-tight"
            >
              Full-stack
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-muted-foreground max-w-md text-base leading-relaxed"
            >
              My goal is to <span className="text-foreground italic">write maintainable, clean</span> and{" "}
              <span className="text-foreground italic">understandable code</span> to process development was enjoyable
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

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-mono text-5xl md:text-7xl lg:text-8xl font-medium leading-none tracking-tight"
            >
              Developer
            </motion.h2>
          </div>
        </div>

        {/* Project Cards Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="aspect-[4/3] rounded-2xl bg-card border border-border hover:border-muted-foreground/30 transition-colors duration-300 relative overflow-hidden group"
            >
              {i === 3 && (
                <button className="absolute bottom-4 right-4 w-12 h-12 rounded-full border border-border bg-background/50 backdrop-blur-sm flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                  <ArrowRight className="w-5 h-5" />
                </button>
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Decorative arc */}
      <div className="arc-decoration w-[600px] h-[600px] -bottom-[300px] -left-[300px] opacity-30" />
    </section>
  );
};

export default HeroSection;

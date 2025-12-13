import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { MagneticButton } from "./ui/magnetic-button";
import { ImageWithSkeleton } from "./ui/image-skeleton";
import { useState, useEffect } from "react";

const heroProjects = [
  { title: "Resident Evil 8", image: "/Projects/3.png", link: "https://resident-evil-8-one.vercel.app/" },
  { title: "Montclair", image: "/Projects/1.png", link: "https://montclair-jet.vercel.app/" },
  { title: "Steel Stallion", image: "/Projects/2.png", link: "https://steel-stallion.vercel.app/" },
  { title: "Marilag", image: "/Projects/4.png", link: "https://marilag-eta.vercel.app/" },
  { title: "Brussels Brewery", image: "/Projects/5 .png", link: "https://brussels-brewery.vercel.app/" },
];

const HeroSection = () => {
  const roles = ["Developer", "Designer"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projectPage, setProjectPage] = useState(0);

  const projectsPerPage = 3;
  const totalPages = Math.ceil(heroProjects.length / projectsPerPage);
  const visibleProjects = heroProjects.slice(
    projectPage * projectsPerPage,
    projectPage * projectsPerPage + projectsPerPage
  );

  const nextPage = () => {
    setProjectPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setProjectPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

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

            {/* Developer/Designer - shown on mobile below Front-End */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex lg:hidden items-center gap-2 mt-2"
            >
              <div className="h-[1.5em] text-5xl sm:text-6xl md:text-8xl overflow-hidden relative pb-4">
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

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 text-muted-foreground max-w-md text-sm sm:text-base leading-relaxed"
            >
              I'm a junior developer who loves creating <span className="text-foreground italic">beautiful, intuitive</span> web applications.
            </motion.p>
          </div>

          <div className="hidden lg:flex flex-col items-end gap-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center gap-4"
            >
              <MagneticButton variant="hero" size="lg" className="group" asChild>
                <a href="#projects">
                  Projects
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </MagneticButton>
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

          {/* Projects button - shown on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex lg:hidden items-center gap-4"
          >
            <MagneticButton variant="hero" size="lg" className="group" asChild>
              <a href="#projects">
                Projects
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Decorative arc - behind content */}
        <div className="absolute pointer-events-none w-[600px] h-[600px] -bottom-[300px] -left-[300px] opacity-30 border border-border rounded-full" />

        {/* Project Cards Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 relative z-10"
        >
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={projectPage}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                {visibleProjects.map((project) => (
                  <a
                    key={project.title}
                    href={project.link}
                    target={project.link !== "#" ? "_blank" : undefined}
                    rel={project.link !== "#" ? "noopener noreferrer" : undefined}
                    className="aspect-[4/3] rounded-2xl bg-card border border-border hover:border-muted-foreground/30 transition-all duration-300 relative overflow-hidden group hover:scale-[1.02] hover:shadow-lg"
                  >
                    <ImageWithSkeleton
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="font-mono text-sm text-white bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                        {project.title}
                      </span>
                    </div>
                  </a>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-4 mt-6">
                <button
                  onClick={prevPage}
                  className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center hover:bg-secondary transition-colors"
                  aria-label="Previous projects"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex gap-2">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setProjectPage(i)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        i === projectPage ? "bg-foreground" : "bg-muted-foreground/30"
                      }`}
                      aria-label={`Go to page ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextPage}
                  className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center hover:bg-secondary transition-colors"
                  aria-label="Next projects"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

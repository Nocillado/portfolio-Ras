import { motion } from "framer-motion";
import { ArrowUpRight, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ImageWithSkeleton } from "./ui/image-skeleton";
import { projects } from "@/data/projects";

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-32 px-6 md:px-12 overflow-hidden">
      {/* Background decorative elements for the entire section */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large circle top left */}
        <div className="absolute -top-[300px] -left-[300px] w-[600px] h-[600px] border border-border rounded-full opacity-10" />
        {/* Medium circle top right */}
        <div className="absolute top-[200px] -right-[200px] w-[400px] h-[400px] border border-border rounded-full opacity-10" />
        {/* Large circle bottom */}
        <div className="absolute -bottom-[400px] left-1/4 w-[800px] h-[800px] border border-border rounded-full opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-label block text-right mb-12"
        >
          ... /Projects ...
        </motion.span>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`relative grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 0 ? "" : "lg:direction-rtl"
              }`}
            >
              {/* Project image */}
              <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                {/* Decorative circles behind the image card - z-0 to stay behind */}
                <div
                  className={`absolute pointer-events-none w-[350px] h-[350px] border border-border rounded-full opacity-40 dark:opacity-20 z-0 ${
                    index % 2 === 0
                      ? "-bottom-[120px] -left-[120px]"
                      : "-bottom-[120px] -right-[120px]"
                  }`}
                />
                <div
                  className={`absolute pointer-events-none w-[250px] h-[250px] border border-border rounded-full opacity-30 dark:opacity-15 z-0 ${
                    index % 2 === 0
                      ? "-top-[80px] -right-[80px]"
                      : "-top-[80px] -left-[80px]"
                  }`}
                />
                {/* Small accent circle */}
                <div
                  className={`absolute pointer-events-none w-[100px] h-[100px] border border-border rounded-full opacity-50 dark:opacity-30 z-0 ${
                    index % 2 === 0
                      ? "top-[20%] -left-[50px]"
                      : "top-[20%] -right-[50px]"
                  }`}
                />

                <Link
                  to={`/project/${project.id}`}
                  className="block relative z-10 group cursor-pointer"
                >
                  <div className="aspect-[4/3] rounded-2xl bg-card border border-border overflow-hidden relative transition-all duration-300 group-hover:shadow-[0_0_40px_rgba(0,0,0,0.5)] group-hover:border-foreground/30">
                  {project.image ? (
                    <ImageWithSkeleton
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-card to-muted" />
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono text-sm bg-background/90 px-4 py-2 rounded-full border border-border">
                      View Project
                    </span>
                  </div>
                  </div>
                </Link>
              </div>

              {/* Project info */}
              <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                {/* Decorative circle behind content */}
                <div
                  className={`absolute pointer-events-none w-[200px] h-[200px] border border-border rounded-full opacity-25 dark:opacity-10 ${
                    index % 2 === 0
                      ? "-bottom-[50px] -right-[50px]"
                      : "-bottom-[50px] -left-[50px]"
                  }`}
                />

                <Link to={`/project/${project.id}`}>
                  <h3 className="font-mono text-2xl md:text-3xl font-medium mb-6 hover:text-foreground/70 transition-colors cursor-pointer">
                    {project.title}
                  </h3>
                </Link>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <Button key={tag} variant="tag" size="tag">
                      {tag}
                    </Button>
                  ))}
                </div>

                {/* Description */}
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-2 mt-8">
                  <a
                    href="#contact"
                    className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center hover:bg-[#0a0a0a] hover:border-[#0a0a0a] dark:hover:bg-[#f5f5f5] dark:hover:border-[#f5f5f5] hover:text-white dark:hover:text-black transition-all duration-200"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center hover:bg-[#0a0a0a] hover:border-[#0a0a0a] dark:hover:bg-[#f5f5f5] dark:hover:border-[#f5f5f5] hover:text-white dark:hover:text-black transition-all duration-200"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                  <Link
                    to={`/project/${project.id}`}
                    className="ml-2 font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

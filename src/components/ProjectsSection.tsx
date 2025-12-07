import { motion } from "framer-motion";
import { ArrowUpRight, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Montclair",
    tags: ["React", "Tailwind CSS", "ShadCN"],
    image: "/projects/1.png",
    link: "https://montclair-ras.netlify.app/",
    description: "A luxury web store showcasing premium timepieces with an elegant, minimalist design. Features smooth animations and a refined user experience tailored for high-end watch enthusiasts.",
  },
  {
    title: "Steel Stallion",
    tags: ["React", "Tailwind CSS", "ShadCN"],
    image: "/projects/2.png",
    link: "https://steelstallion.netlify.app/",
    description: "A vintage motorcycle showcase featuring classic bikes with a rugged, nostalgic aesthetic. Built with smooth transitions and a bold design that captures the spirit of timeless two-wheeled machines.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
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
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 0 ? "" : "lg:direction-rtl"
              }`}
            >
              {/* Project image */}
              <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="aspect-[4/3] rounded-2xl bg-card border border-border overflow-hidden">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-card to-muted" />
                  )}
                </div>
                
                {/* Decorative arc */}
                <div
                  className={`arc-decoration w-[400px] h-[400px] ${
                    index % 2 === 0
                      ? "-bottom-[200px] -left-[200px]"
                      : "-top-[200px] -right-[200px]"
                  } opacity-20`}
                />
              </div>

              {/* Project info */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h3 className="font-mono text-2xl md:text-3xl font-medium mb-6">
                  {project.title}
                </h3>

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
                  {project.description ? (
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                  ) : project.descriptions ? (
                    project.descriptions.map((desc, i) => (
                      <p key={i} className="text-sm text-muted-foreground">
                        {desc}
                      </p>
                    ))
                  ) : null}
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-2 mt-8">
                  <a href="#contact" className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center hover:bg-secondary transition-colors">
                    <MessageSquare className="w-4 h-4" />
                  </a>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center hover:bg-secondary transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
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

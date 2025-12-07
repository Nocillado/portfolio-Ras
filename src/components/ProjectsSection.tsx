import { motion } from "framer-motion";
import { ArrowUpRight, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithSkeleton } from "./ui/image-skeleton";

const projects = [
  {
    title: "Resident Evil 8",
    tags: ["React", "Tailwind CSS", "ShadCN"],
    image: "/Projects/3.png",
    link: "https://resident-evil-8-one.vercel.app/",
    description: "A fan-made tribute website dedicated to Resident Evil Village. Features an immersive dark atmosphere with cinematic visuals, character showcases, and game information that captures the horror essence of the iconic franchise.",
  },
  {
    title: "Montclair",
    tags: ["React", "Tailwind CSS", "ShadCN"],
    image: "/Projects/1.png",
    link: "https://montclair-jet.vercel.app/",
    description: "A luxury web store showcasing premium timepieces with an elegant, minimalist design. Features smooth animations and a refined user experience tailored for high-end watch enthusiasts.",
  },
  {
    title: "Steel Stallion",
    tags: ["React", "Tailwind CSS", "ShadCN"],
    image: "/Projects/2.png",
    link: "https://steel-stallion.vercel.app/",
    description: "A vintage motorcycle showcase featuring classic bikes with a rugged, nostalgic aesthetic. Built with smooth transitions and a bold design that captures the spirit of timeless two-wheeled machines.",
  },
  {
    title: "Marilag",
    tags: ["React", "Tailwind CSS", "ShadCN"],
    image: "/Projects/4.png",
    link: "https://marilag-eta.vercel.app/",
    description: "A stunning travel website showcasing the beauty of Boracay. Features breathtaking imagery, destination guides, and booking information designed to inspire wanderlust and help travelers plan their perfect island getaway.",
  },
  {
    title: "Brussels Brewery",
    tags: ["React", "Tailwind CSS", "ShadCN"],
    image: "/Projects/5 .png",
    link: "https://brussels-brewery.vercel.app/",
    description: "A cozy coffee shop website inspired by Brussels Brewery. Features an inviting warm aesthetic, menu showcases, and store information that captures the artisanal coffee culture and European café ambiance.",
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
                {/* Decorative arc - behind the image */}
                <div
                  className={`absolute pointer-events-none w-[400px] h-[400px] ${
                    index % 2 === 0
                      ? "-bottom-[200px] -left-[200px]"
                      : "-top-[200px] -right-[200px]"
                  } opacity-20 border border-border rounded-full`}
                />

                <div className="aspect-[4/3] rounded-2xl bg-card border border-border overflow-hidden relative">
                  {project.image ? (
                    <ImageWithSkeleton src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-card to-muted" />
                  )}
                </div>
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
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
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

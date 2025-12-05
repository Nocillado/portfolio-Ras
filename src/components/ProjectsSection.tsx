import { motion } from "framer-motion";
import { ArrowUpRight, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS", "Docker"],
    descriptions: [
      "Built a full-stack e-commerce solution with real-time inventory management",
      "Implemented secure payment processing with Stripe integration",
      "Deployed using AWS ECS with auto-scaling capabilities",
    ],
  },
  {
    title: "Dashboard Analytics",
    tags: ["Vue.js", "D3.js", "GraphQL", "MongoDB", "Redis", "Docker"],
    descriptions: [
      "Created interactive data visualization dashboards",
      "Real-time data streaming with WebSocket connections",
      "Optimized queries for handling millions of data points",
    ],
  },
  {
    title: "Mobile Banking App",
    tags: ["React Native", "TypeScript", "Node.js", "PostgreSQL", "Redis", "AWS"],
    descriptions: [
      "Developed secure mobile banking application",
      "Implemented biometric authentication and 2FA",
      "Built transaction processing with real-time notifications",
    ],
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
                  <div className="w-full h-full bg-gradient-to-br from-card to-muted" />
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

                {/* Descriptions */}
                <div className="space-y-4">
                  {project.descriptions.map((desc, i) => (
                    <p key={i} className="text-sm text-muted-foreground">
                      Some of my favorite{" "}
                      <span className="text-foreground italic">technologies, topics, or tools</span>{" "}
                      that I worked with
                    </p>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-2 mt-8">
                  <button className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center hover:bg-secondary transition-colors">
                    <MessageSquare className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center hover:bg-secondary transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
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

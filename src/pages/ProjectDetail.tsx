import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageWithSkeleton } from "@/components/ui/image-skeleton";
import { projects, getProjectById } from "@/data/projects";
import { useEffect } from "react";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = id ? getProjectById(id) : undefined;

  // Find adjacent projects for navigation
  const currentIndex = projects.findIndex((p) => p.id === id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-mono text-4xl mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
          <Button variant="hero" asChild>
            <Link to="/">Go Back Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Back button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-6 left-6 z-50"
      >
        <Button
          variant="outline"
          size="icon"
          onClick={() => navigate(-1)}
          className="h-10 w-10 rounded-full border-border bg-card/80 backdrop-blur-sm hover:bg-card transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
      </motion.div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Project Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="section-label block mb-4">... /Project ...</span>
            <h1 className="font-mono text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight">
              {project.title}
            </h1>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {project.tags.map((tag) => (
              <Button key={tag} variant="tag" size="tag">
                {tag}
              </Button>
            ))}
          </motion.div>

          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Decorative circles behind the image - z-0 to stay behind */}
            {/* Left side circles */}
            <div className="absolute -top-[100px] -left-[120px] w-[300px] h-[300px] border border-border rounded-full opacity-40 dark:opacity-20 pointer-events-none z-0" />
            <div className="absolute top-[40%] -left-[80px] w-[180px] h-[180px] border border-border rounded-full opacity-30 dark:opacity-15 pointer-events-none z-0" />
            <div className="absolute -bottom-[100px] -left-[60px] w-[220px] h-[220px] border border-border rounded-full opacity-40 dark:opacity-20 pointer-events-none z-0" />

            {/* Right side circles */}
            <div className="absolute -top-[60px] -right-[100px] w-[200px] h-[200px] border border-border rounded-full opacity-40 dark:opacity-20 pointer-events-none z-0" />
            <div className="absolute top-[30%] -right-[120px] w-[280px] h-[280px] border border-border rounded-full opacity-30 dark:opacity-15 pointer-events-none z-0" />
            <div className="absolute -bottom-[120px] -right-[80px] w-[250px] h-[250px] border border-border rounded-full opacity-40 dark:opacity-20 pointer-events-none z-0" />

            {/* Image container with z-10 to stay in front */}
            <div className="relative z-10 aspect-video rounded-3xl bg-card border border-border overflow-hidden shadow-2xl">
              {project.image ? (
                <ImageWithSkeleton
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-card to-muted" />
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-3 gap-12"
          >
            {/* Description */}
            <div className="md:col-span-2">
              <h2 className="font-mono text-xl mb-6">About the Project</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Project Info */}
            <div className="space-y-6">
              <div>
                <h3 className="font-mono text-sm text-muted-foreground mb-2">Technologies</h3>
                <p className="text-foreground">{project.tags.join(", ")}</p>
              </div>
              <div>
                <h3 className="font-mono text-sm text-muted-foreground mb-2">Live Preview</h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-foreground/70 transition-colors flex items-center gap-2"
                >
                  Visit Site <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-4 mt-12"
          >
            <Button variant="hero" size="lg" asChild>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Live Site <ArrowUpRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">
                <MessageSquare className="w-4 h-4 mr-2" /> Contact Me
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Project Navigation */}
      <section className="py-16 px-6 md:px-12 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Previous Project */}
            {prevProject ? (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Link
                  to={`/project/${prevProject.id}`}
                  className="group block p-6 rounded-2xl border border-border bg-card hover:bg-[#0a0a0a] dark:hover:bg-[#f5f5f5] hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-200"
                >
                  <div className="flex items-center gap-2 text-muted-foreground group-hover:text-white/60 dark:group-hover:text-black/60 mb-2 transition-colors">
                    <ChevronLeft className="w-4 h-4" />
                    <span className="font-mono text-xs">Previous Project</span>
                  </div>
                  <h3 className="font-mono text-xl group-hover:text-white dark:group-hover:text-black transition-colors">
                    {prevProject.title}
                  </h3>
                </Link>
              </motion.div>
            ) : (
              <div />
            )}

            {/* Next Project */}
            {nextProject ? (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="md:text-right"
              >
                <Link
                  to={`/project/${nextProject.id}`}
                  className="group block p-6 rounded-2xl border border-border bg-card hover:bg-[#0a0a0a] dark:hover:bg-[#f5f5f5] hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-200"
                >
                  <div className="flex items-center justify-end gap-2 text-muted-foreground group-hover:text-white/60 dark:group-hover:text-black/60 mb-2 transition-colors">
                    <span className="font-mono text-xs">Next Project</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                  <h3 className="font-mono text-xl group-hover:text-white dark:group-hover:text-black transition-colors">
                    {nextProject.title}
                  </h3>
                </Link>
              </motion.div>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Button variant="outline" size="lg" asChild>
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to All Projects
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 Christian Mark. All rights reserved.</p>
          <p className="font-mono">Built with passion & pixels</p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetail;

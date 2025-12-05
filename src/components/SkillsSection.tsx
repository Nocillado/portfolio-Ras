import { motion } from "framer-motion";
import { ArrowUpRight, MessageSquare } from "lucide-react";

const skillCategories = [
  {
    title: "Front-end",
    skills: ["TypeScript", "React", "Vue", "Next.js", "Tailwind", "HTML/CSS"],
  },
  {
    title: "Styles",
    skills: ["Tailwind", "SCSS", "CSS-in-JS", "Framer Motion"],
  },
  {
    title: "Back-end",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST", "GraphQL"],
  },
  {
    title: "DevOps",
    skills: ["Docker", "AWS", "CI/CD", "Git", "Linux"],
  },
];

const SkillsSection = () => {
  return (
    <section className="relative py-32 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skills grid */}
          <div className="space-y-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-5 hover:border-muted-foreground/30 transition-colors duration-300"
              >
                <h3 className="font-mono text-lg mb-3">{category.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {category.skills.join(" / ")}
                </p>
              </motion.div>
            ))}

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-4 pt-4"
            >
              <p className="text-sm text-muted-foreground">
                Some of my favorite <span className="text-foreground italic">technologies, topics, or tools</span> that I worked with
              </p>
              <div className="flex items-center -space-x-1">
                <button className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center hover:bg-secondary transition-colors">
                  <MessageSquare className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center hover:bg-secondary transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Preview image placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/3] rounded-2xl bg-card border border-border"
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

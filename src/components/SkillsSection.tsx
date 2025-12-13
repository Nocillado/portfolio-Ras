import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

const skillCategories = [
  {
    title: "Front-end",
    skills: ["TypeScript", "React", "Vue", "Next.js", "Tailwind", "HTML/CSS"],
    size: "large",
  },
  {
    title: "Styles",
    skills: ["Tailwind", "SCSS", "CSS-in-JS", "Framer Motion"],
    size: "small",
  },
  {
    title: "UI Libraries",
    skills: ["Shadcn/ui", "Material UI", "Ant Design", "Radix UI", "Chakra UI"],
    size: "large",
  },
  {
    title: "AI Tools",
    skills: ["ChatGPT", "Claude", "Lovable", "Gemini", "Cursor"],
    size: "small",
  },
];

const SkillsSection = () => {
  return (
    <section className="relative py-16 px-6 md:px-12 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-4">
          {/* Front-end - Large card top left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-12 md:col-span-7 bg-card border border-border rounded-xl p-6 cursor-pointer group hover:bg-[#0a0a0a] dark:hover:bg-[#f5f5f5] hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-200"
          >
            <h3 className="font-mono text-lg mb-3 group-hover:text-white dark:group-hover:text-black transition-colors duration-200">
              {skillCategories[0].title}
            </h3>
            <p className="text-sm text-muted-foreground group-hover:text-white/60 dark:group-hover:text-black/60 transition-colors duration-200">
              {skillCategories[0].skills.join(" / ")}
            </p>
          </motion.div>

          {/* Styles - Small card top right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-12 md:col-span-5 row-span-2 bg-card border border-border rounded-xl p-6 cursor-pointer group hover:bg-[#0a0a0a] dark:hover:bg-[#f5f5f5] hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-200 flex flex-col"
          >
            <h3 className="font-mono text-lg mb-3 group-hover:text-white dark:group-hover:text-black transition-colors duration-200">
              {skillCategories[1].title}
            </h3>
            <p className="text-sm text-muted-foreground group-hover:text-white/60 dark:group-hover:text-black/60 transition-colors duration-200 flex-1">
              {skillCategories[1].skills.join(" / ")}
            </p>
            {/* Action button */}
            <div className="flex justify-end mt-4">
              <a href="#contact" className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center transition-all duration-200 group-hover:bg-white group-hover:border-white dark:group-hover:bg-black dark:group-hover:border-black">
                <MessageSquare className="w-4 h-4 transition-colors duration-200 group-hover:text-black dark:group-hover:text-white" />
              </a>
            </div>
          </motion.div>

          {/* Text section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-12 md:col-span-7 flex items-center"
          >
            <p className="text-sm text-muted-foreground">
              Some of my favorite <span className="text-foreground italic">technologies, topics, or tools</span> that I worked with
            </p>
          </motion.div>

          {/* UI Libraries - Large card bottom left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-span-12 md:col-span-7 bg-card border border-border rounded-xl p-6 cursor-pointer group hover:bg-[#0a0a0a] dark:hover:bg-[#f5f5f5] hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-200"
          >
            <h3 className="font-mono text-lg mb-3 group-hover:text-white dark:group-hover:text-black transition-colors duration-200">
              {skillCategories[2].title}
            </h3>
            <p className="text-sm text-muted-foreground group-hover:text-white/60 dark:group-hover:text-black/60 transition-colors duration-200">
              {skillCategories[2].skills.join(" / ")}
            </p>
          </motion.div>

          {/* AI Tools - Small card bottom right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="col-span-12 md:col-span-5 bg-card border border-border rounded-xl p-6 cursor-pointer group hover:bg-[#0a0a0a] dark:hover:bg-[#f5f5f5] hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-200"
          >
            <h3 className="font-mono text-lg mb-3 group-hover:text-white dark:group-hover:text-black transition-colors duration-200">
              {skillCategories[3].title}
            </h3>
            <p className="text-sm text-muted-foreground group-hover:text-white/60 dark:group-hover:text-black/60 transition-colors duration-200">
              {skillCategories[3].skills.join(" / ")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

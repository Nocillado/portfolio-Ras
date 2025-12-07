import { motion } from "framer-motion";

const workExperience = [
  {
    period: "2024 - 2025",
    duration: "6 Months",
    company: "Globe International Distributor Center Inc.",
    role: "Frontend Developer Intern",
    tech: "React, Vue",
  },
  {
    period: "2025",
    duration: "6 Months",
    company: "Hytec Power Inc.",
    role: "Junior Front-End Intern",
    tech: "React, Figma",
  },
];

const WorkSection = () => {

  return (
    <section className="relative py-32 px-6 md:px-12">

      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-mono text-6xl md:text-8xl font-medium text-right mb-16 italic"
        >
          Work
        </motion.h2>

        {/* Timeline */}
        <div className="space-y-0">
          {workExperience.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover="hover"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-t border-border last:border-b py-6 grid grid-cols-12 gap-4 items-center cursor-pointer px-4 -mx-4 group hover:bg-[#f5f5f5] transition-all duration-200"
            >
              <div className="col-span-3 md:col-span-2">
                <p className="font-mono text-sm group-hover:text-black transition-colors duration-200">{work.period}</p>
                <p className="text-xs text-muted-foreground group-hover:text-black/60 transition-colors duration-200">{work.duration}</p>
              </div>

              <div className="col-span-3 md:col-span-2">
                <p className="font-mono text-sm group-hover:text-black transition-colors duration-200">{work.company}</p>
              </div>

              <div className="col-span-6 md:col-span-8">
                <p className="text-sm text-muted-foreground group-hover:text-black/60 transition-colors duration-200">
                  {work.role} <span className="text-foreground group-hover:text-black transition-colors duration-200">|</span> {work.tech}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;

import { motion } from "framer-motion";

const workExperience = [
  {
    period: "2022 - 2024",
    duration: "2 years",
    company: "TechCorp",
    role: "Senior Full-stack Developer",
    tech: "React",
  },
  {
    period: "2021 - 2022",
    duration: "1 year",
    company: "StartupXYZ",
    role: "Full-stack Developer",
    tech: "Vue.js",
  },
  {
    period: "2020 - 2021",
    duration: "1 year",
    company: "WebAgency",
    role: "Frontend Developer",
    tech: "React",
  },
  {
    period: "2019 - 2020",
    duration: "1 year",
    company: "FreelanceWork",
    role: "Junior Developer",
    tech: "JavaScript",
  },
];

const WorkSection = () => {
  const totalYears = "3+ years";

  return (
    <section className="relative py-32 px-6 md:px-12">
      {/* Cyan accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />

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
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-t border-border py-6 grid grid-cols-12 gap-4 items-center"
            >
              <div className="col-span-3 md:col-span-2">
                <p className="font-mono text-sm">{work.period}</p>
                <p className="text-xs text-muted-foreground">{work.duration}</p>
              </div>

              <div className="col-span-3 md:col-span-2">
                <p className="font-mono text-sm">{work.company}</p>
              </div>

              <div className="col-span-6 md:col-span-8">
                <p className="text-sm text-muted-foreground">
                  {work.role} <span className="text-foreground">|</span> {work.tech}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom border */}
        <div className="border-t border-border" />

        {/* Total experience */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-right"
        >
          <p className="text-sm text-muted-foreground">Work experience</p>
          <p className="font-mono text-2xl md:text-3xl font-medium mt-1">{totalYears}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSection;

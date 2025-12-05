import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="relative py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Decorative arc with label */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <span className="section-label">... /About me ...</span>
            
            <div className="mt-8 relative">
              <div className="w-64 h-64 md:w-80 md:h-80">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <circle
                    cx="100"
                    cy="100"
                    r="95"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-border"
                  />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* About text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              Hello! I'm Christian, I'm a <span className="text-foreground italic">full-stack developer</span>.
              More than <span className="text-primary italic">3 years</span> experience.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

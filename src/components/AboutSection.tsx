import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const AboutSection = () => {
  const images = ["/DP/kekw.jpg", "/DP/2.jpg"];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-0 items-center">
          {/* Decorative arc with label */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <span className="section-label">... /About me ...</span>

            <div className="mt-8 relative flex justify-center lg:justify-start">
              <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 relative">
                <svg viewBox="0 0 200 200" className="w-full h-full absolute inset-0">
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
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    key={currentImage}
                    src={images[currentImage]}
                    alt="Profile"
                    className="w-[85%] h-[85%] rounded-full object-cover animate-fade-in"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* About text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:-ml-48"
          >
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-muted-foreground text-center lg:text-left">
              Hello! I'm <span className="text-foreground italic">Christian Mark</span>, an aspiring Front-End Developer with a strong foundation in modern web technologies like <span className="text-foreground italic">React</span>, <span className="text-foreground italic">Next.js</span>, and <span className="text-foreground italic">Tailwind CSS</span>. I'm passionate about building clean, responsive, and user-friendly interfaces that provide a great user experience.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

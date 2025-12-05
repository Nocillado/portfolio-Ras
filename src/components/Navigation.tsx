import { motion } from "framer-motion";

const Navigation = () => {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="font-mono text-xl font-medium text-foreground">
          Ras
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="font-mono text-xl font-medium text-foreground">geL</span>
          <div className="w-16 h-16 relative -mr-4 -mt-4">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                d="M 100 0 A 100 100 0 0 0 0 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-border"
              />
            </svg>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;

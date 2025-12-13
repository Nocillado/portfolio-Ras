import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  baseX: number;
  baseY: number;
}

export function InteractiveParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000); // Density based on screen size

      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particlesRef.current.push({
          x,
          y,
          vx: 0,
          vy: 0,
          size: 1.5 + Math.random() * 2,
          opacity: 0.2 + Math.random() * 0.3,
          baseX: x,
          baseY: y,
        });
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isDark = document.documentElement.classList.contains("dark");
      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;
      const attractionRadius = 150;
      const attractionStrength = 0.08;
      const returnStrength = 0.02;
      const friction = 0.92;

      particlesRef.current.forEach((particle) => {
        // Calculate distance to mouse
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Magnetic attraction to cursor
        if (distance < attractionRadius && distance > 0) {
          const force = (attractionRadius - distance) / attractionRadius;
          const angle = Math.atan2(dy, dx);

          // Attract towards cursor
          particle.vx += Math.cos(angle) * force * attractionStrength;
          particle.vy += Math.sin(angle) * force * attractionStrength;
        }

        // Natural drift - gentle random movement
        const time = Date.now() * 0.0005;
        const driftX = Math.sin(time + particle.baseX * 0.01) * 0.02;
        const driftY = Math.cos(time * 0.8 + particle.baseY * 0.01) * 0.02;
        particle.vx += driftX;
        particle.vy += driftY;

        // Return to base position (gentle spring)
        const returnDx = particle.baseX - particle.x;
        const returnDy = particle.baseY - particle.y;
        particle.vx += returnDx * returnStrength;
        particle.vy += returnDy * returnStrength;

        // Apply friction
        particle.vx *= friction;
        particle.vy *= friction;

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);

        // Dynamic opacity based on distance to mouse
        let dynamicOpacity = particle.opacity;
        if (distance < attractionRadius) {
          dynamicOpacity = particle.opacity + (1 - distance / attractionRadius) * 0.4;
        }

        const color = isDark ? "255, 255, 255" : "0, 0, 0";
        ctx.fillStyle = `rgba(${color}, ${dynamicOpacity})`;
        ctx.fill();

        // Draw connections between nearby particles
        particlesRef.current.forEach((otherParticle) => {
          if (particle === otherParticle) return;

          const pdx = particle.x - otherParticle.x;
          const pdy = particle.y - otherParticle.y;
          const pDistance = Math.sqrt(pdx * pdx + pdy * pdy);

          // Only connect particles that are close AND near the cursor
          const avgDistToMouse =
            (Math.sqrt(
              Math.pow(mouseX - particle.x, 2) + Math.pow(mouseY - particle.y, 2)
            ) +
              Math.sqrt(
                Math.pow(mouseX - otherParticle.x, 2) +
                  Math.pow(mouseY - otherParticle.y, 2)
              )) /
            2;

          if (pDistance < 80 && avgDistToMouse < attractionRadius) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            const lineOpacity = (1 - pDistance / 80) * (1 - avgDistToMouse / attractionRadius) * 0.3;
            ctx.strokeStyle = `rgba(${color}, ${lineOpacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ width: "100%", height: "100%" }}
    />
  );
}

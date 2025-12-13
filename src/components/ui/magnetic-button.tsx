import * as React from "react";
import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "./button";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  targetX: number;
  targetY: number;
}

interface MagneticButtonProps extends ButtonProps {
  particleCount?: number;
  particleColor?: string;
}

const MagneticButton = React.forwardRef<HTMLButtonElement, MagneticButtonProps>(
  ({ className, children, particleCount = 12, particleColor, ...props }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const mouseRef = useRef({ x: 0, y: 0, isHovering: false });
    const animationRef = useRef<number>();
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const resizeCanvas = () => {
        const rect = container.getBoundingClientRect();
        const padding = 60;
        canvas.width = rect.width + padding * 2;
        canvas.height = rect.height + padding * 2;
        canvas.style.left = `-${padding}px`;
        canvas.style.top = `-${padding}px`;
      };

      resizeCanvas();
      window.addEventListener("resize", resizeCanvas);

      // Initialize particles scattered randomly around the button
      const initParticles = () => {
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        particlesRef.current = [];

        for (let i = 0; i < particleCount; i++) {
          // Random position scattered around the button area
          const angle = Math.random() * Math.PI * 2;
          const distance = 40 + Math.random() * 60; // Random distance from center
          const x = centerX + Math.cos(angle) * distance;
          const y = centerY + Math.sin(angle) * distance;

          particlesRef.current.push({
            x,
            y,
            vx: (Math.random() - 0.5) * 0.5, // Small random initial velocity
            vy: (Math.random() - 0.5) * 0.5,
            size: 2 + Math.random() * 3,
            opacity: 0.3 + Math.random() * 0.4,
            targetX: x,
            targetY: y,
          });
        }
      };

      initParticles();

      const animate = () => {
        if (!ctx || !canvas) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        particlesRef.current.forEach((particle, index) => {
          // Calculate target position
          if (mouseRef.current.isHovering) {
            // Attract to mouse position - very slow attraction
            const attractionStrength = 0.015;
            const mouseX = mouseRef.current.x + 60; // Account for padding
            const mouseY = mouseRef.current.y + 60;

            particle.targetX = mouseX + (Math.random() - 0.5) * 20;
            particle.targetY = mouseY + (Math.random() - 0.5) * 20;

            particle.vx += (particle.targetX - particle.x) * attractionStrength;
            particle.vy += (particle.targetY - particle.y) * attractionStrength;
          } else {
            // Float randomly with gentle drift
            const time = Date.now() * 0.001;
            const uniqueOffset = index * 0.5;

            // Each particle drifts in its own random pattern
            particle.vx += (Math.sin(time + uniqueOffset) * 0.02);
            particle.vy += (Math.cos(time * 0.8 + uniqueOffset) * 0.02);

            // Keep particles loosely around the button area
            const dx = particle.x - centerX;
            const dy = particle.y - centerY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // Gentle pull back if too far (beyond 80px)
            if (dist > 80) {
              particle.vx -= dx * 0.002;
              particle.vy -= dy * 0.002;
            }
          }

          // Apply friction - higher value = slower deceleration
          particle.vx *= 0.96;
          particle.vy *= 0.96;

          // Update position
          particle.x += particle.vx;
          particle.y += particle.vy;

          // Draw particle
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);

          // Get color - when hovering (button becomes filled), use opposite color for visibility
          const isDark = document.documentElement.classList.contains("dark");
          let color: string;
          if (mouseRef.current.isHovering) {
            // When hovering: in dark mode button becomes light, so particles should be dark
            // In light mode button becomes dark, so particles should be light
            color = isDark ? "0, 0, 0" : "255, 255, 255";
          } else {
            // When not hovering: use theme-appropriate color
            color = particleColor || (isDark ? "255, 255, 255" : "0, 0, 0");
          }
          ctx.fillStyle = `rgba(${color}, ${mouseRef.current.isHovering ? particle.opacity + 0.3 : particle.opacity})`;
          ctx.fill();

          // Draw connecting lines when hovering
          if (mouseRef.current.isHovering) {
            particlesRef.current.forEach((otherParticle, otherIndex) => {
              if (index < otherIndex) {
                const dx = particle.x - otherParticle.x;
                const dy = particle.y - otherParticle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 50) {
                  ctx.beginPath();
                  ctx.moveTo(particle.x, particle.y);
                  ctx.lineTo(otherParticle.x, otherParticle.y);
                  ctx.strokeStyle = `rgba(${color}, ${0.2 * (1 - distance / 50)})`;
                  ctx.lineWidth = 1;
                  ctx.stroke();
                }
              }
            });
          }
        });

        animationRef.current = requestAnimationFrame(animate);
      };

      animate();

      return () => {
        window.removeEventListener("resize", resizeCanvas);
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }, [particleCount, particleColor]);

    const handleMouseMove = (e: React.MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleMouseEnter = () => {
      mouseRef.current.isHovering = true;
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      mouseRef.current.isHovering = false;
      setIsHovered(false);
    };

    return (
      <div
        ref={containerRef}
        className="relative inline-block"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <canvas
          ref={canvasRef}
          className={cn(
            "absolute pointer-events-none transition-none",
            isHovered ? "z-20" : "z-0"
          )}
          style={{ position: "absolute" }}
        />
        <Button
          ref={ref}
          className={cn("relative z-10", className)}
          {...props}
        >
          {children}
        </Button>
      </div>
    );
  }
);

MagneticButton.displayName = "MagneticButton";

export { MagneticButton };

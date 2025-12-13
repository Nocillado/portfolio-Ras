import { useEffect, useRef } from "react";

interface Meteor {
  x: number;
  y: number;
  speed: number;
  opacity: number;
  thickness: number;
  active: boolean;
  delay: number;
  tailLength: number;
}

export function MeteorShower() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const meteorsRef = useRef<Meteor[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create meteor starting from top-right area, moving to bottom-left
    const createMeteor = (initialDelay = 0): Meteor => {
      // Start from top or right edge
      const startFromTop = Math.random() > 0.3;
      const startX = startFromTop
        ? canvas.width * 0.3 + Math.random() * canvas.width * 0.7
        : canvas.width + 50;
      const startY = startFromTop
        ? -50
        : Math.random() * canvas.height * 0.3;

      return {
        x: startX,
        y: startY,
        speed: 4 + Math.random() * 3, // Slower speed
        opacity: 0.6 + Math.random() * 0.4,
        thickness: 1.5 + Math.random() * 1.5,
        active: false,
        delay: initialDelay,
        tailLength: 80 + Math.random() * 100,
      };
    };

    // Initialize meteors - first one appears quickly
    const meteorCount = 5;
    meteorsRef.current = [];
    meteorsRef.current.push(createMeteor(500)); // First meteor after 0.5s
    for (let i = 1; i < meteorCount; i++) {
      meteorsRef.current.push(createMeteor(1000 + i * 2000 + Math.random() * 2000));
    }

    let lastTime = Date.now();

    const animate = () => {
      if (!ctx || !canvas) return;

      const currentTime = Date.now();
      const deltaTime = currentTime - lastTime;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isDark = document.documentElement.classList.contains("dark");

      meteorsRef.current.forEach((meteor, index) => {
        // Handle delay
        if (!meteor.active) {
          meteor.delay -= deltaTime;
          if (meteor.delay <= 0) {
            meteor.active = true;
          }
          return;
        }

        // Move diagonally: down and to the left (45 degree angle)
        meteor.x -= meteor.speed * 0.7;
        meteor.y += meteor.speed;

        // Calculate tail end position
        const tailX = meteor.x + meteor.tailLength * 0.7;
        const tailY = meteor.y - meteor.tailLength;

        // Draw meteor with gradient trail
        const gradient = ctx.createLinearGradient(
          tailX, tailY,
          meteor.x, meteor.y
        );

        const color = isDark ? "255, 255, 255" : "80, 80, 80";
        gradient.addColorStop(0, `rgba(${color}, 0)`);
        gradient.addColorStop(0.3, `rgba(${color}, ${meteor.opacity * 0.3})`);
        gradient.addColorStop(1, `rgba(${color}, ${meteor.opacity})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(meteor.x, meteor.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = meteor.thickness;
        ctx.lineCap = "round";
        ctx.stroke();

        // Draw bright head
        ctx.beginPath();
        ctx.arc(meteor.x, meteor.y, meteor.thickness * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${meteor.opacity})`;
        ctx.fill();

        // Reset meteor if it goes off screen
        if (meteor.y > canvas.height + 100 || meteor.x < -100) {
          const newMeteor = createMeteor(3000 + Math.random() * 5000);
          meteorsRef.current[index] = newMeteor;
        }
      });

      lastTime = currentTime;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
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

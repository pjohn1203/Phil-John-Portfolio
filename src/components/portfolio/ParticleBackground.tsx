import React, { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;
  color: string;
}

interface ParticleBackgroundProps {
  particleCount?: number;
  particleSize?: number;
  particleSpeed?: number;
  connectionDistance?: number;
  colors?: string[];
}

const ParticleBackground = ({
  particleCount = 50,
  particleSize = 3,
  particleSpeed = 0.5,
  connectionDistance = 150,
  colors = ["#4a9eff", "#9d4edd"],
}: ParticleBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [dimensions, setDimensions] = useState({ width: 1512, height: 800 });

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const parent = canvas.parentElement;
        if (parent) {
          setDimensions({
            width: parent.clientWidth,
            height: parent.clientHeight,
          });
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const initParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height,
          dx: (Math.random() - 0.5) * particleSpeed,
          dy: (Math.random() - 0.5) * particleSpeed,
          size: Math.random() * particleSize + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
      setParticles(newParticles);
    };

    initParticles();
  }, [dimensions, particleCount, particleSize, particleSpeed, colors]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      // Update and draw particles
      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.dx;
        particle.y += particle.dy;

        // Bounce off walls
        if (particle.x < 0 || particle.x > dimensions.width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > dimensions.height) particle.dy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Draw connections
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(74, 158, 255, ${1 - distance / connectionDistance})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, [particles, dimensions, connectionDistance]);

  return (
    <div className="absolute inset-0 bg-background">
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        className="w-full h-full"
      />
    </div>
  );
};

export default ParticleBackground;

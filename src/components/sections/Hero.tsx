"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Star, MapPin } from "lucide-react";
import { fadeInUp, staggerContainer, shimmerEffect } from "@/lib/animations";
import { useParallax } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.min(50, Math.floor(window.innerWidth / 40));

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          id: i,
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }

      particlesRef.current = particles;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, "rgba(165, 105, 189, 0.05)");
      gradient.addColorStop(1, "rgba(232, 218, 239, 0.05)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Animate particles
      particlesRef.current.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around edges
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;

        // Draw particle with glow
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = "#A569BD";
        ctx.shadowBlur = 20;
        ctx.shadowColor = "#A569BD";
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener("resize", () => {
      resizeCanvas();
      createParticles();
    });

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ mixBlendMode: "screen" }}
    />
  );
}

export function Hero() {
  const { ref: parallaxRef } = useParallax(0.5);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      ref={parallaxRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(135deg, 
          rgba(74, 35, 90, 0.9) 0%, 
          rgba(74, 35, 90, 0.7) 50%, 
          rgba(165, 105, 189, 0.3) 100%
        ), url('/images/hero-bg.jpg') center/cover no-repeat`,
      }}
    >
      {/* Animated particle background */}
      <ParticleBackground />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-primary/40" />

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        style={{ y, opacity }}
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Location badge */}
        <motion.div
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
          variants={fadeInUp}
        >
          <MapPin size={16} className="text-accent" />
          <span className="text-sm font-medium">Mountain View, California</span>
        </motion.div>

        {/* Main heading with shimmer effect */}
        <motion.h1
          className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          variants={fadeInUp}
        >
          <motion.span
            className="block bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent bg-size-200"
            variants={shimmerEffect}
            initial="initial"
            animate="animate"
          >
            Welcome to
          </motion.span>
          <motion.span
            className="block bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            Haven
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl sm:text-2xl text-white/90 mb-8 max-w-6xl mx-auto text-linear px-4"
          style={{ 
            lineHeight: '1.8',
            marginBottom: '2rem'
          }}
          variants={fadeInUp}
        >
          Discover tranquility and luxury in our curated boutique homestay. 
          Where every moment is crafted for unforgettable experiences.
        </motion.p>

        {/* Rating and stats */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12"
          variants={staggerContainer}
        >
          <motion.div
            className="flex items-center gap-2"
            variants={fadeInUp}
          >
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="text-accent fill-current"
                />
              ))}
            </div>
            <span className="text-lg font-semibold">5.0</span>
            <span className="text-white/70">(127 reviews)</span>
          </motion.div>

          <motion.div
            className="hidden sm:block w-px h-6 bg-white/30"
            variants={fadeInUp}
          />

          <motion.div
            className="text-center sm:text-left"
            variants={fadeInUp}
          >
            <div className="text-2xl font-bold text-accent">150+</div>
            <div className="text-white/70">Happy Guests</div>
          </motion.div>

          <motion.div
            className="hidden sm:block w-px h-6 bg-white/30"
            variants={fadeInUp}
          />

          <motion.div
            className="text-center sm:text-left"
            variants={fadeInUp}
          >
            <div className="text-2xl font-bold text-accent">24/7</div>
            <div className="text-white/70">Concierge</div>
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <Link href="/contact">
              <Button
                variant="primary"
                size="lg"
                className="bg-accent text-navy hover:bg-warm-gold px-8 py-4 text-lg font-semibold shadow-gold-glow"
              >
                Book Your Stay
              </Button>
            </Link>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Link href="/rooms">
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg"
              >
                Explore Rooms
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2 mt-[60px]"
          variants={fadeInUp}
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className="flex flex-col items-center gap-2 text-white/70">
            <span className="text-sm font-medium">Scroll to explore</span>
            <ChevronDown size={24} />
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

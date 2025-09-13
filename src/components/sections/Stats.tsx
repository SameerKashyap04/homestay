"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useScrollAnimation, useCountUp } from "@/hooks/useScrollAnimation";

const stats = [
  {
    number: 150,
    suffix: "+",
    label: "Happy Guests",
    description: "Five-star experiences delivered",
  },
  {
    number: 98,
    suffix: "%",
    label: "Satisfaction Rate",
    description: "Consistently exceeding expectations",
  },
  {
    number: 24,
    suffix: "/7",
    label: "Concierge Service",
    description: "Always here when you need us",
  },
  {
    number: 5,
    suffix: ".0",
    label: "Average Rating",
    description: "Based on guest reviews",
  },
];

function StatCard({ stat, delay }: { stat: typeof stats[0]; delay: number }) {
  const { ref, count } = useCountUp(stat.number, 2000);
  
  return (
    <motion.div
      ref={ref}
      className="text-center group"
      variants={fadeInUp}
      transition={{ delay }}
    >
      <motion.div
        className="relative mb-4"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="text-5xl lg:text-6xl font-bold font-display text-transparent bg-gradient-to-br from-secondary to-accent bg-clip-text">
          {count}{stat.suffix}
        </div>
        
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 text-5xl lg:text-6xl font-bold font-display text-secondary/20 blur-sm"
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          {count}{stat.suffix}
        </motion.div>
      </motion.div>
      
      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">
        {stat.label}
      </h3>
      
      <p className="text-muted text-sm text-comfortable text-linear" style={{ lineHeight: '1.75' }}>
        {stat.description}
      </p>
    </motion.div>
  );
}

export function Stats() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section 
      ref={ref} 
      className="py-24 bg-gradient-to-br from-purple-50 to-purple-100 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-accent/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6"
              variants={fadeInUp}
            >
              By the Numbers
            </motion.div>
            
            <motion.h2
              className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6"
              variants={fadeInUp}
            >
              Trusted by Travelers
              <span className="block text-secondary">Worldwide</span>
            </motion.h2>
            
            <motion.p
              className="text-xl text-muted text-linear px-4"
              style={{ 
                lineHeight: '1.8',
                marginBottom: '2rem',
                maxWidth: '65ch',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
              variants={fadeInUp}
            >
              Our commitment to excellence is reflected in every interaction, 
              every stay, and every unforgettable memory we help create.
            </motion.p>
          </div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
            variants={staggerContainer}
          >
            {stats.map((stat, index) => (
              <StatCard 
                key={index} 
                stat={stat} 
                delay={index * 0.1} 
              />
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-16"
            variants={fadeInUp}
          >
            <motion.div
              className="inline-flex items-center gap-4 glass px-8 py-4 rounded-full"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 bg-gradient-to-br from-secondary to-accent rounded-full border-2 border-white flex items-center justify-center text-white font-semibold text-sm"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">Join our community</p>
                <p className="text-muted text-sm">of satisfied guests</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

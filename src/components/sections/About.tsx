"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Leaf, Award, Coffee } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/Card";

const features = [
  {
    icon: Heart,
    title: "Curated with Love",
    description: "Every detail thoughtfully designed to create moments that matter, from hand-selected furnishings to personalized welcome touches.",
  },
  {
    icon: Leaf,
    title: "Sustainable Luxury",
    description: "We believe in responsible hospitality, incorporating eco-friendly practices without compromising on premium experiences.",
  },
  {
    icon: Award,
    title: "Award-Winning Service",
    description: "Recognized for excellence in boutique hospitality, our dedicated team ensures every guest feels truly special.",
  },
  {
    icon: Coffee,
    title: "Local Experiences",
    description: "Immerse yourself in authentic local culture with our curated experiences, from artisan workshops to hidden culinary gems.",
  },
];

export function About() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
              Our Story
            </motion.div>
            
            <motion.h2
              className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6"
              variants={fadeInUp}
            >
              Where Luxury Meets
              <span className="block text-secondary">Authentic Connection</span>
            </motion.h2>
            
            <motion.p
              className="text-xl text-muted max-w-6xl mx-auto text-linear px-4"
              style={{ 
                lineHeight: '1.8',
                marginBottom: '2rem'
              }}
              variants={fadeInUp}
            >
              Nestled in the heart of California&apos;s serene mountains, Haven is more than a place to stay—
              it&apos;s a sanctuary where modern luxury harmonizes with timeless hospitality, creating 
              unforgettable experiences for the discerning traveler.
            </motion.p>
          </div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Image */}
            <motion.div
              className="relative"
              variants={fadeInUp}
            >
              <div className="aspect-[4/5] relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-deep-purple/20 to-light-purple/20" />
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/images/about-story.jpg')`,
                  }}
                >
                </div>
              </div>
              
              {/* Floating accent */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full opacity-20 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.div>

            {/* Content */}
            <motion.div
              className="space-y-8"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <h3 className="font-display text-3xl font-semibold text-foreground mb-4">
                  A Vision Realized
                </h3>
                <p className="text-muted text-comfortable text-linear mb-6" style={{ lineHeight: '1.75' }}>
                  Founded by hospitality veterans Sarah and Michael Chen, Haven was born from a simple 
                  belief: that travel should nourish the soul. After years of experiencing impersonal 
                  hotels and cookie-cutter accommodations, they envisioned a space where guests could 
                  find both luxury and genuine connection.
                </p>
                <p className="text-muted text-comfortable text-linear" style={{ lineHeight: '1.75' }}>
                  Today, Haven stands as a testament to their vision—a boutique homestay where every 
                  room tells a story, every meal is a celebration, and every guest becomes part of 
                  our extended family.
                </p>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 p-6 glass rounded-xl"
                variants={fadeInUp}
              >
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Award size={24} className="text-navy" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Award-Winning Excellence</h4>
                  <p className="text-muted text-sm">Boutique Hotel of the Year 2024</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Features grid */}
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card 
                  variant="glass" 
                  hoverEffect={true}
                  className="h-full group cursor-default"
                >
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 5 }}
                    >
                      <feature.icon size={24} className="text-white" />
                    </motion.div>
                    
                    <h4 className="font-display text-xl font-semibold text-foreground mb-3">
                      {feature.title}
                    </h4>
                    
                    <p className="text-muted text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

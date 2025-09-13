"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/Card";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Travel Blogger",
    location: "San Francisco, CA",
    rating: 5,
    comment: "Haven exceeded every expectation. The attention to detail, the warmth of the hosts, and the breathtaking views created an experience I'll treasure forever. This isn't just accommodation—it's a destination in itself.",
    image: "/images/testimonial-1.jpg",
    stayDuration: "3 nights",
    room: "Serenity Suite",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Tech Executive",
    location: "Seattle, WA",
    rating: 5,
    comment: "As someone who travels frequently for business, I can confidently say Haven offers something truly special. The perfect blend of luxury and tranquility helped me disconnect and recharge in ways I didn't think possible.",
    image: "/images/testimonial-2.jpg",
    stayDuration: "2 nights",
    room: "Skyline Loft",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Photographer",
    location: "Los Angeles, CA",
    rating: 5,
    comment: "The natural beauty surrounding Haven provided endless inspiration for my work. Every sunrise felt like a private show, and the hosts' local knowledge led us to hidden gems we never would have discovered on our own.",
    image: "/images/testimonial-3.jpg",
    stayDuration: "5 nights",
    room: "Garden Sanctuary",
  },
  {
    id: 4,
    name: "David & Lisa Park",
    role: "Anniversary Travelers",
    location: "Portland, OR",
    rating: 5,
    comment: "We chose Haven for our 10th anniversary, and it was absolutely perfect. The romantic atmosphere, exceptional service, and thoughtful touches made our celebration unforgettable. We're already planning our return.",
    image: "/images/testimonial-4.jpg",
    stayDuration: "4 nights",
    room: "Serenity Suite",
  },
];

interface TestimonialCardProps {
  testimonial: typeof testimonials[0];
  isActive: boolean;
}

function TestimonialCard({ testimonial, isActive }: TestimonialCardProps) {
  return (
    <motion.div
      layout
      className={`transition-all duration-500 ${
        isActive ? "opacity-100 scale-100" : "opacity-70 scale-95"
      }`}
    >
      <Card 
        variant="glass" 
        className={`relative h-full transition-all duration-300 ${
          isActive ? "glow-purple" : ""
        }`}
      >
        <CardContent className="p-8">
          {/* Quote icon */}
          <motion.div
            className="absolute top-4 right-4 text-accent/20"
            animate={isActive ? { rotate: [0, 5, -5, 0] } : {}}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          >
            <Quote size={32} />
          </motion.div>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className="text-accent fill-current"
              />
            ))}
          </div>

          {/* Comment */}
          <blockquote className="text-foreground text-comfortable text-linear mb-6 text-lg" style={{ lineHeight: '1.75' }}>
            &ldquo;{testimonial.comment}&rdquo;
          </blockquote>

          {/* Author info */}
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-secondary to-accent">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('${testimonial.image}')`,
                }}
              />
            </div>
            
            {/* Details */}
            <div className="flex-1">
              <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
              <p className="text-muted text-sm">{testimonial.role}</p>
              <p className="text-muted text-xs">{testimonial.location}</p>
            </div>

            {/* Stay info */}
            <div className="text-right text-sm">
              <p className="text-muted">{testimonial.stayDuration}</p>
              <p className="text-secondary font-medium">{testimonial.room}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function Testimonials() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying || !inView) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, inView]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section 
      ref={ref} 
      className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-secondary to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent to-transparent rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
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
              Guest Stories
            </motion.div>
            
            <motion.h2
              className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6"
              variants={fadeInUp}
            >
              What Our Guests
              <span className="block text-secondary">Are Saying</span>
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
              Don&apos;t just take our word for it. Hear from travelers who have experienced 
              the magic of Haven firsthand.
            </motion.p>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative">
            {/* Navigation buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 z-10">
              <motion.button
                onClick={goToPrev}
                className="w-12 h-12 bg-white shadow-elevated rounded-full flex items-center justify-center text-muted hover:text-secondary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </motion.button>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 -right-4 z-10">
              <motion.button
                onClick={goToNext}
                className="w-12 h-12 bg-white shadow-elevated rounded-full flex items-center justify-center text-muted hover:text-secondary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>

            {/* Testimonials */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[400px]">
              <AnimatePresence mode="wait">
                {testimonials.map((testimonial, index) => {
                  const isVisible = 
                    index === currentIndex ||
                    index === (currentIndex + 1) % testimonials.length ||
                    (testimonials.length >= 3 && index === (currentIndex + 2) % testimonials.length);

                  if (!isVisible && (typeof window !== 'undefined' && window.innerWidth < 1024)) {
                    return index === currentIndex ? (
                      <motion.div
                        key={testimonial.id}
                        className="md:col-span-2 lg:col-span-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                      >
                        <TestimonialCard 
                          testimonial={testimonial} 
                          isActive={true}
                        />
                      </motion.div>
                    ) : null;
                  }

                  if (isVisible) {
                    return (
                      <motion.div
                        key={testimonial.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <TestimonialCard 
                          testimonial={testimonial} 
                          isActive={index === currentIndex}
                        />
                      </motion.div>
                    );
                  }

                  return null;
                })}
              </AnimatePresence>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "bg-secondary w-8" 
                      : "bg-muted/30 hover:bg-muted/50"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Heart, 
  Leaf, 
  Award,
  Users,
  Globe,
  Sparkles
} from "lucide-react";
import { fadeInUp, staggerContainer, pageTransition } from "@/lib/animations";
import { useScrollAnimation, useCountUp } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/Card";

const founders = [
  {
    name: "Sarah Chen",
    role: "Co-Founder & Creative Director",
    bio: "With over 15 years in luxury hospitality, Sarah brings her passion for creating authentic experiences to every aspect of Haven. Her background in interior design ensures every space tells a story.",
    image: "/images/team-sarah.jpg",
  },
  {
    name: "Michael Chen",
    role: "Co-Founder & Experience Manager",
    bio: "A former chef and sommelier, Michael curates the culinary journey at Haven. His deep connections with local artisans and producers bring authentic flavors to every meal.",
    image: "/images/team-michael.jpg",
  },
];

const values = [
  {
    icon: Heart,
    title: "Authentic Connection",
    description: "We believe in creating genuine relationships with our guests, treating everyone as part of our extended family.",
  },
  {
    icon: Leaf,
    title: "Sustainable Luxury",
    description: "Luxury doesn&apos;t have to come at the cost of our planet. We&apos;re committed to environmentally conscious practices.",
  },
  {
    icon: Award,
    title: "Excellence in Service",
    description: "Every interaction is an opportunity to exceed expectations and create lasting memories.",
  },
  {
    icon: Globe,
    title: "Cultural Immersion",
    description: "We share the rich heritage and natural beauty of our region through curated local experiences.",
  },
];

const achievements = [
  {
    year: "2024",
    title: "Boutique Hotel of the Year",
    organization: "California Tourism Board",
    description: "Recognized for outstanding service and unique guest experiences",
  },
  {
    year: "2024",
    title: "Sustainable Tourism Award",
    organization: "Green Hospitality Alliance",
    description: "Honored for our commitment to environmental responsibility",
  },
  {
    year: "2023",
    title: "Best New Property",
    organization: "Travel & Leisure Magazine",
    description: "Featured as one of the top new luxury destinations",
  },
  {
    year: "2023",
    title: "Excellence in Design",
    organization: "Architectural Digest",
    description: "Celebrated for innovative sustainable architecture",
  },
];

const stats = [
  { number: 150, suffix: "+", label: "Happy Guests" },
  { number: 98, suffix: "%", label: "Guest Satisfaction" },
  { number: 24, suffix: "/7", label: "Concierge Service" },
  { number: 5, suffix: ".0", label: "Average Rating" },
];

function StatCard({ stat, delay }: { stat: typeof stats[0]; delay: number }) {
  const { ref, count } = useCountUp(stat.number, 2000);
  
  return (
    <motion.div
      ref={ref}
      className="text-center"
      variants={fadeInUp}
      transition={{ delay }}
    >
      <div className="text-4xl lg:text-5xl font-bold font-display text-transparent bg-gradient-to-br from-secondary to-accent bg-clip-text mb-2">
        {count}{stat.suffix}
      </div>
      <p className="text-muted font-medium">{stat.label}</p>
    </motion.div>
  );
}

export default function AboutPage() {
  const { ref: heroRef, inView: heroInView } = useScrollAnimation({ threshold: 0.1 });
  const { ref: storyRef, inView: storyInView } = useScrollAnimation({ threshold: 0.2 });
  const { ref: valuesRef, inView: valuesInView } = useScrollAnimation({ threshold: 0.2 });
  const { ref: teamRef, inView: teamInView } = useScrollAnimation({ threshold: 0.2 });
  const { ref: statsRef, inView: statsInView } = useScrollAnimation({ threshold: 0.3 });

  return (
    <motion.div
      className="pt-16 lg:pt-20"
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Hero Section */}
      <section ref={heroRef} className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-6xl mx-auto text-center"
            variants={staggerContainer}
            initial="initial"
            animate={heroInView ? "animate" : "initial"}
          >
            <motion.h1
              className="font-display text-4xl lg:text-6xl font-bold text-foreground mb-6"
              variants={fadeInUp}
            >
              Our Story
              <span className="block text-secondary">Crafted with Purpose</span>
            </motion.h1>
            
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
              Haven was born from a vision to create more than just accommodation—
              we set out to craft a sanctuary where luxury meets authenticity, 
              and every guest becomes part of our story.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Origin Story */}
      <section ref={storyRef} className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate={storyInView ? "animate" : "initial"}
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <motion.div variants={fadeInUp}>
                <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6">
                  Our Beginning
                </div>
                
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  A Dream Transformed into Reality
                </h2>
                
                <div className="space-y-6 text-muted leading-relaxed">
                  <p>
                    In 2022, Sarah and Michael Chen left their corporate careers in San Francisco 
                    to pursue a shared dream: creating a hospitality experience that would reconnect 
                    travelers with nature, community, and themselves.
                  </p>
                  
                  <p>
                    After months of searching for the perfect location, they discovered this 
                    breathtaking property nestled in the California mountains. What began as a 
                    weekend retreat quickly evolved into something much more meaningful—a place 
                    where stories are shared, connections are made, and memories last a lifetime.
                  </p>
                  
                  <p>
                    Every aspect of Haven reflects their commitment to sustainable luxury, from 
                    the locally-sourced materials in our construction to the farm-to-table dining 
                    experiences that celebrate the region&apos;s incredible bounty.
                  </p>
                </div>

                <motion.div
                  className="mt-8 p-6 glass rounded-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <Sparkles size={24} className="text-navy" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Our Mission</h4>
                      <p className="text-muted text-sm leading-relaxed">
                        To create a sanctuary where luxury and sustainability coexist, 
                        where every guest feels valued, and where the beauty of our 
                        natural surroundings inspires connection and renewal.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

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
                        backgroundImage: `url('/images/about-mission.jpg')`,
                      }}
                    >
                    </div>
                  </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="py-24 bg-gradient-to-br from-purple-50 to-purple-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate={valuesInView ? "animate" : "initial"}
          >
            {/* Header */}
            <div className="text-center mb-16">
              <motion.div
                className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6"
                variants={fadeInUp}
              >
                Our Values
              </motion.div>
              
              <motion.h2
                className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6"
                variants={fadeInUp}
              >
                What Drives Us Forward
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
                Our values aren&apos;t just words on a wall—they&apos;re the foundation of every 
                decision we make and every experience we create.
              </motion.p>
            </div>

            {/* Values Grid */}
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
            >
              {values.map((value, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card 
                    variant="glass" 
                    hoverEffect={true}
                    className="h-full text-center group"
                  >
                    <CardContent className="p-6">
                      <motion.div
                        className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: 5 }}
                      >
                        <value.icon size={24} className="text-white" />
                      </motion.div>
                      
                      <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                        {value.title}
                      </h3>
                      
                      <p className="text-muted text-sm text-comfortable text-linear" style={{ lineHeight: '1.75' }}>
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section ref={teamRef} className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate={teamInView ? "animate" : "initial"}
          >
            {/* Header */}
            <div className="text-center mb-16">
              <motion.div
                className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6"
                variants={fadeInUp}
              >
                Meet the Team
              </motion.div>
              
              <motion.h2
                className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6"
                variants={fadeInUp}
              >
                The People Behind Haven
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
                Meet the passionate individuals who bring Haven&apos;s vision to life every day.
              </motion.p>
            </div>

            {/* Founders */}
            <motion.div
              className="grid md:grid-cols-2 gap-12 mb-16"
              variants={staggerContainer}
            >
              {founders.map((founder, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card variant="default" hoverEffect={true} className="overflow-hidden">
                    <div className="aspect-[4/3] relative">
                      <div 
                        className="w-full h-full bg-cover bg-center"
                        style={{
                          backgroundImage: `url('${founder.image}')`,
                        }}
                      >
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                        {founder.name}
                      </h3>
                      <p className="text-secondary font-medium mb-4">{founder.role}</p>
                      <p className="text-muted text-comfortable text-linear" style={{ lineHeight: '1.75' }}>{founder.bio}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className="py-16 bg-primary text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-secondary to-accent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent to-secondary rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate={statsInView ? "animate" : "initial"}
          >
            <motion.div
              className="text-center mb-12"
              variants={fadeInUp}
            >
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
                Haven by the Numbers
              </h2>
              <p className="text-white/80 text-lg">
                Our commitment to excellence speaks for itself
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
            >
              {stats.map((stat, index) => (
                <StatCard key={index} stat={stat} delay={index * 0.1} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Header */}
            <div className="text-center mb-16">
              <motion.div
                className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6"
                variants={fadeInUp}
              >
                Recognition
              </motion.div>
              
              <motion.h2
                className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6"
                variants={fadeInUp}
              >
                Awards & Achievements
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
                We&apos;re honored to be recognized by industry leaders for our commitment 
                to excellence and sustainability.
              </motion.p>
            </div>

            {/* Awards Grid */}
            <motion.div
              className="grid md:grid-cols-2 gap-8"
              variants={staggerContainer}
            >
              {achievements.map((achievement, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card 
                    variant="glass" 
                    hoverEffect={true}
                    className="h-full"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                          <Award size={24} className="text-navy" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-secondary font-semibold mb-1">
                            {achievement.year}
                          </div>
                          <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                            {achievement.title}
                          </h3>
                          <p className="text-muted text-sm mb-3">
                            {achievement.organization}
                          </p>
                          <p className="text-muted text-sm text-comfortable text-linear" style={{ lineHeight: '1.75' }}>
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

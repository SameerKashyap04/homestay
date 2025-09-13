"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Twitter,
  Heart
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const footerLinks = {
  "Quick Links": [
    { href: "/", label: "Home" },
    { href: "/rooms", label: "Rooms" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  "Experiences": [
    { href: "/experiences/wellness", label: "Wellness Retreats" },
    { href: "/experiences/culinary", label: "Culinary Tours" },
    { href: "/experiences/adventure", label: "Adventure Packages" },
    { href: "/experiences/cultural", label: "Cultural Immersion" },
  ],
  "Policies": [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/accessibility", label: "Accessibility" },
    { href: "/cancellation", label: "Cancellation Policy" },
  ],
};

const socialLinks = [
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
];

const contactInfo = [
  { icon: MapPin, text: "123 Serenity Lane, Mountain View, CA" },
  { icon: Phone, text: "+1 (555) 123-4567" },
  { icon: Mail, text: "hello@havenhomestay.com" },
];

export function Footer() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.1 });

  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-secondary to-accent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent to-secondary rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <motion.div
          ref={ref}
          className="border-b border-white/10"
          variants={fadeInUp}
          initial="initial"
          animate={inView ? "animate" : "initial"}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-6xl mx-auto text-center">
              <motion.h3 
                className="font-display text-3xl font-semibold mb-4"
                variants={fadeInUp}
              >
                Stay Connected
              </motion.h3>
              <motion.p 
                className="text-white/80 mb-8 text-lg text-comfortable text-linear"
                style={{ 
                  lineHeight: '1.75',
                  maxWidth: '65ch',
                  marginLeft: 'auto',
                  marginRight: 'auto'
                }}
                variants={fadeInUp}
              >
                Subscribe to our newsletter for exclusive offers, travel tips, and updates on new experiences.
              </motion.p>
              
              <motion.form 
                className="flex flex-col sm:flex-row gap-4 mx-auto"
                variants={fadeInUp}
              >
                <div className="flex-1">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  className="px-6 py-3 bg-accent text-navy font-semibold rounded-lg hover:bg-warm-gold transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </motion.form>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12"
            variants={staggerContainer}
            initial="initial"
            animate={inView ? "animate" : "initial"}
          >
            {/* Brand & Contact */}
            <motion.div 
              className="lg:col-span-2"
              variants={fadeInUp}
            >
              <div className="mb-6">
                <Link href="/" className="flex items-center space-x-2 mb-4">
                  <motion.div
                    className="w-10 h-10 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <span className="text-white font-bold">H</span>
                  </motion.div>
                  <span className="font-display text-2xl font-semibold">Haven</span>
                </Link>
                <p className="text-white/80 text-comfortable text-linear mb-6" style={{ lineHeight: '1.75' }}>
                  A luxury boutique homestay offering curated, high-end experiences in serene mountain settings. 
                  Discover tranquility, comfort, and unforgettable memories.
                </p>
              </div>

              <div className="space-y-3">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 text-white/80"
                    variants={fadeInUp}
                  >
                    <item.icon size={18} className="text-accent" />
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <motion.div key={title} variants={fadeInUp}>
                <h4 className="font-semibold text-lg mb-4 text-accent">{title}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-white/80 hover:text-accent transition-colors duration-200 block py-1"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-white/10"
          variants={fadeInUp}
          initial="initial"
          animate={inView ? "animate" : "initial"}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <motion.p 
                className="text-white/80 text-sm flex items-center gap-1"
                variants={fadeInUp}
              >
                © 2024 Haven Homestay. Made with{" "}
                <Heart size={14} className="text-accent fill-current" />{" "}
                for unforgettable experiences.
              </motion.p>
              
              <motion.div 
                className="flex items-center space-x-4"
                variants={staggerContainer}
                initial="initial"
                animate={inView ? "animate" : "initial"}
              >
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-accent transition-colors duration-200"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

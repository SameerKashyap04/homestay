"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Calendar, Camera, User, Mail, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeIn, slideInLeft, staggerContainer } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useTheme } from "@/hooks/useTheme";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/rooms", label: "Rooms", icon: Calendar },
  { href: "/gallery", label: "Gallery", icon: Camera },
  { href: "/about", label: "About", icon: User },
  { href: "/contact", label: "Contact", icon: Mail },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "glass border-b border-glass-border backdrop-blur-xl bg-white/10" 
          : "bg-transparent backdrop-blur-sm"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <motion.div
                className="w-8 h-8 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="text-white font-bold text-sm">H</span>
              </motion.div>
              <span className="font-display text-xl font-semibold text-foreground">
                Haven
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden lg:flex items-center space-x-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {navItems.map((item) => (
              <motion.div key={item.href} variants={fadeIn}>
                <Link
                  href={item.href}
                  className="relative px-4 py-2 rounded-lg text-foreground hover:text-white transition-all duration-300 font-medium group bg-transparent hover:bg-gradient-to-r hover:from-secondary/20 hover:to-accent/20 hover:shadow-lg hover:shadow-purple-500/20"
                >
                  {item.label}
                  <motion.div
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-secondary to-accent group-hover:w-full transition-all duration-300"
                    whileHover={{ scaleX: 1 }}
                    initial={{ scaleX: 0 }}
                  />
                  {/* Background glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: "linear-gradient(135deg, rgba(108, 52, 131, 0.1) 0%, rgba(165, 105, 189, 0.1) 100%)",
                      boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                    }}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle - Hidden on mobile */}
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <ThemeToggle />
            </motion.div>

            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Link href="/contact">
                <Button variant="primary" size="sm">Book Now</Button>
              </Link>
            </motion.div>

            {/* Mobile menu button */}
            <motion.button
              className="lg:hidden p-2 text-foreground hover:text-secondary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle mobile menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden absolute top-full left-0 right-0 glass border-b border-glass-border backdrop-blur-xl bg-white/20 dark:bg-black/30 shadow-2xl"
              variants={slideInLeft}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <motion.div
                className="container mx-auto px-4 py-6"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    variants={fadeIn}
                    custom={index}
                  >
                    <Link
                      href={item.href}
                      className="relative flex items-center space-x-3 py-3 px-4 rounded-lg text-foreground hover:text-white transition-all duration-300 group bg-transparent hover:bg-gradient-to-r hover:from-secondary/20 hover:to-accent/20 hover:shadow-lg hover:shadow-purple-500/20"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <item.icon size={20} className="group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-medium">{item.label}</span>
                      {/* Background glow effect */}
                      <motion.div
                        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: "linear-gradient(135deg, rgba(108, 52, 131, 0.1) 0%, rgba(165, 105, 189, 0.1) 100%)",
                          boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                        }}
                      />
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  className="pt-4 mt-4 border-t border-border space-y-4"
                  variants={fadeIn}
                >
                  {/* Theme Toggle for Mobile */}
                  <div className="flex items-center justify-between px-4 py-3 rounded-lg bg-gradient-to-r from-secondary/10 to-accent/10 border border-border/50">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                        {theme === "dark" ? (
                          <Moon size={16} className="text-white" />
                        ) : (
                          <Sun size={16} className="text-white" />
                        )}
                      </div>
                      <span className="text-foreground font-medium">Theme</span>
                    </div>
                    <ThemeToggle />
                  </div>
                  
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button 
                      variant="primary" 
                      size="md" 
                      className="w-full"
                    >
                      Book Your Stay
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}

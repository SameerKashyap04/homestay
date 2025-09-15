"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Sparkles } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="w-16 h-8 rounded-full bg-glass-bg border border-glass-border animate-pulse" />
    );
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-16 h-8 rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300"
      style={{
        background: isDark 
          ? "linear-gradient(135deg, #1a0b1e 0%, #2d1b32 50%, #4a235a 100%)"
          : "linear-gradient(135deg, #f4ecf7 0%, #e8daef 50%, #d2b4de 100%)",
        boxShadow: isDark
          ? "0 4px 20px rgba(165, 105, 189, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.1)"
          : "0 4px 20px rgba(74, 35, 90, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.8)"
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {/* Background gradient overlay */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-20"
        animate={{
          background: isDark
            ? "linear-gradient(45deg, rgba(165, 105, 189, 0.3), rgba(74, 35, 90, 0.3))"
            : "linear-gradient(45deg, rgba(244, 236, 247, 0.5), rgba(212, 180, 222, 0.5))"
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Sliding toggle circle */}
      <motion.div
        className="relative w-6 h-6 rounded-full flex items-center justify-center z-10"
        animate={{
          x: isDark ? 24 : 0,
          background: isDark 
            ? "linear-gradient(135deg, #f4ecf7 0%, #e8daef 100%)"
            : "linear-gradient(135deg, #4a235a 0%, #6c3483 100%)",
          boxShadow: isDark
            ? "0 2px 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(244, 236, 247, 0.5)"
            : "0 2px 10px rgba(0, 0, 0, 0.2), 0 0 20px rgba(74, 35, 90, 0.4)"
        }}
        transition={{ 
          type: "spring", 
          stiffness: 500, 
          damping: 30,
          duration: 0.6 
        }}
      >
        {/* Icon container with rotation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={theme}
            initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 180, scale: 0.5 }}
            transition={{ duration: 0.4, ease: "backOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {isDark ? (
              <Moon 
                size={14} 
                className="text-purple-900"
                style={{ filter: "drop-shadow(0 0 4px rgba(74, 35, 90, 0.6))" }}
              />
            ) : (
              <Sun 
                size={14} 
                className="text-yellow-100"
                style={{ filter: "drop-shadow(0 0 4px rgba(255, 235, 59, 0.8))" }}
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Sparkle effects */}
        <AnimatePresence>
          {theme === "dark" && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="absolute -top-1 -right-1"
            >
              <Sparkles size={8} className="text-purple-300 opacity-70" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Background icons */}
      <div className="absolute inset-0 flex items-center justify-between px-2 opacity-40">
        <motion.div
          animate={{ 
            opacity: isDark ? 0.3 : 0.7,
            scale: isDark ? 0.8 : 1
          }}
          transition={{ duration: 0.3 }}
        >
          <Sun size={12} className={isDark ? "text-purple-400" : "text-purple-700"} />
        </motion.div>
        <motion.div
          animate={{ 
            opacity: isDark ? 0.7 : 0.3,
            scale: isDark ? 1 : 0.8
          }}
          transition={{ duration: 0.3 }}
        >
          <Moon size={12} className={isDark ? "text-purple-200" : "text-purple-500"} />
        </motion.div>
      </div>

      {/* Outer glow ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: isDark
            ? "0 0 30px rgba(165, 105, 189, 0.6), 0 0 60px rgba(165, 105, 189, 0.3)"
            : "0 0 30px rgba(74, 35, 90, 0.5), 0 0 60px rgba(74, 35, 90, 0.2)"
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Pulse effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-full"
        whileHover={{
          boxShadow: isDark
            ? "0 0 40px rgba(165, 105, 189, 0.8), 0 0 80px rgba(165, 105, 189, 0.4)"
            : "0 0 40px rgba(74, 35, 90, 0.7), 0 0 80px rgba(74, 35, 90, 0.3)"
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  );
}

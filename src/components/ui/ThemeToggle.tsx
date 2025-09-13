"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { Button } from "./Button";

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-lg bg-glass-bg border border-glass-border" />
    );
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="relative w-10 h-10 p-0 rounded-lg bg-glass-bg border border-glass-border hover:bg-glass-bg/80 transition-all duration-300"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <motion.div
        key={theme}
        initial={{ opacity: 0, rotate: -90 }}
        animate={{ opacity: 1, rotate: 0 }}
        exit={{ opacity: 0, rotate: 90 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {theme === "light" ? (
          <Moon size={18} className="text-foreground" />
        ) : (
          <Sun size={18} className="text-foreground" />
        )}
      </motion.div>
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        animate={{
          boxShadow: theme === "dark" 
            ? "0 0 20px rgba(165, 105, 189, 0.3)" 
            : "0 0 20px rgba(74, 35, 90, 0.2)"
        }}
        transition={{ duration: 0.3 }}
      />
    </Button>
  );
}

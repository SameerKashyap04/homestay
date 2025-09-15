"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Sparkles, Stars, Cloud } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export function FloatingThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-glass-bg border border-glass-border animate-pulse z-50 hidden lg:block" />
    );
  }

  const isDark = theme === "dark";

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 hidden lg:block"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      {/* Floating particles */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  background: isDark ? "#bb8fce" : "#6c3483",
                  boxShadow: isDark 
                    ? "0 0 10px rgba(187, 143, 206, 0.8)" 
                    : "0 0 10px rgba(108, 52, 131, 0.8)"
                }}
                initial={{
                  x: 28,
                  y: 28,
                  scale: 0,
                }}
                animate={{
                  x: 28 + Math.cos((i * Math.PI * 2) / 6) * 40,
                  y: 28 + Math.sin((i * Math.PI * 2) / 6) * 40,
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main toggle button */}
      <motion.button
        onClick={toggleTheme}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative w-14 h-14 rounded-full p-2 focus:outline-none focus:ring-4 focus:ring-purple-500/50 transition-all duration-300 overflow-hidden"
        style={{
          background: isDark
            ? "linear-gradient(135deg, #1a0b1e 0%, #2d1b32 30%, #4a235a 70%, #6c3483 100%)"
            : "linear-gradient(135deg, #f4ecf7 0%, #e8daef 30%, #d2b4de 70%, #bb8fce 100%)",
          boxShadow: isDark
            ? "0 8px 32px rgba(165, 105, 189, 0.6), 0 0 60px rgba(165, 105, 189, 0.4), inset 0 2px 8px rgba(255, 255, 255, 0.1)"
            : "0 8px 32px rgba(74, 35, 90, 0.5), 0 0 60px rgba(74, 35, 90, 0.3), inset 0 2px 8px rgba(255, 255, 255, 0.9)"
        }}
        whileHover={{ 
          scale: 1.1,
          rotate: isDark ? -15 : 15
        }}
        whileTap={{ scale: 0.9 }}
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      >
        {/* Animated background stars */}
        <AnimatePresence>
          {isDark && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
            >
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-0.5 h-0.5 bg-purple-200 rounded-full opacity-60"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [0.5, 1.2, 0.5],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Cloud particles for light mode */}
        <AnimatePresence>
          {!isDark && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-purple-400 opacity-30"
                  style={{
                    left: `${15 + i * 25}%`,
                    top: `${15 + i * 20}%`,
                  }}
                  animate={{
                    x: [0, 10, 0],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                >
                  <Cloud size={8} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main icon with complex animations */}
        <motion.div
          className="relative w-full h-full flex items-center justify-center z-10"
          animate={{
            rotate: isDark ? 360 : 0,
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={theme}
              initial={{ 
                opacity: 0, 
                rotate: -180, 
                scale: 0.3,
                y: 20
              }}
              animate={{ 
                opacity: 1, 
                rotate: 0, 
                scale: 1,
                y: 0
              }}
              exit={{ 
                opacity: 0, 
                rotate: 180, 
                scale: 0.3,
                y: -20
              }}
              transition={{ 
                duration: 0.6, 
                ease: "backOut",
                type: "spring",
                stiffness: 300
              }}
              className="relative"
            >
              {isDark ? (
                <div className="relative">
                  <Moon 
                    size={24} 
                    className="text-purple-100"
                    style={{ 
                      filter: "drop-shadow(0 0 8px rgba(244, 236, 247, 0.8))",
                    }}
                  />
                  {/* Sparkles around moon */}
                  <motion.div
                    className="absolute -top-1 -right-1"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles size={10} className="text-purple-300" />
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-1 -left-1"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  >
                    <Stars size={8} className="text-purple-200" />
                  </motion.div>
                </div>
              ) : (
                <div className="relative">
                  <Sun 
                    size={24} 
                    className="text-yellow-300"
                    style={{ 
                      filter: "drop-shadow(0 0 12px rgba(255, 193, 7, 0.9))",
                    }}
                  />
                  {/* Sun rays */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-0.5 h-2 bg-yellow-400 rounded-full opacity-60"
                        style={{
                          left: "50%",
                          top: "-4px",
                          transformOrigin: "50% 16px",
                          transform: `rotate(${i * 45}deg)`,
                        }}
                        animate={{
                          scaleY: [1, 1.5, 1],
                          opacity: [0.4, 0.8, 0.4],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                  </motion.div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Ripple effect on click */}
        <motion.div
          className="absolute inset-0 rounded-full"
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{ scale: 0, opacity: 0.8 }}
          whileTap={{
            scale: [0, 1.5],
            opacity: [0.6, 0],
          }}
          transition={{ duration: 0.6 }}
          style={{
            background: isDark
              ? "radial-gradient(circle, rgba(165, 105, 189, 0.6) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(74, 35, 90, 0.6) 0%, transparent 70%)"
          }}
        />

        {/* Orbiting elements */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
            >
              <motion.div
                className="absolute w-2 h-2 rounded-full"
                style={{
                  background: isDark ? "#bb8fce" : "#6c3483",
                  boxShadow: isDark 
                    ? "0 0 8px rgba(187, 143, 206, 0.8)" 
                    : "0 0 8px rgba(108, 52, 131, 0.8)"
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                transformTemplate={({ rotate }) => 
                  `translate(-50%, -50%) rotate(${rotate}) translateX(35px) rotate(-${rotate})`
                }
                style={{
                  left: "50%",
                  top: "50%",
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            className="absolute right-16 top-1/2 transform -translate-y-1/2 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap"
            style={{
              background: isDark ? "#2d1b32" : "#f4ecf7",
              color: isDark ? "#f4ecf7" : "#2d1b32",
              border: `1px solid ${isDark ? "#4a235a" : "#d2b4de"}`,
              boxShadow: isDark 
                ? "0 4px 20px rgba(0, 0, 0, 0.3)" 
                : "0 4px 20px rgba(74, 35, 90, 0.2)"
            }}
          >
            Switch to {isDark ? "Light" : "Dark"} Mode
            <motion.div
              className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0"
              style={{
                borderLeft: `6px solid ${isDark ? "#2d1b32" : "#f4ecf7"}`,
                borderTop: "6px solid transparent",
                borderBottom: "6px solid transparent",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

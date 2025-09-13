"use client";

import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    variant = "primary", 
    size = "md", 
    isLoading = false, 
    children, 
    className,
    disabled,
    ...props 
  }, ref) => {
    const baseClasses = "relative inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden";
    
    const variants = {
      primary: "bg-primary text-white hover:bg-purple-800 focus:ring-primary border-primary",
      secondary: "bg-secondary text-white hover:bg-purple-600 focus:ring-secondary border-secondary",
      outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary",
      ghost: "text-primary hover:bg-primary/10 focus:ring-primary",
    };
    
    const sizes = {
      sm: "px-4 py-2 text-sm rounded-md",
      md: "px-6 py-3 text-base rounded-lg",
      lg: "px-8 py-4 text-lg rounded-xl",
    };

    return (
      <motion.button
        ref={ref}
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          className
        )}
        disabled={disabled || isLoading}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        {...props}
      >
        <motion.span
          className="relative z-10 flex items-center gap-2"
          initial={{ opacity: 1 }}
          animate={{ opacity: isLoading ? 0.7 : 1 }}
        >
          {isLoading && (
            <motion.div
              className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          )}
          {children}
        </motion.span>
        
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
          whileHover={{ translateX: "200%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
        
        {/* Focus ring */}
        <motion.div
          className="absolute inset-0 rounded-inherit border-2 border-accent opacity-0"
          whileFocus={{ opacity: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        />
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button };

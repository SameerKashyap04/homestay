"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { cardHover, glowHover } from "@/lib/animations";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "elevated";
  hoverEffect?: boolean;
  glowOnHover?: boolean;
  children: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ 
    variant = "default", 
    hoverEffect = true,
    glowOnHover = false,
    children, 
    className,
    ...props 
  }, ref) => {
    const baseClasses = "rounded-lg overflow-hidden";
    
    const variants = {
      default: "bg-card border border-border shadow-card",
      glass: "glass",
      elevated: "bg-card shadow-elevated border border-border",
    };

    const cardVariants = {
      ...cardHover,
      ...(glowOnHover ? glowHover : {}),
    };

    return (
      <motion.div
        ref={ref}
        className={cn(
          baseClasses,
          variants[variant],
          className
        )}
        variants={hoverEffect ? cardVariants : undefined}
        initial="initial"
        whileHover="hover"
        style={{ transformStyle: "preserve-3d" }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("p-6 pb-3", className)}
      {...props}
    />
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("font-display text-2xl font-semibold leading-tight text-foreground", className)}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-muted text-sm leading-relaxed mt-2", className)}
      {...props}
    />
  )
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("px-6 pb-6", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center px-6 py-3 bg-muted/5 border-t border-border", className)}
      {...props}
    />
  )
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };

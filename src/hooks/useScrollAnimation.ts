import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

interface UseScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const { threshold = 0.1, triggerOnce = true, rootMargin = "0px" } = options;
  
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
    rootMargin,
  });

  return { ref, inView };
}

export function useParallax(speed: number = 0.5) {
  const [offset, setOffset] = useState(0);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * speed;
        setOffset(parallax);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return { ref: elementRef, offset };
}

export function useCountUp(end: number, duration: number = 2000, start: number = 0) {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useScrollAnimation({ threshold: 0.5 });

  useEffect(() => {
    if (inView && !isVisible) {
      setIsVisible(true);
      const increment = (end - start) / (duration / 16); // 60fps
      let current = start;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, isVisible, end, start, duration]);

  return { ref, count };
}

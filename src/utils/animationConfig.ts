/**
 * Centralized animation configuration for consistent timing and easing
 */

export const ANIMATION_CONFIG = {
  // Durations (in seconds)
  duration: {
    fast: 0.3,
    normal: 0.5,
    slow: 0.8,
    verySlow: 1.2,
  },

  // Easing functions
  ease: {
    default: 'power2.out',
    smooth: 'power1.inOut',
    bounce: 'back.out(1.4)',
    elastic: 'elastic.out(1, 0.5)',
  },

  // Stagger timing
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.15,
    verySlow: 0.2,
  },

  // Common animation values
  values: {
    slideDistance: 30,
    hoverLift: -8,
    scaleHover: 1.05,
    scaleClick: 0.95,
  },

  // ScrollTrigger defaults
  scrollTrigger: {
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
} as const;

/**
 * Check if user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Get duration based on reduced motion preference
 */
export const getAnimationDuration = (duration: number): number => {
  return prefersReducedMotion() ? 0.01 : duration;
};

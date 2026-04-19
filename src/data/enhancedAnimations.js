// Enhanced animation configurations for smooth, professional feel
export const enhancedAnimations = {
  // Page entrance animations
  pageEnter: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  },

  // Section reveal animations
  sectionReveal: {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.8, ease: "easeOut" },
  },

  // Staggered container animations
  staggerContainer: {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.2 },
    variants: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.2,
        },
      },
    },
  },

  // Individual item animations within stagger
  staggerItem: {
    variants: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
      },
    },
  },

  // Smooth hover lift effect
  hoverLift: {
    y: -8,
    transition: { duration: 0.3, ease: "easeOut" },
  },

  // Button click animation
  buttonClick: {
    scale: 0.95,
    transition: { duration: 0.2 },
  },

  // Floating animation for decorative elements
  floating: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },

  // Pulse animation for attention
  pulse: {
    opacity: [1, 0.7, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },

  // Smooth scroll entrance from bottom
  scrollEnter: {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.7, ease: "easeOut" },
  },

  // Card hover animations
  cardHover: {
    boxShadow: "0 20px 40px rgba(168, 85, 247, 0.2)",
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },

  // Text reveal animation
  textReveal: {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" },
  },

  // Smooth fade transition
  fadeInOut: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.4, ease: "easeInOut" },
  },

  // Viewport settings for optimal performance
  viewport: {
    once: true,
    amount: 0.3,
    margin: "0px 0px -100px 0px",
  },
};

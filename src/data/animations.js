// Animation configurations for SkyX
export const animations = {
  // Easing curves
  easing: {
    smooth: [0.25, 0.46, 0.45, 0.94],
    bounce: [0.68, -0.55, 0.265, 1.55],
    elastic: [0.175, 0.885, 0.32, 1.275],
    gentle: [0.4, 0, 0.2, 1],
  },

  // Common variants
  fadeInUp: {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },

  fadeInLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },

  fadeInRight: {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },

  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  },

  slideInFromBottom: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },

  // Staggered animations
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },

  staggerItem: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },

  // Hover effects
  hoverLift: {
    scale: 1.05,
    y: -5,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },

  hoverGlow: {
    boxShadow: "0 0 30px rgba(168, 85, 247, 0.3)",
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },

  // Pulse animations
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },

  // Floating animation
  float: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },

  // Typing effect
  typing: {
    width: ["0%", "100%"],
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },

  // Bounce in
  bounceIn: {
    scale: [0.3, 1.05, 0.9, 1],
    opacity: [0, 1, 1, 1],
    transition: {
      duration: 0.6,
      times: [0, 0.4, 0.7, 1],
      ease: [0.68, -0.55, 0.265, 1.55],
    },
  },

  // Rotate in
  rotateIn: {
    rotate: [180, 0],
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },

  // Viewport settings
  viewport: {
    once: true,
    amount: 0.3,
    margin: "-50px",
  },

  // Scroll-triggered animations
  scrollReveal: {
    initial: { opacity: 0, y: 50 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    viewport: { once: true, amount: 0.3 },
  },
};

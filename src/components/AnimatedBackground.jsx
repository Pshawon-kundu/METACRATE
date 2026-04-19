import { motion as Motion } from "framer-motion";
import React from "react";

const AnimatedBackground = React.memo(({ isDark }) => {
  const floatingOrbs = [
    { id: 1, size: 300, duration: 20, delay: 0, x: "10%", y: "20%" },
    { id: 2, size: 250, duration: 25, delay: 5, x: "80%", y: "30%" },
    { id: 3, size: 200, duration: 30, delay: 10, x: "50%", y: "70%" },
    { id: 4, size: 280, duration: 22, delay: 2, x: "20%", y: "60%" },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      {/* Base gradient background */}
      <div
        className={`absolute inset-0 ${
          isDark
            ? "bg-gradient-to-br from-slate-950 via-purple-950/40 to-slate-950"
            : "bg-gradient-to-br from-slate-50 via-purple-100/30 to-slate-100"
        }`}
      />

      {/* Animated gradient layers */}
      <Motion.div
        className={`absolute inset-0 ${
          isDark
            ? "bg-gradient-to-t from-purple-900/20 via-transparent to-transparent"
            : "bg-gradient-to-t from-purple-300/10 via-transparent to-transparent"
        }`}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating gradient orbs */}
      {floatingOrbs.map((orb) => (
        <Motion.div
          key={orb.id}
          className={`absolute rounded-full mix-blend-screen filter blur-3xl ${
            isDark
              ? "bg-gradient-to-br from-purple-500/30 to-pink-500/10"
              : "bg-gradient-to-br from-purple-400/20 to-pink-300/10"
          }`}
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
          }}
          animate={{
            x: [0, 50, -50, 0],
            y: [0, 100, -100, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Animated grid pattern overlay */}
      <Motion.div
        className={`absolute inset-0 opacity-20 ${
          isDark ? "bg-grid-pattern-dark" : "bg-grid-pattern-light"
        }`}
        animate={{
          backgroundPosition: ["0px 0px", "50px 50px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Radial glow from center */}
      <Motion.div
        className={`absolute inset-0 ${
          isDark
            ? "bg-radial-gradient from-purple-600/10 to-transparent"
            : "bg-radial-gradient from-purple-400/5 to-transparent"
        }`}
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
});

AnimatedBackground.displayName = "AnimatedBackground";

export default AnimatedBackground;

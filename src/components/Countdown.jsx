import { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import { animations } from "../data/animations";

function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60),
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <Motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={animations.viewport}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="absolute top-[400px] md:top-[450px] lg:top-[400px] right-4 md:right-8 z-10 rounded-2xl border border-purple-400/30 bg-slate-900/90 backdrop-blur-sm p-4 shadow-[0_0_30px_rgba(168,85,247,0.15)]"
      whileHover={animations.hoverLift}
    >
      <Motion.div
        className="text-center mb-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={animations.viewport}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-purple-300">
          Launch Countdown
        </p>
        <p className="text-xs text-slate-400 mt-1">April 25, 2026</p>
      </Motion.div>

      <div className="grid grid-cols-4 gap-2">
        {timeUnits.map((unit, index) => (
          <Motion.div
            key={unit.label}
            className="text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={animations.viewport}
            transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
          >
            <Motion.div
              className="rounded-lg bg-purple-500/20 border border-purple-400/30 px-2 py-2 min-w-12.5"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(168, 85, 247, 0.3)",
              }}
              transition={{ duration: 0.2 }}
            >
              <Motion.div
                className="text-lg font-bold text-white"
                key={unit.value} // Re-animate when value changes
                initial={{ scale: 1.2, color: "#a855f7" }}
                animate={{ scale: 1, color: "#ffffff" }}
                transition={{ duration: 0.3 }}
              >
                {unit.value.toString().padStart(2, "0")}
              </Motion.div>
            </Motion.div>
            <p className="text-[10px] font-medium text-slate-400 mt-1 uppercase tracking-wide">
              {unit.label}
            </p>
          </Motion.div>
        ))}
      </div>

      <Motion.div
        className="mt-3 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={animations.viewport}
        transition={{ duration: 0.4, delay: 1.0 }}
      >
        <Motion.div
          className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 border border-purple-400/20 px-3 py-1"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <Motion.div
            className="h-2 w-2 rounded-full bg-green-400"
            animate={{
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <span className="text-xs font-medium text-green-400">Live</span>
        </Motion.div>
      </Motion.div>
    </Motion.div>
  );
}

export default Countdown;

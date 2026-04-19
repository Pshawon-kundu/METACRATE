import { motion as Motion } from "framer-motion";
import { animations } from "../data/animations";
import Countdown from "./Countdown";
import AirdropAnimation from "./AirdropAnimation";

const pulseMetrics = [
  { label: "Gaming Market", value: "$200B+", duration: 2.8 },
  { label: "Launch Date", value: "April 25", duration: 2.2 },
  { label: "Early Access", value: "Limited", duration: 3.1 },
];

const heroNodes = [
  { id: "h1", x: 12, y: 18 },
  { id: "h2", x: 31, y: 13 },
  { id: "h3", x: 50, y: 18 },
  { id: "h4", x: 69, y: 13 },
  { id: "h5", x: 88, y: 18 },
  { id: "h6", x: 17, y: 50 },
  { id: "h7", x: 36, y: 50 },
  { id: "h8", x: 50, y: 50 },
  { id: "h9", x: 64, y: 50 },
  { id: "h10", x: 83, y: 50 },
  { id: "h11", x: 12, y: 82 },
  { id: "h12", x: 31, y: 87 },
  { id: "h13", x: 50, y: 82 },
  { id: "h14", x: 69, y: 87 },
  { id: "h15", x: 88, y: 82 },
];

const heroLinks = [
  ["h1", "h2"],
  ["h2", "h3"],
  ["h3", "h4"],
  ["h4", "h5"],
  ["h1", "h6"],
  ["h2", "h7"],
  ["h3", "h8"],
  ["h4", "h9"],
  ["h5", "h10"],
  ["h6", "h7"],
  ["h7", "h8"],
  ["h8", "h9"],
  ["h9", "h10"],
  ["h6", "h11"],
  ["h7", "h12"],
  ["h8", "h13"],
  ["h9", "h14"],
  ["h10", "h15"],
  ["h11", "h12"],
  ["h12", "h13"],
  ["h13", "h14"],
  ["h14", "h15"],
];

const heroNodeMap = Object.fromEntries(
  heroNodes.map((node) => [node.id, node]),
);

function Hero({ brand, content, theme }) {
  const isDark = theme === "dark";
  const heroBackdrop = !isDark
    ? "bg-[radial-gradient(circle_at_15%_20%,rgba(168,85,247,0.2),transparent_38%),radial-gradient(circle_at_82%_16%,rgba(139,69,193,0.18),transparent_42%),linear-gradient(180deg,#f6fbff_0%,#edf6ff_55%,#e2f3ff_100%)]"
    : "bg-[radial-gradient(circle_at_15%_20%,rgba(168,85,247,0.18),transparent_40%),radial-gradient(circle_at_80%_18%,rgba(139,69,193,0.12),transparent_45%),linear-gradient(180deg,#020617_0%,#020617_60%,#030A15_100%)]";

  const innerSurface = isDark
    ? "bg-gradient-to-br from-slate-900 via-slate-950 to-purple-950/40"
    : "bg-gradient-to-br from-purple-50 via-violet-50 to-purple-100";

  const lineStroke = isDark ? "rgba(168,85,247,0.55)" : "rgba(139,69,193,0.72)";
  const nodeClass = isDark
    ? "border-purple-200/65 bg-purple-300/45 shadow-[0_0_14px_rgba(168,85,247,0.85)]"
    : "border-purple-700/55 bg-purple-500/65 shadow-[0_0_10px_rgba(139,69,193,0.5)]";

  return (
    <section id="home" className="relative overflow-hidden pt-14 sm:pt-20">
      <div
        className={`pointer-events-none absolute inset-0 -z-10 ${heroBackdrop}`}
      />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Motion.div
          initial="hidden"
          whileInView="visible"
          viewport={animations.viewport}
          transition={{ staggerChildren: 0.15, delayChildren: 0.1 }}
          className="space-y-7"
        >
          <Motion.p
            variants={animations.fadeInUp}
            className="inline-flex rounded-full border border-purple-400/30 bg-purple-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-purple-300"
            whileHover={animations.hoverLift}
          >
            {brand.name} • {brand.ticker}
          </Motion.p>
          <Motion.h1
            variants={animations.fadeInUp}
            className="max-w-2xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            {content.title}
          </Motion.h1>
          <Motion.div
            variants={animations.fadeInUp}
            className="h-1.5 w-36 overflow-hidden rounded-full bg-cyan-400/15"
          >
            <Motion.span
              className="block h-full w-20 rounded-full bg-purple-300"
              animate={{
                x: [-28, 118, -28],
                boxShadow: [
                  "0 0 0 rgba(168, 85, 247, 0)",
                  "0 0 20px rgba(168, 85, 247, 0.5)",
                  "0 0 0 rgba(168, 85, 247, 0)",
                ],
              }}
              transition={{
                duration: 3.6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </Motion.div>
          <Motion.p
            variants={animations.fadeInUp}
            className="max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg"
          >
            {content.subtitle}
          </Motion.p>

          <Motion.div
            variants={animations.fadeInUp}
            className="max-w-xl rounded-2xl border border-purple-300/25 bg-slate-900/55 p-3.5 sm:p-4"
            whileHover={animations.hoverGlow}
          >
            <div className="mb-3 flex items-center justify-between">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-purple-300">
                Live Network Feed
              </p>
              <span className="inline-flex items-center gap-2 text-xs font-medium text-cyan-200">
                <Motion.span
                  className="h-2 w-2 rounded-full bg-purple-300"
                  animate={{
                    opacity: [0.4, 1, 0.4],
                    scale: [1, 1.25, 1],
                    boxShadow: [
                      "0 0 0 rgba(168, 85, 247, 0)",
                      "0 0 10px rgba(168, 85, 247, 0.6)",
                      "0 0 0 rgba(168, 85, 247, 0)",
                    ],
                  }}
                  transition={{
                    duration: 1.3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
                Active
              </span>
            </div>

            <div className="space-y-3">
              {pulseMetrics.map((metric, index) => (
                <Motion.div
                  key={metric.label}
                  className="space-y-1.5"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={animations.viewport}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300">{metric.label}</span>
                    <span className="font-semibold text-purple-200">
                      {metric.value}
                    </span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-purple-400/10">
                    <Motion.span
                      className="block h-full w-24 rounded-full bg-purple-300/85"
                      animate={{
                        x: [-26, 188, -26],
                        boxShadow: [
                          "0 0 0 rgba(168, 85, 247, 0)",
                          "0 0 8px rgba(168, 85, 247, 0.4)",
                          "0 0 0 rgba(168, 85, 247, 0)",
                        ],
                      }}
                      transition={{
                        duration: metric.duration,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </Motion.div>
              ))}
            </div>
          </Motion.div>

          <Motion.div
            variants={animations.fadeInUp}
            className="flex flex-wrap gap-3"
          >
            <Motion.a
              href="#apps"
              className="rounded-full bg-purple-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-purple-300"
              whileHover={animations.hoverLift}
              whileTap={{ scale: 0.95 }}
            >
              {content.ctaPrimary}
            </Motion.a>
            <Motion.a
              href="#roadmap"
              className="rounded-full border border-purple-300/35 px-6 py-3 text-sm font-semibold text-purple-200 transition hover:border-purple-300 hover:bg-purple-300/10"
              whileHover={animations.hoverLift}
              whileTap={{ scale: 0.95 }}
            >
              {content.ctaSecondary}
            </Motion.a>
            <Motion.a
              href="#pitch-deck"
              className="rounded-full border border-purple-300/35 px-6 py-3 text-sm font-semibold text-purple-200 transition hover:border-purple-300 hover:bg-purple-300/10"
              whileHover={animations.hoverLift}
              whileTap={{ scale: 0.95 }}
            >
              {content.ctaTertiary}
            </Motion.a>
          </Motion.div>

          {content.launchDate && (
            <Motion.div
              variants={animations.fadeInUp}
              className="mt-4 rounded-lg bg-purple-500/10 border border-purple-500/20 px-4 py-2 inline-block"
              whileHover={animations.hoverLift}
            >
              <p className="text-sm font-semibold text-purple-200">
                🚀 {content.launchDate}
              </p>
            </Motion.div>
          )}

          {content.supportingText && (
            <Motion.p
              variants={animations.fadeInUp}
              className="mt-4 text-sm text-slate-400"
            >
              {content.supportingText}
            </Motion.p>
          )}

          <Motion.div
            variants={animations.fadeInUp}
            className="grid grid-cols-1 gap-3 sm:grid-cols-3"
          >
            {content.trustBadges.map((badge, index) => (
              <Motion.div
                key={badge.label}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3"
                whileHover={animations.hoverLift}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={animations.viewport}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <p className="text-lg font-bold text-purple-200">
                  {badge.value}
                </p>
                <p className="text-xs text-slate-400">{badge.label}</p>
              </Motion.div>
            ))}
          </Motion.div>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="relative mx-auto h-70 w-full max-w-xl rounded-3xl border border-purple-300/20 bg-slate-900/70 p-4 shadow-[0_0_60px_rgba(168,85,247,0.12)] sm:h-85 sm:p-5 lg:h-95 lg:p-6"
        >
          <Countdown targetDate="2026-04-25T00:00:00" />
          <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-purple-400/30 blur-2xl" />
          <div className="absolute bottom-10 right-10 h-28 w-28 rounded-full bg-violet-500/30 blur-2xl" />
          <div
            className={`relative h-full overflow-hidden rounded-2xl border border-purple-200/20 ${innerSurface}`}
          >
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {heroLinks.map(([fromId, toId], index) => {
                const from = heroNodeMap[fromId];
                const to = heroNodeMap[toId];

                return (
                  <Motion.line
                    key={`${fromId}-${toId}`}
                    x1={from.x}
                    y1={from.y}
                    x2={to.x}
                    y2={to.y}
                    stroke={lineStroke}
                    strokeWidth="0.22"
                    strokeDasharray="1.2 0.9"
                    animate={{
                      opacity: [0.2, 0.9, 0.2],
                      pathLength: [0.2, 1, 0.2],
                    }}
                    transition={{
                      duration: 3.1,
                      delay: index * 0.03,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                );
              })}
            </svg>

            {heroNodes.map((node, index) => (
              <Motion.span
                key={node.id}
                className={`absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border ${nodeClass}`}
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                animate={{ scale: [1, 1.25, 1], opacity: [0.6, 1, 0.6] }}
                transition={{
                  duration: 2.2,
                  delay: index * 0.05,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            ))}

            <Motion.div
              className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-purple-300/30 bg-purple-300/10"
              animate={{ rotate: 360 }}
              transition={{
                duration: 11,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <div className="absolute inset-2 grid grid-cols-2 gap-1">
                {[...Array(4)].map((_, index) => (
                  <Motion.div
                    key={index}
                    className="rounded-md border border-purple-300/40 bg-purple-400/15"
                    animate={{ opacity: [0.25, 0.85, 0.25] }}
                    transition={{
                      duration: 1.7,
                      delay: index * 0.14,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </Motion.div>

            <div className="pointer-events-none absolute inset-2 rounded-xl border border-cyan-300/20" />

            <AirdropAnimation />
          </div>
        </Motion.div>
      </div>
    </section>
  );
}

export default Hero;

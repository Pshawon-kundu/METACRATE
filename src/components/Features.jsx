import { motion as Motion } from "framer-motion";
import { WalletMinimal, Zap, Cpu, Network } from "lucide-react";

const icons = [WalletMinimal, Zap, Cpu, Network];

function Features({ features, isDark = true }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="features"
      className={`py-16 sm:py-20 ${isDark ? "bg-slate-900" : "bg-white"}`}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-10 max-w-2xl"
        >
          <p
            className={`text-sm font-semibold uppercase tracking-[0.16em] ${
              isDark ? "text-purple-300" : "text-purple-600"
            }`}
          >
            Core Features
          </p>
          <h2
            className={`mt-3 text-3xl font-black sm:text-4xl ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Fast, affordable, and builder-ready
          </h2>
        </Motion.div>

        <Motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
        >
          {features.map((feature, index) => {
            const Icon = icons[index];
            return (
              <Motion.article
                key={feature.title}
                variants={itemVariants}
                whileHover={{
                  y: -12,
                  boxShadow: isDark
                    ? "0 25px 50px rgba(168, 85, 247, 0.12)"
                    : "0 25px 50px rgba(139, 69, 193, 0.12)",
                }}
                className={`group relative overflow-hidden rounded-2xl border p-6 transition-all ${
                  isDark
                    ? "border-slate-800 bg-slate-900/70 hover:border-purple-300/40"
                    : "border-slate-200 bg-slate-100/50 hover:border-purple-400/60"
                }`}
              >
                {/* Animated gradient background on hover */}
                <Motion.div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0"
                  whileHover={{
                    background: isDark
                      ? "linear-gradient(135deg, rgba(168,85,247,0.06), rgba(236,72,153,0.03))"
                      : "linear-gradient(135deg, rgba(168,85,247,0.04), rgba(236,72,153,0.02))",
                  }}
                  transition={{ duration: 0.4 }}
                />

                {/* Icon with animation */}
                <Motion.span
                  className={`relative z-10 inline-flex rounded-xl border p-2 transition-all ${
                    isDark
                      ? "border-purple-300/30 bg-purple-400/10 text-purple-300"
                      : "border-purple-400/50 bg-purple-200/30 text-purple-700"
                  }`}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Motion.div
                    animate={{
                      y: [0, -2, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Icon size={18} />
                  </Motion.div>
                </Motion.span>

                <h3
                  className={`relative z-10 mt-4 text-xl font-bold transition-colors ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  {feature.title}
                </h3>

                <p
                  className={`relative z-10 mt-3 text-sm leading-relaxed transition-colors ${
                    isDark ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  {feature.description}
                </p>

                {/* Bottom accent line */}
                <Motion.div
                  className={`absolute bottom-0 left-0 h-1 ${
                    isDark ? "bg-purple-400/50" : "bg-purple-500/50"
                  }`}
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.4 }}
                />
              </Motion.article>
            );
          })}
        </Motion.div>
      </div>
    </section>
  );
}

export default Features;

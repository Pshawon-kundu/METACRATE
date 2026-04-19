import { motion as Motion } from "framer-motion";
import { animations } from "../data/animations";
import {
  MessageSquare,
  Send,
  GitBranch,
  AtSign,
  CandlestickChart,
} from "lucide-react";

const iconsByName = {
  X: AtSign,
  Discord: MessageSquare,
  Telegram: Send,
  GitHub: GitBranch,
};

function Community({ markets, communities, isDark = true }) {
  return (
    <section
      id="community"
      className={`py-16 sm:py-20 ${isDark ? "bg-slate-900" : "bg-white"}`}
    >
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Motion.article
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={animations.viewport}
          transition={{ duration: 0.5 }}
          className={`rounded-3xl border group p-7 ${
            isDark
              ? "border-purple-400/20 bg-slate-900/65"
              : "border-purple-300/40 bg-purple-50/50"
          }`}
          whileHover={animations.hoverLift}
        >
          <Motion.div
            className="inline-flex rounded-xl border border-purple-300/30 bg-purple-400/10 p-2 text-purple-300"
            whileHover={animations.float}
            transition={{ duration: 0.3 }}
          >
            <CandlestickChart size={18} />
          </Motion.div>
          <Motion.h3
            className="mt-4 text-2xl font-bold text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={animations.viewport}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Markets
          </Motion.h3>
          <Motion.p
            className="mt-3 text-sm text-slate-300"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={animations.viewport}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            {`$SKYX tokens power the gaming ecosystem.`}
          </Motion.p>
          <Motion.div
            variants={animations.staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={animations.viewport}
            className="mt-6 grid grid-cols-2 gap-3"
          >
            {markets.map((market, index) => (
              <Motion.div
                key={market}
                variants={animations.staggerItem}
                className="rounded-xl border border-slate-800 bg-slate-950/70 px-3 py-2 text-sm font-medium text-slate-200 group-hover:border-purple-300/30 transition-colors"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(168, 85, 247, 0.1)",
                }}
                transition={{ duration: 0.2 }}
              >
                {market}
              </Motion.div>
            ))}
          </Motion.div>
        </Motion.article>

        <Motion.article
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={animations.viewport}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-3xl border border-purple-400/20 bg-slate-900/65 p-7 group"
          whileHover={animations.hoverLift}
        >
          <Motion.h3
            className="text-2xl font-bold text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={animations.viewport}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Community
          </Motion.h3>
          <Motion.p
            className="mt-3 text-sm text-slate-300"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={animations.viewport}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            Stay close to releases, governance updates, and ecosystem growth.
          </Motion.p>
          <Motion.div
            variants={animations.staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={animations.viewport}
            className="mt-6 space-y-3"
          >
            {communities.map((item, index) => {
              const Icon = iconsByName[item.name];
              return (
                <Motion.a
                  key={item.name}
                  href={item.href}
                  variants={animations.staggerItem}
                  className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-3 transition hover:border-purple-300/30 group/link"
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "rgba(168, 85, 247, 0.05)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="flex items-center gap-2 text-sm text-slate-100">
                    <Motion.div
                      whileHover={animations.float}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon
                        size={16}
                        className="text-purple-300 group-hover/link:text-purple-200 transition-colors"
                      />
                    </Motion.div>
                    {item.name}
                  </span>
                  <span className="text-xs text-slate-400 group-hover/link:text-slate-300 transition-colors">
                    {item.handle}
                  </span>
                </Motion.a>
              );
            })}
          </Motion.div>
          <Motion.a
            href="#"
            className="mt-6 inline-flex rounded-full bg-purple-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-purple-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Join Community
          </Motion.a>
        </Motion.article>
      </div>
    </section>
  );
}

export default Community;

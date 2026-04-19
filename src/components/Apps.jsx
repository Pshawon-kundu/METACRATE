import { motion as Motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import BlockchainVisual from "./BlockchainVisual";

function Apps({ apps, theme, isDark = true }) {
  return (
    <section
      id="apps"
      className={`py-16 sm:py-20 ${isDark ? "bg-slate-900" : "bg-white"}`}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p
            className={`text-sm font-semibold uppercase tracking-[0.16em] ${
              isDark ? "text-purple-300" : "text-purple-600"
            }`}
          >
            Featured Games
          </p>
          <h2
            className={`mt-3 text-3xl font-black sm:text-4xl ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Games to dominate the SkyX universe
          </h2>
        </div>

        <BlockchainVisual theme={theme} />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((app, index) => (
            <Motion.article
              key={app.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className={`group rounded-2xl border p-6 transition ${
                isDark
                  ? "border-slate-800 bg-slate-900/70 hover:border-purple-300/35"
                  : "border-slate-200 bg-slate-100/50 hover:border-purple-400/50"
              }`}
            >
              <div className="flex items-center justify-between">
                <p
                  className={`text-lg font-semibold ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  {app.name}
                </p>
                <ArrowUpRight
                  size={18}
                  className={`transition ${
                    isDark
                      ? "text-slate-400 group-hover:text-purple-300"
                      : "text-slate-500 group-hover:text-purple-600"
                  }`}
                />
              </div>
              <p
                className={`mt-2 text-sm ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                {app.type}
              </p>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Apps;

import { motion as Motion } from "framer-motion";

function Roadmap({ content, isDark = true }) {
  return (
    <section
      id="roadmap"
      className={`py-16 sm:py-20 ${isDark ? "bg-slate-900" : "bg-white"}`}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <Motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className={`rounded-3xl border p-8 sm:p-10 ${
            isDark
              ? "border-purple-400/20 bg-slate-900/70"
              : "border-purple-300/40 bg-purple-50/50"
          }`}
        >
          <h2
            className={`text-3xl font-black sm:text-4xl ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            {content.title}
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {content.phases.map((phase, index) => (
              <Motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className={`rounded-lg border p-6 ${
                  isDark
                    ? "border-purple-400/20 bg-slate-800/50"
                    : "border-purple-300/40 bg-slate-100/50"
                }`}
              >
                <h3
                  className={`font-semibold mb-4 ${
                    isDark ? "text-purple-300" : "text-purple-600"
                  }`}
                >
                  {phase.title}
                </h3>
                <ul className="space-y-2">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-400 shrink-0" />
                      <span className="text-sm text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </Motion.div>
            ))}
          </div>
        </Motion.div>
      </div>
    </section>
  );
}

export default Roadmap;

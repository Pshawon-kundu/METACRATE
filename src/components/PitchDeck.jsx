import { motion as Motion } from "framer-motion";

function PitchDeck({ content, isDark = true }) {
  return (
    <section
      id="pitch-deck"
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

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {content.sections.map((section, index) => (
              <Motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className={`rounded-lg border p-4 ${
                  isDark
                    ? "border-purple-400/20 bg-slate-800/50"
                    : "border-purple-300/40 bg-slate-100/50"
                }`}
              >
                <h3
                  className={`font-semibold mb-2 ${
                    isDark ? "text-purple-300" : "text-purple-600"
                  }`}
                >
                  {section.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    isDark ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  {section.content}
                </p>
              </Motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              className={`inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold transition-colors ${
                isDark
                  ? "bg-purple-600 text-white hover:bg-purple-500"
                  : "bg-purple-600 text-white hover:bg-purple-700"
              }`}
            >
              {content.cta}
            </button>
          </div>
        </Motion.div>
      </div>
    </section>
  );
}

export default PitchDeck;

import { motion as Motion } from "framer-motion";

function Audience({ content, isDark = true }) {
  return (
    <section
      id="audience"
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

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div>
              <h3
                className={`text-lg font-semibold mb-4 ${
                  isDark ? "text-purple-300" : "text-purple-600"
                }`}
              >
                Who This Is For
              </h3>
              <ul className="space-y-3">
                {content.whoFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-400 shrink-0" />
                    <p
                      className={`text-sm leading-relaxed ${
                        isDark ? "text-slate-300" : "text-slate-700"
                      }`}
                    >
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3
                className={`text-lg font-semibold mb-4 ${
                  isDark ? "text-purple-300" : "text-purple-600"
                }`}
              >
                Getting Started
              </h3>
              <ul className="space-y-3">
                {content.gettingStarted.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-green-400 shrink-0" />
                    <p
                      className={`text-sm leading-relaxed ${
                        isDark ? "text-slate-300" : "text-slate-700"
                      }`}
                    >
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div>
              <h3
                className={`text-lg font-semibold mb-4 ${
                  isDark ? "text-purple-300" : "text-purple-600"
                }`}
              >
                What to Expect
              </h3>
              <ul className="space-y-2">
                {content.whatToExpect.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-blue-400" />
                    <span
                      className={`text-sm ${
                        isDark ? "text-slate-300" : "text-slate-700"
                      }`}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3
                className={`text-lg font-semibold mb-4 ${
                  isDark ? "text-purple-300" : "text-purple-600"
                }`}
              >
                Transparency
              </h3>
              <ul className="space-y-2">
                {content.transparency.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-yellow-400" />
                    <span
                      className={`text-sm ${
                        isDark ? "text-slate-300" : "text-slate-700"
                      }`}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-purple-300 mb-4">
                Risk Awareness
              </h3>
              <ul className="space-y-2">
                {content.riskAwareness.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-red-400" />
                    <span className="text-sm text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-purple-300 mb-6">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {content.faq.map((item, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-purple-400/20 bg-slate-800/50 p-4"
                >
                  <h4 className="font-semibold text-white mb-2">
                    {item.question}
                  </h4>
                  <p className="text-sm text-slate-300">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
}

export default Audience;

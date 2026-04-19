import { motion as Motion } from "framer-motion";
import { animations } from "../data/animations";

function Partners({ partners, isDark = true }) {
  return (
    <section
      id="partners"
      className={`py-16 sm:py-20 ${isDark ? "bg-slate-900" : "bg-white"}`}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={animations.viewport}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-2xl"
        >
          <p
            className={`text-sm font-semibold uppercase tracking-[0.16em] ${
              isDark ? "text-purple-300" : "text-purple-600"
            }`}
          >
            Partners
          </p>
          <Motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={animations.viewport}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`mt-3 text-3xl font-black sm:text-4xl ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Trusted by gaming giants worldwide
          </Motion.h2>
        </Motion.div>

        <Motion.div
          variants={animations.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={animations.viewport}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
        >
          {partners.map((partner, index) => (
            <Motion.div
              key={partner}
              variants={animations.staggerItem}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-6 text-center group cursor-pointer"
              whileHover={animations.hoverLift}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Motion.span
                className="text-sm font-semibold tracking-wide text-slate-300 group-hover:text-purple-300 transition-colors"
                whileHover={animations.float}
                transition={{ duration: 0.3 }}
              >
                {partner}
              </Motion.span>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
}

export default Partners;

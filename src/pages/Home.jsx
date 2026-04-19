import { useEffect, useMemo, useState, useRef } from "react";
import { motion as Motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Features from "../components/Features";
import WhyMatters from "../components/WhyMatters";
import Ecosystem from "../components/Ecosystem";
import DataAnalysis from "../components/DataAnalysis";
import Audience from "../components/Audience";
import PitchDeck from "../components/PitchDeck";
import Roadmap from "../components/Roadmap";
import Trust from "../components/Trust";
import Apps from "../components/Apps";
import Partners from "../components/Partners";
import Community from "../components/Community";
import FinalCta from "../components/FinalCta";
import Footer from "../components/Footer";
import AnimatedBackground from "../components/AnimatedBackground";

function Home({ content }) {
  const sectionIds = useMemo(
    () => content.navLinks.map((link) => link.href.replace("#", "")),
    [content.navLinks],
  );

  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    const storedTheme = window.localStorage.getItem("skyx-theme");
    if (storedTheme === "light" || storedTheme === "dark") {
      return storedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("skyx-theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 15}px, ${e.clientY - 15}px)`;
      }
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
      if (cursorRef.current) {
        cursorRef.current.classList.add("hover");
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      if (cursorRef.current) {
        cursorRef.current.classList.remove("hover");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll(
      "button, a, input, textarea, select, [role='button']",
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection?.target?.id) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.25, 0.45, 0.7],
      },
    );

    sectionIds.forEach((id) => {
      const sectionElement = document.getElementById(id);
      if (sectionElement) {
        observer.observe(sectionElement);
      }
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <div
      className={`relative min-h-screen text-slate-100 overflow-hidden ${
        theme === "dark" ? "bg-slate-950" : "bg-white"
      }`}
    >
      {/* Animated background */}
      <AnimatedBackground isDark={theme === "dark"} />

      {/* Custom cursor */}
      <div ref={cursorRef} className="cursor" />

      {/* Content overlay */}
      <div className="relative z-10">
        <Navbar
          brand={content.brand}
          links={content.navLinks}
          activeSection={activeSection}
          theme={theme}
          onThemeToggle={() =>
            setTheme((currentTheme) =>
              currentTheme === "dark" ? "light" : "dark",
            )
          }
        />
        <main>
          <Hero brand={content.brand} content={content.hero} theme={theme} />
          <Stats stats={content.stats} isDark={theme === "dark"} />
          <WhyMatters content={content.whyMatters} isDark={theme === "dark"} />
          <Ecosystem
            products={content.ecosystem.modules}
            title={content.ecosystem.title}
            isDark={theme === "dark"}
          />
          <DataAnalysis
            content={content.dataAnalysis}
            isDark={theme === "dark"}
          />
          <Audience content={content.audience} isDark={theme === "dark"} />
          <PitchDeck content={content.pitchDeck} isDark={theme === "dark"} />
          <Roadmap content={content.roadmap} isDark={theme === "dark"} />
          <Trust content={content.trust} isDark={theme === "dark"} />
          <Features features={content.features} isDark={theme === "dark"} />
          <Apps apps={content.apps} theme={theme} isDark={theme === "dark"} />
          <Partners partners={content.partners} isDark={theme === "dark"} />
          <Community
            markets={content.markets}
            communities={content.communities}
            isDark={theme === "dark"}
          />
          <FinalCta content={content.finalCta} isDark={theme === "dark"} />

          <section
            id="about"
            className={`py-16 sm:py-20 ${
              theme === "dark" ? "bg-slate-900" : "bg-purple-50"
            }`}
          >
            <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
              <Motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45 }}
                className={`rounded-3xl border p-8 sm:p-10 ${
                  theme === "dark"
                    ? "border-purple-400/20 bg-slate-900/70"
                    : "border-purple-300/40 bg-purple-100/30"
                }`}
              >
                <p
                  className={`text-sm font-semibold uppercase tracking-[0.16em] ${
                    theme === "dark" ? "text-purple-300" : "text-purple-600"
                  }`}
                >
                  About {content.brand.name}
                </p>
                <h2
                  className={`mt-3 text-3xl font-black sm:text-4xl ${
                    theme === "dark" ? "text-white" : "text-slate-900"
                  }`}
                >
                  Build, Play, and Earn in a Smarter Gaming Economy
                </h2>
                <p
                  className={`mt-4 text-sm leading-relaxed sm:text-base ${
                    theme === "dark" ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  {content.about}
                </p>
              </Motion.div>
            </div>
          </section>
        </main>
        <Footer
          brand={content.brand}
          links={content.navLinks}
          isDark={theme === "dark"}
        />
      </div>
    </div>
  );
}

export default Home;

"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/context/TranslationContext";

export default function Hero() {
  const { lang, t } = useTranslation();
  const headingWords = [
    t.hero.heading1[lang],
    t.hero.heading2[lang],
    t.hero.heading3[lang],
    t.hero.heading4[lang],
  ];

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-bg">
      {/* Background image with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1585747860019-024352e23e5d?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/80 to-bg" />

      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [-20, 20, -20], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[10%] opacity-[0.06]"
      >
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-accent">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 0v20M7 4.5C9 7 9 17 7 19.5M17 4.5c-2 2.5-2 12.5 0 15" />
        </svg>
      </motion.div>
      <motion.div
        animate={{ y: [15, -15, 15], rotate: [0, -8, 8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 right-[12%] opacity-[0.06]"
      >
        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-accent">
          <path d="M6 3v18M18 3v18M6 12h12M9 3c0 3-3 4.5-3 9s3 6 3 9M15 3c0 3 3 4.5 3 9s-3 6-3 9" />
        </svg>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Small badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-2 border border-accent/20 bg-accent/5 px-4 py-1.5 backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            {t.hero.badge[lang]}
          </span>
        </motion.div>

        {/* Main heading with staggered word animation */}
        <h1 className="font-serif text-5xl font-bold leading-[1.1] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
          {headingWords.map((word, i) => (
            <motion.span
              key={`${lang}-${i}`}
              initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.8,
                delay: i * 0.15 + 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`inline-block ${i === 1 || i === 3 ? "text-accent" : "text-fg"} ${
                i === 2 ? "ml-4 sm:ml-6" : i > 0 ? "ml-3 sm:ml-4" : ""
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mx-auto mt-8 max-w-xl text-lg text-muted sm:text-xl"
        >
          {t.hero.sub1[lang]}
          <br className="hidden sm:block" />
          {t.hero.sub2[lang]}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-3 overflow-hidden bg-accent px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-accent-fg transition-all duration-500 hover:shadow-[0_0_50px_rgba(201,168,76,0.4)]"
          >
            <span className="relative z-10">{t.hero.cta[lang]}</span>
            <svg className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 border border-border px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-muted transition-all duration-300 hover:border-accent/30 hover:text-fg"
          >
            {t.hero.ctaSub[lang]}
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mx-auto flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted/50">{t.hero.scroll[lang]}</span>
            <div className="h-10 w-[1px] bg-gradient-to-b from-accent/50 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

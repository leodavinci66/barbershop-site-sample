"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/context/TranslationContext";

const serviceIcons = [
  <svg key="0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
    <path d="M6 3v2.5M18 3v2.5M6 21v-2.5M18 21v-2.5M14.5 9.5L9.5 14.5M6.5 12.5a2 2 0 11-4 0 2 2 0 014 0zM21.5 12.5a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>,
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
    <path d="M4 20h16M6 16l2-10h8l2 10M10 6V4M14 6V4" />
  </svg>,
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
    <path d="M7 3v4M7 7l10 10M17 21v-4M17 17L7 7M12 12h.01" />
  </svg>,
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
    <path d="M12 2l3 6h6l-5 4 2 6-6-4-6 4 2-6-5-4h6l3-6z" />
  </svg>,
];

const cardGlows = [
  "from-amber-500/20 via-yellow-600/10 to-transparent",
  "from-orange-500/15 via-amber-600/10 to-transparent",
  "from-yellow-500/20 via-amber-500/10 to-transparent",
  "from-amber-400/25 via-yellow-500/10 to-transparent",
];

export default function Services() {
  const { lang, t } = useTranslation();

  return (
    <section id="services" className="relative bg-surface py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-24 bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
            {t.services.label[lang]}
          </span>
          <h2 className="mt-4 font-serif text-4xl font-bold tracking-tight text-fg sm:text-5xl md:text-6xl">
            {t.services.heading[lang]}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            {t.services.subtitle[lang]}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {t.services.items.map((service, i) => (
            <motion.div
              key={service.name[lang]}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden bg-card p-8 transition-all duration-500 border border-border/50 hover:border-accent/40"
            >
              {/* Pulsing background glow */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.8,
                }}
                className={`absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br ${cardGlows[i]} blur-3xl`}
              />

              {/* Bottom corner glow pulse */}
              <motion.div
                animate={{
                  opacity: [0.1, 0.35, 0.1],
                }}
                transition={{
                  duration: 4 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.6 + 1,
                }}
                className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-accent/10 blur-3xl"
              />

              {/* Hover glow intensifier */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-b from-accent/10 via-accent/5 to-transparent" />

              {/* Top accent line */}
              <div className="absolute top-0 left-0 h-[2px] w-0 bg-gradient-to-r from-accent via-amber-400 to-accent transition-all duration-500 group-hover:w-full" />

              <div className="relative z-10">
                {/* Icon with glow ring */}
                <div className="relative mb-6 inline-flex">
                  <motion.div
                    animate={{ opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                    className="absolute inset-0 -m-2 rounded-full bg-accent/10 blur-md"
                  />
                  <div className="relative text-accent">{serviceIcons[i]}</div>
                </div>

                <h3 className="font-serif text-xl font-bold text-fg">
                  {service.name[lang]}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {service.description[lang]}
                </p>
                <div className="mt-8 flex items-end justify-between border-t border-border/50 pt-6">
                  <span className="font-serif text-3xl font-bold text-accent">
                    {service.price}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-muted">
                    {service.duration[lang]}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

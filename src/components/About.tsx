"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/context/TranslationContext";

export default function About() {
  const { lang, t } = useTranslation();

  return (
    <section id="about" className="relative bg-bg py-32 overflow-x-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-24 bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-surface">
              <img
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80"
                alt="Barber bei der Arbeit"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent" />
            </div>
            <div className="absolute -bottom-4 right-0 lg:-right-4 h-full w-full border-2 border-accent/20 -z-10" />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-6 right-0 bg-accent p-6 lg:-right-12"
            >
              <div className="text-center">
                <span className="block font-serif text-4xl font-bold text-accent-fg">15+</span>
                <span className="block text-xs font-bold uppercase tracking-wider text-accent-fg/70">
                  {t.about.yearsExp[lang]}
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
              {t.about.label[lang]}
            </span>
            <div className="mt-2 h-[2px] w-12 bg-accent" />

            <h2 className="mt-8 font-serif text-4xl font-bold leading-tight tracking-tight text-fg sm:text-5xl">
              {t.about.heading1[lang]}
              <br />
              <span className="text-accent">{t.about.heading2[lang]}</span>
            </h2>

            <div className="mt-8 space-y-6 text-muted leading-relaxed">
              <p>{t.about.bio1[lang]}</p>
              <p>{t.about.bio2[lang]}</p>
              <p>{t.about.bio3[lang]}</p>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-border pt-8">
              {[
                { value: "5000+", label: t.about.stats.clients[lang] },
                { value: "15+", label: t.about.stats.experience[lang] },
                { value: "4.9", label: t.about.stats.rating[lang] },
              ].map((stat) => (
                <div key={stat.label}>
                  <span className="font-serif text-2xl font-bold text-accent sm:text-3xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-xs uppercase tracking-wider text-muted">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

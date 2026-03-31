"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/context/TranslationContext";

export default function Testimonials() {
  const { lang, t } = useTranslation();

  return (
    <section className="relative bg-bg py-32">
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
            {t.testimonials.label[lang]}
          </span>
          <h2 className="mt-4 font-serif text-4xl font-bold tracking-tight text-fg sm:text-5xl md:text-6xl">
            {t.testimonials.heading[lang]}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 grid gap-8 md:grid-cols-3"
        >
          {t.testimonials.items.map((item) => (
            <div
              key={item.name}
              className="group relative bg-card p-8 border border-border transition-all duration-500 hover:border-accent/20"
            >
              <svg
                className="mb-6 h-8 w-8 text-accent/30"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <p className="text-muted leading-relaxed italic">
                &ldquo;{item.quote[lang]}&rdquo;
              </p>

              <div className="mt-8 flex items-center gap-4 border-t border-border pt-6">
                <div className="flex h-10 w-10 items-center justify-center bg-accent/10 font-serif text-sm font-bold text-accent">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <span className="block text-sm font-semibold text-fg">
                    {item.name}
                  </span>
                  <span className="block text-xs text-muted">
                    {item.role[lang]}
                  </span>
                </div>
              </div>

              <div className="absolute top-8 right-8 flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="h-3 w-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

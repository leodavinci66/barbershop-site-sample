"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative bg-midnight py-32 overflow-hidden">
      {/* Section divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-24 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />

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
            <div className="relative aspect-[3/4] overflow-hidden bg-surface-light">
              <img
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80"
                alt="Barber bei der Arbeit"
                className="h-full w-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 to-transparent" />
            </div>
            {/* Gold frame accent */}
            <div className="absolute -bottom-4 -right-4 h-full w-full border-2 border-[#c9a84c]/20 -z-10" />

            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-[#c9a84c] p-6 lg:-right-12"
            >
              <div className="text-center">
                <span className="block font-serif text-4xl font-bold text-[#0d0d0d]">15+</span>
                <span className="block text-xs font-bold uppercase tracking-wider text-[#0d0d0d]/70">
                  Jahre Erfahrung
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
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#c9a84c]">
              Über Uns
            </span>
            <div className="mt-2 h-[2px] w-12 bg-[#c9a84c]" />

            <h2 className="mt-8 font-serif text-4xl font-bold leading-tight tracking-tight text-cream sm:text-5xl">
              Der Meister
              <br />
              <span className="text-[#c9a84c]">seines Fachs</span>
            </h2>

            <div className="mt-8 space-y-6 text-[#a0a0a0] leading-relaxed">
              <p>
                Mit über 15 Jahren Erfahrung und einer Leidenschaft für traditionelle
                Handwerkskunst hat Markus seinen eigenen Stil entwickelt — eine perfekte
                Verbindung aus klassischer Barbierkunst und modernem Design.
              </p>
              <p>
                Jeder Besuch bei uns ist mehr als nur ein Haarschnitt. Es ist ein Erlebnis.
                Ein Moment der Ruhe im hektischen Alltag. Ein Ort, wo Qualität und
                Aufmerksamkeit zum Detail an erster Stelle stehen.
              </p>
              <p>
                Ausgebildet in Wien und London, bringt Markus internationales Know-how
                und österreichische Präzision zusammen. Sein Ziel: Dass jeder Kunde
                selbstbewusster den Laden verlässt, als er ihn betreten hat.
              </p>
            </div>

            {/* Stats row */}
            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-[#2a2a2a] pt-8">
              {[
                { value: "5000+", label: "Zufriedene Kunden" },
                { value: "15+", label: "Jahre Erfahrung" },
                { value: "4.9", label: "Google Bewertung" },
              ].map((stat) => (
                <div key={stat.label}>
                  <span className="font-serif text-2xl font-bold text-[#c9a84c] sm:text-3xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-xs uppercase tracking-wider text-[#a0a0a0]">
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

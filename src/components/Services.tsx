"use client";

import { motion } from "framer-motion";

const services = [
  {
    name: "Klassischer Haarschnitt",
    description:
      "Präziser Schnitt nach deinen Wünschen. Inklusive Waschen, Beratung und Styling mit Premium-Produkten.",
    price: "€45",
    duration: "45 Min",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M6 3v2.5M18 3v2.5M6 21v-2.5M18 21v-2.5M14.5 9.5L9.5 14.5M6.5 12.5a2 2 0 11-4 0 2 2 0 014 0zM21.5 12.5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    name: "Bart-Trimm & Styling",
    description:
      "Professionelle Bartpflege mit heißem Handtuch. Konturierung, Trimmen und Styling für den perfekten Look.",
    price: "€35",
    duration: "30 Min",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M4 20h16M6 16l2-10h8l2 10M10 6V4M14 6V4" />
      </svg>
    ),
  },
  {
    name: "Luxus-Rasur",
    description:
      "Die königliche Behandlung. Heißes Handtuch, warmer Schaum, Rasiermesser und pflegende Aftershave-Behandlung.",
    price: "€40",
    duration: "45 Min",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M7 3v4M7 7l10 10M17 21v-4M17 17L7 7M12 12h.01" />
      </svg>
    ),
  },
  {
    name: "Komplett-Paket",
    description:
      "Das volle Programm: Haarschnitt, Bartpflege, Luxus-Rasur und Gesichtsbehandlung. Unser Signature-Erlebnis.",
    price: "€75",
    duration: "75 Min",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M12 2l3 6h6l-5 4 2 6-6-4-6 4 2-6-5-4h6l3-6z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-surface py-32">
      {/* Section divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-24 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#c9a84c]">
            Was wir bieten
          </span>
          <h2 className="mt-4 font-serif text-4xl font-bold tracking-tight text-cream sm:text-5xl md:text-6xl">
            Unsere Leistungen
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[#a0a0a0]">
            Jeder Service wird mit Präzision, Leidenschaft und erstklassigen Produkten ausgeführt.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden bg-[#1a1a1a] p-8 transition-all duration-500 border border-transparent hover:border-[#c9a84c]/30"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-b from-[#c9a84c]/5 to-transparent" />

              {/* Top line accent */}
              <div className="absolute top-0 left-0 h-[2px] w-0 bg-[#c9a84c] transition-all duration-500 group-hover:w-full" />

              <div className="relative z-10">
                <div className="text-[#c9a84c] mb-6">{service.icon}</div>

                <h3 className="font-serif text-xl font-bold text-cream">
                  {service.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#a0a0a0]">
                  {service.description}
                </p>

                <div className="mt-8 flex items-end justify-between border-t border-[#2a2a2a] pt-6">
                  <div>
                    <span className="font-serif text-3xl font-bold text-[#c9a84c]">
                      {service.price}
                    </span>
                  </div>
                  <span className="text-xs uppercase tracking-wider text-[#a0a0a0]">
                    {service.duration}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

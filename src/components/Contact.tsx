"use client";

import { motion } from "framer-motion";

const hours = [
  { day: "Montag — Freitag", time: "09:00 — 19:00" },
  { day: "Samstag", time: "09:00 — 16:00" },
  { day: "Sonntag", time: "Geschlossen" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative bg-surface py-32">
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
            Kontakt
          </span>
          <h2 className="mt-4 font-serif text-4xl font-bold tracking-tight text-cream sm:text-5xl md:text-6xl">
            Besuche Uns
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[#a0a0a0]">
            Wir freuen uns auf deinen Besuch. Vereinbare jetzt deinen Termin.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            {/* Address */}
            <div className="flex gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#c9a84c]/10 text-[#c9a84c]">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-cream">Adresse</h3>
                <p className="mt-1 text-[#a0a0a0]">
                  Goldschmiedgasse 12
                  <br />
                  1010 Wien, Österreich
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#c9a84c]/10 text-[#c9a84c]">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-cream">Telefon</h3>
                <a href="tel:+4312345678" className="mt-1 block text-[#a0a0a0] hover:text-[#c9a84c] transition-colors">
                  +43 1 234 5678
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#c9a84c]/10 text-[#c9a84c]">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-cream">Öffnungszeiten</h3>
                <div className="mt-2 space-y-2">
                  {hours.map((h) => (
                    <div key={h.day} className="flex justify-between gap-8 text-sm">
                      <span className="text-[#a0a0a0]">{h.day}</span>
                      <span className={h.time === "Geschlossen" ? "text-red-400/70" : "text-cream"}>
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex gap-4 pt-4">
              {[
                {
                  name: "Instagram",
                  path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
                },
                {
                  name: "Facebook",
                  path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  aria-label={social.name}
                  className="flex h-11 w-11 items-center justify-center border border-[#2a2a2a] text-[#a0a0a0] transition-all duration-300 hover:border-[#c9a84c] hover:text-[#c9a84c]"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>

            {/* Big CTA */}
            <a
              href="#"
              className="group relative mt-4 inline-flex w-full items-center justify-center gap-3 overflow-hidden bg-[#c9a84c] px-10 py-5 text-base font-bold uppercase tracking-[0.2em] text-[#0d0d0d] transition-all duration-500 hover:shadow-[0_0_60px_rgba(201,168,76,0.3)] sm:w-auto"
            >
              <span className="relative z-10">Jetzt Buchen</span>
              <svg className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
          </motion.div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden bg-[#1a1a1a] min-h-[400px] lg:min-h-0"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.123456789!2d16.3705!3d48.2082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDEyJzI5LjUiTiAxNsKwMjInMTMuOCJF!5e0!3m2!1sde!2sat!4v1234567890"
              className="h-full w-full border-0 grayscale opacity-60"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Standort"
            />
            {/* Map overlay */}
            <div className="pointer-events-none absolute inset-0 border border-[#2a2a2a]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

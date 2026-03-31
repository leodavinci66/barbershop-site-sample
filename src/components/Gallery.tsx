"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/context/TranslationContext";

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80",
    alt: "Klassischer Haarschnitt",
    captionKey: "classic" as const,
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80",
    alt: "Bartpflege",
    captionKey: "beard" as const,
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&q=80",
    alt: "Fade Haarschnitt",
    captionKey: "fade" as const,
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80",
    alt: "Styling",
    captionKey: "styling" as const,
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1587909209111-5097ee578ec3?w=600&q=80",
    alt: "Heisse Rasur",
    captionKey: "shave" as const,
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1596728325488-58c87691e9af?w=600&q=80",
    alt: "Barbershop Ambiente",
    captionKey: "studio" as const,
    span: "col-span-1 row-span-1",
  },
];

export default function Gallery() {
  const { lang, t } = useTranslation();

  return (
    <section id="gallery" className="relative bg-surface py-32">
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
            {t.gallery.label[lang]}
          </span>
          <h2 className="mt-4 font-serif text-4xl font-bold tracking-tight text-fg sm:text-5xl md:text-6xl">
            {t.gallery.heading[lang]}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            {t.gallery.subtitle[lang]}
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 auto-rows-[200px] sm:auto-rows-[250px]">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.alt}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative cursor-pointer overflow-hidden ${item.span}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#0d0d0d]/90 via-[#0d0d0d]/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="p-6">
                  <div className="h-[2px] w-8 bg-accent mb-3 transform -translate-x-4 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
                  <span className="font-serif text-lg font-bold text-cream">
                    {t.gallery.captions[item.captionKey][lang]}
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

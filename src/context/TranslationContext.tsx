"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "de" | "en";

const translations = {
  nav: {
    services: { de: "Leistungen", en: "Services" },
    about: { de: "Über Uns", en: "About" },
    gallery: { de: "Galerie", en: "Gallery" },
    contact: { de: "Kontakt", en: "Contact" },
    bookNow: { de: "Jetzt Buchen", en: "Book Now" },
  },
  hero: {
    badge: { de: "Seit 2010 in Wien", en: "Since 2010 in Vienna" },
    heading1: { de: "Dein", en: "Your" },
    heading2: { de: "Style.", en: "Style." },
    heading3: { de: "Dein", en: "Your" },
    heading4: { de: "Barber.", en: "Barber." },
    sub1: {
      de: "Erstklassige Herrenpflege im Herzen von Wien.",
      en: "Premium men's grooming in the heart of Vienna.",
    },
    sub2: {
      de: "Traditionelle Handwerkskunst trifft modernen Style.",
      en: "Traditional craftsmanship meets modern style.",
    },
    cta: { de: "Termin Vereinbaren", en: "Book Appointment" },
    ctaSub: { de: "Unsere Leistungen", en: "Our Services" },
    scroll: { de: "Scroll", en: "Scroll" },
  },
  services: {
    label: { de: "Was wir bieten", en: "What we offer" },
    heading: { de: "Unsere Leistungen", en: "Our Services" },
    subtitle: {
      de: "Jeder Service wird mit Präzision, Leidenschaft und erstklassigen Produkten ausgeführt.",
      en: "Every service is delivered with precision, passion, and premium products.",
    },
    items: [
      {
        name: { de: "Klassischer Haarschnitt", en: "Classic Haircut" },
        description: {
          de: "Präziser Schnitt nach deinen Wünschen. Inklusive Waschen, Beratung und Styling mit Premium-Produkten.",
          en: "Precision cut tailored to your wishes. Includes wash, consultation, and styling with premium products.",
        },
        price: "€45",
        duration: { de: "45 Min", en: "45 min" },
      },
      {
        name: { de: "Bart-Trimm & Styling", en: "Beard Trim & Styling" },
        description: {
          de: "Professionelle Bartpflege mit heißem Handtuch. Konturierung, Trimmen und Styling für den perfekten Look.",
          en: "Professional beard care with hot towel. Contouring, trimming, and styling for the perfect look.",
        },
        price: "€35",
        duration: { de: "30 Min", en: "30 min" },
      },
      {
        name: { de: "Luxus-Rasur", en: "Luxury Shave" },
        description: {
          de: "Die königliche Behandlung. Heißes Handtuch, warmer Schaum, Rasiermesser und pflegende Aftershave-Behandlung.",
          en: "The royal treatment. Hot towel, warm lather, straight razor, and nourishing aftershave treatment.",
        },
        price: "€40",
        duration: { de: "45 Min", en: "45 min" },
      },
      {
        name: { de: "Komplett-Paket", en: "Full Package" },
        description: {
          de: "Das volle Programm: Haarschnitt, Bartpflege, Luxus-Rasur und Gesichtsbehandlung. Unser Signature-Erlebnis.",
          en: "The full program: haircut, beard care, luxury shave, and facial treatment. Our signature experience.",
        },
        price: "€75",
        duration: { de: "75 Min", en: "75 min" },
      },
    ],
  },
  about: {
    label: { de: "Über Uns", en: "About Us" },
    heading1: { de: "Der Meister", en: "The Master" },
    heading2: { de: "seines Fachs", en: "of His Craft" },
    yearsExp: { de: "Jahre Erfahrung", en: "Years Experience" },
    bio1: {
      de: "Mit über 15 Jahren Erfahrung und einer Leidenschaft für traditionelle Handwerkskunst hat Markus seinen eigenen Stil entwickelt — eine perfekte Verbindung aus klassischer Barbierkunst und modernem Design.",
      en: "With over 15 years of experience and a passion for traditional craftsmanship, Markus has developed his own style — a perfect blend of classic barbering and modern design.",
    },
    bio2: {
      de: "Jeder Besuch bei uns ist mehr als nur ein Haarschnitt. Es ist ein Erlebnis. Ein Moment der Ruhe im hektischen Alltag. Ein Ort, wo Qualität und Aufmerksamkeit zum Detail an erster Stelle stehen.",
      en: "Every visit is more than just a haircut. It's an experience. A moment of calm in the hectic everyday. A place where quality and attention to detail come first.",
    },
    bio3: {
      de: "Ausgebildet in Wien und London, bringt Markus internationales Know-how und österreichische Präzision zusammen. Sein Ziel: Dass jeder Kunde selbstbewusster den Laden verlässt, als er ihn betreten hat.",
      en: "Trained in Vienna and London, Markus combines international know-how with Austrian precision. His goal: every client leaves the shop more confident than when they walked in.",
    },
    stats: {
      clients: { de: "Zufriedene Kunden", en: "Happy Clients" },
      experience: { de: "Jahre Erfahrung", en: "Years Experience" },
      rating: { de: "Google Bewertung", en: "Google Rating" },
    },
  },
  gallery: {
    label: { de: "Portfolio", en: "Portfolio" },
    heading: { de: "Unsere Arbeiten", en: "Our Work" },
    subtitle: {
      de: "Ein Blick auf unsere Handwerkskunst. Jeder Schnitt erzählt eine Geschichte.",
      en: "A look at our craftsmanship. Every cut tells a story.",
    },
    captions: {
      classic: { de: "Klassischer Schnitt", en: "Classic Cut" },
      beard: { de: "Bartpflege", en: "Beard Care" },
      fade: { de: "Fade Cut", en: "Fade Cut" },
      styling: { de: "Premium Styling", en: "Premium Styling" },
      shave: { de: "Luxus-Rasur", en: "Luxury Shave" },
      studio: { de: "Unser Studio", en: "Our Studio" },
    },
  },
  testimonials: {
    label: { de: "Kundenstimmen", en: "Testimonials" },
    heading: { de: "Was unsere Kunden sagen", en: "What Our Clients Say" },
    items: [
      {
        quote: {
          de: "Der beste Barber in Wien, ohne Frage. Markus versteht genau was man will und liefert jedes Mal perfekte Ergebnisse. Das Ambiente ist erstklassig.",
          en: "The best barber in Vienna, no question. Markus understands exactly what you want and delivers perfect results every time. The ambiance is first-class.",
        },
        name: "Thomas K.",
        role: { de: "Stammkunde seit 2018", en: "Regular since 2018" },
      },
      {
        quote: {
          de: "Endlich ein Barbershop, der hält was er verspricht. Die Luxus-Rasur ist ein Erlebnis, das man sich gönnen sollte. Man fühlt sich wie ein neuer Mensch.",
          en: "Finally a barbershop that delivers on its promises. The luxury shave is an experience you should treat yourself to. You feel like a new person.",
        },
        name: "Stefan M.",
        role: { de: "Stammkunde seit 2020", en: "Regular since 2020" },
      },
      {
        quote: {
          de: "Ich war schon bei vielen Barbieren, aber hier stimmt einfach alles — die Qualität, die Atmosphäre, die Beratung. Absolute Empfehlung für jeden Mann in Wien.",
          en: "I've been to many barbers, but here everything is just right — the quality, the atmosphere, the consultation. Absolute recommendation for every man in Vienna.",
        },
        name: "Alexander W.",
        role: { de: "Stammkunde seit 2019", en: "Regular since 2019" },
      },
    ],
  },
  contact: {
    label: { de: "Kontakt", en: "Contact" },
    heading: { de: "Besuche Uns", en: "Visit Us" },
    subtitle: {
      de: "Wir freuen uns auf deinen Besuch. Vereinbare jetzt deinen Termin.",
      en: "We look forward to your visit. Book your appointment now.",
    },
    address: { de: "Adresse", en: "Address" },
    phone: { de: "Telefon", en: "Phone" },
    hours: { de: "Öffnungszeiten", en: "Opening Hours" },
    days: {
      weekdays: { de: "Montag — Freitag", en: "Monday — Friday" },
      saturday: { de: "Samstag", en: "Saturday" },
      sunday: { de: "Sonntag", en: "Sunday" },
    },
    closed: { de: "Geschlossen", en: "Closed" },
    bookNow: { de: "Jetzt Buchen", en: "Book Now" },
  },
  footer: {
    rights: {
      de: "Barbershop Wien. Alle Rechte vorbehalten.",
      en: "Barbershop Wien. All rights reserved.",
    },
  },
};

type Translations = typeof translations;

interface TranslationContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const TranslationContext = createContext<TranslationContextType | null>(null);

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("de");
  return (
    <TranslationContext.Provider value={{ lang, setLang, t: translations }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(TranslationContext);
  if (!ctx) throw new Error("useTranslation must be used within TranslationProvider");
  return ctx;
}

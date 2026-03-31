"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Leistungen", href: "#services" },
  { label: "Über Uns", href: "#about" },
  { label: "Galerie", href: "#gallery" },
  { label: "Kontakt", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0d0d0d]/90 backdrop-blur-xl border-b border-[#2a2a2a]/50"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-[#c9a84c]">
              <path d="M16 2L20 8L28 8L22 14L24 22L16 18L8 22L10 14L4 8L12 8L16 2Z" fill="currentColor" opacity="0.2"/>
              <path d="M16 4L19 9H27L21 13.5L23 20.5L16 16.5L9 20.5L11 13.5L5 9H13L16 4Z" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </div>
          <span className="font-serif text-xl font-bold tracking-wider text-cream uppercase">
            Barbershop <span className="text-[#c9a84c]">Wien</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium tracking-wider uppercase text-[#a0a0a0] transition-colors hover:text-cream"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[#c9a84c] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2 bg-[#c9a84c] px-6 py-2.5 text-sm font-semibold uppercase tracking-wider text-[#0d0d0d] transition-all duration-300 hover:bg-[#e6c364] hover:shadow-[0_0_30px_rgba(201,168,76,0.3)]"
        >
          Jetzt Buchen
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden relative z-50 w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          aria-label="Menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block h-[2px] w-6 bg-cream origin-center"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block h-[2px] w-6 bg-cream"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block h-[2px] w-6 bg-cream origin-center"
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-[#0d0d0d] z-40 flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.2 }}
                className="font-serif text-3xl font-bold tracking-wider uppercase text-cream hover:text-[#c9a84c] transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-4 bg-[#c9a84c] px-10 py-3 text-lg font-semibold uppercase tracking-wider text-[#0d0d0d]"
            >
              Jetzt Buchen
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

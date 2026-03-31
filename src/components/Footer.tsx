"use client";

import { motion } from "framer-motion";

const footerLinks = [
  { label: "Leistungen", href: "#services" },
  { label: "Über Uns", href: "#about" },
  { label: "Galerie", href: "#gallery" },
  { label: "Kontakt", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] py-16">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#2a2a2a]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-8 md:flex-row md:justify-between"
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none" className="text-[#c9a84c]">
              <path d="M16 2L20 8L28 8L22 14L24 22L16 18L8 22L10 14L4 8L12 8L16 2Z" fill="currentColor" opacity="0.2"/>
              <path d="M16 4L19 9H27L21 13.5L23 20.5L16 16.5L9 20.5L11 13.5L5 9H13L16 4Z" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            <span className="font-serif text-lg font-bold tracking-wider uppercase text-cream">
              Barbershop <span className="text-[#c9a84c]">Wien</span>
            </span>
          </a>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#a0a0a0] transition-colors hover:text-[#c9a84c]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
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
                className="flex h-9 w-9 items-center justify-center text-[#a0a0a0] transition-colors hover:text-[#c9a84c]"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-[#1a1a1a] pt-8 text-center">
          <p className="text-xs text-[#a0a0a0]/50">
            &copy; 2026 Barbershop Wien. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}

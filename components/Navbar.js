"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#trabajo", label: "Trabajo" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-5 md:py-6 bg-[#f5f4f0]/90 backdrop-blur-sm border-b border-[#d0cfc9]" style={{ paddingLeft: "clamp(2rem, 6vw, 6rem)", paddingRight: "clamp(2rem, 6vw, 6rem)" }}>
        <Link href="/" className="font-serif text-[#1a1a1a] text-lg tracking-tight italic">
          Miriam Muñoz
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link, i) => (
            <li key={link.href} className="flex items-center gap-8">
              {i > 0 && <span className="text-[#c80000] text-xs">·</span>}
              <a
                href={link.href}
                className="text-sm tracking-widest uppercase text-[#888] hover:text-[#c80000] transition-all duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Menú"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-px bg-[#1a1a1a]"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-px bg-[#1a1a1a]"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-px bg-[#1a1a1a]"
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[57px] left-0 right-0 z-40 bg-[#f5f4f0] border-b border-[#d0cfc9] md:hidden"
          >
            <ul className="flex flex-col" style={{ paddingLeft: "clamp(2rem, 6vw, 6rem)", paddingRight: "clamp(2rem, 6vw, 6rem)" }}>
              {links.map((link) => (
                <li key={link.href} className="border-b border-[#d0cfc9] last:border-0">
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-4 text-sm tracking-widest uppercase text-[#888] hover:text-[#c80000] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

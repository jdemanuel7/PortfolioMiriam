"use client";

import Link from "next/link";

const links = [
  { href: "#trabajo", label: "Trabajo" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 md:py-6 bg-[#f5f4f0]/90 backdrop-blur-sm border-b border-[#d0cfc9]">
      <Link href="/" className="font-serif text-[#1a1a1a] text-lg tracking-tight italic">
        Miriam Muñoz
      </Link>
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
    </nav>
  );
}

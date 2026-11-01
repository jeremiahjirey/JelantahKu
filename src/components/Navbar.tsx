"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";

const navLinks = [
  { label: "Cara Kerja", href: "#cara-kerja" },
  { label: "Poin", href: "#poin" },
  { label: "UMKM", href: "#umkm" },
  { label: "Panduan", href: "#panduan" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-40 transition-shadow duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-[0_2px_12px_rgba(40,63,28,0.08)]"
          : "bg-[var(--cream)]"
      }`}
    >
      <div className="container-site flex h-16 items-center justify-between">
        {/* Logo */}
        {/* TODO: ganti dengan logo resmi dari /public/brand/ */}
        <Link
          href="#beranda"
          className="flex items-center gap-2 font-heading font-bold text-[22px] text-[var(--deep-green)] leading-none"
          aria-label="JelantahKu — halaman utama"
        >
          <span
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--sunflower)] text-[var(--deep-green)] text-sm font-bold"
          >
            J
          </span>
          JelantahKu
        </Link>

        {/* Nav desktop */}
        <nav aria-label="Navigasi utama" className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-semibold text-[var(--deep-green)] opacity-80 hover:opacity-100 transition-opacity"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <a
          href="#daftar"
          className="btn-primary hidden md:inline-flex"
          style={{ height: "44px", fontSize: "15px", padding: "0 20px" }}
        >
          Jadwalkan Jemput
        </a>

        {/* Hamburger mobile */}
        <button
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-full text-[var(--deep-green)] hover:bg-[var(--deep-green-10)] transition-colors"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Menu mobile */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-all duration-200 overflow-hidden ${
          open ? "max-h-[400px] border-t border-[var(--deep-green-10)]" : "max-h-0"
        }`}
        aria-hidden={!open}
      >
        <nav
          className="container-site flex flex-col gap-1 py-4"
          aria-label="Navigasi mobile"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-[15px] font-semibold text-[var(--deep-green)] hover:bg-[var(--deep-green-10)] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#daftar"
            onClick={closeMenu}
            className="btn-primary mt-3 text-center"
          >
            Jadwalkan Jemput
          </a>
        </nav>
      </div>

      {/* WhatsApp floating button */}
      <a
        href={`https://wa.me/${siteConfig.whatsappNumber}?text=Halo%20JelantahKu%2C%20saya%20ingin%20bertanya%20tentang%20setoran%20minyak%20jelantah.`}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-float"
        aria-label="Hubungi JelantahKu via WhatsApp"
      >
        {/* WhatsApp icon SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="26"
          height="26"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.847L.057 23.882l6.169-1.453A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.878 0-3.637-.49-5.163-1.349l-.37-.219-3.662.862.873-3.567-.24-.383A10 10 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
      </a>
    </header>
  );
}


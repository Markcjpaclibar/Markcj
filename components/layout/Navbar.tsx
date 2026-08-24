"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#0A1628]/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold tracking-wide text-white transition hover:opacity-80"
        >
          MCP<span className="text-[#34D399]">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 transition-colors hover:text-[#34D399]"
            >
              {link.name}
            </Link>
          ))}

          {/* Clean Glass Button */}
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-[#34D399]/40 bg-[#34D399]/60 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-[#34D399] hover:bg-[#34D399] hover:text-[#070D1B] hover:shadow-[0_0_25px_rgba(52,211,153,0.45)]"
          >
            <span className="relative z-10">Get in touch</span>
          </a>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-white/10 bg-[#0A1628]/95 px-6 py-6 backdrop-blur-2xl">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-gray-200 transition hover:text-[#34D399]"
              >
                {link.name}
              </Link>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full border border-[#34D399] bg-[#34D399] py-3 text-center font-semibold text-[#070D1B] shadow-[0_0_20px_rgba(52,211,153,0.3)]"
            >
              Get in touch
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
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
          ? "border-b border-white/10 bg-[#070D1B]/80 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-extrabold tracking-wider text-white transition-opacity hover:opacity-90"
        >
          MCP<span className="text-[#34D399]">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 transition-colors duration-200 hover:text-[#34D399]"
            >
              {link.name}
            </Link>
          ))}

          {/* Solid Mint Button matching reference image */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-[#34D399] px-5 py-2.5 text-sm font-semibold text-[#070D1B] transition-all duration-200 hover:bg-[#2ce09f] hover:shadow-[0_0_20px_rgba(52,211,153,0.4)]"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
          </a>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-gray-300 transition-colors hover:text-white md:hidden focus:outline-none"
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
        <div className="border-t border-white/10 bg-[#070D1B]/95 px-6 py-6 backdrop-blur-2xl">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-gray-200 transition-colors hover:text-[#34D399]"
              >
                {link.name}
              </Link>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#34D399] py-3 text-center text-sm font-semibold text-[#070D1B] transition-all hover:bg-[#2ce09f]"
            >
              <span>Contact</span>
              <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
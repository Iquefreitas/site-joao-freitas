"use client";

import React, { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Portfólio", href: "#portfolio" },
    {
      label: "Contato",
      href: "https://wa.me/5548991062262?text=Olá%2C%20gostaria%20de%20falar%20com%20você...",
      external: true,
    },
  ];

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.substring(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false); // Fecha o menu ao clicar
      }
    } else {
      setMenuOpen(false); // Fecha o menu ao clicar em link externo
    }
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/5 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a
          href="#inicio"
          onClick={(e) => handleClick(e, "#inicio")}
          className="hidden md:block cursor-pointer text-white text-lg font-semibold tracking-wide opacity-80 hover:opacity-100 transition-opacity duration-200"

        >
          João Freitas
        </a>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map(({ label, href, external }, i) =>
            external ? (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-sm opacity-70 hover:opacity-100 transition-opacity duration-200"
              >
                {label}
              </a>
            ) : (
              <a
                key={i}
                href={href}
                onClick={(e) => handleClick(e, href)}
                className="text-white text-sm opacity-70 hover:opacity-100 transition-opacity duration-200"
              >
                {label}
              </a>
            )
          )}
        </nav>

        {/* Botão hamburger mobile */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {/* Ícone hamburger / close */}
          {menuOpen ? (
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <nav className="md:hidden bg-black/90 px-4 py-4 space-y-4">
          {navLinks.map(({ label, href, external }, i) =>
            external ? (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white text-lg font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ) : (
              <a
                key={i}
                href={href}
                onClick={(e) => handleClick(e, href)}
                className="block text-white text-lg font-medium"
              >
                {label}
              </a>
            )
          )}
        </nav>
      )}
    </header>
  );
}

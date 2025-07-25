"use client";

import React from "react";

export function Header() {
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
      }
    }
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/5 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a
          href="#inicio"
          onClick={(e) => handleClick(e, "#inicio")}
          className="cursor-pointer text-white text-lg font-semibold tracking-wide opacity-80 hover:opacity-100 transition-opacity duration-200"
        >
          João Freitas
        </a>

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
      </div>
    </header>
  );
}

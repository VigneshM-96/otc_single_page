"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  {
    label: "USDT OTC",
    href: "#what-is-usdt-otc",
  },
  {
    label: "Why Unitic",
    href: "#why-choose",
  },
  {
    label: "How It Works",
    href: "#trade-through-unitic",
  },
  {
    label: "Stats",
    href: "#stats",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Platforms",
    href: "#platforms",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="site-header">
      <nav
        className="navbar"
        aria-label="Primary navigation"
      >
        <div className="navbar-container">

          {/* Logo */}
          <a
            href="/"
            className="navbar-logo"
            aria-label="Unitic home"
          >
            <Image
              src="/logo.png"
              alt="Unitic"
              width={100}
              height={25}
              priority
              className="logo-image"
            />
          </a>

          <div className="desktop-nav">
  {navItems.map((item) => (
    <a
      key={item.href}
      href={item.href}
      className="nav-link"
    >
      {item.label}
    </a>
  ))}
</div>

<a href="#contact" className="nav-cta">
  Contact Us
</a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={`mobile-menu-button ${
              isOpen ? "menu-open" : ""
            }`}
            aria-label={
              isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-navigation"
          className={`mobile-nav ${
            isOpen ? "mobile-nav-open" : ""
          }`}
        >
          <div className="mobile-nav-inner">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="mobile-nav-link"
                onClick={handleNavClick}
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              className="mobile-nav-cta"
              onClick={handleNavClick}
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
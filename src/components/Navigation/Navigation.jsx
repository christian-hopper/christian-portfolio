import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { scrollToSection } from "../../utils/scrollToSection";
import "./Navigation.css";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = ["work", "services", "about", "contact"];

  return (
    <nav className={`navigation ${scrolled ? "navigation--scrolled" : ""}`}>
      <div className="navigation__container">
        <div
          className="navigation__logo"
          onClick={() => scrollToSection("hero")}
        >
          Christian<span className="navigation__accent">.</span>
        </div>

        {/* Desktop */}
        <div className="navigation__links">
          {sections.map((section) => (
            <button
              key={section}
              className="navigation__link"
              onClick={() => scrollToSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="navigation__toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="navigation__mobile-menu">
          {sections.map((section) => (
            <button
              key={section}
              className="navigation__mobile-link"
              onClick={() => {
                scrollToSection(section);
                setIsOpen(false);
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

import { scrollToSection } from "../../utils/scrollToSection";
import "./Footer.css";

function Footer() {
  const links = [
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          {/* Logo / Brand */}
          <div className="footer__brand">
            <a
              href="#"
              className="footer__logo"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("hero");
              }}
            >
              Christian<span className="footer__logo-dot">.</span>
            </a>
            <p className="footer__tagline">Web Developer</p>
          </div>

          {/* Navigation Links */}
          <nav className="footer__nav">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="footer__link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href.substring(1));
                }}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider line */}
        <div className="footer__divider" />

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {currentYear} Christian Hopper. All rights reserved.
          </p>
          <div className="footer__legal">
            <a
              href="#"
              className="footer__legal-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("privacy");
              }}
            >
              Privacy
            </a>
            <a
              href="#"
              className="footer__legal-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("terms");
              }}
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

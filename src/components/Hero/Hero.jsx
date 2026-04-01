import "./Hero.css";
import { scrollToSection } from "../../utils/scrollToSection.js";

function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Background Glow */}
      <div className="hero__glow"></div>

      <div className="hero__container">
        <h1 className="hero__title">
          Web Developer focused on building{" "}
          <span className="hero__highlight">fast, reliable</span> websites for
          small businesses
        </h1>

        <p className="hero__subtitle">
          Clean, responsive websites designed to help your business establish a
          strong online presence.
        </p>

        <div className="hero__buttons">
          <a
            href="#contact"
            className="hero__btn hero__btn--primary"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
          >
            Request a Quote
          </a>
          <a
            href="#work"
            className="hero__btn hero__btn--secondary"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("work");
            }}
          >
            View Work
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

import { Check, ArrowRight } from "lucide-react";
import { scrollToSection } from "../../utils/scrollToSection";
import "./Services.css";

function Services() {
  const features = [
    "3–5 page website",
    "Fully responsive design",
    "Contact form integration",
    "Performance optimized",
    "Basic SEO setup",
    "Delivery in 5–7 days",
  ];

  return (
    <section id="services" className="services">
      <div className="services__container">
        {/* Header */}
        <div className="services__header">
          <h2 className="services__header-title">Services</h2>
          <p className="services__header-subtitle">
            Everything you need for a modern, functional business website
            without the overhead of an agency.
          </p>
        </div>

        {/* Card */}
        <div className="services__card">
          <div className="services__glow"></div>

          <div className="services__content">
            {/* Features */}
            <div className="services__features">
              <h3 className="services__features-title">Standard Package</h3>

              <ul className="services__features-list">
                {features.map((feature, index) => (
                  <li className="services__features-item" key={index}>
                    <Check className="services__features-icon" />
                    <span className="services__features-text">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing */}
            <div className="services__pricing">
              <span className="services__pricing-label">Starting At</span>

              <div className="services__pricing-amount">
                $500{" "}
                <span className="services__pricing-amount-separator">to</span>{" "}
                $750
              </div>

              <a
                href="#contact"
                className="services__pricing-btn services__pricing-btn--primary"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
              >
                Let's get started
                <ArrowRight className="services__pricing-btn-arrow" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;

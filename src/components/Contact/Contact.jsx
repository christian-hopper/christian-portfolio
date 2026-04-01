import { Mail } from "lucide-react";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        {/* Contact Info */}
        <div className="contact__info">
          <h2 className="contact__title">Let's build your website</h2>
          <p className="contact__description">
            Ready to upgrade your online presence? Send a message and let's
            discuss your project goals.
          </p>
          <a
            href="mailto:hello@christianhopper.com"
            className="contact__email-link"
          >
            <Mail className="contact__email-icon" />
            hello@christianhopper.com
          </a>
        </div>

        {/* Contact Form */}
        <div className="contact__form-card">
          <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
            <div className="contact__form-group">
              <label htmlFor="name" className="contact__label">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                className="contact__input"
                required
              />
            </div>

            <div className="contact__form-group">
              <label htmlFor="email" className="contact__label">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                className="contact__input"
                required
              />
            </div>

            <div className="contact__form-group">
              <label htmlFor="message" className="contact__label">
                Message
              </label>
              <textarea
                id="message"
                placeholder="How can I help you?"
                rows={4}
                className="contact__input contact__input--textarea"
                required
              />
            </div>

            <button type="submit" className="contact__submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

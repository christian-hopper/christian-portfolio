import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about__container">
        {/* Label/Header */}
        <span className="about__label">About Me</span>

        <div className="about__content-wrapper">
          {/* Background Glow */}
          <div className="about__glow" aria-hidden="true" />

          {/* The Main Bio */}
          <p className="about__text">
            <span className="about__name">Christian Hopper</span> is a web
            developer focused on helping small businesses create
            <span className="about__highlight">
              {" "}
              clean, functional websites
            </span>{" "}
            that represent their brand professionally online.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

import barberImg from "../../assets/images/barbershop.jpg";
import landscapeImg from "../../assets/images/landscaping.jpg";
import { ExternalLink } from "lucide-react";
import "./Portfolio.css";

export default function Portfolio() {
  const projects = [
    {
      title: "Barbershop Website",
      description:
        "A clean, easy-to-navigate website for a local barbershop featuring service listings, a gallery, and an integrated booking system.",
      image: barberImg,
      tags: ["Barbershop", "Small Business", "Booking"],
      link: "https://christian-hopper.github.io/fade-masters-barbershop/",
    },
    {
      title: "Landscaping Website",
      description:
        "A responsive, professional portfolio for a landscaping business to showcase their projects, list services, and capture leads.",
      image: landscapeImg,
      tags: ["Landscaping", "Lead Generation", "Portfolio"],
      link: "https://christian-hopper.github.io/greenscape-landscaping/",
    },
  ];

  return (
    <section id="work" className="portfolio">
      <div className="portfolio__container">
        {/* Section Header */}
        <div className="portfolio__header">
          <h2 className="portfolio__header-title">Selected Work</h2>
          <p className="portfolio__header-subtitle">
            Recent projects built specifically for local businesses. Fast
            loading times, responsive, and optimized for conversion.
          </p>
        </div>

        {/* Projects */}
        <div className="portfolio__projects">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`portfolio__project ${
                index % 2 !== 0 ? "reverse" : ""
              }`}
            >
              {/* Image Mockup */}
              <div className="portfolio__image">
                <div className="portfolio__browser">
                  <div className="portfolio__browser-header">
                    <span className="portfolio__browser-header-dot"></span>
                    <span className="portfolio__browser-header-dot"></span>
                    <span className="portfolio__browser-header-dot"></span>
                  </div>
                  <div className="portfolio__browser-body">
                    <img
                      className="portfolio__browser-body-img"
                      src={project.image}
                      alt={project.title}
                    />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="portfolio__info">
                <h3 className="portfolio__info-title">{project.title}</h3>
                <p className="portfolio__info-description">
                  {project.description}
                </p>

                <div className="portfolio__tags">
                  {project.tags.map((tag) => (
                    <span className="portfolio__tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="portfolio__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Live Site {<ExternalLink size={16} />}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

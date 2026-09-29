import type { Resume } from "../types/resume";

interface ExperienceProps {
  experiences: Resume["experience"];
}

export function Experience({ experiences }: ExperienceProps) {
  return (
    <section id="experience" className="portfolio-section">
      <p className="portfolio-section__eyebrow">Trajetória</p>
      <h2>Experiência profissional</h2>
      <div className="portfolio-list">
        {experiences.map((experience) => (
          <article
            className="portfolio-entry"
            key={`${experience.company}-${experience.role}`}
          >
            <div className="portfolio-entry__heading">
              <div>
                <h3>{experience.company}</h3>
                <p className="portfolio-entry__subtitle">{experience.role}</p>
              </div>
              <p className="portfolio-entry__meta">
                {experience.startDate} – {experience.endDate}
                {experience.location && ` · ${experience.location}`}
              </p>
            </div>
            <p>{experience.description}</p>
            {experience.technologies && experience.technologies.length > 0 && (
              <ul className="portfolio-tags">
                {experience.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

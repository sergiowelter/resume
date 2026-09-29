import type { Resume } from "../types/resume";

interface EducationProps {
  education: Resume["education"];
}

export function Education({ education }: EducationProps) {
  return (
    <section id="education" className="portfolio-section">
      <p className="portfolio-section__eyebrow">Formação</p>
      <h2>Educação</h2>
      <div className="portfolio-list">
        {education.map((item) => (
          <article
            className="portfolio-entry"
            key={`${item.institution}-${item.course}`}
          >
            <h3>{item.course}</h3>
            <p>{item.institution}</p>
            {(item.startDate || item.endDate) && (
              <p className="portfolio-entry__meta">
                {item.startDate}
                {item.startDate && item.endDate && " – "}
                {item.endDate}
              </p>
            )}
            {item.status && <p>{item.status}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}

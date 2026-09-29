import type { Resume } from "../types/resume";

interface ProjectsProps {
  projects: Resume["projects"];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="portfolio-section">
      <p className="portfolio-section__eyebrow">Trabalhos</p>
      <h2>Projetos</h2>
      <div className="portfolio-list">
        {projects.map((project) => (
          <article className="portfolio-entry" key={project.name}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <ul className="portfolio-tags">
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
            {(project.website || project.github) && (
              <a
                href={project.website || project.github}
                target="_blank"
                rel="noreferrer"
              >
                Acessar projeto
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

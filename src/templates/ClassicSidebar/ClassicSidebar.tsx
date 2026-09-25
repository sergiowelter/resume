import { resume } from "../../data/resume";
import "./ClassicSidebar.css";

export function ClassicSidebar() {
  return (
    <div className="resume-page">
      <aside className="resume-sidebar">
        <header className="resume-header">
          <h1>{resume.personalInfo.name}</h1>
          <h2>{resume.personalInfo.title}</h2>

          {resume.personalInfo.photo && (
            <img
              src={resume.personalInfo.photo}
              alt={resume.personalInfo.name}
              className="profile-photo"
            />
          )}
        </header>

        <section className="sidebar-section">
          <h3>Contato</h3>

          <p>{resume.personalInfo.email}</p>

          {resume.personalInfo.phone && (
            <p>{resume.personalInfo.phone}</p>
          )}

          {resume.personalInfo.location && (
            <p>{resume.personalInfo.location}</p>
          )}

          {resume.personalInfo.linkedin && (
            <p>{resume.personalInfo.linkedin}</p>
          )}

          {resume.personalInfo.github && (
            <p>{resume.personalInfo.github}</p>
          )}
        </section>

        <section className="sidebar-section">
          <h3>Formação</h3>

          {resume.education.map((education) => (
            <article
              key={`${education.institution}-${education.course}`}
              className="education-item"
            >
              <strong>{education.course}</strong>

              <p>{education.institution}</p>

              {(education.startDate || education.endDate) && (
                <p>
                  {education.startDate}
                  {education.startDate && education.endDate && " - "}
                  {education.endDate}
                </p>
              )}

              {education.status && <p>{education.status}</p>}
            </article>
          ))}
        </section>

        <section className="sidebar-section">
          <h3>Competências</h3>

          <ul className="skills-list">
            {resume.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>
      </aside>

      <main className="resume-content">
        <section className="content-section">
          <h3>Perfil</h3>
          <p>{resume.profile}</p>
        </section>

        <section className="content-section">
          <h3>Experiência Profissional</h3>

          {resume.experience.map((experience) => (
            <article
              key={`${experience.company}-${experience.role}`}
              className="experience-item"
            >
              <h4>{experience.company}</h4>

              <p className="experience-role">{experience.role}</p>

              <p className="experience-meta">
                {experience.startDate} - {experience.endDate}
                {experience.location && ` | ${experience.location}`}
              </p>

              <p>{experience.description}</p>

              {experience.technologies &&
                experience.technologies.length > 0 && (
                  <ul className="technology-list">
                    {experience.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                )}
            </article>
          ))}
        </section>

        <section className="content-section">
          <h3>Projetos</h3>

          {resume.projects.map((project) => (
            <article key={project.name} className="project-item">
              <h4>{project.name}</h4>

              <p>{project.description}</p>

              <ul className="technology-list">
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="content-section">
          <h3>Idiomas</h3>

          {resume.languages.map((language) => (
            <p key={language.name}>
              <strong>{language.name}</strong>: {language.level}
            </p>
          ))}
        </section>
      </main>
    </div>
  );
}
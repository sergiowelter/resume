import type { Resume } from "../types/resume";

interface SkillsProps {
  skills: Resume["skills"];
}

export function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="portfolio-section">
      <p className="portfolio-section__eyebrow">Tecnologias</p>
      <h2>Competências</h2>
      <ul className="portfolio-tags portfolio-tags--skills">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

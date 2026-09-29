import type { Resume } from "../../types/resume";
import "./Header.css";

interface HeaderProps {
  personalInfo: Resume["personalInfo"];
}

export function Header({ personalInfo }: HeaderProps) {
  return (
    <header className="portfolio-header">
      {personalInfo.photo && (
        <img
          className="portfolio-header__photo"
          src={personalInfo.photo}
          alt={`Foto de ${personalInfo.name}`}
        />
      )}
      <div className="portfolio-header__details">
        <p className="portfolio-header__eyebrow">Portfólio profissional</p>
        <h1>{personalInfo.name}</h1>
        <p className="portfolio-header__title">{personalInfo.title}</p>
        <div className="portfolio-header__contact">
          <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
          <span>{personalInfo.location}</span>
          {personalInfo.linkedin && (
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          )}
          {personalInfo.github && (
            <a href={personalInfo.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
        </div>
      </div>
    </header>
  );
}

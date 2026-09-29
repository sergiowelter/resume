import { resume } from "../../data/resume";
import { Header } from "../../components/Header/Header";
import { Navigation } from "../../components/Navigation/Navigation";
import { About } from "../../sections/About";
import { Education } from "../../sections/Education";
import { Experience } from "../../sections/Experience";
import { Projects } from "../../sections/Projects";
import { Skills } from "../../sections/Skills";
import "./PortfolioTemplate.css";

export function PortfolioTemplate() {
  return (
    <div className="portfolio-template">
      <Header personalInfo={resume.personalInfo} />
      <Navigation />
      <main className="portfolio-content">
        <About profile={resume.profile} />
        <Experience experiences={resume.experience} />
        <Projects projects={resume.projects} />
        <Education education={resume.education} />
        <Skills skills={resume.skills} />
      </main>
      <footer className="portfolio-footer">
        <p>{resume.personalInfo.name} · Portfólio</p>
      </footer>
    </div>
  );
}

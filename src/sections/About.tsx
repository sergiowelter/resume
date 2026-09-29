interface AboutProps {
  profile: string;
}

export function About({ profile }: AboutProps) {
  return (
    <section id="about" className="portfolio-section">
      <p className="portfolio-section__eyebrow">Apresentação</p>
      <h2>Perfil</h2>
      <p>{profile}</p>
    </section>
  );
}

import "./Navigation.css";

const links = [
  { href: "#about", label: "Perfil" },
  { href: "#experience", label: "Experiência" },
  { href: "#projects", label: "Projetos" },
  { href: "#education", label: "Formação" },
  { href: "#skills", label: "Competências" }
];

export function Navigation() {
  return (
    <nav className="portfolio-navigation" aria-label="Navegação do portfólio">
      {links.map((link) => (
        <a key={link.href} href={link.href}>
          {link.label}
        </a>
      ))}
    </nav>
  );
}

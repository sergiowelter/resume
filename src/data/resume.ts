import type { Resume } from "../types/resume";

export const resume: Resume = {
  personalInfo: {
    name: "Sergio Gustavo Welter",
    title: "Desenvolvedor Full Stack",
    email: "sergiowelter@yahoo.com.br",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
    location: "Brasil",
    linkedin: "https://www.linkedin.com/in/sergio-welter-ab5465162/",
    github: "https://github.com/sergiowelter",
    summary:
      "Desenvolvedor Full Stack desde 2017, trabalhando com PHP, JavaScript/TypeScript, Laravel, Node.js, React.js, Vue.js, Java, Python, C#(.NET), C++, C e outros. Atuo no desenvolvimento de sistemas web, APIs REST e aplicações escaláveis. Possuo experiência com bancos de dados relacionais como MySQL, MariaDB, SQL Server, Firebird e SQL puro, Docker, Azure e versionamento com Git/GitHub. Utilizo ferramentas de IA como GitHub Copilot e ChatGPT para aumentar produtividade, qualidade de código e eficiência no desenvolvimento."
  },

  skills: [
    "React",
    "TypeScript",
    "PHP",
    "Laravel",
    ".NET",
    "PostgreSQL"
  ],

  experience: [
    {
      company: "Empresa exemplo",
      role: "Desenvolvedor de Software",
      startDate: "2023",
      endDate: "Atual",
      description:
        "Desenvolvimento e manutenção de aplicações web e APIs.",
      technologies: [
        "PHP",
        "React",
        "PostgreSQL"
      ]
    }
  ],

  education: [
    {
      institution: "Instituição exemplo",
      course: "Curso exemplo",
      status: "Concluído"
    }
  ],

  projects: [
    {
      name: "API de Vendas",
      description:
        "API desenvolvida para gerenciamento de vendas utilizando arquitetura em camadas.",
      technologies: [
        ".NET",
        "PostgreSQL",
        "Entity Framework"
      ],
      github: ""
    }
  ],

  languages: [
    {
      name: "Português",
      level: "Nativo"
    }
  ]
};
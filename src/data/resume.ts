import type { Resume } from "../types/resume";

export const resume: Resume = {
  personalInfo: {
    name: "Sergio Gustavo Welter",
    title: "Desenvolvedor Full Stack",
    email: "sergiowelter@yahoo.com.br",
    photo: "/photos/profile.jpg",
    location: "Brasil",
    linkedin: "https://www.linkedin.com/in/sergio-welter-ab5465162/",
    github: "https://github.com/sergiowelter",
    summary:
      "Desenvolvedor Full Stack desde 2017, trabalhando com PHP, JavaScript/TypeScript, Laravel, Node.js, React.js, Vue.js, Java, Python, C#(.NET), C++, C e outros. Atuo no desenvolvimento de sistemas web, APIs REST e aplicações escaláveis. Possuo experiência com bancos de dados relacionais como MySQL, MariaDB, SQL Server, Firebird e SQL puro, Docker, Azure e versionamento com Git/GitHub. Utilizo ferramentas de IA como GitHub Copilot e ChatGPT para aumentar produtividade, qualidade de código e eficiência no desenvolvimento."
  },

  profile:
    "Desenvolvedor Full Stack com foco em arquitetura de software, APIs e interfaces modernas. Tenho experiência na criação de soluções escaláveis para web, com atenção à qualidade, performance e manutenção de código.",

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
      company: "Berlinerluft do Brasil",
      role: "Desenvolvedor Full Stack",
      location: "Alvorada/RS",
      startDate: "07/2026",
      endDate: "08/2026",
      description:
        "Manutenção de sistema legado e interno voltado à classificação de ventiladores e ar-condicionados e ao cadastro de novos pedidos.",
      technologies: ["PHP", "Laravel", "MVC", "MariaDB", "Git", "JavaScript", "jQuery"]
    },
    {
      company: "BRS Healthcare",
      role: "Desenvolvedor Full Stack",
      location: "Porto Alegre/RS",
      startDate: "04/2025",
      endDate: "11/2025",
      description:
        "Desenvolvimento e manutenção de sistemas de autoagendamento, consultas online e gerenciamento de consultas e agendas médicas. Manutenção de sistema legado, criação de funcionalidades, testes e atualização do sistema em produção.",
      technologies: ["PHP", "Laravel", "JavaScript", "React.js", "MySQL", "Git", "GitHub"]
    },
    {
      company: "OAB/RS",
      role: "Desenvolvedor Full Stack Pleno",
      location: "Porto Alegre/RS",
      startDate: "06/2022",
      endDate: "03/2025",
      description:
        "Desenvolvimento e manutenção de sistemas legados internos e externos para advogados e funcionários, incluindo sistemas financeiros, agendamento de eventos e calendários. Implementação de páginas, melhorias e correções, além de deploy e atualização de sistemas em produção com alto volume de acessos.",
      technologies: ["PHP", "Phalcon", "Laravel", "SQL Server", "MySQL", "JavaScript", "jQuery", "Semantic UI", "Vue.js", "Git", "Linux Server", "Docker", "HTML5", "CSS3"]
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
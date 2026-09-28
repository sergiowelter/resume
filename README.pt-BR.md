# Resume Web

[English](README.md) | [Português](README.pt-BR.md)

Aplicação web desenvolvida com React e TypeScript para exibir informações de currículo em um layout para a web.

Atualmente, o projeto utiliza um arquivo estático com os dados do currículo e o template Classic Sidebar. A longo prazo, a proposta é oferecer vários templates, edição de currículos e publicação de currículos online.

## Tecnologias

- React
- TypeScript
- Vite
- CSS

## Estrutura do projeto

```text
public/
├── files/                 # Arquivos estáticos
└── photos/                # Fotos de perfil
src/
├── data/
│   └── resume.ts          # Conteúdo do currículo
├── templates/
│   └── ClassicSidebar/    # Layout atual do currículo
├── types/
│   └── resume.ts          # Interfaces TypeScript dos dados
├── App.tsx                # Componente principal da aplicação
├── App.css
├── index.css
└── main.tsx               # Ponto de entrada do React
```

Os dados do currículo são mantidos separados da apresentação. A interface TypeScript `Resume` define a estrutura dos dados, `src/data/resume.ts` fornece o conteúdo atual e o template o exibe.

## Recursos atuais

- Interfaces TypeScript para os dados do currículo
- Template de currículo Classic Sidebar
- Exibição de perfil, contato, experiência profissional, formação, competências, projetos e idiomas
- Foto de perfil opcional carregada do diretório `public/photos/`

Atualmente, os dados do currículo são mantidos no código-fonte. O projeto ainda não inclui editor de currículos, envio de fotos, armazenamento local ou integração com backend.

## Como começar

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O Vite exibirá no terminal o endereço local da aplicação, normalmente `http://localhost:5173`.

## Build de produção

Gere a versão de produção:

```bash
npm run build
```

Os arquivos gerados serão salvos no diretório `dist/`.

Execute o linter:

```bash
npm run lint
```

## Recursos planejados

- Editor de currículos
- Envio de foto de perfil
- Vários currículos e templates
- Personalização de temas e cores
- API backend e armazenamento persistente
- Cadastro e autenticação de usuários
- URLs públicas para currículos
- Exportação para PDF e importação de currículos
- Análise de currículos com auxílio de IA
- Métricas de visualização de currículos

## Status do desenvolvimento

O projeto está em desenvolvimento. O foco atual é o modelo de dados do currículo e sua apresentação por meio de templates. O editor de currículos e o backend estão planejados para etapas futuras.

## Licença

Este projeto ainda não possui uma licença definida.

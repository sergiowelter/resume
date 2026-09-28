# Resume Web

[English](README.md) | [Português](README.pt-BR.md)

A web application built with React and TypeScript that displays resume information in a web-based layout.

The project currently uses a static resume data file and a Classic Sidebar template. Its longer-term goal is to support multiple templates, resume editing, and publishing online resumes.

## Technology Stack

- React
- TypeScript
- Vite
- CSS

## Project Structure

```text
public/
├── files/                 # Static files
└── photos/                # Resume photos
src/
├── data/
│   └── resume.ts          # Resume content
├── templates/
│   └── ClassicSidebar/    # Current resume layout
├── types/
│   └── resume.ts          # TypeScript data interfaces
├── App.tsx                # Application entry component
├── App.css
├── index.css
└── main.tsx               # React entry point
```

Resume content is defined separately from its presentation. The `Resume` TypeScript interface describes the data, `src/data/resume.ts` provides the current content, and the template renders it.

## Current Features

- TypeScript interfaces for resume information
- Classic Sidebar resume template
- Display of profile, contact details, experience, education, skills, projects, and languages
- Optional profile photo loaded from the `public/photos/` directory

The current resume data is maintained in source code. The project does not yet include a resume editor, photo upload, local storage, or backend integration.

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite prints the local development URL in the terminal, usually `http://localhost:5173`.

## Production Build

Build the application:

```bash
npm run build
```

The generated files are written to the `dist/` directory.

Run the linter:

```bash
npm run lint
```

## Planned Features

- Resume editor
- Profile photo upload
- Multiple resumes and templates
- Theme and color customization
- Backend API and persistent storage
- User registration and authentication
- Public resume URLs
- PDF export and resume import
- AI-assisted resume parsing
- Resume view analytics

## Development Status

The project is under development. Current work focuses on the resume data model and its template-based presentation. A resume editor and backend are planned for future development.

## License

No license has been defined for this project yet.
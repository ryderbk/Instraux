# INSTRAUX'26 - National Technical Symposium Website

## Overview
This is a Lovable-imported React + Vite + TypeScript application for INSTRAUX'26, a National Technical Symposium by the Electronics & Instrumentation Engineering department at Velammal Engineering College.

## Project Architecture

### Tech Stack
- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: React Router DOM v6
- **Animations**: Framer Motion
- **State Management**: TanStack React Query

### Project Structure
```
src/
├── components/
│   ├── ui/          # shadcn/ui components
│   └── *.tsx        # Feature components (Navigation, HeroScene, etc.)
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
├── pages/           # Page components
├── App.tsx          # Main application component
├── main.tsx         # Entry point
└── index.css        # Global styles
```

### Key Pages & Components
- **Index.tsx**: Main landing page with all sections
- **HeroScene.tsx**: Animated hero section
- **Navigation.tsx**: Top navigation bar
- **EventsSection.tsx**: Event listings
- **WorkshopSection.tsx**: Workshop details
- **TeamSection.tsx**: Team members display
- **ContactSection.tsx**: Contact information
- **RegistrationSection.tsx**: Event registration

## Development

### Running the Project
The application runs on port 5000 via Vite dev server:
```bash
npm run dev
```

### Building for Production
```bash
npm run build
```
Output goes to `dist/` directory for static hosting.

## Recent Changes
- 2025-12-25: Initial import from Lovable to Replit environment
- Configured Vite to run on port 5000 with all hosts allowed
- Set up static deployment configuration

## User Preferences
- None specified yet

## Notes
- This is a frontend-only static site
- No backend server required
- Deployment configured for static hosting

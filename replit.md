# INSTRAUX'26 - Technical Symposium Website

## Overview

This is a modern, responsive event website for INSTRAUX'26 - a National Level Technical Symposium organized by the Department of Electronics and Instrumentation Engineering at Velammal Engineering College, Chennai. The site showcases 8 different events (technical and non-technical), a drone workshop, team information, and registration details. The event is scheduled for January 31st, 2026.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **React 18 with TypeScript**: Single-page application architecture
- **Vite**: Build tool for fast development and optimized production builds
- **React Router v6**: Client-side routing with hash-based navigation for sections

### Styling System
- **Tailwind CSS**: Utility-first CSS with custom configuration
- **Custom Theme**: Dark purple industrial theme with glass-morphism effects
- **CSS Variables**: HSL-based color system defined in `src/index.css`
- **Custom Fonts**: Rajdhani (display) and Share Tech Mono (monospace)

### UI Components
- **shadcn/ui**: Pre-built accessible components based on Radix UI primitives
- **Component Location**: `src/components/ui/` contains reusable UI primitives
- **Custom Components**: Section-specific components in `src/components/`

### Animation & Interactivity
- **Framer Motion**: Page transitions, scroll animations, and micro-interactions
- **ThunderEffect**: Custom canvas-based lightning effect for interactive background
- **CountdownTimer**: Real-time countdown to event date

### State Management
- **React Query (@tanstack/react-query)**: Server state management (configured but minimal usage currently)
- **Local State**: React hooks for component-level state
- **No Global State Store**: App complexity doesn't require Redux/Zustand

### Page Structure
- **Index Page**: Single-page layout with multiple scrollable sections (Hero, About, Events, Workshop, Registration, Team, Contact)
- **Event Detail Pages**: Dynamic routes (`/event/:id`) for individual event information
- **404 Page**: Fallback for unknown routes

### Data Layer
- **Static Data**: Event information stored in `src/data/events.ts`
- **No Backend**: Currently a static frontend-only application
- **Local Storage**: Used for event storage initialization

### Path Aliases
- `@/*` maps to `./src/*` for clean imports

## External Dependencies

### Core Libraries
- **react-router-dom**: Client-side routing
- **framer-motion**: Animation library
- **@tanstack/react-query**: Data fetching and caching

### UI Libraries
- **@radix-ui/***: Accessible UI primitives (toast, tooltip, slot, and many more)
- **lucide-react**: Icon library
- **class-variance-authority**: Component variant management
- **tailwind-merge**: Tailwind class merging utility
- **sonner**: Toast notifications

### Utilities
- **clsx**: Conditional class names
- **zod**: Schema validation (available but minimal usage)
- **react-helmet**: SEO and meta tag management
- **next-themes**: Theme management (dark mode support)

### Build Tools
- **Vite**: Development server and production bundler
- **TypeScript**: Type checking
- **ESLint**: Code linting
- **PostCSS/Autoprefixer**: CSS processing
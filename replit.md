# INSTRAUX'26 - National Technical Symposium Website

## Overview

INSTRAUX'26 is a modern, responsive event website for a National Level Technical Symposium organized by the Department of Electronics and Instrumentation Engineering at Velammal Engineering College, Chennai. The site features an industrial-themed design with glass-morphism UI, smooth animations, event listings, countdown timer, and registration functionality. The event is scheduled for January 31st, 2026.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Stack
- **React 18 with TypeScript**: Core UI framework using functional components and hooks
- **Vite**: Build tool and dev server for fast development
- **Tailwind CSS**: Utility-first styling with custom theme configuration
- **Framer Motion**: Animation library for smooth transitions and effects
- **React Router v6**: Client-side routing for SPA navigation

### Component Architecture
- **Page Components**: Located in `src/pages/` - Index (landing), EventDetail, NotFound
- **Feature Components**: Located in `src/components/` - Section-based components (HeroScene, AboutSection, EventsSection, etc.)
- **UI Components**: Located in `src/components/ui/` - Reusable shadcn/ui components (Button, Toast, Tooltip)
- **Custom Effects**: ThunderEffect and RealisticLightning for interactive visual effects

### Design System
- **Glass-morphism**: Custom CSS variables for transparent backgrounds with blur effects
- **Dark Theme**: Purple-accent dark color palette defined in `src/index.css`
- **Custom Fonts**: Rajdhani (display) and Share Tech Mono (monospace)
- **Path Aliases**: `@/` maps to `src/` for clean imports

### State Management
- **React Query (@tanstack/react-query)**: Server state management (configured but minimal usage currently)
- **Local State**: React hooks for component-level state
- **Toast Notifications**: Custom hook (`use-toast.ts`) with Sonner integration

### Data Layer
- **Static Data**: Event information stored in `src/data/events.ts`
- **No Backend**: Currently a static site without API integration

### Build Configuration
- **TypeScript**: Relaxed strict mode for flexibility (`noImplicitAny: false`)
- **ESLint**: Configured with React hooks and refresh plugins
- **PostCSS**: Autoprefixer and Tailwind processing

## External Dependencies

### UI Libraries
- **Radix UI**: Primitives for Toast, Tooltip, and Slot components
- **Lucide React**: Icon library
- **class-variance-authority**: Component variant management
- **tailwind-merge + clsx**: Utility for conditional class merging

### Animation & Effects
- **Framer Motion**: Animation library
- **react-intersection-observer**: Scroll-based visibility detection

### Utilities
- **react-helmet**: Document head management for SEO
- **sonner**: Toast notification system
- **zod**: Schema validation (available but minimal usage)
- **next-themes**: Theme management (included but not actively used)

### Development Tools
- **Vite**: Dev server runs on port 5000
- **TypeScript**: Type checking
- **ESLint**: Code linting
- **Tailwind CSS**: Styling with custom configuration in `tailwind.config.ts`
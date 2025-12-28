# INSTRAUX'26 - National Technical Symposium Website

A modern, responsive website for INSTRAUX'26 - a National Level Technical Symposium organized by the Department of Electronics and Instrumentation Engineering at Velammal Engineering College, Chennai.

## 🚀 Features

- **Responsive Design**: Fully responsive across all devices and screen sizes
- **Modern UI**: Industrial-themed glass-morphism design with smooth animations
- **Event Management**: Dedicated pages for each of the 8 events with detailed information
- **Countdown Timer**: Real-time countdown to the event (January 31st, 2026)
- **Registration Integration**: Seamless registration section with event details
- **Fast Performance**: Built with Vite for lightning-fast builds and development

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom glass-morphism components
- **Animations**: Framer Motion
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Notifications**: Sonner
- **SEO**: React Helmet

## 📋 Project Structure

```
src/
├── components/
│   ├── ui/                      # Reusable UI components (button, toast, tooltip)
│   ├── Navigation.tsx           # Header navigation
│   ├── HeroScene.tsx            # Hero section with title and countdown
│   ├── EventsSection.tsx        # Event grid and cards
│   ├── AboutSection.tsx         # About the symposium
│   ├── WorkshopSection.tsx      # Workshop details
│   ├── TeamSection.tsx          # Team members
│   ├── RegistrationSection.tsx  # Registration form
│   ├── ContactSection.tsx       # Contact information
│   ├── ClosingSection.tsx       # Closing call-to-action
│   └── CountdownTimer.tsx       # Event countdown display
├── pages/
│   ├── Index.tsx                # Landing page
│   ├── EventDetail.tsx          # Individual event detail pages
│   └── NotFound.tsx             # 404 page
├── data/
│   └── events.ts                # Event data and utilities
├── hooks/
│   ├── use-mobile.tsx          # Mobile detection hook
│   └── use-toast.ts            # Toast notification hook
├── lib/
│   └── utils.ts                # Utility functions
├── App.tsx                      # Main app component with routing
├── main.tsx                     # Application entry point
└── index.css                    # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📱 Pages and Features

### Home / Landing Page
- Hero section with INSTRAUX'26 branding
- Live countdown timer
- Event overview
- About the symposium
- Featured events and workshops
- Team showcase
- Contact information
- Registration call-to-action

### Event Detail Pages
Dynamic pages for each of the 8 events:
- **Technical Events**: Innoscript, Projectopia, Brain Battle, Watt's Wrong
- **Non-Technical Events**: Hunt for the Hidden, Aura Unplugged, Rush and Survive, Play to Slay

Each event page includes:
- Event description
- Rules and guidelines
- Prize pool and registration fees
- Team size information
- Event schedule
- Coordinator contact details

## 🎨 Design System

The website features a unique industrial theme with:
- Dark PCB-inspired color palette
- Glass-morphism UI elements
- Copper/gold accent colors
- Smooth micro-interactions
- Responsive breakpoints for mobile, tablet, and desktop

### Color Palette
- Background: Deep dark navy (`#0F0F12`)
- Foreground: Light cream (`#E8E8E8`)
- Primary: Burnt Red (`#B43C28`)
- Accent: Copper/Gold (`#FFA600`)
- Secondary: Amber (`#C88C3C`)

## 📦 Dependencies

### Core Dependencies
- `react` - UI library
- `react-dom` - DOM rendering
- `react-router-dom` - Client-side routing
- `framer-motion` - Animation library
- `lucide-react` - Icon library
- `sonner` - Toast notifications
- `react-helmet` - SEO management
- `tailwindcss` - Utility-first CSS framework

### Development Dependencies
- `vite` - Build tool
- `typescript` - Type safety
- `eslint` - Code linting
- `tailwindcss` - CSS utilities

## 🔧 Build & Deployment

### Production Build
```bash
npm run build
```

The output will be in the `dist/` directory, ready for deployment to any static hosting service.

### Deploy to
- **Netlify**: Connect your repository and select `npm run build` as the build command
- **Vercel**: Similar process, auto-detects Vite projects
- **GitHub Pages**: Build locally and push the `dist/` folder
- **Traditional Hosting**: Build locally and upload `dist/` folder via FTP/SFTP

## 📝 Environment Variables

No environment variables required. The application is fully static.

## 🤝 Contributing

For contributions, please follow these guidelines:
1. Keep code clean and well-commented
2. Follow the existing code style and structure
3. Test changes thoroughly
4. Ensure no breaking changes to existing functionality

## 📄 License

This project is the property of the Electronics and Instrumentation Engineering Department at Velammal Engineering College.

## 📧 Contact

For event inquiries, please visit the [Contact Section](#contact) on the website or reach out to the respective event coordinators listed on their event pages.

---

**Event Date**: January 31st, 2026  
**Venue**: Velammal Engineering College, Surapet, Chennai

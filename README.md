# INSTRAUX'26 - National Technical Symposium Website

A modern, responsive web application for INSTRAUX'26, a National Level Technical Symposium organized by the Department of Electronics and Instrumentation Engineering at Velammal Engineering College, Chennai.

## Purpose
This project serves as the official digital gateway for the INSTRAUX'26 symposium. It centralizes event information, workshop details, and registration processes into a high-performance, unified platform, ensuring participants have seamless access to all technical and non-technical event details.

## 🚀 Features
- **Responsive Design**: Optimized for all devices, from mobile phones to high-resolution desktops.
- **Industrial Aesthetic**: A theme-driven UI featuring glass-morphism and smooth Framer Motion animations.
- **Event Management**: Dedicated dynamic routing for detailed viewing of 8 distinct symposium events.
- **Countdown Timer**: A real-time synchronised timer counting down to January 31st, 2026.
- **Registration Integration**: Direct CTA buttons linking to organized Google Form registration systems.
- **Performance Optimized**: Built with Vite and React 18 for near-instant load times and efficient rendering.

## 🛠️ Tech Stack
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router v6
- **Icons**: Lucide React
- **SEO & Meta**: React Helmet
- **Build Tool**: Vite

## 📋 Project Structure
```text
src/
├── components/
│   ├── ui/                # shadcn-based reusable primitives
│   ├── Navigation.tsx     # Global site navigation
│   ├── HeroScene.tsx      # Landing section with countdown
│   ├── EventsSection.tsx  # Dynamic event categories
│   └── ...                # Other dedicated sections (About, Team, Workshop)
├── pages/
│   ├── Index.tsx          # Main landing page
│   ├── EventDetail.tsx    # Dynamic event information page
│   └── NotFound.tsx       # Custom 404 handler
├── data/
│   └── events.ts          # Static event data and icon mapping
├── hooks/                 # Custom React hooks (mobile detection, UI state)
└── lib/                   # Utility functions and class merging
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Steps
1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd Instraux
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## Usage Instructions
1. **Explore Events**: Browse the events section and click on any card to view detailed rules, prize pools, and schedules.
2. **Register**: Click "Register Now" from any event detail page or the main CTA to be redirected to the secure Google Forms for event enrollment.
3. **Workshop Participation**: Access the dedicated Workshop section for information regarding the Remote Pilot Training session.
4. **Navigation**: Use the progress-tracking navbar to jump quickly between the Hero, About, and Team sections.

## 🤝 Future Improvements (Optional)
- **Backend Integration**: Implement a Node.js/Express backend for real-time registration tracking.
- **Participant Dashboard**: Create a login system for participants to view their enrolled events.
- **Payment Gateway**: Integrate Razorpay or similar services for automated fee collection.

## 📝 Contributing
Contributions are welcome. Please ensure that you:
1. Maintain the existing industrial design system and styling tokens.
2. Follow TypeScript best practices and ensure type safety for new data structures.
3. Test responsiveness across different viewport sizes before submitting a pull request.

## 📄 License & Credits
**Department of Electronics and Instrumentation Engineering**, Velammal Engineering College.

For event inquiries or technical support, please refer to the contact section on the live website or reach out to the individual event coordinators.

**Event Date**: January 31st, 2026  
**Venue**: Velammal Engineering College, Surapet, Chennai

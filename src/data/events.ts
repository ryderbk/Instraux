import { Code, Lightbulb, Brain, Zap, Search, Music, Timer, Gamepad2, Mic, Film, MapPin, LucideIcon } from 'lucide-react';

export interface Event {
  id: number;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  type: 'technical' | 'non-technical';
  description: string;
  rules: string[];
  prizePool: string;
  maxTeamSize: number;
  registrationFee: string;
  schedule: string;
  contact: {
    name: string;
    phone: string;
  };
}

export const technicalEvents: Event[] = [
  {
    id: 1,
    title: 'Innoscript',
    subtitle: 'Code Your Vision',
    icon: Code,
    type: 'technical',
    description: "INNOSCRIPT is a paper presentation competition where teams present research or technical projects. Presentations are evaluated on innovation, technical depth, clarity, and practical relevance.",
    rules: [
      'Team size: 1-3 members',
      'PPT must be submitted before the event',
      'Report 15 minutes early',
      'Presentation time: 5 minutes per team',
      "Judges' decision will be final"
    ],
    prizePool: '₹5000',
    maxTeamSize: 3,
    registrationFee: '₹150',
    schedule: '31 Jan 2026',
    contact: { name: 'Jaylin M S', phone: '+91 8148103299' }
  },
  {
    id: 2,
    title: 'Projectopia',
    subtitle: 'Build the Future',
    icon: Lightbulb,
    type: 'technical',
    description: 'PROJECTOPIA is a project expo where teams showcase working projects and prototypes across domains such as Electronics, Software, AI, IoT, and Robotics.',
    rules: [
      'Team size: 1-5 members',
      'Bring your own demo setup (laptop, components)',
      'Presentation/demonstration time: 5-7 minutes',
      'Original work only',
      'Report 30 minutes before your slot'
    ],
    prizePool: '₹10000',
    maxTeamSize: 5,
    registrationFee: '₹300',
    schedule: '31 Jan 2026',
    contact: { name: 'Prashanth Krishna', phone: '+91 7550173414' }
  },
  {
    id: 3,
    title: 'Brain Battle',
    subtitle: 'Quiz Showdown',
    icon: Brain,
    type: 'technical',
    description: 'BRAIN BATTLE is a thrilling technical quiz designed to test your knowledge, speed, accuracy, and teamwork across electronics and technology domains.',
    rules: [
      'Team size: 3-4 members',
      'Round 1: Paper & Pen – Test your fundamentals',
      'Round 2: Buzzer Round – Speed meets accuracy',
      'Round 3: Rapid Fire – Think fast or miss out',
      'Mobile phones are strictly prohibited'
    ],
    prizePool: '₹3000',
    maxTeamSize: 4,
    registrationFee: '₹100',
    schedule: '31 Jan 2026',
    contact: { name: 'Vijayasurya S', phone: '+91 8148768127' }
  },
  {
    id: 4,
    title: "Watt's Wrong",
    subtitle: 'Circuit Detective',
    icon: Zap,
    type: 'technical',
    description: "WATT'S WRONG challenges teams to spot and fix circuit errors under pressure — a hands-on test of practical electronics and debugging skills.",
    rules: [
      'Team size: 2 members',
      'Rounds: 3 exciting rounds',
      'Mobiles & laptops are not allowed',
      'Safety protocols must be followed',
      "Judges' decision will be final"
    ],
    prizePool: '₹7000',
    maxTeamSize: 2,
    registrationFee: '₹200',
    schedule: '31 Jan 2026',
    contact: { name: 'Tharun KM', phone: '+91 8754912685' }
  }
];

export const nonTechnicalEvents: Event[] = [
  {
    id: 5,
    title: 'Hunt for the Hidden',
    subtitle: 'Treasure Quest',
    icon: MapPin,
    type: 'non-technical',
    description: 'HUNT FOR THE HIDDEN is a campus treasure hunt across two stages: Mind Maze (solve hints) and The Trail of Secrets (race across campus). Strategy and speed win the prize.',
    rules: [
      'Team size: 3-4 members',
      'Stage 1 – Mind Maze: Solve a series of hints',
      'Stage 2 – The Trail of Secrets: Shortlisted teams race across campus',
      'Use of mobile phones, smartwatches or electronic gadgets is not permitted',
      'Teams must remain within approved campus locations'
    ],
    prizePool: '₹4000',
    maxTeamSize: 4,
    registrationFee: '₹150',
    schedule: '31 Jan 2026',
    contact: { name: 'Jane Lydia J', phone: '+91 9363684332' }
  },
  {
    id: 6,
    title: 'Aura Unplugged',
    subtitle: 'Acoustic Magic',
    icon: Mic,
    type: 'non-technical',
    description: "AURA UNPLUGGED puts your memory, rhythm sense, and teamwork to the test — with fun, fast, and thrilling music-based challenges across three rounds: Hidden Harmony, Emoji Symphony and Rewind the Rhythm.",
    rules: [
      'Team size: Maximum 3 participants',
      'Each team must have at least one mobile phone with good internet connection',
      'All team members should register with the same team name',
      "Organizers' decisions are final",
      'Any form of misconduct or unfair means will lead to immediate disqualification'
    ],
    prizePool: '₹6000',
    maxTeamSize: 3,
    registrationFee: '₹200',
    schedule: '31 Jan 2026',
    contact: { name: 'Saiswetha R / Srilekha S', phone: '+91 9962646420 / +91 7305925936' }
  },
  {
    id: 7,
    title: 'Rush and Survive',
    subtitle: 'Race Against Time',
    icon: Gamepad2,
    type: 'non-technical',
    description: 'RUSH AND SURVIVE brings intense Free Fire action where strategy, teamwork, and survival decide the champions across two rounds: Battle Royale and Clash Squad.',
    rules: [
      'Team Mode: Squad only (4 players)',
      'Round 1: Battle Royale — top 4 teams qualify',
      'Round 2: Clash Squad (2 matches) — top 2 teams win',
      'All members must register with the same team name',
      "Organizers' decisions are final"
    ],
    prizePool: '₹5000',
    maxTeamSize: 4,
    registrationFee: '₹150',
    schedule: '31 Jan 2026',
    contact: { name: 'Skandhaguru S / Mohamed Thabeeb M', phone: '+91 9042210909 / +91 8122081729' }
  },
  {
    id: 8,
    title: 'Play to Slay',
    subtitle: 'Gaming Arena',
    icon: Film,
    type: 'non-technical',
    description: 'PLAY TO SLAY challenges your cinematic knowledge and creativity with rounds like Meme Template, Connections, and a Cinema-based Quiz to find the ultimate champs.',
    rules: [
      'Team event',
      'Mobile phone as buzzer',
      'E-certificates for all participants',
      'Report on time and follow round instructions'
    ],
    prizePool: '₹8000',
    maxTeamSize: 3,
    registrationFee: '₹200',
    schedule: '31 Jan 2026',
    contact: { name: 'Santhosh Kumar / Charumathi', phone: '+91 8248419507 / +91 6380358348' }
  }
];

export const allEvents = [...technicalEvents, ...nonTechnicalEvents];

// Serialization-friendly shape used for localStorage
export type SerializedEvent = Omit<Event, 'icon'> & { iconName: string };

const ICON_MAP: Record<string, LucideIcon> = {
  Code,
  Lightbulb,
  Brain,
  Zap,
  Search,
  Music,
  Timer,
  Gamepad2,
  Mic,
  Film,
  MapPin,
};

const STORAGE_KEY = 'instraux:events:v2';

function getIconName(icon: LucideIcon): string {
  // Lucide icon components usually have a function name (Code, Lightbulb, ...)
  // Use a safe typed access to avoid `any` lint rule
  const maybe: unknown = icon;
  if (typeof maybe === 'function' && (maybe as { name?: string }).name) {
    return (maybe as { name?: string }).name as string;
  }
  return 'Code';
}

function serializeEvent(e: Event): SerializedEvent {
  return { ...e, iconName: getIconName(e.icon) };
}

function reviveEvent(se: SerializedEvent): Event {
  const icon = ICON_MAP[se.iconName] || Code;
  return { ...se, icon } as Event;
}

export const saveEventsToStorage = (events: Event[]) => {
  try {
    const serialized = events.map(serializeEvent);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(serialized));
  } catch (err) {
    // fail silently - don't block the app
    console.warn('Failed to save events to storage', err);
  }
};

export const loadEventsFromStorage = (): Event[] | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as SerializedEvent[];
    return parsed.map(reviveEvent);
  } catch (err) {
    console.warn('Failed to parse events from storage', err);
    return null;
  }
};

export const initializeEventsStorage = () => {
  if (!('localStorage' in globalThis)) return;
  const existing = loadEventsFromStorage();
  // Only seed defaults if the key is truly missing (null). An empty array is a valid state.
  if (existing === null) {
    saveEventsToStorage(allEvents);
  }
};

export const getEvents = (): Event[] => {
  const loaded = loadEventsFromStorage();
  return loaded ?? allEvents;
};

export const getEventById = (id: number): Event | undefined => {
  const events = getEvents();
  return events.find(event => event.id === id);
};

export const getEventByTitle = (title: string): Event | undefined => {
  const events = getEvents();
  return events.find(event => event.title.toLowerCase() === title.toLowerCase());
};

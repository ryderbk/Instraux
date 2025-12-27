import { FileText, Lightbulb, Brain, Cpu, Search, Music, Timer, Gamepad2, Mic, Film, LucideIcon } from 'lucide-react';

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
  registrationLink: string;
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
    subtitle: 'Paper Presentation',
    icon: FileText,
    type: 'technical',
    description: "INNOSCRIPT provides a professional platform for students to present innovative ideas, research work, and technical solutions across multiple domains.",
    rules: [
      'Single-round paper presentation',
      '5 minutes per team',
      'PPT submission before the event is mandatory',
      'All team members must present',
      "Judges' decision will be final",
      'Certificates provided to all participants'
    ],
    prizePool: 'Cash Prizes',
    maxTeamSize: 3,
    registrationFee: 'TBD',
    schedule: '31 Jan 2026',
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLScakvUK_Ngcz54gzUCiub_QDrAE9nfKVIacUoGgfKKo69nsHQ/viewform',
    contact: { name: 'Jaylin M S / Keshigaa M', phone: '+91 8148103299 / +91 6385942268' }
  },
  {
    id: 2,
    title: 'Projectopia',
    subtitle: 'Project Expo',
    icon: Lightbulb,
    type: 'technical',
    description: 'PROJECTOPIA is a project exhibition event where participants showcase working models, prototypes, and innovative solutions addressing real-world problems.',
    rules: [
      'Single-round project exhibition and evaluation',
      '5–7 minutes for demonstration and Q&A',
      'Participants must bring their own project setup',
      'Originality is mandatory; plagiarism is strictly prohibited'
    ],
    prizePool: 'Cash Prizes',
    maxTeamSize: 5,
    registrationFee: 'TBD',
    schedule: '31 Jan 2026',
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLScakvUK_Ngcz54gzUCiub_QDrAE9nfKVIacUoGgfKKo69nsHQ/viewform',
    contact: { name: 'Prashanth Krishna / Mohammed Thabeeb', phone: '+91 7550173414 / +91 8122081709' }
  },
  {
    id: 3,
    title: 'Brain Battle',
    subtitle: 'Technical Quiz',
    icon: Brain,
    type: 'technical',
    description: 'BRAIN BATTLE is a high-intensity technical quiz that pushes your knowledge, speed, and accuracy to the limit. Designed for competitive minds, this event demands sharp thinking, teamwork, and quick decision-making under pressure.',
    rules: [
      'Round 1: Paper & Pen – Test core technical fundamentals',
      'Round 2: Buzzer Round – Speed-based accuracy test',
      'Round 3: Rapid Fire – Fast-thinking technical questions',
      'Mobile phones are strictly prohibited',
      'Teams must be prepared for rapid questions and intense competition'
    ],
    prizePool: 'Cash Prizes',
    maxTeamSize: 4,
    registrationFee: 'TBD',
    schedule: '31 Jan 2026',
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLScakvUK_Ngcz54gzUCiub_QDrAE9nfKVIacUoGgfKKo69nsHQ/viewform',
    contact: { name: 'Vijayasurya S / Naveen Raj P K', phone: '+91 8148768127 / +91 91506 89955' }
  },
  {
    id: 4,
    title: "Watt's Wrong",
    subtitle: 'Circuit Debugging Challenge',
    icon: Cpu,
    type: 'technical',
    description: "WATT'S WRONG is a technical challenge focused on electronics fundamentals, circuit debugging, and logical problem-solving. Participants must analyze, detect errors, and design efficient circuit solutions under time pressure.",
    rules: [
      'Round 1: MCQ Round – Core electronics concepts',
      'Round 2: Error Correction – Identify and fix circuit mistakes',
      'Round 3: Problem Statement – Design a circuit-based solution',
      'Mobile phones and laptops are not allowed',
      "Judges' decision will be final"
    ],
    prizePool: 'Cash Prizes',
    maxTeamSize: 2,
    registrationFee: 'TBD',
    schedule: '31 Jan 2026',
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLScakvUK_Ngcz54gzUCiub_QDrAE9nfKVIacUoGgfKKo69nsHQ/viewform',
    contact: { name: 'Tharun KM / Logesh K', phone: '+91 8754912685 / +91 63817 63451' }
  }
];

export const nonTechnicalEvents: Event[] = [
  {
    id: 5,
    title: 'Hunt for the Hidden',
    subtitle: 'Treasure Hunt',
    icon: Search,
    type: 'non-technical',
    description: 'HUNT FOR THE HIDDEN is an adventurous campus-wide treasure hunt that tests strategy, coordination, and time management. Follow clues, solve puzzles, and race against other teams to uncover the final treasure.',
    rules: [
      'Stage 1: Mind Maze – Solve logical hints to reach the correct solution',
      'Stage 2: Trail of Secrets – Campus-based search for theme clues',
      'Use of electronic gadgets is strictly prohibited',
      'Team members must stay together at all times',
      'Interfering with other teams will lead to elimination'
    ],
    prizePool: 'Cash Prizes',
    maxTeamSize: 4,
    registrationFee: 'TBD',
    schedule: '31 Jan 2026',
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLScakvUK_Ngcz54gzUCiub_QDrAE9nfKVIacUoGgfKKo69nsHQ/viewform',
    contact: { name: 'Jane Lydia J / Abisha A', phone: '+91 9363684332 / +91 86681 53302' }
  },
  {
    id: 6,
    title: 'Aura Unplugged',
    subtitle: 'Music Quiz',
    icon: Music,
    type: 'non-technical',
    description: "AURA UNPLUGGED is an energetic music quiz designed for music lovers who can recognize tunes in seconds. This event challenges your musical memory, rhythm sense, and teamwork through fun, fast-paced, and thrilling audio-based rounds. Get ready to listen carefully, think quickly, and vibe with your team.",
    rules: [
      'Each team must have at least one mobile phone with a stable internet connection',
      'All team members must register using the same team name',
      'The event consists of 3 rounds and a tie-breaker',
      'Hidden Harmony – Guess the song from background music',
      'Emoji Symphony – Identify songs using emojis',
      'Rewind the Rhythm – Recognize reversed songs',
      "Organizer's decision will be final and binding",
      'Any form of misconduct or unfair means will result in disqualification',
      'Cash prizes for winners and E-certificates for all participants'
    ],
    prizePool: 'Cash Prizes',
    maxTeamSize: 3,
    registrationFee: 'TBD',
    schedule: '31 Jan 2026',
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLScakvUK_Ngcz54gzUCiub_QDrAE9nfKVIacUoGgfKKo69nsHQ/viewform',
    contact: { name: 'Saiswetha R / Srilekha S', phone: '+91 99626 46420 / +91 73059 25936' }
  },
  {
    id: 7,
    title: 'Rush and Survive',
    subtitle: 'Free Fire Gaming Event',
    icon: Gamepad2,
    type: 'non-technical',
    description: 'RUSH AND SURVIVE is a high-energy Free Fire gaming tournament where strategy, reflexes, and squad coordination decide the champions. Drop in with your squad and fight your way to the top.',
    rules: [
      'Team Mode: Squad only (4 players)',
      'Round 1: Battle Royale — top 4 teams qualify',
      'Round 2: Clash Squad — two matches to determine winners',
      'All players must register under the same team name',
      "Organizer's decision is final",
      'Winners receive cash prizes and certificates',
      'E-certificates for all participants'
    ],
    prizePool: 'Cash Prizes',
    maxTeamSize: 4,
    registrationFee: 'TBD',
    schedule: '31 Jan 2026',
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLScakvUK_Ngcz54gzUCiub_QDrAE9nfKVIacUoGgfKKo69nsHQ/viewform',
    contact: { name: 'Skandhaguru S / Mohamed Thabeeb M', phone: '+91 9042210909 / +91 81220 81709' }
  },
  {
    id: 8,
    title: 'Play to Slay',
    subtitle: 'Cinema & Meme Challenge',
    icon: Film,
    type: 'non-technical',
    description: 'PLAY TO SLAY is a fun-packed cinematic event combining movies, memes, and creativity. If you love films, viral moments, and visual puzzles, this event is your stage to showcase quick thinking and pop-culture knowledge.',
    rules: [
      'Round 1: Meme Template – Guess famous dialogues from meme formats',
      'Round 2: Connections – Identify names by connecting images',
      'Round 3: Cinema Quiz – Movie-based quiz round',
      'Mobile phone will be used as a buzzer',
      'E-certificates for all participants'
    ],
    prizePool: 'Cash Prizes',
    maxTeamSize: 4,
    registrationFee: 'TBD',
    schedule: '31 Jan 2026',
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLScakvUK_Ngcz54gzUCiub_QDrAE9nfKVIacUoGgfKKo69nsHQ/viewform',
    contact: { name: 'Santhosh Kumar / Charumathi', phone: '+91 82484 19507 / +91 63803 58348' }
  }
];

export const allEvents = [...technicalEvents, ...nonTechnicalEvents];

// Serialization-friendly shape used for localStorage
export type SerializedEvent = Omit<Event, 'icon'> & { iconName: string };

const ICON_MAP: Record<string, LucideIcon> = {
  FileText,
  Lightbulb,
  Brain,
  Cpu,
  Search,
  Music,
  Timer,
  Gamepad2,
  Mic,
  Film,
};

const STORAGE_KEY = 'instraux:events:v4';

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
  let icon = ICON_MAP[se.iconName];
  // Extra safety: verify the icon is actually a function
  if (!icon || typeof icon !== 'function') {
    // Find the correct icon from allEvents
    const originalEvent = allEvents.find(e => e.id === se.id);
    icon = originalEvent?.icon || FileText;
  }
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
  if (loaded) {
    // Ensure all events have valid icons - if any are missing, reset to defaults
    const hasValidIcons = loaded.every(e => e.icon && typeof e.icon === 'function');
    if (hasValidIcons) {
      return loaded;
    }
  }
  // Reset storage with fresh data if recovery failed
  saveEventsToStorage(allEvents);
  return allEvents;
};

export const getEventById = (id: number): Event | undefined => {
  const events = getEvents();
  return events.find(event => event.id === id);
};

export const getEventByTitle = (title: string): Event | undefined => {
  const events = getEvents();
  return events.find(event => event.title.toLowerCase() === title.toLowerCase());
};

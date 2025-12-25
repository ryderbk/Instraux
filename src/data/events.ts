import { Code, Lightbulb, Brain, Zap, Search, Music, Timer, Gamepad2, LucideIcon } from 'lucide-react';

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
    description: 'A competitive programming event where participants solve algorithmic challenges and demonstrate their coding expertise. Showcase your problem-solving skills and compete with the best programmers.',
    rules: [
      'Individual participation only',
      'Time limit: 3 hours',
      'Any programming language allowed',
      'No external libraries or frameworks',
      'Plagarism will result in disqualification'
    ],
    prizePool: '₹5000',
    maxTeamSize: 1,
    registrationFee: '₹150',
    schedule: '10:00 AM - 1:00 PM',
    contact: { name: 'Arun Kumar', phone: '+91 9876543210' }
  },
  {
    id: 2,
    title: 'Projectopia',
    subtitle: 'Build the Future',
    icon: Lightbulb,
    type: 'technical',
    description: 'An innovation competition where teams present their most creative project ideas. From IoT solutions to AI applications, bring your groundbreaking concepts to life.',
    rules: [
      'Team size: 2-4 members',
      'Presentation duration: 8 minutes',
      'Include working prototype or demo',
      'Original ideas only',
      'Submission deadline: 24 hours before event'
    ],
    prizePool: '₹10000',
    maxTeamSize: 4,
    registrationFee: '₹300',
    schedule: '2:00 PM - 5:00 PM',
    contact: { name: 'Priya Sharma', phone: '+91 9876543211' }
  },
  {
    id: 3,
    title: 'Brain Battle',
    subtitle: 'Quiz Showdown',
    icon: Brain,
    type: 'technical',
    description: 'A fast-paced technical quiz competition testing your knowledge of electronics, programming, and general technology. Rapid-fire questions, increasing difficulty, and ultimate bragging rights await!',
    rules: [
      'Team size: 2 members',
      'Multiple choice and short answer questions',
      'No internet or reference materials allowed',
      'Negative marking: -0.25 for wrong answers',
      'Tie-breaker round if needed'
    ],
    prizePool: '₹3000',
    maxTeamSize: 2,
    registrationFee: '₹100',
    schedule: '11:00 AM - 12:30 PM',
    contact: { name: 'Rohit Singh', phone: '+91 9876543212' }
  },
  {
    id: 4,
    title: "Watt's Wrong",
    subtitle: 'Circuit Detective',
    icon: Zap,
    type: 'technical',
    description: 'A hands-on troubleshooting event where teams identify and fix faulty circuits. Test your circuit analysis and practical skills in this real-world engineering challenge.',
    rules: [
      'Team size: 2-3 members',
      'Basic tools provided',
      'Bring your own digital multimeter',
      'Safety protocols must be followed',
      'Time limit: 45 minutes per circuit'
    ],
    prizePool: '₹7000',
    maxTeamSize: 3,
    registrationFee: '₹200',
    schedule: '3:00 PM - 5:00 PM',
    contact: { name: 'Vikram Patel', phone: '+91 9876543213' }
  }
];

export const nonTechnicalEvents: Event[] = [
  {
    id: 5,
    title: 'Hunt for the Hidden',
    subtitle: 'Treasure Quest',
    icon: Search,
    type: 'non-technical',
    description: 'An exciting treasure hunt across the campus with cryptic clues and challenging puzzles. Work with your team to decode mysteries and race to find the hidden treasure!',
    rules: [
      'Team size: 3-5 members',
      'Follow marked campus areas only',
      'Clues will be given at each checkpoint',
      'No map or GPS devices allowed',
      'Completed before 6:00 PM'
    ],
    prizePool: '₹4000',
    maxTeamSize: 5,
    registrationFee: '₹150',
    schedule: '2:00 PM - 5:30 PM',
    contact: { name: 'Maya Gupta', phone: '+91 9876543214' }
  },
  {
    id: 6,
    title: 'Aura Unplugged',
    subtitle: 'Acoustic Magic',
    icon: Music,
    type: 'non-technical',
    description: 'A showcase for musical talent featuring acoustic performances. Solo or group performances welcome - bring your instruments and mesmerize the audience with live music.',
    rules: [
      'Solo or group performances (max 4 members)',
      'Duration: 5-8 minutes',
      'Acoustic instruments only',
      'Background music tracks allowed',
      'Stage sound check: 30 minutes before performance'
    ],
    prizePool: '₹6000',
    maxTeamSize: 4,
    registrationFee: '₹200',
    schedule: '4:00 PM - 6:00 PM',
    contact: { name: 'Ananya Das', phone: '+91 9876543215' }
  },
  {
    id: 7,
    title: 'Rush and Survive',
    subtitle: 'Race Against Time',
    icon: Timer,
    type: 'non-technical',
    description: 'A thrilling game show where contestants race through obstacle courses and complete time-based challenges. Speed, agility, and teamwork are the keys to survival!',
    rules: [
      'Team size: 2-3 members',
      'Multiple rounds with increasing difficulty',
      'Points awarded for speed and accuracy',
      'Safety gear provided and mandatory',
      'Physical fitness required'
    ],
    prizePool: '₹5000',
    maxTeamSize: 3,
    registrationFee: '₹150',
    schedule: '3:30 PM - 5:00 PM',
    contact: { name: 'Karan Verma', phone: '+91 9876543216' }
  },
  {
    id: 8,
    title: 'Play to Slay',
    subtitle: 'Gaming Arena',
    icon: Gamepad2,
    type: 'non-technical',
    description: 'Compete in popular esports and gaming tournaments. Whether you are a casual gamer or a pro, test your gaming skills and win exciting prizes!',
    rules: [
      'Individual participation',
      'Games: VALORANT, FIFA 24, Mobile Legends',
      'Tournament bracket format',
      'Bring your own gaming device',
      'Accounts must be at least level 10'
    ],
    prizePool: '₹8000',
    maxTeamSize: 1,
    registrationFee: '₹200',
    schedule: '1:00 PM - 6:00 PM',
    contact: { name: 'Ajay Reddy', phone: '+91 9876543217' }
  }
];

export const allEvents = [...technicalEvents, ...nonTechnicalEvents];

export const getEventById = (id: number): Event | undefined => {
  return allEvents.find(event => event.id === id);
};

export const getEventByTitle = (title: string): Event | undefined => {
  return allEvents.find(event => event.title.toLowerCase() === title.toLowerCase());
};

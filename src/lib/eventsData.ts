/**
 * Events Data - Participated and BTS Configuration
 */

export interface EventData {
  id: string;
  name: string;
  university: string;
  year: string;
  location: string;
  folder: string;
  category: 'win' | 'participated';
  description: string;
}

// Events we participated in but didn't win
export const PARTICIPATED_EVENTS: EventData[] = [
  {
    id: 'nasa-space-apps',
    name: 'NASA Space Apps Challenge',
    university: 'Global Event',
    year: '2024',
    location: 'Worldwide',
    folder: 'Nasa Space Apps',
    category: 'participated',
    description: 'Developed innovative space technology solutions addressing real-world challenges posed by NASA.',
  },
  {
    id: 'innovatex',
    name: 'InnovateX Hackathon',
    university: 'Tech Innovation Hub',
    year: '2024',
    location: 'Innovation Center',
    folder: 'Innovatex BTS',
    category: 'participated',
    description: 'Built cutting-edge solutions focusing on emerging technologies and digital transformation.',
  },
  {
    id: 'iotopia',
    name: 'IoTopia - IoT Hackathon',
    university: 'Smart Tech Institute',
    year: '2024',
    location: 'Tech Campus',
    folder: 'Iotopia BTS',
    category: 'participated',
    description: 'Created innovative Internet of Things applications for smart city and home automation solutions.',
  },
];

// All BTS events (wins + participated)
export const BTS_EVENTS: EventData[] = [
  // Win events
  {
    id: 'nmam-bts',
    name: 'NMAM Hackathon',
    university: 'NMAM Institute of Technology',
    year: '2024',
    location: 'Nitte',
    folder: 'NMAM BTS',
    category: 'win',
    description: 'First place victory at one of the region\'s most prestigious hackathons.',
  },
  {
    id: 'dizzy-bts',
    name: 'Dizzy Hackers',
    university: 'Dizzy Tech University',
    year: '2024',
    location: 'Tech Hub',
    folder: 'Dizzy Hackers BTS',
    category: 'win',
    description: 'Showcased exceptional problem-solving skills and innovative thinking.',
  },
  {
    id: 'ieee-bts',
    name: 'IEEE Hackathon',
    university: 'IEEE Student Chapter',
    year: '2024',
    location: 'Engineering College',
    folder: 'IEEE BTS', // Note: No BTS folder in data, using placeholder
    category: 'win',
    description: 'Competed among top engineering students with groundbreaking technical solutions.',
  },
  {
    id: 'iist-bts',
    name: 'IIST Hackathon',
    university: 'Indian Institute of Space Science and Technology',
    year: '2024',
    location: 'Trivandrum',
    folder: 'IIST-Trivandrum BTS',
    category: 'win',
    description: 'Developed space-themed applications at India\'s premier space research institute.',
  },
  {
    id: 'nexovate-bts',
    name: 'NEXOVATE',
    university: 'Innovation University',
    year: '2024',
    location: 'Tech City',
    folder: 'NEXOVATE BTS',
    category: 'win',
    description: 'Won with an innovative solution that pushed the boundaries of technology.',
  },
  {
    id: 'sheleads-bts',
    name: 'SheLeads Hackathon',
    university: 'Women in Tech Institute',
    year: '2024',
    location: 'Empowerment Hub',
    folder: 'SheLeads BTS',
    category: 'win',
    description: 'Empowering women in technology through innovative solutions and collaboration.',
  },
  {
    id: 'sheleads-2-bts',
    name: 'SheLeads 2.0 Hackathon',
    university: 'Presidency University, Bengaluru',
    year: '2026',
    location: 'Bengaluru',
    folder: 'SheLeads 2.0 BTS',
    category: 'win',
    description: 'A 24-hour national-level women-centric hackathon where we secured 1st place.',
  },
  {
    id: 'srujana-bts',
    name: 'Srujana Innovation Challenge',
    university: 'Creative Tech University',
    year: '2024',
    location: 'Innovation Center',
    folder: 'Srujana BTS',
    category: 'win',
    description: 'Created impactful solutions addressing real-world social and technical challenges.',
  },
  {
    id: 'pravruthi-ramiah',
    name: 'Pravruthi Ramiah Hackathon',
    university: 'Ramaiah Institute of Technology',
    year: '2024',
    location: 'Bangalore',
    folder: 'Pravruthi Ramiah BTS',
    category: 'win',
    description: 'Demonstrated exceptional technical prowess at one of Bangalore\'s premier hackathons.',
  },
  {
    id: 'eureka',
    name: 'Eureka Hackathon',
    university: 'Presidency University',
    year: '2025',
    location: 'Bengaluru',
    folder: 'Eureka BTS',
    category: 'win',
    description: 'A last-minute entry turned into an unforgettable win — zero prep, pure vibe, and a 2nd place finish.',
  },
  {
    id: 'mad-expo',
    name: 'MAD Expo',
    university: 'Presidency University',
    year: '2025',
    location: 'Bengaluru',
    folder: 'MAD Expo BTS',
    category: 'win',
    description: 'Showcased a fully working Android version of CareCloud — first place for technical execution and real-world usability.',
  },
  // Participated events
  ...PARTICIPATED_EVENTS,
];

export function getEventsByCategory(category: 'win' | 'participated' | 'all'): EventData[] {
  if (category === 'all') return BTS_EVENTS;
  return BTS_EVENTS.filter(event => event.category === category);
}

export function getEventById(id: string): EventData | undefined {
  return BTS_EVENTS.find(event => event.id === id);
}

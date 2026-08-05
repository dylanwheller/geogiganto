export type AgeRange = 'junior' | 'senior';

export type Question = {
  id: string;
  worldId: number;
  levelId: number;
  difficulty: AgeRange;
  text: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanation?: string;
  boss?: boolean;
};

export type World = {
  id: number;
  name: string;
  subject: string;
  description: string;
  accentColor: string;
  icon: string;
  levels: number;
  bossName: string;
};

export const WORLDS: World[] = [
  {
    id: 1,
    name: 'Continents & Countries',
    subject: 'Continents & Countries',
    description: 'Explore the seven continents and the nations within them',
    icon: '🌍',
    accentColor: '#4ade80',
    levels: 5,
    bossName: 'The Continental Drake',
  },
  {
    id: 2,
    name: 'Oceans & Waterways',
    subject: 'Oceans & Waterways',
    description: "Dive into the world's oceans, seas, rivers, and lakes",
    icon: '🌊',
    accentColor: '#4ade80',
    levels: 5,
    bossName: 'The Abyssal Leviathan',
  },
  {
    id: 3,
    name: 'Climates & Biomes',
    subject: 'Climates & Biomes',
    description: 'Journey through deserts, rainforests, tundra, and volcanoes',
    icon: '🌋',
    accentColor: '#4ade80',
    levels: 5,
    bossName: 'The Stormcaller',
  },
  {
    id: 4,
    name: 'Flags & Capitals',
    subject: 'Flags & Capitals',
    description: "Master the capitals and flags of the world's nations",
    icon: '🏛️',
    accentColor: '#4ade80',
    levels: 5,
    bossName: 'The Grand Sovereign',
  },
];

export const RANK_NAMES = [
  'Scout',
  'Ranger',
  'Explorer',
  'Geographer',
  'Cartographer',
  'Navigator',
  'Pioneer',
  'Adventurer',
  'Expeditioner',
  'GeoMaster',
];

export const RANK_THRESHOLDS = [0, 100, 250, 500, 1000, 2000, 3500, 5000, 7500, 10000];

export function getRankLevel(points: number): number {
  let rank = 1;
  for (let i = 1; i < RANK_THRESHOLDS.length; i++) {
    if (points >= RANK_THRESHOLDS[i]) rank = i + 1;
    else break;
  }
  return rank;
}

export function getRankName(points: number): string {
  return RANK_NAMES[getRankLevel(points) - 1];
}

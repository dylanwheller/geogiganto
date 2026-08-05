export type Achievement = {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'progress' | 'mastery' | 'streak' | 'social';
};

export const ACHIEVEMENTS: Achievement[] = [
  { id: 'first_correct',   title: 'First Steps',          description: 'Answer your first question correctly',             icon: '🌟', category: 'progress' },
  { id: 'world1_complete', title: 'Continental Conqueror', description: 'Complete all levels in Continents & Countries',    icon: '🌍', category: 'progress' },
  { id: 'world2_complete', title: 'Ocean Pioneer',         description: 'Complete all levels in Oceans & Waterways',        icon: '🌊', category: 'progress' },
  { id: 'world3_complete', title: 'Biome Ranger',          description: 'Complete all levels in Climates & Biomes',         icon: '🌋', category: 'progress' },
  { id: 'world4_complete', title: 'Flag Bearer',           description: 'Complete all levels in Flags & Capitals',          icon: '🏛️', category: 'progress' },
  { id: 'all_worlds',      title: 'Apex Geographer',       description: 'Complete all four worlds',                         icon: '🏆', category: 'mastery'  },
  { id: 'boss_first',      title: 'Drake Slayer',          description: 'Defeat your first boss',                           icon: '⚔️', category: 'mastery'  },
  { id: 'boss_all',        title: 'World Dominator',       description: 'Defeat all four world bosses',                     icon: '👑', category: 'mastery'  },
  { id: 'streak_10',       title: 'On The Map!',           description: 'Get a 10-question answer streak',                  icon: '🔥', category: 'streak'   },
  { id: 'perfect_level',   title: 'Flawless',              description: 'Complete a level with 10/10 correct answers',      icon: '⭐', category: 'mastery'  },
  { id: '100_questions',   title: '100 Countries',         description: 'Answer 100 questions correctly',                   icon: '💯', category: 'progress' },
  { id: '500_questions',   title: 'Globe Trotter',         description: 'Answer 500 questions correctly',                   icon: '🧠', category: 'progress' },
  { id: 'login_7',         title: 'Cartographer',          description: 'Log in 7 days in a row',                          icon: '📅', category: 'social'   },
];

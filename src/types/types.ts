export type LetterStatus = 'available' | 'unset' | 'set' | 'success' | 'wrong' | 'failure';

export interface Cell {
  letter: string;
  status: LetterStatus;
}

export interface WordleBoard {
  [key: number]: Cell[];
}

export interface WordleKeyboard {
  [key: string]: LetterStatus;
}
export interface Stats {
  played: number;
  win: number;
  currentStreak: number;
  maxStreak: number;
}

export interface GuessStats {
  attempt: number;
  value: number;
}

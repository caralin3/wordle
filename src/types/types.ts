import { ColorStatusTheme } from '../appearance';

export type LetterStatus = keyof typeof ColorStatusTheme;

export interface Cell {
  letter: string;
  status: LetterStatus;
}

export interface WordleBoard {
  [key: number]: Cell[];
}

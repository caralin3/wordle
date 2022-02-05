import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GuessStats, Stats } from '../types';

export interface StatisticsState {
  guesses: GuessStats[];
  stats: Stats;
  wins: number;
}

const initialState: StatisticsState = {
  guesses: [
    { attempt: 1, value: 0 },
    { attempt: 2, value: 0 },
    { attempt: 3, value: 0 },
    { attempt: 4, value: 0 },
    { attempt: 5, value: 0 },
    { attempt: 6, value: 0 },
  ],
  stats: {
    played: 0,
    win: 0,
    currentStreak: 0,
    maxStreak: 0,
  },
  wins: 0,
};

export const StatisticsSlice = createSlice({
  name: 'Statistics',
  initialState,
  reducers: {
    resetStatistics: () => initialState,
    setStats: (state, action: PayloadAction<Stats>) => {
      state.stats = action.payload;
    },
    setGuesses: (state, action: PayloadAction<GuessStats[]>) => {
      state.guesses = action.payload;
    },
    updateGuess: (state, action: PayloadAction<number>) => {
      const index = action.payload - 1;
      const value = state.guesses[index].value + 1;
      state.guesses[index] = {
        ...state.guesses[index],
        value,
      };
    },
    updateWinStats: (state) => {
      const plays = state.stats.played + 1;
      const wins = state.wins + 1;
      state.wins = wins;
      state.stats = {
        played: plays,
        win: Math.floor((wins / plays) * 100),
        currentStreak: state.stats.currentStreak + 1,
        maxStreak:
          state.stats.currentStreak + 1 > state.stats.maxStreak ? state.stats.currentStreak + 1 : state.stats.maxStreak,
      };
    },
    updateLossStats: (state) => {
      const plays = state.stats.played + 1;
      state.stats = {
        played: state.stats.played + 1,
        win: Math.floor((state.wins / plays) * 100),
        currentStreak: 0,
        maxStreak: state.stats.maxStreak,
      };
    },
  },
});

export const { resetStatistics, setGuesses, setStats, updateGuess, updateLossStats, updateWinStats } =
  StatisticsSlice.actions;

export default StatisticsSlice.reducer;

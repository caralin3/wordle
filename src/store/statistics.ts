import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GuessStats, Stats } from '../types';
import { MAX_ATTEMPTS } from '../utils';

export interface StatisticsState {
  guesses: GuessStats;
  stats: Stats;
}

function initGuesses() {
  const guesses: GuessStats = {};
  for (let i = 0; i < MAX_ATTEMPTS; i++) {
    guesses[i + 1] = 0;
  }
  return guesses;
}

const initialState: StatisticsState = {
  guesses: initGuesses(),
  stats: {
    played: 0,
    win: 0,
    currentStreak: 0,
    maxStreak: 0,
  },
};

export const StatisticsSlice = createSlice({
  name: 'Statistics',
  initialState,
  reducers: {
    resetStatistics: () => initialState,
    setStats: (state, action: PayloadAction<Stats>) => {
      state.stats = action.payload;
    },
    setGuesses: (state, action: PayloadAction<GuessStats>) => {
      state.guesses = action.payload;
    },
  },
});

export const { resetStatistics, setStats, setGuesses } = StatisticsSlice.actions;

export default StatisticsSlice.reducer;

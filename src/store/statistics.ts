import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GuessStats, Stats } from '../types';
import { MAX_ATTEMPTS } from '../utils';

export interface StatisticsState {
  guesses: GuessStats[];
  stats: Stats;
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
  },
});

export const { resetStatistics, setStats, setGuesses } = StatisticsSlice.actions;

export default StatisticsSlice.reducer;

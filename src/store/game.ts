import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cell, WordleBoard } from '../types';
import { MAX_ATTEMPTS } from '../utils';

export interface GameState {
  board: WordleBoard;
  currentAttempt: number;
  currentGuess: string;
}

const initialState: GameState = {
  board: {},
  currentAttempt: 0,
  currentGuess: '',
};

export const GameSlice = createSlice({
  name: 'Game',
  initialState,
  reducers: {
    resetBoard: (state) => {
      const rows: WordleBoard = {};
      for (let i = 0; i < MAX_ATTEMPTS; i++) {
        rows[i] = [];
      }
      state.board = rows;
      state.currentAttempt = 0;
      state.currentGuess = '';
    },
    resetCurrentGuess: (state) => {
      state.currentGuess = '';
    },
    addLetter: (state, action: PayloadAction<string>) => {
      state.currentGuess += action.payload;
      const word: Cell[] = [];
      for (let letter of state.currentGuess) {
        word.push({
          letter,
          status: 'set',
        });
      }
      state.board[state.currentAttempt] = word;
    },
    removeLetter: (state) => {
      state.currentGuess = state.currentGuess.slice(0, -1);
      const word: Cell[] = [];
      for (let letter of state.currentGuess) {
        word.push({
          letter,
          status: 'set',
        });
      }
      state.board[state.currentAttempt] = word;
    },
    incrementAttempt: (state) => {
      state.currentAttempt++;
    },
    submitAttempt: (
      state,
      action: PayloadAction<{
        attempt: number;
        result: Cell[];
      }>
    ) => {
      const { attempt, result } = action.payload;
      state.board[attempt] = result;
    },
  },
});

export const { resetBoard, addLetter, resetCurrentGuess, removeLetter, incrementAttempt, submitAttempt } =
  GameSlice.actions;

export default GameSlice.reducer;

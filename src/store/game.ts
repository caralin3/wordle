import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cell, WordleBoard, WordleKeyboard } from '../types';
import { alphabet, MAX_ATTEMPTS } from '../utils';

export interface GameState {
  board: WordleBoard;
  currentAttempt: number;
  currentGuess: string;
  keyboard: WordleKeyboard;
}

const initialState: GameState = {
  board: {},
  currentAttempt: 0,
  currentGuess: '',
  keyboard: alphabet,
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
      state.currentAttempt = initialState.currentAttempt;
      state.currentGuess = initialState.currentGuess;
      state.keyboard = alphabet;
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
      state.currentAttempt += 1;

      const failureRes = result.filter((cell) => cell.status === 'failure');
      const wrongRes = result.filter((cell) => cell.status === 'wrong');
      const successRes = result.filter((cell) => cell.status === 'success');

      failureRes.forEach((cell) => {
        state.keyboard[cell.letter] = cell.status;
      });
      wrongRes.forEach((cell) => {
        state.keyboard[cell.letter] = cell.status;
      });
      successRes.forEach((cell) => {
        state.keyboard[cell.letter] = cell.status;
      });
    },
  },
});

export const { resetBoard, addLetter, resetCurrentGuess, removeLetter, incrementAttempt, submitAttempt } =
  GameSlice.actions;

export default GameSlice.reducer;

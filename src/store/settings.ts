import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SettingsState {
  darkMode: boolean;
  wordLength: number;
}

const initialState: SettingsState = {
  darkMode: false,
  wordLength: 5,
};

export const SettingsSlice = createSlice({
  name: 'Settings',
  initialState,
  reducers: {
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload;
    },
    setWordLength: (state, action: PayloadAction<number>) => {
      state.wordLength = action.payload;
    },
  },
});

export const { setWordLength } = SettingsSlice.actions;

export default SettingsSlice.reducer;

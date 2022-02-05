import { DarkTheme, DefaultTheme } from 'react-native-paper';
import { darkColors, lightColors } from './colors';

export const defaultTheme = {
  ...DefaultTheme,
  roundness: 10,
  colors: {
    ...DefaultTheme.colors,
    ...lightColors,
    primary: '#0e8f33',
  },
};

export const darkTheme = {
  ...DarkTheme,
  roundness: 10,
  colors: {
    ...DarkTheme.colors,
    ...darkColors,
    primary: '#0e8f33',
    background: '#494949',
  },
};

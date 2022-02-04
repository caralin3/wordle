import { DarkTheme, DefaultTheme } from 'react-native-paper';
import { customColors } from './colors';

export const defaultTheme = {
  ...DefaultTheme,
  roundness: 10,
  colors: {
    ...DefaultTheme.colors,
    ...customColors,
  },
};

export const darkTheme = {
  ...DarkTheme,
  roundness: 10,
  colors: {
    ...DarkTheme.colors,
    ...customColors,
  },
};

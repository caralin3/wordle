import { DarkTheme, DefaultTheme } from 'react-native-paper';
import { customColors } from './colors';

export const defaultTheme = {
  ...DefaultTheme,
  roundness: 10,
  colors: {
    ...DefaultTheme.colors,
    ...customColors,
    gray: '#6b6e6c',
    white: '#fff',
  },
};

export const darkTheme = {
  ...DarkTheme,
  roundness: 10,
  colors: {
    ...DarkTheme.colors,
    ...customColors,
    gray: '#6b6e6c',
    white: '#fff',
  },
};

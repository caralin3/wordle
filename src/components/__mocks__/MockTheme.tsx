import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { defaultTheme } from '../../appearance';

export const MockTheme = ({ children }) => <PaperProvider theme={defaultTheme}>{children}</PaperProvider>;

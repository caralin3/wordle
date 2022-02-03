import { StyleSheet } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { HomeScreen } from './src/screens';

export default function App() {
  const theme = {
    ...DefaultTheme,
    roundness: 10,
    colors: {
      ...DefaultTheme.colors,
      accent: '#f2c511',
      background: '#fff',
      disabled: '#312b3b',
      error: '#bebbc4',
      primary: '#0e8f33',
      placeholder: '#72b9e8',
    },
  };

  return (
    <PaperProvider theme={theme}>
      <HomeScreen />
    </PaperProvider>
  );
}

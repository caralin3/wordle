import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { darkTheme, defaultTheme } from './src/appearance';
import { GameScreen } from './src/screens';
import { store } from './src/store';

export default function App() {
  const persistor = persistStore(store);
  const { darkMode } = store.getState().settings;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={darkMode ? darkTheme : defaultTheme}>
          <GameScreen />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}

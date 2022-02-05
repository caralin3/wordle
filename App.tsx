import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { darkTheme, defaultTheme } from './src/appearance';
import { PreferencesContext } from './src/context';
import { GameScreen } from './src/screens';
import { store } from './src/store';

export default function App() {
  const persistor = persistStore(store);
  const [darkMode, setDarkMode] = React.useState(false);

  let theme = darkMode ? darkTheme : defaultTheme;

  const toggleTheme = React.useCallback(() => {
    return setDarkMode(!darkMode);
  }, [darkMode]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      darkMode,
    }),
    [toggleTheme, darkMode]
  );

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PreferencesContext.Provider value={preferences}>
          <PaperProvider theme={theme}>
            <GameScreen />
          </PaperProvider>
        </PreferencesContext.Provider>
      </PersistGate>
    </Provider>
  );
}

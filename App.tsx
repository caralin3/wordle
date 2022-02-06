import * as SplashScreen from 'expo-splash-screen';
import React from 'react';
import { View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { darkTheme, defaultTheme } from './src/appearance';
import { PreferencesContext } from './src/context';
import { GameScreen } from './src/screens';
import { store } from './src/store';
import * as gameState from './src/store/game';

export default function App() {
  const persistor = persistStore(store);
  const [appIsReady, setAppIsReady] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await store.dispatch(gameState.setAnswers(store.getState().settings.wordLength));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = React.useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

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

  if (!appIsReady) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PreferencesContext.Provider value={preferences}>
          <PaperProvider theme={theme}>
            <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
              <GameScreen />
            </View>
          </PaperProvider>
        </PreferencesContext.Provider>
      </PersistGate>
    </Provider>
  );
}

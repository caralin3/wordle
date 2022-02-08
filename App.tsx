import AppLoading from 'expo-app-loading';
import { Asset } from 'expo-asset';
import * as SplashScreen from 'expo-splash-screen';
import React from 'react';
import { Image, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { darkTheme, defaultTheme } from './src/appearance';
import { PreferencesContext } from './src/context';
import { SplashLoadingScreen, GameScreen } from './src/screens';
import { store } from './src/store';
import * as gameState from './src/store/game';

function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default function App() {
  const persistor = persistStore(store);
  const [appIsReady, setAppIsReady] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);

  async function loadAssetsAsync() {
    const imageAssets = cacheImages([
      require('./src/appearance/images/correct-example.png'),
      require('./src/appearance/images/failure-example.png'),
      require('./src/appearance/images/wordle.png'),
      require('./src/appearance/images/wrong-example.png'),
    ]);

    await Promise.all([...imageAssets]);
  }

  async function startAsync() {
    try {
      await SplashScreen.preventAutoHideAsync();
      await loadAssetsAsync();
      await store.dispatch(gameState.setAnswers(store.getState().settings.wordLength));
    } catch (e) {
      console.warn(e);
    } finally {
      setAppIsReady(true);
    }
  }

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
    return <AppLoading startAsync={startAsync} onFinish={() => setAppIsReady(true)} onError={console.warn} />;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={<SplashLoadingScreen />} persistor={persistor}>
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

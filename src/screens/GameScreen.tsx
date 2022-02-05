import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import {
  Board,
  Button,
  HelperModal,
  IconButton,
  Keyboard,
  Row,
  SettingsModal,
  StatisticsModal,
  Text,
  Toast,
} from '../components';
import { RootState } from '../store';
import * as gameState from '../store/game';
import * as settingsState from '../store/settings';
import * as statisticsState from '../store/statistics';
import { isValidWord, wordle } from '../utils';

export const GameScreen: React.FC = () => {
  const dispatch = useDispatch();

  const board = useSelector((state: RootState) => state.game.board);
  const keyboard = useSelector((state: RootState) => state.game.keyboard);
  const currentAttempt = useSelector((state: RootState) => state.game.currentAttempt);
  const currentGuess = useSelector((state: RootState) => state.game.currentGuess);
  const darkMode = useSelector((state: RootState) => state.settings.darkMode);
  const wordLength = useSelector((state: RootState) => state.settings.wordLength);
  const stats = useSelector((state: RootState) => state.statistics.stats);
  const guesses = useSelector((state: RootState) => state.statistics.guesses);

  const [showNotFound, setShowNotFound] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [showFailure, setShowFailure] = React.useState(false);
  const [showHelp, setShowHelp] = React.useState(false);
  const [showSettings, setShowSettings] = React.useState(false);
  const [showStatistics, setShowStatistics] = React.useState(false);

  // React.useEffect(() => {
  //   dispatch(gameState.resetBoard());
  //   dispatch(settingsState.setWordLength(5));
  //   dispatch(statisticsState.resetStatistics());
  // }, []);

  const answer = 'rusty';

  const handleSuccess = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      dispatch(statisticsState.updateWinStats());
      dispatch(statisticsState.updateGuess(currentAttempt + 1));
    }, 1000);
    setTimeout(() => setShowStatistics(true), 1000);
  };

  const handleFailure = () => {
    setShowFailure(true);
    setTimeout(() => {
      setShowFailure(false);
      dispatch(statisticsState.updateLossStats());
      setShowStatistics(true);
    }, 2000);
  };

  const handleSubmit = () => {
    if (isValidWord(currentGuess)) {
      const result = wordle(currentGuess, answer);
      dispatch(gameState.submitAttempt({ attempt: currentAttempt, result }));
      const correct = result.filter((letter) => letter.status === 'success');
      if (correct.length === wordLength) {
        handleSuccess();
      } else {
        // wrong on last attempt
        if (currentAttempt === 5) {
          handleFailure();
        }
      }
      dispatch(gameState.resetCurrentGuess());
    } else {
      setShowNotFound(true);
      setTimeout(() => setShowNotFound(false), 1000);
    }
  };

  const handleNewGame = () => {
    setShowStatistics(false);
    dispatch(gameState.resetBoard());
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text bold size='xxxl' gutters={{ bottom: 'md' }}>
          Wordle
        </Text>
        <Board board={board} size={wordLength} />
        <Row style={styles.actions} justify='space-between' guttersHorizontal='lg'>
          <IconButton iconName='help' onPress={() => setShowHelp(true)} />
          <Button title='submit' disabled={currentGuess.length !== wordLength} onPress={handleSubmit} />
          <IconButton iconName='cog' onPress={() => setShowSettings(true)} />
        </Row>
        <Keyboard
          keyboard={keyboard}
          disabled={currentGuess.length === wordLength}
          onBackspace={() => dispatch(gameState.removeLetter())}
          onPress={(letter) => dispatch(gameState.addLetter(letter))}
        />
        <HelperModal visible={showHelp} onDismiss={() => setShowHelp(false)} />
        <SettingsModal
          darkMode={darkMode}
          visible={showSettings}
          onDismiss={() => setShowSettings(false)}
          onSetDarkMode={(val) => dispatch(settingsState.setDarkMode(val))}
          onSetWordLength={(val) => dispatch(settingsState.setWordLength(Number(val)))}
          openSettings={() => setShowHelp(true)}
          openStatistics={() => setShowStatistics(true)}
          wordLength={(wordLength || 5).toString()}
        />
        <StatisticsModal
          stats={stats}
          guesses={guesses}
          visible={showStatistics}
          onDismiss={() => setShowStatistics(false)}
          onNewGame={handleNewGame}
        />
        <Toast visible={showFailure} onDismiss={() => setShowFailure(false)} message={answer.toUpperCase()} />
        <Toast
          visible={showSuccess}
          onDismiss={() => setShowSuccess(false)}
          message='You Got It Right!'
          type='success'
        />
        <Toast visible={showNotFound} onDismiss={() => setShowNotFound(false)} message='Word Not Valid' />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
  actions: {
    width: '100%',
  },
});

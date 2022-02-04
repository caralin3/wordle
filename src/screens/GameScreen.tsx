import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
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
import { isValidWord, wordle } from '../utils';

/**
 * @TODO:
 * Helper modal
 *
 */

export const GameScreen: React.FC = () => {
  const dispatch = useDispatch();

  const board = useSelector((state: RootState) => state.game.board);
  const keyboard = useSelector((state: RootState) => state.game.keyboard);
  const currentAttempt = useSelector((state: RootState) => state.game.currentAttempt);
  const currentGuess = useSelector((state: RootState) => state.game.currentGuess);
  const darkMode = useSelector((state: RootState) => state.settings.darkMode);
  const wordLength = useSelector((state: RootState) => state.settings.wordLength);

  const [visible, setVisible] = React.useState(false);
  const [showHelp, setShowHelp] = React.useState(false);
  const [showSettings, setShowSettings] = React.useState(false);
  const [showStatistics, setShowStatistics] = React.useState(false);

  React.useEffect(() => {
    // dispatch(gameState.resetBoard());
    dispatch(settingsState.setWordLength(4));
  }, []);

  const answer = 'rusty';

  const handleSubmit = () => {
    // if (isValidWord(currentGuess)) {
    const result = wordle(currentGuess, answer);
    dispatch(gameState.submitAttempt({ attempt: currentAttempt, result }));
    dispatch(gameState.incrementAttempt());
    const correct = result.filter((letter) => letter.status === 'success');
    if (correct.length === wordLength) {
      Alert.alert('Sucess');
      // dispatch(gameState.resetBoard());
    }
    dispatch(gameState.resetCurrentGuess());
    // } else {
    //   setVisible(true);
    // }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text bold size='xxl' gutters={{ bottom: 'md', top: 'md' }}>
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
        <Toast visible={visible} onDismiss={() => setVisible(false)} message='Word not found.' />
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
        <StatisticsModal visible={showStatistics} onDismiss={() => setShowStatistics(false)} />
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

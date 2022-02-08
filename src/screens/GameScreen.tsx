import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';
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
import { fiveLetterWords } from '../data';
import { RootState } from '../store';
import * as gameState from '../store/game';
import * as settingsState from '../store/settings';
import * as statisticsState from '../store/statistics';
import { isValidWord, wordle } from '../utils';

export const GameScreen: React.FC = () => {
  const { colors } = useTheme();
  const dispatch = useDispatch();

  const board = useSelector((state: RootState) => state.game.board);
  const keyboard = useSelector((state: RootState) => state.game.keyboard);
  const answers = useSelector((state: RootState) => state.game.answers);
  const currentAttempt = useSelector((state: RootState) => state.game.currentAttempt);
  const currentGuess = useSelector((state: RootState) => state.game.currentGuess);
  const answersIndex = useSelector((state: RootState) => state.game.answersIndex);
  const wordLength = useSelector((state: RootState) => state.settings.wordLength);
  const stats = useSelector((state: RootState) => state.statistics.stats);
  const guesses = useSelector((state: RootState) => state.statistics.guesses);

  const [answer, setAnswer] = React.useState('');
  const [showNotFound, setShowNotFound] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [showFailure, setShowFailure] = React.useState(false);
  const [showHelp, setShowHelp] = React.useState(false);
  const [showSettings, setShowSettings] = React.useState(false);
  const [showStatistics, setShowStatistics] = React.useState(false);

  // React.useEffect(() => {
  //   dispatch(gameState.resetGame());
  //   dispatch(statisticsState.resetStatistics());
  // }, []);

  React.useEffect(() => {
    dispatch(gameState.setAnswers(wordLength));
    setAnswer(answers[answersIndex]);
  }, []);

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

  const words = {
    4: fiveLetterWords,
    5: fiveLetterWords,
    6: fiveLetterWords,
    7: fiveLetterWords,
  };

  const handleSubmit = () => {
    if (isValidWord(currentGuess, words[wordLength])) {
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

  const updateWordLength = (val: string) => {
    dispatch(settingsState.setWordLength(Number(val)));
    dispatch(gameState.setAnswers(Number(val)));
    dispatch(gameState.resetBoard());
    setAnswer(answers[0]);
  };

  const handleNewGame = () => {
    setShowStatistics(false);
    dispatch(gameState.resetBoard());
    dispatch(gameState.incrementAnswersIndex());
    setAnswer(answers[answersIndex + 1]);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Image source={require('../appearance/images/wordle.png')} resizeMethod='resize' style={styles.image} />
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
          visible={showSettings}
          onDismiss={() => setShowSettings(false)}
          onSetWordLength={updateWordLength}
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
        <Toast
          visible={showFailure}
          onDismiss={() => setShowFailure(false)}
          message={answer.toUpperCase()}
          type='error'
        />
        <Toast visible={showSuccess} onDismiss={() => setShowSuccess(false)} message='Correct!' />
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
    flex: 1,
    justifyContent: 'center',
  },
  actions: {
    width: '100%',
  },
  image: {
    height: 75,
    resizeMode: 'contain',
    width: 250,
  },
});

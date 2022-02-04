import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Board, Button, IconButton, Keyboard, Row, Toast } from '../components';
import { RootState } from '../store';
import * as gameState from '../store/game';
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
  const wordLength = useSelector((state: RootState) => state.settings.wordLength);

  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    dispatch(gameState.resetBoard());
  }, []);

  const answer = 'rusty';

  const handleSubmit = () => {
    if (isValidWord(currentGuess)) {
      const result = wordle(currentGuess, answer);
      dispatch(gameState.submitAttempt({ attempt: currentAttempt, result }));
      dispatch(gameState.incrementAttempt());
      const correct = result.filter((letter) => letter.status === 'success');
      if (correct.length === wordLength) {
        Alert.alert('Sucess');
        // dispatch(gameState.resetBoard());
      }
      dispatch(gameState.resetCurrentGuess());
    } else {
      setVisible(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wordle</Text>
      <Board board={board} size={wordLength} />
      <Row style={styles.actions} justify='space-between' guttersHorizontal='lg'>
        <IconButton iconName='cog' />
        <Button title='submit' disabled={currentGuess.length !== wordLength} onPress={handleSubmit} />
        <IconButton iconName='home' />
      </Row>
      <Keyboard
        keyboard={keyboard}
        disabled={currentGuess.length === wordLength}
        onBackspace={() => dispatch(gameState.removeLetter())}
        onPress={(letter) => dispatch(gameState.addLetter(letter))}
      />
      <Toast visible={visible} onDismiss={() => setVisible(false)} message='Word not found.' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  actions: {
    width: '100%',
  },
});
